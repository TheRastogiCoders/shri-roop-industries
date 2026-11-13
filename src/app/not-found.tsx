import Link from "next/link";

export default function NotFound() {
  return (
    <header className="page-hero">
      <div className="wrap page-hero-inner">
        <p className="kicker kicker-on-dark">404</p>
        <h1>This page is not on the site.</h1>
        <p className="hero-lede">
          The yard is still at Panipat. The address you opened is not.
        </p>
        <div className="actions">
          <Link className="btn btn-copper" href="/">
            Home
          </Link>
          <Link className="btn btn-ghost" href="/contact">
            Contact
          </Link>
        </div>
      </div>
    </header>
  );
}
