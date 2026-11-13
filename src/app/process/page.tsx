import Link from "next/link";
import { DealSteps } from "@/components/DealSteps";
import { PageHero } from "@/components/PageHero";
import { pageMetadata } from "@/lib/metadata";
import { briefing, processNotes } from "@/lib/site";

export const metadata = pageMetadata("/process");

export default function ProcessPage() {
  return (
    <>
      <PageHero
        kicker="Process"
        title="Offer, inspection, weighment, settlement."
        lede="A lot moves the same way every time. The grade and the rate wait until the metal is on the floor at Panipat."
      />

      <section className="section">
        <div className="wrap">
          <p className="kicker">
            <span>01</span> The steps
          </p>
          <h2>How a lot is settled.</h2>
          <p className="measure">
            Nothing is priced from a photograph alone. The metal has to be
            seen and weighed.
          </p>
          <DealSteps />
        </div>
      </section>

      <section className="section band-sand">
        <div className="wrap">
          <p className="kicker">
            <span>02</span> On the floor
          </p>
          <h2>What decides the grade.</h2>
          <div className="parties">
            {processNotes.map((note) => (
              <article key={note.title}>
                <h3>{note.title}</h3>
                <p>{note.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap prose-grid">
          <div>
            <p className="kicker">
              <span>03</span> Before you come
            </p>
            <h2>What to tell the yard.</h2>
          </div>
          <ol className="check-list">
            {briefing.map((item, index) => (
              <li key={item.title}>
                <span>0{index + 1}</span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section band-dark">
        <div className="wrap prose-grid">
          <p className="kicker kicker-on-dark">
            <span>04</span> Next
          </p>
          <div>
            <h2>Prepare a slip, or read the names.</h2>
            <p className="hero-lede measure rate-note">
              Use the enquiry form if you are bringing a load. Use the grades
              page if you want the trade names before you call.
            </p>
            <div className="actions">
              <Link className="btn btn-copper" href="/contact">
                Enquiry slip
              </Link>
              <Link className="btn btn-ghost" href="/grades">
                Grade names
              </Link>
              <Link className="btn btn-ghost" href="/faq">
                FAQ
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
