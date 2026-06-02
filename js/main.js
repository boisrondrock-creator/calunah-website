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

  // Scholar stories, testimonials, and partner logos are admin-managed and
  // load from data/*.json. Empty by default so each section stays hidden
  // until real content is added (no placeholder people on a live site).
  scholars:     [],
  testimonials: [],
  partners:     [],

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
      time:        '5:30 PM to 9:30 PM',
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
      date:        'April 2 to 4, 2025',
      time:        '7:30 PM to 8:30 PM EDT',
      location:    'Virtual, Zoom',
      flyer:       'images/events/prayer2025.webp',
      tags:        ['Prayer', 'Spiritual', 'Virtual', 'Haiti'],
      description: 'CALUNAH lifted up heartfelt prayers for Haiti, for peace, healing, and strength in the midst of hardship. Three nights of intercession uniting all chapters in one voice before God.',
      fullInfo:    'As uncertainty was being faced among Haitian immigrants, CALUNAH launched a three-day Prayer Session with the participation of all chapters, calling on God for Forgiveness & Reconciliation (Wednesday), Physical, Emotional & Spiritual Healing (Thursday), and Protection & Deliverance (Friday). 📍 Via Zoom · Meeting ID: 898 1400 5387 · Passcode: prayers · "The prayer of a righteous person is powerful and effective." James 5:16. As a faithful God, HE CAME THROUGH!',
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
    { title: 'Perspectives, Spring 2026', date: 'Spring 2026', pdf: 'data/perspectives-spring-2026.pdf', cover: 'images/newsletter-cover.jpg', preview: 'High Tea fundraiser, scholarship spotlights, alumni stories, chapter updates & community impact.', featured: true },
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
    timer = setInterval(() => goTo(cur + 1), 6500);
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

  const NAV_BP = 1340;  // must match the CSS hamburger breakpoint

  function closeMobileMenu() {
    if (!navList) return;
    navList.classList.remove('open');
    burger && burger.classList.remove('open');
    burger && burger.setAttribute('aria-expanded', 'false');
    ddItems.forEach(i => i.classList.remove('mobile-open'));
  }

  /* Mobile dropdown accordion, desktop uses CSS :hover only */
  ddItems.forEach(item => {
    const trigger = qs('.nav-link', item);
    if (!trigger) return;
    trigger.addEventListener('click', e => {
      if (window.innerWidth > NAV_BP) return;   // desktop: let the link work normally
      e.preventDefault();
      item.classList.toggle('mobile-open');
      ddItems.forEach(other => {
        if (other !== item) other.classList.remove('mobile-open');
      });
    });
  });

  /* Close mobile menu when any nav link is clicked.
     Dropdown PARENT links (.nav-has-arrow) only toggle the accordion on
     mobile, so don't close the menu for those. */
  navList && qsa('a', navList).forEach(a => {
    a.addEventListener('click', () => {
      if (window.innerWidth <= NAV_BP && a.classList.contains('nav-has-arrow')) return;
      closeMobileMenu();
    });
  });

  /* Click anywhere outside the open menu (and not on the burger) closes it */
  document.addEventListener('click', e => {
    if (!navList || !navList.classList.contains('open')) return;
    if (navList.contains(e.target) || (burger && burger.contains(e.target))) return;
    closeMobileMenu();
  });

  /* Escape key closes the menu */
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeMobileMenu();
  });

  /* If resized up to desktop while open, reset state */
  window.addEventListener('resize', () => {
    if (window.innerWidth > NAV_BP) closeMobileMenu();
  }, { passive: true });

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
    const isMobile = window.innerWidth < 768;
    AOS.init({
      duration: isMobile ? 400 : 550,   // snappier reveal, less time on screen
      easing:   'ease-out',
      once:     true,                    // never re-animate (no work on scroll-back)
      offset:   40,
      disable:  isMobile ? false : false,
      throttleDelay: 80,                 // fewer scroll recalcs
      startEvent: 'DOMContentLoaded'
    });
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
  const prefersReduced = window.matchMedia &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const easeOut = t => 1 - Math.pow(1 - t, 3); // smooth deceleration

  const countUp = el => {
    const target = +el.dataset.target;
    if (isNaN(target)) return;
    const suffix = el.dataset.suffix || '';
    const prefix = el.dataset.prefix || '';
    if (prefersReduced) {
      el.textContent = prefix + target.toLocaleString() + suffix;
      return;
    }
    const duration = 1800;
    const start    = performance.now();
    const step = now => {
      const p   = Math.min((now - start) / duration, 1);
      const val = Math.floor(easeOut(p) * target);
      el.textContent = prefix + val.toLocaleString() + suffix;
      if (p < 1) requestAnimationFrame(step);
      else el.textContent = prefix + target.toLocaleString() + suffix;
    };
    requestAnimationFrame(step);
  };

  const obs = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      countUp(entry.target);
      obs.unobserve(entry.target);
    });
  }, { threshold: 0.5 });

  // Target ribbon counters (.stat-num) and the Our Work impact bar (.impact-num)
  qsa('.stat-num[data-target], .impact-num[data-target]').forEach(el => obs.observe(el));
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
      <div class="chapter-banner">
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
      <div class="chapter-card-body">
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
   9b. SCHOLAR STORIES BUILDER
   Renders data/scholars.json. Section hides itself when empty,
   so no placeholder people ever appear on the live site.
   Each scholar: { name, program, year, photo, story }
   ============================================================ */
function buildScholars() {
  const grid    = qs('#scholars-grid');
  const section = qs('#scholars');
  if (!grid || !section) return;
  const list = Array.isArray(CALUNAH_CONFIG.scholars) ? CALUNAH_CONFIG.scholars : [];
  if (!list.length) { section.style.display = 'none'; return; }
  section.style.display = '';

  grid.innerHTML = list.map((s, i) => {
    const name    = escAttr(s.name || 'Scholarship Recipient');
    const program = escAttr(s.program || '');
    const year    = escAttr(s.year || '');
    const story   = escAttr(s.story || '');
    const meta    = [program, year].filter(Boolean).join(' · ');
    const initials = (s.name || 'S').trim().split(/\s+/).map(w => w[0]).slice(0, 2).join('').toUpperCase();
    const avatar  = s.photo
      ? `<img src="${escAttr(s.photo)}" alt="${name}" loading="lazy"
              onerror="this.parentElement.classList.add('photo-fallback');this.remove();">`
      : `<span class="scholar-initials">${escAttr(initials)}</span>`;
    return `
      <article class="scholar-card" data-aos="fade-up" data-aos-delay="${(i % 3) * 90}">
        <div class="scholar-photo">${avatar}</div>
        <div class="scholar-body">
          <i class="fas fa-quote-left scholar-quote-mark"></i>
          <p class="scholar-story">${story}</p>
          <div class="scholar-meta">
            <h3 class="scholar-name">${name}</h3>
            ${meta ? `<span class="scholar-program">${meta}</span>` : ''}
          </div>
        </div>
      </article>`;
  }).join('');
}


/* ============================================================
   9c. TESTIMONIALS BUILDER
   Renders data/testimonials.json. Hides when empty.
   Each testimonial: { quote, name, role, photo }
   ============================================================ */
function buildTestimonials() {
  const grid    = qs('#testimonials-grid');
  const section = qs('#testimonials');
  if (!grid || !section) return;
  const list = Array.isArray(CALUNAH_CONFIG.testimonials) ? CALUNAH_CONFIG.testimonials : [];
  if (!list.length) { section.style.display = 'none'; return; }
  section.style.display = '';

  grid.innerHTML = list.map((t, i) => {
    const quote = escAttr(t.quote || '');
    const name  = escAttr(t.name || '');
    const role  = escAttr(t.role || '');
    const initials = (t.name || '•').trim().split(/\s+/).map(w => w[0]).slice(0, 2).join('').toUpperCase();
    const avatar = t.photo
      ? `<img src="${escAttr(t.photo)}" alt="${name}" loading="lazy"
              onerror="this.parentElement.classList.add('photo-fallback');this.remove();">`
      : `<span class="testimonial-initials">${escAttr(initials)}</span>`;
    return `
      <figure class="testimonial-card" data-aos="fade-up" data-aos-delay="${(i % 3) * 90}">
        <i class="fas fa-quote-right testimonial-mark"></i>
        <blockquote class="testimonial-quote">${quote}</blockquote>
        <figcaption class="testimonial-author">
          <div class="testimonial-avatar">${avatar}</div>
          <div class="testimonial-id">
            <span class="testimonial-name">${name}</span>
            ${role ? `<span class="testimonial-role">${role}</span>` : ''}
          </div>
        </figcaption>
      </figure>`;
  }).join('');
}


/* ============================================================
   9d. PARTNERS BUILDER
   Renders data/partners.json. Hides when empty. Logo optional,
   falls back to the partner name as styled text.
   Each partner: { name, logo, url }
   ============================================================ */
function buildPartners() {
  const grid    = qs('#partners-grid');
  const section = qs('#partners');
  if (!grid || !section) return;
  const list = Array.isArray(CALUNAH_CONFIG.partners) ? CALUNAH_CONFIG.partners : [];
  if (!list.length) { section.style.display = 'none'; return; }
  section.style.display = '';

  grid.innerHTML = list.map((p, i) => {
    const name = escAttr(p.name || 'Partner');
    // Logo image with a hidden text fallback that appears if the image fails
    // to load (or when no logo is supplied at all).
    const inner = p.logo
      ? `<img src="${escAttr(p.logo)}" alt="${name}" loading="lazy"
              onerror="this.closest('.partner-logo').classList.add('logo-fallback');this.remove();">
         <span class="partner-name fallback">${name}</span>`
      : `<span class="partner-name">${name}</span>`;
    const inside = `<div class="partner-logo">${inner}</div>`;
    const delay  = (i % 4) * 70;
    return p.url
      ? `<a class="partner-card" href="${escAttr(p.url)}" target="_blank" rel="noopener" title="${name}" data-aos="zoom-in" data-aos-delay="${delay}">${inside}</a>`
      : `<div class="partner-card" title="${name}" data-aos="zoom-in" data-aos-delay="${delay}">${inside}</div>`;
  }).join('');
}


/* ============================================================
   10. EVENTS BUILDER
   ============================================================ */
function buildEvents() {
  const grid = qs('#events-grid');
  if (!grid) return;

  // Single out upcoming / ticketed events as full cards; past events go into
  // the cinematic auto-playing showcase below.
  const allEvents = CALUNAH_CONFIG.events || [];
  const upcoming  = allEvents.filter(e => e.upcoming);
  const past      = allEvents.filter(e => !e.upcoming);

  // The first upcoming event that has tickets gets id="buy-tickets" so the
  // "Buy Tickets" QR code / links can jump straight to its price options.
  const firstTicketed = upcoming.find(e => e.tickets && e.tickets.length);
  const firstTicketedId = firstTicketed ? firstTicketed.id : null;

  // Uses CSS classes: .event-card, .event-flyer (container), .event-info, .event-title,
  //                   .event-meta, .event-desc, .event-tags, .event-tag,
  //                   .event-full-info, .event-actions, .event-category
  grid.innerHTML = upcoming.map((ev, i) => `
    <div class="event-card ${ev.upcoming ? 'upcoming' : 'past'}" id="event-${ev.id}"
         data-aos="fade-up" data-aos-delay="${(i % 3) * 100}">

      <!-- Flyer area matches .event-flyer container in CSS -->
      <div class="event-flyer">
        ${ev.flyer
          ? `<img src="${ev.flyer}" alt="${ev.title} flyer"
                  onerror="this.remove()">`
          : `<i class="fas fa-calendar-star"></i><span>Event Flyer</span>`
        }
        <!-- Date badge — shows the real event date (no emoji) -->
        <div class="event-date-badge ${ev.upcoming ? 'upcoming' : 'past'}">${eventBadgeHTML(ev)}</div>
      </div>

      <div class="event-info">
        <div class="event-category">${ev.upcoming ? 'Upcoming Event' : 'Past Event'}</div>
        <h3 class="event-title">${ev.title}</h3>
        <div class="event-meta">
          <span><i class="fas fa-calendar-alt"></i> ${ev.date}</span>
          <span><i class="fas fa-clock"></i> ${ev.time}</span>
          <span><i class="fas fa-map-marker-alt"></i> ${ev.location}</span>
        </div>
        ${ev.tags && ev.tags.length ? `<div class="event-tags">${ev.tags.map(t => `<span class="event-tag">${t}</span>`).join('')}</div>` : ''}
        <p class="event-desc">${ev.description}</p>

        <div class="event-full-info" id="info-${ev.id}" hidden>
          <p>${ev.fullInfo}</p>
        </div>

        <!-- Ticket tiers for upcoming events (auto-generated when tickets exist) -->
        ${ev.upcoming && ev.tickets && ev.tickets.length ? `
        <div class="event-tickets"${ev.id === firstTicketedId ? ' id="buy-tickets"' : ''}>
          <div class="et-heading"><i class="fas fa-ticket-alt"></i> Get Your Tickets</div>
          <div class="et-tiers">
            ${ev.tickets.map(t => {
              const atDoor = (t.label || '').toLowerCase().includes('door');
              return `
              <div class="et-tier">
                <div class="et-tier-top">
                  <span class="et-tier-label">${t.label}</span>
                  <span class="et-tier-price">$${t.price}</span>
                </div>
                <span class="et-tier-note">${t.note || ''}</span>
                ${atDoor
                  ? `<span class="et-at-door"><i class="fas fa-map-marker-alt"></i> Available at venue</span>`
                  : `<button class="btn et-buy-btn"
                       data-ev="${escAttr(ev.title)}"
                       data-evid="${escAttr(ev.id)}"
                       data-label="${escAttr(t.label)}"
                       data-price="${t.price}"
                       onclick="buyTicket(this)">Buy Tickets</button>`
                }
              </div>`; }).join('')}
          </div>
          <p class="et-secure-note"><i class="fas fa-lock"></i> Secure checkout by Stripe · Card &amp; Apple/Google Pay · Emailed receipt</p>
          <button class="et-reserve-all-btn"
            onclick="openTicketReservation('${escAttr(ev.title)}','${escAttr(ev.date)}, ${escAttr(ev.time)}','General','')">
            <i class="fas fa-envelope"></i> Prefer Zelle / PayPal? Reserve here
          </button>
        </div>` : ''}

        <div class="event-actions">
          <button class="btn-event-more" onclick="toggleEventInfo('${ev.id}')">
            <i class="fas fa-info-circle"></i> <span>Learn More</span>
          </button>
          ${!ev.upcoming && ev.ctaLabel
            ? `<button class="btn btn-outline btn-sm" onclick="viewEventPhotos('${ev.id}')"><i class="fas fa-photo-video"></i> ${ev.ctaLabel}</button>`
            : ''
          }
        </div>
      </div>
    </div>
  `).join('');

  // Build the cinematic past-events showcase
  initPastEventsShowcase(past);
}

/* HTML for a single past-event slide in the showcase */
function peSlideHTML(ev) {
  const badge = (typeof eventBadgeHTML === 'function') ? eventBadgeHTML(ev) : '';
  return `
    <div class="pe-slide">
      <div class="pe-flyer">
        ${ev.flyer
          ? `<img src="${escAttr(ev.flyer)}" alt="${escAttr(ev.title)} flyer" onerror="this.style.display='none'">`
          : `<div class="pe-flyer-fallback"><i class="fas fa-calendar-star"></i></div>`}
        ${badge ? `<span class="pe-badge">${badge}</span>` : ''}
      </div>
      <div class="pe-details">
        <span class="pe-cat"><i class="fas fa-check-circle"></i> Past Event</span>
        <h4 class="pe-title">${escAttr(ev.title)}</h4>
        <div class="pe-meta">
          ${ev.date ? `<span><i class="fas fa-calendar-alt"></i> ${escAttr(ev.date)}</span>` : ''}
          ${ev.time ? `<span><i class="fas fa-clock"></i> ${escAttr(ev.time)}</span>` : ''}
          ${ev.location ? `<span><i class="fas fa-map-marker-alt"></i> ${escAttr(ev.location)}</span>` : ''}
        </div>
        ${ev.tags && ev.tags.length ? `<div class="pe-tags">${ev.tags.map(t => `<span class="event-tag">${escAttr(t)}</span>`).join('')}</div>` : ''}
        <p class="pe-desc">${escAttr(ev.description || '')}</p>
        ${ev.ctaLabel
          ? `<div class="pe-actions"><button class="btn btn-gold btn-sm" onclick="viewEventPhotos('${escAttr(ev.id)}')"><i class="fas fa-photo-video"></i> ${escAttr(ev.ctaLabel)}</button></div>`
          : ''}
      </div>
    </div>`;
}

/* Cinematic auto-playing showcase for past events.
   Auto-advances with a crossfade + Ken-Burns; play/pause, prev/next, dots,
   progress bar, touch-swipe, and pause-on-hover so visitors can read. */
function initPastEventsShowcase(items) {
  const wrap     = qs('#past-events');
  const stage    = qs('#pe-stage');
  const showcase = qs('#pe-showcase');
  if (!wrap || !stage || !showcase) return;
  if (!items || !items.length) { wrap.style.display = 'none'; return; }
  wrap.style.display = '';

  const dotsWrap = qs('#pe-dots');
  const prog     = qs('#pe-progress');
  const progBar  = prog ? prog.firstElementChild : null;
  const btnPrev  = qs('#pe-prev');
  const btnNext  = qs('#pe-next');
  const btnPlay  = qs('#pe-play');

  const DUR = 8500;        // ms each past event is shown
  let cur = 0, timer = null, playing = false;

  if (dotsWrap) {
    dotsWrap.innerHTML = items.map((_, i) =>
      `<button class="pe-dot${i === 0 ? ' active' : ''}" data-i="${i}" aria-label="Event ${i + 1}"></button>`).join('');
  }
  const dots = dotsWrap ? qsa('.pe-dot', dotsWrap) : [];

  function show(i) {
    cur = ((i % items.length) + items.length) % items.length;
    stage.innerHTML = peSlideHTML(items[cur]);
    const slide = stage.firstElementChild;
    if (slide) { slide.classList.remove('pe-in'); void slide.offsetWidth; slide.classList.add('pe-in'); }
    dots.forEach((d, j) => d.classList.toggle('active', j === cur));
    restartProgress();
  }
  function restartProgress() {
    if (!progBar) return;
    progBar.style.animation = 'none';
    void progBar.offsetWidth;
    if (playing) progBar.style.animation = 'peProg ' + (DUR / 1000) + 's linear forwards';
  }
  function schedule() {
    clearTimeout(timer);
    restartProgress();
    timer = setTimeout(() => { if (playing) { show(cur + 1); schedule(); } }, DUR);
  }
  function play() {
    if (items.length < 2) { if (btnPlay) btnPlay.style.display = 'none'; return; }
    playing = true;
    if (btnPlay) btnPlay.innerHTML = '<i class="fas fa-pause"></i>';
    if (prog) prog.classList.add('on');
    schedule();
  }
  function pause() {
    playing = false;
    if (btnPlay) btnPlay.innerHTML = '<i class="fas fa-play"></i>';
    clearTimeout(timer);
    timer = null;
    if (prog) prog.classList.remove('on');
  }
  function go(d) { show(cur + d); if (playing) schedule(); }

  btnPrev && btnPrev.addEventListener('click', () => go(-1));
  btnNext && btnNext.addEventListener('click', () => go(1));
  btnPlay && btnPlay.addEventListener('click', () => { playing ? pause() : play(); });
  dots.forEach(d => d.addEventListener('click', () => { show(+d.dataset.i); if (playing) schedule(); }));

  // Pause on hover/focus so visitors can read the details, resume on leave
  showcase.addEventListener('mouseenter', () => { if (playing) { clearTimeout(timer); if (progBar) progBar.style.animationPlayState = 'paused'; } });
  showcase.addEventListener('mouseleave', () => { if (playing) schedule(); });

  // Touch swipe on mobile
  let tx = null;
  showcase.addEventListener('touchstart', e => { tx = e.changedTouches[0].clientX; }, { passive: true });
  showcase.addEventListener('touchend', e => {
    if (tx === null) return;
    const dx = e.changedTouches[0].clientX - tx;
    if (Math.abs(dx) > 45) go(dx < 0 ? 1 : -1);
    tx = null;
  }, { passive: true });

  show(0);
  play();
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

/* Maps an event id to the gallery filter category that holds its photos.
   Events not listed fall back to 'all' (shows the whole gallery). */
const EVENT_PHOTO_MAP = {
  gala2023:           'gala2023',
  gala2024:           'gala2024',
  georgia2025:        'community',
  gachapter2025:      'community',
  backpack2025:       'community',
  saturdaygiving2024: 'events',
  saturdaygiving2025: 'events',
  prayer2025:         'events',
  prayer2026:         'events',
  sabbat2026:         'community'
};

/* "View Photos / View Recap" → jump to the Gallery, apply the matching
   filter, and gently highlight it so the user sees the related photos. */
function viewEventPhotos(eventId) {
  const cat = EVENT_PHOTO_MAP[eventId] || 'all';
  const gallery = qs('#gallery');

  // Scroll to the gallery so visitors land there when they close the slideshow
  if (gallery) {
    const top = gallery.getBoundingClientRect().top + window.scrollY - 80;
    window.scrollTo({ top, behavior: 'smooth' });
  }

  // Then open the matching album as a full-screen swipeable slideshow
  setTimeout(() => {
    if (typeof window.openGalleryAlbum === 'function') window.openGalleryAlbum(cat);
  }, 550);
}
window.viewEventPhotos = viewEventPhotos;

/* Parse an event date string into { day, mon, year } for the date badge.
   Handles "June 21, 2026", "April 2–4, 2025", etc. Returns null if unparseable. */
function parseEventDate(str) {
  if (!str) return null;
  const months = { january:'JAN', february:'FEB', march:'MAR', april:'APR', may:'MAY', june:'JUN',
                   july:'JUL', august:'AUG', september:'SEP', october:'OCT', november:'NOV', december:'DEC' };
  const m = String(str).match(/([A-Za-z]+)\s+(\d{1,2})[^,]*,?\s*(\d{4})/);
  if (!m) return null;
  const mon = months[m[1].toLowerCase()];
  if (!mon) return null;
  return { mon, day: m[2], year: m[3] };
}

/* Build the inner HTML for an event's date badge */
function eventBadgeHTML(ev) {
  const d = parseEventDate(ev.date);
  if (ev.upcoming && d) {
    return `<span class="day">${d.day}</span><span class="month">${d.mon}</span><span class="year">${d.year}</span>`;
  }
  return `<span class="badge-flag">${ev.upcoming ? 'SOON' : 'PAST'}</span>`;
}

/* Escape a string for safe use inside an HTML attribute */
function escAttr(s) {
  return String(s == null ? '' : s)
    .replace(/&/g, '&amp;').replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}
window.escAttr = escAttr;

/* ── STRIPE TICKET CHECKOUT ─────────────────────────────────
   Reads the event/ticket data from the clicked button, asks
   /api/checkout to create a Stripe Checkout Session, then sends
   the buyer to Stripe's secure hosted payment page. Stripe emails
   a professional receipt automatically after payment. */
async function buyTicket(btn) {
  if (!btn) return;
  const eventTitle  = btn.getAttribute('data-ev')    || 'CALUNAH Event';
  const eventId     = btn.getAttribute('data-evid')  || '';
  const ticketLabel = btn.getAttribute('data-label') || 'Ticket';
  const price       = parseFloat(btn.getAttribute('data-price') || '0');

  const original = btn.innerHTML;
  btn.disabled = true;
  btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Loading…';

  try {
    const r = await fetch('/api/checkout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ eventTitle, eventId, ticketLabel, price, quantity: 1 })
    });
    const data = await r.json();
    if (r.ok && data.url) {
      window.location.href = data.url;          // go to Stripe checkout
      return;
    }
    alert(data.error || 'Sorry, checkout is unavailable right now. Please try Zelle/PayPal or contact us.');
  } catch (e) {
    alert('Network error starting checkout. Please try again, or use Zelle/PayPal.');
  }
  btn.disabled = false;
  btn.innerHTML = original;
}
window.buyTicket = buyTicket;

/* Show a thank-you banner when returning from a successful Stripe payment */
function initTicketReturn() {
  const params = new URLSearchParams(window.location.search);
  const state  = params.get('ticket');
  if (!state) return;

  const banner = document.createElement('div');
  banner.className = 'ticket-toast ' + (state === 'success' ? 'tt-success' : 'tt-cancel');
  banner.innerHTML = state === 'success'
    ? '<i class="fas fa-check-circle"></i><div><strong>Thank you! Your tickets are confirmed.</strong><br>A receipt has been emailed to you. We can\'t wait to see you!</div><button class="tt-close" aria-label="Close">&times;</button>'
    : '<i class="fas fa-info-circle"></i><div><strong>Checkout cancelled.</strong><br>No charge was made. You can try again anytime.</div><button class="tt-close" aria-label="Close">&times;</button>';
  document.body.appendChild(banner);
  requestAnimationFrame(() => banner.classList.add('show'));

  function dismiss() { banner.classList.remove('show'); setTimeout(() => banner.remove(), 400); }
  banner.querySelector('.tt-close').addEventListener('click', dismiss);
  setTimeout(dismiss, 9000);

  /* Clean the ?ticket= param from the URL without reloading */
  const clean = window.location.pathname + window.location.hash;
  window.history.replaceState({}, '', clean);
}
window.initTicketReturn = initTicketReturn;

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
/* Album definitions — display order, titles, and icons. Photos are grouped by
   their `cat` field; any album that ends up with no photos is skipped. */
const GALLERY_ALBUM_DEFS = [
  { id:'gala2024',  title:'Annual Gala 2024',     icon:'fa-champagne-glasses' },
  { id:'gala2023',  title:'Spring Gala 2023',     icon:'fa-spa' },
  { id:'community', title:'Community & Outreach',  icon:'fa-hands-holding-circle' },
  { id:'campus',    title:'Campus Life',          icon:'fa-graduation-cap' },
  { id:'events',    title:'Events & Gatherings',  icon:'fa-calendar-star' }
];

/* Group CALUNAH_CONFIG.gallery into albums.
   Returns [{ id, title, icon, items:[{src,caption}], cover, isAll? }]. */
function getGalleryAlbums() {
  const all = (CALUNAH_CONFIG.gallery || []).filter(it =>
    it && it.src &&
    !it.src.startsWith('images/campus1') && !it.src.startsWith('images/campus2') &&
    !it.src.startsWith('images/campus3') && !it.src.startsWith('images/campus4'));

  const albums = GALLERY_ALBUM_DEFS.map(def => {
    const items = all.filter(it => it.cat === def.id);
    return { id:def.id, title:def.title, icon:def.icon, items, cover: items.length ? items[0].src : '' };
  }).filter(a => a.items.length);

  // Catch-all for any categories not named above
  const known = new Set(GALLERY_ALBUM_DEFS.map(d => d.id));
  const others = all.filter(it => !known.has(it.cat));
  if (others.length) albums.push({ id:'more', title:'More Moments', icon:'fa-images', items:others, cover:others[0].src });

  // Final "All Photos" album so visitors can still browse everything at once
  if (all.length) {
    const galaCover = all.find(it => it.cat === 'gala2024') || all[0];
    albums.push({ id:'all', title:'All Photos', icon:'fa-photo-film', items: all, cover: galaCover.src, isAll:true });
  }
  return albums;
}

function buildGallery() {
  const grid = qs('#gallery-grid');
  if (!grid) return;

  const albums = getGalleryAlbums();

  if (!albums.length) {
    grid.classList.add('gallery-empty');
    grid.classList.remove('gallery-albums');
    grid.innerHTML = `
      <div class="gallery-coming-soon">
        <div class="gcs-icon"><i class="fas fa-camera"></i></div>
        <h3>Gallery Coming Soon</h3>
        <p>We are curating our photo collection of events, campus life, and community moments. Check back soon, and share your own CALUNAH memories!</p>
        <a href="#contact" class="btn btn-outline"><i class="fas fa-paper-plane"></i> Submit Your Photos</a>
      </div>`;
    return;
  }

  // Album-cover grid: a few elegant cards instead of a long photo wall.
  grid.classList.remove('gallery-empty');
  grid.classList.add('gallery-albums');
  grid.innerHTML = albums.map((a, i) => `
    <button class="album-card${a.isAll ? ' album-all' : ''}" type="button" data-album="${escAttr(a.id)}"
            data-aos="fade-up" data-aos-delay="${(i % 3) * 80}"
            aria-label="Open ${escAttr(a.title)} album, ${a.items.length} photos">
      <div class="album-cover">
        <img src="${escAttr(a.cover)}" alt="${escAttr(a.title)}" loading="lazy" decoding="async"
             onerror="this.style.visibility='hidden'">
        <span class="album-count"><i class="fas fa-camera"></i> ${a.items.length}</span>
        <div class="album-shade"></div>
        <div class="album-info">
          <span class="album-icon"><i class="fas ${a.icon}"></i></span>
          <h3 class="album-title">${escAttr(a.title)}</h3>
          <span class="album-cta">View album <i class="fas fa-arrow-right"></i></span>
        </div>
      </div>
    </button>`).join('');
  // Note: clicks are handled in initLightbox() (album → swipeable slideshow)
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
  const lb        = qs('#lightbox');
  const lbImg     = qs('#lb-img');
  const lbCap     = qs('#lb-caption');
  const lbCounter = qs('#lb-counter');
  const btnClose  = qs('#lb-close');
  const btnPlay   = qs('#lb-play');
  const btnPrev   = qs('#lb-prev');
  const btnNext   = qs('#lb-next');
  const lbProgress= qs('#lb-progress');
  const lbProgBar = lbProgress ? lbProgress.firstElementChild : null;
  if (!lb || !lbImg) return;

  const SLIDE_MS = 5000;          // time each photo is shown during auto-play
  let autoTimer  = null;
  let playing    = false;

  // ROOT FIX: move the lightbox to be a direct child of <body>. It currently
  // lives inside the gallery <section>, which has `contain:layout style`. That
  // CSS makes the section a containing block for position:fixed descendants —
  // so the lightbox anchored to the tall section, not the screen, and the image
  // appeared low and cut off. Appending to body anchors it to the real viewport.
  if (lb.parentElement !== document.body) document.body.appendChild(lb);

  let activeItems = CALUNAH_CONFIG.gallery;
  let cur = 0;

  const logoCanvas = qs('#logo-canvas');

  function getCampusItems() {
    const el = qs('#campus-lb-data');
    if (!el) return [];
    try { return JSON.parse(el.dataset.images).map(o => ({ src: o.src, caption: o.cap })); }
    catch (e) { return []; }
  }

  // Show photo at index `i` with a cinematic crossfade + slow Ken-Burns zoom
  function showImage(i) {
    if (!activeItems.length) return;
    cur = ((i % activeItems.length) + activeItems.length) % activeItems.length;
    const item = activeItems[cur];
    // Re-trigger the per-slide animation
    lbImg.classList.remove('lb-anim');
    void lbImg.offsetWidth;
    lbImg.src = item.src || '';
    lbImg.alt = item.caption || '';
    lbImg.classList.add('lb-anim');
    if (lbCap) lbCap.textContent = item.caption || '';
    if (lbCounter) lbCounter.textContent = activeItems.length > 1 ? (cur + 1) + ' / ' + activeItems.length : '';
  }

  function setPlayIcon() {
    if (btnPlay) btnPlay.innerHTML = playing ? '<i class="fas fa-pause"></i>' : '<i class="fas fa-play"></i>';
  }

  // Restart the bottom progress bar for the current slide
  function restartProgress() {
    if (!lbProgBar) return;
    lbProgBar.style.animation = 'none';
    void lbProgBar.offsetWidth;
    if (playing) lbProgBar.style.animation = 'lbProg ' + (SLIDE_MS / 1000) + 's linear forwards';
  }

  function scheduleNext() {
    clearTimeout(autoTimer);
    restartProgress();
    autoTimer = setTimeout(() => {
      if (!playing) return;
      showImage(cur + 1);
      scheduleNext();
    }, SLIDE_MS);
  }

  function play() {
    if (activeItems.length < 2) return;
    playing = true;
    setPlayIcon();
    if (lbProgress) lbProgress.classList.add('on');
    scheduleNext();
  }

  function pause() {
    playing = false;
    setPlayIcon();
    clearTimeout(autoTimer);
    autoTimer = null;
    if (lbProgress) lbProgress.classList.remove('on');
  }

  function openLightbox(items, i) {
    if (!items || !items.length) return;
    activeItems = items;
    if (logoCanvas) logoCanvas.style.display = 'none';
    showImage(i);
    if (btnPlay) btnPlay.style.display = activeItems.length > 1 ? '' : 'none';
    lb.classList.add('open');
    document.body.style.overflow = 'hidden';
    // Cinematic auto-display: play by default for multi-photo albums
    if (activeItems.length > 1) play(); else pause();
  }

  function closeLightbox() {
    pause();
    lb.classList.remove('open');
    document.body.style.overflow = '';
    document.documentElement.style.overflow = '';
    if (logoCanvas) logoCanvas.style.display = '';
    lbImg.src = '';
    lbImg.classList.remove('lb-anim');
  }

  // Manual navigation: move a slide, and if auto-playing, reset the timer so
  // the viewer gets the full duration on the slide they just chose.
  function nav(delta) {
    showImage(cur + delta);
    if (playing) scheduleNext();
  }

  // Safety valve: if body scroll gets stuck while lightbox is closed, free it
  window.addEventListener('wheel',     () => { if (!lb.classList.contains('open')) document.body.style.overflow = ''; }, { passive: true });
  window.addEventListener('touchmove', () => { if (!lb.classList.contains('open')) document.body.style.overflow = ''; }, { passive: true });

  // Open an album (by id) as a swipeable full-screen slideshow
  function openAlbumById(albumId) {
    const albums = getGalleryAlbums();
    const album = albums.find(a => a.id === albumId) ||
                  albums.find(a => a.id === 'all') || albums[0];
    if (album && album.items.length) {
      openLightbox(album.items.map(it => ({ src: it.src, caption: it.caption })), 0);
    }
  }
  window.openGalleryAlbum = openAlbumById;

  // Gallery grid clicks → open the chosen album. Falls back to legacy
  // per-photo thumbnails if any are ever rendered.
  const galleryGrid = qs('#gallery-grid');
  if (galleryGrid) {
    galleryGrid.addEventListener('click', e => {
      const card = e.target.closest('.album-card');
      if (card) { openAlbumById(card.dataset.album); return; }
      const thumb = e.target.closest('.gallery-thumb');
      if (thumb) openLightbox(CALUNAH_CONFIG.gallery, +thumb.dataset.index);
    });
  }

  // Campus photo triggers
  document.addEventListener('click', e => {
    const trigger = e.target.closest('.campus-lb-trigger');
    if (!trigger) return;
    const items = getCampusItems();
    if (items.length) openLightbox(items, +(trigger.dataset.lbIndex || 0));
  });

  // Click the dark background to close; clicks on image/caption do not bubble here
  lb.addEventListener('click', e => { if (e.target === lb) closeLightbox(); });
  btnClose && btnClose.addEventListener('click', e => { e.stopPropagation(); closeLightbox(); });
  btnPlay  && btnPlay.addEventListener('click',  e => { e.stopPropagation(); playing ? pause() : play(); });
  btnPrev  && btnPrev.addEventListener('click',  e => { e.stopPropagation(); nav(-1); });
  btnNext  && btnNext.addEventListener('click',  e => { e.stopPropagation(); nav(+1); });

  document.addEventListener('keydown', e => {
    if (!lb.classList.contains('open')) return;
    if (e.key === 'ArrowLeft')  nav(-1);
    if (e.key === 'ArrowRight') nav(+1);
    if (e.key === 'Escape')     closeLightbox();
    if (e.key === ' ' || e.code === 'Space') { e.preventDefault(); playing ? pause() : play(); }
  });

  // Touch swipe (mobile): swipe left/right to move through the album
  let touchX = null;
  lb.addEventListener('touchstart', e => { touchX = e.changedTouches[0].clientX; }, { passive: true });
  lb.addEventListener('touchend', e => {
    if (touchX === null) return;
    const dx = e.changedTouches[0].clientX - touchX;
    if (Math.abs(dx) > 45) nav(dx < 0 ? +1 : -1);
    touchX = null;
  }, { passive: true });
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
    const coverImg = featured.cover || 'images/newsletter-cover.jpg';
    readerWrap.innerHTML = `
      <div class="nl-magazine">
        <div class="nl-mag-cover" id="nl-mag-cover" role="button" tabindex="0"
             aria-label="Open ${featured.title}">
          <div class="nl-mag-book">
            <img src="${coverImg}" alt="${featured.title} cover"
                 onerror="this.style.display='none';this.parentElement.classList.add('nl-mag-nocover')">
            <div class="nl-mag-fallback">
              <i class="fas fa-book-open"></i>
              <span class="nl-mag-fallback-title">CALUNAH</span>
              <span class="nl-mag-fallback-sub">Perspectives</span>
            </div>
            <div class="nl-mag-shine"></div>
            <div class="nl-mag-spine"></div>
          </div>
          <div class="nl-mag-open-hint"><i class="fas fa-book-open"></i> Click to Read</div>
        </div>
        <div class="nl-mag-info">
          <div class="nl-featured-badge"><i class="fas fa-star"></i> Latest Issue</div>
          <h3 class="nl-featured-title">${featured.title}</h3>
          <p class="nl-featured-sub">${featured.preview}</p>
          <div class="nl-mag-actions">
            <button class="btn btn-gold nl-read-btn" id="nl-read-btn">
              <i class="fas fa-book-open"></i> Read the Magazine
            </button>
            <a href="${featured.pdf}" download class="btn btn-ghost nl-download-btn">
              <i class="fas fa-download"></i> Download PDF
            </a>
          </div>
          <p class="nl-mag-tip"><i class="fas fa-hand-pointer"></i> Flip through the pages like a real book</p>
        </div>
      </div>
    `;
    // Wire up the open-flipbook triggers
    const open = () => window.openFlipbook && window.openFlipbook(featured.pdf, featured.title);
    const cover = qs('#nl-mag-cover');
    const readBtn = qs('#nl-read-btn');
    if (cover) {
      cover.addEventListener('click', open);
      cover.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); open(); } });
    }
    if (readBtn) readBtn.addEventListener('click', open);
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
    data._autoresponse = `Dear ${data.firstName || 'Valued Applicant'},\n\nThank you for applying to become a member of CALUNAH, Club des Alumni de l'Université Adventiste d'Haïti.\n\nYour application for "${data.membershipType || 'CALUNAH Membership'}" has been received and is currently under review. Our team will contact you within 3 to 5 business days.\n\n────────────────────────\nCALUNAH\n2990 Hester Avenue SE\nPalm Bay, FL 32909\ninfo@calunah.org | 631-961-9945\n────────────────────────\n\nThis is a confirmation of your submission. Please keep it for your records.\n\nWith gratitude,\nCALUNAH Membership Team`;

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
            <p>Thank you for applying to join CALUNAH. A confirmation has been sent to <strong>${data.email || 'your email'}</strong>. We will review your application and contact you within 3 to 5 business days.</p>
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
  const stripeBtnEl= qs('#rec-stripe-btn', wrap);

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

  /* Card payment via Stripe (one-time charge for the selected amount) */
  if (stripeBtnEl) {
    stripeBtnEl.addEventListener('click', async () => {
      const orig = stripeBtnEl.innerHTML;
      stripeBtnEl.disabled = true;
      stripeBtnEl.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Loading…';
      try {
        const r = await fetch('/api/checkout', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            eventTitle:  'CALUNAH Membership Contribution',
            eventId:     'membership',
            ticketLabel: `${period === 'yearly' ? 'Yearly' : 'Monthly'} Support`,
            price:       amount,
            quantity:    1
          })
        });
        const data = await r.json();
        if (r.ok && data.url) { window.location.href = data.url; return; }
        alert(data.error || 'Card checkout is unavailable right now. Please use Zelle or PayPal.');
      } catch (e) {
        alert('Network error starting checkout. Please try again, or use Zelle/PayPal.');
      }
      stripeBtnEl.disabled = false;
      stripeBtnEl.innerHTML = orig;
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
   20b. READING PROGRESS BAR
   Slim gradient bar at the very top that fills as you scroll.
   ============================================================ */
function initReadProgress() {
  let bar = qs('.read-progress');
  if (!bar) {
    bar = document.createElement('div');
    bar.className = 'read-progress';
    bar.setAttribute('aria-hidden', 'true');
    document.body.appendChild(bar);
  }
  let ticking = false;
  const update = () => {
    const h = document.documentElement;
    const max = h.scrollHeight - h.clientHeight;
    const ratio = max > 0 ? Math.min(h.scrollTop / max, 1) : 0;
    bar.style.transform = 'scaleX(' + ratio + ')';
    ticking = false;
  };
  window.addEventListener('scroll', () => {
    if (!ticking) { requestAnimationFrame(update); ticking = true; }
  }, { passive: true });
  window.addEventListener('resize', update, { passive: true });
  update();
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
  const ctx = canvas.getContext('2d', { alpha: true });
  let W, H;
  const logos = [];
  // Lighter counts — the full-screen canvas composites every frame, so fewer = smoother scroll
  const COUNT = window.innerWidth < 768 ? 4 : 8;
  const logoImg = new Image();
  logoImg.src = 'images/logo.png';

  // Faded on phones (kept subtle so it never competes with content), full on desktop
  const onOpacity = () => (window.innerWidth < 768 ? '0.12' : '1');

  function resize() {
    W = canvas.width  = window.innerWidth;
    H = canvas.height = window.innerHeight;
    // Keep opacity in sync across rotation / breakpoint changes, but only
    // once the canvas has been activated (don't pre-empt the fade-in).
    if (canvas.style.opacity !== '0') canvas.style.opacity = onOpacity();
  }
  resize();
  window.addEventListener('resize', resize, { passive: true });

  canvas.style.opacity    = '0';
  canvas.style.transition = 'opacity 2s ease';

  const splash = qs('#splash');

  function activateCanvas() {
    canvas.style.opacity = onOpacity();
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

  // Pause the canvas while actively scrolling — frees the GPU so scrolling stays buttery
  let scrolling = false, scrollTimer = null;
  window.addEventListener('scroll', () => {
    scrolling = true;
    clearTimeout(scrollTimer);
    scrollTimer = setTimeout(() => { scrolling = false; }, 140);
  }, { passive: true });

  function initLogoParticles() {
    for (let i = 0; i < COUNT; i++) logos.push(new Logo(i));
    const FRAME_MS = 1000 / 30;   // cap at 30fps (plenty for slow-falling logos)
    let last = 0;
    (function loop(now) {
      requestAnimationFrame(loop);
      if (logoPaused || scrolling) return;          // skip work while scrolling
      if (now - last < FRAME_MS) return;            // throttle to 30fps
      last = now;
      ctx.clearRect(0, 0, W, H);
      if (logoImg.complete && logoImg.naturalWidth > 0) {
        logos.forEach(l => { l.update(); l.draw(); });
      }
    })(0);
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

/* When the page is opened with a #hash (e.g. from a QR code), scroll to that
   target AFTER dynamic content is built, offset for the fixed navbar, and
   briefly highlight it so the visitor sees exactly where to act. */
function initHashLanding() {
  const hash = window.location.hash;
  if (!hash || hash.length < 2) return;
  // Wait for dynamic sections (events/tickets) to render, then scroll
  setTimeout(() => {
    const target = qs(hash);
    if (!target) return;
    const top = target.getBoundingClientRect().top + window.scrollY - 80;
    window.scrollTo({ top, behavior: 'smooth' });
    target.classList.add('hash-highlight');
    setTimeout(() => target.classList.remove('hash-highlight'), 2200);
  }, 900);
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
    /*, Scholar Stories, */
    'scholars.badge':       'Lives You Change',
    'scholars.title':       'Scholar Stories',
    'scholars.sub':         'Meet the students whose journeys are made possible by your generosity',
    'scholars.cta':         'Sponsor a Scholar',
    /*, Testimonials, */
    'testimonials.badge':   'In Their Words',
    'testimonials.title':   'Voices of Our Community',
    'testimonials.sub':     'Alumni, students, and supporters share what CALUNAH means to them',
    /*, Partners, */
    'partners.badge':       'Stronger Together',
    'partners.title':       'Our Partners',
    'partners.sub':         'Organizations and institutions that walk alongside us in our mission',
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
    /*, Membership extras, */
    'mb.network':           'Global Network',
    'mb.scholarships':      'Scholarship Opportunities',
    'mb.career':            'Career Resources',
    'mb.newsletter':        'Newsletter Access',
    'mb.events':            'Event Discounts',
    'mb.voting':            'Voting Rights',
    'mem.recurring.title':  'Become a Recurring Member',
    'mem.recurring.sub':    'Support CALUNAH automatically · Cancel anytime · 100% tax-deductible',
    'mem.monthly':          'Monthly',
    'mem.yearly':           'Yearly',
    'mem.save17':           'Save 17%',
    'mem.recurring.note':   'Secure payment · 501(c)(3) · Cancel anytime by emailing us',
    'mem.pay.card':         'Pay with Card',
    'mem.form.title':       'Membership Application',
    'mem.form.success':     "Application received! We'll be in touch soon.",
    /*, Donate extras, */
    'donate.sub':           'CALUNAH is a registered <strong>501(c)(3) nonprofit</strong>. Your donation is fully tax-deductible and directly funds scholarships, community programs, and campus development.',
    'donate.why.title':     'Why Give to CALUNAH?',
    'donate.why.sub':       "Your donation transforms lives at l'Université Adventiste d'Haïti and empowers communities across Haiti and the diaspora.",
    'donate.vision.title':  'Our Vision',
    'donate.vision.desc':   'To build strong communities in both Haiti and abroad through education and communal engagement.',
    'donate.mission.title': 'Our Mission',
    'donate.community.title':'Our Community',
    'donate.edu.title':     'Emphasizing Educational Advancement',
    'donate.edu.intro':     'Our main focus is education. Some of our goals are:',
    /*, Core values, */
    'val.integrity':        'Integrity',
    'val.integrity.desc':   'We keep our promises. Our reputation rests on honesty, fairness, and treating everyone with respect.',
    'val.service':          'Service',
    'val.service.desc':     'We go the extra mile. We provide the highest levels of service to our members, the university, and all alumni.',
    'val.quality':          'Quality',
    'val.quality.desc':     'We pursue excellence in both what we do and how we do it.',
    'val.innovation':       'Innovation',
    'val.innovation.desc':  'Our success depends on continuous improvement and openness to new ideas.',
    /*, Contact extras, */
    'contact.desc':         'Whether you are a UNAH graduate, a supporter, or simply curious about our mission, we would love to hear from you. Submit events, share photos, ask about membership, or learn about our programs.',
    'contact.success':      'Thank you! Your message has been sent.',
    /*, Footer extras, */
    'footer.nl.sub':        'Subscribe for news, events & alumni spotlights.',
    'footer.nl.success':    "You're subscribed!",
    /*, History extras, */
    'history.founders.caption': 'Co-Founders of CALUNAH',
    'history.founders.heading': 'The Birth of CALUNAH',
    'history.founders.p1':  'CALUNAH came into existence thanks to the grand initiative of Pastor Roberne J. and Mrs. Lynouse Dubreuze Saint-Louis, both former students of the Adventist University of Haiti (UNAH). Upon having returned from their home country where they had the opportunity to visit the campus of Diquini, they set up a program to bring together and connect all UNAH nationals so they could look towards their beloved Alma Mater.',
    'history.founders.p2':  'It was with this idea in mind that on <strong>Saturday, December 13, 1993</strong>, an impressive group of more than <strong>150 former UNAH students, employees, and supporter friends</strong> met at the renowned Haitian restaurant <em>La Détente</em>. With the cordial participation of Pastor Ezechias Jean, then president of UNAH, an administrative core was nominated under the leadership of co-founder Pastor Roberne J. Saint-Louis.',
    'history.founders.p3':  'CALUNAH did not experience a path void of turbulence, but thanks to the guidance of the Almighty God and the support of many, it has developed tremendously and now comprises <strong>more than a thousand members and official correspondents</strong> within various regions of the United States, Canada, and overseas.',
    'history.founders.quote': 'We wish CALUNAH long life and continued success in the pursuit of its humanitarian mission.',
    /*, Our Work extras, */
    'work.impact.scholarships': 'Scholarships Awarded',
    'work.impact.mentored':     'Students Mentored',
    'work.impact.projects':     'Projects Completed',
    'work.impact.years':        'Years of Service',
    'work.scholarship.title': 'Scholarship Program',
    'work.scholarship.desc':  'We award annual scholarships to outstanding UNAH students demonstrating academic excellence and financial need. Our scholarships have helped hundreds of students achieve their educational dreams.',
    'work.scholarship.link':  'Support a Student',
    'work.mentorship.title':  'Mentorship Program',
    'work.mentorship.desc':   'Our alumni mentorship initiative connects experienced professionals with current UNAH students, providing career guidance, industry insights, and the support needed to thrive after graduation.',
    'work.mentorship.link':   'Become a Mentor',
    'work.campus.title':      'Campus Development',
    'work.campus.desc':       "We actively support the physical and academic development of UNAH's campus, from library resources and laboratory equipment to infrastructure projects that enhance the student experience.",
    'work.campus.link':       'Invest in UNAH',
    'work.community.title':   'Community Service',
    'work.community.desc':    'Rooted in Christian values of service, CALUNAH organizes annual community projects both in Haiti and within diaspora communities, from health fairs and food drives to disaster relief efforts.',
    'work.community.link':    'Volunteer',
    'work.network.title':     'Professional Network',
    'work.network.desc':      'Our global alumni network is an invaluable career resource. CALUNAH facilitates job connections, professional referrals, and networking events that open doors for UNAH graduates worldwide.',
    'work.network.link':      'Join the Network',
    'work.culture.title':     'Cultural Preservation',
    'work.culture.desc':      'We celebrate and preserve Haitian culture, history, and Adventist heritage through events, publications, and arts programs that connect our community to its roots while building pride for future generations.',
    'work.culture.link':      'See Our Events',
    'about.lead':           '<strong>CALUNAH</strong>, the <em>Club des Alumni de l\'Université Adventiste d\'Haïti</em>, is the official alumni association of <strong>UNAH</strong>, founded in 1993 to unite graduates across generations, professions, and continents.',
    'about.p2':              'We are devoted to fostering lifelong bonds among UNAH alumni, advancing the university\'s Christian mission, and contributing to Haiti\'s development through academic excellence, social responsibility, and spiritual growth.',
    'about.p3':              'From UNAH\'s lush campus in Carrefour to alumni chapters spanning multiple continents, CALUNAH bridges our shared past with a brighter future for Haiti, for UNAH, and for every graduate who carries the flame of excellence.',
    'donate.mission.desc':   'CALUNAH is dedicated to provide scholarships and financial assistance toward maintaining student learning and school infrastructure.',
    'donate.mission.desc2':  'Our humanitarian mission is <em>\'sans frontières\'</em> (without borders), which means that we endeavor to support students from all walks of life.',
    'donate.community.desc':  'CALUNAH remains a progressive network of strength, togetherness, and service to its large constituency of faithful alumni, students, friends, and supporters.',
    'donate.community.desc2': 'Our mission is to provide continuous support to communities through scholarships, construction projects, and financial assistance.',
    'donate.tier1':          'Provides school supplies for one UNAH student for a semester',
    'donate.tier2':          'Covers one month of textbooks and academic materials for a student',
    'donate.tier3':          'Funds a full semester scholarship for one deserving UNAH student',
    'donate.tier4':          'Sponsors a full academic year and earns recognition in our annual report',
    'donate.501c3':          'CALUNAH is a 501(c)(3) nonprofit organization. All donations are tax-deductible to the extent permitted by law. You will receive a donation receipt for your records.',
    'blog.sub':              'Articles, announcements, and alumni spotlights from the CALUNAH community',
    'social.sub':            'Stay up-to-date, share memories, and engage with fellow alumni everywhere',
    'qr.donate.title':      'Scan to Donate',
    'qr.donate.note':       'Point your phone camera here to give securely',
    'qr.tickets.title':     'Scan for Event Tickets',
    'qr.tickets.note':      'Buy tickets for the High Tea & upcoming events',
    'qr.download':          'Download',
    'donate.ways.title':    '4 Ways to Donate',
    /*, Donors extras, */
    'donors.become.desc':     'Your generosity directly funds scholarships, campus development, and community programs. As a 501(c)(3) nonprofit, all donations are <strong>tax-deductible</strong>.',
    /*, Timeline, */
    'tl.Foundation.h':   'Foundation, December 13, 1993',
    'tl.Foundation.p':   'More than 150 former UNAH students, employees, and friends gathered at <em>La Détente</em> restaurant to officially establish CALUNAH under the leadership of co-founders Pastor Roberne J. and Mrs. Lynouse Dubreuze Saint-Louis, with a vision to unite every UNAH graduate across Haiti and the diaspora.',
    'tl.Reunion.h':      'First Annual Reunion',
    'tl.Reunion.p':      'CALUNAH held its inaugural annual reunion event, bringing together dozens of UNAH graduates for a weekend of fellowship, celebration, and planning for the future of the association.',
    'tl.Florida.h':      'Florida Chapter Founded',
    'tl.Florida.p':      'As the Haitian diaspora grew in South Florida, CALUNAH established its first international chapter in Miami, FL, becoming a hub for alumni networking and community events in the United States.',
    'tl.Scholarship.h':  'Scholarship Program Launched',
    'tl.Scholarship.p':  'CALUNAH officially launched its scholarship program, awarding its first grants to deserving UNAH students. This program has since grown into one of our most impactful initiatives.',
    'tl.Expansion.h':    'National Expansion',
    'tl.Expansion.p':    'New chapters were established across the United States, including New York, New England, and the DMV region, reflecting the growing reach of the UNAH alumni community across the American diaspora.',
    'tl.501c3.h':        '501(c)(3) Status Obtained',
    'tl.501c3.p':        'CALUNAH was officially recognized as a 501(c)(3) nonprofit organization by the IRS, enabling tax-deductible donations and unlocking new funding opportunities to amplify our mission.',
    'tl.Earthquake.h':   'Haiti Earthquake Relief',
    'tl.Earthquake.p':   'Following the devastating January 2010 earthquake, CALUNAH mobilized alumni worldwide to raise emergency relief funds and coordinate support for UNAH and the broader Haitian community.',
    'tl.Digital.h':      'Digital Transformation',
    'tl.Digital.p':      'CALUNAH launched its official website and social media presence, dramatically expanding our reach and ability to connect with alumni around the world in real time.',
    'tl.Covid.h':        'Resilience Through COVID-19',
    'tl.Covid.p':        'When the pandemic forced the world online, CALUNAH pivoted swiftly to virtual events, webinars, and digital networking, keeping our alumni family connected across all borders.',
    'tl.Anniversary.h':  '30th Anniversary Celebration',
    'tl.Anniversary.p':  'CALUNAH celebrated three decades of excellence with a landmark anniversary gala, honoring the founders, celebrating achievements, and charting a bold vision for the next 30 years.',
    'tl.Today.h':        'Growing Stronger',
    'tl.Today.p':        'With over 5,000 alumni in 20+ countries, CALUNAH continues to expand its scholarship programs, community impact, and global network, standing stronger than ever as we look toward a future filled with promise for Haiti and UNAH.',

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
    /*, Scholar Stories, */
    'scholars.badge':       'Des vies transformées',
    'scholars.title':       'Histoires de boursiers',
    'scholars.sub':         'Rencontrez les étudiants dont le parcours est rendu possible par votre générosité',
    'scholars.cta':         'Parrainer un boursier',
    /*, Testimonials, */
    'testimonials.badge':   'En leurs mots',
    'testimonials.title':   'Les voix de notre communauté',
    'testimonials.sub':     'Anciens élèves, étudiants et soutiens partagent ce que CALUNAH représente pour eux',
    /*, Partners, */
    'partners.badge':       'Plus forts ensemble',
    'partners.title':       'Nos partenaires',
    'partners.sub':         'Les organisations et institutions qui nous accompagnent dans notre mission',
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

    /*, Membership extras FR, */
    'mb.network':           'Réseau mondial',
    'mb.scholarships':      'Bourses d\'études',
    'mb.career':            'Ressources professionnelles',
    'mb.newsletter':        'Accès au bulletin',
    'mb.events':            'Réductions sur les événements',
    'mb.voting':            'Droit de vote',
    'mem.recurring.title':  'Devenir membre récurrent',
    'mem.recurring.sub':    'Soutenez CALUNAH automatiquement · Annulez à tout moment · 100% déductible',
    'mem.monthly':          'Mensuel',
    'mem.yearly':           'Annuel',
    'mem.save17':           'Économisez 17%',
    'mem.recurring.note':   'Paiement sécurisé · 501(c)(3) · Annulez à tout moment par e-mail',
    'mem.pay.card':         'Payer par carte',
    'mem.form.title':       'Formulaire d\'adhésion',
    'mem.form.success':     'Candidature reçue ! Nous vous contacterons bientôt.',
    /*, Donate extras FR, */
    'donate.sub':           'CALUNAH est une organisation <strong>501(c)(3)</strong> à but non lucratif. Votre don est entièrement déductible des impôts et finance directement les bourses, les programmes communautaires et le développement du campus.',
    'donate.why.title':     'Pourquoi donner à CALUNAH ?',
    'donate.why.sub':       "Votre don transforme des vies à l'Université Adventiste d'Haïti et soutient les communautés à travers Haïti et la diaspora.",
    'donate.vision.title':  'Notre vision',
    'donate.vision.desc':   'Construire des communautés fortes en Haïti et à l\'étranger grâce à l\'éducation et l\'engagement communautaire.',
    'donate.mission.title': 'Notre mission',
    'donate.community.title':'Notre communauté',
    'donate.edu.title':     'Mettre l\'accent sur l\'avancement éducatif',
    'donate.edu.intro':     'Notre priorité est l\'éducation. Quelques-uns de nos objectifs :',
    /*, Core values FR, */
    'val.integrity':        'Intégrité',
    'val.integrity.desc':   'Nous tenons nos promesses. Notre réputation repose sur l\'honnêteté, l\'équité et le respect de chacun.',
    'val.service':          'Service',
    'val.service.desc':     'Nous allons au-delà. Nous offrons le meilleur service à nos membres, à l\'université et à tous les alumni.',
    'val.quality':          'Qualité',
    'val.quality.desc':     'Nous poursuivons l\'excellence dans tout ce que nous faisons et la façon dont nous le faisons.',
    'val.innovation':       'Innovation',
    'val.innovation.desc':  'Notre succès dépend d\'une amélioration continue et d\'une ouverture aux nouvelles idées.',
    /*, Contact extras FR, */
    'contact.desc':         'Que vous soyez diplômé de l\'UNAH, un soutien ou simplement curieux de notre mission, nous serions ravis de vous entendre. Soumettez des événements, partagez des photos ou renseignez-vous sur nos programmes.',
    'contact.success':      'Merci ! Votre message a bien été envoyé.',
    /*, Footer extras FR, */
    'footer.nl.sub':        'Abonnez-vous pour recevoir les actualités, événements et reportages sur les alumni.',
    'footer.nl.success':    'Vous êtes abonné !',
    /*, History extras FR, */
    'history.founders.caption': 'Co-Fondateurs de CALUNAH',
    'history.founders.heading': 'La naissance de CALUNAH',
    'history.founders.p1':  'CALUNAH a vu le jour grâce à la grande initiative du Pasteur Roberne J. et de Mme Lynouse Dubreuze Saint-Louis, tous deux anciens étudiants de l\'Université Adventiste d\'Haïti (UNAH). De retour dans leur pays natal où ils ont eu l\'occasion de visiter le campus de Diquini, ils ont mis en place un programme pour rassembler tous les anciens de l\'UNAH.',
    'history.founders.p2':  'C\'est dans cet esprit que le <strong>samedi 13 décembre 1993</strong>, un groupe impressionnant de plus de <strong>150 anciens étudiants, employés et amis</strong> se sont réunis au restaurant haïtien <em>La Détente</em>. Avec la participation cordiale du Pasteur Ezéchias Jean, alors président de l\'UNAH, un noyau administratif a été nommé.',
    'history.founders.p3':  'CALUNAH n\'a pas connu un chemin sans turbulences. Cependant, grâce à la guidance du Tout-Puissant et au soutien de nombreux membres, elle s\'est développée considérablement et compte désormais <strong>plus de mille membres et correspondants officiels</strong> dans diverses régions des États-Unis, du Canada et à l\'étranger.',
    'history.founders.quote': 'Nous souhaitons à CALUNAH une longue vie et un succès continu dans la poursuite de sa mission humanitaire.',
    /*, Our Work extras FR, */
    'work.impact.scholarships': 'Bourses accordées',
    'work.impact.mentored':     'Étudiants encadrés',
    'work.impact.projects':     'Projets réalisés',
    'work.impact.years':        'Années de service',
    'work.scholarship.title': 'Programme de bourses',
    'work.scholarship.desc':  'Nous attribuons chaque année des bourses aux meilleurs étudiants de l\'UNAH faisant preuve d\'excellence académique et de besoins financiers. Nos bourses ont aidé des centaines d\'étudiants à réaliser leurs rêves éducatifs.',
    'work.scholarship.link':  'Soutenir un étudiant',
    'work.mentorship.title':  'Programme de mentorat',
    'work.mentorship.desc':   'Notre programme de mentorat alumni connecte des professionnels expérimentés avec les étudiants actuels de l\'UNAH, en leur fournissant des conseils de carrière et les ressources nécessaires pour réussir après l\'obtention de leur diplôme.',
    'work.mentorship.link':   'Devenir mentor',
    'work.campus.title':      'Développement du campus',
    'work.campus.desc':       'Nous soutenons activement le développement physique et académique du campus de l\'UNAH, des ressources de bibliothèque aux équipements de laboratoire en passant par les projets d\'infrastructure.',
    'work.campus.link':       'Investir dans l\'UNAH',
    'work.community.title':   'Service communautaire',
    'work.community.desc':    'Enraciné dans les valeurs chrétiennes de service, CALUNAH organise des projets communautaires annuels en Haïti et dans les communautés de la diaspora, des foires de santé aux collectes de nourriture.',
    'work.community.link':    'Bénévole',
    'work.network.title':     'Réseau professionnel',
    'work.network.desc':      'Notre réseau mondial d\'alumni est une ressource professionnelle inestimable. CALUNAH facilite les connexions d\'emploi, les recommandations professionnelles et les événements de réseautage.',
    'work.network.link':      'Rejoindre le réseau',
    'work.culture.title':     'Préservation culturelle',
    'work.culture.desc':      'Nous célébrons et préservons la culture haïtienne, l\'histoire et le patrimoine adventiste à travers des événements, des publications et des programmes artistiques.',
    'work.culture.link':      'Voir nos événements',
    'about.lead':           '<strong>CALUNAH</strong>, le <em>Club des Alumni de l\'Université Adventiste d\'Haïti</em>, est l\'association officielle des anciens de l\'<strong>UNAH</strong>, fondée en 1993 pour unir les diplômés à travers les générations, les professions et les continents.',
    'about.p2':              'Nous nous consacrons à entretenir des liens durables entre les anciens de l\'UNAH, à faire progresser la mission chrétienne de l\'université et à contribuer au développement d\'Haïti par l\'excellence académique, la responsabilité sociale et la croissance spirituelle.',
    'about.p3':              'Du campus verdoyant de l\'UNAH à Carrefour aux chapitres d\'anciens répartis sur plusieurs continents, CALUNAH relie notre passé commun à un avenir meilleur pour Haïti, pour l\'UNAH et pour chaque diplômé qui porte la flamme de l\'excellence.',
    'donate.mission.desc':   'CALUNAH se consacre à fournir des bourses et une aide financière pour soutenir l\'apprentissage des étudiants et les infrastructures scolaires.',
    'donate.mission.desc2':  'Notre mission humanitaire est <em>\'sans frontières\'</em>, ce qui signifie que nous nous efforçons de soutenir les étudiants de tous horizons.',
    'donate.community.desc':  'CALUNAH demeure un réseau progressiste de force, de solidarité et de service envers sa large communauté d\'anciens, d\'étudiants, d\'amis et de soutiens fidèles.',
    'donate.community.desc2': 'Notre mission est d\'apporter un soutien continu aux communautés par des bourses, des projets de construction et une aide financière.',
    'donate.tier1':          'Fournit des fournitures scolaires à un étudiant de l\'UNAH pour un semestre',
    'donate.tier2':          'Couvre un mois de manuels et de matériel pédagogique pour un étudiant',
    'donate.tier3':          'Finance une bourse d\'un semestre complet pour un étudiant méritant de l\'UNAH',
    'donate.tier4':          'Parraine une année académique complète et donne droit à une reconnaissance dans notre rapport annuel',
    'donate.501c3':          'CALUNAH est une organisation à but non lucratif 501(c)(3). Tous les dons sont déductibles des impôts dans les limites permises par la loi. Vous recevrez un reçu de don pour vos dossiers.',
    'blog.sub':              'Articles, annonces et portraits d\'anciens de la communauté CALUNAH',
    'social.sub':            'Restez informé, partagez des souvenirs et échangez avec les anciens partout',
    'qr.donate.title':      'Scannez pour faire un don',
    'qr.donate.note':       'Pointez l\'appareil photo de votre téléphone ici pour donner en toute sécurité',
    'qr.tickets.title':     'Scannez pour les billets',
    'qr.tickets.note':      'Achetez des billets pour le High Tea et les événements à venir',
    'qr.download':          'Télécharger',
    'donate.ways.title':    '4 façons de faire un don',
    /*, Donors extras FR, */
    'donors.become.desc':     'Votre générosité finance directement les bourses, le développement du campus et les programmes communautaires. En tant qu\'organisation 501(c)(3), tous les dons sont <strong>déductibles des impôts</strong>.',
    /*, Timeline FR, */
    'tl.Foundation.h':   'Fondation, 13 décembre 1993',
    'tl.Foundation.p':   'Plus de 150 anciens étudiants, employés et amis de l\'UNAH se sont réunis au restaurant <em>La Détente</em> pour établir officiellement CALUNAH sous la direction des co-fondateurs Pasteur Roberne J. et Mme Lynouse Dubreuze Saint-Louis.',
    'tl.Reunion.h':      'Première réunion annuelle',
    'tl.Reunion.p':      'CALUNAH a tenu sa première réunion annuelle inaugurale, rassemblant des dizaines de diplômés de l\'UNAH pour un week-end de fraternité, de célébration et de planification.',
    'tl.Florida.h':      'Fondation du chapitre de Floride',
    'tl.Florida.p':      'Alors que la diaspora haïtienne grandissait en Floride du Sud, CALUNAH a établi son premier chapitre international à Miami, FL, devenant un pôle de réseautage pour les alumni.',
    'tl.Scholarship.h':  'Lancement du programme de bourses',
    'tl.Scholarship.p':  'CALUNAH a officiellement lancé son programme de bourses, attribuant ses premières subventions à des étudiants méritants de l\'UNAH.',
    'tl.Expansion.h':    'Expansion nationale',
    'tl.Expansion.p':    'De nouveaux chapitres ont été établis à travers les États-Unis, notamment à New York, en Nouvelle-Angleterre et dans la région DMV.',
    'tl.501c3.h':        'Obtention du statut 501(c)(3)',
    'tl.501c3.p':        'CALUNAH a été officiellement reconnue comme organisation à but non lucratif 501(c)(3) par l\'IRS, permettant des dons déductibles des impôts.',
    'tl.Earthquake.h':   'Aide après le séisme en Haïti',
    'tl.Earthquake.p':   'Suite au dévastateur séisme de janvier 2010, CALUNAH a mobilisé ses alumni dans le monde entier pour collecter des fonds d\'urgence et coordonner le soutien à l\'UNAH.',
    'tl.Digital.h':      'Transformation numérique',
    'tl.Digital.p':      'CALUNAH a lancé son site officiel et sa présence sur les réseaux sociaux, élargissant considérablement sa portée et sa capacité à connecter les alumni du monde entier.',
    'tl.Covid.h':        'Résilience face au COVID-19',
    'tl.Covid.p':        'Lorsque la pandémie a forcé le monde en ligne, CALUNAH s\'est rapidement adapté aux événements virtuels, webinaires et réseautage numérique.',
    'tl.Anniversary.h':  'Célébration du 30e anniversaire',
    'tl.Anniversary.p':  'CALUNAH a célébré trois décennies d\'excellence avec un grand gala anniversaire, honorant les fondateurs et traçant une vision audacieuse pour les 30 prochaines années.',
    'tl.Today.h':        'Plus forts que jamais',
    'tl.Today.p':        'Avec plus de 5 000 alumni dans plus de 20 pays, CALUNAH continue d\'élargir ses programmes de bourses, son impact communautaire et son réseau mondial.',
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
    /*, Scholar Stories, */
    'scholars.badge':       'Lavi ou chanje',
    'scholars.title':       'Istwa Boursye yo',
    'scholars.sub':         'Rankontre etidyan ki ka reyalize rèv yo gras ak jenewozite ou',
    'scholars.cta':         'Sipòte yon boursye',
    /*, Testimonials, */
    'testimonials.badge':   'Nan pwòp mo yo',
    'testimonials.title':   'Vwa Kominote Nou an',
    'testimonials.sub':     'Alumni, etidyan ak sipòtè pataje sa CALUNAH vle di pou yo',
    /*, Partners, */
    'partners.badge':       'Pi fò ansanm',
    'partners.title':       'Patnè Nou yo',
    'partners.sub':         'Òganizasyon ak enstitisyon k ap mache bò kote nou nan misyon nou an',
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

    /*, Membership extras KR, */
    'mb.network':           'Rezo mondyal',
    'mb.scholarships':      'Opòtinite bous etid',
    'mb.career':            'Resous karyè',
    'mb.newsletter':        'Aksè nan bilten',
    'mb.events':            'Rediksyon sou evènman',
    'mb.voting':            'Dwa vote',
    'mem.recurring.title':  'Vin yon manm regilyè',
    'mem.recurring.sub':    'Sipòte CALUNAH otomatikman · Anile nenpòt kilè · 100% dediktibl',
    'mem.monthly':          'Chak mwa',
    'mem.yearly':           'Chak ane',
    'mem.save17':           'Ekonomize 17%',
    'mem.recurring.note':   'Pèman sekirize · 501(c)(3) · Anile nenpòt kilè pa imèl',
    'mem.pay.card':         'Peye ak kat',
    'mem.form.title':       'Fòm manmbèchip',
    'mem.form.success':     'Aplikasyon resevwa! Nou pral kontakte ou byento.',
    /*, Donate extras KR, */
    'donate.sub':           'CALUNAH se yon òganizasyon <strong>501(c)(3)</strong> san pwofi. Don ou kapab dedwi nan taks epi li finanse dirèkteman bous etid, pwogram kominotè ak devlopman kampis.',
    'donate.why.title':     'Poukisa bay CALUNAH?',
    'donate.why.sub':       "Don ou transforme lavi nan Inivèsite Adventis d'Ayiti ak nan kominote Ayiti ak dyaspora.",
    'donate.vision.title':  'Vizyon nou',
    'donate.vision.desc':   'Bati kominote fò ann Ayiti ak aletranje grâce à edikasyon ak angajman kominotè.',
    'donate.mission.title': 'Misyon nou',
    'donate.community.title':'Kominote nou',
    'donate.edu.title':     'Mete aksant sou avansma edikasyon',
    'donate.edu.intro':     'Priyorite nou se edikasyon. Kèk nan objektif nou yo:',
    /*, Core values KR, */
    'val.integrity':        'Entegrite',
    'val.integrity.desc':   'Nou kenbe pwomès nou. Reputasyon nou chita sou onètete, jistis ak respè pou tout moun.',
    'val.service':          'Sèvis',
    'val.service.desc':     'Nou ale pi lwen. Nou bay pi bon nivo sèvis pou manm nou yo, inivèsite a ak tout alumni yo.',
    'val.quality':          'Kalite',
    'val.quality.desc':     'Nou pouswiv ekselans nan sa nou fè ak jan nou fè l.',
    'val.innovation':       'Inovasyon',
    'val.innovation.desc':  'Siksè nou depann sou amelyorasyon kontinyèl ak louvri pou nouvo lide.',
    /*, Contact extras KR, */
    'contact.desc':         'Ke ou se yon ansyen etidyan UNAH, yon sipòtè, oswa jis kiriyen sou misyon nou, nou renmen tande ou. Soumèt evènman, pataje foto, oswa mande sou pwogram nou yo.',
    'contact.success':      'Mèsi! Mesaj ou a te voye avèk siksè.',
    /*, Footer extras KR, */
    'footer.nl.sub':        'Abòne pou resevwa nouvèl, evènman ak istwa alumni.',
    'footer.nl.success':    'Ou abòne!',
    /*, History extras KR, */
    'history.founders.caption': 'Ko-fondatè CALUNAH',
    'history.founders.heading': 'Nesans CALUNAH',
    'history.founders.p1':  'CALUNAH te fèt grâce à gwo inisyativ Pastè Roberne J. ak Mme Lynouse Dubreuze Saint-Louis, tou de ansyen etidyan Inivèsite Adventis d\'Ayiti (UNAH). Apre yo te retounen nan peyi yo epi vizite kampis Diquini, yo te kreye yon pwogram pou reyini tout ansyen UNAH yo.',
    'history.founders.p2':  'Se ak lide sa a nan tèt yo ke nan <strong>samdi 13 desanm 1993</strong>, yon gwoup enpresyonan plis pase <strong>150 ansyen etidyan, anplwaye ak zanmi</strong> te reyini nan restoran <em>La Détente</em> pou ofisyèlman etabli CALUNAH.',
    'history.founders.p3':  'CALUNAH pa te konn yon wout san difikilte, men grâce à gidans Bondye ak sipò anpil moun, li te devlope anpil e kounye a li gen <strong>plis pase mil manm ak korespondant ofisyèl</strong> nan divès rejyon Etazini, Kanada ak aletranje.',
    'history.founders.quote': 'Nou swete CALUNAH yon lavi long ak siksè kontinyèl nan pouswit misyon imanitè l.',
    /*, Our Work extras KR, */
    'work.impact.scholarships': 'Bous Akòde',
    'work.impact.mentored':     'Elèv Menm',
    'work.impact.projects':     'Pwojè Konplete',
    'work.impact.years':        'Ane Sèvis',
    'work.scholarship.title': 'Pwogram bous etid',
    'work.scholarship.desc':  'Nou bay bous anyèl pou pi bon etidyan UNAH ki montre ekselans akademik ak bezwen finansye. Bous nou yo te ede dèzèn etidyan reyalize rèv edikasyon yo.',
    'work.scholarship.link':  'Sipòte yon etidyan',
    'work.mentorship.title':  'Pwogram mentora',
    'work.mentorship.desc':   'Inisyativ mentora alumni nou konekte pwofesyonèl ekspèrimante ak etidyan aktyèl UNAH, pou bay konsèy karyè ak sipò yo bezwen pou reyisi.',
    'work.mentorship.link':   'Vin yon mentor',
    'work.campus.title':      'Devlopman kampis',
    'work.campus.desc':       'Nou sipòte aktivman devlopman fizik ak akademik kampis UNAH, depi resous bibliyotèk jiska ekipman laboratwa ak pwojè enfrastrikti.',
    'work.campus.link':       'Envesti nan UNAH',
    'work.community.title':   'Sèvis kominotè',
    'work.community.desc':    'Ankre nan valè kretyen sèvis, CALUNAH òganize pwojè kominotè anyèl ann Ayiti ak nan kominote dyaspora, depi fwa sante jiska kolèkt manje.',
    'work.community.link':    'Volontè',
    'work.network.title':     'Rezo pwofesyonèl',
    'work.network.desc':      'Rezo alumni mondyal nou se yon resous karyè enestimab. CALUNAH fasiliite koneksyon travay, referans pwofesyonèl ak evènman rezo pou diplome UNAH atravè mond lan.',
    'work.network.link':      'Rantre nan rezo a',
    'work.culture.title':     'Prezèvasyon kiltirèl',
    'work.culture.desc':      'Nou selebre ak prezève kilti ayisyen, istwa ak eritaj adventis atravè evènman, piblikasyon ak pwogram atistik ki konekte kominote nou ak rasin li yo.',
    'work.culture.link':      'Wè evènman nou yo',
    'about.lead':           '<strong>CALUNAH</strong>, <em>Club des Alumni de l\'Université Adventiste d\'Haïti</em>, se asosyasyon ofisyèl ansyen elèv <strong>UNAH</strong>, fonde an 1993 pou ini diplome yo atravè jenerasyon, pwofesyon ak kontinan.',
    'about.p2':              'Nou dedye nou pou kreye lyen dirab pami ansyen elèv UNAH yo, avanse misyon kretyen inivèsite a, epi kontribye nan devlopman Ayiti atravè ekselans akademik, responsablite sosyal ak kwasans espirityèl.',
    'about.p3':              'Depi kampis verdwayan UNAH nan Carrefour jiska chapit ansyen elèv nan plizyè kontinan, CALUNAH konekte tan pase nou ak yon avni pi klere pou Ayiti, pou UNAH ak pou chak diplome ki pote flanm ekselans lan.',
    'donate.mission.desc':   'CALUNAH dedye pou bay bous ak èd finansye pou sipòte aprantisaj elèv yo ak enfrastrikti lekòl yo.',
    'donate.mission.desc2':  'Misyon imanitè nou se <em>\'sans frontières\'</em> (san fwontyè), ki vle di nou fè efò pou sipòte elèv ki soti nan tout kalite background.',
    'donate.community.desc':  'CALUNAH rete yon rezo pwogresis fòs, inite ak sèvis pou gwo kominote ansyen elèv, etidyan, zanmi ak sipòtè fidèl li yo.',
    'donate.community.desc2': 'Misyon nou se bay sipò kontinyèl pou kominote yo atravè bous, pwojè konstriksyon ak èd finansye.',
    'donate.tier1':          'Bay materyèl lekòl pou yon elèv UNAH pou yon semès',
    'donate.tier2':          'Kouvri yon mwa liv ak materyèl akademik pou yon elèv',
    'donate.tier3':          'Finanse yon bous yon semès konplè pou yon elèv UNAH ki merite',
    'donate.tier4':          'Patwone yon ane akademik konplè epi resevwa rekonesans nan rapò anyèl nou',
    'donate.501c3':          'CALUNAH se yon òganizasyon 501(c)(3) san pwofi. Tout don yo dediktib nan taks selon limit lalwa pèmèt. Ou pral resevwa yon resi don pou dosye ou.',
    'blog.sub':              'Atik, anons ak pòtrè ansyen elèv nan kominote CALUNAH la',
    'social.sub':            'Rete enfòme, pataje souvni epi angaje ak lòt ansyen elèv toupatou',
    'qr.donate.title':      'Eskane pou bay don',
    'qr.donate.note':       'Pwente kamera telefòn ou isit la pou bay an sekirite',
    'qr.tickets.title':     'Eskane pou tikè evènman',
    'qr.tickets.note':      'Achte tikè pou High Tea ak evènman kap vini yo',
    'qr.download':          'Telechaje',
    'donate.ways.title':    '4 fason pou bay don',
    /*, Donors extras KR, */
    'donors.become.desc':     'Jenerozite ou finanse dirèkteman bous etid, devlopman kampis ak pwogram kominotè. Kòm yon òganizasyon 501(c)(3), tout don yo <strong>dediktibl nan taks</strong>.',
    /*, Timeline KR, */
    'tl.Foundation.h':   'Fondasyòn, 13 desanm 1993',
    'tl.Foundation.p':   'Plis pase 150 ansyen etidyan, anplwaye ak zanmi UNAH te reyini nan restoran <em>La Détente</em> pou ofisyèlman etabli CALUNAH anba lidèchip ko-fondatè Pastè Roberne J. ak Mme Lynouse Dubreuze Saint-Louis.',
    'tl.Reunion.h':      'Premye reyinyon anyèl',
    'tl.Reunion.p':      'CALUNAH te fè premye reyinyon anyèl enogiral li, reyini dizèn diplome UNAH pou yon wikenn fraternite, selebrasyon ak planifikasyon.',
    'tl.Florida.h':      'Chapit Florid Fondi',
    'tl.Florida.p':      'Lè dyaspora ayisyen te grandi nan Florid Sid, CALUNAH te etabli premye chapit entènasyonal li a Miami, FL, yon sant rezo pou alumni.',
    'tl.Scholarship.h':  'Lanse pwogram bous etid',
    'tl.Scholarship.p':  'CALUNAH ofisyèlman te lanse pwogram bous etid li, bay premye sibvansyon li yo pou etidyan UNAH ki merite.',
    'tl.Expansion.h':    'Ekspansyon nasyonal',
    'tl.Expansion.p':    'Nouvo chapit yo te etabli atravè Etazini, tankou New York, Nouvel Anglètè ak rejyon DMV lan.',
    'tl.501c3.h':        'Estati 501(c)(3) Obtni',
    'tl.501c3.p':        'CALUNAH te ofisyèlman rekonèt kòm yon òganizasyon 501(c)(3) pa IRS, ki pèmèt don dediktibl nan taks.',
    'tl.Earthquake.h':   'Sekou seyis Ayiti',
    'tl.Earthquake.p':   'Apre seyis devastatè janvye 2010, CALUNAH te mobilize alumni nan mond antye pou kolekte fon ijans pou UNAH ak kominote ayisyen an.',
    'tl.Digital.h':      'Transfòmasyon nimerik',
    'tl.Digital.p':      'CALUNAH te lanse sit ofisyèl li ak prezans rezo sosyal, elarji kapasite l pou konekte ak alumni nan mond antye.',
    'tl.Covid.h':        'Rezistans kont COVID-19',
    'tl.Covid.p':        'Lè pandemi an te fòse mond lan anliy, CALUNAH te vire rapidman nan evènman vityèl, webinè ak rezo nimerik.',
    'tl.Anniversary.h':  'Selebrasyon 30yèm anivèsè',
    'tl.Anniversary.p':  'CALUNAH te selebre twa deseni ekselans ak yon gala anivèsè istorik, onore fondatè yo ak trasen yon vizyon pou 30 ane kap vini yo.',
    'tl.Today.h':        'Pi fò pase janm',
    'tl.Today.p':        'Avèk plis pase 5 000 alumni nan 20+ peyi, CALUNAH kontinye elaji pwogram bous etid li, enpak kominotè ak rezo mondyal li, toujou solid pou yon avni plen espwa pou Ayiti ak UNAH.',
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
let CURRENT_LANG = 'en';

function applyTranslation(lang) {
  const t = CALUNAH_LANG[lang];
  if (!t) return;
  CURRENT_LANG = lang;

  // Translate all [data-i18n] elements
  qsa('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    const val = t[key];
    if (val == null) return;

    // 1) Rich text: translation contains HTML tags → replace innerHTML wholesale.
    //    (Lets long paragraphs keep their <strong>/<em> formatting per language.)
    if (/[<&]/.test(val) && /<[a-z!/]/i.test(val)) {
      el.innerHTML = val;
      return;
    }

    // 2) Element holds a leading icon/span we must preserve (e.g. nav links, buttons)
    const childEls = [...el.childNodes].filter(n => n.nodeType === 1 && n.tagName !== 'BR');
    if (childEls.length > 0) {
      const textNodes = [...el.childNodes].filter(n => n.nodeType === 3 && n.textContent.trim());
      if (textNodes.length > 0) {
        textNodes[textNodes.length - 1].textContent = val;
      } else {
        // No existing text node — append one after the icon
        el.appendChild(document.createTextNode(val));
      }
      return;
    }

    // 3) Plain text
    el.textContent = val;
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

  // Apply saved language on load. For English we normally skip (it's the
  // HTML default) — but if the admin has edited any English text via the
  // Content editor, apply it so those overrides show.
  if (savedLang !== 'en') {
    applyTranslation(savedLang);
  } else if (CALUNAH_CONFIG.contentOverrides) {
    applyTranslation('en');
  }
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
    donors:      'data/donors.json',
    menu:        'data/menu.json',
    content:     'data/content.json',
    sections:    'data/sections.json',
    scholars:     'data/scholars.json',
    testimonials: 'data/testimonials.json',
    partners:     'data/partners.json'
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
      if (key === 'menu'        && json.menu && json.menu.length) CALUNAH_CONFIG.menu = json.menu;
      if (key === 'content'     && json.content && typeof json.content === 'object') {
        // Admin-edited English text overrides — merge into the EN dictionary
        // so the existing data-i18n translation system applies them.
        if (typeof CALUNAH_LANG !== 'undefined' && CALUNAH_LANG.en) {
          Object.assign(CALUNAH_LANG.en, json.content);
        }
        CALUNAH_CONFIG.contentOverrides = json.content;
      }
      if (key === 'content'     && json.fundraiser) CALUNAH_CONFIG.fundraiser = json.fundraiser;
      if (key === 'sections'    && Array.isArray(json.sections)) CALUNAH_CONFIG.customSections = json.sections;
      if (key === 'scholars'    && Array.isArray(json.scholars))     CALUNAH_CONFIG.scholars     = json.scholars;
      if (key === 'testimonials'&& Array.isArray(json.testimonials)) CALUNAH_CONFIG.testimonials = json.testimonials;
      if (key === 'partners'    && Array.isArray(json.partners))     CALUNAH_CONFIG.partners     = json.partners;
    } catch (e) { /* silently fall back to config defaults */ }
  }));
}

/* Fundraising tracker — fills the progress bar from CALUNAH_CONFIG.fundraiser
   { raised, goal } (editable in admin). Falls back to goal 150000 / raised 0. */
function buildFundraiser() {
  const fill   = qs('#ft-fill');
  if (!fill) return;
  const f      = CALUNAH_CONFIG.fundraiser || {};
  const goal   = Number(f.goal)   > 0 ? Number(f.goal)   : 150000;
  const raised = Number(f.raised) >= 0 ? Number(f.raised) : 0;
  const pct    = Math.max(0, Math.min(100, Math.round((raised / goal) * 100)));
  const money  = n => '$' + Math.round(n).toLocaleString('en-US');

  const raisedEl = qs('#ft-raised');
  const goalEl   = qs('#ft-goal-amt');
  const pctEl    = qs('#ft-pct');
  const goalSpan = qs('.ft-goal');
  if (raisedEl) raisedEl.textContent = money(raised);
  if (goalEl)   goalEl.textContent   = money(goal);
  if (pctEl)    pctEl.textContent    = pct + '%';
  if (goalSpan) goalSpan.textContent = money(goal);
  // animate fill after a tick
  requestAnimationFrame(() => { fill.style.width = pct + '%'; });
}

/* Render admin-created custom sections into #custom-sections.
   Each section: { title, subtitle, body (HTML allowed), image, bg } */
function buildCustomSections() {
  const wrap = qs('#custom-sections');
  const list = CALUNAH_CONFIG.customSections;
  if (!wrap || !list || !list.length) return;
  wrap.innerHTML = list.filter(s => s && s.visible !== false).map((s, i) => {
    const alt = i % 2 === 1;
    const img = s.image
      ? `<div class="cx-media"><img src="${s.image}" alt="${(s.title||'').replace(/"/g,'&quot;')}" loading="lazy" decoding="async"></div>`
      : '';
    return `<section class="section cx-section ${alt ? 'cx-alt' : ''}" ${s.bg ? `style="background:${s.bg}"` : ''}>
      <div class="container cx-inner ${img ? 'cx-haswide' : ''}">
        <div class="cx-text">
          ${s.badge ? `<span class="section-badge">${s.badge}</span>` : ''}
          ${s.title ? `<h2 class="section-title">${s.title}</h2>` : ''}
          ${s.subtitle ? `<p class="section-sub">${s.subtitle}</p>` : ''}
          ${s.body ? `<div class="cx-body">${s.body}</div>` : ''}
          ${s.ctaLabel && s.ctaHref ? `<a href="${s.ctaHref}" class="btn btn-gold cx-cta">${s.ctaLabel}</a>` : ''}
        </div>
        ${img}
      </div>
    </section>`;
  }).join('');
}

/* Render the top navigation from CALUNAH_CONFIG.menu (managed in admin).
   If no menu config is present, the existing hardcoded HTML is left as-is. */
function buildNav() {
  const menu = CALUNAH_CONFIG.menu;
  const ul = qs('#nav-links');
  if (!ul || !menu || !menu.length) return;   // safe fallback: keep HTML nav

  ul.innerHTML = menu.map(item => {
    const i18n = item.i18n ? ` data-i18n="${item.i18n}"` : '';
    const icon = item.icon ? `<i class="${item.icon} nav-icon"></i>` : '';
    if (item.dropdown && item.dropdown.length) {
      const dd = item.dropdown.map(d => {
        const di18n = d.i18n ? ` data-i18n="${d.i18n}"` : '';
        const dicon = d.icon ? `<i class="${d.icon}"></i>` : '';
        return `<li><a href="${d.href}" class="nav-dd-item">${dicon}<span${di18n}>${d.label}</span></a></li>`;
      }).join('');
      return `<li class="nav-item has-dropdown">
        <a href="${item.href}" class="nav-link nav-has-arrow">
          <i class="${item.icon || 'fas fa-info-circle'} nav-icon"></i><span${i18n}>${item.label}</span>
          <i class="fas fa-chevron-down nav-arrow"></i>
        </a>
        <ul class="nav-dropdown">${dd}</ul>
      </li>`;
    }
    if (item.donate) {
      return `<li class="nav-item"><a href="${item.href}" class="nav-link btn-nav-donate"><i class="${item.icon || 'fas fa-heart'}"></i><span${i18n}>${item.label}</span></a></li>`;
    }
    return `<li class="nav-item"><a href="${item.href}" class="nav-link">${icon}<span${i18n}>${item.label}</span></a></li>`;
  }).join('');
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
  buildNav();        // render nav from menu.json (if present) before wiring handlers
  initNav();
  initAOS();
  initSmoothScroll();
  initAccessibility();

  /* Build dynamic content */
  initStats();
  buildCommittee();
  buildChapters();
  buildDonors();
  buildScholars();
  buildTestimonials();
  buildPartners();
  buildEvents();
  buildGallery();
  buildVideos();
  buildBlog();
  buildNewsletterIssues();
  buildMembership();
  buildCustomSections();
  buildFundraiser();

  /* Re-scan AOS after all dynamic content is injected */
  if (window.AOS) AOS.refresh();

  /* Interactive widgets */
  initLightbox();
  initLivestream();
  initContactForm();
  initMembershipForm();
  initRecurringMembership();
  initNLSignupForm();
  initTicketReturn();

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
  initReadProgress();

  /* Performance & UX extras */
  initLazyIframes();
  initCookieBanner();

  /* Language switcher */
  initLanguageSwitcher();

  /* If arrived via a #hash (e.g. QR code), scroll to it after content builds */
  initHashLanding();

  /* Done */
  console.log(
    '%c CALUNAH Website v3.0, Ready ✓ ',
    'background:#0a2714;color:#c9a227;font-weight:bold;padding:4px 10px;border-radius:4px;font-size:13px;'
  );
});
