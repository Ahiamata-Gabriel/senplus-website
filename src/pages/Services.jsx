import { SERVICES } from "../Constants/data.js";
import "../Components/Services/Services.css";

export default function ServicesPage() {
  return (
    <main>
      <section className="services" style={{ paddingTop: "80px" }}>
        <div className="services__inner">
          <div className="services__header">
            <div>
              <div className="section-label" style={{ marginBottom: 16 }}>
                ▶ What We Do
              </div>
              <h1 style={{ fontSize: "3rem", marginBottom: 24 }}>
                Our <span style={{ color: "#ff6b35" }}>Services</span>
              </h1>
            </div>
            <p className="services__intro">
              From single pallets to full project logistics, SENPLUS has the
              fleet, the licences, and the expertise to get your cargo moving.
              Explore our comprehensive range of transport and logistics
              solutions tailored to your business needs.
            </p>
          </div>

          <div className="services__grid">
            {SERVICES.map((svc, i) => (
              <div key={i} className="service-card" style={{ padding: "40px" }}>
                <div className="tag-badge" style={{ marginBottom: 20 }}>
                  {svc.tag}
                </div>
                <div className="service-card__icon" style={{ fontSize: "3rem", marginBottom: 20 }}>
                  {svc.icon}
                </div>
                <h3 className="service-card__title">{svc.title}</h3>
                <p className="service-card__desc">{svc.desc}</p>
                <div className="service-card__cta">
                  Learn More <span>→</span>
                </div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: 80, textAlign: "center" }}>
            <h2 style={{ marginBottom: 40 }}>Need a Custom Solution?</h2>
            <button
              className="cta-primary"
              style={{ fontSize: "1.05rem", padding: "16px 48px" }}
            >
              Request a Quote
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
