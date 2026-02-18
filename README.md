# jcd-signature-svelte-web

Open-source email signature generator (100% frontend, no backend).

- Export **HTML** ready for Gmail / Outlook
- Export **PNG** optimized for mobile clients
- Save and load configuration as **JSON**

Part of the [Juancadev](https://juancamilofarfan.com) ecosystem.

🔗 **Live:** [signature.juancamilofarfan.com](https://signature.juancamilofarfan.com)

---

## Current status (implemented)

- ✅ Section-based editor: Personal, Contact, Social, Design, Extras
- ✅ Real-time preview
- ✅ **6 signature layouts**
- ✅ **2 visual styles** (`classic`, `minimal`)
- ✅ Typography, font size, and color controls
- ✅ Avatar/logo upload (file or URL)
- ✅ Social links (LinkedIn, X/Twitter, GitHub, Instagram, YouTube, WhatsApp)
- ✅ Optional CTA (text + URL)
- ✅ Editable legal disclaimer
- ✅ Copy HTML to clipboard
- ✅ Download PNG
- ✅ Save configuration (`.json`)
- ✅ Load configuration (`.json`)
- ✅ Reset to defaults

---

## Tech stack

| Tool | Role |
|---|---|
| SvelteKit 2 + Svelte 5 | Framework |
| Vite 7 | Bundler / dev server |
| Tailwind CSS 4 | Styling |
| TypeScript | Domain typing |
| html2canvas | PNG export |
| Wrangler + adapter-cloudflare | Cloudflare build and preview |

---

## Installation & development

```bash
git clone https://github.com/juancadev-io/jcd-signature-svelte-web
cd jcd-signature-svelte-web
npm install
npm run dev
```

Open: `http://localhost:5173`

---

## Available scripts

```bash
npm run dev          # development mode
npm run build        # production build
npm run preview      # wrangler preview (Cloudflare)
npm run check        # type checks (svelte-check)
npm run check:watch  # watch mode checks
npm run lint         # prettier + eslint
npm run format       # auto-format
npm run gen          # generate wrangler types
```

---

## Project structure

```text
jcd-signature-svelte-web/
├── static/
│   └── robots.txt
├── src/
│   ├── app.d.ts
│   ├── app.html
│   ├── lib/
│   │   ├── assets/
│   │   ├── components/
│   │   │   ├── ExportPanel/
│   │   │   │   └── ExportPanel.svelte
│   │   │   ├── FormPanel/
│   │   │   │   ├── FormPanel.svelte
│   │   │   │   ├── SectionWrapper.svelte
│   │   │   │   └── sections/
│   │   │   │       ├── ContactSection.svelte
│   │   │   │       ├── DesignSection.svelte
│   │   │   │       ├── ExtrasSection.svelte
│   │   │   │       ├── PersonalSection.svelte
│   │   │   │       └── SocialSection.svelte
│   │   │   ├── PreviewPanel/
│   │   │   │   └── PreviewPanel.svelte
│   │   │   └── Templates/
│   │   │       ├── SocialLinks.svelte
│   │   │       ├── Template1.svelte
│   │   │       ├── Template2.svelte
│   │   │       ├── Template3.svelte
│   │   │       ├── Template4.svelte
│   │   │       ├── Template5.svelte
│   │   │       └── Template6.svelte
│   │   ├── stores/
│   │   │   ├── defaults.ts
│   │   │   └── signatureStore.ts
│   │   ├── types/
│   │   │   └── signature.ts
│   │   ├── utils/
│   │   │   ├── colorContrast.ts
│   │   │   ├── exportHTML.ts
│   │   │   ├── exportPNG.ts
│   │   │   ├── socialIcons.ts
│   │   │   ├── styleConfig.ts
│   │   │   └── templateHelpers.ts
│   │   └── index.ts
│   └── routes/
│       ├── +layout.svelte
│       ├── +page.svelte
│       └── layout.css
├── eslint.config.js
├── package.json
├── README.md
├── svelte.config.js
├── tsconfig.json
├── vite.config.ts
└── wrangler.jsonc
```

---

## Functional flow

1. The user edits data in the form.
2. Global state (`signatureStore`) updates in real time.
3. `PreviewPanel` renders the selected template.
4. `ExportPanel` handles HTML copy, PNG download, and JSON config management.

---

## Roadmap

- [ ] More templates
- [ ] Multiple saved signatures
- [ ] i18n (ES/EN)
- [ ] Export UX and cross-client compatibility improvements

---

## Contributing

PRs are welcome. For major changes, please open an issue first.

```bash
git checkout -b feature/your-change-name
```

---

## License

MIT · Made with love by [Juancadev](https://juancamilofarfan.com)