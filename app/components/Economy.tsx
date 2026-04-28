const industries = [
  { name: "Petroleum & Refining", tag: "Pillar" },
  { name: "Petrochemicals", tag: "Strategic" },
  { name: "Banking & Finance", tag: "Growing" },
  { name: "Logistics & Trade", tag: "Emerging" },
  { name: "Real Estate", tag: "Established" },
];

export default function Economy() {
  return (
    <section id="economy" className="econ">
      <div className="container">
        <div className="reveal">
          <div className="section-label">05 — The Economy</div>
          <h2 className="section-title">Built on Black Gold, Looking Beyond</h2>
          <p className="section-lede">
            Petroleum still anchors the nation's revenues, but a quiet
            diversification is reshaping what comes next.
          </p>
        </div>

        <div className="donut-wrap reveal">
          <div className="donut">
            <svg viewBox="0 0 200 200">
              <circle className="arc arc-bg" cx="100" cy="100" r="90" />
              <circle className="arc arc-fg" cx="100" cy="100" r="90" />
            </svg>
            <div className="center">
              <div className="v">90</div>
              <div className="l">Govt Revenue from Oil</div>
            </div>
          </div>

          <div>
            <h3 style={{ fontSize: "1.5rem", marginBottom: "1.25rem" }}>
              Pillars of the Economy
            </h3>
            <ul className="industries">
              {industries.map((i) => (
                <li key={i.name}>
                  <span>{i.name}</span>
                  <span>{i.tag}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
