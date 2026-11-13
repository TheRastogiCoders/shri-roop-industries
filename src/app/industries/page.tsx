import Link from "next/link";
import { IndustryList } from "@/components/IndustryList";
import { MetalPhoto } from "@/components/MetalPhoto";
import { PageHero } from "@/components/PageHero";
import { pageMetadata } from "@/lib/metadata";
import { company, gallery } from "@/lib/site";

export const metadata = pageMetadata("/industries");

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        kicker="Industries"
        title="The trades that use this metal, and the trades that bring it back."
        lede="Cable works, motor shops, foundries, and fabricators both buy sorted non-ferrous lots and send scrap out. The yard at Panipat sits in that loop."
      />

      <section className="section">
        <div className="wrap">
          <p className="kicker">
            <span>01</span> Where it goes
          </p>
          <h2>Copper, aluminium, and brass, by the trade that needs them.</h2>
          <p className="measure">
            {company.shortName} does not publish a monthly tonnage. What can
            be supplied is the metal that has been seen, graded, and weighed
            at the yard. The same rule applies to a lot a workshop wants to
            sell.
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
          <IndustryList />
        </div>
      </section>

      <section className="section band-sand">
        <div className="wrap prose-grid">
          <div>
            <p className="kicker">
              <span>02</span> Names on the floor
            </p>
            <h2>Ask for the grade, then bring the metal.</h2>
          </div>
          <div className="measure">
            <p>
              Millberry, birch, candy, telewire, armature, and enameled copper
              are different parcels. So are aluminium extrusion, used drinks
              cans, and brass hardware. Use the name you know. The floor will
              match it to the lot, or tell you it is mixed.
            </p>
            <p>
              A photograph can start the conversation. The grade and the rate
              wait until the metal is at Panipat.
            </p>
            <div className="actions">
              <Link className="btn btn-ink" href="/grades">
                Grade names
              </Link>
              <Link className="btn btn-line" href="/process">
                Process
              </Link>
              <Link className="btn btn-line" href="/contact">
                Enquiry slip
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
