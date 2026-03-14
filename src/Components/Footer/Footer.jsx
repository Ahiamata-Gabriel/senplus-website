import Logo from "../../assets/Logo-2.svg";
import { FOOTER_COLUMNS } from "../../Constants/data.js";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        {/* Top: brand + link columns */}
        <div className="footer__top">
          <div>
            <img src={Logo} alt="SENPLUS" className="footer__brand-logo" />
            <p className="footer__brand-desc">
              Moving good energy across the nation. Licensed, insured, and built
              for the demands of modern logistics.
            </p>
          </div>

          <div className="footer__columns">
            {FOOTER_COLUMNS.map((col, colIdx) => (
              <div key={`col-${colIdx}`}>
                <div className="section-label footer__col-title">
                  {col.title}
                </div>
                {col.items.map((item, itemIdx) => (
                  <div
                    key={`item-${colIdx}-${itemIdx}`}
                    className="footer__col-item"
                  >
                    {item}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="footer__bottom">
          <span className="footer__copyright">
            © 2026 SENPLUS Transport &amp; Logistics. All rights reserved.
          </span>
          <span className="footer__tagline">MOVING GOOD ENERGY...</span>
        </div>
      </div>
    </footer>
  );
}
