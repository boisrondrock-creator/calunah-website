# CALUNAH Website — Setup & Customization Guide

## 📁 Where to Put Your Photos

Save your photos using THESE exact filenames:

```
calunah-website/
├── images/
│   ├── logo.png                   ← The CALUNAH logo (5th image you shared)
│   ├── campus/
│   │   ├── aerial-1.jpg           ← 1st campus aerial photo
│   │   ├── aerial-2.jpg           ← 2nd aerial (LUNAH letters on grass)
│   │   ├── auditorium.jpg         ← Auditorium Michel Toussaint photo
│   │   └── main-building.jpg      ← Main building (yellow/beige)
│   ├── events/
│   │   ├── gala-2025.jpg          ← Your event flyers go here
│   │   └── ...
│   └── gallery/
│       └── ...                    ← Past event photos go here
```

---

## ✏️ How to Update Content (No Coding Needed)

Open `js/main.js` — at the very top is `CALUNAH_CONFIG`.
This is where you change everything:

### Add/Edit Social Media Links
```javascript
social: {
  facebook:  'https://www.facebook.com/YOUR_PAGE',
  instagram: 'https://www.instagram.com/YOUR_HANDLE',
  twitter:   'https://www.x.com/YOUR_HANDLE',
  youtube:   'https://www.youtube.com/@YOUR_CHANNEL',
},
```

### Add Events
```javascript
events: [
  {
    title:    'Your Event Name',
    date:     '2025-12-01',        // YYYY-MM-DD format
    time:     '7:00 PM',
    location: 'Miami, FL',
    category: 'Annual Gala',
    image:    'images/events/your-flyer.jpg',  // flyer image
    description: 'Short description of the event.',
    link:     'https://...',       // link to tickets or more info
  },
],
```

### Add YouTube Videos
1. Go to your YouTube video
2. Copy the Video ID from the URL: `youtube.com/watch?v=**COPY_THIS_PART**`
3. Paste it in the config:
```javascript
videos: [
  { id: 'PASTE_VIDEO_ID', title: 'Your Video Title', year: '2025' },
],
```

### Add Gallery Photos
```javascript
gallery: [
  { src: 'images/gallery/photo.jpg', caption: 'Description', category: 'events' },
  // categories: campus | events | gala | community
],
```

---

## 📤 How to Put the Contact Form on Formspree (Free)

1. Go to https://formspree.io and sign up (free)
2. Create a new form → copy your Form ID
3. In `index.html`, find this line and replace `YOUR_FORM_ID`:
   ```html
   <form ... action="https://formspree.io/f/YOUR_FORM_ID" ...>
   ```
4. Now form submissions go straight to your email!

---

## 📘 How to Add Your Facebook Page Widget

1. In `index.html`, find the `fb-embed-wrapper` section
2. Replace `https://www.facebook.com/CALUNAH` with your actual page URL
3. Uncomment the Facebook SDK script at the bottom of `index.html`

---

## 🚀 How to Publish the Site

### Option A — Netlify (Easiest, Free)
1. Go to https://netlify.com and sign up
2. Drag your entire `calunah-website/` folder onto the Netlify dashboard
3. Your site is live instantly!
4. Then point your calunah.org domain's DNS to Netlify

### Option B — Vercel (Also Free)
1. Go to https://vercel.com
2. Import your folder or connect GitHub
3. Point your domain DNS to Vercel

### Pointing Your Wix Domain (calunah.org) to the New Site
1. Log into your Wix account → Domains
2. Manage DNS for calunah.org
3. Change the **A Record** to point to Netlify/Vercel's IP
4. (Your host gives you the exact IP/CNAME values to use)

---

## 🎨 How to Change Colors

Open `css/style.css` — at the very top are the color variables:
```css
:root {
  --green:  #1a6b2f;    /* Main green */
  --gold:   #c9a227;    /* Gold accent */
  /* Change these to adjust the whole site */
}
```
