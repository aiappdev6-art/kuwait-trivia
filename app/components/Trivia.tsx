"use client";
import { useMemo, useState } from "react";

type Question = {
  q: string;
  options: string[];
  answer: number;
  fact: string;
};

const QUESTIONS: Question[] = [
  {
    q: "In which year did Kuwait gain independence from the United Kingdom?",
    options: ["1945", "1952", "1961", "1971"],
    answer: 2,
    fact: "Kuwait declared full sovereignty on 19 June 1961.",
  },
  {
    q: "What is the official currency of Kuwait?",
    options: ["Saudi Riyal", "Kuwaiti Dinar", "UAE Dirham", "Qatari Riyal"],
    answer: 1,
    fact: "The Kuwaiti Dinar (KWD) is consistently among the world's highest-valued currencies.",
  },
  {
    q: "How many governorates make up the State of Kuwait?",
    options: ["4", "5", "6", "7"],
    answer: 2,
    fact: "Capital, Hawalli, Farwaniya, Mubarak Al-Kabeer, Ahmadi, and Jahra.",
  },
  {
    q: "Which year marks the discovery of oil in Kuwait's Burgan field?",
    options: ["1928", "1938", "1948", "1958"],
    answer: 1,
    fact: "Discovered in 1938, Burgan is one of the largest oil fields on Earth.",
  },
  {
    q: "When is Kuwait's National Day celebrated?",
    options: ["19 June", "25 February", "26 February", "2 August"],
    answer: 1,
    fact: "National Day falls on 25 February, the day Sheikh Abdullah Al-Salem ascended in 1950.",
  },
];

export default function Trivia() {
  const [picks, setPicks] = useState<(number | null)[]>(
    () => Array(QUESTIONS.length).fill(null)
  );
  const [submitted, setSubmitted] = useState(false);

  const score = useMemo(
    () => picks.reduce<number>((s, p, i) => s + (p === QUESTIONS[i].answer ? 1 : 0), 0),
    [picks]
  );
  const allAnswered = picks.every((p) => p !== null);

  const choose = (qi: number, oi: number) => {
    if (submitted) return;
    setPicks((prev) => {
      const next = [...prev];
      next[qi] = oi;
      return next;
    });
  };

  const reset = () => {
    setPicks(Array(QUESTIONS.length).fill(null));
    setSubmitted(false);
  };

  return (
    <section id="trivia" className="trivia">
      <div className="container">
        <div className="reveal">
          <div className="section-label">01 — Test Your Knowledge</div>
          <h2 className="section-title">How Well Do You Know Kuwait?</h2>
          <p className="section-lede">
            Five questions, one badge of honor. No hints — just instinct,
            memory, and a little luck.
          </p>
        </div>

        <div className="quiz reveal">
          {QUESTIONS.map((q, qi) => {
            const pick = picks[qi];
            return (
              <div className="quiz-card" key={qi}>
                <div className="q-num">Q{qi + 1}</div>
                <h3 className="q-text">{q.q}</h3>
                <div className="opts">
                  {q.options.map((opt, oi) => {
                    const isPicked = pick === oi;
                    const isCorrect = q.answer === oi;
                    let cls = "opt";
                    if (submitted) {
                      if (isCorrect) cls += " correct";
                      else if (isPicked) cls += " wrong";
                    } else if (isPicked) cls += " picked";
                    return (
                      <button
                        type="button"
                        key={oi}
                        className={cls}
                        onClick={() => choose(qi, oi)}
                        disabled={submitted}
                      >
                        <span className="dot" />
                        <span>{opt}</span>
                      </button>
                    );
                  })}
                </div>
                {submitted && (
                  <div className="fact">
                    <span className="fact-tag">
                      {pick === q.answer ? "✓ Correct" : "✕ Not quite"}
                    </span>
                    {q.fact}
                  </div>
                )}
              </div>
            );
          })}

          <div className="quiz-actions">
            {!submitted ? (
              <button
                className="btn-primary"
                disabled={!allAnswered}
                onClick={() => setSubmitted(true)}
              >
                Reveal Score
              </button>
            ) : (
              <>
                <div className="score">
                  You scored <strong>{score}</strong> / {QUESTIONS.length}
                  <span className="verdict">
                    {score === 5
                      ? " — A true son or daughter of Kuwait."
                      : score >= 3
                      ? " — Well versed in the desert kingdom."
                      : " — Time for another scroll through the page."}
                  </span>
                </div>
                <button className="btn-primary ghost" onClick={reset}>
                  Try Again
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
