# Content Guide

You're tired. Here's how to swap everything out quickly.

---

## 1. Edit All Text

Open one file: `src/content.js`

Every word on the website lives here. Find the section you want,
change the text between the quotes, save the file.

- **Hero section** → look for `hero: {`
- **Historical Context** → look for `historicalContext: {`
- **The Storyteller** → look for `storyteller: {`
- **Interview clips** → look for `interview: {` then `clips: [`
- **Reflection** → look for `reflection: {`
- **Sources** → look for `sources: [`

Paragraphs are stored as arrays. Each item in quotes is one paragraph:
```js
paragraphs: [
  "First paragraph goes here.",
  "Second paragraph goes here.",
]
```

To add a paragraph, add a new quoted string with a comma after it.
To remove one, delete that line.

---

## 2. Swap Audio Files

1. Name your recordings: `clip1.m4a`, `clip2.m4a`, `clip3.m4a`, `clip4.m4a`
2. Drop them into the `public/audio/` folder (replace the existing files)
3. Done. The site will play them automatically.

**To add a 5th clip:**
1. Drop `clip5.m4a` into `public/audio/`
2. Open `src/content.js`, find the `clips: [` array
3. Copy one of the existing clip objects and paste it at the end
4. Change the `id` to `"clip5"`, update `audioFile` to `"/audio/clip5.m4a"`
5. Update the `title`, `pullQuote`, and `transcript` fields

---

## 3. Swap Images

**Mom's photo:**
1. Name the file `storyteller-photo.jpg`
2. Drop it into `public/images/` (replace existing)
3. A 4:3 aspect ratio looks best. Any size works.

**Hero background map:**
1. Name the file `hero-map.svg` (or `hero-map.jpg`)
2. Drop into `public/images/`
3. If using .jpg instead of .svg, open `src/components/Hero.jsx`
   and change `hero-map.svg` to `hero-map.jpg` in the backgroundImage line

---

## 4. Deploy Updates

If Vercel is connected to your GitHub repo:

1. Save your changes
2. In terminal: `git add . && git commit -m "update content" && git push`
3. Vercel auto-deploys in ~60 seconds
4. Check your Vercel dashboard for the live URL

---

## 5. Preview Locally Before Deploying

1. In terminal, navigate to this folder
2. Run: `npm run dev`
3. Open the URL it shows (usually http://localhost:5173)
4. Your changes appear instantly as you save files

---

## Quick Troubleshooting

- **Site won't start?** Run `npm install` first, then `npm run dev`
- **Audio won't play?** Make sure files are .m4a format and in `public/audio/`
- **Text not updating?** Make sure you saved `src/content.js` and check for missing quotes or commas
- **Image not showing?** Check the filename matches exactly (case-sensitive)
