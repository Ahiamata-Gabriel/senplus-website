import { useState } from "react";
import "./Gps.css";

export default function Gps() {
  const [activeFaq, setActiveFaq] = useState(null);

  const features = [
    {
      icon: "📍",
      title: "Real-Time Location",
      desc: "Track your delivery down to the exact location, updated every 10 seconds.",
    },
    {
      icon: "⏱️",
      title: "Estimated Arrival",
      desc: "Get accurate ETAs based on live traffic data and current conditions.",
    },
    {
      icon: "📱",
      title: "Mobile Alerts",
      desc: "Receive push notifications at each milestone — pickup, in-transit, arrival.",
    },
    {
      icon: "🔒",
      title: "Secure & Private",
      desc: "Military-grade encryption ensures your shipment data stays confidential.",
    },
  ];

  const steps = [
    {
      number: "01",
      title: "Enter Tracking ID",
      desc: "Your shipment tracking number is in your quote confirmation email. Paste it into our tracker.",
    },
    {
      number: "02",
      title: "Live GPS Feed",
      desc: "Instantly see your truck on the map. Updated position every 10 seconds with full journey history.",
    },
    {
      number: "03",
      title: "Get Notified",
      desc: "Receive email and SMS updates when your shipment changes status or reaches key checkpoints.",
    },
    {
      number: "04",
      title: "Proof of Delivery",
      desc: "Get timestamped photos, driver signature, and delivery confirmation all in one place.",
    },
  ];

  const faqs = [
    {
      q: "How do I track my shipment?",
      a: "Simply enter your shipment tracking number (found in your quote email) into the tracker above. Your truck will appear on the map with real-time location updates every 10 seconds.",
    },
    {
      q: "Is there a GPS tracking app available?",
      a: "Yes! Our mobile app is available on both iOS and Android. Search for 'SENPLUS Tracker' in the App Store or Google Play to download. The app provides even more features including offline maps and custom alerts.",
    },
    {
      q: "How accurate is the GPS tracking?",
      a: "Our GPS tracking is accurate to within 5–10 meters in most conditions. Real-time updates are transmitted every 10 seconds, so you'll always know your shipment's position.",
    },
    {
      q: "Can I track multiple shipments at once?",
      a: "Yes! Log into your SENPLUS account to see all your shipments in one dashboard. You can track active deliveries, view delivery history, and manage your account preferences.",
    },
    {
      q: "What if my shipment is delayed?",
      a: "Our tracking system alerts you automatically if your shipment deviates from the planned route or if there's a delay. You'll receive an SMS and email notification, and you can call our operations team for live updates.",
    },
    {
      q: "Is my tracking data secure?",
      a: "Absolutely. All tracking data is encrypted end-to-end using military-grade SSL encryption. Your location data is only accessible to you and the relevant SENPLUS team members on your shipment.",
    },
  ];

  return (
    <main className="gps-page">
      {/* ── HERO SECTION ──────────────────────────────────── */}
      <section className="gps-hero">
        <div className="gps-hero__grid" />
        <div className="gps-hero__accent-bar" />

        <div className="gps-hero__layout">
          <div className="gps-hero__content">
            <div className="section-label" style={{ marginBottom: 24 }}>
              ▶ GPS Tracking & Logistics
            </div>

            <h1 className="gps-hero__heading">
              <span
                className="gps-hero__word"
                style={{ animationDelay: "0.0s" }}
              >
                Track Your
              </span>
              <span
                className="gps-hero__word gps-hero__heading--accent"
                style={{ animationDelay: "0.15s" }}
              >
                Delivery
              </span>
              <span
                className="gps-hero__word"
                style={{ animationDelay: "0.3s" }}
              >
                in Real-Time
              </span>
            </h1>

            <p className="gps-hero__subtext">
              Know exactly where your shipment is at any moment. Real-time GPS
              tracking, instant notifications, and proof of delivery — all at
              your fingertips.
            </p>

            <div className="gps-hero__ctas">
              <button className="cta-primary">Track a Shipment</button>
              {/* <button className="cta-secondary">Download App</button> */}
            </div>
          </div>

          <div className="gps-hero__visual">
            <div className="gps-hero__map-frame">
              <div className="gps-map">
                {/* Animated truck marker */}
                <div className="gps-truck">
                  <div className="gps-truck__icon">🚛</div>
                  <div className="gps-truck__label">Active Delivery</div>
                </div>

                {/* Pulsing destination pin */}
                <div className="gps-pin gps-pin--destination">
                  <div className="gps-pin__pulse" />
                  <div className="gps-pin__dot" />
                </div>

                {/* Origin pin */}
                <div className="gps-pin gps-pin--origin">
                  <div className="gps-pin__dot" />
                </div>

                {/* Route line (SVG-like) */}
                <svg
                  className="gps-route"
                  viewBox="0 0 300 400"
                  preserveAspectRatio="none"
                >
                  <polyline
                    points="50,350 120,280 180,200 250,100"
                    fill="none"
                    stroke="rgba(244, 120, 32, 0.4)"
                    strokeWidth="2"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Ghost watermark */}
        <div className="gps-hero__ghost-text">GPS+</div>
      </section>

      {/* ── TRACKER INPUT SECTION ────────────────────────── */}
      {/* <section className="gps-tracker-section">
        <div className="gps-tracker__inner">
          <h2 className="gps-tracker__heading">Quick Tracking</h2>
          <p className="gps-tracker__subtext">
            Enter your shipment tracking number to get started
          </p>

          <div className="gps-tracker__form">
            <input
              type="text"
              placeholder="Enter your tracking ID (e.g. SEN-2024-12345)"
              className="gps-tracker__input"
            />
            <button className="cta-primary">Track Now</button>
          </div>

          <p className="gps-tracker__hint">
            📧 No tracking ID? Check your confirmation email or{" "}
            <span style={{ color: "#f47820", cursor: "pointer" }}>
              contact support
            </span>
            .
          </p>
        </div>
      </section> */}

      {/* ── FEATURES GRID ─────────────────────────────────── */}
      <section className="gps-features">
        <div className="gps-features__inner">
          <div className="gps-features__header">
            <div>
              <div className="section-label" style={{ marginBottom: 16 }}>
                ▶ Why Choose Our Tracking
              </div>
              <h2 className="gps-features__heading">
                Market-Leading{" "}
                <span className="gps-features__accent">Features</span>
              </h2>
            </div>
            <p className="gps-features__intro">
              We don't just tell you where your cargo is — we give you complete
              visibility and control over your shipment from start to finish.
            </p>
          </div>

          <div className="gps-features__grid">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="gps-feature-card"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="gps-feature-card__icon">{feature.icon}</div>
                <h3 className="gps-feature-card__title">{feature.title}</h3>
                <p className="gps-feature-card__desc">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ──────────────────────────────────── */}
      <section className="gps-how-it-works">
        <div className="gps-how__inner">
          <div className="section-label" style={{ marginBottom: 16 }}>
            ▶ The Process
          </div>
          <h2 className="gps-how__heading">
            How <span className="gps-how__accent">Tracking</span> Works
          </h2>

          <div className="gps-steps">
            {steps.map((step, idx) => (
              <div key={idx} className="gps-step">
                <div className="gps-step__number">{step.number}</div>
                <h3 className="gps-step__title">{step.title}</h3>
                <p className="gps-step__desc">{step.desc}</p>

                {/* Connector line (except on last step) */}
                {idx < steps.length - 1 && (
                  <div className="gps-step__connector" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── APP PROMOTION ────────────────────────────────── */}
      <section className="gps-app-section">
        <div className="gps-app-section__glow" />
        <div className="gps-app-section__inner">
          <div className="gps-app-section__content">
            <div className="section-label" style={{ marginBottom: 16 }}>
              ▶ Mobile Experience
            </div>
            <h2 className="gps-app-section__heading">
              Download the{" "}
              <span className="gps-app-section__accent">
                SENPLUS Tracker App
              </span>
            </h2>
            <p className="gps-app-section__text">
              Get real-time GPS tracking, offline maps, and instant
              notifications on your smartphone. Available on iOS and Android —
              search for <strong>'SENPLUS Tracker'</strong> in your app store.
            </p>

            <div className="gps-app-features">
              <div className="gps-app-feature">
                <span className="gps-app-feature__icon">✓</span>
                <span>Real-time live tracking</span>
              </div>
              <div className="gps-app-feature">
                <span className="gps-app-feature__icon">✓</span>
                <span>Push notifications for every update</span>
              </div>
              <div className="gps-app-feature">
                <span className="gps-app-feature__icon">✓</span>
                <span>Offline maps for areas with no signal</span>
              </div>
              <div className="gps-app-feature">
                <span className="gps-app-feature__icon">✓</span>
                <span>Instant proof of delivery photos</span>
              </div>
            </div>

            <button
              className="cta-primary"
              style={{ marginTop: 32, fontSize: "1.05rem" }}
            >
              Search 'SENPLUS Tracker' in Your App Store
            </button>
          </div>

          <div className="gps-app-section__visual">
            <div className="gps-app-mockup">
              <div className="gps-app-screen">
                <div className="gps-app-header">SENPLUS Tracker</div>
                <div className="gps-app-content">
                  <div className="gps-app-status">In Transit</div>
                  <div className="gps-app-eta">ETA: 2:45 PM</div>
                  <div className="gps-app-pin">📍</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CONTACT SECTION ───────────────────────────────── */}
      <section className="gps-contact-section">
        <div className="gps-contact__inner">
          <div className="section-label" style={{ marginBottom: 20 }}>
            ▶ Need Support?
          </div>
          <h2 className="gps-contact__heading">
            Get in Touch with Our{" "}
            <span className="gps-contact__accent">GPS Team</span>
          </h2>

          <div className="gps-contact__grid">
            {/* Hotline */}
            <div className="gps-contact-card">
              <div className="gps-contact-card__icon">📞</div>
              <h3 className="gps-contact-card__title">Tracking Hotline</h3>
              <p className="gps-contact-card__number">+233 53 375 5587</p>
              <p className="gps-contact-card__info">
                Available 24/7 for urgent tracking queries
              </p>
            </div>

            {/* WhatsApp */}
            <div className="gps-contact-card">
              <div className="gps-contact-card__icon">💬</div>
              <h3 className="gps-contact-card__title">WhatsApp Support</h3>
              <p className="gps-contact-card__number">+233 53 375 5587</p>
              <p className="gps-contact-card__info">
                Quick replies to common tracking questions
              </p>
            </div>

            {/* General Enquiries */}
            <div className="gps-contact-card">
              <div className="gps-contact-card__icon">✉️</div>
              <h3 className="gps-contact-card__title">General Enquiries</h3>
              <p className="gps-contact-card__number">
                senpluscallcenter@gmail.com
              </p>
              <p className="gps-contact-card__info">
                For billing, account, and partnership questions
              </p>
            </div>

            {/* Operations */}
            <div className="gps-contact-card">
              <div className="gps-contact-card__icon">🎯</div>
              <h3 className="gps-contact-card__title">Operations Team</h3>
              <p className="gps-contact-card__number">
                senpluscallcenter@gmail.com
              </p>
              <p className="gps-contact-card__info">
                For delay reports and real-time fleet coordination
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ SECTION ───────────────────────────────────── */}
      <section className="gps-faq-section">
        <div className="gps-faq__inner">
          <div className="gps-faq__header">
            <div>
              <div className="section-label" style={{ marginBottom: 16 }}>
                ▶ Questions
              </div>
              <h2 className="gps-faq__heading">
                Frequently Asked{" "}
                <span className="gps-faq__accent">Questions</span>
              </h2>
            </div>
            <p className="gps-faq__intro">
              Everything you need to know about tracking your shipment with
              SENPLUS.
            </p>
          </div>

          <div className="gps-faq__list">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className={`gps-faq-item ${activeFaq === idx ? "gps-faq-item--open" : ""}`}
              >
                <button
                  className="gps-faq-item__trigger"
                  onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                >
                  <span className="gps-faq-item__q">{faq.q}</span>
                  <span className="gps-faq-item__toggle">+</span>
                </button>
                <div className="gps-faq-item__content">
                  <p className="gps-faq-item__a">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ─────────────────────────────────────── */}
      <section className="gps-final-cta">
        <div className="gps-final-cta__glow" />
        <div className="gps-final-cta__inner">
          <h2 className="gps-final-cta__heading">
            Ready to Track Your{" "}
            <span className="gps-final-cta__accent">Next Shipment?</span>
          </h2>
          <p className="gps-final-cta__text">
            Get started with real-time GPS tracking in seconds. No account
            needed for your first shipment.
          </p>
          <div className="gps-final-cta__buttons">
            <button className="cta-primary" style={{ fontSize: "1.05rem" }}>
              Track Now
            </button>
            <button className="cta-secondary">📞 Call Us</button>
          </div>
        </div>
      </section>
    </main>
  );
}
