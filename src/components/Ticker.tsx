import { ticker } from "@/lib/site";

export function Ticker() {
  return (
    <div className="ticker" aria-hidden="true">
      <div className="ticker-track">
        <ul>
          {ticker.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <ul className="ticker-clone">
          {ticker.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
