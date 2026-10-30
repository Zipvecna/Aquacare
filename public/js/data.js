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
    quickFacts: Array.isArray(chemical.quickFacts) ? chemical.quickFacts : [],
    handling: Array.isArray(chemical.handling) ? chemical.handling : [],
    properties: chemical.properties || {},
    tdsLink: chemical.tdsLink || '',
    sdsLink: chemical.sdsLink || '',
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
      purpose: "Potable water grade liquid cationic coagulant. Aqueous polymer solution of epichlorohydrin amine condensates.",
      application: "Primary coagulant for clarification of potable water and a wide range of industrial effluents. Can be used alone or with inorganic coagulants.",
      dosageRange: "Prepare stock solutions at 0.25–0.5%; for maximum effect, use within 5 days.",
      tdsLink: "tds/aquafloc-lt-7991.pdf",
      specs: [
        { parameter: "Product type", value: "Solution polymer" },
        { parameter: "Physical form", value: "Clear, viscous, colorless-yellow liquid" },
        { parameter: "Solids content", value: "50 %" },
        { parameter: "Molecular weight", value: "High" },
        { parameter: "Specific gravity", value: "1.14 g/cm³" },
        { parameter: "Bulk density", value: "9.51 lb/gal" },
        { parameter: "pH", value: "5–7" },
        { parameter: "Supplied viscosity", value: "4,500–7,500 cPs" }
      ],
      handling: [
        "Store under normal, dry conditions at 5–25 °C (41–77 °F).",
        "Protect the product from frost.",
        "Prepare stock solutions at 0.25–0.5% regularly and use within 5 days.",
        "Recommended construction materials include stainless steel, fiberglass, polyethylene, polypropylene and epoxy-coated surfaces."
      ],
      safety: "• Stable for at least 24 months under normal, dry storage conditions at 5–25 °C (41–77 °F).\n• Long-term storage outside this temperature range should be avoided.\n• This cationic polymer is toxic to fish; prevent direct contact with freshwater courses, streams and rivers.\n• Spilled product is slippery underfoot and very slippery when wet.\n• Corrosion toward most standard construction materials is very low; aluminum may be adversely affected.\n• Refer to the relevant Material Safety Data Sheet (MSDS) for shipping, handling and health and safety information.\n• Dispose of product in compliance with all national, state and local laws.",
      badge: "Raw|Waste Water"
    }),
    createCatalogChemical({
      id: "aquatag-4190",
      name: "Aquatag 4190",
      tradeName: "Aquatag 4190",
      formula: "",
      category: "coagulants",
      categoryName: "Raw|Waste Water",
      purpose: "Solid-grade anionic polyelectrolyte. Copolymer of acrylamide and acrylic acid.",
      application: "Conditions municipal and industrial substrates before mechanical or static solid/liquid separation. Effective for mechanical dewatering, thickening, flotation and clarification across pH 4–9. Not compliant for potable water applications.",
      dosageRange: "Prepare stock solutions at 0.25–0.5% regularly; for maximum effect, use within 5 days.",
      tdsLink: "tds/aquatag-4190.pdf",
      packaging: [
        "25 kg Polybag",
        "700 kg Small Tay Bag",
        "907 kg Large Tay Bag"
      ],
      specs: [
        { parameter: "Product type", value: "Powder" },
        { parameter: "Physical form", value: "Off-white granular solid" },
        { parameter: "Anionic charge", value: "Ultra high" },
        { parameter: "Molecular weight", value: "High" },
        { parameter: "Specific gravity", value: "0.75" },
        { parameter: "Bulk density", value: "46.8 lb/ft³" },
        { parameter: "pH (1% solution)", value: "6–8" },
        { parameter: "Apparent viscosity (0.25% at 25 °C)", value: "200 cP" },
        { parameter: "Apparent viscosity (0.50% at 25 °C)", value: "500 cP" },
        { parameter: "Apparent viscosity (1.0% at 25 °C)", value: "1,100 cP" }
      ],
      handling: [
        "Store under normal conditions at 5–25 °C (41–77 °F).",
        "Prepare stock solutions at 0.25–0.5% regularly and use within 5 days.",
        "Recommended construction materials include stainless steel, fiberglass, polyethylene, polypropylene and epoxy-coated surfaces.",
        "Handle spills carefully because the product is slippery underfoot, especially when wet."
      ],
      safety: "• Stable for at least 24 months under normal storage conditions at 5–25 °C (41–77 °F).\n• Long-term storage outside this temperature range should be avoided.\n• Corrosion toward most standard construction materials is very low; aluminum may be adversely affected.\n• Spilled product is slippery underfoot and very slippery when wet.\n• Refer to the relevant Material Safety Data Sheet (MSDS) for shipping, handling and health and safety information.\n• Dispose of product in compliance with all national, state and local laws.",
      badge: "Raw|Waste Water"
    }),
    createCatalogChemical({
      id: "aquatag-4120",
      name: "Aquatag 4120",
      tradeName: "Aquatag 4120",
      formula: "",
      category: "coagulants",
      categoryName: "Raw|Waste Water",
      purpose: "Solid-grade anionic polyelectrolyte. Copolymer of acrylamide and acrylic acid.",
      application: "Conditions municipal and industrial substrates before mechanical or static solid/liquid separation. Effective for mechanical dewatering, thickening, flotation and clarification across pH 4–9. Not compliant for potable water applications.",
      dosageRange: "Prepare stock solutions at 0.25–0.5% regularly; for maximum effect, use within 5 days.",
      tdsLink: "tds/aquatag-4120.pdf",
      packaging: [
        "25 kg Polybag",
        "700 kg Small Tay Bag",
        "907 kg Large Tay Bag"
      ],
      specs: [
        { parameter: "Product type", value: "Powder" },
        { parameter: "Physical form", value: "Off-white granular solid" },
        { parameter: "Anionic charge", value: "Medium-low" },
        { parameter: "Molecular weight", value: "Very high" },
        { parameter: "Specific gravity", value: "0.75" },
        { parameter: "Bulk density", value: "46.8 lb/ft³" },
        { parameter: "pH (1% solution)", value: "6–8" },
        { parameter: "Apparent viscosity (0.25% at 25 °C)", value: "600 cP" },
        { parameter: "Apparent viscosity (0.50% at 25 °C)", value: "1,450 cP" },
        { parameter: "Apparent viscosity (1.0% at 25 °C)", value: "2,000 cP" }
      ],
      handling: [
        "Store under normal conditions at 5–25 °C (41–77 °F).",
        "Prepare stock solutions at 0.25–0.5% regularly and use within 5 days.",
        "Recommended construction materials include stainless steel, fiberglass, polyethylene, polypropylene and epoxy-coated surfaces.",
        "Handle spills carefully because the product is slippery underfoot, especially when wet."
      ],
      safety: "• Stable for at least 24 months under normal storage conditions at 5–25 °C (41–77 °F).\n• Long-term storage outside this temperature range should be avoided.\n• Corrosion toward most standard construction materials is very low; aluminum may be adversely affected.\n• Spilled product is slippery underfoot and very slippery when wet.\n• Refer to the relevant Material Safety Data Sheet (MSDS) for shipping, handling and health and safety information.\n• Dispose of product in compliance with all national, state and local laws.",
      badge: "Raw|Waste Water"
    }),
    createCatalogChemical({
      id: "sokalan-cp-10",
      name: "Sokalan CP 10",
      tradeName: "Sokalan CP 10",
      formula: "",
      category: "boiler",
      categoryName: "Boiler Water",
      purpose: "Scale inhibitor. Modified polyacrylic acid, Na-salt, supplied as an aqueous solution.",
      application: "",
      dosageRange: "",
      cas: "",
      tdsLink: "tds/sokalan-cp-10.pdf",
      specs: [
        { parameter: "Concentration (dry content)", value: "approx. 45 %" },
        { parameter: "Water content", value: "approx. 55 %" },
        { parameter: "Mean molar mass (Mw)", value: "approx. 3500 g/mol" },
        { parameter: "pH value (23 °C)", value: "approx. 8.5" },
        { parameter: "K value", value: "approx. 20" },
        { parameter: "Viscosity (23 °C)", value: "500 mPa·s" },
        { parameter: "Density (23 °C)", value: "approx. 1.30 g/cm³" },
        { parameter: "Na-acrylate (as acrylic acid)", value: "< 0.01 %" },
        { parameter: "Solubility (10 % in water, 23 °C)", value: "Clear" },
        { parameter: "Pour point", value: "approx. -35 °C" }
      ],
      safety: "• Keep in a dry place in the original sealed packaging.\n• Tightly seal every opened container that was only partly emptied.\n• Preferably use the full contents of a packing unit at once; otherwise homogenize before use.\n• Storage temperature must not exceed 60 °C; above 25 °C only for a short time (long storage above 25 °C can increase the colour).\n• In heated tanks (up to 60 °C), blanket with nitrogen and stir gently to avoid discoloration.\n• Suitable materials: stainless steel (1.4541, 1.4571), HDPE, LDPE. Do not store in plain carbon steel.\n• Shelf life: at least 24 months in the original packaging.\n• For classification, safe use and transport, refer to the Safety Data Sheet (SDS).",
      badge: "Boiler Water"
    }),
    createCatalogChemical({
      id: "multicare-b-326",
      name: "Multicare B 326",
      tradeName: "Multicare B 326",
      formula: "",
      category: "boiler",
      categoryName: "Boiler Water",
      purpose: "Boiler corrosion inhibitor that scavenges dissolved oxygen and neutralizes carbon dioxide to reduce corrosion in steam-generating and industrial water systems.",
      application: "Fast-acting oxygen scavenger and CO₂ neutralizer for feed water, boiler and condensate equipment. Promotes magnetite formation, reduces pitting corrosion and helps minimize iron and copper pickup in condensate systems.",
      dosageRange: "Use 1–5 ppm of Multicare B 326 per ppm of dissolved oxygen. Total dosage should be confirmed by an Aqua Care representative.",
      tdsLink: "tds/multicare-b-326.pdf",
      specs: [
        { parameter: "Boiler operating pressure", value: "50–2,400 psi" },
        { parameter: "Dissolved oxygen dosage ratio", value: "1–5 ppm product per ppm dissolved oxygen" },
        { parameter: "Maximum solution concentration", value: "5%" },
        { parameter: "Solution water temperature", value: "Below 40 °C" }
      ],
      handling: [
        "Feed as far back in the system as possible to provide maximum reaction time.",
        "For boiler feed water, feed at the deaerating heater storage section or feed water pump suction side.",
        "Make a maximum 5% solution using water below 40 °C.",
        "Mix only until dissolving is complete.",
        "Use polyethylene, stainless steel or fiberglass for solution tanks and pumps; use a stainless steel quill for injection."
      ],
      safety: "• May cause irritation to skin and eyes; avoid eye contact and prolonged or repeated skin contact.\n• Avoid breathing dust and do not take internally.\n• For skin contact, wash with soap and water.\n• For eye contact, immediately irrigate with copious amounts of water for at least 15 minutes and seek medical advice.\n• Remove contaminated clothing and wash before reuse.\n• Store drums in a dry area and replace the lid after use.\n• Suggested in-plant storage limit is two years.",
      badge: "Corrosion Control"
    }),
    createCatalogChemical({
      id: "morpholine",
      name: "Morpholine",
      tradeName: "Morpholine",
      formula: "C2H7NO",
      cas: "110-91-8",
      category: "boiler",
      categoryName: "Boiler Water",
      purpose: "A volatile, water-miscible amine used as a pH adjuster and corrosion-control chemical in steam and condensate systems.",
      application: "Used in boiler water treatment to neutralize carbonic acid and help protect steam, condensate and feedwater systems from corrosion. The TDS also identifies Morpholine as an intermediate for corrosion inhibitors, crop protection agents, dyes, optical brighteners, pharmaceuticals and rubber chemicals.",
      dosageRange: "Dose according to boiler and condensate-water chemistry. Confirm the treatment program and dosage with an Aqua Care representative.",
      tdsLink: "tds/morpholine-tds.pdf",
      packaging: [
        "Bulk",
        "Drums"
      ],
      specs: [
        { parameter: "Molecular weight", value: "87.1" },
        { parameter: "Assay", value: "99.0% minimum" },
        { parameter: "Water", value: "0.30% maximum" },
        { parameter: "Color", value: "20 APHA maximum" },
        { parameter: "Foreign matter", value: "None" },
        { parameter: "Physical form", value: "Colorless to yellow liquid with an amine-like odor" },
        { parameter: "Freezing point", value: "-5 °C" },
        { parameter: "Flash point", value: "32 °C" },
        { parameter: "Boiling point", value: "128–130 °C" },
        { parameter: "Density at 20 °C", value: "1.016 g/cm³" },
        { parameter: "Ignition temperature", value: "275 °C" }
      ],
      handling: [
        "Store with the original container tightly closed and protect the product from fire, explosions, sources of ignition and electrostatic charges.",
        "Keep away from acids and acid-forming substances.",
        "Ensure thorough ventilation of work and storage areas.",
        "Shelf life is 24 months under the recommended storage conditions.",
        "Refer to the Material Safety Data Sheet (MSDS) for detailed handling and disposal information."
      ],
      safety: "• Irritating to skin and harmful if swallowed.\n• May cause serious eye damage and harm health after prolonged exposure.\n• Flammable; protect from fire, explosions, sources of ignition and electrostatic charges.\n• Wear protective clothing, gloves and eye/face protection.\n• Always refer to the Material Safety Data Sheet (MSDS) for detailed safety information.",
      badge: "Steam System"
    }),
    createCatalogChemical({
      id: "aquasafe-va-25",
      name: "Aquasafe VA 25",
      tradeName: "Aquasafe VA 25",
      formula: "",
      category: "cooling",
      categoryName: "Cooling Water",
      purpose: "Organic film-forming copper corrosion inhibitor for industrial cooling-water systems containing copper or copper alloys.",
      application: "Protects copper and copper-alloy metals in open and closed recirculating cooling-water systems. It can supplement other corrosion-control programs, help maximize turbine condenser efficiency, extend condenser tube life and reduce maintenance costs.",
      dosageRange: "Feed continuously from the drum or bulk storage tank to a location where the product will be uniformly mixed and thoroughly distributed. The specific dosage depends on system operating characteristics, water chemistry and corrosion severity; confirm the treatment program with an Aqua Care representative.",
      tdsLink: "tds/aquasafe-va-25.pdf",
      packaging: [
        "30 kg non-returnable drums",
        "200 kg non-returnable drums"
      ],
      specs: [
        { parameter: "Product type", value: "Organic liquid copper corrosion inhibitor" },
        { parameter: "Target metals", value: "Copper and copper alloys" },
        { parameter: "Application systems", value: "Open and closed recirculating cooling-water systems" },
        { parameter: "Feeding method", value: "Continuous feed from drum or bulk storage tank" }
      ],
      handling: [
        "Feed directly from the drum or bulk storage tank to a location where the product will be uniformly mixed and thoroughly distributed.",
        "Feed continuously to maintain optimum product activity.",
        "Wear rubber gloves and eye goggles when handling.",
        "Do not take internally or get the product in eyes, on skin or on clothing."
      ],
      safety: "• Do not take internally.\n• Do not get in eyes, on skin or on clothing.\n• Wear rubber gloves and eye goggles when handling.\n• In case of skin contact, wash with soap and water.\n• In case of eye contact, immediately flush with large amounts of water for 15 minutes and get medical attention.",
      badge: "Copper Corrosion"
    }),
    createCatalogChemical({
      id: "multicare-b-812",
      name: "Multicare B 812",
      tradeName: "Multicare B 812",
      formula: "",
      category: "boiler",
      categoryName: "Boiler Water",
      purpose: "Multi-functional boiler water treatment for scale, corrosion, oxygen attack and foam control.",
      application: "Specially formulated blend of synthetic organic polymer, fast-reacting phosphate, alkali, oxygen scavenger and antifoam for medium- to high-hardness boiler feedwater.",
      dosageRange: "Dosage varies with feedwater total hardness; an Aqua Care representative should recommend the proper dosage.",
      tdsLink: "tds/multicare-b-812.pdf",
      specs: [
        { parameter: "Solution feed concentration", value: "5–10%" },
        { parameter: "Dosing method", value: "Chemical dosing pump into the feed water line" },
        { parameter: "Treatment function", value: "Scale, corrosion, oxygen attack and foam control" }
      ],
      handling: [
        "Feed as a solution through a chemical dosing pump.",
        "Do not interrupt chemical feed; interruption may result in scale or deposit formation and possible tube failure."
      ],
      safety: "• Handle with caution.\n• Do not get in eyes and avoid contact with skin and clothing.\n• In case of contact, immediately flush with large amounts of water for at least 15 minutes; for eye contact, seek medical attention.\n• Do not take internally.\n• Keep out of reach of children.\n• Recommended in-plant storage limit is one year.",
      badge: "Boiler Performance"
    }),
    createCatalogChemical({
      id: "aquaclean-215",
      name: "Aquaclean 215",
      tradeName: "Aquaclean 215",
      formula: "",
      category: "boiler",
      categoryName: "Boiler Water",
      purpose: "Dry acid cleaner for removing water hardness deposits from industrial equipment.",
      application: "Dissolves calcium carbonate scale in water lines, boilers, evaporators, air conditioning systems and process equipment. The inhibited formula helps protect commonly encountered metals during cleaning.",
      dosageRange: "Prepare a 2–5% solution by weight depending on equipment water-holding capacity. 2 kg dissolves up to 1 kg of hardness salts; typical cleaning time is 4–12 hours.",
      tdsLink: "tds/aquaclean-215.pdf",
      packaging: [
        "20 kg plastic-lined fibre drum",
        "100 kg plastic-lined fibre drum"
      ],
      specs: [
        { parameter: "Product form", value: "Pulverized dry acid blend" },
        { parameter: "Recommended solution strength", value: "2–5% by weight" },
        { parameter: "Hardness salt capacity", value: "2 kg product dissolves up to 1 kg hardness salts" },
        { parameter: "Typical cleaning time", value: "4–12 hours" },
        { parameter: "Maximum solution temperature (steel, brass, bronze or copper)", value: "71 °C" },
        { parameter: "Maximum solution temperature (aluminium or galvanized equipment)", value: "Below 48 °C" },
        { parameter: "End-point indicator", value: "Blue-green to blue to purple as acid strength is depleted" }
      ],
      handling: [
        "Dissolve in water, then pour or pump into the equipment and circulate; direct addition is acceptable where mixing is assured.",
        "Flush equipment thoroughly with water after cleaning. Neutralization with sodium hydroxide or soda ash is recommended.",
        "Provide suitable venting when cleaning closed systems and keep open flames away from the vent during and immediately after cleaning.",
        "Do not apply the product to a water system while it is operating under pressure.",
        "Store in a dry environment away from cold temperatures and excessive heat."
      ],
      safety: "• Personal protective equipment is required; read the label and relevant Material Safety Data Sheet before use.\n• Handle with care as an acid-type material.\n• Silica, organics and calcium sulphate normally do not respond to acid treatment; use a suitable two-stage alkaline-then-acid cleaning process where required.",
      badge: "Descaling"
    }),
    createCatalogChemical({
      id: "lutropur-msa-boiler",
      name: "Lutropur MSA",
      tradeName: "Lutropur MSA",
      formula: "",
      category: "boiler",
      categoryName: "Boiler Water",
      purpose: "High-purity methanesulfonic acid (MSA) in water for industrial water treatment and descaling applications.",
      application: "Used as an acid component in boiler, cooling-water and reverse-osmosis treatment processes where a clear, low-impurity acid is required.",
      dosageRange: "Dose according to the specific treatment process and water chemistry; determine the required dosage with the Aqua Care representative.",
      tdsLink: "tds/lutropur-msa.pdf",
      specs: [
        { parameter: "Chemical nature", value: "Methanesulfonic acid in water" },
        { parameter: "Molecular formula", value: "CH3SO3H" },
        { parameter: "Molar mass", value: "96.11 g/mol" },
        { parameter: "Physical form", value: "Clear, colorless, odorless liquid" },
        { parameter: "Concentration", value: "69.5–70.5%" },
        { parameter: "Sulphate content", value: "<50 ppm" },
        { parameter: "Total chlorine content, including chloride", value: "<10 ppm" },
        { parameter: "Content of oxidizable components", value: "<5 ppm" },
        { parameter: "APHA color", value: "<10" },
        { parameter: "Density at 25 °C", value: "1.34–1.36 g/cm³" },
        { parameter: "Metal content", value: "<1 ppm" }
      ],
      handling: [
        "Store in the sealed original packaging under proper storage conditions.",
        "Shelf life is at least 48 months when stored properly.",
        "Handle with the precautions required for chemical products and follow the latest Safety Data Sheet.",
        "Determine suitability for the intended process by testing under actual operating conditions."
      ],
      safety: "• Use the product only for its intended purpose and follow current chemical-handling practices.\n• Read and follow the latest Safety Data Sheet for detailed safety, labeling and handling information.\n• Avoid exposure and use suitable personal protective equipment when handling the product.",
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
      purpose: "High-purity methanesulfonic acid (MSA) in water for industrial water treatment and descaling applications.",
      application: "Used as an acid component in boiler, cooling-water and reverse-osmosis treatment processes where a clear, low-impurity acid is required.",
      dosageRange: "Dose according to the specific treatment process and water chemistry; determine the required dosage with the Aqua Care representative.",
      tdsLink: "tds/lutropur-msa.pdf",
      specs: [
        { parameter: "Chemical nature", value: "Methanesulfonic acid in water" },
        { parameter: "Molecular formula", value: "CH3SO3H" },
        { parameter: "Molar mass", value: "96.11 g/mol" },
        { parameter: "Physical form", value: "Clear, colorless, odorless liquid" },
        { parameter: "Concentration", value: "69.5–70.5%" },
        { parameter: "Sulphate content", value: "<50 ppm" },
        { parameter: "Total chlorine content, including chloride", value: "<10 ppm" },
        { parameter: "Content of oxidizable components", value: "<5 ppm" },
        { parameter: "APHA color", value: "<10" },
        { parameter: "Density at 25 °C", value: "1.34–1.36 g/cm³" },
        { parameter: "Metal content", value: "<1 ppm" }
      ],
      handling: [
        "Store in the sealed original packaging under proper storage conditions.",
        "Shelf life is at least 48 months when stored properly.",
        "Handle with the precautions required for chemical products and follow the latest Safety Data Sheet.",
        "Determine suitability for the intended process by testing under actual operating conditions."
      ],
      safety: "• Use the product only for its intended purpose and follow current chemical-handling practices.\n• Read and follow the latest Safety Data Sheet for detailed safety, labeling and handling information.\n• Avoid exposure and use suitable personal protective equipment when handling the product.",
      badge: "Cooling Water"
    }),
    createCatalogChemical({
      id: "aquaclean-ro-64",
      name: "Aquaclean RO 64",
      tradeName: "Aquaclean RO 64",
      formula: "",
      category: "ro",
      categoryName: "Reverse Osmosis (RO)",
      purpose: "Powder membrane cleaning compound for removing colloidal and other organic matter from reverse osmosis, nano-filtration and ultra-filtration membranes.",
      application: "Suitable for polyamide thin-film composite and cellulose acetate membranes. Use according to the membrane manufacturer's limits for pH, temperature, flow rate and differential pressure.",
      dosageRange: "Prepare a 1.0–2.5% cleaning solution by volume with chlorine-free product water and add sodium hydroxide to achieve pH 10.5–11.5. A typical cleaning cycle is 2–4 hours; heavy fouling may require overnight soaking.",
      tdsLink: "tds/aquaclean-ro-64.pdf",
      specs: [
        { parameter: "Product form", value: "Powder" },
        { parameter: "Membrane compatibility", value: "Polyamide thin-film composite and cellulose acetate" },
        { parameter: "Cleaning solution concentration", value: "1.0–2.5% by volume" },
        { parameter: "Cleaning solution water", value: "Chlorine-free product water" },
        { parameter: "Cleaning solution pH", value: "10.5–11.5 with sodium hydroxide addition" },
        { parameter: "Typical cleaning cycle", value: "2–4 hours" }
      ],
      handling: [
        "Use warm cleaning solutions only within the limits imposed by the membrane manufacturer.",
        "For heavily fouled membranes, use short recirculation and soaking periods of approximately 15 minutes each.",
        "Rinse membranes with good quality water after cleaning to remove residual product.",
        "Discard product water for the first 15–20 minutes after returning the plant to service, or until free of cleaning solution."
      ],
      safety: "• May cause irritation to skin and eyes; avoid eye contact and prolonged or repeated skin contact.\n• Avoid breathing dust and do not take internally.\n• For skin contact, wash with soap and water.\n• For eye contact, immediately irrigate with copious amounts of water for at least 15 minutes and seek medical advice.\n• Remove contaminated clothing and wash before reuse.\n• Store drums in a dry area and replace the lid after use.\n• Suggested in-plant storage limit is two years.",
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
      purpose: "High-purity methanesulfonic acid (MSA) in water for industrial water treatment and descaling applications.",
      application: "Used as an acid component in boiler, cooling-water and reverse-osmosis treatment processes where a clear, low-impurity acid is required.",
      dosageRange: "Dose according to the specific treatment process and water chemistry; determine the required dosage with the Aqua Care representative.",
      tdsLink: "tds/lutropur-msa.pdf",
      specs: [
        { parameter: "Chemical nature", value: "Methanesulfonic acid in water" },
        { parameter: "Molecular formula", value: "CH3SO3H" },
        { parameter: "Molar mass", value: "96.11 g/mol" },
        { parameter: "Physical form", value: "Clear, colorless, odorless liquid" },
        { parameter: "Concentration", value: "69.5–70.5%" },
        { parameter: "Sulphate content", value: "<50 ppm" },
        { parameter: "Total chlorine content, including chloride", value: "<10 ppm" },
        { parameter: "Content of oxidizable components", value: "<5 ppm" },
        { parameter: "APHA color", value: "<10" },
        { parameter: "Density at 25 °C", value: "1.34–1.36 g/cm³" },
        { parameter: "Metal content", value: "<1 ppm" }
      ],
      handling: [
        "Store in the sealed original packaging under proper storage conditions.",
        "Shelf life is at least 48 months when stored properly.",
        "Handle with the precautions required for chemical products and follow the latest Safety Data Sheet.",
        "Determine suitability for the intended process by testing under actual operating conditions."
      ],
      safety: "• Use the product only for its intended purpose and follow current chemical-handling practices.\n• Read and follow the latest Safety Data Sheet for detailed safety, labeling and handling information.\n• Avoid exposure and use suitable personal protective equipment when handling the product.",
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
