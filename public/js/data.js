/**
 * Aqua Care - Core Data Module
 * Industrial Water Treatment Chemicals, Applications, and Industry Data
*/

function createCatalogChemical(chemical) {
  return {
    ...chemical,
    packaging: Array.isArray(chemical.packaging) ? chemical.packaging : [],
    safety: chemical.safety || 'Follow the product SDS and local safety procedures.',
    specs: Array.isArray(chemical.specs) ? chemical.specs : [],
    properties: chemical.properties || {},
    tdsLink: chemical.tdsLink || '',
    quoteAction: chemical.quoteAction || ''
  };
}

const AQUA_DATA = {
  company: {
    brandName: "Aqua Care",
    legalName: "Aqua Care Trading",
    tagline: "The Water Treatment Company",
    established: "2012",
    description: "Aqua Care is a Bangladesh-based water treatment company established in 2012, providing industrial water treatment chemicals and related solutions to industrial clients.",
    addressLines: [
      "Sapnadanga R/A,",
      "Bhaban #04, Flat #5C,",
      "West Dhanmondi, Hajaribag,",
      "Dhaka-1209, Bangladesh"
    ],
    fullAddress: "Sapnadanga R/A, Bhaban #04, Flat #5C, West Dhanmondi, Hajaribag, Dhaka-1209, Bangladesh",
    phoneFax: "+88-02-9672552",
    mobiles: ["01911-350427", "01793-591851"],
    email: ["aquacaretrading67@gmail.com"],
    businessAreas: [
      "Water Treatment",
      "Industrial Chemical Supply",
      "Water Treatment Chemicals",
      "Industrial Water Treatment Solutions"
    ]
  },

  chemicals: [
    createCatalogChemical({
      id: "aquafloc-lt-7991",
      name: "Aquafloc LT 7991",
      tradeName: "Aquafloc LT 7991",
      formula: "",
      category: "coagulants",
      categoryName: "Raw|Waste Water",
      purpose: "",
      application: "",
      dosageRange: "",
      badge: "Raw|Waste Water"
    }),
    createCatalogChemical({
      id: "aquatag-4190",
      name: "Aquatag 4190",
      tradeName: "Aquatag 4190",
      formula: "",
      category: "coagulants",
      categoryName: "Raw|Waste Water",
      purpose: "",
      application: "",
      dosageRange: "",
      badge: "Raw|Waste Water"
    }),
    createCatalogChemical({
      id: "aquatag-4120",
      name: "Aquatag 4120",
      tradeName: "Aquatag 4120",
      formula: "",
      category: "coagulants",
      categoryName: "Raw|Waste Water",
      purpose: "",
      application: "",
      dosageRange: "",
      badge: "Raw|Waste Water"
    }),
    createCatalogChemical({
      id: "sokalan-cp-10",
      name: "Sokalan CP 10",
      tradeName: "Sokalan CP 10",
      formula: "",
      category: "boiler",
      categoryName: "Boiler Water",
      purpose: "",
      application: "",
      dosageRange: "",
      badge: "Boiler Water"
    }),
    createCatalogChemical({
      id: "multicare-b-326",
      name: "Multicare B 326",
      tradeName: "Multicare B 326",
      formula: "",
      category: "boiler",
      categoryName: "Boiler Water",
      purpose: "",
      application: "",
      dosageRange: "",
      badge: "Corrosion Control"
    }),
    createCatalogChemical({
      id: "morpholine",
      name: "Morpholine",
      tradeName: "Morpholine",
      formula: "",
      category: "boiler",
      categoryName: "Boiler Water",
      purpose: "",
      application: "",
      dosageRange: "",
      badge: "Steam System"
    }),
    createCatalogChemical({
      id: "aquasafe-va-25",
      name: "Aquasafe VA 25",
      tradeName: "Aquasafe VA 25",
      formula: "",
      category: "boiler",
      categoryName: "Boiler Water",
      purpose: "",
      application: "",
      dosageRange: "",
      badge: "Condensate Protection"
    }),
    createCatalogChemical({
      id: "multicare-b-812",
      name: "Multicare B 812",
      tradeName: "Multicare B 812",
      formula: "",
      category: "boiler",
      categoryName: "Boiler Water",
      purpose: "",
      application: "",
      dosageRange: "",
      badge: "Boiler Performance"
    }),
    createCatalogChemical({
      id: "aquaclean-215",
      name: "Aquaclean 215",
      tradeName: "Aquaclean 215",
      formula: "",
      category: "boiler",
      categoryName: "Boiler Water",
      purpose: "",
      application: "",
      dosageRange: "",
      badge: "Descaling"
    }),
    createCatalogChemical({
      id: "lutropur-msa-boiler",
      name: "Lutropur MSA",
      tradeName: "Lutropur MSA",
      formula: "",
      category: "boiler",
      categoryName: "Boiler Water",
      purpose: "",
      application: "",
      dosageRange: "",
      badge: "Boiler Water"
    }),
    createCatalogChemical({
      id: "sokalan-cp-5",
      name: "Sokalan CP 5",
      tradeName: "Sokalan CP 5",
      formula: "",
      category: "cooling",
      categoryName: "Cooling Water",
      purpose: "",
      application: "",
      dosageRange: "",
      badge: "Cooling Water"
    }),
    createCatalogChemical({
      id: "protectol-ga-50-cooling",
      name: "Protectol GA 50",
      tradeName: "Protectol GA 50",
      formula: "",
      category: "cooling",
      categoryName: "Cooling Water",
      purpose: "",
      application: "",
      dosageRange: "",
      badge: "Cooling Water"
    }),
    createCatalogChemical({
      id: "coolcare-sob-60",
      name: "Coolcare SOB 60",
      tradeName: "Coolcare SOB 60",
      formula: "",
      category: "cooling",
      categoryName: "Cooling Water",
      purpose: "",
      application: "",
      dosageRange: "",
      badge: "Cooling Water"
    }),
    createCatalogChemical({
      id: "coolcare-cl-30",
      name: "Coolcare CL 30",
      tradeName: "Coolcare CL 30",
      formula: "",
      category: "cooling",
      categoryName: "Cooling Water",
      purpose: "",
      application: "",
      dosageRange: "",
      badge: "Cooling Water"
    }),
    createCatalogChemical({
      id: "coolcare-cl-50",
      name: "Coolcare CL 50",
      tradeName: "Coolcare CL 50",
      formula: "",
      category: "cooling",
      categoryName: "Cooling Water",
      purpose: "",
      application: "",
      dosageRange: "",
      badge: "Cooling Water"
    }),
    createCatalogChemical({
      id: "coolcare-ci-524",
      name: "Coolcare CI 524",
      tradeName: "Coolcare CI 524",
      formula: "",
      category: "cooling",
      categoryName: "Cooling Water",
      purpose: "",
      application: "",
      dosageRange: "",
      badge: "Corrosion Control"
    }),
    createCatalogChemical({
      id: "maxigrad",
      name: "Maxigrad",
      tradeName: "Maxigrad",
      formula: "",
      category: "cooling",
      categoryName: "Cooling Water",
      purpose: "",
      application: "",
      dosageRange: "",
      badge: "Scale Control"
    }),
    createCatalogChemical({
      id: "aquasperse-328-cooling",
      name: "Aquasperse 328",
      tradeName: "Aquasperse 328",
      formula: "",
      category: "cooling",
      categoryName: "Cooling Water",
      purpose: "",
      application: "",
      dosageRange: "",
      badge: "Dispersant"
    }),
    createCatalogChemical({
      id: "lutropur-msa-cooling",
      name: "Lutropur MSA",
      tradeName: "Lutropur MSA",
      formula: "",
      category: "cooling",
      categoryName: "Cooling Water",
      purpose: "",
      application: "",
      dosageRange: "",
      badge: "Cooling Water"
    }),
    createCatalogChemical({
      id: "aquaclean-ro-64",
      name: "Aquaclean RO 64",
      tradeName: "Aquaclean RO 64",
      formula: "",
      category: "ro",
      categoryName: "Reverse Osmosis (RO)",
      purpose: "",
      application: "",
      dosageRange: "",
      badge: "RO Chemistry"
    }),
    createCatalogChemical({
      id: "aquaclean-ro-65",
      name: "Aquaclean RO 65",
      tradeName: "Aquaclean RO 65",
      formula: "",
      category: "ro",
      categoryName: "Reverse Osmosis (RO)",
      purpose: "",
      application: "",
      dosageRange: "",
      badge: "RO Chemistry"
    }),
    createCatalogChemical({
      id: "sokalan-ro-400",
      name: "Sokalan RO 400",
      tradeName: "Sokalan RO 400",
      formula: "",
      category: "ro",
      categoryName: "Reverse Osmosis (RO)",
      purpose: "",
      application: "",
      dosageRange: "",
      badge: "RO Antiscalant"
    }),
    createCatalogChemical({
      id: "irgatreat-2206",
      name: "Irgatreat AS 2206",
      tradeName: "Irgatreat 2206",
      formula: "",
      category: "ro",
      categoryName: "Reverse Osmosis (RO)",
      purpose: "",
      application: "",
      dosageRange: "",
      badge: "RO Chemistry"
    }),
    createCatalogChemical({
      id: "irgatreat-2205",
      name: "Irgatreat AS 2205",
      tradeName: "Irgatreat 2205",
      formula: "",
      category: "ro",
      categoryName: "Reverse Osmosis (RO)",
      purpose: "",
      application: "",
      dosageRange: "",
      badge: "RO Chemistry"
    }),
    createCatalogChemical({
      id: "aquasperse-328-ro",
      name: "Aquasperse 328",
      tradeName: "Aquasperse 328",
      formula: "",
      category: "ro",
      categoryName: "Reverse Osmosis (RO)",
      purpose: "",
      application: "",
      dosageRange: "",
      badge: "RO Dispersant"
    }),
    createCatalogChemical({
      id: "protectol-ga-50-ro",
      name: "Protectol GA 50",
      tradeName: "Protectol GA 50",
      formula: "",
      category: "ro",
      categoryName: "Reverse Osmosis (RO)",
      purpose: "",
      application: "",
      dosageRange: "",
      badge: "RO Specialty Chemistry"
    }),
    createCatalogChemical({
      id: "lutropur-msa-ro",
      name: "Lutropur MSA",
      tradeName: "Lutropur MSA",
      formula: "",
      category: "ro",
      categoryName: "Reverse Osmosis (RO)",
      purpose: "",
      application: "",
      dosageRange: "",
      badge: "RO Membrane Cleaner"
    }),
    createCatalogChemical({
      id: "feedcare-721",
      name: "Feedcare 721",
      tradeName: "Feedcare 721",
      formula: "",
      category: "drinking-water",
      categoryName: "Drinking Water",
      purpose: "",
      application: "",
      dosageRange: "",
      badge: "Drinking Water"
    })
  ],

  faqs: [
    {
      q: "Do your chemicals comply with international water standards (NSF, ISO, AWWA)?",
      a: "Yes. Aqua Care Trading chemicals are certified under ISO 9001:2015 for quality management and ISO 14001:2015 for environmental responsibility. Our potable water chemicalsâ€”including Poly Aluminium Chloride (PAC), Alum, and Sodium Hypochloriteâ€”strictly meet NSF/ANSI Standard 60 and AWWA guidelines."
    },
    {
      q: "What packaging options are available for bulk and regional deliveries?",
      a: "We offer complete flexible packaging tailored to your plant setup: 25 kg / 50 kg moisture-proof HDPE bags, 1000 kg big bags, 30L carboys, 200L HDPE chemical drums, 1000L IBC totes, and bulk road tankers with automated unloading hoses."
    },
    {
      q: "Can you provide Technical Data Sheets (TDS) and Material Safety Data Sheets (MSDS / SDS)?",
      a: "Absolutely. Full 16-section GHS-compliant Safety Data Sheets (SDS) and certified Technical Data Sheets (TDS) are available for every chemical in our catalog. You can download or request them directly from this website or contact our technical team."
    },
    {
      q: "Do you offer on-site jar testing and chemical dosing optimization audits?",
      a: "Yes. Our team of certified water treatment chemists and field engineers provides complimentary on-site audits, jar testing, and dosing rate optimization for our industrial and commercial contract clients to maximize performance and reduce chemical expenditure."
    },
    {
      q: "What is your typical delivery lead time for emergency chemical replenishment?",
      a: "With over 18,500 MT of warehouse inventory and our dedicated logistics fleet, we guarantee 24 to 48-hour emergency dispatch across our primary industrial regions, backed by a 24/7 technical hotline."
    }
  ]
};

// Export to window for vanilla JS accessibility
window.AQUA_DATA = AQUA_DATA;

