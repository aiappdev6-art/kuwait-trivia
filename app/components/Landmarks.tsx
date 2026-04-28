const landmarks = [
  {
    name: "Kuwait Towers",
    sub: "Icon · 1979",
    art: (
      <svg viewBox="0 0 100 200" aria-hidden>
        <g fill="none" stroke="#c8a96e" strokeWidth="1.5">
          <rect x="48" y="10" width="4" height="180" />
          <ellipse cx="50" cy="55" rx="22" ry="14" />
          <ellipse cx="50" cy="95" rx="14" ry="9" />
          <line x1="38" y1="190" x2="62" y2="190" />
        </g>
      </svg>
    ),
  },
  {
    name: "Liberation Tower",
    sub: "Telecoms · 1996",
    art: (
      <svg viewBox="0 0 100 200" aria-hidden>
        <g fill="none" stroke="#c8a96e" strokeWidth="1.5">
          <line x1="50" y1="2" x2="50" y2="195" />
          <ellipse cx="50" cy="80" rx="14" ry="7" />
          <ellipse cx="50" cy="120" rx="10" ry="5" />
          <polygon points="46,2 54,2 50,-12" />
        </g>
      </svg>
    ),
  },
  {
    name: "Grand Mosque",
    sub: "Faith · 1986",
    art: (
      <svg viewBox="0 0 100 200" aria-hidden>
        <g fill="none" stroke="#c8a96e" strokeWidth="1.5">
          <path d="M20 160 Q50 80 80 160 Z" />
          <ellipse cx="50" cy="160" rx="34" ry="10" />
          <line x1="14" y1="160" x2="14" y2="195" />
          <line x1="86" y1="160" x2="86" y2="195" />
          <line x1="50" y1="55" x2="50" y2="35" />
          <polygon points="46,35 54,35 50,22" />
        </g>
      </svg>
    ),
  },
  {
    name: "Al Hamra Tower",
    sub: "Skyline · 2011",
    art: (
      <svg viewBox="0 0 100 200" aria-hidden>
        <g fill="none" stroke="#c8a96e" strokeWidth="1.5">
          <polygon points="35,195 35,20 60,10 70,195" />
          <line x1="48" y1="20" x2="62" y2="195" />
        </g>
      </svg>
    ),
  },
  {
    name: "The Avenues",
    sub: "Commerce · 2007",
    art: (
      <svg viewBox="0 0 120 200" aria-hidden>
        <g fill="none" stroke="#c8a96e" strokeWidth="1.5">
          <path d="M10 160 Q60 100 110 160" />
          <line x1="10" y1="160" x2="10" y2="190" />
          <line x1="110" y1="160" x2="110" y2="190" />
          <line x1="40" y1="130" x2="40" y2="190" />
          <line x1="80" y1="130" x2="80" y2="190" />
        </g>
      </svg>
    ),
  },
  {
    name: "Tareq Rajab Museum",
    sub: "Heritage · 1980",
    art: (
      <svg viewBox="0 0 120 200" aria-hidden>
        <g fill="none" stroke="#c8a96e" strokeWidth="1.5">
          <rect x="20" y="80" width="80" height="100" />
          <polygon points="14,80 60,40 106,80" />
          <line x1="60" y1="40" x2="60" y2="20" />
          <rect x="50" y="130" width="20" height="50" />
        </g>
      </svg>
    ),
  },
];

export default function Landmarks() {
  return (
    <section id="landmarks" className="landmarks">
      <div className="container">
        <div className="reveal">
          <div className="section-label">06 — Landmarks</div>
          <h2 className="section-title">Silhouettes of a Modern Nation</h2>
          <p className="section-lede">
            Spires of glass beside domes of devotion — Kuwait's skyline reads
            like a love letter between past and present.
          </p>
        </div>
        <div className="landmark-grid reveal-stagger">
          {landmarks.map((l) => (
            <div className="landmark" key={l.name}>
              <div className="landmark-inner">
                <div className="art">{l.art}</div>
                <div className="glow" />
                <div className="meta">
                  <h4>{l.name}</h4>
                  <div className="sub">{l.sub}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
