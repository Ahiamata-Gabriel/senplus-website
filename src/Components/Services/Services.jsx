import { Link } from "react-router-dom";
import { SERVICES } from "../../Constants/data.js";
import "./Services.css";

export default function Services() {
  return (
    <section className="services">
      <div className="services__inner">
        {/* Header */}
        <div className="services__header">
          <div>
            <div className="section-label" style={{ marginBottom: 16 }}>
              ▶ What We Do
            </div>
            <h2 className="services__heading">
              Our <span className="services__heading--accent">Services</span>
            </h2>
          </div>
          <p className="services__intro">
            From single pallets to full project logistics, SENPLUS has the
            fleet, the licences, and the expertise to get your cargo moving.
          </p>
        </div>

        {/* Grid */}
        <div className="services__grid">
          {SERVICES.map((svc, i) => (
            <div key={`service-${i}`} className="service-card">
              <div className="tag-badge" style={{ marginBottom: 20 }}>
                {svc.tag}
              </div>
              <div className="service-card__icon">{svc.icon}</div>
              <h3 className="service-card__title">{svc.title}</h3>
              <p className="service-card__desc">{svc.desc}</p>
              <Link to="/gps" className="service-card__cta">
                Learn More <span>→</span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
