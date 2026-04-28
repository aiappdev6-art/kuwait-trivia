"use client";
import { useEffect, useState } from "react";

const links = [
  { href: "#trivia", label: "Trivia" },
  { href: "#about", label: "About" },
  { href: "#history", label: "History" },
  { href: "#geography", label: "Geography" },
  { href: "#economy", label: "Economy" },
  { href: "#landmarks", label: "Landmarks" },
  { href: "#identity", label: "Identity" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <nav className={`nav ${scrolled ? "scrolled" : ""}`}>
      <div className="brand">Kuwait</div>
      <ul>
        {links.map((l) => (
          <li key={l.href}>
            <a href={l.href}>{l.label}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
