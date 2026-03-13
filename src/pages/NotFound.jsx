import { Link, useNavigate } from "react-router-dom";
import "./NotFound.css";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <main className="not-found">
      <section className="not-found__hero">
        <div className="not-found__grid" />
        <div className="not-found__accent-bar" />

        <div className="not-found__inner">
          <div className="not-found__content">
            <div className="section-label" style={{ marginBottom: 24 }}>
              ▶ Oops
            </div>

            <h1 className="not-found__heading">
              <span className="not-found__code">404</span>
            </h1>

            <p className="not-found__message">
              Looks like this page took a wrong turn. The route you're looking
              for doesn't exist on our network.
            </p>

            <div className="not-found__ctas">
              <Link to="/" className="cta-primary">
                Back to Home
              </Link>
              <button
                className="cta-secondary"
                onClick={() => {
                  navigate("/");
                  setTimeout(() => {
                    const servicesSection = document.getElementById("services");
                    if (servicesSection) {
                      const navHeight =
                        document.querySelector(".navbar")?.offsetHeight || 80;
                      const elementPosition =
                        servicesSection.getBoundingClientRect().top +
                        window.scrollY;
                      window.scrollTo({
                        top: elementPosition - navHeight - 16,
                        behavior: "smooth",
                      });
                    }
                  }, 100);
                }}
              >
                View Services
              </button>
            </div>
          </div>

          <div className="not-found__illustration">
            <div className="not-found__truck">
              <svg
                viewBox="0 0 200 160"
                xmlns="http://www.w3.org/2000/svg"
                className="not-found__truck-svg"
              >
                {/* Truck cabin */}
                <rect
                  x="30"
                  y="60"
                  width="45"
                  height="40"
                  fill="none"
                  stroke="#f47820"
                  strokeWidth="2"
                />
                {/* Truck bed */}
                <rect
                  x="75"
                  y="65"
                  width="95"
                  height="35"
                  fill="none"
                  stroke="#f47820"
                  strokeWidth="2"
                />
                {/* Front wheel */}
                <circle
                  cx="45"
                  cy="110"
                  r="8"
                  fill="none"
                  stroke="#f47820"
                  strokeWidth="2"
                />
                {/* Back wheel 1 */}
                <circle
                  cx="145"
                  cy="110"
                  r="8"
                  fill="none"
                  stroke="#f47820"
                  strokeWidth="2"
                />
                {/* Back wheel 2 */}
                <circle
                  cx="160"
                  cy="110"
                  r="8"
                  fill="none"
                  stroke="#f47820"
                  strokeWidth="2"
                />
                {/* Road line */}
                <line
                  x1="0"
                  y1="125"
                  x2="200"
                  y2="125"
                  stroke="rgba(244, 120, 32, 0.2)"
                  strokeWidth="1"
                  strokeDasharray="5,5"
                />
                {/* Question mark */}
                <text
                  x="100"
                  y="35"
                  fontSize="32"
                  fontWeight="bold"
                  fill="#f47820"
                  textAnchor="middle"
                >
                  ?
                </text>
              </svg>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
