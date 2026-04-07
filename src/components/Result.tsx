import type { ResultItem } from "../types";

type Props = {
  results: ResultItem[];
  onRestart: () => void;
};

export default function Result({ results, onRestart }: Props) {
  const correct = results.filter(
    (r) => r.selectedAnswer === r.correctAnswer
  );

  return (
    <div className="card">
      <h1 className="title">Results</h1>

      <p className="subtitle">
        Score: {correct.length} / {results.length}
      </p>

      {results.map((r, i) => {
        const isCorrect = r.selectedAnswer === r.correctAnswer;

        return (
          <div key={i} style={{ marginBottom: 16 }}>
            <p><strong>{r.question}</strong></p>

            <p style={{ color: isCorrect ? "#22c55e" : "#ef4444" }}>
              Your Answer: {r.selectedAnswer}
            </p>

            {!isCorrect && (
              <>
                <p style={{ color: "#2563eb", fontWeight: 600 }}>
                  Correct: {r.correctAnswer}
                </p>
                <p>{r.explanation}</p>
              </>
            )}
          </div>
        );
      })}

      <button className="button" onClick={onRestart}>
        Back to Home
      </button>
    </div>
  );
}