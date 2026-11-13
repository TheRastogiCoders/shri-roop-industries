export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL?.trim() ||
  "https://shriroopindustries.com"
).replace(/\/$/, "");

export const company = {
  legalName: "Shri Roop Industries Pvt. Ltd.",
  shortName: "Shri Roop Industries",
  hindiName: "श्री रूप इंडस्ट्रीज प्राइवेट लिमिटेड",
  description:
    "Shri Roop Industries Pvt. Ltd. deals in copper, aluminium, and brass scrap from its yard in Samalkha, District Panipat, with sales offices in Delhi.",
  streetAddress:
    "Khewat No. 1193, Khasra No. 70, NH-44, Near Different Gym, Opposite Geeta Ashram, GT Karnal Road",
  locality: "Samalkha",
  district: "Panipat",
  region: "Haryana",
  postalCode: "132101",
  country: "India",
  countryCode: "IN",
  phoneDisplay: "+91 99278 48855",
  phoneTel: "+919927848855",
  phoneWhatsApp: "919927848855",
  email: "parth@rastogiassociates.com",
} as const;

export const brochure = {
  href: "/docs/shree-roop-industries-brochure.pdf",
  label: "Company brochure",
  filename: "Shree-Roop-Industries-Brochure.pdf",
  pages: 4,
  summary:
    "Official firm brochure: copper, aluminium, and brass grades, Samalkha yard, Delhi sales offices, phone, and email.",
} as const;

export const offices = [
  {
    id: "samalkha",
    label: "Samalkha yard — visit",
    lines: [
      "Khewat No. 1193, Khasra No. 70",
      "NH-44, Near Different Gym",
      "Opposite Geeta Ashram",
      "GT Karnal Road, Samalkha",
      "District Panipat, Haryana — 132101",
      "India",
    ],
    mapsQuery:
      "Near Different Gym, Opposite Geeta Ashram, GT Karnal Road, NH-44, Samalkha, Panipat, Haryana 132101",
  },
  {
    id: "nsp",
    label: "Sales Office",
    lines: ["NSP", "Sales Office", "Delhi — 110034", "India"],
    mapsQuery: "NSP Netaji Subhash Place, Delhi 110034",
  },
  {
    id: "rama-vihar",
    label: "Office",
    lines: ["Rama Vihar", "New Delhi — 110081", "India"],
    mapsQuery: "Rama Vihar, New Delhi 110081",
  },
] as const;

export const addressLines = offices.flatMap((office) => office.lines);

export const mapsQuery = offices[0].mapsQuery;

export function mapsSearchUrl(query: string = mapsQuery) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
}

export function mapsEmbedUrl(query: string = mapsQuery) {
  return `https://maps.google.com/maps?q=${encodeURIComponent(query)}&z=16&hl=en&output=embed`;
}

export const nav = [
  { href: "/materials", label: "Materials" },
  { href: "/grades", label: "Grades" },
  { href: "/process", label: "Process" },
  { href: "/industries", label: "Industries" },
  { href: "/faq", label: "FAQ" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

export type MaterialTone = "copper" | "alum" | "brass" | "mixed";

export const purity = "99.9%+" as const;

export const ticker = [
  "Copper ingot 99.9%+",
  "Copper wire 99.9%+",
  "Aluminium ingot 99.9%+",
  "Millberry",
  "Birch",
  "Candy copper",
  "Telewire",
  "Enameled wire",
  "Aluminium extrusion",
  "Brass",
] as const;

export const samples = [
  {
    metal: "Copper ingot",
    tone: "copper",
    line: `Purity ${purity}. Cast copper for melt and trade.`,
    image: "/images/copper-ingot.jpg",
    alt: "Stacked copper metal ingots",
  },
  {
    metal: "Copper wire",
    tone: "copper",
    line: `Purity ${purity}. Bare bright wire and conductor.`,
    image: "/images/stock-copper-wire.jpg",
    alt: "Bare bright copper wire scrap",
  },
  {
    metal: "Aluminium ingot",
    tone: "alum",
    line: `Purity ${purity}. Cast aluminium for foundry use.`,
    image: "/images/aluminium-ingot.jpg",
    alt: "Stacked aluminium metal ingots",
  },
] as const;

export const products = [
  {
    id: "copper-ingot",
    name: "Copper ingot",
    metal: "Copper",
    tone: "copper" as MaterialTone,
    purity,
    image: "/images/copper-ingot.jpg",
    alt: "Stacked copper metal ingots",
    summary: "Cast copper ingots for melting shops, traders, and foundry feed.",
    detail:
      "Copper ingots from the yard for parties that need a clean melt. Supplied at 99.9%+ purity. Weight is taken at Panipat; the lot is the metal on the floor.",
  },
  {
    id: "copper-wire",
    name: "Copper wire",
    metal: "Copper",
    tone: "copper" as MaterialTone,
    purity,
    image: "/images/stock-copper-wire.jpg",
    alt: "Bare bright copper wire scrap ready for trade",
    summary: "Bare bright copper wire and conductor for cable, winding, and trade.",
    detail:
      "Copper wire in coils and straight lengths — millberry and related bright wire forms. Supplied at 99.9%+ purity. Insulation, enamel, or attachments change the grade and are noted at inspection.",
  },
  {
    id: "aluminium-ingot",
    name: "Aluminium ingot",
    metal: "Aluminium",
    tone: "alum" as MaterialTone,
    purity,
    image: "/images/aluminium-ingot.jpg",
    alt: "Stacked aluminium metal ingots",
    summary: "Cast aluminium ingots for foundries, fabricators, and melting shops.",
    detail:
      "Aluminium ingots for a melt that needs a known feed. Supplied at 99.9%+ purity. Paint, iron inserts, and mixed alloy lots are graded separately from this form.",
  },
] as const;

export const gallery = [
  {
    src: "/images/stock-copper-sheets.jpg",
    alt: "Stacks of copper sheets on pallets at an industrial yard",
    caption: "Copper sheet",
  },
  {
    src: "/images/stock-copper-wire.jpg",
    alt: "Bare bright copper wire scrap ready for recycling",
    caption: "Millberry",
  },
  {
    src: "/images/copper-ingot.jpg",
    alt: "Stacked copper metal ingots",
    caption: "Copper ingot",
  },
  {
    src: "/images/stock-copper-fittings.jpg",
    alt: "Polished copper pipe fittings",
    caption: "Copper fittings",
  },
  {
    src: "/images/aluminium-ingot.jpg",
    alt: "Stacked aluminium metal ingots",
    caption: "Aluminium ingot",
  },
  {
    src: "/images/stock-aluminium-cans.jpg",
    alt: "Crushed aluminium beverage cans baled for recycling",
    caption: "UBC cans",
  },
  {
    src: "/images/stock-metal-pipes.jpg",
    alt: "Stacked metal pipes in a scrap yard",
    caption: "Pipe scrap",
  },
  {
    src: "/images/brass-scrap.jpg",
    alt: "Yellow brass taps and fittings",
    caption: "Brass",
  },
  {
    src: "/images/stock-scrap-yard.jpg",
    alt: "Corroded metal pipe scrap in a yard pile",
    caption: "Yard lot",
  },
  {
    src: "/images/stock-industrial-metal.jpg",
    alt: "Welder working metal in an industrial shop",
    caption: "Fabrication",
  },
  {
    src: "/images/stock-factory-metal.jpg",
    alt: "Industrial warehouse floor with overhead crane",
    caption: "Works",
  },
  {
    src: "/images/stock-metal-cans.jpg",
    alt: "Used metal cans collected for recycling",
    caption: "Cans",
  },
] as const;

export const yardPhoto = {
  src: "/images/stock-scrap-yard.jpg",
  alt: "Metal scrap piled at the Panipat yard",
} as const;

export const dealSteps = [
  {
    number: "01",
    title: "Offer",
    text: "Say what the metal is and roughly how much there is. A photograph can start the conversation. The grade is decided from the lot itself.",
  },
  {
    number: "02",
    title: "Inspection",
    text: "The yard looks at the metal, what is attached to it, and whether the lot is one form or several.",
  },
  {
    number: "03",
    title: "Weighment",
    text: "Weight is taken at the yard. The quantity in the settlement is that weight.",
  },
  {
    number: "04",
    title: "Settlement",
    text: "The rate is agreed for the lot that was seen and weighed, and the material moves on.",
  },
] as const;

export const processNotes = [
  {
    title: "Photographs help",
    text: "A clear picture of the pile can start the talk. It does not fix a grade or a rate. That waits for the metal on the floor.",
  },
  {
    title: "One name, many lots",
    text: "Two loads called millberry can still be different metal. Paint, tin, iron, and burning change the grade even when the word is the same.",
  },
  {
    title: "No card rate",
    text: "This website does not list prices. Copper, aluminium, and brass move with the day, and the yard prices what it can see and weigh.",
  },
] as const;

export const gradeTerms = [
  {
    name: "Copper ingot",
    metal: "Copper",
    text: `Cast copper ingots for melt and trade. Purity ${purity}.`,
  },
  {
    name: "Copper wire",
    metal: "Copper",
    text: `Bare bright copper wire and conductor. Purity ${purity}.`,
  },
  {
    name: "Millberry",
    metal: "Copper",
    text: `Bare, bright, unalloyed copper wire with no insulation and no heavy burning. Purity ${purity}.`,
  },
  {
    name: "Birch",
    metal: "Copper",
    text: `Unalloyed copper wire that is not bright and bare — light oxidation, mixed sizes, or small attachments. Purity ${purity}.`,
  },
  {
    name: "Candy",
    metal: "Copper",
    text: `Heavy copper: busbar, plate, and clippings. Purity ${purity} when free of heavy attachments.`,
  },
  {
    name: "Telewire",
    metal: "Copper",
    text: `Copper conductor from telephone and communication cable. Purity ${purity} on the recovered copper.`,
  },
  {
    name: "Armature",
    metal: "Copper",
    text: `Copper recovered from motor armatures and stator windings. Purity ${purity}.`,
  },
  {
    name: "Enameled wire",
    metal: "Copper",
    text: `Winding wire with the enamel still on it. Copper purity ${purity}.`,
  },
  {
    name: "Insulated cable",
    metal: "Copper",
    text: `Copper still inside plastic or rubber. Recovered copper at purity ${purity}.`,
  },
  {
    name: "Aluminium ingot",
    metal: "Aluminium",
    text: `Cast aluminium ingots for foundry and melt. Purity ${purity}.`,
  },
  {
    name: "Extrusion",
    metal: "Aluminium",
    text: `Window and door profiles and other sections. Purity ${purity}.`,
  },
  {
    name: "Used beverage cans",
    metal: "Aluminium",
    text: `Drinks cans, loose or baled. Aluminium purity ${purity} when free of contamination.`,
  },
  {
    name: "Yellow brass",
    metal: "Brass",
    text: `Brass solids and hardware. Purity ${purity}.`,
  },
  {
    name: "Mixed",
    metal: "Non-ferrous",
    text: "Copper, aluminium, and brass together, or a load that still needs sorting before a grade is fixed.",
  },
] as const;

export const faqs = [
  {
    question: "Do you publish copper or aluminium rates online?",
    answer:
      "No. A rate is fixed after the lot is seen and weighed at the yard in Panipat. Two lots with the same name can still be different metal.",
  },
  {
    question: "Can I send a photograph and get a firm price?",
    answer:
      "A photograph can start the conversation. It does not settle the grade or the rate. That waits for the metal on the floor.",
  },
  {
    question: "What metals does the yard take?",
    answer:
      "Copper ingots, copper wire, aluminium ingots, and related non-ferrous forms — millberry and other copper grades, cable, extrusion, cans, brass, and mixed lots. Products are supplied at 99.9%+ purity.",
  },
  {
    question: "What purity do you supply?",
    answer:
      "All products — copper ingot, copper wire, aluminium ingot, and the graded forms listed on the materials page — are supplied at 99.9%+ purity.",
  },
  {
    question: "What should I say before I bring a load?",
    answer:
      "The metal, the form or name you use, the condition, a rough quantity, and whether the lot is already at Panipat or still to be brought.",
  },
  {
    question: "Do you buy unsorted or mixed lots?",
    answer:
      "Yes. The yard will say whether a lot is sorted first or priced as mixed. That decision is made from the material itself.",
  },
  {
    question: "Where can I connect with you?",
    answer:
      "The yard is in Samalkha, District Panipat (GT Karnal Road, near Different Gym, opposite Geeta Ashram). Sales offices are at NSP, Delhi 110034, and Rama Vihar, New Delhi 110081. Call +91 99278 48855, email parth@rastogiassociates.com, or use the contact page.",
  },
  {
    question: "How do I send an enquiry?",
    answer:
      "Call +91 99278 48855, email parth@rastogiassociates.com, or use the enquiry slip on the contact page. Copy it or open it in WhatsApp to the same number.",
  },
] as const;

export const industries = [
  {
    title: "Cable and wire",
    text: "Bare copper, insulated cable, and aluminium conductor for works that draw wire or build cable.",
  },
  {
    title: "Transformers and motors",
    text: "Enameled winding wire and armature copper from coils, stators, and scrap motors.",
  },
  {
    title: "Rod and rolling",
    text: "Sorted wire and heavy copper for a melt that feeds rod and sheet.",
  },
  {
    title: "Engineering shops",
    text: "Busbar, plate, offcuts, and brass hardware from fabrication and maintenance.",
  },
  {
    title: "Foundries",
    text: "Cast aluminium, brass, and copper solids, judged on the floor before a rate is given.",
  },
  {
    title: "Fabricators",
    text: "Sheet, extrusion, and mixed offcuts from a job, taken as one lot or sorted first.",
  },
] as const;

export const parties = [
  {
    title: "Workshops and factories",
    text: "Offcuts, turnings, cable, and rejected sections from a job.",
  },
  {
    title: "Collectors and traders",
    text: "Copper, aluminium, and brass already gathered, whether sorted or still mixed.",
  },
  {
    title: "Buyers of scrap",
    text: "Traders and melting shops that take a graded non-ferrous lot.",
  },
] as const;

export const briefing = [
  {
    title: "Metal",
    text: "Copper, aluminium, or a mix. If you are unsure, say what the piece was used for.",
  },
  {
    title: "Form",
    text: "Millberry, birch, candy, cable, enameled wire, extrusion, cans, brass, or a mixed load.",
  },
  {
    title: "Condition",
    text: "Clean or painted, any iron or plastic attached, any burning or oil.",
  },
  {
    title: "Quantity",
    text: "A rough weight is enough: a few bags, a tempo, or a number of tonnes.",
  },
  {
    title: "Where it is",
    text: "Already at Panipat, or still to be brought to the yard.",
  },
] as const;

export const materialOptions = [
  "Copper ingot 99.9%+",
  "Copper wire 99.9%+",
  "Aluminium ingot 99.9%+",
  "Millberry copper",
  "Birch or mixed copper wire",
  "Candy / heavy copper",
  "Telewire",
  "Armature or enameled copper",
  "Insulated copper cable",
  "Aluminium scrap",
  "Brass",
  "Mixed scrap",
  "Not sure yet",
] as const;

export const materials: {
  id: string;
  index: string;
  name: string;
  tone: MaterialTone;
  image?: string;
  alt?: string;
  summary: string;
  detail: string;
  forms: { name: string; note: string; purity?: string }[];
}[] = [
  {
    id: "copper",
    index: "01",
    name: "Copper",
    tone: "copper",
    image: "/images/stock-copper-sheets.jpg",
    alt: "Stacks of copper sheets on pallets",
    summary: `Ingots, wire, millberry, birch, candy, cable, and windings — purity ${purity}.`,
    detail:
      `Copper from the yard includes cast ingots, bare wire, and the trade grades the floor still uses. All copper products are supplied at ${purity} purity. Millberry is not birch, and enameled wire is not bare cable — the lot in front of us decides the grade.`,
    forms: [
      {
        name: "Copper ingot",
        note: `Cast copper ingots for melting shops and traders. Clean feed for the furnace. Purity ${purity}.`,
        purity,
      },
      {
        name: "Copper wire",
        note: `Bare bright copper wire and conductor in coils or lengths. Purity ${purity}.`,
        purity,
      },
      {
        name: "Millberry",
        note: `Bare, bright, unalloyed copper wire. No insulation and no heavy burning. Purity ${purity}.`,
        purity,
      },
      {
        name: "Birch",
        note: `Unalloyed copper wire that is not bright and bare. Light oxidation or mixed sizes may still meet purity ${purity} once graded.`,
        purity,
      },
      {
        name: "Candy",
        note: `Heavy copper: busbar, plate, and clippings. Purity ${purity} when free of heavy attachments.`,
        purity,
      },
      {
        name: "Telewire",
        note: `Copper conductor from telephone and communication cable. Purity ${purity} on the recovered copper.`,
        purity,
      },
      {
        name: "Armature",
        note: `Copper from motor armatures and stator windings. Purity ${purity} after enamel and paper are allowed for.`,
        purity,
      },
      {
        name: "Enameled wire",
        note: `Winding wire with the enamel still on it. Copper content graded to purity ${purity}.`,
        purity,
      },
      {
        name: "Insulated cable",
        note: `Copper still inside plastic or rubber. Recovered copper at purity ${purity}.`,
        purity,
      },
      {
        name: "Turnings",
        note: `Borings from machine shops. Oil and iron fines are noted; copper purity ${purity} where the metal allows.`,
        purity,
      },
    ],
  },
  {
    id: "aluminium",
    index: "02",
    name: "Aluminium",
    tone: "alum",
    image: "/images/stock-aluminium-cans.jpg",
    alt: "Crushed aluminium beverage cans baled for recycling",
    summary: `Ingots, extrusion, sheet, cast, cans, and conductor — purity ${purity}.`,
    detail:
      `Aluminium from the yard includes cast ingots and the forms traders bring in — sections, sheet, utensils, castings, cans, and cable. All aluminium products are supplied at ${purity} purity. Paint, iron inserts, and steel cores are graded with the lot.`,
    forms: [
      {
        name: "Aluminium ingot",
        note: `Cast aluminium ingots for foundries and melting shops. Clean feed for the melt. Purity ${purity}.`,
        purity,
      },
      {
        name: "Extrusion",
        note: `Window and door profiles and other sections. Purity ${purity} on the aluminium metal.`,
        purity,
      },
      {
        name: "Sheet and utensil",
        note: `Sheet offcuts, circles, and aluminium utensils. Purity ${purity}.`,
        purity,
      },
      {
        name: "Cast aluminium",
        note: `Castings, wheels, and heavier pieces. Purity ${purity} where alloy and inserts allow.`,
        purity,
      },
      {
        name: "Used beverage cans",
        note: `Drinks cans, loose or baled. Aluminium purity ${purity} when free of steel and rubbish.`,
        purity,
      },
      {
        name: "Wire and cable",
        note: `Aluminium conductor and cable. Purity ${purity} on the aluminium; steel cores are graded separately.`,
        purity,
      },
    ],
  },
  {
    id: "brass",
    index: "03",
    name: "Brass",
    tone: "brass",
    image: "/images/stock-copper-fittings.jpg",
    alt: "Metal pipe fittings in copper and brass tones",
    summary: `Hardware, yellow brass solids, and turnings — purity ${purity}.`,
    detail:
      `Brass comes with the copper trade and on its own: fittings, hardware, and machine turnings. All brass products are supplied at ${purity} purity. Iron and steel stuck to the brass are allowed for on the floor, not after the weight is agreed.`,
    forms: [
      {
        name: "Yellow brass solids",
        note: `Clean brass pieces without a heavy load of iron. Purity ${purity}.`,
        purity,
      },
      {
        name: "Brass hardware",
        note: `Taps, valves, and other fittings. Purity ${purity} on the brass metal.`,
        purity,
      },
      {
        name: "Brass turnings",
        note: `Machine turnings. Oil and steel fines are noted; brass purity ${purity}.`,
        purity,
      },
      {
        name: "Mixed brass",
        note: `A lot that is brass but not one clean form. Graded to purity ${purity} where the metal allows.`,
        purity,
      },
    ],
  },
  {
    id: "mixed",
    index: "04",
    name: "Mixed scrap",
    tone: "mixed",
    image: "/images/stock-metal-pipes.jpg",
    alt: "Mixed metal pipe scrap stacked in a yard",
    summary: "Non-ferrous lots that still need a decision on the floor.",
    detail:
      "Not every load is one metal. Copper, aluminium, and brass sometimes arrive together, or as workshop arisings that still need a decision. Once sorted, each metal is graded toward 99.9%+ purity where the lot allows. The yard will say whether a lot is sorted or priced as mixed.",
    forms: [
      {
        name: "Mixed non-ferrous",
        note: "Copper, aluminium, and brass in one load, or a pile that has not been separated.",
      },
      {
        name: "Industrial offcuts",
        note: "Factory and workshop arisings, looked at piece by piece when the mix requires it.",
      },
      {
        name: "Unsorted lots",
        note: "A load that still needs a decision. The yard sorts it, or prices it as mixed, and says which.",
      },
    ],
  },
];

export const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "Organization"],
  "@id": `${siteUrl}/#business`,
  name: company.legalName,
  alternateName: [company.shortName, company.hindiName],
  description: company.description,
  url: siteUrl,
  telephone: company.phoneTel,
  email: company.email,
  logo: `${siteUrl}/images/shri-roop-logo-v3.png`,
  image: `${siteUrl}/images/shri-roop-logo-v3.png`,
  address: {
    "@type": "PostalAddress",
    streetAddress: company.streetAddress,
    addressLocality: company.locality,
    addressRegion: company.region,
    postalCode: company.postalCode,
    addressCountry: company.countryCode,
  },
  areaServed: [
    {
      "@type": "AdministrativeArea",
      name: "Panipat, Haryana",
    },
    {
      "@type": "City",
      name: "Samalkha",
    },
    {
      "@type": "City",
      name: "Delhi",
    },
    {
      "@type": "City",
      name: "New Delhi",
    },
  ],
  department: offices.map((office) => {
    const place =
      office.id === "samalkha"
        ? {
            locality: "Samalkha",
            region: "Haryana",
            postalCode: "132101",
          }
        : office.id === "nsp"
          ? {
              locality: "Delhi",
              region: "Delhi",
              postalCode: "110034",
            }
          : {
              locality: "New Delhi",
              region: "Delhi",
              postalCode: "110081",
            };

    return {
      "@type": "LocalBusiness",
      name: `${company.shortName} · ${office.label}`,
      address: {
        "@type": "PostalAddress",
        streetAddress: office.lines.slice(0, -2).join(", "),
        addressLocality: place.locality,
        addressRegion: place.region,
        postalCode: place.postalCode,
        addressCountry: company.countryCode,
      },
      telephone: company.phoneTel,
      hasMap: mapsSearchUrl(office.mapsQuery),
    };
  }),
  hasMap: mapsSearchUrl(),
  associatedMedia: {
    "@type": "DigitalDocument",
    name: brochure.label,
    description: brochure.summary,
    url: `${siteUrl}${brochure.href}`,
    encodingFormat: "application/pdf",
  },
  knowsAbout: [
    "Copper ingot",
    "Copper wire",
    "Aluminium ingot",
    "99.9% purity copper",
    "99.9% purity aluminium",
    "Copper scrap",
    "Millberry copper",
    "Birch copper",
    "Candy copper",
    "Aluminium scrap",
    "Brass scrap",
    "Non-ferrous scrap",
  ],
};
