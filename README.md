# LSMTPD Documentation

This repository contains the **official documentation** for [LSMTPD](https://github.com/Neko-Nik/LSMTP) —  
a lightweight, high-performance SMTP server written in Rust that forwards mail directly into AMQP.  

The docs are built with [Docusaurus](https://docusaurus.io/), a modern static site generator.

---

## 🚀 Getting Started (Docs)

### 1. Clone this repo
```bash
git clone git@github.com:Neko-Nik-Org/LSMTP-Docs.git
cd LSMTP-Docs
````

### 2. Install dependencies

```bash
npm install
```

### 3. Start the local server

```bash
npm run start
```

This will start a local dev server and open the docs in your browser.
Hot reload is enabled, so edits to docs or pages will be visible immediately.

---

## 📂 Repository Structure

```
docs/               → Documentation markdown files
  getting-started/  → Quick start, build, config, prerequisites
  faq-troubleshooting/ → FAQ and support pages
  internals/        → Technical internals & architecture
  intro.md          → Introduction page
  use-case.md       → Use cases & practical applications

src/                → Docusaurus source code
  components/       → Custom React components (HomepageFeatures, etc.)
  pages/            → Homepage and extra pages
  css/              → Custom styles

static/img/         → Logos, illustrations, and static assets

docusaurus.config.js → Main site configuration
sidebars.js          → Sidebar navigation definition
```

---

## 🛠 Building for Production

Generate a static build of the site:

```bash
npm run build
```

The output will be in the `build/` directory, ready to deploy to any static hosting provider.

Preview the production build locally:

```bash
npm run serve
```

---

## 🤝 Contributing

We welcome contributions to improve the docs!

1. Fork this repo.
2. Create a new branch (`git checkout -b fix/docs-update`).
3. Make your changes (edit or add markdown files).
4. Run `npm run start` to preview locally.
5. Commit, push, and open a Pull Request.

---

## 📬 Support

* Read the [Documentation](https://lsmtp.nekonik.org)
* Explore the [GitHub Project Repo](https://github.com/Neko-Nik/LSMTP)

---

## 📜 License

The documentation is licensed under **CC0 1.0 Universal**. See [LICENSE](./LICENSE) for details.
