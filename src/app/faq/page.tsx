import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { pageMetadata } from "@/lib/metadata";
import { faqs } from "@/lib/site";

export const metadata = pageMetadata("/faq");

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

export default function FaqPage() {
  return (
    <>
      <PageHero
        kicker="FAQ"
        title="Questions the yard hears often."
        lede="Rates are not listed online. Grades wait for the metal on the floor. The address is on the contact page."
      />

      <section className="section">
        <div className="wrap">
          <p className="kicker">
            <span>01</span> Answers
          </p>
          <h2>Before you bring a load.</h2>
          <div className="faq-list">
            {faqs.map((item) => (
              <details key={item.question} className="faq-item">
                <summary>{item.question}</summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqJsonLd).replace(/</g, "\\u003c"),
        }}
      />

      <section className="section band-dark">
        <div className="wrap prose-grid">
          <p className="kicker kicker-on-dark">
            <span>02</span> Still unsure
          </p>
          <div>
            <h2>Send a slip, or read the process.</h2>
            <p className="hero-lede measure rate-note">
              The enquiry form takes a name, a phone, and the material. The
              process page shows how a lot is settled once it reaches Panipat.
            </p>
            <div className="actions">
              <Link className="btn btn-copper" href="/contact">
                Contact
              </Link>
              <Link className="btn btn-ghost" href="/process">
                Process
              </Link>
              <Link className="btn btn-ghost" href="/grades">
                Grades
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
