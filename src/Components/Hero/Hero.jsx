import { useNavigate } from "react-router-dom";
import TRUCK_IMG from "../../assets/truck-1.webp";
import "./Hero.css";

export default function Hero() {
  const navigate = useNavigate();
  return (
    <section className="hero">
      {/* Background decoration */}
      <div className="hero__grid" />
      <div className="hero__accent-bar" />

      <div className="hero__layout">
        <div className="hero__content">
          <div className="section-label" style={{ marginBottom: 24 }}>
            ▶ Senplus Transport &amp; Logistics
          </div>

          <h1 className="hero__heading">
            <span className="hero__word" style={{ animationDelay: "0.0s" }}>
              Moving
            </span>
            <span
              className="hero__word hero__heading--accent"
              style={{ animationDelay: "0.15s" }}
            >
              Good Energy
            </span>
            <span className="hero__word" style={{ animationDelay: "0.3s" }}>
              & Goods
            </span>
          </h1>

          <p className="hero__subtext">
            SENPLUS delivers freight, fuel, and industrial cargo across the
            nation — safely, on time, every time. Licensed for hazardous goods.
            Built for the long haul.
          </p>

          <div className="hero__ctas">
            <button className="cta-primary" onClick={() => navigate("/gps")}>Request a Quote</button>
            <button className="cta-secondary" onClick={() => navigate("/gps")}>Track Shipment</button>
          </div>
        </div>

        <div className="hero__image-container">
          <img src={TRUCK_IMG} alt="SENPLUS truck" className="hero__image" />
        </div>
      </div>

      {/* Ghost watermark */}
      <div className="hero__ghost-text">SEN+</div>
    </section>
  );
}
