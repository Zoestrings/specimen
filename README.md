# specimen

A small, opinionated catalog of open-source React components.
First up: TechText from React Bits.

## Run

npm install
npm run dev

Open http://localhost:3000.

## What's in here

- `app/page.tsx` — the entire site. One route.
- `components/TechText.jsx` + `TechText.css` — the React Bits component, verbatim.
- `components/Header.tsx`, `components/Footer.tsx` — chrome.

## Notes on the design

The site is intentionally quiet. There's one accent color (`#7df9ff`)
and it's used on exactly three things: the wordmark outline, a hover
underline, and the header status dot. Everything else is off-white on
near-black with hairline rules.

The copy has opinions. That's on purpose. If you fork this, rewrite the
copy in your own voice — it will read like a stranger otherwise.
