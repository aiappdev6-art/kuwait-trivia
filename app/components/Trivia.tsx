import TriviaQuiz, { type Question } from "./TriviaQuiz";

type OpenTdbResponse = {
  response_code: number;
  results: {
    category: string;
    type: string;
    difficulty: string;
    question: string;
    correct_answer: string;
    incorrect_answers: string[];
  }[];
};

const API_URL =
  "https://opentdb.com/api.php?amount=10&category=22&difficulty=easy&type=multiple";

// Decode HTML entities returned by Open Trivia DB (&quot; &#039; &amp; etc.)
function decodeEntities(s: string): string {
  return s
    .replace(/&quot;/g, '"')
    .replace(/&#039;/g, "'")
    .replace(/&apos;/g, "'")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&eacute;/g, "é")
    .replace(/&ouml;/g, "ö")
    .replace(/&uuml;/g, "ü")
    .replace(/&aacute;/g, "á")
    .replace(/&iacute;/g, "í")
    .replace(/&oacute;/g, "ó")
    .replace(/&ntilde;/g, "ñ")
    .replace(/&#(\d+);/g, (_, n) => String.fromCharCode(Number(n)));
}

// Deterministic shuffle would be nicer for hydration but content already
// comes only from the server, so a plain shuffle is safe here.
function shuffle<T>(arr: T[]): T[] {
  const out = [...arr];
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [out[i], out[j]] = [out[j], out[i]];
  }
  return out;
}

async function loadQuestions(): Promise<Question[] | null> {
  try {
    const res = await fetch(API_URL, { cache: "no-store" });
    if (!res.ok) return null;
    const data = (await res.json()) as OpenTdbResponse;
    if (data.response_code !== 0 || !data.results?.length) return null;

    return data.results.map((r) => {
      const correct = decodeEntities(r.correct_answer);
      const options = shuffle([
        correct,
        ...r.incorrect_answers.map(decodeEntities),
      ]);
      return {
        q: decodeEntities(r.question),
        options,
        answer: options.indexOf(correct),
        category: decodeEntities(r.category),
        difficulty: r.difficulty,
      };
    });
  } catch {
    return null;
  }
}

export default async function Trivia() {
  const questions = await loadQuestions();

  return (
    <section id="trivia" className="trivia">
      <div className="container">
        <div className="reveal">
          <div className="section-label">01 — Test Your Knowledge</div>
          <h2 className="section-title">A Geography Quiz, Live from the Wire</h2>
          <p className="section-lede">
            Ten fresh questions pulled straight from the Open Trivia Database —
            different every visit. Pick wisely, then reveal your score.
          </p>
        </div>

        {questions ? (
          <TriviaQuiz questions={questions} />
        ) : (
          <div className="quiz-error reveal">
            <p>
              We couldn't reach the trivia service right now. Please refresh in
              a moment.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
