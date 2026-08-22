# 🚀 AI Engineering & FDE Systems Roadmap

A comprehensive architectural reference mapping end-to-end AI models, agentic workflows, cloud infrastructure, and distributed production systems.

Covers topics across 26 categories in AI Systems, LLM Engineering, Cloud Infrastructure, Networking, DevOps & Distributed Architecture.

🔗 **Live Deployment**: [https://roadmap-eight-gold.vercel.app/](https://roadmap-eight-gold.vercel.app/)

---

## ✨ Features

- **📍 Quick Navigation Sidebar**: Slide-over drawer on mobile and left-side index on desktop for instant section hopping.
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
- **Hosting**: [Vercel Static Hosting](https://roadmap-eight-gold.vercel.app/)

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
├── index.html   # Main entry point & structural layout with Left Sidebar Navigation
├── styles.css   # Modern dark-mode styling, domain accents & sidebar layout
├── app.js       # Search, filtering, expandable state & export engine
├── data.js      # Complete roadmap dataset (26 categories, 255 topics)
├── vercel.json  # Vercel deployment configuration
└── README.md    # Documentation
```

---

## 📄 License

MIT License — feel free to customize and use for your technical portfolio.
