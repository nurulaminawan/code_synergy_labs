# Code Synergy Labs

Marketing site for [codesynergylabs.com](https://codesynergylabs.com) — AI, ERP, and custom software development.

This is a standalone Vite + React app, separate from the GoMach project. It deploys to GitHub Pages with the custom domain `codesynergylabs.com`.

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

1. Create a GitHub repository and push this folder as `main`.
2. In the repo: **Settings → Pages → Source: GitHub Actions**.
3. Point the domain `codesynergylabs.com` (and `www`) to GitHub Pages:
   - `A` records: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - or `CNAME` to `<user>.github.io`
4. Optional contact form: add a [Web3Forms](https://web3forms.com) key as the Actions secret `VITE_WEB3FORMS_KEY` (use `info@codesynergylabs.com`). Without it, the form opens a mailto draft.

## Stack

React, Vite, Tailwind CSS v4, Framer Motion, Wouter. No backend — static hosting only.
