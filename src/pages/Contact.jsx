import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you for reaching out! We'll be in touch soon.");
    setFormData({ name: "", email: "", phone: "", company: "", message: "" });
  };

  return (
    <main>
      <section style={{ paddingTop: "120px", paddingBottom: "80px" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto", padding: "0 20px" }}>
          <div style={{ marginBottom: 60, textAlign: "center" }}>
            <div className="section-label" style={{ marginBottom: 16, justifyContent: "center" }}>
              ▶ Get In Touch
            </div>
            <h1 style={{ fontSize: "3rem", marginBottom: 20 }}>Contact Us</h1>
            <p style={{ fontSize: "1.1rem", color: "rgba(255,255,255,0.7)" }}>
              Have a question or ready to move your cargo? Get in touch with our team.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "60px", marginBottom: 60 }}>
            <div>
              <h3 style={{ marginBottom: 30 }}>Contact Information</h3>
              <div style={{ marginBottom: 40 }}>
                <h4 style={{ marginBottom: 8 }}>📞 Phone</h4>
                <p style={{ color: "rgba(255,255,255,0.7)" }}>+1 (555) 123-4567</p>
              </div>
              <div style={{ marginBottom: 40 }}>
                <h4 style={{ marginBottom: 8 }}>📧 Email</h4>
                <p style={{ color: "rgba(255,255,255,0.7)" }}>hello@senplus.com</p>
              </div>
              <div style={{ marginBottom: 40 }}>
                <h4 style={{ marginBottom: 8 }}>📍 Address</h4>
                <p style={{ color: "rgba(255,255,255,0.7)" }}>
                  123 Transport Avenue
                  <br />
                  Logistics City, ST 12345
                </p>
              </div>
              <div>
                <h4 style={{ marginBottom: 8 }}>🕒 Hours</h4>
                <p style={{ color: "rgba(255,255,255,0.7)" }}>
                  Mon - Fri: 8:00 AM - 6:00 PM
                  <br />
                  24/7 Emergency Support Available
                </p>
              </div>
            </div>

            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              <div>
                <label htmlFor="name" style={{ display: "block", marginBottom: 8, fontWeight: 500 }}>
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  style={{
                    width: "100%",
                    padding: "12px 16px",
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    borderRadius: "8px",
                    color: "white",
                    fontSize: "1rem",
                  }}
                />
              </div>

              <div>
                <label htmlFor="email" style={{ display: "block", marginBottom: 8, fontWeight: 500 }}>
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  style={{
                    width: "100%",
                    padding: "12px 16px",
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    borderRadius: "8px",
                    color: "white",
                    fontSize: "1rem",
                  }}
                />
              </div>

              <div>
                <label htmlFor="phone" style={{ display: "block", marginBottom: 8, fontWeight: 500 }}>
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  style={{
                    width: "100%",
                    padding: "12px 16px",
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    borderRadius: "8px",
                    color: "white",
                    fontSize: "1rem",
                  }}
                />
              </div>

              <div>
                <label htmlFor="company" style={{ display: "block", marginBottom: 8, fontWeight: 500 }}>
                  Company (Optional)
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  style={{
                    width: "100%",
                    padding: "12px 16px",
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    borderRadius: "8px",
                    color: "white",
                    fontSize: "1rem",
                  }}
                />
              </div>

              <div>
                <label htmlFor="message" style={{ display: "block", marginBottom: 8, fontWeight: 500 }}>
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  style={{
                    width: "100%",
                    padding: "12px 16px",
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    borderRadius: "8px",
                    color: "white",
                    fontSize: "1rem",
                    fontFamily: "inherit",
                    resize: "vertical",
                  }}
                />
              </div>

              <button type="submit" className="cta-primary" style={{ fontSize: "1rem", padding: "16px" }}>
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
