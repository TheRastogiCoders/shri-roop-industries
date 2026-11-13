import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { pageMetadata } from "@/lib/metadata";
import { gradeTerms } from "@/lib/site";

export const metadata = pageMetadata("/grades");

export default function GradesPage() {
  return (
    <>
      <PageHero
        kicker="Grades"
        title="The names used on the floor."
        lede="Copper ingot, copper wire, aluminium ingot, and the scrap grades — all at 99.9%+ purity. A trade name is a start. The grade is the metal itself."
      />

      <section className="section">
        <div className="wrap">
          <p className="kicker">
            <span>01</span> Glossary
          </p>
          <h2>Call it by the name you know.</h2>
          <p className="measure">
            The yard will match the name to the lot, or tell you it is mixed.
            Rates are not listed here.
          </p>
          <dl className="grade-glossary">
            {gradeTerms.map((term) => (
              <div key={term.name}>
                <dt>
                  {term.name}
                  <span>{term.metal}</span>
                </dt>
                <dd>{term.text}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="section band-sand">
        <div className="wrap prose-grid">
          <div>
            <p className="kicker">
              <span>02</span> Detail
            </p>
            <h2>Forms and notes by metal.</h2>
          </div>
          <div className="measure">
            <p>
              Copper, aluminium, brass, and mixed lots are described in full
              on the materials page, with the forms the yard actually sees.
            </p>
            <div className="actions">
              <Link className="btn btn-ink" href="/materials">
                Materials
              </Link>
              <Link className="btn btn-line" href="/process">
                How a deal works
              </Link>
              <Link className="btn btn-line" href="/contact">
                Enquiry
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
