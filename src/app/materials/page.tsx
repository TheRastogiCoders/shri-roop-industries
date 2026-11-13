import Link from "next/link";
import { MetalPhoto } from "@/components/MetalPhoto";
import { PageHero } from "@/components/PageHero";
import { pageMetadata } from "@/lib/metadata";
import { briefing, gallery, materials, products, purity } from "@/lib/site";

export const metadata = pageMetadata("/materials");

export default function MaterialsPage() {
  return (
    <>
      <PageHero
        kicker="Materials"
        title="Copper ingot, copper wire, aluminium ingot."
        lede={`Ingots and wire at ${purity} purity, with the scrap grades the trade still names — millberry, birch, candy, extrusion, brass. The name is a start. The grade is the metal on the floor.`}
      />

      <section className="section" id="products">
        <div className="wrap">
          <p className="kicker">
            <span>01</span> Lead products
          </p>
          <h2>Ingots and wire, at {purity} purity.</h2>
          <p className="measure">
            Copper ingot, copper wire, and aluminium ingot are the forms most
            buyers ask for first. Every product on this page is supplied at{" "}
            {purity} purity.
          </p>
          <div className="product-grid">
            {products.map((product) => (
              <article className="product-card" key={product.id} id={product.id}>
                <MetalPhoto
                  src={product.image}
                  alt={product.alt}
                  sizes="(max-width: 860px) 100vw, 33vw"
                />
                <div className="product-copy">
                  <p className="product-purity">Purity {product.purity}</p>
                  <h3>{product.name}</h3>
                  <p>{product.detail}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section grade-section band-sand">
        <div className="wrap">
          <p className="kicker">
            <span>02</span> On the floor
          </p>
          <h2>Forms the yard sees.</h2>
          <ul className="grade-photos">
            {gallery.map((photo) => (
              <li key={photo.caption}>
                <figure>
                  <MetalPhoto
                    src={photo.src}
                    alt={photo.alt}
                    sizes="(max-width: 720px) 50vw, 16vw"
                  />
                  <figcaption>
                    {photo.caption}
                    <span>Purity {purity}</span>
                  </figcaption>
                </figure>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {materials.map((material, index) => (
        <section
          className={index % 2 === 1 ? "section band-sand" : "section"}
          id={material.id}
          key={material.id}
        >
          <div className="wrap material-layout">
            <div className="material-sticky">
              <p className="kicker">
                <span>{material.index}</span>
                Material
              </p>
              <h2>{material.name}</h2>
              <p className="product-purity material-purity">Purity {purity}</p>
              {material.image && material.alt ? (
                <MetalPhoto
                  src={material.image}
                  alt={material.alt}
                  sizes="(max-width: 860px) 100vw, 360px"
                  className="photo-frame material-swatch"
                />
              ) : (
                <div
                  className={`swatch swatch-${material.tone} material-swatch`}
                  aria-hidden="true"
                />
              )}
            </div>
            <div>
              <p className="measure">{material.detail}</p>
              <dl className="defs">
                {material.forms.map((form) => (
                  <div key={form.name}>
                    <dt>
                      {form.name}
                      {form.purity ? (
                        <span className="form-purity">{form.purity}</span>
                      ) : null}
                    </dt>
                    <dd>{form.note}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </section>
      ))}

      <section className="section">
        <div className="wrap prose-grid">
          <div>
            <p className="kicker">
              <span>06</span> Before you come
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
            <span>07</span> Rates
          </p>
          <div>
            <h2>A rate is not listed here.</h2>
            <p className="hero-lede measure rate-note">
              Purity is {purity} across copper ingot, copper wire, aluminium
              ingot, and the graded forms. Rates still move with the day, and
              two lots with the same name can be different metal. The yard
              prices what it can see and weigh.
            </p>
            <div className="actions">
              <Link className="btn btn-copper" href="/contact">
                Prepare an enquiry
              </Link>
              <Link className="btn btn-ghost" href="/grades">
                Grade names
              </Link>
              <Link className="btn btn-ghost" href="/process">
                Process
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
