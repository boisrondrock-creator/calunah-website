/* ============================================================
   CALUNAH — Flipbook Magazine Reader
   Renders a PDF as a realistic page-flipping book using PDF.js.
   - Desktop: two-page spread with a 3D page-curl flip animation
   - Mobile:  single page, swipe / tap to turn
   No server-side conversion needed — pages render on the fly.
   ============================================================ */
(function () {
  'use strict';

  // Configure PDF.js worker
  if (window.pdfjsLib) {
    pdfjsLib.GlobalWorkerOptions.workerSrc =
      'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';
  }

  const modal   = document.getElementById('flipbook-modal');
  if (!modal) return;

  const stage     = document.getElementById('fb-stage');
  const bookArea  = document.getElementById('fb-book-area');
  const book      = document.getElementById('fb-book');
  const loading   = document.getElementById('fb-loading');
  const titleEl   = document.getElementById('fb-title');
  const pagenum   = document.getElementById('fb-pagenum');
  const totalEl   = document.getElementById('fb-total');
  const slider    = document.getElementById('fb-slider');
  const btnPrev   = document.getElementById('fb-prev');
  const btnNext   = document.getElementById('fb-next');
  const btnClose  = document.getElementById('fb-close');
  const btnZoomIn = document.getElementById('fb-zoom-in');
  const btnZoomOut= document.getElementById('fb-zoom-out');
  const btnDownload = document.getElementById('fb-download');

  let pdfDoc = null;
  let totalPages = 0;
  let current = 1;            // left page of the current spread (odd page)
  let rendered = {};          // cache: page number -> dataURL
  const renderPromises = {};  // num -> in-flight render Promise (dedupe)
  let zoom = 1;
  let isAnimating = false;
  let twoPage = window.innerWidth > 900;

  /* ---- Open / close ---- */
  async function openFlipbook(pdfUrl, title) {
    titleEl.textContent = title || 'CALUNAH Magazine';
    if (btnDownload) btnDownload.href = pdfUrl;
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
    loading.style.display = 'flex';
    book.innerHTML = '';
    rendered = {};
    current = 1;
    twoPage = window.innerWidth > 900;

    try {
      const task = pdfjsLib.getDocument(pdfUrl);
      pdfDoc = await task.promise;
      totalPages = pdfDoc.numPages;
      slider.min = 1;
      slider.max = totalPages;
      slider.value = 1;
      totalEl.textContent = 'of ' + totalPages;
      // Render the first spread, then warm the next several pages up front
      // so the first flips are instant.
      await Promise.all([renderPage(1), renderPage(2)]);
      await renderSpread(1);
      loading.style.display = 'none';
      updateUI();
      for (let n = 3; n <= Math.min(8, totalPages); n++) renderPage(n);
    } catch (e) {
      loading.innerHTML = '<p style="color:#fff;text-align:center">Could not load the magazine.<br>' +
        '<a href="' + pdfUrl + '" target="_blank" style="color:#e8c84a;text-decoration:underline">Open the PDF directly</a></p>';
      console.error('Flipbook load error:', e);
    }
  }

  function closeFlipbook() {
    modal.classList.remove('open');
    document.body.style.overflow = '';
    pdfDoc = null;
    for (const k in renderPromises) delete renderPromises[k];
  }

  /* ---- Render a single PDF page to a data URL (cached + deduped) ---- */
  async function renderPage(num) {
    if (num < 1 || num > totalPages) return null;
    if (rendered[num]) return rendered[num];
    if (renderPromises[num]) return renderPromises[num];

    renderPromises[num] = (async () => {
      const page = await pdfDoc.getPage(num);
      const baseViewport = page.getViewport({ scale: 1 });
      // Crisp but capped resolution — large canvases are slow to render & decode.
      // DPR-aware up to 2x, target ~1200px tall.
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const targetH = 1200 * dpr;
      const scale = Math.min(targetH / baseViewport.height, 2.5);
      const viewport = page.getViewport({ scale });
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d', { alpha: false });
      canvas.width = viewport.width;
      canvas.height = viewport.height;
      await page.render({ canvasContext: ctx, viewport }).promise;
      const url = canvas.toDataURL('image/jpeg', 0.82);
      rendered[num] = url;
      delete renderPromises[num];
      return url;
    })();
    return renderPromises[num];
  }

  /* ---- Build the visible spread. Uses cached images instantly; if a page
         isn't cached yet it shows immediately and fills in when ready. ---- */
  async function renderSpread(leftPage) {
    book.innerHTML = '';
    book.classList.toggle('two-page', twoPage);

    const pageEls = {};   // page number -> img container, so we can fill async ones

    function makePage(num, cls) {
      const div = document.createElement('div');
      div.className = 'fb-page ' + cls;
      const cachedUrl = rendered[num];
      if (cachedUrl) {
        div.innerHTML = '<img src="' + cachedUrl + '" alt="Page ' + num + '">';
      } else if (num >= 1 && num <= totalPages) {
        div.classList.add('fb-page-rendering');
        pageEls[num] = div;   // fill in below
      } else {
        div.classList.add('fb-page-blank');
      }
      return div;
    }

    const spread = document.createElement('div');
    spread.className = twoPage ? 'fb-spread' : 'fb-spread single';

    if (twoPage) {
      spread.appendChild(makePage(leftPage, 'fb-page-left'));
      spread.appendChild(makePage(leftPage + 1, 'fb-page-right'));
    } else {
      spread.appendChild(makePage(leftPage, ''));
    }
    book.appendChild(spread);
    book.style.transform = 'scale(' + zoom + ')';

    // Fill any not-yet-cached pages as they finish (rare — usually pre-warmed).
    // Guard with the spread we built, so a fast flip doesn't fill a stale page.
    const spreadToken = spread;
    Object.keys(pageEls).forEach(async (numStr) => {
      const num = parseInt(numStr, 10);
      const url = await renderPage(num);
      if (url && pageEls[num] && spreadToken.isConnected) {
        pageEls[num].classList.remove('fb-page-rendering');
        pageEls[num].innerHTML = '<img src="' + url + '" alt="Page ' + num + '">';
      }
    });

    // Keep neighbours warm
    warmNeighbors(leftPage, 1);
  }

  /* ---- Page turn — instant when pages are cached ---- */
  async function turn(dir) {
    if (isAnimating || !pdfDoc) return;
    const step = twoPage ? 2 : 1;
    let next = current + dir * step;
    if (next < 1) next = 1;
    const maxStart = twoPage ? (totalPages % 2 === 0 ? totalPages - 1 : totalPages) : totalPages;
    if (next > maxStart) return;
    if (next === current) return;

    isAnimating = true;

    // Are the destination pages already rendered? (the common case thanks to preloading)
    const needed = twoPage ? [next, next + 1] : [next];
    const cached = needed.every(n => n < 1 || n > totalPages || rendered[n]);

    if (cached) {
      // Instant: tiny flip animation, swap content mid-flip, done in ~180ms
      book.classList.add(dir > 0 ? 'flip-next' : 'flip-prev');
      setTimeout(() => {
        current = next;
        renderSpread(current);           // synchronous from cache
        book.classList.remove('flip-next', 'flip-prev');
        isAnimating = false;
        updateUI();
      }, 150);
    } else {
      // Not cached yet — render first (off-screen), THEN flip, so no frozen gap
      await Promise.all(needed.map(n => renderPage(n)));
      book.classList.add(dir > 0 ? 'flip-next' : 'flip-prev');
      setTimeout(() => {
        current = next;
        renderSpread(current);
        book.classList.remove('flip-next', 'flip-prev');
        isAnimating = false;
        updateUI();
      }, 150);
    }
    // Aggressively warm the next several spreads so future flips stay instant
    warmNeighbors(next, dir);
  }

  /* Pre-render pages around the current spread so flips never wait */
  function warmNeighbors(centerPage, dir) {
    const span = 4;  // pages ahead/behind to keep ready
    for (let i = 1; i <= span; i++) {
      renderPage(centerPage + i);
      renderPage(centerPage - i);
    }
  }

  function goTo(page) {
    if (!pdfDoc) return;
    const step = twoPage ? 2 : 1;
    // snap to left page of spread
    let target = twoPage ? (page % 2 === 0 ? page - 1 : page) : page;
    if (target < 1) target = 1;
    current = target;
    renderSpread(current).then(updateUI);
  }

  function updateUI() {
    if (twoPage) {
      const right = Math.min(current + 1, totalPages);
      pagenum.textContent = right > current ? ('Pages ' + current + '–' + right) : ('Page ' + current);
    } else {
      pagenum.textContent = 'Page ' + current;
    }
    slider.value = current;
    btnPrev.disabled = current <= 1;
    const maxStart = twoPage ? (totalPages % 2 === 0 ? totalPages - 1 : totalPages) : totalPages;
    btnNext.disabled = current >= maxStart;
  }

  /* ---- Zoom ---- */
  function setZoom(z) {
    zoom = Math.min(2.2, Math.max(0.6, z));
    book.style.transform = 'scale(' + zoom + ')';
  }

  /* ---- Events ---- */
  btnNext   && btnNext.addEventListener('click', () => turn(1));
  btnPrev   && btnPrev.addEventListener('click', () => turn(-1));
  btnClose  && btnClose.addEventListener('click', closeFlipbook);
  btnZoomIn && btnZoomIn.addEventListener('click', () => setZoom(zoom + 0.2));
  btnZoomOut&& btnZoomOut.addEventListener('click', () => setZoom(zoom - 0.2));
  slider    && slider.addEventListener('input', () => goTo(parseInt(slider.value, 10)));

  // Click left/right half of the book to turn
  bookArea && bookArea.addEventListener('click', (e) => {
    if (isAnimating) return;
    const rect = bookArea.getBoundingClientRect();
    const x = e.clientX - rect.left;
    if (x > rect.width * 0.5) turn(1); else turn(-1);
  });

  // Keyboard
  document.addEventListener('keydown', (e) => {
    if (!modal.classList.contains('open')) return;
    if (e.key === 'ArrowRight') turn(1);
    if (e.key === 'ArrowLeft')  turn(-1);
    if (e.key === 'Escape')     closeFlipbook();
  });

  // Swipe on touch devices
  let touchX = null;
  bookArea && bookArea.addEventListener('touchstart', (e) => { touchX = e.touches[0].clientX; }, { passive: true });
  bookArea && bookArea.addEventListener('touchend', (e) => {
    if (touchX === null) return;
    const dx = e.changedTouches[0].clientX - touchX;
    if (Math.abs(dx) > 50) turn(dx < 0 ? 1 : -1);
    touchX = null;
  }, { passive: true });

  // Re-layout on resize (switch between 1 and 2 pages)
  let rt;
  window.addEventListener('resize', () => {
    clearTimeout(rt);
    rt = setTimeout(() => {
      if (!pdfDoc) return;
      const wasTwo = twoPage;
      twoPage = window.innerWidth > 900;
      if (wasTwo !== twoPage) renderSpread(current).then(updateUI);
    }, 250);
  });

  // Expose globally so main.js can open it
  window.openFlipbook = openFlipbook;
})();
