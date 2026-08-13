# Code Synergy Labs

Marketing site for [codesynergylabs.com](https://codesynergylabs.com) — AI, ERP, and custom software development.

This is a standalone Vite + React app, separate from the GoMach project. It deploys to GitHub Pages and is intended to serve `https://codesynergylabs.com`.

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

Published from GitHub Actions. Custom domain: `codesynergylabs.com`.

Hostinger DNS for the website (keep all mail records as they are):

- Delete `ALIAS @` → `codesynergylabs.com.cdn.hstgr.net`
- Add `A @` records: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
- Change `CNAME www` from `www.codesynergylabs.com.cdn.hstgr.net` to `nurulaminawan.github.io`

Optional contact form: add a [Web3Forms](https://web3forms.com) key as the Actions secret `VITE_WEB3FORMS_KEY`. Without it, the form opens a mailto draft.

## Stack

React, Vite, Tailwind CSS v4, Framer Motion, Wouter. No backend — static hosting only.
