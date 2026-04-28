export default function Footer() {
  return (
    <footer>
      <div className="salute arabic">عاشت الكويت</div>
      <div className="credit">An editorial tribute · 2026</div>
      <div className="dhow-sea" aria-hidden>
        <div className="dhow">
          <svg viewBox="0 0 120 80">
            <g fill="none" stroke="#c8a96e" strokeWidth="1.4">
              <path d="M10 55 Q60 75 110 55 L100 65 L20 65 Z" fill="#0a1628" />
              <line x1="60" y1="55" x2="60" y2="8" />
              <path d="M60 8 L60 50 L18 50 Z" fill="rgba(200,169,110,0.15)" />
              <path d="M60 14 L60 48 L98 48 Z" fill="rgba(200,169,110,0.08)" />
            </g>
          </svg>
        </div>
      </div>
    </footer>
  );
}
