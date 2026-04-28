const meta = [
  { k: "National Anthem", v: "Al-Nasheed Al-Watani" },
  { k: "Independence Day", v: "19 June 1961" },
  { k: "National Day", v: "25 February" },
  { k: "Liberation Day", v: "26 February" },
  { k: "Capital", v: "Kuwait City" },
  { k: "Currency", v: "Kuwaiti Dinar (KWD)" },
];

export default function Identity() {
  return (
    <section id="identity" className="identity">
      <div className="container">
        <div className="reveal">
          <div className="section-label" style={{ justifyContent: "center" }}>
            07 — National Identity
          </div>
          <h2 className="section-title">Four Colors, One Spirit</h2>
          <p
            className="section-lede"
            style={{ marginLeft: "auto", marginRight: "auto" }}
          >
            Black for battles past, white for the deeds within them, green for
            the fertile land, and red for the swords of those who defended it.
          </p>
        </div>

        <div className="flag reveal">
          <div className="flag-inner">
            <div className="green" />
            <div className="white" />
            <div className="red" />
            <div className="black" />
          </div>
        </div>

        <div className="identity-meta reveal-stagger">
          {meta.map((m) => (
            <div className="cell" key={m.k}>
              <div className="k">{m.k}</div>
              <div className="v">{m.v}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
