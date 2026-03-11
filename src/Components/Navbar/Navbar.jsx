import { useState, useEffect } from "react";
import LOGO from "../../assets/logo.js";
import { NAV_LINKS } from "../../constants/data.js";
import "./Navbar.css";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <nav className={`navbar ${scrolled ? "navbar--scrolled" : "navbar--top"}`}>
        <img src={LOGO} alt="SENPLUS Transport & Logistics" className="navbar__logo" />

        {/* Desktop links */}
        <div className="navbar__desktop">
          {NAV_LINKS.map((link) => (
            <span key={link} className="navbar__link">
              {link}
            </span>
          ))}
          <button className="cta-primary" style={{ padding: "10px 24px", fontSize: "0.85rem" }}>
            Get a Quote
          </button>
        </div>

        {/* Hamburger (mobile) */}
        <button
          className="navbar__hamburger"
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
        >
          <span className="navbar__hamburger-line" />
          <span className="navbar__hamburger-line" />
          <span className="navbar__hamburger-line" />
        </button>
      </nav>

      {/* Mobile slide-in menu */}
      <div className={`mobile-menu ${menuOpen ? "mobile-menu--open" : ""}`}>
        <button className="mobile-menu__close" onClick={() => setMenuOpen(false)}>
          ✕
        </button>

        {NAV_LINKS.map((link) => (
          <span key={link} className="mobile-menu__link" onClick={() => setMenuOpen(false)}>
            {link}
          </span>
        ))}

        <button className="cta-primary" style={{ marginTop: 16 }}>
          Get a Quote
        </button>
      </div>
    </>
  );
}
