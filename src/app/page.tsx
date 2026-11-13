import Image from "next/image";
import Link from "next/link";
import { BrochureLink } from "@/components/BrochureLink";
import { DealSteps } from "@/components/DealSteps";
import { IndustryList } from "@/components/IndustryList";
import { MetalPhoto } from "@/components/MetalPhoto";
import { Ticker } from "@/components/Ticker";
import { pageMetadata } from "@/lib/metadata";
import { brochure, company, gallery, materials, samples, yardPhoto } from "@/lib/site";

export const metadata = pageMetadata("/");

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="hero-bg" aria-hidden="true">
          <Image
            src="/images/yard-road.jpg"
            alt=""
            fill
            priority
            sizes="100vw"
            className="hero-bg-img"
          />
        </div>
        <div className="wrap hero-grid">
          <div className="hero-copy">
            <p className="kicker kicker-on-dark">Panipat — Haryana</p>
            <p className="hero-hindi" lang="hi">
              {company.hindiName}
            </p>
            <h1>
              Copper and
              <br /> aluminium, <em>from the yard.</em>
            </h1>
            <p className="hero-lede">
              {company.shortName} buys and supplies non-ferrous scrap from a
              yard in Panipat. Copper ingot, copper wire, and aluminium
              ingot at 99.9%+ purity, with the scrap grades a workshop or
              trader actually has.
            </p>
            <div className="actions">
              <Link className="btn btn-copper" href="/materials">
                Materials we deal in
              </Link>
              <BrochureLink className="btn btn-ghost" />
              <Link className="btn btn-ghost" href="/contact">
                Contact
              </Link>
            </div>
          </div>
          <aside className="samples" aria-label="Metals dealt in">
            <p className="samples-label">On the floor</p>
            {samples.map((sample) => (
              <article className="sample" key={sample.metal}>
                <MetalPhoto
                  src={sample.image}
                  alt={sample.alt}
                  sizes="(max-width: 860px) 100px, 120px"
                  priority
                />
                <div>
                  <strong>{sample.metal}</strong>
                  <p>{sample.line}</p>
                </div>
              </article>
            ))}
          </aside>
        </div>
        <Ticker />
      </section>

      <section className="spec-band" aria-label="At a glance">
        <dl className="wrap spec-strip">
          <div>
            <dt>Company</dt>
            <dd>{company.legalName}</dd>
          </div>
          <div>
            <dt>Purity</dt>
            <dd>99.9%+ on all products</dd>
          </div>
          <div>
            <dt>Offices</dt>
            <dd>NSP, Delhi — Rama Vihar</dd>
          </div>
        </dl>
      </section>

      <section className="section">
        <div className="wrap intro-grid">
          <div>
            <p className="kicker">
              <span>01</span> The house
            </p>
            <h2>The metal is graded on this floor.</h2>
          </div>
          <div className="intro-copy">
            <p>
              {company.legalName} receives copper and aluminium scrap,
              grades it, weighs it, and settles the lot at the yard in
              Panipat.
            </p>
            <p>
              Wire, cable, sheet, extrusion, castings, turnings, and mixed
              non-ferrous arrive by the load. A rate follows the metal in
              front of us, not a card printed in advance.
            </p>
            <Link className="link-arrow" href="/about">
              About the company
            </Link>
          </div>
        </div>
      </section>

      <section className="section band-dark" id="metals">
        <div className="wrap">
          <div className="section-head">
            <div>
              <p className="kicker kicker-on-dark">
                <span>02</span> On the floor
              </p>
              <h2>What the yard takes.</h2>
            </div>
            <Link className="link-arrow light" href="/grades">
              Grade names
            </Link>
          </div>
          <div className="metal-rows">
            {materials.map((material) => (
              <article className="metal-row" key={material.id}>
                {material.image && material.alt ? (
                  <MetalPhoto
                    src={material.image}
                    alt={material.alt}
                    sizes="220px"
                  />
                ) : (
                  <div
                    className={`swatch swatch-${material.tone}`}
                    aria-hidden="true"
                  />
                )}
                <div>
                  <p className="metal-index">{material.index}</p>
                  <h3>{material.name}</h3>
                  <p>{material.summary}</p>
                  <ul className="chip-list">
                    {material.forms.map((form) => (
                      <li key={form.name}>{form.name}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section band-sand" id="industries">
        <div className="wrap">
          <div className="section-head">
            <div>
              <p className="kicker">
                <span>03</span> Industries
              </p>
              <h2>Where this metal is used.</h2>
            </div>
            <Link className="link-arrow" href="/industries">
              The trades
            </Link>
          </div>
          <p className="measure">
            Sorted lots from the yard move into the trades that melt, draw,
            wind, or fabricate them. Those same trades bring scrap back.
          </p>
          <IndustryList />
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <p className="kicker">
            <span>04</span> A deal
          </p>
          <div className="section-head">
            <h2>How a lot is settled.</h2>
          </div>
          <p className="measure">
            Grades and rates are fixed at the yard. They are not listed on
            this website.
          </p>
          <ul className="grade-photos floor-photos">
            {gallery.map((photo) => (
              <li key={photo.caption}>
                <figure>
                  <MetalPhoto
                    src={photo.src}
                    alt={photo.alt}
                    sizes="(max-width: 720px) 50vw, 20vw"
                  />
                  <figcaption>{photo.caption}</figcaption>
                </figure>
              </li>
            ))}
          </ul>
          <figure className="yard-figure">
            <MetalPhoto
              src={yardPhoto.src}
              alt={yardPhoto.alt}
              sizes="(max-width: 1180px) 100vw, 1180px"
              className="photo-frame yard-photo"
              priority
            />
          </figure>
          <DealSteps />
        </div>
      </section>

      <section className="section band-sand brochure-band">
        <div className="wrap brochure-panel">
          <div>
            <p className="kicker">
              <span>05</span> Brochure
            </p>
            <h2>The firm brochure.</h2>
            <p className="measure">
              {brochure.summary} Open or download the PDF for the yard,
              grades, and Delhi offices in one place.
            </p>
          </div>
          <div className="actions">
            <BrochureLink className="btn btn-copper" label="View brochure PDF" />
            <Link className="btn btn-line" href="/about">
              About the company
            </Link>
          </div>
        </div>
      </section>

      <section className="section band-dark yard">
        <div className="wrap">
          <p className="kicker kicker-on-dark">
            <span>06</span> The yard
          </p>
          <h2>Connect in Delhi.</h2>
          <p className="measure">
            Reach the sales office at NSP, Delhi 110034, or the office at
            Rama Vihar, New Delhi 110081. Addresses and a map are on the
            contact page.
          </p>
          <div className="actions">
            <Link className="btn btn-copper" href="/contact">
              Contact
            </Link>
            <BrochureLink className="btn btn-ghost" />
            <Link className="btn btn-ghost" href="/materials">
              Materials
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
