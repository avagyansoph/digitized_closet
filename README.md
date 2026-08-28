# Dress-Up Game

A simple browser-based dress-up game. Click a shirt or pair of pants from the
side panels to put it on the character in the center.

## Live demo

Once pushed to GitHub, you can enable **GitHub Pages** (Settings → Pages →
Deploy from branch → `main` → `/root`) to host this for free at
`https://<your-username>.github.io/<repo-name>/`.

## Project structure

```
gnerd-project/
├── index.html          # Markup only — no inline styles or scripts
├── css/
│   └── style.css        # All styling
├── js/
│   └── script.js         # All interactivity
├── images/
│   ├── character/        # Base character image(s)
│   ├── shirts/            # Shirt thumbnails/options
│   ├── pants/              # Pants thumbnails/options
│   └── background.jpg       # Page background
└── README.md
```

This is the standard convention for a small static site: **HTML, CSS, and
JS live in separate files**, referenced with relative paths, so each can be
edited, cached, and diffed independently. There's no build step, so you
don't need Node.js, npm, or React here — those tools solve problems (module
bundling, component reuse, server rendering) that a page like this doesn't
have. Adding them would mean extra config files and a build step for no
real benefit. If this project grows into something with reusable
components, client-side routing, or a backend, that's the point where
reaching for a framework starts to pay off.

## Setup

No build step required. Just open `index.html` in a browser, or serve the
folder locally:

```bash
# Python
python3 -m http.server 8000

# Node (if you have it)
npx serve
```

Then visit `http://localhost:8000`.

## Adding images

Drop the character base image into `images/character/`, shirt options into
`images/shirts/`, and pants options into `images/pants/`, then update the
`src` paths in `index.html` to match your filenames.

## Notes on this version

- Fixed a duplicate `id="scrollbox"` bug (IDs must be unique per page —
  each panel now has its own id: `shirt-scrollbox` / `pant-scrollbox`).
- Wired up the up/down scroll buttons, which were referenced in the
  original script but never existed in the HTML.
- The character (`#body`/`#img`), shirt, and pants elements are now
  actually present in the HTML — previously they were only defined in CSS.
- Removed the leftover duplicate draggable placeholder images
  (`.testposition`) from the center panel — let me know if you actually
  wanted a free-drag feature and I can rebuild that properly.
