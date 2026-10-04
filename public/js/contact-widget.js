(() => {
  const fallbackInterests = [
    "Sokalan CP 10",
    "Multicare B 326",
    "Morpholine",
    "Aquasafe VA 25",
    "Multicare B 812",
    "Aquaclean 215",
    "Lutropur MSA",
    "Sokalan CP 5",
    "Protectol GA 50",
    "Coolcare SOB 60",
    "Coolcare CL 30",
    "Coolcare CL 50",
    "Coolcare CI 524",
    "Maxigrad",
    "Aquasperse 328"
  ];

  const CONFIG = {
    whatsappNumber: "8801793591851",
    emailAddress: window.AQUA_DATA?.company?.email?.[0] || "aquacaretrading67@gmail.com",
    interests: Array.isArray(window.AQUA_DATA?.chemicals) && window.AQUA_DATA.chemicals.length
      ? window.AQUA_DATA.chemicals.map((chem) => chem.name).filter(Boolean)
      : fallbackInterests,
    services: [
      "On-site jar testing & dosing optimization audit",
      "Technical Data Sheet (TDS) / Safety Data Sheet (SDS) request",
      "Emergency chemical delivery / replenishment",
      "Custom chemical formulation request",
      "General water treatment consultation"
    ]
  };

  function injectWidget(isEmbedded = false) {
    const widgetId = isEmbedded ? "contact-widget-embedded" : "contact-widget";
    if (document.getElementById(widgetId)) return;

    const widget = document.createElement("div");
    widget.id = widgetId;
    widget.innerHTML = `
      <button class="contact-widget-launcher" type="button" aria-expanded="false" aria-controls="contact-widget-panel">
        <span aria-hidden="true">&#9993;</span>
        <span class="contact-widget-launcher-label">Send message</span>
      </button>
      <button class="contact-widget-hide" type="button" aria-label="Hide contact widget">&times;</button>
      <div class="contact-widget-panel" id="${widgetId}-panel" hidden>
        <div class="contact-widget-heading">
          <span>Send a message</span>
          <button class="contact-widget-close" type="button" aria-label="Close contact form">&times;</button>
        </div>
        <form class="contact-widget-form" novalidate>
          <div class="contact-widget-form-header">
            <div>
              <div class="contact-widget-form-title">Get in touch</div>
              <div class="contact-widget-form-subtitle">Tell us about your water treatment needs</div>
            </div>
            <span class="contact-widget-form-icon" aria-hidden="true">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
                <path d="M12 3.5S6.5 10 6.5 14.5a5.5 5.5 0 0 0 11 0C17.5 10 12 3.5 12 3.5Z"></path>
                <path d="M9.5 15.5a2.8 2.8 0 0 0 5 1.2"></path>
              </svg>
            </span>
          </div>
          <label><span class="contact-widget-visually-hidden">Name</span><input name="name" type="text" autocomplete="name" maxlength="120" placeholder="Your name"></label>
          <label><span class="contact-widget-visually-hidden">Industry name</span><input name="industry" type="text" autocomplete="organization" maxlength="120" placeholder="Industry — e.g. Textile, Pharma, Steel Mill"></label>
          <label class="contact-widget-field-email"><span class="contact-widget-visually-hidden">Email</span><input name="email" type="email" autocomplete="email" maxlength="254" placeholder="Email"></label>
          <label class="contact-widget-field-phone"><span class="contact-widget-visually-hidden">Phone</span><input name="phone" type="tel" autocomplete="tel" maxlength="32" placeholder="Phone"></label>
          <fieldset class="contact-widget-interest-type">
            <legend>I'm interested in:</legend>
            <label><input type="radio" name="interestType" value="Product" checked> Product</label>
            <label><input type="radio" name="interestType" value="Service"> Service</label>
          </fieldset>
          <label class="contact-widget-interest-select"><span>Select a product</span><select name="interest"></select></label>
          <label><span class="contact-widget-visually-hidden">Message</span><textarea name="message" rows="3" maxlength="2000" placeholder="Tell us what you need"></textarea></label>
          <div class="contact-widget-error" role="alert" aria-live="polite" hidden></div>
          <div class="contact-widget-actions">
            <button class="contact-widget-action contact-widget-whatsapp" type="submit" data-channel="whatsapp" data-whatsapp-number="${CONFIG.whatsappNumber}"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M20 11.5a8 8 0 0 1-11.8 7L4 20l1.5-4.1A8 8 0 1 1 20 11.5Z"></path><path d="M8.5 9.2c.2 1.8 2.5 4 4.3 4.3l1.1-1.1c.2-.2.5-.3.8-.1l1.6.7c.3.1.4.4.3.7-.3 1-1.1 1.5-2.1 1.4-4.3-.5-7.2-3.4-7.7-7.7-.1-1 .4-1.8 1.4-2.1.3-.1.6 0 .7.3l.7 1.6c.1.3.1.6-.1.8L8.5 9.2Z"></path></svg>WhatsApp</button>
            <button class="contact-widget-action contact-widget-email" type="submit" data-channel="email"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2"></rect><path d="m3 7 9 6 9-6"></path></svg>Email</button>
          </div>
        </form>
      </div>
      <button class="contact-widget-tab" type="button" aria-label="Show contact widget" hidden>&#9993;</button>
    `;

    const style = document.createElement("style");
    style.textContent = `
      #contact-widget {
        position: fixed;
        right: max(14px, env(safe-area-inset-right));
        bottom: max(14px, env(safe-area-inset-bottom));
        z-index: 1000;
        width: min(calc(100vw - 28px), 360px);
        font-family: var(--font-body, Arial, sans-serif);
      }
      #contact-widget,
      #contact-widget *,
      #contact-widget *::before,
      #contact-widget *::after { box-sizing: border-box; }
      #contact-widget button,
      #contact-widget input,
      #contact-widget select,
      #contact-widget textarea { font: inherit; }
      .contact-widget-launcher {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 7px;
        width: 58px;
        height: 58px;
        margin-left: auto;
        border: 0;
        border-radius: 50%;
        cursor: pointer;
        color: #fff;
        background: linear-gradient(135deg, var(--blue-primary, #0077b6), var(--cyan, #00b4d8));
        box-shadow: 0 8px 24px rgba(0, 83, 128, 0.28);
      }
      .contact-widget-launcher-label { display: none; }
      .contact-widget-hide {
        position: absolute;
        top: -7px;
        right: -7px;
        width: 22px;
        height: 22px;
        padding: 0;
        border: 1px solid #fff;
        border-radius: 50%;
        cursor: pointer;
        color: #fff;
        background: var(--blue-navy, #0a2540);
        font-size: 1rem;
        line-height: 1;
      }
      .contact-widget-panel {
        width: min(calc(100vw - 28px), 360px);
        max-height: min(85dvh, 620px);
        margin-bottom: 12px;
        padding: 16px;
        overflow-y: auto;
        overflow-x: hidden;
        background: #fff;
        border: 1px solid var(--border-blue, #bfdbfe);
        border-radius: 14px;
        box-shadow: 0 12px 32px rgba(10, 37, 64, 0.18);
        opacity: 0;
        transform: translateY(8px) scale(0.98);
        pointer-events: none;
        transition: opacity 0.25s ease, transform 0.25s ease;
      }
      .contact-widget-panel.is-open {
        opacity: 1;
        transform: translateY(0) scale(1);
        pointer-events: auto;
      }
      .contact-widget-heading {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 10px;
        color: var(--blue-navy, #0a2540);
        font-weight: 800;
      }
      .contact-widget-close {
        border: 0;
        padding: 0 4px;
        cursor: pointer;
        color: var(--text-dim, #64748b);
        background: transparent;
        font-size: 1.3rem;
        line-height: 1;
      }
      .contact-widget-form {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 9px;
      }
      .contact-widget-form-header,
      .contact-widget-form > label,
      .contact-widget-interest-type,
      .contact-widget-error,
      .contact-widget-actions { grid-column: 1 / -1; }
      .contact-widget-form-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 0;
      }
      .contact-widget-form-title {
        color: var(--blue-navy, #0a2540);
        font-size: 17px;
        font-weight: 500;
        line-height: 1.25;
      }
      .contact-widget-form-subtitle {
        margin-top: 3px;
        color: var(--text-dim, #64748b);
        font-size: 12.5px;
        font-weight: 400;
      }
      .contact-widget-form-icon {
        display: grid;
        place-items: center;
        width: 38px;
        height: 38px;
        flex: 0 0 38px;
        border-radius: 50%;
        color: var(--blue-primary, #0077b6);
        background: rgba(0, 119, 182, 0.08);
      }
      .contact-widget-visually-hidden {
        position: absolute;
        width: 1px;
        height: 1px;
        padding: 0;
        margin: -1px;
        overflow: hidden;
        clip: rect(0, 0, 0, 0);
        white-space: nowrap;
        border: 0;
      }
      .contact-widget-field-email { grid-column: 1; }
      .contact-widget-field-phone { grid-column: 2; }
      .contact-widget-form label {
        display: grid;
        gap: 3px;
        color: var(--blue-navy, #0a2540);
        font-size: 0.78rem;
        font-weight: 700;
      }
      .contact-widget-interest-type {
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
        margin: 3px 0 0;
        padding: 10px 0 0;
        border: 0;
        border-top: 1px solid var(--border-subtle, #dbeafe);
        color: var(--blue-navy, #0a2540);
        font-size: 0.78rem;
        font-weight: 700;
      }
      .contact-widget-interest-type legend {
        width: 100%;
        margin-bottom: 1px;
      }
      .contact-widget-interest-type label {
        display: flex;
        align-items: center;
        justify-content: center;
        min-width: 0;
        flex: 1 1 0;
        padding: 7px 10px;
        border: 1px solid var(--border-subtle, #dbeafe);
        border-radius: 6px;
        cursor: pointer;
        color: var(--blue-navy, #0a2540);
        background: #fff;
        font-weight: 600;
      }
      .contact-widget-form .contact-widget-interest-type input {
        position: absolute;
        opacity: 0;
        pointer-events: none;
      }
      .contact-widget-interest-type label:has(input:checked) {
        border-color: var(--blue-navy, #0a2540);
        color: #fff;
        background: var(--blue-navy, #0a2540);
      }
      .contact-widget-form input,
      .contact-widget-form select,
      .contact-widget-form textarea {
        width: 100%;
        min-width: 0;
        border: 1px solid var(--border-subtle, #dbeafe);
        border-radius: 6px;
        padding: 7px 10px;
        color: var(--text-main, #1e293b);
        background: #fff;
      }
      .contact-widget-form textarea { resize: vertical; }
      .contact-widget-form input:focus,
      .contact-widget-form select:focus,
      .contact-widget-form textarea:focus {
        outline: 2px solid rgba(0, 180, 216, 0.25);
        border-color: var(--cyan, #00b4d8);
      }
      .contact-widget-error {
        padding: 8px 10px;
        border: 1px solid #fecaca;
        border-radius: 6px;
        color: #b91c1c;
        background: #fef2f2;
        font-size: 0.78rem;
        line-height: 1.35;
      }
      .contact-widget-actions {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 8px;
        margin-top: 3px;
      }
      .contact-widget-action {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: 6px;
        border: 0;
        border-radius: 7px;
        padding: 9px 8px;
        cursor: pointer;
        color: #fff;
        font-weight: 700;
      }
      .contact-widget-whatsapp { background: #168c4b; }
      .contact-widget-email { background: var(--blue-primary, #0077b6); }
      .contact-widget-action:hover,
      .contact-widget-launcher:hover { filter: brightness(0.94); }
      .contact-widget-tab {
        width: 42px;
        height: 42px;
        margin-left: auto;
        border: 0;
        border-radius: 50%;
        cursor: pointer;
        color: #fff;
        background: linear-gradient(135deg, var(--blue-primary, #0077b6), var(--cyan, #00b4d8));
        box-shadow: 0 8px 24px rgba(0, 83, 128, 0.28);
      }
      #contact-widget-embedded {
        position: static;
        width: 100%;
        max-width: 420px;
        justify-self: end;
        margin-top: 140px;
        height: auto;
        display: flex;
        flex-direction: column;
      }
      #contact-widget-embedded .contact-widget-panel {
        width: 100%;
        max-width: none;
        max-height: none;
        height: auto;
        flex: 1;
        margin: 0;
        padding: 20px;
        border: 1px solid var(--border-subtle, #dbeafe);
        border-radius: 12px;
        box-shadow: var(--shadow-sm, 0 4px 14px rgba(10, 37, 64, 0.1));
        display: flex;
        flex-direction: column;
      }
      #contact-widget-embedded .contact-widget-close {
        display: none;
      }
      #contact-widget-embedded .contact-widget-hide,
      #contact-widget-embedded .contact-widget-launcher,
      #contact-widget-embedded .contact-widget-tab {
        display: none !important;
      }
      #contact .contact-info-column {
        display: flex;
        flex-direction: column;
        height: 100%;
      }
      #contact .contact-info-card {
        display: flex;
        flex: 1;
        flex-direction: column;
        height: 100%;
      }
      #contact .contact-info-content {
        align-content: center;
        justify-content: center;
        flex: 1;
      }
      @media (max-width: 992px) {
        #contact .contact-layout {
          grid-template-columns: 1fr !important;
          gap: 22px !important;
        }
        #contact .contact-info-column,
        #contact .contact-info-card,
        #contact-widget-embedded,
        #contact-widget-embedded .contact-widget-panel {
          height: auto;
        }
        #contact .contact-info-card {
          flex: initial;
        }
        #contact-widget-embedded {
          max-width: none;
          justify-self: stretch;
          margin-top: 0;
        }
      }
      @media (max-width: 420px) {
        #contact-widget { width: calc(100% - 20px); }
        .contact-widget-panel { padding: 12px; }
        #contact-widget-embedded { width: 100%; }
        .contact-widget-field-email,
        .contact-widget-field-phone { grid-column: 1 / -1; }
        #contact-widget-embedded {
          max-width: none;
          margin-top: 0;
        }
      }
    `;
    document.head.appendChild(style);
    if (isEmbedded) {
      document.querySelector("#contact .calc-grid").appendChild(widget);
    } else {
      document.body.appendChild(widget);
    }

    const panel = widget.querySelector(".contact-widget-panel");
    const launcher = widget.querySelector(".contact-widget-launcher");
    const hide = widget.querySelector(".contact-widget-hide");
    const close = widget.querySelector(".contact-widget-close");
    const tab = widget.querySelector(".contact-widget-tab");
    const form = widget.querySelector(".contact-widget-form");
    const error = widget.querySelector(".contact-widget-error");
    const interestTypeInputs = widget.querySelectorAll('input[name="interestType"]');
    const interestLabel = widget.querySelector(".contact-widget-interest-select span");
    const interestSelect = widget.querySelector('select[name="interest"]');
    let panelTransitionTimer;

    if (isEmbedded) {
      panel.hidden = false;
      panel.classList.add("is-open");
      launcher.hidden = true;
      hide.hidden = true;
      tab.hidden = true;
    }

    function populateInterests(type) {
      interestSelect.replaceChildren();
      interestSelect.appendChild(new Option(type === "Product" ? "Select a product" : "Select a service", ""));

      if (type === "Service") {
        CONFIG.services.forEach((service) => {
          interestSelect.appendChild(new Option(service, service));
        });
        interestLabel.textContent = "Select a service";
        return;
      }

      const chemicals = Array.isArray(window.AQUA_DATA?.chemicals)
        ? window.AQUA_DATA.chemicals.filter((chem) => chem && chem.name)
        : [];
      const groups = new Map();
      chemicals.forEach((chem) => {
        const groupLabel = chem.categoryName || "Other";
        if (!groups.has(groupLabel)) {
          groups.set(groupLabel, document.createElement("optgroup"));
          groups.get(groupLabel).label = groupLabel;
          interestSelect.appendChild(groups.get(groupLabel));
        }
        groups.get(groupLabel).appendChild(new Option(chem.name, chem.name));
      });

      if (!chemicals.length) {
        CONFIG.interests.forEach((interest) => {
          interestSelect.appendChild(new Option(interest, interest));
        });
      }
      interestLabel.textContent = "Select a product";
    }

    function setOpen(isOpen) {
      clearTimeout(panelTransitionTimer);
      if (isOpen) {
        panel.hidden = false;
        requestAnimationFrame(() => panel.classList.add("is-open"));
      } else {
        panel.classList.remove("is-open");
        panelTransitionTimer = setTimeout(() => {
          panel.hidden = true;
        }, 250);
      }
      launcher.hidden = isOpen;
      hide.hidden = isOpen;
      tab.hidden = !isOpen;
      launcher.setAttribute("aria-expanded", String(isOpen));
    }

    function setHidden(isHidden) {
      clearTimeout(panelTransitionTimer);
      panel.classList.remove("is-open");
      panelTransitionTimer = setTimeout(() => {
        panel.hidden = true;
      }, 250);
      launcher.hidden = isHidden;
      hide.hidden = isHidden;
      tab.hidden = !isHidden;
      launcher.setAttribute("aria-expanded", "false");
    }

    function formatMessage(fields) {
      return [
        "Hello Aqua Care, I would like more information.",
        "",
        `Name: ${fields.name}`,
        `Industry: ${fields.industry || "Not provided"}`,
        `Email: ${fields.email || "Not provided"}`,
        `Phone: ${fields.phone || "Not provided"}`,
        `Interested in: ${fields.interestType || "Not selected"} - ${fields.interest || "Not selected"}`,
        "",
        "Message:",
        fields.message
      ].join("\n");
    }

    function formatWhatsAppMessage(fields) {
      return [
        "New Website Inquiry",
        "",
        `Name: ${fields.name}`,
        `Industry: ${fields.industry || "Not provided"}`,
        `Email: ${fields.email || "Not provided"}`,
        `Phone: ${fields.phone || "Not provided"}`,
        `Interested in: ${fields.interestType || "Not selected"} - ${fields.interest || "Not selected"}`,
        "",
        "Message:",
        fields.message
      ].join("\n");
    }

    launcher.addEventListener("click", () => setOpen(true));
    close.addEventListener("click", () => setOpen(false));
    hide.addEventListener("click", () => setHidden(true));
    tab.addEventListener("click", () => setHidden(false));
    interestTypeInputs.forEach((input) => {
      input.addEventListener("change", () => populateInterests(input.value));
    });
    populateInterests("Product");
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      error.hidden = true;
      error.textContent = "";

      const fields = Object.fromEntries(new FormData(form).entries());
      const missing = [];
      if (!fields.name.trim()) missing.push("name");
      if (!fields.message.trim()) missing.push("message");
      if (!fields.email.trim() && !fields.phone.trim()) missing.push("email or phone");
      if (missing.length) {
        error.textContent = `Please provide your ${missing.join(", ")} before sending.`;
        error.hidden = false;
        return;
      }

      const channel = event.submitter?.dataset.channel;
      const whatsappNumber = event.submitter?.dataset.whatsappNumber || CONFIG.whatsappNumber;

      if (channel === "whatsapp") {
        const message = formatWhatsAppMessage(fields);
        window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
      } else {
        const message = formatMessage(fields);
        window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(CONFIG.emailAddress)}&su=${encodeURIComponent("Aqua Care enquiry")}&body=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
      }
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => {
      injectWidget();
      if (document.querySelector("#contact .calc-grid")) injectWidget(true);
    });
  } else {
    injectWidget();
    if (document.querySelector("#contact .calc-grid")) injectWidget(true);
  }
})();
