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
      await renderSpread(1);
      loading.style.display = 'none';
      updateUI();
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
  }

  /* ---- Render a single PDF page to a data URL (cached) ---- */
  async function renderPage(num) {
    if (num < 1 || num > totalPages) return null;
    if (rendered[num]) return rendered[num];
    const page = await pdfDoc.getPage(num);
    const baseViewport = page.getViewport({ scale: 1 });
    // Render at a crisp scale based on the viewport height
    const targetH = Math.min(1400, Math.max(900, window.innerHeight * 1.4));
    const scale = targetH / baseViewport.height;
    const viewport = page.getViewport({ scale });
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = viewport.width;
    canvas.height = viewport.height;
    await page.render({ canvasContext: ctx, viewport }).promise;
    const url = canvas.toDataURL('image/jpeg', 0.85);
    rendered[num] = url;
    return url;
  }

  /* ---- Build the visible spread (two pages on desktop, one on mobile) ---- */
  async function renderSpread(leftPage) {
    book.innerHTML = '';
    book.classList.toggle('two-page', twoPage);

    if (twoPage) {
      // Show pages leftPage and leftPage+1 (cover shows alone on page 1)
      const lUrl = await renderPage(leftPage);
      const rUrl = await renderPage(leftPage + 1);

      const spread = document.createElement('div');
      spread.className = 'fb-spread';

      const lDiv = document.createElement('div');
      lDiv.className = 'fb-page fb-page-left';
      if (lUrl) lDiv.innerHTML = '<img src="' + lUrl + '" alt="Page ' + leftPage + '">';
      else lDiv.classList.add('fb-page-blank');

      const rDiv = document.createElement('div');
      rDiv.className = 'fb-page fb-page-right';
      if (rUrl) rDiv.innerHTML = '<img src="' + rUrl + '" alt="Page ' + (leftPage+1) + '">';
      else rDiv.classList.add('fb-page-blank');

      spread.appendChild(lDiv);
      spread.appendChild(rDiv);
      book.appendChild(spread);
    } else {
      const url = await renderPage(leftPage);
      const spread = document.createElement('div');
      spread.className = 'fb-spread single';
      const pg = document.createElement('div');
      pg.className = 'fb-page';
      if (url) pg.innerHTML = '<img src="' + url + '" alt="Page ' + leftPage + '">';
      spread.appendChild(pg);
      book.appendChild(spread);
    }
    book.style.transform = 'scale(' + zoom + ')';
    // preload neighbors
    renderPage(leftPage + 2); renderPage(leftPage - 1);
  }

  /* ---- Page turn with flip animation ---- */
  async function turn(dir) {
    if (isAnimating || !pdfDoc) return;
    const step = twoPage ? 2 : 1;
    let next = current + dir * step;
    if (next < 1) next = 1;
    const maxStart = twoPage ? (totalPages % 2 === 0 ? totalPages - 1 : totalPages) : totalPages;
    if (next > maxStart) return;
    if (next === current) return;

    isAnimating = true;
    // Animate the book with a quick flip class
    book.classList.add(dir > 0 ? 'flip-next' : 'flip-prev');
    setTimeout(async () => {
      current = next;
      await renderSpread(current);
      book.classList.remove('flip-next', 'flip-prev');
      isAnimating = false;
      updateUI();
    }, 280);
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
