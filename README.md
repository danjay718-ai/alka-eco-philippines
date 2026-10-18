# AlkaEco Philippines — static website

Complete export of the latest 11-page design, including the leaf hero, white navigation and updated cards.

## Deploy to Netlify

1. Extract the ZIP.
2. Open https://app.netlify.com/drop and sign in to your Netlify account.
3. Drag the `site` folder into the deployment area. This is the folder containing `index.html`.
4. Open the Netlify URL after deployment.

No npm install, build command, React, database or PHP is required.

## Optional Git deployment

Push the contents of `site` to your repository root. Set the publish directory to `.` and leave the build command empty. If you push this entire export instead, set the publish directory to `site`.

## Local preview

### Option 1: Using npm (Recommended — with live reload)

```sh
npm install
npm run dev
```

This will automatically launch the preview at http://localhost:3000 with auto-reload whenever you save changes.

### Option 2: Using Python

```sh
python3 -m http.server 3000 --directory site
```

Then open http://localhost:3000. Opening index.html directly with `file://` is not supported because links and assets use root-relative paths.

## Edit the site

- `site/index.html`: home page
- `site/style.css`: all styling, responsive rules and recent design overrides
- `site/js/main.js`: mobile navigation and email enquiry preparation
- `site/js/gallery.js`: enlarged product gallery
- `site/assets/`: local images and logo
- Other page folders each contain an `index.html`.

Header/footer markup is repeated in each page; update every page when changing global navigation.

## Current behavior and content

- Contact form opens an email draft; it does not send or store submissions on a server.
- Google Fonts load over the internet, with local system fallbacks.
- Product images and Luc de Haan photo originate from https://alka-eco.com/; preserve appropriate permissions and attribution.
- The leaf hero is AI-generated. Equipment images are references and do not establish a Philippine installation.
- Philippine contact details remain subject to confirmation.
- The source uses no Sites-specific runtime, credentials or hosting dependency.
- Route, image and JavaScript syntax checks passed. Visual browser QA was unavailable during creation.

Netlify deployment reference: https://docs.netlify.com/deploy/create-deploys/
