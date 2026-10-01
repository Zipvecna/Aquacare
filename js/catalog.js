/**
 * Aqua Care Trading - Chemical Catalog Module
 * Search, Category Filtering, and Dynamic Product Cards
 */

document.addEventListener('DOMContentLoaded', () => {
  initChemicalCatalog();
});

function initChemicalCatalog() {
  const container = document.getElementById('chemicalGridContainer');
  const searchInput = document.getElementById('catalogSearchInput');
  const filterButtons = document.querySelectorAll('.filter-btn');
  const countBadge = document.getElementById('catalogCountBadge');

  if (!container || !window.AQUA_DATA) return;

  let activeCategory = 'all';
  const urlParams = new URLSearchParams(window.location.search);
  let searchTerm = (urlParams.get('search') || '').toLowerCase().trim();
  const catalogCategories = new Set([...filterButtons].map(btn => btn.getAttribute('data-category')));

  // Check URL query parameters for pre-selected category
  const initialCat = urlParams.get('cat');
  if (initialCat && catalogCategories.has(initialCat)) {
    activeCategory = initialCat;
    filterButtons.forEach(btn => {
      if (btn.getAttribute('data-category') === initialCat) {
        filterButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
      }
    });
  } else if (initialCat) {
    activeCategory = 'all';
  }

  if (searchTerm && searchInput) {
    searchInput.value = urlParams.get('search');
  }

  // Initial render
  renderCards();

  // Search Listener
  searchInput?.addEventListener('input', (e) => {
    searchTerm = e.target.value.toLowerCase().trim();
    renderCards();
  });

  // Category Filter Listener
  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeCategory = btn.getAttribute('data-category');
      renderCards();
    });
  });

  function renderCards() {
    const chemicals = window.AQUA_DATA.chemicals;
    const filtered = chemicals.filter(chem => {
      const matchCategory = (activeCategory === 'all') || (chem.category === activeCategory);
      const matchSearch = !searchTerm || 
        String(chem.name || '').toLowerCase().includes(searchTerm) ||
        String(chem.tradeName || '').toLowerCase().includes(searchTerm) ||
        String(chem.formula || '').toLowerCase().includes(searchTerm) ||
        String(chem.cas || '').toLowerCase().includes(searchTerm) ||
        String(chem.purpose || '').toLowerCase().includes(searchTerm) ||
        String(chem.application || '').toLowerCase().includes(searchTerm);

      return matchCategory && matchSearch;
    });

    // Update count badge
    if (countBadge) {
      countBadge.textContent = `Showing ${filtered.length} of ${chemicals.length} chemicals`;
    }

    if (filtered.length === 0) {
      container.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 60px 20px; background: #f8fbfe; border-radius: 16px; border: 1.5px dashed #cbd5e1;">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" style="color: var(--blue-primary); margin-bottom: 16px;">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
          <h3 style="color: var(--text-headings); font-weight: 800; margin-bottom: 8px;">No matching water treatment chemicals found</h3>
          <p style="color: var(--text-secondary); max-width: 500px; margin: 0 auto 20px;">We supply custom chemical formulations and specialty blends. Use the floating contact widget to message our laboratory team about your specific parameter.</p>
        </div>
      `;
      return;
    }

    container.innerHTML = filtered.map(chem => `
      <div class="chem-card" data-category="${chem.category}">
        <div class="chem-card-header">
          <h3 class="chem-title">${chem.name}</h3>
        </div>

        <div class="chem-card-actions">
          <button class="btn btn-secondary btn-sm" onclick="openTDSModal('${chem.id}')">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
              <polyline points="14 2 14 8 20 8"></polyline>
              <line x1="16" y1="13" x2="8" y2="13"></line>
              <line x1="16" y1="17" x2="8" y2="17"></line>
              <polyline points="10 9 9 9 8 9"></polyline>
            </svg>
            Full TDS
          </button>
        </div>
      </div>
    `).join('');
  }
}
