import { TICKER_ITEMS } from "../../constants/data.js";
import "./Ticker.css";

export default function Ticker() {
  // Duplicate the items to create a seamless infinite loop
  const repeated = [...TICKER_ITEMS, ...TICKER_ITEMS];

  return (
    <div className="ticker">
      <div className="ticker__track">
        {repeated.map((item, i) => (
          <span key={i} className="ticker__item">
            ◆ {item}
          </span>
        ))}
      </div>
    </div>
  );
}
