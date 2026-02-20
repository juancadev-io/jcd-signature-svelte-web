# jcd-signature-svelte-web — Privacy-first Email Signature Generator

![MIT License](https://img.shields.io/badge/license-MIT-green)
![SvelteKit](https://img.shields.io/badge/SvelteKit-5-orange)
![Cloudflare](https://img.shields.io/badge/Deploy-Cloudflare-F38020)
![Open Source](https://img.shields.io/badge/Open%20Source-Yes-brightgreen)

Open-source email signature generator — **100% frontend, no backend, no data storage.**

Build privacy-first, fully customizable email signatures without relying on external services.

🌐 Live demo:  
https://signature.juancamilofarfan.com

⭐ If this project helps you, consider giving it a star on GitHub.

---

## ✨ Why this project?

Most online email signature generators:

- Store your data on servers  
- Require accounts  
- Limit customization  
- Produce incompatible HTML  

This project is different:

- ✅ 100% frontend  
- ✅ No backend  
- ✅ No database  
- ✅ No tracking  
- ✅ No information is stored anywhere  

Your data stays in your browser.  
You can export it as JSON and load it again anytime.

Privacy-first by design.

---

## 🚀 Features

- Export **HTML** ready for Gmail / Outlook
- Export **PNG** optimized for mobile clients
- Save and load configuration as **JSON**
- 6 templates
- 2 visual styles (`classic`, `minimal`)
- Typography, font size and color controls
- Avatar/logo via file upload or URL
- Social links (LinkedIn, X/Twitter, GitHub, Instagram, YouTube, WhatsApp)
- Optional CTA
- Editable legal disclaimer
- Reset to defaults

Works for:

⚖️ Legal  
🏥 Healthcare  
🌱 NGOs  
🏢 Corporate  
👨‍💻 Developers  

---

## 📸 Screenshots

Main application view

![Main application view](assets/img/vista-principal.png)

Export panel

![Export panel](assets/img/panel-exportacion.png)

Example signatures

![Signature Daniel Castillo](assets/img/signature-daniel-castillo.png)
![Signature Dr. Andrés Morales](assets/img/signature-dr.-andrés-morales.png)
![Signature Laura Gómez](assets/img/signature-laura-gómez.png)
![Signature María Fernanda Rojas](assets/img/signature-maría-fernanda-rojas.png)

## Example JSON files

You can find signature configuration files in `assets/json/`. Here's an example:

```json
{
  "firstName": "John",
  "lastName": "Doe",
  "jobTitle": "Full Stack Developer",
  "department": "",
  "company": "Tech Company",
  "email": "hello@techcompany.com",
  "officePhone": "",
  "mobilePhone": "",
  "website": "https://techcompany.com",
  "avatarUrl": "",
  "logoUrl": "",
  "social": {
    "linkedin": "",
    "twitter": "",
    "github": "",
    "instagram": "",
    "youtube": "",
    "whatsapp": ""
  },
  "ctaText": "",
  "ctaUrl": "",
  "layout": 1,
  "style": "classic",
  "primaryColor": "#6366f1",
  "textColor": "#374151",
  "linkColor": "#6366f1",
  "fontFamily": "Arial, sans-serif",
  "googleFontUrl": "",
  "fontSize": 14,
  "disclaimer": "This email and any attachments are confidential and intended solely for the use of the individual to whom they are addressed. If you have received this email in error, please notify the sender immediately and delete it from your system."
}
```

Complete files:

- [signature-maría-fernanda-rojas.json](assets/json/signature-maría-fernanda-rojas.json)
- [signature-daniel-castillo.json](assets/json/signature-daniel-castillo.json)
- [signature-dr.-andrés-morales.json](assets/json/signature-dr.-andrés-morales.json)
- [signature-laura-gómez.json](assets/json/signature-laura-gómez.json)

---


## 🔐 Data & Privacy

This tool does **not**:

- Save data in a database
- Send requests to a server
- Store information remotely

All configuration lives in the browser session.

You can:

- Export configuration as `.json`
- Load it anytime
- Edit your signature whenever needed

Total control.

---

## 🧠 Architecture overview

1. Form updates global state (`signatureStore`)
2. Reactive rendering updates `PreviewPanel`
3. Templates are isolated components
4. `ExportPanel` handles HTML, PNG and JSON operations

State is serializable and export logic is decoupled from UI.

---

## 🛠 Tech stack

| Technology | Role |
|---|---|
| SvelteKit 2 + Svelte 5 | Main framework |
| Vite 7 | Dev server and build |
| Tailwind CSS 4 | Styling |
| TypeScript | Type safety |
| html-to-image | PNG export |
| Wrangler + adapter-cloudflare | Deployment |
| ESLint + Prettier | Code quality |

---

## 📦 Installation

```bash
git clone https://github.com/juancadev-io/jcd-signature-svelte-web
cd jcd-signature-svelte-web
npm install
npm run dev
```

Open: http://localhost:5173

---

## 🤝 Contributing

Contributions are welcome.

1. Fork the repo
2. Create a feature branch
3. Open a PR

For major changes, please open an issue first.

---

## ⭐ Support the project

If you find this useful:

- Give it a ⭐ on GitHub
- Share it with your team
- Open an issue with suggestions
- Submit a PR

Let’s build a flexible, privacy-first signature tool together.

---

## License

MIT · Made with ❤️ by Juancadev
