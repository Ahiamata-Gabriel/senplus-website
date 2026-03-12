import "./About.css";

export default function About() {
  return (
    <main className="about-page">
      <section className="about-hero">
        <div className="about-hero__inner">
          <div className="about-hero__header">
            <div className="section-label" style={{ marginBottom: 16 }}>
              ▶ About Us
            </div>
            <h1 className="about-hero__heading">
              Moving Good Energy Across the Nation
            </h1>
            <p className="about-hero__subtext">
              SENPLUS Transport & Logistics is a modern, licenced, and fully
              insured logistics provider dedicated to moving your cargo safely
              and on time, every time. With a fleet of over 350 vehicles and
              operations across 70+ destinations nationwide, we combine
              cutting-edge technology with expert drivers to deliver results.
            </p>
          </div>

          <div className="about-mission-vision">
            <div className="about-mission-vision__item">
              <h3 className="about-mission-vision__heading">Our Mission</h3>
              <p className="about-mission-vision__text">
                To be the most reliable and customer-focused logistics partner
                in the nation, delivering excellence in every mile travelled.
              </p>
            </div>
            <div className="about-mission-vision__item">
              <h3 className="about-mission-vision__heading">Our Vision</h3>
              <p className="about-mission-vision__text">
                To transform logistics through innovation, sustainability, and
                uncompromising dedication to our customers and the communities
                we serve.
              </p>
            </div>
          </div>

          <div className="about-why-choose">
            <h2 className="about-why-choose__heading">Why Choose SENPLUS?</h2>
            <div className="about-why-choose__grid">
              {[
                {
                  title: "Licenced & Insured",
                  desc: "Full compliance with all transport regulations and comprehensive insurance coverage",
                },
                {
                  title: "99% Customer Satisfaction",
                  desc: "Proven track record of reliability and customer service excellence",
                },
                {
                  title: "350+ Modern Vehicles",
                  desc: "State-of-the-art fleet regularly maintained and upgraded",
                },
                {
                  title: "98.6% On-Time Delivery",
                  desc: "Real-time tracking and dedicated project managers",
                },
                {
                  title: "ADR Certified Drivers",
                  desc: "Certified professionals for hazardous goods transport",
                },
                {
                  title: "24/7 Operations",
                  desc: "Round-the-clock support and availability for your needs",
                },
              ].map((item, i) => (
                <div key={i} className="about-why-card">
                  <h4 className="about-why-card__title">{item.title}</h4>
                  <p className="about-why-card__desc">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
