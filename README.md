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
git clone https://github.com/juancadev/jcd-signature-svelte-web
cd jcd-signature-svelte-web
npm install
npm run dev
```

Open `http://localhost:5173` in your browser.

---

## Project Structure

```
jcd-signature-svelte-web/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── FormPanel/          # Step-by-step form fields
│   │   ├── PreviewPanel/       # Real-time signature preview
│   │   ├── Templates/          # Classic, Modern, Minimal
│   │   └── ExportPanel/        # Export buttons and actions
│   ├── stores/
│   │   └── signatureStore.js   # Global state via Svelte stores
│   ├── utils/
│   │   ├── exportHTML.js       # Generates copyable HTML output
│   │   └── exportPNG.js        # html2canvas logic for PNG export
│   ├── App.svelte
│   └── main.js
├── vite.config.js
├── tailwind.config.js
└── package.json
```

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