/**
 * AI Engineering & Production Systems Roadmap Application Logic
 * Supports 53 System & AI Topics across 13 Categories and 4 Technical Domains.
 */

document.addEventListener("DOMContentLoaded", () => {
  // Application State
  let currentDomainFilter = "all";
  let currentCategoryFilter = "all";
  let searchQuery = "";
  let isAllExpanded = false;
  let scrollObserver = null;

  // DOM Elements
  const searchInput = document.getElementById("search-input");
  const searchClear = document.getElementById("search-clear");
  const categorySelect = document.getElementById("category-select");
  const domainTabsContainer = document.getElementById("domain-tabs");
  const resultsCounter = document.getElementById("results-counter");

  const roadmapContent = document.getElementById("roadmap-content");
  const sidebar = document.getElementById("sidebar");
  const sidebarNav = document.getElementById("sidebar-nav");
  const sidebarClose = document.getElementById("sidebar-close");
  const sidebarOverlay = document.getElementById("sidebar-overlay");
  const mobileMenuBtn = document.getElementById("mobile-menu-btn");

  const btnToggleAll = document.getElementById("btn-toggle-all");
  const btnThemeToggle = document.getElementById("btn-theme-toggle");
  const btnExport = document.getElementById("btn-export");
  const toastContainer = document.getElementById("toast-container");

  // SVG Icons helper
  const ICONS = {
    check: `<svg width="15" height="15" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" /></svg>`,
    chevronDown: `<svg width="15" height="15" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" /></svg>`
  };

  // Initial Setup
  init();

  function init() {
    initTheme();
    populateCategoryDropdown();
    renderDomainTabs();
    renderSidebarNav();
    renderRoadmap();
    attachEventListeners();

    // Check for initial URL Hash anchor deep link
    if (window.location.hash) {
      const catId = window.location.hash.substring(1);
      setTimeout(() => scrollToCategory(catId), 300);
    }
  }

  // Populate Dropdown Filters
  function populateCategoryDropdown() {
    categorySelect.innerHTML = `<option value="all">All ${ROADMAP_DATA.length} Categories</option>`;
    ROADMAP_DATA.forEach(cat => {
      const opt = document.createElement("option");
      opt.value = cat.id;
      opt.textContent = cat.title;
      categorySelect.appendChild(opt);
    });
  }

  // Render Domain Filter Tabs
  function renderDomainTabs() {
    if (!domainTabsContainer) return;
    domainTabsContainer.innerHTML = "";
    
    const allTab = document.createElement("button");
    allTab.className = "domain-tab active";
    allTab.setAttribute("data-domain", "all");
    allTab.textContent = "All Domains";
    allTab.addEventListener("click", () => selectDomainFilter("all"));
    domainTabsContainer.appendChild(allTab);

    Object.values(DOMAINS).forEach(dom => {
      const tab = document.createElement("button");
      tab.className = "domain-tab";
      tab.setAttribute("data-domain", dom.id);
      tab.textContent = dom.title;
      tab.addEventListener("click", () => selectDomainFilter(dom.id));
      domainTabsContainer.appendChild(tab);
    });
  }

  function selectDomainFilter(domainId) {
    currentDomainFilter = domainId;
    currentCategoryFilter = "all";
    if (categorySelect) categorySelect.value = "all";

    document.querySelectorAll(".domain-tab").forEach(tab => {
      if (tab.getAttribute("data-domain") === domainId) {
        tab.classList.add("active");
      } else {
        tab.classList.remove("active");
      }
    });

    renderRoadmap();
  }

  // Render Left Sidebar Navigation
  function renderSidebarNav() {
    if (!sidebarNav) return;
    sidebarNav.innerHTML = "";

    const domainGroupMap = {};
    Object.keys(DOMAINS).forEach(dKey => {
      domainGroupMap[DOMAINS[dKey].id] = [];
    });

    ROADMAP_DATA.forEach(cat => {
      if (domainGroupMap[cat.domainId]) {
        domainGroupMap[cat.domainId].push(cat);
      }
    });

    Object.values(DOMAINS).forEach(domain => {
      const categoriesInDomain = domainGroupMap[domain.id];
      if (!categoriesInDomain || categoriesInDomain.length === 0) return;

      const groupEl = document.createElement("div");
      groupEl.className = "sidebar-domain-group collapsed";

      const labelEl = document.createElement("div");
      labelEl.className = "sidebar-domain-label";
      labelEl.style.color = domain.color;
      labelEl.innerHTML = `
        <span>${domain.title}</span>
        <span class="sidebar-domain-chevron">${ICONS.chevronDown}</span>
      `;

      labelEl.addEventListener("click", () => {
        groupEl.classList.toggle("collapsed");
      });

      groupEl.appendChild(labelEl);

      const listEl = document.createElement("div");
      listEl.className = "sidebar-domain-list";

      categoriesInDomain.forEach(cat => {
        const itemLink = document.createElement("a");
        itemLink.className = "sidebar-nav-item";
        itemLink.href = `#${cat.id}`;
        itemLink.textContent = cat.title;

        itemLink.addEventListener("click", (e) => {
          e.preventDefault();
          scrollToCategory(cat.id);
          closeMobileSidebar();
        });

        listEl.appendChild(itemLink);
      });

      groupEl.appendChild(listEl);
      sidebarNav.appendChild(groupEl);
    });
  }

  function scrollToCategory(catId) {
    if (searchQuery !== "" || currentDomainFilter !== "all") {
      currentDomainFilter = "all";
      searchQuery = "";
      searchInput.value = "";
      searchClear.style.display = "none";
      document.querySelectorAll(".domain-tab").forEach(t => t.classList.remove("active"));
      const defaultDomainTab = document.querySelector('.domain-tab[data-domain="all"]');
      if (defaultDomainTab) defaultDomainTab.classList.add("active");
      renderRoadmap();
    }

    currentCategoryFilter = catId;
    if (categorySelect) categorySelect.value = catId;
    updateActiveSidebarItem(catId);

    setTimeout(() => {
      const targetSection = document.getElementById(catId);
      if (targetSection) {
        targetSection.classList.remove("collapsed");
        targetSection.scrollIntoView({ behavior: "smooth", block: "start" });
        targetSection.classList.add("highlight-target");
        setTimeout(() => {
          targetSection.classList.remove("highlight-target");
        }, 2500);
      }
    }, 100);
  }

  // Synchronize active item and auto-expand domain group in sidebar
  function updateActiveSidebarItem(catId, scrollSidebar = true) {
    let activeItem = null;
    document.querySelectorAll(".sidebar-nav-item").forEach(item => {
      if (item.getAttribute("href") === `#${catId}`) {
        item.classList.add("active");
        activeItem = item;
        const group = item.closest(".sidebar-domain-group");
        if (group) group.classList.remove("collapsed");
      } else {
        item.classList.remove("active");
      }
    });

    if (activeItem && scrollSidebar) {
      activeItem.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }

    if (categorySelect && categorySelect.value !== catId && searchQuery === "") {
      categorySelect.value = catId;
    }
  }

  // ScrollSpy Observer to track active section while scrolling
  function initScrollSpy() {
    if (scrollObserver) scrollObserver.disconnect();

    const sections = document.querySelectorAll(".category-section");
    if (sections.length === 0) return;

    scrollObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            updateActiveSidebarItem(entry.target.id, false);
          }
        });
      },
      {
        root: null,
        rootMargin: "-15% 0px -55% 0px",
        threshold: 0.15
      }
    );

    sections.forEach(sec => scrollObserver.observe(sec));
  }

  // Main Render Roadmap Function
  function renderRoadmap() {
    roadmapContent.innerHTML = "";
    let visibleTopicsCount = 0;
    let visibleCategoriesCount = 0;
    let firstMatchingCatId = null;

    const domainGroupMap = {};
    Object.keys(DOMAINS).forEach(dKey => {
      domainGroupMap[DOMAINS[dKey].id] = [];
    });

    ROADMAP_DATA.forEach(cat => {
      if (domainGroupMap[cat.domainId]) {
        domainGroupMap[cat.domainId].push(cat);
      }
    });

    Object.values(DOMAINS).forEach(domain => {
      if (currentDomainFilter !== "all" && currentDomainFilter !== domain.id) return;

      const categoriesInDomain = domainGroupMap[domain.id];
      let domainHasMatchingTopics = false;

      const domainGroupEl = document.createElement("div");
      domainGroupEl.className = "domain-group";

      const domainTitle = document.createElement("h2");
      domainTitle.className = "domain-group-title";
      domainTitle.style.color = domain.color;
      domainTitle.textContent = domain.title;
      domainGroupEl.appendChild(domainTitle);

      categoriesInDomain.forEach(cat => {
        if (currentCategoryFilter !== "all" && currentCategoryFilter !== cat.id) return;

        const filteredTopics = cat.topics.filter(topic => {
          if (searchQuery.trim() !== "") {
            const q = searchQuery.toLowerCase();
            const matchName = topic.name.toLowerCase().includes(q);
            const matchDef = topic.def ? topic.def.toLowerCase().includes(q) : false;
            const matchWhy = topic.why ? topic.why.toLowerCase().includes(q) : false;
            const matchCat = cat.title.toLowerCase().includes(q);
            const matchEx = topic.example ? topic.example.toLowerCase().includes(q) : false;
            const matchRem = topic.remember ? topic.remember.toLowerCase().includes(q) : false;
            const matchIdea = topic.idea ? topic.idea.toLowerCase().includes(q) : false;
            const matchMM = topic.mentalModel ? topic.mentalModel.toLowerCase().includes(q) : false;
            const matchHIW = topic.howItWorks ? topic.howItWorks.toLowerCase().includes(q) : false;
            return matchName || matchDef || matchWhy || matchCat || matchEx || matchRem || matchIdea || matchMM || matchHIW;
          }

          return true;
        });

        if (filteredTopics.length === 0) return;

        domainHasMatchingTopics = true;
        visibleCategoriesCount++;
        visibleTopicsCount += filteredTopics.length;

        if (!firstMatchingCatId) {
          firstMatchingCatId = cat.id;
        }

        const catSection = createCategorySection(cat, filteredTopics, domain);
        domainGroupEl.appendChild(catSection);
      });

      if (domainHasMatchingTopics) {
        roadmapContent.appendChild(domainGroupEl);
      }
    });

    resultsCounter.textContent = `Showing ${visibleTopicsCount} topics across ${visibleCategoriesCount} categories`;
    
    if (visibleTopicsCount === 0) {
      roadmapContent.innerHTML = `
        <div style="text-align: center; padding: 4rem 1rem; color: var(--text-muted);">
          <h3 style="color: var(--text-primary); margin-bottom: 0.5rem; font-weight: 600;">No matching topics found</h3>
          <p>Try tweaking your search query.</p>
        </div>
      `;
    } else {
      if (searchQuery.trim() !== "" && firstMatchingCatId) {
        updateActiveSidebarItem(firstMatchingCatId, false);
      } else {
        initScrollSpy();
      }
    }
  }

  function createCategorySection(cat, topics, domain) {
    const section = document.createElement("section");
    section.className = "category-section";
    
    if (searchQuery.trim() !== "") {
      section.classList.remove("collapsed");
    } else if (!isAllExpanded) {
      section.classList.add("collapsed");
    }

    section.id = cat.id;

    section.innerHTML = `
      <div class="category-header" style="border-left-color: ${domain.color};">
        <div class="category-header-main">
          <h3 class="category-title">${cat.title}</h3>
          <p class="category-desc">${cat.description}</p>
        </div>
        <div class="category-header-right">
          <span class="domain-badge-pill" data-domain="${domain.id}">${domain.title}</span>
          <span class="cat-toggle-icon">${ICONS.chevronDown}</span>
        </div>
      </div>
      <div class="topics-list"></div>
    `;

    const catHeader = section.querySelector(".category-header");
    catHeader.addEventListener("click", () => {
      section.classList.toggle("collapsed");
    });

    const listContainer = section.querySelector(".topics-list");
    topics.forEach(topic => {
      const topicRow = createTopicRow(topic, domain, cat);
      listContainer.appendChild(topicRow);
    });

    return section;
  }

  function createTopicRow(topic, domain, cat) {
    const row = document.createElement("div");
    row.className = "topic-row";
    row.setAttribute("data-topic-id", topic.id);

    // Difficulty level badge
    let levelBadge = "";
    if (topic.level) {
      let icon = "🟢";
      let cssClass = "level-beginner";
      const lvl = topic.level.toLowerCase();
      if (lvl.includes("intermediate")) {
        icon = "🟡";
        cssClass = "level-intermediate";
      } else if (lvl.includes("advanced")) {
        icon = "🔴";
        cssClass = "level-advanced";
      }
      levelBadge = `<span class="topic-level-badge ${cssClass}">${icon} ${topic.level}</span>`;
    }

    // 1. The Idea
    let ideaHtml = "";
    if (topic.idea) {
      ideaHtml = `
        <div class="details-block">
          <div class="details-label">The Idea</div>
          <div class="details-text">${topic.idea}</div>
        </div>
      `;
    }

    // 2. Mental Model
    let mentalModelHtml = "";
    if (topic.mentalModel) {
      mentalModelHtml = `
        <div class="details-block">
          <div class="details-label">Mental Model</div>
          <div class="details-text">💡 ${topic.mentalModel}</div>
        </div>
      `;
    }

    // 3. How It Works
    let howItWorksHtml = "";
    if (topic.howItWorks) {
      const formattedHW = topic.howItWorks.replace(/\n/g, '<br>');
      howItWorksHtml = `
        <div class="details-block">
          <div class="details-label">How It Works</div>
          <div class="details-code-box"><code>${formattedHW}</code></div>
        </div>
      `;
    }

    // 4. Practical Example
    let exampleHtml = "";
    if (topic.example) {
      const formattedEx = topic.example.replace(/\n/g, '<br>');
      exampleHtml = `
        <div class="details-block">
          <div class="details-label">Practical Example</div>
          <div class="details-code-box"><code>${formattedEx}</code></div>
        </div>
      `;
    }

    // 5. Why It Exists
    let whyHtml = "";
    if (topic.why) {
      whyHtml = `
        <div class="details-block">
          <div class="details-label">Why It Exists</div>
          <div class="details-text">${topic.why}</div>
        </div>
      `;
    }

    // 6. Important Distinction
    let rememberHtml = "";
    if (topic.remember) {
      const formattedRem = topic.remember.replace(/\n/g, '<br>');
      rememberHtml = `
        <div class="details-block">
          <div class="details-label">Important Distinction</div>
          <div class="remember-box">⚡ ${formattedRem}</div>
        </div>
      `;
    }

    // 7. Related Topics Navigation
    let relatedTopicsHtml = "";
    const relatedList = [];

    if (topic.prereqs && topic.prereqs.length > 0) {
      topic.prereqs.forEach(pId => {
        const pTopic = findTopicById(pId);
        if (pTopic) relatedList.push({ id: pTopic.id, name: pTopic.name });
      });
    } else if (cat && cat.topics) {
      cat.topics.forEach(t => {
        if (t.id !== topic.id && relatedList.length < 3) {
          relatedList.push({ id: t.id, name: t.name });
        }
      });
    }

    if (relatedList.length > 0) {
      const pills = relatedList.map(item => `
        <span class="related-topic-pill" data-domain="${domain.id}" data-related-id="${item.id}">
          → ${item.name}
        </span>
      `).join(" ");

      relatedTopicsHtml = `
        <div class="details-block" style="margin-top: 0.75rem;">
          <div class="details-label">Related Topics</div>
          <div class="related-tags">${pills}</div>
        </div>
      `;
    }

    row.innerHTML = `
      <div class="topic-summary">
        <div class="topic-left">
          <span class="topic-check-icon">${ICONS.check}</span>
          <span class="topic-name">${topic.name}</span>
          ${levelBadge}
          <span class="topic-def">${topic.def}</span>
        </div>

        <div class="topic-right">
          <button class="btn-toggle-row" aria-label="Toggle Details">
            ${ICONS.chevronDown}
          </button>
        </div>
      </div>

      <div class="topic-details">
        ${ideaHtml}
        ${mentalModelHtml}
        ${howItWorksHtml}
        ${exampleHtml}
        ${whyHtml}
        ${rememberHtml}
        ${relatedTopicsHtml}
      </div>
    `;

    if (searchQuery.trim() !== "") {
      row.classList.add("expanded");
    }

    row.addEventListener("click", (e) => {
      if (e.target.closest(".related-topic-pill") || e.target.closest(".prereq-pill")) return;
      row.classList.toggle("expanded");
    });

    const relatedPills = row.querySelectorAll(".related-topic-pill");
    relatedPills.forEach(pill => {
      pill.addEventListener("click", (e) => {
        e.stopPropagation();
        const targetId = pill.getAttribute("data-related-id");
        highlightAndScrollToTopic(targetId);
      });
    });

    return row;
  }

  function findTopicById(topicId) {
    for (const cat of ROADMAP_DATA) {
      const match = cat.topics.find(t => t.id === topicId);
      if (match) return match;
    }
    return null;
  }

  function highlightAndScrollToTopic(topicId) {
    if (searchQuery !== "" || currentDomainFilter !== "all" || currentCategoryFilter !== "all") {
      currentDomainFilter = "all";
      currentCategoryFilter = "all";
      searchQuery = "";
      searchInput.value = "";
      searchClear.style.display = "none";
      categorySelect.value = "all";
      document.querySelectorAll(".domain-tab").forEach(t => t.classList.remove("active"));
      const defaultDomainTab = document.querySelector('.domain-tab[data-domain="all"]');
      if (defaultDomainTab) defaultDomainTab.classList.add("active");
      renderRoadmap();
    }

    setTimeout(() => {
      const targetRow = document.querySelector(`.topic-row[data-topic-id="${topicId}"]`);
      if (targetRow) {
        const parentSection = targetRow.closest(".category-section");
        if (parentSection) parentSection.classList.remove("collapsed");

        targetRow.scrollIntoView({ behavior: "smooth", block: "center" });
        targetRow.classList.add("highlight-target");
        targetRow.classList.add("expanded");

        setTimeout(() => {
          targetRow.classList.remove("highlight-target");
        }, 3000);
      }
    }, 100);
  }

  function openMobileSidebar() {
    if (sidebar) sidebar.classList.add("open");
    if (sidebarOverlay) sidebarOverlay.classList.add("open");
  }

  function closeMobileSidebar() {
    if (sidebar) sidebar.classList.remove("open");
    if (sidebarOverlay) sidebarOverlay.classList.remove("open");
  }

  function attachEventListeners() {
    const sidebarBrand = document.querySelector(".sidebar-brand");
    const headerTitle = document.querySelector(".header-title");

    const resetToHome = () => {
      searchQuery = "";
      if (searchInput) searchInput.value = "";
      if (searchClear) searchClear.style.display = "none";
      currentDomainFilter = "all";
      currentCategoryFilter = "all";
      if (categorySelect) categorySelect.value = "all";
      isAllExpanded = false;
      if (window.location.hash) {
        history.pushState("", document.title, window.location.pathname + window.location.search);
      }
      renderRoadmap();
      window.scrollTo({ top: 0, behavior: "smooth" });
      closeMobileSidebar();
    };

    if (sidebarBrand) {
      sidebarBrand.addEventListener("click", resetToHome);
    }
    if (headerTitle) {
      headerTitle.style.cursor = "pointer";
      headerTitle.addEventListener("click", resetToHome);
    }

    if (mobileMenuBtn) {
      mobileMenuBtn.addEventListener("click", openMobileSidebar);
    }
    if (sidebarClose) {
      sidebarClose.addEventListener("click", closeMobileSidebar);
    }
    if (sidebarOverlay) {
      sidebarOverlay.addEventListener("click", closeMobileSidebar);
    }

    searchInput.addEventListener("input", (e) => {
      searchQuery = e.target.value;
      if (searchQuery.trim() !== "") {
        currentCategoryFilter = "all";
        if (categorySelect) categorySelect.value = "all";
      }
      searchClear.style.display = searchQuery ? "block" : "none";
      renderRoadmap();
    });

    searchClear.addEventListener("click", () => {
      searchInput.value = "";
      searchQuery = "";
      searchClear.style.display = "none";
      renderRoadmap();
    });

    categorySelect.addEventListener("change", (e) => {
      currentCategoryFilter = e.target.value;
      if (currentCategoryFilter !== "all") {
        scrollToCategory(currentCategoryFilter);
      } else {
        renderRoadmap();
      }
    });

    btnToggleAll.addEventListener("click", () => {
      isAllExpanded = !isAllExpanded;
      const categories = document.querySelectorAll(".category-section");
      categories.forEach(cat => {
        if (isAllExpanded) {
          cat.classList.remove("collapsed");
        } else {
          cat.classList.add("collapsed");
        }
      });
      btnToggleAll.textContent = isAllExpanded ? "Collapse All" : "Expand All";
    });

    if (btnThemeToggle) {
      btnThemeToggle.addEventListener("click", () => {
        const isLight = document.documentElement.getAttribute("data-theme") === "light";
        applyTheme(isLight ? "dark" : "light");
      });
    }

    if (btnExport) {
      btnExport.addEventListener("click", () => {
        let markdown = `# AI Engineering & Production Systems Roadmap Summary\n\n`;

        ROADMAP_DATA.forEach(cat => {
          markdown += `## ${cat.title}\n`;
          markdown += `${cat.description}\n\n`;
          cat.topics.forEach(t => {
            markdown += `### ${t.name}\n`;
            if (t.idea) markdown += `**The Idea:** ${t.idea}\n`;
            else if (t.def) markdown += `**The Idea:** ${t.def}\n`;
            if (t.mentalModel) markdown += `**Mental Model:** 💡 ${t.mentalModel}\n`;
            if (t.howItWorks) markdown += `**How It Works:**\n\`\`\`text\n${t.howItWorks}\n\`\`\`\n`;
            if (t.example) markdown += `**Practical Example:**\n\`\`\`text\n${t.example}\n\`\`\`\n`;
            if (t.why) markdown += `**Why It Exists:** ${t.why}\n`;
            if (t.remember) markdown += `**Important Distinction:** ${t.remember}\n`;
            markdown += `\n`;
          });
          markdown += `\n`;
        });

        navigator.clipboard.writeText(markdown).then(() => {
          showToast("Summary copied to clipboard!");
        }).catch(() => {
          showToast("Summary ready.");
        });
      });
    }
  }

  function initTheme() {
    const savedTheme = localStorage.getItem("theme");
    let theme = "dark";
    if (savedTheme) {
      theme = savedTheme;
    } else if (window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches) {
      theme = "light";
    }
    applyTheme(theme);
  }

  function applyTheme(theme) {
    if (theme === "light") {
      document.documentElement.setAttribute("data-theme", "light");
      if (btnThemeToggle) {
        btnThemeToggle.innerHTML = `<span class="theme-icon">☀️</span> <span class="theme-text">Light</span>`;
      }
    } else {
      document.documentElement.removeAttribute("data-theme");
      if (btnThemeToggle) {
        btnThemeToggle.innerHTML = `<span class="theme-icon">🌙</span> <span class="theme-text">Dark</span>`;
      }
    }
    localStorage.setItem("theme", theme);
  }

  function showToast(message) {
    const toast = document.createElement("div");
    toast.className = "toast";
    toast.innerHTML = `<span>${message}</span>`;
    toastContainer.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = "0";
      toast.style.transition = "all 0.3s ease";
      setTimeout(() => toast.remove(), 300);
    }, 3000);
  }
});
