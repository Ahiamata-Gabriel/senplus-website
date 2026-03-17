
import fatao from "../assets/fatao.webp";
import reuben from "../assets/reuben.webp";

import patrick from "../assets/patrick.webp";
import avaFallback from "../assets/ava.jpg";
import josepjine from "../assets/josephine.webp";
import edwin from "../assets/edwin.webp";

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
                  id: "license-insured",
                  title: "Licenced & Insured",
                  desc: "Full compliance with all transport regulations and comprehensive insurance coverage",
                },
                {
                  id: "satisfaction",
                  title: "99% Customer Satisfaction",
                  desc: "Proven track record of reliability and customer service excellence",
                },
                {
                  id: "vehicles",
                  title: "350+ Modern Vehicles",
                  desc: "State-of-the-art fleet regularly maintained and upgraded",
                },
                {
                  id: "delivery",
                  title: "98.6% On-Time Delivery",
                  desc: "Real-time tracking and dedicated project managers",
                },
                {
                  id: "adr-drivers",
                  title: "ADR Certified Drivers",
                  desc: "Certified professionals for hazardous goods transport",
                },
                {
                  id: "operations",
                  title: "24/7 Operations",
                  desc: "Round-the-clock support and availability for your needs",
                },
              ].map((item) => (
                <div key={item.id} className="about-why-card">
                  <h4 className="about-why-card__title">{item.title}</h4>
                  <p className="about-why-card__desc">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="about-management">
            <div className="section-label" style={{ marginBottom: 16 }}>
              ▶ Leadership
            </div>
            <h2 className="about-management__heading">
              Meet Our{" "}
              <span className="about-management__accent">Management Team</span>
            </h2>
            <p className="about-management__intro">
              Experienced professionals leading SENPLUS with expertise in
              logistics, operations, and customer satisfaction.
            </p>

            <div className="about-management__grid">
              {[
                {
                  id: "m-edwin",
                  name: "Edwin John",
                  department: "Safety Manager & Compliance Officer",
                  position: "Safety Manager",
                  image: edwin,
                },
                {
                  id: "m-abdul",
                  name: "Abdul-Fatao",
                  department: "Human Resources & Administration",
                  position: "Human Resource Manager",
                  image: fatao,
                },
                {
                  id: "m-reuben",
                  name: "Reuben Kwabla",
                  department: "Operations",
                  position: "Operations Manager",
                  image: reuben,
                },
                {
                  id: "m-josephine",
                  name: "Josephine Antwi",
                  department: "Finance",
                  position: "Chief Accountant",
                  image: josepjine,
                },
                {
                  id: "m-patrick",
                  name: "Patrick Eli",
                  department: "GPS & Call Centre",
                  position: "GPS/Call Centre Manager",
                  image: patrick,
                },
                {
                  id: "m-ebenezer",
                  name: "Ebenezer Ahorlu",
                  department: "Customer Service & Warehousing",
                  position: "Warehouse Manager",
                  image: avaFallback,
                },
              ].map((member) => (
                <div key={member.id} className="about-management-card">
                  <img
                    src={member.image || avaFallback}
                    alt={member.name}
                    className="about-management-card__image"
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src = avaFallback;
                    }}
                  />
                  <div className="about-management-card__content">
                    <h3 className="about-management-card__name">
                      {member.name}
                    </h3>
                    <p className="about-management-card__department">
                      {member.department}
                    </p>
                    <p className="about-management-card__position">
                      {member.position}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
