# jcd-signature-svelte-web

> Open source email signature generator — 100% frontend, no backend required.  
> Export HTML ready for Gmail / Outlook and PNG optimized for mobile clients.

Part of the [Juancadev](https://juancamilofarfan.com) ecosystem · Built with Svelte + Vite + TailwindCSS.

🔗 **Live:** [signature.juancamilofarfan.com](https://signature.juancamilofarfan.com)

---

## Tech Stack

| Tool          | Role                         |
|---------------|------------------------------|
| Svelte + Vite | Framework and bundler        |
| Tailwind CSS  | Utility-first styling        |
| html2canvas   | PNG export                   |
| Lucide Svelte | Icons for social and contact |

---

## Getting Started

```bash
git clone https://github.com/juancadev-io/jcd-signature-svelte-web
cd jcd-signature-svelte-web
npm install
npm run dev
```

Open `http://localhost:5173` in your browser.

---

## Project Structure

```
jcd-signature-svelte-web/
├── static/
│   └── robots.txt
├── src/
│   ├── app.d.ts
│   ├── app.html
│   ├── lib/
│   │   ├── assets/
│   │   └── index.ts
│   └── routes/
│       ├── +layout.svelte
│       ├── +page.svelte
│       └── layout.css
├── svelte.config.js
├── vite.config.ts
├── wrangler.jsonc
└── package.json
```

### Planned structure (not implemented yet)

- [ ] `src/components/FormPanel/`
- [ ] `src/components/PreviewPanel/`
- [ ] `src/components/Templates/`
- [ ] `src/components/ExportPanel/`
- [ ] `src/stores/signatureStore.js`
- [ ] `src/utils/exportHTML.js`
- [ ] `src/utils/exportPNG.js`
- [ ] `src/App.svelte`
- [ ] `src/main.js`
- [ ] `public/favicon.svg`
- [ ] `tailwind.config.js`
- [ ] `vite.config.js`

---

## Roadmap

- [ ] More signature templates
- [ ] Multiple saved signatures
- [ ] Dark mode preview
- [ ] i18n (Spanish / English)
- [ ] Calendly CTA button integration
- [ ] Custom banner generator

---

## Contributing

Pull requests are welcome. Please open an issue first for major changes.

```bash
# Fork the repo → create your branch → open a PR to main
git checkout -b feature/new-template
```

---

## License

MIT · Made with love by [Juancadev](https://juancamilofarfan.com)