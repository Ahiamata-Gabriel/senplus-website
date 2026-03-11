import { STATS } from "../../Constants/data.js";
import "./Stats.css";

export default function Stats() {
  return (
    <section className="stats">
      <div className="stats__inner">
        <div className="stats__grid">
          {STATS.map((s, i) => (
            <div key={i} className="stats__item">
              <span className="stats__value">{s.value}</span>
              <span className="stats__label">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
