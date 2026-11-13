import Link from "next/link";
import { BrochureLink } from "@/components/BrochureLink";
import { company, nav, offices, purity } from "@/lib/site";
import { Logo } from "./Logo";

const explore = [
  { href: "/", label: "Home" },
  ...nav.filter((link) => link.href !== "/contact"),
  { href: "/contact", label: "Contact" },
];

const materials = [
  { href: "/materials#copper-ingot", label: "Copper ingot" },
  { href: "/materials#copper-wire", label: "Copper wire" },
  { href: "/materials#aluminium-ingot", label: "Aluminium ingot" },
  { href: "/grades", label: "Grade names" },
  { href: "/materials", label: "All materials" },
];

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap footer-top">
        <div className="footer-intro">
          <Link
            href="/"
            className="footer-brand-link"
            aria-label={company.shortName}
          >
            <Logo className="footer-logo" />
          </Link>
          <p className="footer-tagline">
            Copper, aluminium, and brass at {purity} purity. Yard in
            Samalkha, sales through Delhi — graded metal, clear settlement.
          </p>
          <p className="hindi footer-hindi" lang="hi">
            {company.hindiName}
          </p>
          <div className="footer-cta">
            <a
              className="btn btn-copper footer-call"
              href={`tel:${company.phoneTel}`}
            >
              Call
            </a>
            <a
              className="btn btn-line footer-whatsapp"
              href={`https://wa.me/${company.phoneWhatsApp}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp
            </a>
            <BrochureLink
              className="btn btn-line footer-brochure"
              label="Brochure"
            />
          </div>
          <p className="footer-direct">
            <a href={`tel:${company.phoneTel}`}>{company.phoneDisplay}</a>
            <span aria-hidden="true">·</span>
            <a href={`mailto:${company.email}`}>{company.email}</a>
          </p>
        </div>

        <div className="footer-columns">
          <div className="footer-col">
            <p className="footer-heading">Addresses</p>
            <ul className="footer-office-cards">
              {offices.map((office) => (
                <li key={office.id} className="footer-office-card">
                  <span className="footer-office-label">{office.label}</span>
                  <span className="footer-office-lines">
                    {office.lines.map((line) => (
                      <span key={line} className="footer-office-line">
                        {line}
                      </span>
                    ))}
                  </span>
                </li>
              ))}
            </ul>
            <p className="footer-contact-links">
              <a href={`mailto:${company.email}`}>{company.email}</a>
              <Link href="/contact">Map &amp; enquiry</Link>
            </p>
          </div>

          <div className="footer-col">
            <p className="footer-heading">Products</p>
            <ul className="footer-list">
              {materials.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <p className="footer-heading">Company</p>
            <ul className="footer-list">
              {explore.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-base-wrap">
        <div className="wrap footer-base">
          <p className="footer-copy">© 2026 {company.legalName}</p>
          <p className="footer-meta">
            <span>Samalkha · Delhi · India</span>
            <span className="footer-dot" aria-hidden="true">
              ·
            </span>
            <span>Purity {purity}</span>
            <span className="footer-dot" aria-hidden="true">
              ·
            </span>
            <a href="/sitemap.xml">Sitemap</a>
            <span className="footer-dot" aria-hidden="true">
              ·
            </span>
            <a href="/llms.txt">llms.txt</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
