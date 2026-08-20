/**
 * AI Engineer / FDE Roadmap - Classy Technical Architecture Index
 * Includes Left Sidebar Navigation & Dynamic Domain Category Links.
 */

document.addEventListener("DOMContentLoaded", () => {
  // Application State
  let currentDomainFilter = "all";
  let currentCategoryFilter = "all";
  let searchQuery = "";
  let isAllExpanded = false;

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
    populateCategoryDropdown();
    renderDomainTabs();
    renderSidebarNav();
    renderRoadmap();
    attachEventListeners();
  }

  // Populate Dropdown Filters
  function populateCategoryDropdown() {
    categorySelect.innerHTML = `<option value="all">All Categories</option>`;
    ROADMAP_DATA.forEach(cat => {
      const opt = document.createElement("option");
      opt.value = cat.id;
      opt.textContent = cat.title;
      categorySelect.appendChild(opt);
    });
  }

  // Render Domain Filter Tabs
  function renderDomainTabs() {
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
    document.querySelectorAll(".domain-tab").forEach(tab => {
      if (tab.getAttribute("data-domain") === domainId) {
        tab.classList.add("active");
      } else {
        tab.classList.remove("active");
      }
    });

    if (domainId !== "all") {
      const groups = document.querySelectorAll(".sidebar-domain-group");
      groups.forEach(g => {
        const label = g.querySelector(".sidebar-domain-label");
        const domainObj = Object.values(DOMAINS).find(d => d.id === domainId);
        if (domainObj && label && label.textContent.includes(domainObj.title)) {
          g.classList.remove("collapsed");
        }
      });
    }

    renderRoadmap();
  }

  // Render Left Sidebar Navigation (Starts Collapsed by Default)
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
          const targetSection = document.getElementById(cat.id);
          if (targetSection) {
            targetSection.scrollIntoView({ behavior: "smooth", block: "start" });
            targetSection.classList.remove("collapsed");
          }

          document.querySelectorAll(".sidebar-nav-item").forEach(el => el.classList.remove("active"));
          itemLink.classList.add("active");
          closeMobileSidebar();
        });

        listEl.appendChild(itemLink);
      });

      groupEl.appendChild(listEl);
      sidebarNav.appendChild(groupEl);
    });
  }



  // Main Render Roadmap Function
  function renderRoadmap() {
    roadmapContent.innerHTML = "";
    let visibleTopicsCount = 0;
    let visibleCategoriesCount = 0;

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
            const matchDef = topic.def.toLowerCase().includes(q);
            const matchWhy = topic.why.toLowerCase().includes(q);
            const matchCat = cat.title.toLowerCase().includes(q);
            return matchName || matchDef || matchWhy || matchCat;
          }

          return true;
        });

        if (filteredTopics.length === 0) return;

        domainHasMatchingTopics = true;
        visibleCategoriesCount++;
        visibleTopicsCount += filteredTopics.length;

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
    }
  }

  // Create Classy Category Section
  function createCategorySection(cat, topics, domain) {
    const section = document.createElement("section");
    section.className = "category-section";
    
    if (!isAllExpanded && searchQuery.trim() === "") {
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
          <span class="domain-badge-pill" style="color: ${domain.color}; border-color: ${domain.color}40; background: ${domain.color}15;">${domain.title}</span>
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
      const topicRow = createTopicRow(topic, domain);
      listContainer.appendChild(topicRow);
    });

    return section;
  }

  // Create Compact Classy Topic Row Component
  function createTopicRow(topic, domain) {
    const row = document.createElement("div");
    row.className = "topic-row";
    row.setAttribute("data-topic-id", topic.id);

    let prereqsHtml = "";
    if (topic.prereqs && topic.prereqs.length > 0) {
      const tags = topic.prereqs.map(pId => {
        const pTopic = findTopicById(pId);
        const name = pTopic ? pTopic.name : pId;
        return `<span class="prereq-pill" data-prereq-id="${pId}" style="color: ${domain.color}; border-color: ${domain.color}40; background: ${domain.color}15;">${name}</span>`;
      }).join(" ");
      prereqsHtml = `
        <div class="details-block" style="margin-top: 0.75rem;">
          <div class="details-label">Prerequisites</div>
          <div class="prereq-tags">${tags}</div>
        </div>
      `;
    }

    row.innerHTML = `
      <div class="topic-summary">
        <div class="topic-left">
          <span class="topic-check-icon">${ICONS.check}</span>
          <span class="topic-name">${topic.name}</span>
          <span class="topic-def">${topic.def}</span>
        </div>

        <div class="topic-right">
          <button class="btn-toggle-row" aria-label="Toggle Details">
            ${ICONS.chevronDown}
          </button>
        </div>
      </div>

      <div class="topic-details">
        <div class="details-block">
          <div class="details-label">What it does / Production Notes</div>
          <div class="details-text">${topic.why}</div>
        </div>
        ${prereqsHtml}
      </div>
    `;

    const toggleBtn = row.querySelector(".btn-toggle-row");
    
    const toggleExpand = () => {
      row.classList.toggle("expanded");
    };

    row.addEventListener("click", (e) => {
      if (e.target.closest(".prereq-pill")) return;
      toggleExpand();
    });

    const prereqPills = row.querySelectorAll(".prereq-pill");
    prereqPills.forEach(pill => {
      pill.addEventListener("click", (e) => {
        e.stopPropagation();
        const targetId = pill.getAttribute("data-prereq-id");
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
      document.querySelector('.domain-tab[data-domain="all"]').classList.add("active");
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

  // Event Listeners
  function attachEventListeners() {
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
      renderRoadmap();
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

    btnExport.addEventListener("click", () => {
      let markdown = `# AI Engineer / FDE Roadmap Summary\n\n`;
      ROADMAP_DATA.forEach(cat => {
        markdown += `## ${cat.title}\n`;
        markdown += `${cat.description}\n\n`;
        cat.topics.forEach(t => {
          markdown += `- **${t.name}**: ${t.def}\n  *Production Notes*: ${t.why}\n`;
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
