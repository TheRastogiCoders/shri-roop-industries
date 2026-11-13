export function PageHero({
  kicker,
  title,
  lede,
}: {
  kicker: string;
  title: string;
  lede: string;
}) {
  return (
    <header className="page-hero">
      <div className="wrap page-hero-inner">
        <p className="kicker kicker-on-dark">{kicker}</p>
        <h1>{title}</h1>
        <p className="hero-lede">{lede}</p>
      </div>
    </header>
  );
}
