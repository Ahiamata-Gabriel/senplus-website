export default function About() {
  return (
    <main>
      <section style={{ paddingTop: "120px", paddingBottom: "80px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 20px" }}>
          <div style={{ marginBottom: 80 }}>
            <div className="section-label" style={{ marginBottom: 16 }}>
              ▶ About Us
            </div>
            <h1 style={{ fontSize: "3rem", marginBottom: 40 }}>
              Moving Good Energy Across the Nation
            </h1>
            <p style={{ fontSize: "1.2rem", lineHeight: 1.8, color: "rgba(255,255,255,0.8)", marginBottom: 40 }}>
              SENPLUS Transport & Logistics is a modern, licenced, and fully insured 
              logistics provider dedicated to moving your cargo safely and on time, 
              every time. With a fleet of over 350 vehicles and operations across 70+ 
              destinations nationwide, we combine cutting-edge technology with expert 
              drivers to deliver results.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "60px", marginBottom: 80 }}>
            <div>
              <h3 style={{ fontSize: "1.8rem", marginBottom: 20 }}>Our Mission</h3>
              <p style={{ lineHeight: 1.8, color: "rgba(255,255,255,0.8)" }}>
                To be the most reliable and customer-focused logistics partner in the nation, 
                delivering excellence in every mile travelled.
              </p>
            </div>
            <div>
              <h3 style={{ fontSize: "1.8rem", marginBottom: 20 }}>Our Vision</h3>
              <p style={{ lineHeight: 1.8, color: "rgba(255,255,255,0.8)" }}>
                To transform logistics through innovation, sustainability, and uncompromising 
                dedication to our customers and the communities we serve.
              </p>
            </div>
          </div>

          <div>
            <h2 style={{ fontSize: "2.5rem", marginBottom: 40 }}>Why Choose SENPLUS?</h2>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "40px" }}>
              {[
                { title: "Licenced & Insured", desc: "Full compliance with all transport regulations and comprehensive insurance coverage" },
                { title: "99% Customer Satisfaction", desc: "Proven track record of reliability and customer service excellence" },
                { title: "350+ Modern Vehicles", desc: "State-of-the-art fleet regularly maintained and upgraded" },
                { title: "98.6% On-Time Delivery", desc: "Real-time tracking and dedicated project managers" },
                { title: "ADR Certified Drivers", desc: "Certified professionals for hazardous goods transport" },
                { title: "24/7 Operations", desc: "Round-the-clock support and availability for your needs" },
              ].map((item, i) => (
                <div key={i} style={{ padding: "30px", background: "rgba(255,255,255,0.05)", borderRadius: "8px" }}>
                  <h4 style={{ marginBottom: 10 }}>{item.title}</h4>
                  <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.95rem" }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
