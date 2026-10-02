const SITE_HEADER_TEMPLATE = `
  <header class="site-header">
    <div class="container container-wide">
      <div class="nav-wrapper">
        <a href="index.html" class="brand-logo" aria-label="Aqua Care Home">
          <img src="assets/logo.png" alt="Aqua Care - The Water Treatment Company" class="site-logo-img">
        </a>

        <nav class="nav-menu" aria-label="Main Navigation">
          <a href="index.html#home" class="nav-link" data-page="home">Home</a>
          <a href="index.html#about" class="nav-link">About Us</a>
          <a href="chemicals.html" class="nav-link" data-page="chemicals.html">Products</a>
          <a href="applications.html" class="nav-link" data-page="applications.html">Solutions</a>
          <a href="index.html#projects" class="nav-link">Projects</a>
          <a href="index.html#team" class="nav-link">Our Team</a>
          <a href="index.html#contact" class="nav-link">Contact</a>
        </nav>

        <div class="header-actions">
          <form class="nav-search" role="search">
            <button type="submit" class="nav-search-button" aria-label="Search">
              <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                <circle cx="11" cy="11" r="7"></circle>
                <line x1="16.5" y1="16.5" x2="21" y2="21"></line>
              </svg>
            </button>
            <input type="search" class="nav-search-input" placeholder="Search..." aria-label="Search the site">
          </form>
          <button class="mobile-toggle-btn" aria-label="Open Mobile Menu">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
        </div>
      </div>
    </div>
  </header>

  <div class="mobile-drawer-overlay"></div>
  <div class="mobile-drawer">
    <div class="drawer-header">
      <img src="assets/logo.png" alt="Aqua Care - The Water Treatment Company" class="drawer-logo-img">
      <button class="drawer-close-btn" aria-label="Close Mobile Menu">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </button>
    </div>
    <div class="drawer-links">
      <a href="index.html#home" class="drawer-link" data-page="home">Home</a>
      <a href="index.html#about" class="drawer-link">About Us</a>
      <a href="chemicals.html" class="drawer-link" data-page="chemicals.html">Products</a>
      <a href="applications.html" class="drawer-link" data-page="applications.html">Solutions</a>
      <a href="index.html#projects" class="drawer-link">Projects</a>
      <a href="index.html#team" class="drawer-link">Our Team</a>
      <a href="index.html#contact" class="drawer-link">Contact</a>
    </div>
    <div class="drawer-contact">
      <div style="color: var(--blue-primary); font-weight: 700; margin-bottom: 4px;">Aqua Care Trading</div>
      <div>Sapnadanga R/A, Bhaban #04, Flat #5C, West Dhanmondi, Hajaribag, Dhaka-1209, Bangladesh</div>
      <div style="margin-top: 6px;">Phone & Fax: +88-02-9672552</div>
      <div>Cell: 01911-350427 / 01793-591851</div>
      <div>Email: <a href="mailto:aquacaretrading67@gmail.com" style="color: var(--blue-primary); text-decoration: none;">aquacaretrading67@gmail.com</a></div>
    </div>
  </div>`;

function initSiteHeader() {
  const headerMount = document.querySelector('[data-site-header]');
  if (!headerMount) return;

  headerMount.outerHTML = SITE_HEADER_TEMPLATE;
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  const pageKey = currentPage === 'index.html' ? 'home' : currentPage;

  document.querySelectorAll(`[data-page="${pageKey}"]`).forEach(link => {
    link.classList.add('active');
  });

  initHeaderSearch();
  document.dispatchEvent(new CustomEvent('siteheaderready'));
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initSiteHeader, { once: true });
} else {
  queueMicrotask(initSiteHeader);
}

const SITE_SEARCH_PAGES = [
  {
    title: 'Home',
    url: 'index.html#home',
    description: 'Reliable industrial water treatment company serving Bangladesh.',
    keywords: 'Aqua Care AC water treatment company Bangladesh industrial water solutions',
    aliases: 'home homepage water treatment company'
  },
  {
    title: 'About Us',
    url: 'index.html#about',
    description: 'Learn about Aqua Care Trading and our industrial water treatment expertise.',
    keywords: 'company history business areas laboratory about company profile who we are Aqua Care Trading',
    aliases: 'about company profile history team'
  },
  {
    title: 'Products',
    url: 'chemicals.html',
    description: 'Browse certified water treatment chemicals and technical specifications.',
    keywords: 'catalog products chemicals water treatment chemicals coagulants flocculants boiler cooling reverse osmosis RO ETP STP antiscalant biocide',
    aliases: 'product products chemical catalog catalogue'
  },
  {
    title: 'Solutions',
    url: 'applications.html',
    description: 'Explore drinking water, industrial water, wastewater, boiler, cooling, and RO solutions.',
    keywords: 'applications solutions treatment processes industrial wastewater drinking water boiler boyler cooling tower coolling reverse osmosis RO membrane',
    aliases: 'wastewater wastwater waste water boiler boyler cooling coolling reverse osmosis ro'
  },
  {
    title: 'Projects',
    url: 'index.html#projects',
    description: 'Industrial water treatment projects and technical delivery experience.',
    keywords: 'projects installations deployments technical support industrial plants case studies',
    aliases: 'case studies installations deployments'
  },
  {
    title: 'Our Team',
    url: 'index.html#team',
    description: 'Meet the technical and operations team behind Aqua Care Trading.',
    keywords: 'team engineers technical support operations chemists specialists staff people',
    aliases: 'staff engineers specialists people'
  },
  {
    title: 'Contact',
    url: 'index.html#contact',
    description: 'Contact Aqua Care Trading for water treatment chemicals and technical support.',
    keywords: 'contact address phone email Dhaka Bangladesh call message office location quotation',
    aliases: 'call email address quote quotation'
  }
];

function initHeaderSearch() {
  const searchForm = document.querySelector('.nav-search');
  const searchInput = document.querySelector('.nav-search-input');
  if (!searchForm || !searchInput) return;

  const results = document.createElement('div');
  results.className = 'nav-search-results';
  results.setAttribute('role', 'listbox');
  results.hidden = true;
  searchForm.appendChild(results);

  const categoryAliases = {
    boiler: 'boiler boilers steam steamwater boyler scale corrosion oxygen scavenger',
    cooling: 'cooling coolling cooling tower heat exchanger corrosion biocide',
    ro: 'reverse osmosis RO membrane antiscalant fouling scale desalination',
    'etp-stp': 'ETP STP wastewater waste water effluent sewage sludge flocculant',
    coagulants: 'coagulant coagulation flocculant flocculation clarification turbidity',
    disinfection: 'disinfection disinfectant oxidizer biocide chlorine microbial algae',
    'ph-control': 'pH acid alkali caustic soda neutralization regeneration',
    specialty: 'specialty resin ion exchange filter media activated carbon'
  };
  const products = Array.isArray(window.AQUA_DATA?.chemicals)
    ? window.AQUA_DATA.chemicals.map(chemical => ({
        title: chemical.name,
        url: `chemicals.html?search=${encodeURIComponent(chemical.name)}`,
        description: chemical.purpose || chemical.application || '',
        keywords: [
          chemical.tradeName,
          chemical.formula,
          chemical.cas,
          chemical.categoryName,
          chemical.application,
          chemical.badge,
          categoryAliases[chemical.category] || '',
          'water treatment chemical product'
        ].filter(Boolean).join(' '),
        aliases: [
          chemical.name,
          chemical.tradeName,
          chemical.badge,
          categoryAliases[chemical.category] || '',
          'chemical product treatment'
        ].filter(Boolean).join(' ')
      }))
    : [];
  const searchItems = [...SITE_SEARCH_PAGES, ...products];
  const searchIndex = new window.Fuse(searchItems, {
    threshold: 0.6,
    distance: 250,
    ignoreLocation: true,
    minMatchCharLength: 2,
    includeMatches: true,
    includeScore: true,
    keys: [
      { name: 'title', weight: 0.45 },
      { name: 'description', weight: 0.15 },
      { name: 'keywords', weight: 0.1 },
      { name: 'aliases', weight: 0.3 }
    ]
  });
  let emptyCollapseTimer;
  let currentMatches = [];
  let selectedIndex = -1;

  function escapeHtml(value) {
    return String(value).replace(/[&<>'"]/g, character => ({
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      "'": '&#39;',
      '"': '&quot;'
    }[character]));
  }

  function highlight(value, ranges = []) {
    if (!ranges.length) return escapeHtml(value);
    let output = '';
    let cursor = 0;
    ranges.sort((first, second) => first[0] - second[0]).forEach(([start, end]) => {
      if (start < cursor) return;
      output += escapeHtml(value.slice(cursor, start));
      output += `<mark>${escapeHtml(value.slice(start, end + 1))}</mark>`;
      cursor = end + 1;
    });
    return output + escapeHtml(value.slice(cursor));
  }

  function highlightedField(result, field) {
    const ranges = result.matches
      .filter(match => match.key === field)
      .flatMap(match => match.indices || []);
    return highlight(result.item[field] || '', ranges);
  }

  function collapseSearch() {
    searchForm.classList.remove('is-open');
    searchForm.style.width = '';
    searchForm.style.minWidth = '';
    searchInput.style.opacity = '';
    searchInput.value = '';
    currentMatches = [];
    selectedIndex = -1;
    results.hidden = true;
    results.innerHTML = '';
  }

  function expandSearch() {
    searchForm.classList.add('is-open');
    if (window.innerWidth <= 992) {
      const expandedWidth = Math.min(220, Math.max(160, window.innerWidth - 120));
      searchForm.style.width = `${expandedWidth}px`;
      searchForm.style.minWidth = `${expandedWidth}px`;
      searchInput.style.opacity = '1';
    }
  }

  function renderResults(query) {
    const normalizedQuery = query.trim().toLowerCase();
    if (!normalizedQuery) {
      currentMatches = [];
      selectedIndex = -1;
      results.hidden = true;
      results.innerHTML = '';
      return;
    }

    currentMatches = searchIndex.search(normalizedQuery).slice(0, 8);
    selectedIndex = -1;

    results.innerHTML = currentMatches.length
      ? currentMatches.map((result, index) => `
          <a class="nav-search-result" href="${escapeHtml(result.item.url)}" role="option" data-result-index="${index}">
            <strong>${highlightedField(result, 'title')}</strong>
            <span>${highlightedField(result, 'description')}</span>
          </a>
        `).join('')
      : '<div class="nav-search-empty">No matching pages or products</div>';
    results.hidden = false;
  }

  function updateSelectedResult() {
    results.querySelectorAll('.nav-search-result').forEach((result, index) => {
      const isSelected = index === selectedIndex;
      result.classList.toggle('is-selected', isSelected);
      result.setAttribute('aria-selected', String(isSelected));
      if (isSelected) result.scrollIntoView({ block: 'nearest' });
    });
  }

  function navigateToResult(index) {
    const match = currentMatches[index];
    const result = match?.item || match;
    const destination = result?.url;
    if (!destination) return;
    collapseSearch();
    window.location.assign(destination);
  }

  searchForm.addEventListener('submit', event => {
    event.preventDefault();
    if (currentMatches.length) {
      navigateToResult(selectedIndex >= 0 ? selectedIndex : 0);
    }
  });
  searchForm.querySelector('.nav-search-button')?.addEventListener('click', event => {
    if (window.innerWidth <= 992 && !searchForm.classList.contains('is-open')) {
      event.preventDefault();
      expandSearch();
      searchInput.focus();
      return;
    }

    event.preventDefault();
    if (currentMatches.length) {
      navigateToResult(selectedIndex >= 0 ? selectedIndex : 0);
    }
  });

  searchInput.oninput = () => {
    clearTimeout(emptyCollapseTimer);
    const query = searchInput.value;
    renderResults(query);
    if (!query.trim()) {
      emptyCollapseTimer = setTimeout(collapseSearch, 2000);
    }
  };

  searchInput.onkeydown = event => {
    if (!currentMatches.length) return;

    if (event.key === 'Enter') {
      event.preventDefault();
      navigateToResult(selectedIndex >= 0 ? selectedIndex : 0);
    } else if (event.key === 'ArrowDown') {
      event.preventDefault();
      selectedIndex = (selectedIndex + 1) % currentMatches.length;
      updateSelectedResult();
    } else if (event.key === 'ArrowUp') {
      event.preventDefault();
      selectedIndex = selectedIndex <= 0 ? currentMatches.length - 1 : selectedIndex - 1;
      updateSelectedResult();
    }
  };

  searchInput.addEventListener('focus', expandSearch);
  results.addEventListener('click', event => {
    const result = event.target.closest('.nav-search-result');
    if (!result) return;
    event.preventDefault();
    navigateToResult(Number(result.dataset.resultIndex));
  });
  document.addEventListener('click', event => {
    if (!searchForm.contains(event.target)) collapseSearch();
  });
}