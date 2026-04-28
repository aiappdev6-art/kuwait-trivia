"use client";
import Counter from "./Counter";

const stats = [
  { num: 4.9, decimals: 1, unit: "M", label: "Population" },
  { num: 17818, decimals: 0, unit: "km²", label: "Total Area" },
  { num: 6, decimals: 0, unit: "", label: "Governorates" },
  { num: 1961, decimals: 0, unit: "", label: "Independence" },
];

export default function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="reveal">
          <div className="section-label">02 — At a Glance</div>
          <h2 className="section-title">A Nation Forged Between Sea and Sand</h2>
          <p className="section-lede">
            Anchored on the northwestern shore of the Arabian Gulf, Kuwait is a
            small country with an outsized story — its capital{" "}
            <em>Kuwait City</em>, its currency the Kuwaiti Dinar, its tongue
            Arabic, and its spirit unmistakably its own.
          </p>
        </div>
        <div className="stats reveal-stagger">
          {stats.map((s) => (
            <div key={s.label} className="stat">
              <span className="num">
                <Counter target={s.num} decimals={s.decimals} />
                {s.unit && <span className="unit">{s.unit}</span>}
              </span>
              <span className="label">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
