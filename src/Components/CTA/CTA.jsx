import { useNavigate } from "react-router-dom";
import "./CTA.css";

export default function CTA() {
  const navigate = useNavigate();

  return (
    <section className="cta-section">
      <div className="cta-section__glow" />

      <div className="cta-section__inner">
        <div className="section-label" style={{ marginBottom: 20 }}>
          ▶ Ready to Move?
        </div>

        <h2 className="cta-section__heading">
          Get Your Free
          <br />
          <span className="cta-section__heading--accent">Transport Quote</span>
        </h2>

        <p className="cta-section__text">
          Tell us what you need to move. Our team responds within 2 hours with a
          competitive quote and full route plan.
        </p>

        <div className="cta-section__buttons">
          <button
            className="cta-primary"
            style={{ fontSize: "1.05rem", padding: "16px 48px" }}
            onClick={() => navigate("/gps")}
          >
            Request a Quote
          </button>
          <a
            href="tel:+233 24 366 4565"
            className="cta-secondary"
            style={{ textDecoration: "none", display: "inline-block" }}
          >
            📞 Call Us Now
          </a>
        </div>
      </div>
    </section>
  );
}
