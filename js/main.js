/* ============================================================
   CALUNAH Website, main.js  v3.0
   Club des Alumni de l'Université Adventiste d'Haïti
   501(c)(3) Non-Profit Organization
   ============================================================ */

'use strict';

/* ============================================================
   CALUNAH_CONFIG, Edit all site content here
   ============================================================ */
const CALUNAH_CONFIG = {

  /* ---------- Social Media Links ---------- */
  social: {
    facebook:  'https://www.facebook.com/calunah',
    instagram: 'https://www.instagram.com/calunah',
    twitter:   'https://twitter.com/calunah',
    youtube:   'https://www.youtube.com/channel/UCGtzefrtPJdErdghKKA2E8g'
  },

  /* ---------- Hero Stats ---------- */
  stats: [
    { value: 1993, label: 'Founded',            suffix: '',  icon: 'fas fa-calendar-alt'      },
    { value: 30,   label: 'Years of Service',   suffix: '+', icon: 'fas fa-history'           },
    { value: 500,  label: 'Active Members',     suffix: '+', icon: 'fas fa-users'             },
    { value: 6,    label: 'Active Chapters',     suffix: '',  icon: 'fas fa-globe'             },
    { value: 100,  label: 'Projects Funded',    suffix: '+', icon: 'fas fa-hand-holding-heart'}
  ],

  /* ---------- Executive Committee ---------- */
  committee: [
    {
      name:     'Dr. Roberne J. Saint Louis',
      role:     'Chairman',
      icon:     'fa-gavel',
      bio:      'Providing leadership and governance oversight for CALUNAH, guiding the organization\'s strategic vision and institutional integrity.',
      photo:    'images/team/chairman.avif',
      email:    'chairman@calunah.org',
      initials: 'RS'
    },
    {
      name:     'Nadine Benoit',
      role:     'Executive President',
      icon:     'fa-crown',
      bio:      'Leading CALUNAH\'s mission to unite and empower UNAH alumni worldwide through education, fellowship, and dedicated service.',
      photo:    'images/team/president.avif',
      email:    'president@calunah.org',
      initials: 'NB'
    },
    {
      name:     'Ethny Obas',
      role:     'Executive Vice President',
      icon:     'fa-shield-halved',
      bio:      'Supporting organizational leadership, coordinating chapter development, and ensuring CALUNAH\'s vision is executed across all regions.',
      photo:    'images/team/vp.avif',
      email:    'vp@calunah.org',
      initials: 'EO'
    },
    {
      name:     'Yannick Nozil',
      role:     'Executive Secretary',
      icon:     'fa-file-pen',
      bio:      'Managing official records, correspondence, and the organizational calendar to maintain operational excellence across all CALUNAH initiatives.',
      photo:    'images/team/secretary.avif',
      email:    'secretary@calunah.org',
      initials: 'YN'
    },
    {
      name:     'Valentine Bossous',
      role:     'Assistant Secretary',
      icon:     'fa-file-lines',
      bio:      'Assisting in the management of organizational records, meeting minutes, and administrative communications.',
      photo:    'images/team/asst-secretary.avif',
      email:    'asst.secretary@calunah.org',
      initials: 'VB'
    },
    {
      name:     'Jacquelin Germian',
      role:     'Executive Treasurer',
      icon:     'fa-coins',
      bio:      'Overseeing CALUNAH\'s financial stewardship, budgeting, and 501(c)(3) compliance to maximize impact for our mission.',
      photo:    'images/team/treasurer.avif',
      email:    'treasurer@calunah.org',
      initials: 'JG'
    },
    {
      name:     'Witly Paul',
      role:     'Finance Controller',
      icon:     'fa-chart-line',
      bio:      'Monitoring financial operations, overseeing expenditures, and ensuring fiscal accountability across all CALUNAH programs.',
      photo:    'images/team/finance-controller.avif',
      email:    'finance@calunah.org',
      initials: 'WP'
    },
    {
      name:     'Moselle Bossous',
      role:     'Communications Director',
      icon:     'fa-bullhorn',
      bio:      'Amplifying CALUNAH\'s voice through digital media, newsletters, and strategic communications campaigns across the diaspora.',
      photo:    'images/team/communications-director.avif',
      email:    'comms@calunah.org',
      initials: 'MB'
    },
    {
      name:     'Ivaline O. Charles',
      role:     'Membership Director',
      icon:     'fa-users',
      bio:      'Growing and strengthening our member community through engagement, recruitment, and retention strategies across all chapters.',
      photo:    'images/team/membership-director.avif',
      email:    'membership@calunah.org',
      initials: 'IC'
    },
    {
      name:     'Rock E. Boisrond',
      role:     'IT Director',
      icon:     'fa-laptop-code',
      bio:      'Leading CALUNAH\'s digital infrastructure, website development, and technology initiatives to advance the organization\'s online presence.',
      photo:    'images/team/it-director.webp',
      email:    'it@calunah.org',
      initials: 'RB'
    },
    {
      name:     'Lynouse D. Saint Louis',
      role:     'Executive Editor',
      icon:     'fa-pen-nib',
      bio:      'Curating and editing CALUNAH\'s publications, ensuring high-quality content that reflects the organization\'s mission and values.',
      photo:    'images/team/editor.avif',
      email:    'editor@calunah.org',
      initials: 'LS'
    },
    {
      name:     'Gueus Robert',
      role:     'Newsletter Editor-in-Chief',
      icon:     'fa-newspaper',
      bio:      'Producing CALUNAH\'s quarterly newsletter, connecting alumni worldwide with news, events, and inspiring stories from the community.',
      photo:    'images/team/newsletter-editor.avif',
      email:    'newsletter@calunah.org',
      initials: 'GR'
    },
    {
      name:     'Judith Jean-Baptiste',
      role:     'Chaplain',
      icon:     'fa-hands-praying',
      bio:      'Providing spiritual guidance and pastoral care to the CALUNAH community, grounding our work in faith and shared purpose.',
      photo:    'images/team/chaplain.avif',
      email:    'chaplain@calunah.org',
      initials: 'JJ'
    },
    {
      name:     'Becel Dubreuze Jr.',
      role:     'Advisor',
      icon:     'fa-lightbulb',
      bio:      'Contributing strategic counsel and institutional knowledge to support CALUNAH\'s leadership and long-term organizational growth.',
      photo:    'images/team/advisor-becel.avif',
      email:    'advisors@calunah.org',
      initials: 'BD'
    },
    {
      name:     'Huguette Perpignan-Michel',
      role:     'Advisor',
      icon:     'fa-lightbulb',
      bio:      'Offering experienced guidance and advocacy to advance CALUNAH\'s mission across the Haitian diaspora and beyond.',
      photo:    'images/team/advisor-huguette.avif',
      email:    'advisors@calunah.org',
      initials: 'HP'
    }
  ],

  /* ---------- Chapter Presidents ---------- */
  // icon: FontAwesome class  |  iconEmoji: use an emoji in the badge instead
  chapters: [
    { city: 'New York',        country: 'New York, USA',            flag: '🇺🇸', abbr: 'NY',  color1: '#002868', color2: '#BF0A30', icon: '', iconEmoji: '🍎', president: 'Mackensdy Dorméus', photo: 'images/chapters/new-york.avif',        contact: 'newyork@calunah.org'        },
    { city: 'New England',     country: 'CT · MA · RI, USA',        flag: '🇺🇸', abbr: 'NE',  color1: '#0C234B', color2: '#A51C30', icon: '', iconEmoji: '🦞', president: 'Gregory Meleance',  photo: 'images/chapters/new-england.avif',     contact: 'newengland@calunah.org'     },
    { city: 'DMV Region',      country: 'DC · Maryland · Virginia', flag: '🇺🇸', abbr: 'DMV', color1: '#003087', color2: '#D4212D', icon: '', iconEmoji: '🏛️', president: 'Ivaline Charles',   photo: 'images/chapters/dmv.avif',             contact: 'dmv@calunah.org'            },
    { city: 'South Florida',   country: 'Florida, USA',             flag: '🇺🇸', abbr: 'FL',  color1: '#005F9E', color2: '#F4830A', icon: '', iconEmoji: '🌴', president: 'Gregere Figaro',    photo: 'images/chapters/south-florida.avif',   contact: 'southflorida@calunah.org'   },
    { city: 'Central Florida', country: 'Florida, USA',             flag: '🇺🇸', abbr: 'FL',  color1: '#006E51', color2: '#F4830A', icon: '', iconEmoji: '🚀', president: 'Rose Ercie Louis',  photo: 'images/chapters/central-florida.avif', contact: 'centralflorida@calunah.org' },
    { city: 'Georgia',         country: 'Georgia, USA',             flag: '🇺🇸', abbr: 'GA',  color1: '#BA0C2F', color2: '#C4A826', icon: '', iconEmoji: '🍑', president: 'Rock E. Boisrond',  photo: 'images/chapters/georgia.webp',         contact: 'georgia@calunah.org'        }
  ],

  /* ---------- Donors & Partners ---------- */
  donors: {
    platinum: [
      'Adventist Health System',
      'Haitian American Foundation for Education',
      'Caribbean Adventist Fellowship',
      'UAH Office of Advancement'
    ],
    gold: [
      'Dr. & Mrs. Pierre Ollivier',
      'Boisrond Family Foundation',
      'Miami Haitian Community Trust',
      'Church of God Foundation',
      'New England Adventist Conference'
    ],
    silver: [
      'First Haitian SDA Church, Miami',
      'Haitian Physicians Abroad',
      'Caribbean Development Initiative',
      'Friends of UAH, New York Chapter',
      'Dr. Mireille Desroches',
      'Augustin & Associates Law Group',
      'Toussaint Family Trust',
      'Haitian Nurses Association of America'
    ]
  },

  /* ---------- Membership Tiers ---------- */
  membership: [
    {
      tier:     'Student',
      price:    '$0',
      period:   'per year',
      icon:     'fas fa-graduation-cap',
      color:    '#4caf50',
      features: [
        'CALUNAH digital newsletter',
        'Access to alumni network',
        'Invitation to virtual events',
        'UAH alumni email directory'
      ],
      cta:      'Join Free',
      featured: false
    },
    {
      tier:     'Associate',
      price:    '$25',
      period:   'per year',
      icon:     'fas fa-user',
      color:    '#c9a227',
      features: [
        'Everything in Student',
        'Membership certificate',
        'Voting rights',
        'Chapter meeting access',
        'Mentorship opportunities'
      ],
      cta:      'Become a Member',
      featured: false
    },
    {
      tier:     'Full Member',
      price:    '$50',
      period:   'per year',
      icon:     'fas fa-star',
      color:    '#c9a227',
      features: [
        'Everything in Associate',
        'Official CALUNAH ID card',
        'Eligibility for leadership roles',
        'Scholarship nomination rights',
        'Priority event registration',
        'Annual gala invitation'
      ],
      cta:      'Join Now',
      featured: true
    },
    {
      tier:     'Sustaining',
      price:    '$100',
      period:   'per year',
      icon:     'fas fa-crown',
      color:    '#e5a020',
      features: [
        'Everything in Full Member',
        'Recognition in annual report',
        'Donor wall listing',
        'Private leadership briefings',
        'Dedicated liaison contact',
        'Legacy plaque eligibility'
      ],
      cta:      'Sustain Our Mission',
      featured: false
    }
  ],

  /* ---------- Livestream Settings ---------- */
  livestream: {
    active:       false,                   // ← set to true when you go live
    platform:     'youtube',              // 'youtube' | 'facebook' | 'instagram'
    youtubeId:    'live_stream_id_here',  // YouTube live video/stream ID
    facebookUrl:  'https://www.facebook.com/calunah/live',
    instagramUrl: 'https://www.instagram.com/calunah/',
    nextStream: {
      date:     'June 21, 2026',
      time:     '5:30 PM EDT',
      title:    'Blooming Minds: High Tea Fundraiser 2026, LIVE Broadcast',
      platform: 'YouTube Live'
    }
  },

  /* ---------- Events ---------- */
  events: [
    {
      id:          'hightea2026',
      title:       'Blooming Minds: Giving Back for Education',
      date:        'June 21, 2026',
      time:        '5:30 PM – 9:30 PM',
      location:    'Holy Trinity Reception Center, Orlando, FL',
      flyer:       'images/events/hightea2026.jpg',
      tags:        ['High Tea', 'Fundraiser', 'Education'],
      description: 'An elegant High Tea fundraising evening to support education. Featuring keynote speaker Modoline Altenor, Esq., MC Marjory Sheba, and live performances by Emmanuel Garilus, JP Sonics, Marielle Donatien & Stephanie Garilus.',
      fullInfo:    'Join CALUNAH for Blooming Minds, an upscale High Tea Fundraising Event raising funds for education. Keynote: Modoline Altenor, Esq. | MC: Marjory Sheba. Featured Performers: Emmanuel Garilus (Saxophonist), JP Sonics (Classic Band), Marielle Donatien (Solo Artist), Stephanie Garilus (Solo Artist). 📍 1217 Trinity Woods Ln, Orlando, FL 32751. 🎟 $60 Advance · $30 Children under 12 · $70 At the Door.',
      tickets: [
        { label: 'Advance',     price: 60, note: 'General admission',  url: 'https://www.paypal.com/donate?business=donate%40calunah.org&amount=60&currency_code=USD&item_name=Blooming+Minds+2026+Advance+Ticket' },
        { label: 'Children',    price: 30, note: 'Under 12 years old', url: 'https://www.paypal.com/donate?business=donate%40calunah.org&amount=30&currency_code=USD&item_name=Blooming+Minds+2026+Children+Ticket' },
        { label: 'At the Door', price: 70, note: 'Available at venue', url: '' }
      ],
      ticketUrl:   '',
      ctaLabel:    'Get Tickets',
      upcoming:    true
    },
    {
      id:          'georgia2025',
      title:       'Georgia Chapter Installation',
      date:        'February 22, 2025',
      time:        'Meet & Greet Luncheon',
      location:    'Ebenezer SDA Church, Atlanta, GA',
      flyer:       'images/community/georgia-1.webp',
      tags:        ['Chapter', 'Installation', 'Georgia', 'Community'],
      description: 'A new CALUNAH chapter was established in Atlanta, Georgia, growing our reach across the states and carrying on the mission and vision of CALUNAH through a Meet & Greet luncheon.',
      fullInfo:    'As a nonprofit organization, CALUNAH believes in growing and reaching out to all alumni around the states. A new chapter was officially established on February 22, 2025 at Ebenezer SDA Church in Atlanta, Georgia, with the ultimate goal to carry on the Mission and Vision of CALUNAH. The installation was celebrated through a Meet & Greet amid a luncheon, welcoming alumni in the Georgia area into the CALUNAH family.',
      ticketUrl:   '',
      ctaLabel:    'View Photos',
      upcoming:    false
    },
    {
      id:          'prayer2025',
      title:       '3-Day Prayer Session for Haiti',
      date:        'April 2–4, 2025',
      time:        '7:30 PM – 8:30 PM EDT',
      location:    'Virtual, Zoom',
      flyer:       'images/events/prayer2025.webp',
      tags:        ['Prayer', 'Spiritual', 'Virtual', 'Haiti'],
      description: 'CALUNAH lifted up heartfelt prayers for Haiti, for peace, healing, and strength in the midst of hardship. Three nights of intercession uniting all chapters in one voice before God.',
      fullInfo:    'As uncertainty was being faced among Haitian immigrants, CALUNAH launched a three-day Prayer Session with the participation of all chapters, calling on God for Forgiveness & Reconciliation (Wednesday), Physical, Emotional & Spiritual Healing (Thursday), and Protection & Deliverance (Friday). 📍 Via Zoom · Meeting ID: 898 1400 5387 · Passcode: prayers · "The prayer of a righteous person is powerful and effective." – James 5:16. As a faithful God, HE CAME THROUGH!',
      ticketUrl:   '',
      ctaLabel:    'View Recap',
      upcoming:    false
    },
    {
      id:          'backpack2025',
      title:       'Backpack Drive Community Service',
      date:        'October 26, 2025',
      time:        'All Day',
      location:    'Multiple Chapters, Nationwide',
      flyer:       'images/events/backpack2025.webp',
      tags:        ['Community Service', 'Education', 'Chapters'],
      description: 'CALUNAH launched a Backpack Drive Community Service event just before school opened, taking place simultaneously across all chapters on the same day, reaching out a hand to children in need across different states.',
      fullInfo:    'It was a great success where hundreds and hundreds of backpacks were given to different communities. A smile was surely put on many children\'s faces, and a burden lifted upon many parents getting ready for back to school. The event took place simultaneously through the participation of all chapters, on the same day, in different states, uniting CALUNAH in one powerful act of service.',
      ticketUrl:   '',
      ctaLabel:    'View Photos',
      upcoming:    false
    },
    {
      id:          'saturdaygiving2024',
      title:       'Saturday Giving Event',
      date:        'November 30, 2024',
      time:        '5:30 PM',
      location:    'Virtual, YouTube & Facebook Live',
      flyer:       'images/events/saturdaygiving2024.webp',
      tags:        ['Fundraiser', 'Giving', 'Scholarships', 'Community'],
      description: 'Our community came together for the Saturday Giving Event, a heartfelt initiative raising funds for student scholarships, campus maintenance, building upgrades, new computers, and essential resources that enhance learning and growth.',
      fullInfo:    'On November 30, 2024, CALUNAH Executive presented the Saturday Giving Event broadcast live on YouTube and Facebook. The event raised funds for: Scholarships · Renovation & Maintenance · Monitors / Computers · and much more. Thanks to the incredible generosity of donors, partners, and volunteers, the event made a lasting impact that will continue to benefit our school community for years to come. 📺 Broadcast on CALUNAH Executive YouTube & Facebook platforms.',
      ticketUrl:   '',
      ctaLabel:    'View Recap',
      upcoming:    false
    },
    {
      id:          'gala2024',
      title:       'Annual Fundraising Gala 2024',
      date:        'December 7, 2024',
      time:        '7:00 PM EST',
      location:    'Miami, FL',
      flyer:       'images/events/gala2024.avif',
      tags:        ['Gala', 'Fundraiser', 'Annual'],
      description: 'The joy of coming together for a shared purpose was palpable throughout the evening. Each story shared, each laugh exchanged, and each bid placed built a powerful narrative of hope and progress for UNAH education.',
      fullInfo:    'We extend our deepest gratitude to everyone who helped make this event a success, our sponsors, donors, attendees, and dedicated volunteers. Your support ensures that our mission to support UNAH education initiatives continues to grow and thrive.\n\nLooking back on the evening, it\'s clear that community power is real. Events like these serve as reminders that when we unite, we achieve amazing things. The stories shared during the gala were not just anecdotes, they were poignant reminders of the lives we touch and the change we can create.\n\nThank you to everyone who participated, supported, and believed in our mission. Together, we are not just a community, we are a force for good. Here\'s to many more evenings of impact!',
      ticketUrl:   '',
      ctaLabel:    'See Photos',
      upcoming:    false
    }
  ],

  /* ---------- Gallery ---------- */
  gallery: [
    { src: 'images/campus/main-building.jpg',    caption: 'Auditorium Michel Toussaint, UNAH',  cat: 'campus'    },
    { src: 'images/campus/aerial-2.jpg',         caption: 'UNAH Campus, Aerial Skyview',        cat: 'campus'    },
    { src: 'images/campus/aerial-1.jpg',         caption: 'UNAH Campus, Aerial View',           cat: 'campus'    },
    { src: 'images/campus/auditorium.jpg',       caption: 'UNAH Campus, Academic Building',     cat: 'campus'    },
    { src: 'images/campus/campus-path.jpg',      caption: 'UNAH Campus, Pathways',              cat: 'campus'    },
    { src: 'images/community/backpack-cover.webp', caption: 'Backpack Drive 2025, Community Service', cat: 'community' },
    { src: 'images/community/backpack-1.webp',   caption: 'Backpack Drive 2025, Giving Backpacks to Children',  cat: 'community' },
    { src: 'images/community/backpack-2.webp',   caption: 'Backpack Drive 2025, Chapter Volunteers',            cat: 'community' },
    { src: 'images/community/backpack-3.webp',   caption: 'Backpack Drive 2025, Smiles Across Communities',     cat: 'community' },
    { src: 'images/community/backpack-4.webp',   caption: 'Backpack Drive 2025, Hundreds of Backpacks Given',   cat: 'community' },
    { src: 'images/community/backpack-5.webp',   caption: 'Backpack Drive 2025, Nationwide Chapters United',    cat: 'community' },
    { src: 'images/community/backpack-6.jpg',    caption: 'Backpack Drive 2025, Back to School Ready',          cat: 'community' },
    { src: 'images/community/backpack-7.webp',   caption: 'Backpack Drive 2025, Impact in the Community',       cat: 'community' },
    { src: 'images/events/hightea2026.jpg',      caption: 'Blooming Minds, High Tea Fundraiser 2026',   cat: 'events'    },
    { src: 'images/events/backpack2025.webp',       caption: 'Backpack Drive Community Service 2025',        cat: 'events'    },
    { src: 'images/events/saturdaygiving2024.webp', caption: 'Saturday Giving Event, November 30, 2024',   cat: 'events'    },
    { src: 'images/events/gala2024.avif',           caption: 'Annual Fundraising Gala 2024, Miami, FL',     cat: 'events'    },
    { src: 'images/events/prayer2025.webp',      caption: '3-Day Prayer Session for Haiti, April 2025',  cat: 'events'    },
    { src: 'images/community/georgia-1.webp',   caption: 'Georgia Chapter Installation, Feb 2025',      cat: 'community' },
    { src: 'images/community/georgia-2.webp',   caption: 'Georgia Chapter, Meet & Greet Luncheon',      cat: 'community' },
    { src: 'images/community/georgia-3.webp',   caption: 'Georgia Chapter, Ebenezer SDA Church, Atlanta', cat: 'community' },
    { src: 'images/community/georgia-4.webp',   caption: 'Georgia Chapter, Alumni Gathering',           cat: 'community' },
    { src: 'images/community/georgia-5.webp',   caption: 'Georgia Chapter, New Members Welcomed',       cat: 'community' },
    { src: 'images/community/georgia-6.webp',   caption: 'Georgia Chapter, Celebration & Fellowship',   cat: 'community' },
    { src: 'images/community/georgia-7.webp',   caption: 'Georgia Chapter, CALUNAH Family Grows',       cat: 'community' },
    { src: 'images/community/georgia-8.webp',   caption: 'Georgia Chapter, Installation Ceremony',      cat: 'community' },
    { src: 'images/community/georgia-9.webp',   caption: 'Georgia Chapter, United in Mission',          cat: 'community' },
  ],

  /* ---------- Videos ---------- */
  featuredVideo: {
    youtubeId:   'DFaJBNtm8jg',
    title:       'CALUNAH Saturday Giving 2025',
    description: 'Relive our 2025 Saturday Giving fundraiser broadcast live, raising funds for student scholarships, campus renovation, monitors, computers, and essential resources for UNAH students.'
  },
  videos: [
    { youtubeId: 'pPEFGn-W2s0', title: 'CALUNAH Saturday Giving Fundraiser 2024', description: 'Our Saturday Giving event broadcast live on YouTube & Facebook, November 26, 2024.' }
  ],

  /* ---------- e-Newsletter Issues ---------- */
  newsletters: [
    { title: 'Perspectives, Spring 2026', date: 'Spring 2026', pdf: 'data/perspectives-spring-2026.pdf', preview: 'High Tea fundraiser, scholarship spotlights, alumni stories, chapter updates & community impact.', featured: true },
  ]
  /* More issues will be added as they are published */

}; // end CALUNAH_CONFIG


/* ============================================================
   UTILITY HELPERS
   ============================================================ */
const qs  = (sel, ctx) => (ctx || document).querySelector(sel);
const qsa = (sel, ctx) => [...(ctx || document).querySelectorAll(sel)];


/* ============================================================
   1. SPLASH SCREEN
   ============================================================ */
function initSplash() {
  const splash    = qs('#splash');
  const splashBtn = qs('#splash-btn');
  if (!splash) return;

  const MIN_MS = 2800;
  const start  = Date.now();

  function hideSplash() {
    splash.classList.add('hidden');
    document.body.style.overflow = '';
    splash.addEventListener('transitionend', () => splash.remove(), { once: true });
  }

  // "Enter Website" button lets users skip the wait
  splashBtn && splashBtn.addEventListener('click', hideSplash);

  window.addEventListener('load', () => {
    const elapsed = Date.now() - start;
    if (elapsed >= MIN_MS) hideSplash();
    else setTimeout(hideSplash, MIN_MS - elapsed);
  });

  setTimeout(hideSplash, 6000); // absolute fallback
  document.body.style.overflow = 'hidden';
}


/* ============================================================
   2. CANVAS PARTICLE BURST (splash background)
   ============================================================ */
function initParticles() {
  const canvas = qs('#particles-canvas');   // matches id="particles-canvas" in HTML
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let W, H, particles = [];

  function resize() {
    W = canvas.width  = window.innerWidth;
    H = canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener('resize', resize, { passive: true });

  class Particle {
    constructor() { this.reset(); }
    reset() {
      this.x  = Math.random() * W;
      this.y  = Math.random() * H;
      this.vx = (Math.random() - 0.5) * 1.2;
      this.vy = (Math.random() - 0.5) * 1.2;
      this.r  = Math.random() * 2.5 + 0.5;
      this.a  = Math.random() * 0.6 + 0.2;
      this.da = (Math.random() - 0.5) * 0.015;
      this.gold = Math.random() > 0.5;
    }
    update() {
      this.x += this.vx; this.y += this.vy;
      this.a += this.da;
      if (this.a <= 0.05 || this.a >= 0.85) this.da *= -1;
      if (this.x < 0 || this.x > W || this.y < 0 || this.y > H) this.reset();
    }
    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
      ctx.fillStyle = this.gold
        ? `rgba(201,162,39,${this.a})`
        : `rgba(255,255,255,${this.a * 0.5})`;
      ctx.fill();
    }
  }

  for (let i = 0; i < 90; i++) particles.push(new Particle());

  let particleActive = true;
  // Stop the particle loop when splash hides to free CPU
  const splashEl = qs('#splash');
  if (splashEl) {
    const obs = new MutationObserver(() => {
      if (splashEl.classList.contains('hidden') || !splashEl.isConnected) {
        particleActive = false;
        obs.disconnect();
      }
    });
    obs.observe(splashEl, { attributes: true, childList: true });
  }

  (function loop() {
    if (!particleActive) return; // stop drawing once splash is gone
    ctx.clearRect(0, 0, W, H);
    particles.forEach(p => { p.update(); p.draw(); });
    requestAnimationFrame(loop);
  })();
}


/* ============================================================
   3. HERO SLIDER (Ken Burns CSS + JS cycling)
   ============================================================ */
function initHeroSlider() {
  const slides = qsa('.hero-slide');
  const dots   = qsa('.hdot');
  const prev   = qs('#hero-prev');
  const next   = qs('#hero-next');
  if (!slides.length) return;

  let cur = 0;
  let timer;

  function goTo(i) {
    slides[cur].classList.remove('active');
    dots[cur] && dots[cur].classList.remove('active');
    cur = ((i % slides.length) + slides.length) % slides.length;
    slides[cur].classList.add('active');
    dots[cur] && dots[cur].classList.add('active');
  }

  function startAuto() {
    clearInterval(timer);
    timer = setInterval(() => goTo(cur + 1), 5000);
  }

  // HTML already has .active on slide[0], ensure dots match
  dots[0] && dots[0].classList.add('active');

  prev && prev.addEventListener('click', () => { goTo(cur - 1); startAuto(); });
  next && next.addEventListener('click', () => { goTo(cur + 1); startAuto(); });
  dots.forEach((dot, i) => {
    dot.addEventListener('click', () => { goTo(i); startAuto(); });
  });

  startAuto();
}


/* ============================================================
   4. NAVIGATION, sticky, scroll-spy, mobile accordion
   ============================================================ */
function initNav() {
  const nav      = qs('#navbar');           // matches id="navbar" in HTML
  const burger   = qs('#nav-hamburger');    // matches id="nav-hamburger" in HTML
  const navList  = qs('#nav-links');        // the <ul id="nav-links"> used as mobile menu
  const ddItems  = qsa('.nav-item.has-dropdown');

  /* Sticky on scroll */
  window.addEventListener('scroll', () => {
    nav && nav.classList.toggle('scrolled', window.scrollY > 60);
  }, { passive: true });

  /* Burger toggle, toggles .open on the nav-links <ul> */
  if (burger && navList) {
    burger.addEventListener('click', () => {
      const open = navList.classList.toggle('open');
      burger.setAttribute('aria-expanded', String(open));
      burger.classList.toggle('open', open);
    });
  }

  /* Mobile dropdown accordion, desktop uses CSS :hover only */
  ddItems.forEach(item => {
    const trigger = qs('.nav-link', item);
    if (!trigger) return;
    trigger.addEventListener('click', e => {
      if (window.innerWidth > 1200) return;
      e.preventDefault();
      item.classList.toggle('mobile-open');
      ddItems.forEach(other => {
        if (other !== item) other.classList.remove('mobile-open');
      });
    });
  });

  /* Close mobile menu when any nav link is clicked */
  navList && qsa('a', navList).forEach(a => {
    a.addEventListener('click', () => {
      navList.classList.remove('open');
      burger && burger.classList.remove('open');
      burger && burger.setAttribute('aria-expanded', 'false');
    });
  });

  /* Scroll-spy */
  const sections = qsa('section[id]');
  const spyLinks = qsa('.nav-link[href^="#"]');
  const spy = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        spyLinks.forEach(l => l.classList.toggle('active', l.getAttribute('href') === `#${id}`));
      }
    });
  }, { rootMargin: '-30% 0px -60% 0px' });
  sections.forEach(s => spy.observe(s));
}


/* ============================================================
   5. AOS (Animate On Scroll)
   ============================================================ */
function initAOS() {
  if (typeof AOS !== 'undefined') {
    AOS.init({ duration: 800, easing: 'ease-out-cubic', once: true, offset: 60 });
  }
}


/* ============================================================
   6. STATS COUNTER ANIMATION
   ============================================================ */
function initStats() {
  // HTML has hardcoded stats with .stat-num[data-target], animate those in place.
  // If a #stats-grid placeholder exists, build from config instead.
  const grid = qs('#stats-grid');
  if (grid) {
    grid.innerHTML = CALUNAH_CONFIG.stats.map(s => `
      <div class="stat-card" data-aos="zoom-in">
        <div class="stat-icon"><i class="${s.icon}"></i></div>
        <div class="stat-num" data-target="${s.value}" data-suffix="${s.suffix}">0${s.suffix}</div>
        <div class="stat-lbl">${s.label}</div>
      </div>
    `).join('');
  }

  // Animate all stat counters (whether hardcoded or just built above)
  const obs = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el     = entry.target;
      const target = +el.dataset.target;
      const suffix = el.dataset.suffix || '';
      let current  = 0;
      const inc    = target / (2000 / 16);
      const timer  = setInterval(() => {
        current += inc;
        if (current >= target) { current = target; clearInterval(timer); }
        el.textContent = Math.floor(current).toLocaleString() + suffix;
      }, 16);
      obs.unobserve(el);
    });
  }, { threshold: 0.5 });

  // Target both hardcoded (.stat-num) and dynamically-built (.stat-num) counters
  qsa('.stat-num[data-target]').forEach(el => obs.observe(el));
}


/* ============================================================
   7. EXECUTIVE COMMITTEE BUILDER
   ============================================================ */
function buildCommittee() {
  const grid = qs('#committee-grid');
  if (!grid) return;

  grid.innerHTML = CALUNAH_CONFIG.committee.map((m, i) => `
    <div class="committee-card" data-aos="fade-up" data-aos-delay="${(i % 4) * 80}">
      <div class="committee-photo-wrap">
        <div class="committee-photo">
          ${m.photo
            ? `<img src="${m.photo}" alt="${m.name}" loading="lazy"
                    onerror="this.parentElement.classList.add('photo-fallback');this.remove();">`
            : `<span class="committee-initials">${m.initials}</span>`
          }
        </div>
        <div class="committee-role-badge" title="${m.role}">
          <i class="fas ${m.icon || 'fa-user'}"></i>
        </div>
      </div>
      <div class="committee-role">${m.role}</div>
      <h3 class="committee-name">${m.name}</h3>
      <p class="committee-bio">${m.bio}</p>
      <a href="mailto:${m.email}" class="committee-email" title="Email ${m.name}">
        <i class="fas fa-envelope"></i> Contact
      </a>
    </div>
  `).join('');
}


/* ============================================================
   8. CHAPTER PRESIDENTS BUILDER
   ============================================================ */
function buildChapters() {
  const grid = qs('#chapters-grid');
  if (!grid) return;

  // Get initials from name (last word of first name + first letter of last)
  const getInitials = name => {
    const parts = name.replace(/^(Dr\.|Mme\.|M\.|Mr\.|Ms\.)\s*/i, '').split(' ');
    return parts.length >= 2
      ? (parts[0][0] + parts[parts.length - 1][0]).toUpperCase()
      : parts[0].slice(0, 2).toUpperCase();
  };

  grid.innerHTML = CALUNAH_CONFIG.chapters.map((ch, i) => {
    const initials = getInitials(ch.president);
    const photoHtml = ch.photo
      ? `<img src="${ch.photo}" alt="${ch.president}" loading="lazy"
              onerror="this.parentElement.classList.add('ch-photo-fallback');this.remove();">`
      : `<span class="ch-photo-initials">${initials}</span>`;
    const badgeInner = ch.iconEmoji
      ? `<span class="ch-badge-emoji">${ch.iconEmoji}</span>`
      : `<i class="fas ${ch.icon}"></i>`;
    return `
    <div class="chapter-card" data-aos="fade-up" data-aos-delay="${(i % 4) * 70}"
         style="--ch-c1:${ch.color1};--ch-c2:${ch.color2}">
      <div class="chapter-card-body">
        <div class="chapter-header">
          <div class="chapter-icon-badge ${ch.iconEmoji ? 'has-emoji' : ''}">
            ${badgeInner}
          </div>
          <div class="chapter-flag-wrap">
            <span class="chapter-flag">${ch.flag}</span>
            <span class="chapter-abbr">${ch.abbr}</span>
          </div>
        </div>
        <div class="chapter-president-photo ${ch.photo ? '' : 'ch-photo-fallback'}">
          ${photoHtml}
        </div>
        <h3 class="chapter-city">${ch.city}</h3>
        <span class="chapter-country">${ch.country}</span>
        <div class="chapter-president-label"><i class="fas fa-user-tie"></i> Chapter President</div>
        <div class="chapter-president-name">${ch.president}</div>
        <div class="chapter-contact">
          <a href="mailto:${ch.contact}"><i class="fas fa-envelope"></i> Contact Chapter</a>
        </div>
      </div>
    </div>`;
  }).join('');
}


/* ============================================================
   9. DONORS & PARTNERS BUILDER
   ============================================================ */
function buildDonors() {
  const renderTier = (id, names) => {
    const el = qs(`#donors-${id}`);
    if (!el) return;
    el.innerHTML = names.map(n => `
      <div class="donor-name" data-aos="fade-right">
        <i class="fas fa-check-circle"></i> ${n}
      </div>
    `).join('');
  };

  renderTier('platinum', CALUNAH_CONFIG.donors.platinum);
  renderTier('gold',     CALUNAH_CONFIG.donors.gold);
  renderTier('silver',   CALUNAH_CONFIG.donors.silver);
}


/* ============================================================
   10. EVENTS BUILDER
   ============================================================ */
function buildEvents() {
  const grid = qs('#events-grid');
  if (!grid) return;

  // Uses CSS classes: .event-card, .event-flyer (container), .event-info, .event-title,
  //                   .event-meta, .event-desc, .event-tags, .event-tag,
  //                   .event-full-info, .event-actions, .event-category
  grid.innerHTML = CALUNAH_CONFIG.events.map((ev, i) => `
    <div class="event-card ${ev.upcoming ? 'upcoming' : 'past'}" id="event-${ev.id}"
         data-aos="fade-up" data-aos-delay="${(i % 3) * 100}">

      <!-- Flyer area matches .event-flyer container in CSS -->
      <div class="event-flyer">
        ${ev.flyer
          ? `<img src="${ev.flyer}" alt="${ev.title} flyer"
                  onerror="this.remove()">`
          : `<i class="fas fa-calendar-star"></i><span>Event Flyer</span>`
        }
        <!-- Upcoming/Past badge -->
        <div class="event-date-badge" style="${ev.upcoming
          ? 'background:var(--gold);color:var(--green-dark)'
          : 'background:rgba(255,255,255,.15);color:#fff'}">
          <span class="day">${ev.upcoming ? '📅' : '✓'}</span>
          <span class="month">${ev.upcoming ? 'Coming' : 'Past'}</span>
        </div>
        <!-- Tags overlay -->
        <div class="event-tags" style="position:absolute;bottom:.75rem;left:.75rem;right:.75rem;">
          ${ev.tags.map(t => `<span class="event-tag">${t}</span>`).join('')}
        </div>
      </div>

      <div class="event-info">
        <div class="event-category">${ev.upcoming ? 'Upcoming Event' : 'Past Event'}</div>
        <h3 class="event-title">${ev.title}</h3>
        <div class="event-meta">
          <span><i class="fas fa-calendar-alt"></i> ${ev.date}</span>
          <span><i class="fas fa-clock"></i> ${ev.time}</span>
          <span><i class="fas fa-map-marker-alt"></i> ${ev.location}</span>
        </div>
        <p class="event-desc">${ev.description}</p>

        <div class="event-full-info" id="info-${ev.id}" hidden>
          <p>${ev.fullInfo}</p>
        </div>

        <!-- Ticket tiers for upcoming events -->
        ${ev.upcoming && ev.tickets && ev.tickets.length ? `
        <div class="event-tickets">
          <div class="et-heading"><i class="fas fa-ticket-alt"></i> Get Your Tickets</div>
          <div class="et-tiers">
            ${ev.tickets.map(t => `
              <div class="et-tier">
                <div class="et-tier-top">
                  <span class="et-tier-label">${t.label}</span>
                  <span class="et-tier-price">$${t.price}</span>
                </div>
                <span class="et-tier-note">${t.note}</span>
                ${t.url
                  ? `<a href="${t.url}" target="_blank" rel="noopener" class="btn et-buy-btn">
                       <i class="fas fa-credit-card"></i> Buy Online
                     </a>`
                  : t.label === 'At the Door'
                    ? `<span class="et-at-door"><i class="fas fa-map-marker-alt"></i> Available at venue</span>`
                    : `<button class="btn et-reserve-btn"
                         onclick="openTicketReservation('${ev.title}','${ev.date}, ${ev.time}','${t.label}','${t.price}')">
                         <i class="fas fa-calendar-check"></i> Reserve Spot
                       </button>`
                }
              </div>`).join('')}
          </div>
          <button class="et-reserve-all-btn"
            onclick="openTicketReservation('${ev.title}','${ev.date}, ${ev.time}','General','')">
            <i class="fas fa-envelope"></i> Reserve &amp; Pay Later (Zelle / PayPal)
          </button>
        </div>` : ''}

        <div class="event-actions">
          <button class="btn-event-more" onclick="toggleEventInfo('${ev.id}')">
            <i class="fas fa-info-circle"></i> <span>Learn More</span>
          </button>
          ${!ev.upcoming && ev.ctaLabel
            ? `<span class="btn btn-outline btn-sm"><i class="fas fa-photo-video"></i> ${ev.ctaLabel}</span>`
            : ''
          }
        </div>
      </div>
    </div>
  `).join('');
}

function toggleEventInfo(id) {
  const info = qs(`#info-${id}`);
  const btn  = qs(`#event-${id} .btn-event-more span`);
  const icon = qs(`#event-${id} .btn-event-more i`);
  if (!info) return;
  const opening = info.hidden;
  info.hidden = !opening;
  if (btn) btn.textContent = opening ? 'Show Less' : 'Learn More';
  if (icon) icon.className = opening ? 'fas fa-chevron-up' : 'fas fa-info-circle';
}
window.toggleEventInfo = toggleEventInfo;

/* ── TICKET RESERVATION MODAL ───────────────────────────── */
function openTicketReservation(eventName, eventDate, ticketType, ticketPrice) {
  const modal   = qs('#ticket-modal');
  const nameEl  = qs('#tm-event-name');
  const dateEl  = qs('#tm-event-date');
  const selEl   = qs('#tm-ticket-selected');
  const subjEl  = qs('#tm-subject');
  const evField = qs('#tm-event-field');
  const tyField = qs('#tm-type-field');
  const prField = qs('#tm-price-field');
  if (!modal) return;

  if (nameEl) nameEl.textContent = eventName;
  if (dateEl) dateEl.textContent = eventDate;
  if (subjEl) subjEl.value = `Ticket Reservation: ${eventName}`;
  if (evField) evField.value = eventName;
  if (tyField) tyField.value = ticketType || 'General';
  if (prField) prField.value = ticketPrice ? `$${ticketPrice}` : 'TBD';
  if (selEl) {
    selEl.innerHTML = ticketPrice
      ? `<span class="tm-selected-badge"><i class="fas fa-ticket-alt"></i> ${ticketType} &nbsp;·&nbsp; <strong>$${ticketPrice}</strong></span>`
      : `<span class="tm-selected-badge"><i class="fas fa-ticket-alt"></i> Reservation Request</span>`;
  }

  const successEl = qs('#tm-success');
  const formEl    = qs('#tm-form');
  if (successEl) successEl.hidden = true;
  if (formEl) formEl.querySelector('button[type=submit]') && (formEl.querySelector('button[type=submit]').disabled = false);

  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeTicketModal() {
  const modal = qs('#ticket-modal');
  if (modal) modal.classList.remove('open');
  document.body.style.overflow = '';
}

window.openTicketReservation = openTicketReservation;

document.addEventListener('DOMContentLoaded', () => {
  const overlay = qs('#ticket-modal-overlay');
  const closeBtn = qs('#ticket-modal-close');
  if (overlay)  overlay.addEventListener('click',  closeTicketModal);
  if (closeBtn) closeBtn.addEventListener('click', closeTicketModal);
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeTicketModal(); });

  const tmForm = qs('#tm-form');
  if (tmForm) {
    tmForm.addEventListener('submit', function(e) {
      const btn = this.querySelector('button[type=submit]');
      const success = qs('#tm-success');
      if (btn) { btn.disabled = true; btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending…'; }
      // Let FormSubmit handle the actual POST; show success after short delay
      setTimeout(() => {
        if (success) success.hidden = false;
        if (btn) btn.style.display = 'none';
      }, 2200);
    });
  }
});


/* ============================================================
   11. GALLERY BUILDER + FILTER + LIGHTBOX
   ============================================================ */
function buildGallery() {
  const grid = qs('#gallery-grid');
  if (!grid) return;

  // Only exclude known non-existent placeholder paths
  const existingItems = CALUNAH_CONFIG.gallery.filter(item => {
    return !item.src.startsWith('images/campus1') &&
           !item.src.startsWith('images/campus2') &&
           !item.src.startsWith('images/campus3') &&
           !item.src.startsWith('images/campus4');
  });

  if (existingItems.length === 0) {
    // Show coming-soon state, collapse columns so it fills the full width
    grid.classList.add('gallery-empty');
    grid.innerHTML = `
      <div class="gallery-coming-soon">
        <div class="gcs-icon"><i class="fas fa-camera"></i></div>
        <h3>Gallery Coming Soon</h3>
        <p>We are curating our photo collection of events, campus life, and community moments. Check back soon, and share your own CALUNAH memories!</p>
        <a href="#contact" class="btn btn-outline"><i class="fas fa-paper-plane"></i> Submit Your Photos</a>
      </div>
    `;
    // Hide the filter buttons since there's nothing to filter
    const filters = qs('.gallery-filters');
    if (filters) filters.style.display = 'none';
    return;
  }

  grid.innerHTML = existingItems.map((item, i) => `
    <div class="gallery-item gi-enter" data-cat="${item.cat}" style="animation-delay:${(i % 12) * 40}ms">
      <div class="gallery-thumb" data-index="${i}">
        <img src="${item.src}" alt="${item.caption}" loading="lazy"
             onerror="this.closest('.gallery-item').style.display='none'">
        <div class="gallery-overlay">
          <span class="gallery-caption">${item.caption}</span>
          <i class="fas fa-expand-alt gallery-expand"></i>
        </div>
      </div>
    </div>
  `).join('');

  initGalleryFilter();
  // Note: initLightbox() is called from the boot sequence, not here
}

function initGalleryFilter() {
  // HTML uses class="gf-btn" with data-filter attribute
  const btns      = qsa('.gf-btn');
  const items     = qsa('.gallery-item');
  // Spotlight banners, shown when their matching filter is active
  const spotlights = {
    gala2023: qs('#gala2023-spotlight'),
    gala2024: qs('#gala2024-spotlight')
  };
  btns.forEach(btn => {
    btn.addEventListener('click', () => {
      const cat = btn.dataset.filter || btn.dataset.cat || 'all';
      btns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      items.forEach(item => {
        const show = cat === 'all' || item.dataset.cat === cat;
        item.style.display = show ? '' : 'none';
      });
      // Show matching spotlight, hide all others
      Object.entries(spotlights).forEach(([key, el]) => {
        if (!el) return;
        el.classList.toggle('visible', cat === key);
      });
    });
  });
}

function initLightbox() {
  // HTML uses ids: #lightbox, #lb-close, #lb-prev, #lb-next, #lb-img, #lb-caption
  const lb      = qs('#lightbox');
  const lbImg   = qs('#lb-img');
  const lbCap   = qs('#lb-caption');
  const lbClose = qs('#lb-close');
  const lbPrev  = qs('#lb-prev');
  const lbNext  = qs('#lb-next');
  if (!lb || !lbImg) return;

  // Active image set, swapped between gallery and campus
  let activeItems = CALUNAH_CONFIG.gallery;
  let cur = 0;

  // Read campus photos from DOM at click time (robust, data is always available)
  function getCampusItems() {
    const el = qs('#campus-lb-data');
    if (!el) return [];
    try { return JSON.parse(el.dataset.images).map(o => ({ src: o.src, caption: o.cap })); }
    catch(e) { return []; }
  }

  function lbOpen(items, i) {
    activeItems = items;
    if (!activeItems.length) return;
    cur = ((i % activeItems.length) + activeItems.length) % activeItems.length;
    lbImg.src = activeItems[cur].src;
    lbImg.alt = activeItems[cur].caption || '';
    if (lbCap) lbCap.textContent = activeItems[cur].caption || '';
    lb.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
  function lbClose2() {
    lb.classList.remove('open');
    document.body.style.overflow = '';
    document.documentElement.style.overflow = '';
  }

  // Safety valve: if body overflow gets stuck hidden but lightbox is closed, reset on any scroll attempt
  window.addEventListener('wheel', () => {
    if (!lb.classList.contains('open') && document.body.style.overflow === 'hidden') {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    }
  }, { passive: true });
  window.addEventListener('touchmove', () => {
    if (!lb.classList.contains('open') && document.body.style.overflow === 'hidden') {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    }
  }, { passive: true });
  function nav(delta) { lbOpen(activeItems, cur + delta); }

  // Gallery grid triggers
  qs('#gallery-grid') && qs('#gallery-grid').addEventListener('click', e => {
    const thumb = e.target.closest('.gallery-thumb');
    if (thumb) lbOpen(CALUNAH_CONFIG.gallery, +thumb.dataset.index);
  });

  // Campus photo triggers, read data fresh from DOM at each click
  document.addEventListener('click', e => {
    const trigger = e.target.closest('.campus-lb-trigger');
    if (!trigger) return;
    const items = getCampusItems();
    if (items.length) lbOpen(items, +(trigger.dataset.lbIndex || 0));
  });

  lbClose && lbClose.addEventListener('click', lbClose2);
  lbPrev  && lbPrev.addEventListener('click',  () => nav(-1));
  lbNext  && lbNext.addEventListener('click',  () => nav(+1));
  const overlay = qs('#lb-overlay');
  overlay && overlay.addEventListener('click', lbClose2);
  lb.addEventListener('click', e => { if (e.target === lb) lbClose2(); });
  document.addEventListener('keydown', e => {
    if (!lb.classList.contains('open')) return;
    if (e.key === 'ArrowLeft')  nav(-1);
    if (e.key === 'ArrowRight') nav(+1);
    if (e.key === 'Escape')     lbClose2();
  });
}


/* ============================================================
   12. VIDEOS BUILDER
   ============================================================ */
function buildVideos() {
  const fv    = CALUNAH_CONFIG.featuredVideo;
  const vids  = CALUNAH_CONFIG.videos;
  const chUrl = CALUNAH_CONFIG.social.youtube;

  /* ── Featured video (data-src for lazy load) ── */
  const featureEl = qs('#video-feature');
  if (featureEl && fv && fv.youtubeId) {
    featureEl.innerHTML = `
      <div class="video-feature" data-aos="fade-up">
        <div class="video-thumb">
          <iframe data-src="https://www.youtube.com/embed/${fv.youtubeId}?rel=0"
            title="${fv.title}" frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen loading="lazy"></iframe>
        </div>
        <div class="video-feature-info">
          <span class="section-badge gold"><i class="fab fa-youtube"></i> Latest Video</span>
          <h3>${fv.title}</h3>
          <p>${fv.description}</p>
          <a href="https://www.youtube.com/watch?v=${fv.youtubeId}" target="_blank" rel="noopener" class="btn btn-youtube">
            <i class="fab fa-youtube"></i> Watch on YouTube
          </a>
        </div>
      </div>`;
  }

  /* ── Past recordings grid (data-src for lazy load) ── */
  const gridEl = qs('#videos-grid');
  if (gridEl && vids && vids.length) {
    gridEl.innerHTML = vids.map((v, i) => `
      <div class="video-card" data-aos="fade-up" data-aos-delay="${i * 120}">
        <div class="video-thumb">
          <iframe data-src="https://www.youtube.com/embed/${v.youtubeId}?rel=0"
            title="${v.title}" frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen loading="lazy"></iframe>
        </div>
        <div class="video-card-info">
          <h4>${v.title}</h4>
          <span><i class="fab fa-youtube"></i> ${v.description}</span>
        </div>
      </div>`).join('');
  }

  /* ── Subscribe banner ── */
  const subEl = qs('#video-subscribe');
  if (subEl) {
    subEl.innerHTML = `
      <div class="video-sub-banner" data-aos="fade-up">
        <div class="vsb-icon"><i class="fab fa-youtube"></i></div>
        <div class="vsb-text">
          <h4>More Videos Coming Soon</h4>
          <p>Subscribe to our channel and turn on notifications, be the first to watch event replays, live streams, and announcements.</p>
        </div>
        <a href="${chUrl}?sub_confirmation=1" target="_blank" rel="noopener" class="btn btn-youtube">
          <i class="fab fa-youtube"></i> Subscribe to Our Channel
        </a>
      </div>`;
  }
}


/* ============================================================
   13. LIVESTREAM HANDLER
   ============================================================ */
function initLivestream() {
  const ls          = CALUNAH_CONFIG.livestream;
  const box         = qs('#livestream-box');
  const embedEl     = qs('#live-embed');
  const placeholder = qs('#live-placeholder');
  const statusText  = qs('#live-status-text');
  const tabs        = qsa('.lp-tab');
  if (!box) return;

  let activePlatform = ls.platform || 'youtube';

  function setEmbed(platform) {
    activePlatform = platform;
    tabs.forEach(t => t.classList.toggle('active', t.dataset.platform === platform));
    if (!ls.active || !embedEl) return;

    let html = '';
    if (platform === 'youtube') {
      html = `<iframe src="https://www.youtube.com/embed/${ls.youtubeId}?autoplay=1&rel=0"
                      title="CALUNAH Livestream" frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen></iframe>`;
    } else if (platform === 'facebook') {
      html = `<iframe src="https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(ls.facebookUrl)}&show_text=0&autoplay=1"
                      title="CALUNAH Facebook Live" frameborder="0"
                      allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                      allowfullscreen></iframe>`;
    } else if (platform === 'instagram') {
      html = `<div class="live-ig-fallback">
                <i class="fab fa-instagram"></i>
                <p>Instagram Live is best experienced in the app.</p>
                <a href="${ls.instagramUrl}" target="_blank" rel="noopener" class="btn-primary">
                  Open Instagram Live
                </a>
              </div>`;
    }
    embedEl.innerHTML = html;
  }

  if (ls.active) {
    box.classList.add('is-live');
    if (placeholder) placeholder.style.display = 'none';
    if (statusText) statusText.textContent = 'LIVE NOW';
    setEmbed(activePlatform);
  } else {
    box.classList.add('offline');
    if (statusText) statusText.textContent = 'OFFLINE';
    if (embedEl) { embedEl.style.display = 'none'; }

    // Fill the #live-next-event div (already in HTML placeholder structure)
    const nextEventEl = qs('#live-next-event');
    if (nextEventEl && ls.nextStream) {
      const ns = ls.nextStream;
      nextEventEl.innerHTML = `
        <div class="next-stream-card">
          <div class="ns-title">${ns.title}</div>
          <div class="ns-meta">
            <span><i class="fas fa-calendar-alt"></i> ${ns.date}</span>
            <span><i class="fas fa-clock"></i> ${ns.time}</span>
            <span><i class="fas fa-tv"></i> ${ns.platform}</span>
          </div>
        </div>
      `;
    }
    if (placeholder) placeholder.style.display = '';
  }

  tabs.forEach(tab => {
    tab.addEventListener('click', () => setEmbed(tab.dataset.platform));
  });
}


/* ============================================================
   14. e-NEWSLETTER ISSUES BUILDER
   ============================================================ */
function buildNewsletterIssues() {
  const list = qs('#issues-list');
  if (!list) return;

  // Inject featured reader above issues list (only once)
  const featured = CALUNAH_CONFIG.newsletters.find(n => n.featured);
  const readerWrap = qs('#nl-reader-wrap');
  if (featured && readerWrap) {
    readerWrap.innerHTML = `
      <div class="nl-featured-header">
        <div class="nl-featured-badge"><i class="fas fa-star"></i> Latest Issue</div>
        <h3 class="nl-featured-title">${featured.title}</h3>
        <p class="nl-featured-sub">${featured.preview}</p>
        <a href="${featured.pdf}" download class="btn btn-gold nl-download-btn">
          <i class="fas fa-download"></i> Download PDF
        </a>
        <a href="${featured.pdf}" target="_blank" rel="noopener" class="btn btn-ghost nl-open-btn">
          <i class="fas fa-external-link-alt"></i> Open Full Screen
        </a>
      </div>
      <div class="nl-book-viewer">
        <iframe data-src="${featured.pdf}#toolbar=1&navpanes=1&scrollbar=1&view=FitH"
          class="nl-iframe" title="${featured.title}" loading="lazy"
          allowfullscreen></iframe>
        <div class="nl-mobile-fallback">
          <i class="fas fa-book-open"></i>
          <p>Tap to read the newsletter</p>
          <a href="${featured.pdf}" target="_blank" rel="noopener" class="btn btn-gold">
            <i class="fas fa-file-pdf"></i> Open Newsletter
          </a>
        </div>
      </div>
    `;
  }

  // Past issues list (skip featured)
  list.innerHTML = CALUNAH_CONFIG.newsletters.map((n, i) => `
    <div class="issue-item${n.featured ? ' issue-featured' : ''}" data-aos="fade-right" data-aos-delay="${i * 60}">
      <div class="issue-icon">${n.featured ? '<i class="fas fa-star"></i>' : '<i class="fas fa-newspaper"></i>'}</div>
      <div class="issue-info">
        <div class="issue-title">${n.title}${n.featured ? ' <span class="issue-new-tag">NEW</span>' : ''}</div>
        <div class="issue-date"><i class="fas fa-calendar-alt"></i> ${n.date}</div>
        <div class="issue-preview">${n.preview}</div>
      </div>
      <a href="${n.pdf}" target="_blank" rel="noopener" class="issue-download" title="Read / Download PDF">
        <i class="fas fa-file-pdf"></i>
        <span>Read</span>
      </a>
    </div>
  `).join('');
}


/* ============================================================
   15. MEMBERSHIP TIERS BUILDER
   ============================================================ */
function buildMembership() {
  const grid = qs('#membership-grid');
  if (!grid) return;

  grid.innerHTML = CALUNAH_CONFIG.membership.map((tier, i) => `
    <div class="membership-card ${tier.featured ? 'featured' : ''}"
         data-aos="fade-up" data-aos-delay="${i * 100}">
      ${tier.featured ? '<div class="membership-popular">Most Popular</div>' : ''}
      <div class="membership-icon" style="color:${tier.color}">
        <i class="${tier.icon}"></i>
      </div>
      <h3 class="membership-tier">${tier.tier}</h3>
      <div class="membership-price">
        <span class="price-amount">${tier.price}</span>
        <span class="price-period">${tier.period}</span>
      </div>
      <ul class="membership-features">
        ${tier.features.map(f => `<li><i class="fas fa-check"></i> ${f}</li>`).join('')}
      </ul>
      <a href="#membership-form" class="btn-membership" style="background:${tier.color}">
        ${tier.cta}
      </a>
    </div>
  `).join('');
}


/* ============================================================
   16. MEMBERSHIP APPLICATION FORM
   ============================================================ */
function initMembershipForm() {
  const form = qs('#membership-form');
  if (!form) return;

  form.addEventListener('submit', async e => {
    e.preventDefault();
    const btn  = qs('[type=submit]', form);
    const orig = btn.innerHTML;
    btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Submitting…';
    btn.disabled = true;

    const data = Object.fromEntries(new FormData(form));
    data._subject   = 'New CALUNAH Membership Application';
    data._template  = 'table';
    data._captcha   = 'false';
    data._replyto   = data.email || '';
    /* Auto-reply receipt sent back to applicant */
    data._autoresponse = `Dear ${data.firstName || 'Valued Applicant'},\n\nThank you for applying to become a member of CALUNAH, Club des Alumni de l'Université Adventiste d'Haïti.\n\nYour application for "${data.membershipType || 'CALUNAH Membership'}" has been received and is currently under review. Our team will contact you within 3–5 business days.\n\n────────────────────────\nCALUNAH\n2990 Hester Avenue SE\nPalm Bay, FL 32909\ninfo@calunah.org | 631-961-9945\n────────────────────────\n\nThis is a confirmation of your submission. Please keep it for your records.\n\nWith gratitude,\nCALUNAH Membership Team`;

    try {
      const res = await fetch('https://formsubmit.co/ajax/boisrondrock@gmail.com', {
        method:  'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body:    JSON.stringify(data)
      });
      if (res.ok) {
        form.innerHTML = `
          <div class="form-success">
            <i class="fas fa-check-circle"></i>
            <h3>Application Received!</h3>
            <p>Thank you for applying to join CALUNAH. A confirmation has been sent to <strong>${data.email || 'your email'}</strong>. We will review your application and contact you within 3–5 business days.</p>
          </div>
        `;
      } else throw new Error();
    } catch {
      btn.innerHTML = orig;
      btn.disabled  = false;
      showFormError(form, 'Submission failed. Please email membership@calunah.org directly.');
    }
  });
}


/* ============================================================
   16b. RECURRING MEMBERSHIP WIDGET
   ============================================================ */
function initRecurringMembership() {
  const wrap = qs('#recurring-section');
  if (!wrap) return;

  let period = 'monthly';   // 'monthly' | 'yearly'
  let amount = 50;          // default $50

  const summaryEl  = qs('#recurring-summary', wrap);
  const zelleBtnEl = qs('#rec-zelle-btn', wrap);
  const ppBtnEl    = qs('#rec-paypal-btn', wrap);
  const customEl   = qs('#rec-custom', wrap);

  /* Build PayPal URL with pre-filled amount */
  function paypalURL(amt) {
    return `https://www.paypal.com/donate?business=donate%40calunah.org&amount=${amt}&currency_code=USD&item_name=CALUNAH+Recurring+Membership`;
  }

  /* Update summary line and PayPal link */
  function refresh() {
    const label = period === 'yearly'
      ? `$${amount} / year <small style="opacity:.65;font-size:.78rem">(≈ $${Math.round(amount / 12)}/mo)</small>`
      : `$${amount} / month`;
    summaryEl.innerHTML = `You'll be charged <strong>${label}</strong>`;
    ppBtnEl.href = paypalURL(amount);
  }

  /* Period toggle */
  qsa('.rec-period-btn', wrap).forEach(btn => {
    btn.addEventListener('click', () => {
      period = btn.dataset.period;
      qsa('.rec-period-btn', wrap).forEach(b => b.classList.toggle('active', b === btn));
      refresh();
    });
  });

  /* Preset amount buttons */
  qsa('.rec-amt-btn', wrap).forEach(btn => {
    btn.addEventListener('click', () => {
      amount = parseInt(btn.dataset.amount, 10);
      qsa('.rec-amt-btn', wrap).forEach(b => b.classList.toggle('active', b === btn));
      if (customEl) customEl.value = '';
      refresh();
    });
  });

  /* Custom amount input */
  if (customEl) {
    customEl.addEventListener('input', () => {
      const val = parseInt(customEl.value, 10);
      if (val >= 25) {
        amount = val;
        qsa('.rec-amt-btn', wrap).forEach(b => b.classList.remove('active'));
        refresh();
      }
    });
  }

  refresh(); // set initial state
}


/* ============================================================
   17. NEWSLETTER SIGNUP FORM
   ============================================================ */
function initNLSignupForm() {
  qsa('#nl-signup-form, .nl-form, #newsletter-form').forEach(form => {
    form.addEventListener('submit', async e => {
      e.preventDefault();
      const btn     = qs('[type=submit]', form);
      const orig    = btn.innerHTML;
      const success = qs('#nl-signup-success', form) || qs('.nl-success-msg', form) || qs('#nl-success', form);
      btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i>';
      btn.disabled  = true;

      const data = Object.fromEntries(new FormData(form));
      data._subject      = 'New CALUNAH Newsletter Subscriber';
      data._captcha      = 'false';
      data._replyto      = data.email || '';
      data._autoresponse = `Welcome to the CALUNAH Newsletter!\n\nDear ${data.firstName || 'Friend'},\n\nYou have been successfully subscribed to the CALUNAH quarterly newsletter.\n\nYou will receive our next issue with alumni news, scholarship announcements, upcoming events, and community stories.\n\n────────────────────────\nCALUNAH, calunah.org\ninfo@calunah.org | 631-961-9945\n────────────────────────\n\nTo unsubscribe, simply reply to this email.\n\nWith gratitude,\nCALUNAH Communications Team`;

      try {
        const res = await fetch('https://formsubmit.co/ajax/boisrondrock@gmail.com', {
          method:  'POST',
          headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
          body:    JSON.stringify(data)
        });

        if (res.ok) {
          if (success) {
            success.style.display = 'flex';
            btn.style.display     = 'none';
          } else {
            form.innerHTML = `
              <div class="nl-success">
                <i class="fas fa-check-circle"></i>
                <p>You're subscribed! Welcome to the CALUNAH community.</p>
              </div>
            `;
          }
        } else throw new Error();
      } catch {
        btn.innerHTML = orig;
        btn.disabled  = false;
        showFormError(form, 'Subscription failed. Please try again or email newsletter@calunah.org.');
      }
    });
  });
}


/* ============================================================
   18. CONTACT FORM
   ============================================================ */
function initContactForm() {
  const form = qs('#contact-form');
  if (!form) return;

  form.addEventListener('submit', async e => {
    e.preventDefault();
    const btn  = qs('[type=submit]', form);
    const orig = btn.innerHTML;
    btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending…';
    btn.disabled  = true;

    const data = Object.fromEntries(new FormData(form));
    data._subject  = 'New Message from CALUNAH Website';
    data._template = 'table';
    data._captcha  = 'false';

    try {
      const res = await fetch('https://formsubmit.co/ajax/boisrondrock@gmail.com', {
        method:  'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body:    JSON.stringify(data)
      });
      if (res.ok) {
        form.innerHTML = `
          <div class="form-success">
            <i class="fas fa-check-circle"></i>
            <h3>Message Sent!</h3>
            <p>Thank you for reaching out. A member of our team will respond within 48 hours.</p>
          </div>
        `;
      } else throw new Error();
    } catch {
      btn.innerHTML = orig;
      btn.disabled  = false;
      showFormError(form, 'Failed to send. Please email info@calunah.org directly.');
    }
  });
}

function showFormError(form, msg) {
  let err = qs('.form-error', form);
  if (!err) {
    err = document.createElement('div');
    err.className = 'form-error';
    form.appendChild(err);
  }
  err.textContent = msg;
  err.style.display = 'block';
  setTimeout(() => { err.style.display = 'none'; }, 6000);
}


/* ============================================================
   19. SOCIAL LINKS
   ============================================================ */
function updateSocialLinks() {
  const map = {
    '.social-facebook':  CALUNAH_CONFIG.social.facebook,
    '.social-instagram': CALUNAH_CONFIG.social.instagram,
    '.social-twitter':   CALUNAH_CONFIG.social.twitter,
    '.social-youtube':   CALUNAH_CONFIG.social.youtube
  };
  Object.entries(map).forEach(([sel, url]) => {
    qsa(sel).forEach(a => { if (url) a.href = url; });
  });
}


/* ============================================================
   20. BACK TO TOP BUTTON
   ============================================================ */
function initBackToTop() {
  const btn = qs('#back-to-top');
  if (!btn) return;
  window.addEventListener('scroll', () => {
    btn.classList.toggle('visible', window.scrollY > 400);
  }, { passive: true });
  btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}


/* ============================================================
   21. FALLING LOGOS ANIMATION
   ============================================================ */
function initFallingLogos() {
  // Create the canvas if it doesn't exist in HTML
  let canvas = qs('#logo-canvas');
  if (!canvas) {
    canvas = document.createElement('canvas');
    canvas.id = 'logo-canvas';
    Object.assign(canvas.style, {
      position:      'fixed',
      top:           '0',
      left:          '0',
      width:         '100%',
      height:        '100%',
      pointerEvents: 'none',
      zIndex:        '2',
      opacity:       '0',
      transition:    'opacity 2s ease'
    });
    document.body.appendChild(canvas);
  }
  const ctx = canvas.getContext('2d');
  let W, H;
  const logos = [];
  const COUNT = window.innerWidth < 768 ? 8 : 14; // fewer on mobile for performance
  const logoImg = new Image();
  logoImg.src = 'images/logo.png';

  function resize() {
    W = canvas.width  = window.innerWidth;
    H = canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener('resize', resize, { passive: true });

  canvas.style.opacity    = '0';
  canvas.style.transition = 'opacity 2s ease';

  const splash = qs('#splash');

  function activateCanvas() {
    canvas.style.opacity = '1';
    initLogoParticles();
  }

  if (!splash) {
    setTimeout(activateCanvas, 400);
  } else {
    const obs = new MutationObserver(() => {
      if (splash.classList.contains('hidden') || !splash.isConnected) {
        obs.disconnect();
        setTimeout(activateCanvas, 300);
      }
    });
    obs.observe(splash, { attributes: true, childList: true });
  }

  class Logo {
    constructor(staggerIndex) { this.reset(true, staggerIndex); }
    reset(init, stagger) {
      this.size   = Math.random() * 44 + 18;
      this.x      = Math.random() * (W || window.innerWidth);
      this.y      = init ? -this.size - (stagger || 0) * 90 : -this.size - Math.random() * 200;
      this.speed  = Math.random() * 0.9 + 0.35;
      this.drift  = (Math.random() - 0.5) * 0.55;
      this.rot    = Math.random() * Math.PI * 2;
      this.rotSpd = (Math.random() - 0.5) * 0.025;
      this.alpha  = Math.random() * 0.10 + 0.04;
      this.targetAlpha = this.alpha;
      this.sparkTimer  = Math.random() * 220 + 60;
    }
    update() {
      this.y += this.speed;
      this.x += this.drift;
      this.rot += this.rotSpd;

      this.sparkTimer--;
      if (this.sparkTimer <= 0) {
        this.sparkTimer  = Math.random() * 220 + 80;
        this.targetAlpha = Math.random() * 0.52 + 0.08;
      }
      // Ease toward target, then return to resting
      this.alpha += (this.targetAlpha - this.alpha) * 0.035;
      if (Math.abs(this.alpha - this.targetAlpha) < 0.008) {
        this.targetAlpha = Math.random() * 0.09 + 0.04;
      }

      const curH = H || window.innerHeight;
      const curW = W || window.innerWidth;
      if (this.y > curH + this.size + 30) this.reset(false);
      if (this.x < -this.size * 2 || this.x > curW + this.size * 2) {
        this.x = Math.random() * curW;
      }
    }
    draw() {
      ctx.save();
      ctx.translate(this.x, this.y);
      ctx.rotate(this.rot);
      ctx.globalAlpha = Math.min(this.alpha, 1);
      // shadowBlur removed, was causing scroll lag on all devices
      ctx.drawImage(logoImg, -this.size / 2, -this.size / 2, this.size, this.size);
      ctx.restore();
    }
  }

  // Pause animation when tab is not visible to save CPU/GPU
  let logoPaused = false;
  document.addEventListener('visibilitychange', () => { logoPaused = document.hidden; });

  function initLogoParticles() {
    for (let i = 0; i < COUNT; i++) logos.push(new Logo(i));
    (function loop() {
      if (!logoPaused) {
        ctx.clearRect(0, 0, W, H);
        if (logoImg.complete && logoImg.naturalWidth > 0) {
          logos.forEach(l => { l.update(); l.draw(); });
        }
      }
      requestAnimationFrame(loop);
    })();
  }
}


/* ============================================================
   22. SMOOTH SCROLL for anchor links
   ============================================================ */
function initSmoothScroll() {
  document.addEventListener('click', e => {
    const a = e.target.closest('a[href^="#"]');
    if (!a) return;
    const target = qs(a.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    const top = target.getBoundingClientRect().top + window.scrollY - 80;
    window.scrollTo({ top, behavior: 'smooth' });
  });
}


/* ============================================================
   23. DONATION AMOUNT SELECTOR
   ============================================================ */
function initDonation() {
  const amountBtns  = qsa('.donate-amount-btn');
  const customInput = qs('#donate-custom');
  const donateBtn   = qs('#donate-submit-btn');
  if (!amountBtns.length && !donateBtn) return;

  let selectedAmount = '';

  amountBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      amountBtns.forEach(b => b.classList.remove('selected'));
      btn.classList.add('selected');
      selectedAmount = btn.dataset.amount;
      if (customInput) customInput.value = '';
    });
  });

  if (customInput) {
    customInput.addEventListener('input', () => {
      amountBtns.forEach(b => b.classList.remove('selected'));
      selectedAmount = customInput.value;
    });
  }

  if (donateBtn) {
    donateBtn.addEventListener('click', () => {
      const amt = (customInput && customInput.value) ? customInput.value : selectedAmount;
      if (!amt || isNaN(parseFloat(amt)) || parseFloat(amt) <= 0) {
        alert('Please select or enter a donation amount.');
        return;
      }
      const url = `https://www.paypal.com/donate?business=donations@calunah.org&amount=${encodeURIComponent(amt)}&currency_code=USD&item_name=CALUNAH+Donation`;
      window.open(url, '_blank', 'noopener');
    });
  }
}


/* ============================================================
   24. COOKIE CONSENT BANNER
   ============================================================ */
function initCookieBanner() {
  if (localStorage.getItem('calunah-cookies')) return;
  const banner = document.createElement('div');
  banner.className = 'cookie-banner';
  banner.innerHTML = `
    <div class="cookie-content">
      <i class="fas fa-cookie-bite"></i>
      <p>We use cookies to improve your experience on our site. By continuing to browse, you agree to our
         <a href="#" class="cookie-link">Privacy Policy</a>.</p>
      <div class="cookie-btns">
        <button class="cookie-accept btn-primary">Accept</button>
        <button class="cookie-decline btn-outline">Decline</button>
      </div>
    </div>
  `;
  document.body.appendChild(banner);
  setTimeout(() => banner.classList.add('visible'), 1800);

  qs('.cookie-accept', banner).addEventListener('click', () => {
    localStorage.setItem('calunah-cookies', 'accepted');
    banner.classList.remove('visible');
    setTimeout(() => banner.remove(), 500);
  });
  qs('.cookie-decline', banner).addEventListener('click', () => {
    localStorage.setItem('calunah-cookies', 'declined');
    banner.classList.remove('visible');
    setTimeout(() => banner.remove(), 500);
  });
}


/* ============================================================
   25. ACCESSIBILITY HELPERS
   ============================================================ */
function initAccessibility() {
  document.addEventListener('keydown', () => document.body.classList.add('keyboard-nav'));
  document.addEventListener('mousedown', () => document.body.classList.remove('keyboard-nav'));
}


/* ============================================================
   26. CURRENT YEAR IN FOOTER
   ============================================================ */
function updateYear() {
  qsa('.current-year').forEach(el => {
    el.textContent = new Date().getFullYear();
  });
}


/* ============================================================
   27. LAZY-LOAD iframes
   ============================================================ */
function initLazyIframes() {
  if (!('IntersectionObserver' in window)) return;
  const obs = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const iframe = entry.target;
      if (iframe.dataset.src) {
        iframe.src = iframe.dataset.src;
        delete iframe.dataset.src;
      }
      obs.unobserve(iframe);
    });
  }, { rootMargin: '200px' });
  qsa('iframe[data-src]').forEach(f => obs.observe(f));
}


/* ============================================================
   28. LANGUAGE TRANSLATION SYSTEM
   EN = English | FR = Français | KR = Kreyòl ayisyen
   ============================================================ */
const CALUNAH_LANG = {

  en: {
    /*, Navigation, */
    'nav.home':             'Home',
    'nav.about':            'About',
    'nav.work':             'Our Work',
    'nav.events':           'Events',
    'nav.gallery':          'Gallery',
    'nav.videos':           'Videos',
    'nav.newsletter':       'Newsletter',
    'nav.membership':       'Membership',
    'nav.contact':          'Contact',
    'nav.donate':           'Donate',
    'nav.dd.mission':       'Mission & Values',
    'nav.dd.history':       'Our History',
    'nav.dd.committee':     'Executive Committee',
    'nav.dd.chapters':      'Chapter Presidents',
    'nav.dd.donors':        'Donors & Partners',
    /*, Hero, */
    'hero.desc':            'Uniting UNAH graduates across the globe through shared faith, fellowship, and an unwavering commitment to excellence.',
    'hero.btn1':            'Our Story',
    'hero.btn2':            'Join CALUNAH',
    'hero.btn3':            ' Donate',
    /*, Stats, */
    'stats.years':          'Years Strong',
    'stats.alumni':         'Alumni Worldwide',
    'stats.countries':      'Countries',
    'stats.scholarships':   'Scholarships Awarded',
    'stats.events':         'Annual Events',
    /*, About, */
    'about.badge':          'Who We Are',
    'about.title':          'About CALUNAH',
    'about.missionHead':    'Our Mission',
    'about.val.faith':      'Faith',
    'about.val.faith.desc': 'Grounded in Seventh-day Adventist Christian values and principles',
    'about.val.unity':      'Unity',
    'about.val.unity.desc': 'Connecting alumni across generations, professions, and continents',
    'about.val.excellence': 'Excellence',
    'about.val.excellence.desc': 'Upholding UNAH\'s legacy of academic and professional achievement',
    'about.val.service':    'Service',
    'about.val.service.desc':'Giving back to Haiti and empowering the next generation of students',
    'about.btn1':           'Become a Member',
    'about.btn2':           'Our History',
    /*, History, */
    'history.badge':        'Our Story',
    'history.title':        'Our History',
    'history.sub':          'Three decades of excellence, unity, and service to Haiti and the world',
    /*, Work, */
    'work.badge':           'Making a Difference',
    'work.title':           'Our Work',
    'work.sub':             'Six pillars of impact, transforming lives in Haiti and across the diaspora',
    /*, Committee, */
    'committee.badge':      'Leadership',
    'committee.title':      'Executive Committee',
    'committee.sub':        'Dedicated leaders serving our alumni community with integrity and vision',
    'committee.note':       'Committee members are elected by the CALUNAH membership for 2-year terms.',
    'committee.contact':    'Contact',
    /*, Chapters, */
    'chapters.badge':       'Around the World',
    'chapters.title':       'Chapter Presidents',
    'chapters.sub':         'CALUNAH chapters unite our alumni family across cities, countries, and continents',
    'chapters.president':   'Chapter President',
    'chapters.contact':     'Contact Chapter',
    'chapters.cta':         'Start a Chapter in Your City',
    /*, Donors, */
    'donors.badge':         'With Gratitude',
    'donors.title':         'Donors & Partners',
    'donors.sub':           'We are deeply grateful to the generous individuals and organizations who make our mission possible',
    'donors.platinum':      'Platinum Partners',
    'donors.gold':          'Gold Partners',
    'donors.silver':        'Silver Partners',
    'donors.become':        'Become a Partner',
    'donors.cta.btn':       'Partner With Us',
    /*, Events, */
    'events.badge':         'Stay Connected',
    'events.title':         'Upcoming Events',
    'events.sub':           'Enriching experiences that strengthen our alumni family. Submit your own event below.',
    /*, Gallery, */
    'gallery.badge':        'Moments We Cherish',
    'gallery.title':        'Photo Gallery',
    'gallery.sub':          'Celebrating togetherness, achievement, and our beautiful community',
    /*, Videos, */
    'videos.badge':         'Watch & Relive',
    'videos.title':         'Videos & Live Stream',
    'videos.sub':           'Relive our events and catch us LIVE on your favorite platform',
    /*, Newsletter, */
    'nl.badge':             'Stay Informed',
    'nl.title':             'e-Newsletter',
    'nl.sub':               'Alumni news, success stories, scholarship updates, and upcoming events delivered right to your inbox',
    'nl.signupTitle':       'Subscribe to Our Newsletter',
    'nl.issuesTitle':       'Past Issues',
    'nl.issuesSub':         'Download and read our recent newsletters:',
    /*, Membership, */
    'membership.badge':     'Join the Family',
    'membership.title':     'Membership',
    'membership.sub':       'Be part of a global community of UNAH graduates committed to excellence, faith, and service',
    /*, Donate, */
    'donate.badge':         'Make an Impact',
    'donate.title':         'Support Our Mission',
    /*, Contact, */
    'contact.badge':        'Reach Out',
    'contact.title':        'Contact Us',
    'contact.heading':      'Connect With CALUNAH',
    /*, Footer, */
    'footer.about':         'About CALUNAH',
    'footer.involved':      'Get Involved',
    'footer.updated':       'Stay Updated',
  },

  fr: {
    /*, Navigation, */
    'nav.home':             'Accueil',
    'nav.about':            'À propos',
    'nav.work':             'Notre action',
    'nav.events':           'Événements',
    'nav.gallery':          'Galerie',
    'nav.videos':           'Vidéos',
    'nav.newsletter':       'Bulletin',
    'nav.membership':       'Adhésion',
    'nav.contact':          'Contact',
    'nav.donate':           'Faire un don',
    'nav.dd.mission':       'Mission et valeurs',
    'nav.dd.history':       'Notre histoire',
    'nav.dd.committee':     'Comité exécutif',
    'nav.dd.chapters':      'Présidents de chapitre',
    'nav.dd.donors':        'Donateurs et partenaires',
    /*, Hero, */
    'hero.desc':            'Unissant les diplômés de l\'UNAH à travers le monde par la foi partagée, la fraternité et un engagement indéfectible envers l\'excellence.',
    'hero.btn1':            'Notre histoire',
    'hero.btn2':            'Rejoindre CALUNAH',
    'hero.btn3':            ' Faire un don',
    /*, Stats, */
    'stats.years':          'Années de service',
    'stats.alumni':         'Diplômés mondiaux',
    'stats.countries':      'Pays',
    'stats.scholarships':   'Bourses attribuées',
    'stats.events':         'Événements annuels',
    /*, About, */
    'about.badge':          'Qui nous sommes',
    'about.title':          'À propos de CALUNAH',
    'about.missionHead':    'Notre mission',
    'about.val.faith':      'Foi',
    'about.val.faith.desc': 'Fondés sur les valeurs chrétiennes adventistes du septième jour',
    'about.val.unity':      'Unité',
    'about.val.unity.desc': 'Connecter les anciens élèves à travers les générations, les professions et les continents',
    'about.val.excellence': 'Excellence',
    'about.val.excellence.desc': 'Perpétuer l\'héritage académique et professionnel de l\'UNAH',
    'about.val.service':    'Service',
    'about.val.service.desc':'Redonner à Haïti et responsabiliser la prochaine génération d\'étudiants',
    'about.btn1':           'Devenir membre',
    'about.btn2':           'Notre histoire',
    /*, History, */
    'history.badge':        'Notre histoire',
    'history.title':        'Notre histoire',
    'history.sub':          'Trois décennies d\'excellence, d\'unité et de service à Haïti et au monde',
    /*, Work, */
    'work.badge':           'Faire la différence',
    'work.title':           'Notre action',
    'work.sub':             'Six piliers d\'impact, transformant des vies en Haïti et dans la diaspora',
    /*, Committee, */
    'committee.badge':      'Direction',
    'committee.title':      'Comité exécutif',
    'committee.sub':        'Des leaders dévoués servant notre communauté d\'anciens élèves avec intégrité et vision',
    'committee.note':       'Les membres du comité sont élus par les membres de CALUNAH pour des mandats de 2 ans.',
    'committee.contact':    'Contacter',
    /*, Chapters, */
    'chapters.badge':       'À travers le monde',
    'chapters.title':       'Présidents de chapitre',
    'chapters.sub':         'Les chapitres CALUNAH unissent notre famille d\'anciens élèves dans les villes, pays et continents',
    'chapters.president':   'Président de chapitre',
    'chapters.contact':     'Contacter le chapitre',
    'chapters.cta':         'Démarrer un chapitre dans votre ville',
    /*, Donors, */
    'donors.badge':         'Avec gratitude',
    'donors.title':         'Donateurs et partenaires',
    'donors.sub':           'Nous sommes profondément reconnaissants envers les généreux individus et organisations qui rendent notre mission possible',
    'donors.platinum':      'Partenaires Platine',
    'donors.gold':          'Partenaires Or',
    'donors.silver':        'Partenaires Argent',
    'donors.become':        'Devenir partenaire',
    'donors.cta.btn':       'Nous rejoindre',
    /*, Events, */
    'events.badge':         'Restez connecté',
    'events.title':         'Événements à venir',
    'events.sub':           'Des expériences enrichissantes qui renforcent notre famille d\'anciens élèves. Soumettez votre propre événement ci-dessous.',
    /*, Gallery, */
    'gallery.badge':        'Moments précieux',
    'gallery.title':        'Galerie photos',
    'gallery.sub':          'Célébrant la fraternité, les réalisations et notre belle communauté',
    /*, Videos, */
    'videos.badge':         'Regardez et revivez',
    'videos.title':         'Vidéos et direct',
    'videos.sub':           'Revivez nos événements et regardez-nous EN DIRECT sur votre plateforme préférée',
    /*, Newsletter, */
    'nl.badge':             'Restez informé',
    'nl.title':             'Bulletin d\'information',
    'nl.sub':               'Actualités des anciens, histoires de réussite, mises à jour des bourses et événements à venir directement dans votre boîte de réception',
    'nl.signupTitle':       'Abonnez-vous à notre bulletin',
    'nl.issuesTitle':       'Numéros précédents',
    'nl.issuesSub':         'Téléchargez et lisez nos bulletins récents :',
    /*, Membership, */
    'membership.badge':     'Rejoignez la famille',
    'membership.title':     'Adhésion',
    'membership.sub':       'Faites partie d\'une communauté mondiale de diplômés de l\'UNAH engagés dans l\'excellence, la foi et le service',
    /*, Donate, */
    'donate.badge':         'Faites un impact',
    'donate.title':         'Soutenez notre mission',
    /*, Contact, */
    'contact.badge':        'Contactez-nous',
    'contact.title':        'Nous contacter',
    'contact.heading':      'Contactez CALUNAH',
    /*, Footer, */
    'footer.about':         'À propos de CALUNAH',
    'footer.involved':      'S\'impliquer',
    'footer.updated':       'Restez à jour',
  },

  kr: {
    /*, Navigation, */
    'nav.home':             'Akèy',
    'nav.about':            'Sou nou',
    'nav.work':             'Travay nou',
    'nav.events':           'Evènman',
    'nav.gallery':          'Galeri',
    'nav.videos':           'Videyo',
    'nav.newsletter':       'Bilten',
    'nav.membership':       'Manm',
    'nav.contact':          'Kontakte',
    'nav.donate':           'Fè yon don',
    'nav.dd.mission':       'Misyon ak valè',
    'nav.dd.history':       'Istwa nou',
    'nav.dd.committee':     'Komite egzekitif',
    'nav.dd.chapters':      'Prezidan chapit',
    'nav.dd.donors':        'Donè ak patnè',
    /*, Hero, */
    'hero.desc':            'Reyini diplome UNAH toupatou nan mond lan atravè lafwa, kominote ak angajman pou ekselans.',
    'hero.btn1':            'Istwa nou',
    'hero.btn2':            'Rantre nan CALUNAH',
    'hero.btn3':            ' Fè yon don',
    /*, Stats, */
    'stats.years':          'Ane Fò',
    'stats.alumni':         'Diplome Mondyal',
    'stats.countries':      'Peyi',
    'stats.scholarships':   'Bous Akòde',
    'stats.events':         'Evènman Anyèl',
    /*, About, */
    'about.badge':          'Ki nou ye',
    'about.title':          'Sou CALUNAH',
    'about.missionHead':    'Misyon nou',
    'about.val.faith':      'Lafwa',
    'about.val.faith.desc': 'Anchore nan valè kretyen adventis jou setyèm lan',
    'about.val.unity':      'Inite',
    'about.val.unity.desc': 'Konekte alumni yo atravè jenerasyon, pwofesyon ak kontinan',
    'about.val.excellence': 'Ekselans',
    'about.val.excellence.desc': 'Kenbe eritaj akademik ak pwofesyonèl UNAH lan',
    'about.val.service':    'Sèvis',
    'about.val.service.desc':'Bay Ayiti retou ak ba jenerasyon pwochen elèv yo pouvwa',
    'about.btn1':           'Vin yon manm',
    'about.btn2':           'Istwa nou',
    /*, History, */
    'history.badge':        'Istwa nou',
    'history.title':        'Istwa nou',
    'history.sub':          'Twa deseni ekselans, inite ak sèvis pou Ayiti ak mond lan',
    /*, Work, */
    'work.badge':           'Fè yon diferans',
    'work.title':           'Travay nou',
    'work.sub':             'Sis pilye enpak, ap transfòme lavi ann Ayiti ak nan dyaspora a',
    /*, Committee, */
    'committee.badge':      'Lidèchip',
    'committee.title':      'Komite egzekitif',
    'committee.sub':        'Lidè dedye k ap sèvi kominote alumni nou an ak entegrite ak vizyon',
    'committee.note':       'Manm komite yo eli pa manm CALUNAH yo pou manda de an.',
    'committee.contact':    'Kontakte',
    /*, Chapters, */
    'chapters.badge':       'Toupatou nan mond lan',
    'chapters.title':       'Prezidan chapit',
    'chapters.sub':         'Chapit CALUNAH reyini fanmi alumni nou an nan vil, peyi ak kontinan',
    'chapters.president':   'Prezidan chapit',
    'chapters.contact':     'Kontakte chapit',
    'chapters.cta':         'Kòmanse yon chapit nan vil ou',
    /*, Donors, */
    'donors.badge':         'Ak rekonesan',
    'donors.title':         'Donè ak patnè',
    'donors.sub':           'Nou pwofondman rekonesan anvè moun jenere ak òganizasyon ki rann misyon nou posib',
    'donors.platinum':      'Patnè Platinòm',
    'donors.gold':          'Patnè Lò',
    'donors.silver':        'Patnè Ajan',
    'donors.become':        'Vin yon patnè',
    'donors.cta.btn':       'Rantre ak nou',
    /*, Events, */
    'events.badge':         'Rete konekte',
    'events.title':         'Evènman k ap vini',
    'events.sub':           'Eksperyans riches ki ranfòse fanmi alumni nou an. Soumèt evènman ou a anba a.',
    /*, Gallery, */
    'gallery.badge':        'Moman nou choye',
    'gallery.title':        'Galeri foto',
    'gallery.sub':          'Selebre kominote nou an, reyalizasyon ak bèl moman nou yo',
    /*, Videos, */
    'videos.badge':         'Gade ak reviv',
    'videos.title':         'Videyo ak emisyon an dirèk',
    'videos.sub':           'Reviv evènman nou yo epi gade nou AN DIRÈK sou platfòm ou renmen an',
    /*, Newsletter, */
    'nl.badge':             'Rete enfòme',
    'nl.title':             'Bilten elektwonik',
    'nl.sub':               'Nouvèl alumni, istwa siksè, mizajou bous ak evènman k ap vini livre dirèkteman nan bwat imèl ou',
    'nl.signupTitle':       'Abòne nan bilten nou an',
    'nl.issuesTitle':       'Nimewo pase',
    'nl.issuesSub':         'Telechaje epi li bilten resan nou yo :',
    /*, Membership, */
    'membership.badge':     'Rantre nan fanmi an',
    'membership.title':     'Manm',
    'membership.sub':       'Fè pati yon kominote mondyal diplome UNAH ki angaje nan ekselans, lafwa ak sèvis',
    /*, Donate, */
    'donate.badge':         'Fè yon efè',
    'donate.title':         'Sipòte misyon nou',
    /*, Contact, */
    'contact.badge':        'Kontakte nou',
    'contact.title':        'Kontakte nou',
    'contact.heading':      'Kontakte CALUNAH',
    /*, Footer, */
    'footer.about':         'Sou CALUNAH',
    'footer.involved':      'Enplike w',
    'footer.updated':       'Rete ajou',
  }

};


/* ============================================================
   29. APPLY TRANSLATION
   ============================================================ */
function applyTranslation(lang) {
  const t = CALUNAH_LANG[lang];
  if (!t) return;

  // Translate all [data-i18n] elements
  qsa('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    const val = t[key];
    if (!val) return;

    // Detect meaningful child elements (icons / spans), ignore <br> which is a void line-break
    const childEls = [...el.childNodes].filter(n => n.nodeType === 1 && n.tagName !== 'BR');
    if (childEls.length > 0) {
      // Has icon / span children, only update the text node(s), keep icons intact
      const textNodes = [...el.childNodes].filter(n => n.nodeType === 3 && n.textContent.trim());
      if (textNodes.length > 0) {
        textNodes[textNodes.length - 1].textContent = val;
      }
    } else {
      // Pure text (or text with only <br>), replace full text content safely
      el.textContent = val;
    }
  });

  // Translate dynamically-built chapter cards
  if (t['chapters.president']) {
    qsa('.chapter-president-label').forEach(el => {
      const icon = el.querySelector('i');
      el.textContent = '';
      if (icon) el.appendChild(icon);
      el.appendChild(document.createTextNode(' ' + t['chapters.president']));
    });
  }
  if (t['chapters.contact']) {
    qsa('.chapter-contact a').forEach(el => {
      const icon = el.querySelector('i');
      el.textContent = '';
      if (icon) el.appendChild(icon);
      el.appendChild(document.createTextNode(' ' + t['chapters.contact']));
    });
  }
  if (t['committee.contact']) {
    qsa('.committee-email').forEach(el => {
      const icon = el.querySelector('i');
      el.textContent = '';
      if (icon) el.appendChild(icon);
      el.appendChild(document.createTextNode(' ' + t['committee.contact']));
    });
  }

  // Update lang switcher button active state
  qsa('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });

  // Update HTML lang attribute
  const langMap = { en: 'en', fr: 'fr', kr: 'ht' };
  document.documentElement.lang = langMap[lang] || 'en';

  // Persist preference
  localStorage.setItem('calunah-lang', lang);
}
window.applyTranslation = applyTranslation;


/* ============================================================
   30. LANGUAGE SWITCHER INIT
   ============================================================ */
function initLanguageSwitcher() {
  const savedLang = localStorage.getItem('calunah-lang') || 'en';

  qsa('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === savedLang);
    btn.addEventListener('click', () => applyTranslation(btn.dataset.lang));
  });

  // Apply saved language on load (skip English, it's the default)
  if (savedLang !== 'en') applyTranslation(savedLang);
}


/* ============================================================
   CMS, Load dynamic content from /data/*.json
   Published by the admin panel and served by Vercel.
   Falls back gracefully to CALUNAH_CONFIG defaults.
   ============================================================ */
async function loadCMSContent() {
  const files = {
    events:      'data/events.json',
    blog:        'data/blog.json',
    gallery:     'data/gallery.json',
    chapters:    'data/chapters.json',
    committee:   'data/committee.json',
    newsletters: 'data/newsletters.json',
    donors:      'data/donors.json'
  };
  await Promise.all(Object.entries(files).map(async ([key, path]) => {
    try {
      const r = await fetch(path + '?t=' + Date.now());
      if (!r.ok) return;
      const json = await r.json();
      if (key === 'events'      && json.events)      CALUNAH_CONFIG.events      = json.events;
      if (key === 'blog')                             CALUNAH_CONFIG.blog        = json.posts || [];
      if (key === 'gallery'     && json.items)        CALUNAH_CONFIG.gallery     = json.items;
      if (key === 'chapters'    && json.chapters)     CALUNAH_CONFIG.chapters    = json.chapters;
      if (key === 'committee'   && json.committee)    CALUNAH_CONFIG.committee   = json.committee;
      if (key === 'newsletters' && json.newsletters)  CALUNAH_CONFIG.newsletters = json.newsletters;
      if (key === 'donors'      && json.platinum)     CALUNAH_CONFIG.donors      = { platinum: json.platinum, gold: json.gold, silver: json.silver };
    } catch (e) { /* silently fall back to config defaults */ }
  }));
}

function buildBlog() {
  const posts = CALUNAH_CONFIG.blog || [];
  const section = qs('#blog-section');
  if (!section) return;
  const published = posts.filter(p => p.published !== false);
  if (!published.length) { section.style.display = 'none'; return; }
  section.style.display = '';
  const grid = qs('#blog-grid', section);
  if (!grid) return;
  grid.innerHTML = published.slice(0, 6).map(p => `
    <article class="blog-card" data-aos="fade-up">
      ${p.coverImage ? `<div class="blog-card-img"><img src="${p.coverImage}" alt="${p.title}" loading="lazy"></div>` : ''}
      <div class="blog-card-body">
        <span class="section-badge">${p.category || 'News'}</span>
        <h3>${p.title}</h3>
        <p>${p.excerpt || ''}</p>
        <div class="blog-card-meta">
          ${p.author ? `<span><i class="fas fa-user"></i> ${p.author}</span>` : ''}
          ${p.date ? `<span><i class="fas fa-calendar"></i> ${p.date}</span>` : ''}
        </div>
      </div>
    </article>`).join('');
}


/* ============================================================
   BOOT, DOMContentLoaded
   ============================================================ */
document.addEventListener('DOMContentLoaded', async () => {

  /* Load CMS JSON data first, then build */
  await loadCMSContent();

  /* Core experience */
  initSplash();
  initParticles();
  initFallingLogos();
  initHeroSlider();
  initNav();
  initAOS();
  initSmoothScroll();
  initAccessibility();

  /* Build dynamic content */
  initStats();
  buildCommittee();
  buildChapters();
  buildDonors();
  buildEvents();
  buildGallery();
  buildVideos();
  buildBlog();
  buildNewsletterIssues();
  buildMembership();

  /* Re-scan AOS after all dynamic content is injected */
  if (window.AOS) AOS.refresh();

  /* Interactive widgets */
  initLightbox();
  initLivestream();
  initContactForm();
  initMembershipForm();
  initRecurringMembership();
  initNLSignupForm();

  /* Event spotlight dismiss */
  const spotlightClose = qs('#spotlight-close');
  const spotlight = qs('#event-spotlight');
  if (spotlightClose && spotlight) {
    spotlightClose.addEventListener('click', () => {
      spotlight.classList.add('hidden');
    });
  }
  initDonation();
  updateSocialLinks();
  updateYear();
  initBackToTop();

  /* Performance & UX extras */
  initLazyIframes();
  initCookieBanner();

  /* Language switcher */
  initLanguageSwitcher();

  /* Done */
  console.log(
    '%c CALUNAH Website v3.0, Ready ✓ ',
    'background:#0a2714;color:#c9a227;font-weight:bold;padding:4px 10px;border-radius:4px;font-size:13px;'
  );
});
