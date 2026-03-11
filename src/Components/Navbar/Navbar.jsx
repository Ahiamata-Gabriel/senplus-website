import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import LOGO from "../../assets/Logo-2.svg";
import "./Navbar.css";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    setMenuOpen(false);

    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          const navHeight =
            document.querySelector(".navbar")?.offsetHeight || 80;
          const elementPosition =
            element.getBoundingClientRect().top + window.scrollY;
          window.scrollTo({
            top: elementPosition - navHeight - 16,
            behavior: "smooth",
          });
        }
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        const navHeight = document.querySelector(".navbar")?.offsetHeight || 80;
        const elementPosition =
          element.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({
          top: elementPosition - navHeight - 16,
          behavior: "smooth",
        });
      }
    }
  };

  const navLinks = [
    {
      label: "Services",
      action: () => scrollToSection("services"),
      isScrollLink: true,
    },
    { label: "About", path: "/about", isScrollLink: false },
    {
      label: "Contact",
      action: () => scrollToSection("contact"),
      isScrollLink: true,
    },
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
          {navLinks.map((link) =>
            link.isScrollLink ? (
              <button
                key={link.label}
                onClick={link.action}
                className="navbar__link"
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  font: "inherit",
                  padding: 0,
                }}
              >
                {link.label}
              </button>
            ) : (
              <Link
                key={link.label}
                to={link.path}
                className={`navbar__link ${location.pathname === link.path ? "navbar__link--active" : ""}`}
                style={{ textDecoration: "none", color: "inherit" }}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ),
          )}
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

        {navLinks.map((link) =>
          link.isScrollLink ? (
            <button
              key={link.label}
              onClick={link.action}
              className="mobile-menu__link"
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                font: "inherit",
                color: "inherit",
                width: "100%",
                textAlign: "left",
                padding: "16px 0",
              }}
            >
              {link.label}
            </button>
          ) : (
            <Link
              key={link.label}
              to={link.path}
              className="mobile-menu__link"
              onClick={() => setMenuOpen(false)}
              style={{
                textDecoration: "none",
                color: "inherit",
                display: "block",
              }}
            >
              {link.label}
            </Link>
          ),
        )}

        <button className="cta-primary" style={{ marginTop: 16 }}>
          Get a Quote
        </button>
      </div>
    </>
  );
}
