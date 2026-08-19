# 🚀 AI Engineer / FDE Master Roadmap

An interactive, production-grade technical architecture index & competency roadmap for **AI Engineers** and **Forward Deployed Engineers (FDE)**.

Covers 255 technical topics across 26 categories in AI Systems, LLM Engineering, Cloud Infrastructure, Networking, DevOps & Distributed Architecture.

---

## ✨ Features

- **26 Technical Categories & 255 Topics**: From AI Primitives and Deep Learning to Transformers, AI Agents, MCP, Kubernetes, WebSockets, and MLOps.
- **Executive Collapsed Landing View**: Categories start cleanly collapsed for high-level scanning.
- **Interactive Expand & Collapse**: Click any category header or topic row to reveal production notes and prerequisites.
- **Instant Search**: Real-time filtering across topic names, definitions, tools, and concepts (e.g. *RAG*, *LLM*, *Kafka*, *Docker*).
- **Domain Filter Tabs**: Instant filtering by 4 core system domains (*AI Architecture*, *LLMs & Agentic AI*, *Cloud Infrastructure*, *Networking & DevOps*).
- **Prerequisite Linking**: Click any prerequisite tag to jump directly to and highlight the required topic.
- **Summary Export**: One-click export copies a formatted Markdown roadmap summary to your clipboard.

---

## 🛠️ Tech Stack

- **Frontend**: HTML5, Vanilla CSS3 (Custom Vercel / GitHub Dark inspired design tokens), Vanilla JavaScript (ES6+).
- **Dependencies**: Zero external frameworks or libraries.
- **Persistence**: Static & client-side execution.

---

## ⚡ Quick Start

No build step or `npm install` required!

1. Clone the repository:
   ```bash
   git clone https://github.com/varunsharma0111/Roadmap.git
   ```
2. Open `index.html` in your web browser.
3. (Optional) Run a local HTTP server:
   ```bash
   python -m http.server 8000
   # or
   npx http-server -p 8000
   ```

---

## 📂 Repository Structure

```
├── index.html   # Main entry point & structural layout
├── styles.css   # Modern dark-mode styling & domain color tokens
├── app.js       # Search, filtering, expandable state & export engine
├── data.js      # Complete roadmap dataset (26 categories, 255 topics)
└── README.md    # Documentation
```

---

## 📄 License

MIT License — feel free to customize and use for your technical portfolio.
