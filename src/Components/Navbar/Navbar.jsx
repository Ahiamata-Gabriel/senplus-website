import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import LOGO from "../../assets/Logo-2.svg";
import "./Navbar.css";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { label: "Services", path: "/services" },
    { label: "About", path: "/about" },
    { label: "Contact", path: "/contact" },
  ];

  return (
    <>
      <nav
        className={`navbar ${scrolled ? "navbar--scrolled" : "navbar--top"}`}
      >
        <Link to="/">
          <img
            src={LOGO}
            alt="SENPLUS Transport & Logistics"
            className="navbar__logo"
          />
        </Link>

        {/* Desktop links */}
        <div className="navbar__desktop">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="navbar__link"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              {link.label}
            </Link>
          ))}
          <button
            className="cta-primary"
            style={{ padding: "10px 24px", fontSize: "0.85rem" }}
          >
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
        <button
          className="mobile-menu__close"
          onClick={() => setMenuOpen(false)}
        >
          ✕
        </button>

        {navLinks.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            className="mobile-menu__link"
            onClick={() => setMenuOpen(false)}
            style={{ textDecoration: "none", color: "inherit", display: "block" }}
          >
            {link.label}
          </Link>
        ))}

        <button className="cta-primary" style={{ marginTop: 16 }}>
          Get a Quote
        </button>
      </div>
    </>
  );
}
