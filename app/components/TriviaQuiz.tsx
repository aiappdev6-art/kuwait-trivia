"use client";
import { useMemo, useState } from "react";

export type Question = {
  q: string;
  options: string[];
  answer: number;
  category?: string;
  difficulty?: string;
};

export default function TriviaQuiz({ questions }: { questions: Question[] }) {
  const [picks, setPicks] = useState<(number | null)[]>(
    () => Array(questions.length).fill(null)
  );
  const [submitted, setSubmitted] = useState(false);

  const score = useMemo(
    () =>
      picks.reduce<number>(
        (s, p, i) => s + (p === questions[i].answer ? 1 : 0),
        0
      ),
    [picks, questions]
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
    setPicks(Array(questions.length).fill(null));
    setSubmitted(false);
    if (typeof window !== "undefined") {
      window.location.reload();
    }
  };

  const verdict =
    score === questions.length
      ? " — A geographer of the highest order."
      : score >= Math.ceil(questions.length * 0.7)
      ? " — Sharp instincts. Well done."
      : score >= Math.ceil(questions.length * 0.4)
      ? " — A respectable showing."
      : " — The world is wide. Try again.";

  return (
    <div className="quiz reveal">
      {questions.map((q, qi) => {
        const pick = picks[qi];
        return (
          <div className="quiz-card" key={qi}>
            <div className="q-num">
              Q{qi + 1}
              {q.difficulty && (
                <span className="q-tag">{q.difficulty}</span>
              )}
            </div>
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
                The correct answer is{" "}
                <strong>{q.options[q.answer]}</strong>.
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
              You scored <strong>{score}</strong> / {questions.length}
              <span className="verdict">{verdict}</span>
            </div>
            <button className="btn-primary ghost" onClick={reset}>
              New Questions
            </button>
          </>
        )}
      </div>
    </div>
  );
}
