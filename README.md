# Panto — Furniture Landing Page

Panto is a responsive React + Vite landing/shop demo for a furniture store. It uses Tailwind CSS for styling, React Router for navigation, and a small client-side cart/context to demonstrate basic interactions (add-to-cart, theme toggle, category filters).

**Live demo:** https://panto-furniture-4d75d3.netlify.app/

## Features

- Responsive landing and shop pages with category filters and product cards
- Client-side cart powered by React Context with SweetAlert2 notifications
- Dark mode toggle (global CSS class) via `ThemeContext`
- Built with Vite for fast development and Tailwind CSS for utility-first styling

## Tech stack

- React 19
- Vite
- Tailwind CSS
- React Router
- SweetAlert2 (for toast/alerts)
- Swiper (carousel in some pages)

## Quick start

Prerequisites: Node.js (16+) and npm.

Install dependencies:

```bash
npm install
```

Run the dev server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

Run the linter:

```bash
npm run lint
```

## Project structure (key files)

- [index.html](index.html)
- [vite.config.js](vite.config.js)
- [tailwind.config.js](tailwind.config.js)
- [postcss.config.js](postcss.config.js)
- [package.json](package.json)
- [src/main.jsx](src/main.jsx)
- [src/App.jsx](src/App.jsx)
- [src/index.css](src/index.css)
- [src/Routes/Route.jsx](src/Routes/Route.jsx)
- [src/Context/CartContext.jsx](src/Context/CartContext.jsx)
- [src/Context/ThemeContext.jsx](src/Context/ThemeContext.jsx)
- [src/Pages/Shop/Products.jsx](src/Pages/Shop/Products.jsx)
- [src/Utils/products.js](src/Utils/products.js)

Full source tree is under `src/` including `Components/`, `Pages/`, `Context/`, `Routes/`, and `Utils/`.

## Notes & Troubleshooting

- If you see a Vite CSS preprocessor error like:

```
[plugin:vite:css] Preprocessor dependency "sass-embedded" not found. Did you install it?
```

    - Cause: a dependency (or one of its source files) imports an SCSS file and Vite is configured to compile it. Example: `sweetalert2` ships an SCSS source file in some versions.
    - Fix A (enable SCSS support): install the recommended preprocessor and restart the dev server:

    ```bash
    npm install -D sass-embedded
    npm run dev
    ```

    - Fix B (preferable when you don't need SCSS builds): import the library's compiled CSS instead of the SCSS source. For SweetAlert2 the project already uses the compiled CSS in `src/main.jsx`:

    	- Current import: `import 'sweetalert2/dist/sweetalert2.min.css'` (recommended)

    - Temporary workaround: disable the HMR overlay by setting `server.hmr.overlay = false` in `vite.config.js` — this hides the overlay but does not fix the root cause.

## Development notes

- Theme toggling uses `ThemeContext` which adds/removes the `dark` class on the `document.documentElement`. Tailwind's `darkMode: 'class'` is configured in [tailwind.config.js](tailwind.config.js).
- The cart is implemented in [src/Context/CartContext.jsx](src/Context/CartContext.jsx) and uses SweetAlert2 to show add/duplicate notifications.
- Routing is defined in [src/Routes/Route.jsx](src/Routes/Route.jsx) and the page layout is provided by `App.jsx`.

## How you can help / contribute

- Open an issue for bugs or feature requests.
- Create a PR with small, focused changes (new components, accessibility fixes, better image handling).

## License

This repository does not include a license file. Add `LICENSE` if you want to set project licensing terms.

---

If you want, I can:

- add a demo screenshot and deployment instructions (Netlify/Vercel),
- generate a minimal `CONTRIBUTING.md`, or
- fix the original SCSS import errors automatically by switching imports to the compiled CSS.
