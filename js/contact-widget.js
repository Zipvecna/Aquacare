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
          <label>Name<input name="name" type="text" autocomplete="name" maxlength="120"></label>
          <label>Company name<input name="company" type="text" autocomplete="organization" maxlength="120"></label>
          <label>Email<input name="email" type="email" autocomplete="email" maxlength="254"></label>
          <label>Phone<input name="phone" type="tel" autocomplete="tel" maxlength="32"></label>
          <fieldset class="contact-widget-interest-type">
            <legend>I'm interested in:</legend>
            <label><input type="radio" name="interestType" value="Product" checked> Product</label>
            <label><input type="radio" name="interestType" value="Service"> Service</label>
          </fieldset>
          <label class="contact-widget-interest-select"><span>Select a product</span><select name="interest"></select></label>
          <label>Message<textarea name="message" rows="3" maxlength="2000"></textarea></label>
          <div class="contact-widget-error" role="alert" aria-live="polite" hidden></div>
          <div class="contact-widget-actions">
            <button class="contact-widget-action contact-widget-whatsapp" type="submit" data-channel="whatsapp" data-whatsapp-number="${CONFIG.whatsappNumber}">WhatsApp</button>
            <button class="contact-widget-action contact-widget-email" type="submit" data-channel="email">Email</button>
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
        width: min(100% - 28px, 360px);
        font-family: var(--font-body, Arial, sans-serif);
      }
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
        width: 100%;
        max-height: min(520px, calc(100dvh - 28px));
        margin-bottom: 12px;
        padding: 16px;
        overflow-y: auto;
        background: #fff;
        border: 1px solid var(--border-blue, #bfdbfe);
        border-radius: 14px;
        box-shadow: 0 12px 32px rgba(10, 37, 64, 0.18);
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
      .contact-widget-form { display: grid; gap: 8px; }
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
        gap: 8px 14px;
        margin: 0;
        padding: 0;
        border: 0;
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
        gap: 4px;
        font-weight: 600;
      }
      .contact-widget-form .contact-widget-interest-type input {
        width: auto;
        margin: 0;
      }
      .contact-widget-form input,
      .contact-widget-form select,
      .contact-widget-form textarea {
        width: 100%;
        min-width: 0;
        border: 1px solid var(--border-subtle, #dbeafe);
        border-radius: 6px;
        padding: 7px 9px;
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
      }
      #contact-widget-embedded .contact-widget-panel {
        max-height: none;
        margin: 0;
      }
      #contact-widget-embedded .contact-widget-close {
        display: none;
      }
      #contact-widget-embedded .contact-widget-hide,
      #contact-widget-embedded .contact-widget-launcher,
      #contact-widget-embedded .contact-widget-tab {
        display: none !important;
      }
      @media (max-width: 420px) {
        #contact-widget { width: calc(100% - 20px); }
        .contact-widget-panel { padding: 12px; }
        #contact-widget-embedded { width: 100%; }
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

    if (isEmbedded) {
      panel.hidden = false;
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
      panel.hidden = !isOpen;
      launcher.hidden = isOpen;
      hide.hidden = isOpen;
      tab.hidden = !isOpen;
      launcher.setAttribute("aria-expanded", String(isOpen));
    }

    function setHidden(isHidden) {
      panel.hidden = true;
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
        `Company: ${fields.company || "Not provided"}`,
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
        `Company: ${fields.company || "Not provided"}`,
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
        window.location.href = `mailto:${CONFIG.emailAddress}?subject=${encodeURIComponent("Aqua Care enquiry")}&body=${encodeURIComponent(message)}`;
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
