/**
 * Aqua Care Trading - Main Application Controller
 * Handles Navigation, Global Modals, Toast Alerts, and Diagnostics
 */

let appInitialized = false;

function initializeApp() {
  if (appInitialized || !document.querySelector('.site-header')) return;
  appInitialized = true;
  initNavigation();
  initModals();
  initFaqAccordion();
  initDiagnosticWidget();
  initFooterTrustRow();
  initIndustryStats();
}

document.addEventListener('DOMContentLoaded', initializeApp);
document.addEventListener('siteheaderready', initializeApp);

function initIndustryStats() {
  const stats = document.querySelector('[data-industry-stats]');
  if (!stats || stats.dataset.countInitialized) return;
  stats.dataset.countInitialized = 'true';

  const numbers = stats.querySelectorAll('[data-count-target]');
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const showFinalValues = () => numbers.forEach((number) => {
    number.firstChild.textContent = `${number.dataset.countTarget}${number.querySelector('span') ? '' : '+'}`;
  });

  if (reducedMotion || !('IntersectionObserver' in window)) {
    showFinalValues();
    return;
  }

  const animate = () => {
    const start = performance.now();
    const duration = 1800;
    const update = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      numbers.forEach((number) => {
        const target = Number(number.dataset.countTarget);
        number.firstChild.textContent = `${Math.round(target * eased)}${number.querySelector('span') ? '' : '+'}`;
      });
      if (progress < 1) requestAnimationFrame(update);
    };
    requestAnimationFrame(update);
  };

  const observer = new IntersectionObserver((entries, currentObserver) => {
    if (!entries[0].isIntersecting) return;
    animate();
    currentObserver.disconnect();
  }, { threshold: 0.25 });
  observer.observe(stats);
}

function initFooterTrustRow() {
  document.querySelectorAll('.site-footer .footer-bottom').forEach((footerBottom) => {
    if (footerBottom.previousElementSibling?.classList.contains('footer-trust-row')) return;

    const trustRow = document.createElement('div');
    trustRow.className = 'footer-trust-row';
    trustRow.setAttribute('aria-label', 'Why customers choose Aqua Care');
    trustRow.innerHTML = `
      <span class="footer-trust-item"><svg class="ti ti-shield-check" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3l7 4v5c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V7l7-4"></path><path d="m9 12 2 2 4-4"></path></svg>Superior reliability</span>
      <span class="footer-trust-item"><svg class="ti ti-heart-handshake" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 21 4.8 14.2a5 5 0 0 1 7.2-6.9 5 5 0 0 1 7.2 6.9L12 21"></path><path d="m8 13 2 2 4-4 2 2 2-2"></path></svg>Friendly service</span>
      <span class="footer-trust-item"><svg class="ti ti-tool" viewBox="0 0 24 24" aria-hidden="true"><path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L4 17a2.1 2.1 0 0 0 3 3l5.3-5.3a4 4 0 0 0 5.4-5.4L14 12l-2-2 2.7-3.7z"></path></svg>Technical resources</span>
      <span class="footer-trust-item"><svg class="ti ti-clock" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9"></circle><path d="M12 7v5l3 3"></path></svg>Prompt response</span>
      <span class="footer-trust-item"><svg class="ti ti-check" viewBox="0 0 24 24" aria-hidden="true"><path d="m5 12 4 4L19 6"></path></svg>That Service you can count on!</span>`;
    footerBottom.before(trustRow);
  });
}

// Navigation & Header Scroll
function initNavigation() {
  const header = document.querySelector('.site-header');
  const mobileToggle = document.querySelector('.mobile-toggle-btn');
  const mobileDrawer = document.querySelector('.mobile-drawer');
  const drawerOverlay = document.querySelector('.mobile-drawer-overlay');
  const drawerClose = document.querySelector('.drawer-close-btn');

  // Sticky header blur effect on scroll
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      header?.classList.add('scrolled');
    } else {
      header?.classList.remove('scrolled');
    }
  });

  // Mobile Drawer Toggle
  function toggleDrawer(open) {
    if (open) {
      mobileDrawer?.classList.add('active');
      drawerOverlay?.classList.add('active');
      document.body.style.overflow = 'hidden';
    } else {
      mobileDrawer?.classList.remove('active');
      drawerOverlay?.classList.remove('active');
      document.body.style.overflow = '';
    }
  }

  mobileToggle?.addEventListener('click', () => toggleDrawer(true));
  drawerClose?.addEventListener('click', () => toggleDrawer(false));
  drawerOverlay?.addEventListener('click', () => toggleDrawer(false));

  // Close drawer on ESC
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      toggleDrawer(false);
      closeAllModals();
    }
  });

  // Highlight Active Page in Nav
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link, .drawer-link').forEach(link => {
    const linkHref = link.getAttribute('href');
    if (linkHref === currentPath || (currentPath === '' && linkHref === 'index.html')) {
      link.classList.add('active');
    }
  });
}

// Global Modals Controller
function initModals() {
  const tdsModal = document.getElementById('tdsModal');

  // Close buttons
  document.querySelectorAll('.modal-close-btn, [data-action="close-modal"]').forEach(btn => {
    btn.addEventListener('click', closeAllModals);
  });

  // Close modal when clicking backdrop
  [tdsModal].forEach(modal => {
    modal?.addEventListener('click', (e) => {
      if (e.target === modal) {
        closeAllModals();
      }
    });
  });

}

function openTDSModal(chemicalId) {
  if (!window.AQUA_DATA || !window.AQUA_DATA.chemicals) return;
  const chem = window.AQUA_DATA.chemicals.find(c => c.id === chemicalId);
  if (!chem) {
    window.location.href = 'chemicals.html';
    return;
  }

  const modal = document.getElementById('tdsModal');
  if (!modal) return;

  // Populate TDS Modal Details
  document.getElementById('tdsModalTitle').textContent = chem.name;
  document.getElementById('tdsTradeName').textContent = chem.tradeName;
  document.getElementById('tdsFormula').textContent = chem.formula;
  document.getElementById('tdsCas').textContent = `CAS No: ${chem.cas}`;
  document.getElementById('tdsCategory').textContent = chem.categoryName;
  document.getElementById('tdsPurpose').textContent = chem.purpose;
  document.getElementById('tdsApplication').textContent = chem.application;
  document.getElementById('tdsDosage').textContent = chem.dosageRange;
  document.getElementById('tdsSafety').textContent = chem.safety;

  // Specs Table
  const specsTableBody = document.getElementById('tdsSpecsTableBody');
  if (specsTableBody) {
    specsTableBody.innerHTML = chem.specs.map(spec => `
      <tr>
        <td>${spec.parameter}</td>
        <td>${spec.value}</td>
      </tr>
    `).join('');
  }

  // Packaging Pills
  const packagingList = document.getElementById('tdsPackagingList');
  if (packagingList) {
    packagingList.innerHTML = chem.packaging.map(pkg => `
      <span class="packaging-pill">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
        </svg>
        ${pkg}
      </span>
    `).join('');
  }

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeAllModals() {
  document.querySelectorAll('.modal-overlay').forEach(modal => {
    modal.classList.remove('active');
  });
  document.body.style.overflow = '';
}

// FAQ Accordion
function initFaqAccordion() {
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    question?.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');
      // Close other open faqs
      faqItems.forEach(i => i.classList.remove('open'));
      if (!isOpen) {
        item.classList.add('open');
      }
    });
  });
}

// Interactive Water Diagnostic Tool
function initDiagnosticWidget() {
  const symptomButtons = document.querySelectorAll('.symptom-btn');
  const solutionBox = document.getElementById('diagSolutionResult');
  if (!symptomButtons.length || !solutionBox) return;

  const DIAGNOSTIC_MAP = {
    'scale-boiler': {
      problem: "Severe Scale Deposition in Boiler Tubes & Heat Exchangers",
      cause: "High dissolved calcium/magnesium hardness precipitating at elevated temperatures.",
      recommendation: "AquaTherm™ ScaleGuard-300 + AquaOx™ DEHA",
      action: "Sequestration of hardness into non-adherent mobile sludge and dissolved oxygen scavenge.",
      chemId: "boiler-sludge-conditioner"
    },
    'bio-cooling': {
      problem: "Biofilm Slime & Algal Growth in Cooling Tower Decks",
      cause: "Microbial proliferation and Legionella risk due to nutrient-rich warm water.",
      recommendation: "AquaCide™ ISO-15 (CMIT/MIT) + AquaBleach™ 125",
      action: "Alternating dual biocide shock regimen with biodispersant penetration.",
      chemId: "cooling-tower-biocide-isothiazolinone"
    },
    'turbid-raw': {
      problem: "High Raw Water Turbidity & Colloidal Suspended Solids",
      cause: "Silt, clay, and organics failing to settle by gravity alone.",
      recommendation: "AquaPAC™ 30 SuperClean + AquaFlok™ A-700",
      action: "Rapid charge neutralization by Poly Aluminium Chloride followed by polymer bridging.",
      chemId: "poly-aluminium-chloride"
    },
    'color-textile': {
      problem: "High COD & Non-Biodegradable Reactive Dye in Effluent",
      cause: "Synthetic dyestuffs and chemical sizing agents resisting standard biological treatment.",
      recommendation: "AquaFerr™ 40 Ultra + AquaFlok™ Cationic Series",
      action: "Heavy-duty ferric coagulation with color-destabilizing polyacrylamide flocculation.",
      chemId: "ferric-chloride"
    },
    'foam-aeration': {
      problem: "Severe Persistent Foaming in ETP Aeration Tanks",
      cause: "Surfactants, filamentous bacteria, and extracellular polymers trapping air bubbles.",
      recommendation: "AquaDefoam™ Sil-20 Silicone Emulsion",
      action: "Instant surface tension reduction knocking down foam within 5 seconds without harming biomass.",
      chemId: "silicone-antifoam-emulsion"
    },
    'ro-fouling': {
      problem: "Rapid RO Membrane Differential Pressure Rise & Flux Drop",
      cause: "Silica scaling, mineral foulants, or biological slime choking feed spacers.",
      recommendation: "AquaScale™ RO-500 Antiscalant + AquaClean™ Dual CIP Regimen",
      action: "High-silica antiscalant dosing and alternating acid/alkaline CIP restorative cleans.",
      chemId: "ro-antiscalant"
    }
  };

  symptomButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      symptomButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const symKey = btn.getAttribute('data-symptom');
      const data = DIAGNOSTIC_MAP[symKey];
      if (data) {
        const linkedChemical = window.AQUA_DATA?.chemicals?.find(chemical => chemical.id === data.chemId);
        const solutionAction = linkedChemical
          ? `<button class="btn btn-primary btn-sm" onclick="openTDSModal('${linkedChemical.id}')">View Chemical TDS & Specs</button>`
          : '<a class="btn btn-primary btn-sm" href="chemicals.html">Browse Chemical Catalog</a>';
        solutionBox.innerHTML = `
          <div style="flex-shrink: 0; width: 48px; height: 48px; border-radius: 12px; background: rgba(0, 119, 182, 0.1); display: flex; align-items: center; justify-content: center; color: var(--blue-primary);">
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
            </svg>
          </div>
          <div style="flex-grow: 1;">
            <div style="font-size: 0.8rem; text-transform: uppercase; letter-spacing: 0.08em; color: var(--blue-primary); font-weight: 800; margin-bottom: 4px;">Diagnostic Result & Solution</div>
            <h4 style="font-size: 1.3rem; font-weight: 800; color: var(--text-headings); margin-bottom: 8px;">${data.problem}</h4>
            <p style="font-size: 0.96rem; color: var(--text-secondary); margin-bottom: 14px;"><strong>Root Cause:</strong> ${data.cause}</p>
            <div style="background: #ffffff; border-left: 4px solid var(--teal); border: 1px solid #bfdbfe; border-left-width: 4px; border-left-color: var(--teal); padding: 14px 18px; border-radius: 8px; margin-bottom: 18px; box-shadow: 0 2px 8px rgba(0,0,0,0.04);">
              <div style="margin-bottom: 6px;"><span style="color: var(--teal); font-weight: 800;">Recommended Chemistry:</span> <span style="color: var(--text-headings); font-weight: 700;">${data.recommendation}</span></div>
              <div style="font-size: 0.9rem; color: var(--text-secondary);">${data.action}</div>
            </div>
            <div style="display: flex; gap: 12px; flex-wrap: wrap;">
              ${solutionAction}
            </div>
          </div>
        `;
      }
    });
  });
}

// Global Toast Notifications
function showToast(message, type = 'success') {
  let container = document.querySelector('.toast-container');
  if (!container) {
    container = document.createElement('div');
    container.className = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  toast.innerHTML = `
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="color: var(--cyan); flex-shrink: 0;">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
      <polyline points="22 4 12 14.01 9 11.01"></polyline>
    </svg>
    <div style="font-size: 0.92rem; line-height: 1.4;">${message}</div>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(20px)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 5000);
}

// Make accessible globally
window.openTDSModal = openTDSModal;
window.showToast = showToast;

// Dynamic Copyright Year
document.querySelectorAll('#currentYear').forEach(el => {
  el.textContent = new Date().getFullYear();
});

/* WATER_DROP_BACKGROUND_REMOVED
  // SVG 3D Teardrop generator with radial lighting, refraction curve & specular gloss highlight
  function make3DDrop(id, mainColor, glowColor) {
    return `<svg viewBox="0 0 50 70" xmlns="http://www.w3.org/2000/svg" style="filter: drop-shadow(0px 8px 12px rgba(0,53,102,0.15));">
      <defs>
        <!-- 3D Liquid Volume Radial Gradient -->
        <radialGradient id="dropGrad_${id}" cx="35%" cy="30%" r="65%">
          <stop offset="0%" stop-color="#ffffff" stop-opacity="0.95"/>
          <stop offset="20%" stop-color="${glowColor}" stop-opacity="0.75"/>
          <stop offset="65%" stop-color="${mainColor}" stop-opacity="0.45"/>
          <stop offset="100%" stop-color="#003566" stop-opacity="0.60"/>
        </radialGradient>
        <!-- Specular Highlight Gradient -->
        <linearGradient id="specGrad_${id}" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#ffffff" stop-opacity="0.95"/>
          <stop offset="100%" stop-color="#ffffff" stop-opacity="0.0"/>
        </linearGradient>
        <!-- Bottom Refraction Rim -->
        <radialGradient id="rimGrad_${id}" cx="50%" cy="80%" r="50%">
          <stop offset="0%" stop-color="#90e0ef" stop-opacity="0.8"/>
          <stop offset="100%" stop-color="${glowColor}" stop-opacity="0.0"/>
        </radialGradient>
      </defs>
      
      <!-- Base 3D Water Drop Body -->
      <path d="M25 3 C25 3, 3 32, 3 47 C3 60 12.8 67 25 67 C37.2 67 47 60 47 47 C47 32 25 3 25 3Z"
        fill="url(#dropGrad_${id})" stroke="rgba(255,255,255,0.6)" stroke-width="0.8"/>
      
      <!-- Internal Bottom Liquid Refraction -->
      <path d="M25 3 C25 3, 3 32, 3 47 C3 60 12.8 67 25 67 C37.2 67 47 60 47 47 C47 32 25 3 25 3Z"
        fill="url(#rimGrad_${id})" style="mix-blend-mode: overlay;"/>

      <!-- Primary 3D Specular Highlight (Top Left Lens Reflection) -->
      <ellipse cx="17" cy="36" rx="5" ry="11" fill="url(#specGrad_${id})" transform="rotate(-22, 17, 36)"/>
      
      <!-- Secondary Micro Specular Dot -->
      <circle cx="27" cy="24" r="2.5" fill="#ffffff" opacity="0.85"/>
    </svg>`;
  }

  const PALETTES = [
    { main: '#0077b6', glow: '#48cae4' }, // Primary Aqua
    { main: '#00b4d8', glow: '#90e0ef' }, // Cyan Light
    { main: '#023e8a', glow: '#00b4d8' }, // Deep Blue
    { main: '#0096c7', glow: '#caf0f8' }, // Teal Gloss
  ];

  const bg = document.createElement('div');
  bg.id = 'water-drops-bg';
  bg.setAttribute('aria-hidden', 'true');

  // Ambient Caustic Glow Pools (Adds deep 3D atmosphere)
  const glowLayer = document.createElement('div');
  glowLayer.className = 'wcaustics-layer';
  glowLayer.innerHTML = `
    <div class="wcaustic wcaustic-1"></div>
    <div class="wcaustic wcaustic-2"></div>
    <div class="wcaustic wcaustic-3"></div>
  `;
  bg.appendChild(glowLayer);

  // 18 Floating 3D Water Drops
  const dropWrap = document.createElement('div');
  dropWrap.className = 'wdrops-layer';
  for (let i = 0; i < 18; i++) {
    const pal = PALETTES[i % PALETTES.length];
    const div = document.createElement('div');
    div.className = `wdrop wdrop-3d ${i % 3 === 0 ? 'wdrop-fg' : (i % 2 === 0 ? 'wdrop-mg' : 'wdrop-bg')}`;
    div.innerHTML = make3DDrop(i, pal.main, pal.glow);
    dropWrap.appendChild(div);
  }
  bg.appendChild(dropWrap);

  // 6 Expanding 3D Water Ripples
  const rippleWrap = document.createElement('div');
  rippleWrap.className = 'wripples-layer';
  for (let i = 0; i < 6; i++) {
    const div = document.createElement('div');
    div.className = 'wripple wripple-3d';
    rippleWrap.appendChild(div);
  }
  bg.appendChild(rippleWrap);

  // 6 3D Sphere Water Bubbles
  const bubbleWrap = document.createElement('div');
  bubbleWrap.className = 'wbubbles-layer';
  for (let i = 0; i < 6; i++) {
    const div = document.createElement('div');
    div.className = 'wbubble wbubble-3d';
    bubbleWrap.appendChild(div);
  }
  bg.appendChild(bubbleWrap);

  document.body.insertBefore(bg, document.body.firstChild);
}());
*/
