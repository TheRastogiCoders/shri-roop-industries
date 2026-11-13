"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";
import { nav } from "@/lib/site";
import { Logo } from "./Logo";

const links = nav.filter((link) => link.href !== "/contact");
const cta = nav.find((link) => link.href === "/contact") ?? {
  href: "/contact",
  label: "Contact",
};

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const navId = useId();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    const media = window.matchMedia("(min-width: 1081px)");

    function onViewportChange(event: MediaQueryListEvent | MediaQueryList) {
      if (event.matches) {
        setOpen(false);
      }
    }

    onViewportChange(media);
    media.addEventListener("change", onViewportChange);
    return () => media.removeEventListener("change", onViewportChange);
  }, []);

  useEffect(() => {
    if (!open) {
      return;
    }

    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  function closeMenu() {
    setOpen(false);
  }

  return (
    <header className={open ? "site-header is-open" : "site-header"}>
      <div className="wrap header-bar">
        <Link href="/" className="brand" onClick={closeMenu}>
          <Logo className="brand-logo" priority />
        </Link>

        <button
          ref={toggleRef}
          type="button"
          className={open ? "nav-toggle is-open" : "nav-toggle"}
          aria-expanded={open}
          aria-controls={navId}
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          <span className="nav-toggle-bars" aria-hidden="true">
            <span />
            <span />
            <span />
          </span>
        </button>

        <nav
          id={navId}
          className={open ? "nav is-open" : "nav"}
          aria-label="Primary"
        >
          <div className="nav-links">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="nav-link"
                aria-current={pathname === link.href ? "page" : undefined}
                onClick={closeMenu}
              >
                {link.label}
              </Link>
            ))}
          </div>
          <Link
            href={cta.href}
            className="nav-cta"
            aria-current={pathname === cta.href ? "page" : undefined}
            onClick={closeMenu}
          >
            {cta.label}
          </Link>
        </nav>
      </div>
    </header>
  );
}
