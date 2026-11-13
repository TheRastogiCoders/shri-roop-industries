import Link from "next/link";
import { BrochureLink } from "@/components/BrochureLink";
import { DealSteps } from "@/components/DealSteps";
import { MetalPhoto } from "@/components/MetalPhoto";
import { PageHero } from "@/components/PageHero";
import { pageMetadata } from "@/lib/metadata";
import { brochure, company, parties, yardPhoto } from "@/lib/site";

export const metadata = pageMetadata("/about");

export default function AboutPage() {
  return (
    <>
      <PageHero
        kicker="About"
        title="A private limited company, with offices in Delhi."
        lede="Shri Roop Industries deals in copper and aluminium scrap. Connect through the sales office at NSP, or the office at Rama Vihar."
      />

      <section className="section">
        <div className="wrap">
          <div className="prose-grid">
            <p className="kicker">
              <span>01</span> The firm
            </p>
            <div className="measure">
              <p>
                {company.legalName} buys and supplies non-ferrous scrap. Lots
                are received, looked at, weighed, and settled in the trade.
                Connect through the Delhi offices on the contact page.
              </p>
              <p>
                The day-to-day trade is the ordinary work of a non-ferrous
                yard: millberry and other copper grades, cable, sheet,
                extrusion, brass, and mixed scrap, graded for metal and for
                whatever is attached to it.
              </p>
            </div>
          </div>
          <figure className="yard-figure">
            <MetalPhoto
              src={yardPhoto.src}
              alt={yardPhoto.alt}
              sizes="(max-width: 1180px) 100vw, 1180px"
              className="photo-frame yard-photo"
            />
          </figure>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <p className="kicker">
            <span>02</span> The counter
          </p>
          <h2>Who the yard deals with.</h2>
          <div className="parties">
            {parties.map((party) => (
              <article key={party.title}>
                <h3>{party.title}</h3>
                <p>{party.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section band-sand">
        <div className="wrap">
          <p className="kicker">
            <span>03</span> Settlement
          </p>
          <h2>How a lot moves.</h2>
          <p className="measure">
            Nothing is priced from a photograph alone. The metal has to be on
            the floor.
          </p>
          <DealSteps />
        </div>
      </section>

      <section className="section">
        <div className="wrap prose-grid">
          <p className="kicker">
            <span>04</span> Visit
          </p>
          <div className="measure">
            <p>
              Connect through the sales office at NSP, Delhi, or the office at
              Rama Vihar, New Delhi. The addresses, a map, and an enquiry slip
              are on the contact page.
            </p>
            <div className="actions">
              <BrochureLink className="btn btn-ink" label="Download brochure" />
              <Link className="btn btn-line" href="/contact">
                Contact
              </Link>
              <Link className="btn btn-line" href="/materials">
                Materials
              </Link>
            </div>
            <p className="fine brochure-note">{brochure.summary}</p>
          </div>
        </div>
      </section>
    </>
  );
}
