export default function Geography() {
  return (
    <section id="geography" className="geo">
      <div className="container">
        <div className="reveal">
          <div className="section-label">04 — The Land</div>
          <h2 className="section-title">Six Governorates, One Coastline</h2>
          <p className="section-lede">
            A compact territory of 17,818 km² unfolds along 499 km of coastline,
            divided into six governorates each with its own character.
          </p>
        </div>

        <div className="geo-grid reveal">
          <div className="geo-map">
            <svg viewBox="0 0 500 600" aria-label="Map of Kuwait">
              <defs>
                <filter id="glow">
                  <feGaussianBlur stdDeviation="3" result="b" />
                  <feMerge>
                    <feMergeNode in="b" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>
              {/* Stylized governorate shapes */}
              <g filter="url(#glow)">
                <path
                  className="gov"
                  d="M260 60 L380 90 L400 180 L300 200 L240 140 Z"
                />
                <text x="310" y="140">Jahra</text>

                <path
                  className="gov"
                  d="M300 200 L400 180 L420 260 L330 280 Z"
                />
                <text x="355" y="240">Capital</text>

                <path
                  className="gov"
                  d="M330 280 L420 260 L430 340 L350 360 Z"
                />
                <text x="375" y="320">Hawalli</text>

                <path
                  className="gov"
                  d="M350 360 L430 340 L440 430 L360 450 Z"
                />
                <text x="385" y="400">Farwaniya</text>

                <path
                  className="gov"
                  d="M360 450 L440 430 L445 520 L370 540 Z"
                />
                <text x="395" y="490">Mubarak</text>

                <path
                  className="gov"
                  d="M370 540 L445 520 L420 580 L355 575 Z"
                />
                <text x="395" y="560">Ahmadi</text>
              </g>
              {/* Coastline accent */}
              <path
                d="M240 140 L300 200 L330 280 L350 360 L360 450 L370 540 L355 575"
                fill="none"
                stroke="#c8a96e"
                strokeWidth="2"
                strokeDasharray="4 6"
                opacity="0.6"
              />
              {/* Compass */}
              <g transform="translate(70 90)" stroke="#c8a96e" fill="none">
                <circle r="22" />
                <line x1="0" y1="-22" x2="0" y2="22" />
                <line x1="-22" y1="0" x2="22" y2="0" />
                <text
                  x="0"
                  y="-30"
                  fill="#c8a96e"
                  fontSize="10"
                  textAnchor="middle"
                  fontFamily="Tajawal"
                >
                  N
                </text>
              </g>
            </svg>
          </div>

          <div>
            <h3 style={{ fontSize: "1.6rem", marginBottom: "0.75rem" }}>
              Climate
            </h3>
            <p style={{ color: "rgba(232,223,200,0.7)" }}>
              An arid desert climate dictates the rhythm of life — searing
              summers tempered by cool, brief winters and the famed{" "}
              <em>shamal</em> winds.
            </p>
            <div className="climate">
              <div className="climate-card">
                <span className="icon" aria-hidden>☀</span>
                <div className="temp">~50°C</div>
                <div className="season">Summer</div>
              </div>
              <div className="climate-card">
                <span className="icon" aria-hidden>❄</span>
                <div className="temp">~13°C</div>
                <div className="season">Winter</div>
              </div>
              <div className="climate-card">
                <span className="icon" aria-hidden>⌇</span>
                <div className="temp">499 km</div>
                <div className="season">Coastline</div>
              </div>
              <div className="climate-card">
                <span className="icon" aria-hidden>◐</span>
                <div className="temp">9</div>
                <div className="season">Islands</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
