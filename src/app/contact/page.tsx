import { BrochureLink } from "@/components/BrochureLink";
import { EnquiryForm } from "@/components/EnquiryForm";
import { PageHero } from "@/components/PageHero";
import { pageMetadata } from "@/lib/metadata";
import {
  company,
  mapsEmbedUrl,
  mapsSearchUrl,
  offices,
} from "@/lib/site";

export const metadata = pageMetadata("/contact");

const yard = offices.find((office) => office.id === "samalkha")!;
const delhiOffices = offices.filter((office) => office.id !== "samalkha");

export default function ContactPage() {
  return (
    <>
      <PageHero
        kicker="Contact"
        title="Come to the Samalkha yard."
        lede="This is the visit address for the metal. Delhi offices are for sales talk. Call, WhatsApp, or send an enquiry slip."
      />

      <section className="section">
        <div className="wrap contact-grid">
          <div className="plate">
            <p className="kicker kicker-on-dark">Visit address</p>
            <address className="office-block office-featured">
              <p className="office-label">{yard.label}</p>
              <p className="address-lines">
                {yard.lines.map((line) => (
                  <span key={line}>
                    {line}
                    <br />
                  </span>
                ))}
              </p>
              <a
                className="link-arrow light"
                href={mapsSearchUrl(yard.mapsQuery)}
              >
                Open yard directions
              </a>
            </address>

            <p className="kicker kicker-on-dark office-split">Delhi offices</p>
            <div className="office-list">
              {delhiOffices.map((office) => (
                <address className="office-block" key={office.id}>
                  <p className="office-label">{office.label}</p>
                  <p className="address-lines">
                    {office.lines.map((line) => (
                      <span key={line}>
                        {line}
                        <br />
                      </span>
                    ))}
                  </p>
                  <a
                    className="link-arrow light"
                    href={mapsSearchUrl(office.mapsQuery)}
                  >
                    Directions
                  </a>
                </address>
              ))}
            </div>

            <p className="contact-phone">
              <a href={`tel:${company.phoneTel}`}>{company.phoneDisplay}</a>
            </p>
            <p className="contact-email">
              <a href={`mailto:${company.email}`}>{company.email}</a>
            </p>
            <div className="actions">
              <a className="btn btn-copper" href={`tel:${company.phoneTel}`}>
                Call
              </a>
              <a
                className="btn btn-ghost"
                href={`https://wa.me/${company.phoneWhatsApp}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp
              </a>
              <a className="btn btn-ghost" href={`mailto:${company.email}`}>
                Email
              </a>
              <BrochureLink className="btn btn-ghost" label="Brochure" />
            </div>
            <p className="fine">
              Bring the metal to Samalkha. Use NSP or Rama Vihar when you need
              the Delhi counter. The firm brochure is available as a PDF.
            </p>
          </div>
          <EnquiryForm />
        </div>
      </section>

      <section className="section map-section">
        <div className="wrap">
          <p className="kicker">
            <span>01</span> Yard map
          </p>
          <h2>Samalkha visit address on the map.</h2>
          <div className="map-wrap">
            <iframe
              title="Map of the Shri Roop Industries yard in Samalkha, Panipat"
              src={mapsEmbedUrl(yard.mapsQuery)}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <p className="map-caption">
              GT Karnal Road, Samalkha, District Panipat, Haryana – 132101.
              Near Different Gym, opposite Geeta Ashram.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
