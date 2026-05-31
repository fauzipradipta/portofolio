import { NAV_LABELS } from "../data.js";

export default function Nav({ order }) {
  return (
    <nav className="nav">
      <div className="nav-inner page">
        <a href="#top" className="nav-mark">
          sfpradipta
        </a>
        <div className="nav-links">
          {order.map((k) => (
            <a key={k} href={`#${k}`}>
              {NAV_LABELS[k]}
            </a>
          ))}
        </div>
        <a href="#contact" className="nav-cta">
          Contact
        </a>
      </div>
    </nav>
  );
}
