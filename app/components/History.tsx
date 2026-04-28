const milestones = [
  {
    year: "Pre-1900",
    title: "The Pearl Diving Era",
    body: "Kuwaiti dhows ply the Gulf, harvesting some of the world's finest pearls — the cornerstone of the early economy.",
  },
  {
    year: "1938",
    title: "Oil Discovery",
    body: "The Burgan field is uncovered, one of the largest in the world, redirecting Kuwait's destiny toward modernity.",
  },
  {
    year: "1961",
    title: "Independence",
    body: "On 19 June, Kuwait declares full sovereignty from the United Kingdom and joins the Arab League.",
  },
  {
    year: "1990",
    title: "The Gulf War",
    body: "Iraqi invasion triggers a global coalition response. Liberation arrives 26 February 1991.",
  },
  {
    year: "1991+",
    title: "Reconstruction",
    body: "A nation rebuilds — extinguishing oil-well fires, restoring institutions, and emerging stronger.",
  },
  {
    year: "Today",
    title: "Vision 2035",
    body: "Kuwait charts a future as a regional financial, cultural, and trade hub — \"New Kuwait\".",
  },
];

const culture = [
  {
    glyph: "ديوانية",
    title: "Diwaniya",
    body: "The cherished evening gathering — part salon, part town hall — where ideas, news, and friendships are exchanged.",
  },
  {
    glyph: "تراث",
    title: "Qurain Heritage Village",
    body: "A living testament to the 1990 resistance, preserved as a national memorial of courage.",
  },
  {
    glyph: "متحف",
    title: "National Museum",
    body: "Home to the Sadu House and centuries of Bedouin craft, calligraphy, and maritime heritage.",
  },
];

export default function History() {
  return (
    <section id="history" className="history">
      <div className="container">
        <div className="reveal">
          <div className="section-label">03 — Continuum</div>
          <h2 className="section-title">A Story Carried by Wind and Tide</h2>
          <p className="section-lede">
            From pearl divers to petroleum, from invasion to renaissance — the
            Kuwaiti chronicle is one of resilience written across generations.
          </p>
        </div>

        <div className="timeline-rail reveal">
          {milestones.map((m) => (
            <div className="tl-item" key={m.year}>
              <div className="dot" />
              <div className="year">{m.year}</div>
              <h3>{m.title}</h3>
              <p>{m.body}</p>
            </div>
          ))}
        </div>

        <div className="culture-grid reveal-stagger">
          {culture.map((c) => (
            <div className="culture-card" key={c.title}>
              <div className="glyph arabic">{c.glyph}</div>
              <h4>{c.title}</h4>
              <p>{c.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
