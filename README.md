# Code Synergy Labs

Marketing site for [codesynergylabs.com](https://codesynergylabs.com) — AI, ERP, and custom software development.

This is a standalone Vite + React app, separate from the GoMach project. It deploys to GitHub Pages at `https://nurulaminawan.github.io/code_synergy_labs/`.

## Local development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
npm run preview
```

## GitHub Pages

The site is published from GitHub Actions to:

https://nurulaminawan.github.io/code_synergy_labs/

To attach `codesynergylabs.com` later, set Pages custom domain, restore the `CNAME` file, and change `BASE_PATH` in `.github/workflows/deploy.yml` to `/`. Then point DNS at GitHub Pages.

Optional contact form: add a [Web3Forms](https://web3forms.com) key as the Actions secret `VITE_WEB3FORMS_KEY` (use `info@codesynergylabs.com`). Without it, the form opens a mailto draft.

## Stack

React, Vite, Tailwind CSS v4, Framer Motion, Wouter. No backend — static hosting only.
