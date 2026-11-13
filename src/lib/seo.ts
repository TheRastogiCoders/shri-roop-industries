import {
  briefing,
  brochure,
  company,
  dealSteps,
  faqs,
  gradeTerms,
  industries,
  materials,
  offices,
  parties,
  processNotes,
  siteUrl,
} from "./site";

export { siteUrl };

export type SitePage = {
  path: string;
  mdPath: string;
  title: string;
  description: string;
  keywords: string[];
  changeFrequency: "weekly" | "monthly";
  priority: number;
};

export const pages: SitePage[] = [
  {
    path: "/",
    mdPath: "/index.md",
    title: "Shri Roop Industries · Copper & Aluminium Scrap",
    description: company.description,
    keywords: [
      "copper scrap Panipat",
      "aluminium scrap Panipat",
      "brass scrap Haryana",
      "millberry copper",
      "non-ferrous scrap yard",
      "Shri Roop Industries",
    ],
    changeFrequency: "weekly",
    priority: 1,
  },
  {
    path: "/materials",
    mdPath: "/materials.md",
    title: "Materials",
    description:
      "Copper ingot, copper wire, and aluminium ingot at 99.9%+ purity, plus millberry, birch, candy, cable, extrusion, and brass from Shri Roop Industries, Panipat.",
    keywords: [
      "copper ingot 99.9%",
      "copper wire 99.9%",
      "aluminium ingot 99.9%",
      "millberry copper",
      "birch copper",
      "candy copper",
      "aluminium extrusion scrap",
      "brass scrap",
    ],
    changeFrequency: "monthly",
    priority: 0.9,
  },
  {
    path: "/grades",
    mdPath: "/grades.md",
    title: "Grade Names",
    description:
      "Millberry, birch, candy, telewire, armature, aluminium extrusion, cans, and brass — the names used for non-ferrous scrap at Shri Roop Industries.",
    keywords: [
      "millberry meaning",
      "birch copper grade",
      "candy copper scrap",
      "scrap grade names India",
    ],
    changeFrequency: "monthly",
    priority: 0.85,
  },
  {
    path: "/process",
    mdPath: "/process.md",
    title: "How a Deal Works",
    description:
      "How Shri Roop Industries receives, inspects, weighs, and settles copper, aluminium, and brass scrap at its Panipat yard.",
    keywords: [
      "scrap yard weighment",
      "copper scrap inspection",
      "how scrap deal works",
      "Panipat scrap process",
    ],
    changeFrequency: "monthly",
    priority: 0.85,
  },
  {
    path: "/industries",
    mdPath: "/industries.md",
    title: "Industries",
    description:
      "Copper, aluminium, and brass scrap from Shri Roop Industries moves into cable, wire, motor, foundry, and fabrication trades. The yard is at Panipat.",
    keywords: [
      "copper scrap for cable works",
      "motor winding copper scrap",
      "foundry non-ferrous scrap",
      "fabrication offcuts Panipat",
    ],
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/faq",
    mdPath: "/faq.md",
    title: "FAQ",
    description:
      "Common questions about rates, photographs, metals, mixed lots, and the Shri Roop Industries yard in Panipat.",
    keywords: [
      "copper scrap rate online",
      "scrap yard FAQ Panipat",
      "mixed non-ferrous lots",
    ],
    changeFrequency: "monthly",
    priority: 0.75,
  },
  {
    path: "/about",
    mdPath: "/about.md",
    title: "About",
    description:
      "Shri Roop Industries Pvt. Ltd. deals in copper, aluminium, and brass scrap from its yard in Samalkha, District Panipat, with sales offices in Delhi.",
    keywords: [
      "Shri Roop Industries Pvt. Ltd.",
      "scrap yard Samalkha",
      "copper scrap Panipat",
      "Delhi sales office",
    ],
    changeFrequency: "monthly",
    priority: 0.7,
  },
  {
    path: "/contact",
    mdPath: "/contact.md",
    title: "Contact",
    description:
      "Yard on GT Karnal Road, Samalkha, District Panipat, plus sales offices at NSP, Delhi and Rama Vihar, New Delhi.",
    keywords: [
      "Shri Roop Industries address",
      "Samalkha scrap yard",
      "GT Karnal Road NH-44 Panipat",
      "NSP Delhi sales office",
      "Rama Vihar New Delhi office",
    ],
    changeFrequency: "monthly",
    priority: 0.8,
  },
];

export function absoluteUrl(path = "/") {
  if (path === "/") return `${siteUrl}/`;
  return `${siteUrl}${path.startsWith("/") ? path : `/${path}`}`;
}

export function getPage(path: string) {
  return pages.find((page) => page.path === path);
}

function markdownEscape(text: string) {
  return text.replace(/\r\n/g, "\n").trim();
}

function bulletList(items: string[]) {
  return items.map((item) => `- ${item}`).join("\n");
}

export function buildLlmsTxt() {
  const pageLinks = pages
    .map(
      (page) =>
        `- [${page.title}](${absoluteUrl(page.mdPath)}): ${page.description}`,
    )
    .join("\n");

  return markdownEscape(`# ${company.legalName}

> ${company.description}

${company.shortName} (${company.hindiName}) deals in copper, aluminium, and brass scrap from its yard in Samalkha, District Panipat, with sales offices at NSP, Delhi and Rama Vihar, New Delhi. Grades are decided from the lot on the floor after inspection and weighment.

Prefer the Markdown pages linked below over scraping the HTML site. For a single long context, use [llms-full.txt](${absoluteUrl("/llms-full.txt")}).

## Pages

${pageLinks}

## Company

- [Contact and offices](${absoluteUrl("/contact.md")}): Samalkha yard, NSP sales office, Rama Vihar office, and how to enquire.
- [About](${absoluteUrl("/about.md")}): Company form and how the yard works.
- [Brochure PDF](${absoluteUrl(brochure.href)}): ${brochure.summary}

## Optional

- [Full site digest](${absoluteUrl("/llms-full.txt")}): One file with materials, industries, deal steps, and address.
- [Sitemap](${absoluteUrl("/sitemap.xml")})
- [Robots](${absoluteUrl("/robots.txt")})
`);
}

export function buildLlmsFullTxt() {
  const materialBlocks = materials
    .map((material) => {
      const forms = material.forms
        .map((form) => `  - **${form.name}**: ${form.note}`)
        .join("\n");
      return `### ${material.name}\n\n${material.summary}\n\n${material.detail}\n\n${forms}`;
    })
    .join("\n\n");

  const industryBlocks = industries
    .map((item) => `- **${item.title}**: ${item.text}`)
    .join("\n");

  const partyBlocks = parties
    .map((item) => `- **${item.title}**: ${item.text}`)
    .join("\n");

  const stepBlocks = dealSteps
    .map((step) => `${step.number}. **${step.title}** — ${step.text}`)
    .join("\n");

  const briefingBlocks = briefing
    .map((item) => `- **${item.title}**: ${item.text}`)
    .join("\n");

  return markdownEscape(`# ${company.legalName}

> ${company.description}

## Identity

- Legal name: ${company.legalName}
- Hindi: ${company.hindiName}
- Short name: ${company.shortName}
- Location: ${company.locality}, ${company.region}, ${company.country} ${company.postalCode}

## Offices

${offices
  .map(
    (office) =>
      `### ${office.label}\n\n${office.lines.map((line) => `- ${line}`).join("\n")}`,
  )
  .join("\n\n")}

## Phone

- ${company.phoneDisplay}

## Email

- ${company.email}

## Brochure

- [${brochure.label}](${absoluteUrl(brochure.href)}): ${brochure.summary}

## Materials

${materialBlocks}

## Industries and parties

### Where metal goes

${industryBlocks}

### Who brings metal

${partyBlocks}

## Grade names

${gradeTerms.map((term) => `- **${term.name}** (${term.metal}): ${term.text}`).join("\n")}

## How a deal works

${stepBlocks}

### Process notes

${processNotes.map((n) => `- **${n.title}**: ${n.text}`).join("\n")}

## What to say in an enquiry

${briefingBlocks}

## FAQ

${faqs.map((item) => `### ${item.question}\n\n${item.answer}`).join("\n\n")}

## Site map for agents

${pages.map((page) => `- [${page.title}](${absoluteUrl(page.mdPath)}) — HTML: ${absoluteUrl(page.path)}`).join("\n")}
`);
}

export function buildHumansTxt() {
  return `/* TEAM */
Company: ${company.legalName}
Location: ${company.locality}, ${company.region}, ${company.country}

/* SITE */
Standards: HTML5, Markdown llms.txt
Language: English (en-IN), Hindi name present
Doctype: HTML5
`;
}

function pageHeader(page: SitePage) {
  return `# ${page.title}

> ${page.description}

Source HTML: ${absoluteUrl(page.path)}
`;
}

export function buildHomeMarkdown() {
  const page = getPage("/")!;
  return markdownEscape(`${pageHeader(page)}
${company.shortName} buys and supplies non-ferrous scrap from a yard in Panipat. Millberry and other copper grades, aluminium, and brass, in the forms a workshop or a trader actually has.

## Materials overview

${materials.map((m) => `- **${m.name}**: ${m.summary}`).join("\n")}

## Deal steps

${dealSteps.map((s) => `- **${s.title}**: ${s.text}`).join("\n")}

## Related

- [Materials](${absoluteUrl("/materials.md")})
- [Grades](${absoluteUrl("/grades.md")})
- [Process](${absoluteUrl("/process.md")})
- [Industries](${absoluteUrl("/industries.md")})
- [FAQ](${absoluteUrl("/faq.md")})
- [About](${absoluteUrl("/about.md")})
- [Contact](${absoluteUrl("/contact.md")})
- [llms.txt](${absoluteUrl("/llms.txt")})
`);
}

export function buildGradesMarkdown() {
  const page = getPage("/grades")!;
  return markdownEscape(`${pageHeader(page)}
## Grade glossary

${gradeTerms.map((term) => `- **${term.name}** (${term.metal}): ${term.text}`).join("\n")}

## Related

- [Materials](${absoluteUrl("/materials.md")})
- [Process](${absoluteUrl("/process.md")})
- [Contact](${absoluteUrl("/contact.md")})
`);
}

export function buildProcessMarkdown() {
  const page = getPage("/process")!;
  return markdownEscape(`${pageHeader(page)}
## Steps

${dealSteps.map((s) => `- **${s.title}**: ${s.text}`).join("\n")}

## Notes

${processNotes.map((n) => `- **${n.title}**: ${n.text}`).join("\n")}

## What to say before you come

${briefing.map((item) => `- **${item.title}**: ${item.text}`).join("\n")}
`);
}

export function buildFaqMarkdown() {
  const page = getPage("/faq")!;
  return markdownEscape(`${pageHeader(page)}
${faqs.map((item) => `## ${item.question}\n\n${item.answer}`).join("\n\n")}
`);
}

export function buildMaterialsMarkdown() {
  const page = getPage("/materials")!;
  const body = materials
    .map((material) => {
      const forms = material.forms
        .map((form) => `- **${form.name}**: ${form.note}`)
        .join("\n");
      return `## ${material.name}\n\n${material.detail}\n\n${forms}`;
    })
    .join("\n\n");

  return markdownEscape(`${pageHeader(page)}
${body}

## Briefing for an enquiry

${briefing.map((item) => `- **${item.title}**: ${item.text}`).join("\n")}
`);
}

export function buildIndustriesMarkdown() {
  const page = getPage("/industries")!;
  return markdownEscape(`${pageHeader(page)}
## Where it goes

${industries.map((item) => `- **${item.title}**: ${item.text}`).join("\n")}

## Who brings metal

${parties.map((item) => `- **${item.title}**: ${item.text}`).join("\n")}
`);
}

export function buildAboutMarkdown() {
  const page = getPage("/about")!;
  return markdownEscape(`${pageHeader(page)}
${company.shortName} deals in copper and aluminium scrap from the Samalkha yard, with sales offices at NSP, Delhi and Rama Vihar, New Delhi.

## Brochure

- [${brochure.label}](${absoluteUrl(brochure.href)}): ${brochure.summary}

## Parties the yard works with

${parties.map((item) => `- **${item.title}**: ${item.text}`).join("\n")}

## How a deal works

${dealSteps.map((s) => `- **${s.title}**: ${s.text}`).join("\n")}
`);
}

export function buildContactMarkdown() {
  const page = getPage("/contact")!;
  const officeBlocks = offices
    .map(
      (office) =>
        `### ${office.label}\n\n${bulletList([...office.lines])}`,
    )
    .join("\n\n");
  return markdownEscape(`${pageHeader(page)}
## Yard and offices

${officeBlocks}

## Phone

- ${company.phoneDisplay}
- Tel: ${company.phoneTel}

## Email

- ${company.email}

## Brochure

- [${brochure.label}](${absoluteUrl(brochure.href)}): ${brochure.summary}

## Enquiry notes

${briefing.map((item) => `- **${item.title}**: ${item.text}`).join("\n")}
`);
}

export const markdownBuilders: Record<string, () => string> = {
  "/": buildHomeMarkdown,
  "/materials": buildMaterialsMarkdown,
  "/grades": buildGradesMarkdown,
  "/process": buildProcessMarkdown,
  "/industries": buildIndustriesMarkdown,
  "/faq": buildFaqMarkdown,
  "/about": buildAboutMarkdown,
  "/contact": buildContactMarkdown,
};

export function textResponse(body: string, contentType = "text/plain; charset=utf-8") {
  return new Response(body, {
    headers: {
      "Content-Type": contentType,
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}

export function markdownResponse(body: string) {
  return textResponse(body, "text/markdown; charset=utf-8");
}
