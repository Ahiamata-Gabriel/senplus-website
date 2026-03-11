import "./CTA.css";

export default function CTA() {
  return (
    <section className="cta-section">
      <div className="cta-section__glow" />

      <div className="cta-section__inner">
        <div className="section-label" style={{ marginBottom: 20 }}>▶ Ready to Move?</div>

        <h2 className="cta-section__heading">
          Get Your Free<br />
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
          >
            Request a Quote
          </button>
          <button className="cta-secondary">📞 Call Us Now</button>
        </div>
      </div>
    </section>
  );
}
