# Nihar Patel – Portfolio

Vite + React portfolio site.

## Run locally
    npm install
    npm run dev

## Build
    npm run build      # output in dist/

## Deploy
Netlify reads `netlify.toml`: build command `npm run build`, publish folder `dist`, Node 22.

## Edit content
- Projects: `src/data/projects.js` (images in `public/images/projects/`)
- Certificates: `src/data/certificates.js` (images in `public/images/certificates/`)
- Skills: `src/data/skills.js`
- Links, nav and about facts: `src/data/site.js`
- Photo: `public/images/nihar.jpg`
- Colors and layout: `src/styles.css` (colors are the variables at the top)
