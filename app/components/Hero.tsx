"use client";
import { useEffect, useState } from "react";

type P = { left: number; size: number; duration: number; delay: number };

export default function Hero() {
  const [particles, setParticles] = useState<P[]>([]);
  useEffect(() => {
    const arr: P[] = Array.from({ length: 45 }, () => ({
      left: Math.random() * 100,
      size: 1 + Math.random() * 3,
      duration: 14 + Math.random() * 18,
      delay: -Math.random() * 25,
    }));
    setParticles(arr);
  }, []);

  return (
    <section className="hero">
      <div className="pattern" />
      <div className="particles">
        {particles.map((p, i) => (
          <span
            key={i}
            className="particle"
            style={{
              left: `${p.left}%`,
              width: `${p.size}px`,
              height: `${p.size}px`,
              animationDuration: `${p.duration}s`,
              animationDelay: `${p.delay}s`,
            }}
          />
        ))}
      </div>

      <div className="hero-content">
        <div className="hero-eyebrow">دولة الكويت · Est. 1961</div>
        <h1>
          <span className="word">State</span>{" "}
          <span className="word">of</span>{" "}
          <span className="word">Kuwait</span>
        </h1>
        <div className="hero-arabic">دَوْلَةُ ٱلْكُوَيْت</div>
        <p className="hero-tagline">Where Ancient Sands Meet Modern Skies</p>
      </div>

      <div className="skyline">
        <svg viewBox="0 0 1600 260" preserveAspectRatio="xMidYMax meet" aria-hidden>
          <g fill="#0a1628" stroke="#c8a96e" strokeWidth="0.6">
            {/* Distant dunes */}
            <path
              d="M0 230 Q200 200 400 220 T800 215 T1200 218 T1600 210 L1600 260 L0 260 Z"
              opacity="0.7"
            />
            {/* Skyline */}
            <rect x="60" y="160" width="40" height="100" />
            <rect x="105" y="130" width="30" height="130" />
            <rect x="140" y="170" width="22" height="90" />
            {/* Kuwait Towers */}
            <g>
              <rect x="200" y="40" width="6" height="220" />
              <ellipse cx="203" cy="80" rx="32" ry="22" />
              <ellipse cx="203" cy="135" rx="20" ry="14" />
            </g>
            <g>
              <rect x="260" y="80" width="5" height="180" />
              <ellipse cx="262" cy="115" rx="22" ry="16" />
            </g>
            <rect x="310" y="150" width="34" height="110" />
            <rect x="350" y="120" width="26" height="140" />
            {/* Liberation Tower */}
            <g>
              <rect x="430" y="20" width="6" height="240" />
              <polygon points="427,20 439,20 433,0" />
              <ellipse cx="433" cy="90" rx="18" ry="10" />
            </g>
            <rect x="470" y="140" width="40" height="120" />
            <rect x="515" y="100" width="30" height="160" />
            {/* Al Hamra (twisted) */}
            <g>
              <polygon points="585,260 585,40 615,30 625,260" />
              <polygon points="600,40 612,32 612,260 600,260" fill="#0a1628" />
            </g>
            <rect x="650" y="120" width="36" height="140" />
            <rect x="690" y="160" width="28" height="100" />
            <rect x="725" y="100" width="40" height="160" />
            <rect x="775" y="150" width="30" height="110" />
            <rect x="815" y="80" width="42" height="180" />
            <polygon points="815,80 836,55 857,80" />
            {/* Mosque dome */}
            <g>
              <ellipse cx="930" cy="200" rx="60" ry="30" />
              <path d="M870 200 Q930 110 990 200 Z" />
              <rect x="868" y="200" width="6" height="60" />
              <rect x="986" y="200" width="6" height="60" />
              <polygon points="868,200 874,200 871,178" />
              <polygon points="986,200 992,200 989,178" />
              <rect x="927" y="80" width="6" height="40" />
              <polygon points="924,80 936,80 930,60" />
            </g>
            <rect x="1020" y="140" width="34" height="120" />
            <rect x="1060" y="100" width="28" height="160" />
            <rect x="1095" y="160" width="40" height="100" />
            <rect x="1140" y="120" width="30" height="140" />
            <rect x="1180" y="80" width="40" height="180" />
            <rect x="1230" y="140" width="30" height="120" />
            <rect x="1270" y="100" width="36" height="160" />
            <rect x="1315" y="160" width="28" height="100" />
            <rect x="1350" y="120" width="40" height="140" />
            <rect x="1400" y="170" width="30" height="90" />
            <rect x="1440" y="140" width="34" height="120" />
            <rect x="1485" y="180" width="26" height="80" />
            <rect x="1520" y="160" width="40" height="100" />
            {/* Window glints */}
            <g fill="#c8a96e" opacity="0.4">
              <rect x="115" y="150" width="3" height="3" />
              <rect x="120" y="170" width="3" height="3" />
              <rect x="475" y="170" width="3" height="3" />
              <rect x="730" y="130" width="3" height="3" />
              <rect x="1185" y="120" width="3" height="3" />
              <rect x="1280" y="140" width="3" height="3" />
            </g>
          </g>
        </svg>
      </div>

      <div className="scroll-cue">Scroll</div>
    </section>
  );
}
