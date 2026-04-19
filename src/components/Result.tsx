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
    <div>
      {/* Header Card */}
      <div className="card" style={{ marginBottom: 20 }}>
        <h1 className="title">Results</h1>
        <p className="subtitle">
          Score: {correct.length} / {results.length}
        </p>

        <button className="button" onClick={onRestart}>
          Back to Home
        </button>
      </div>

      {/* Individual Question Cards */}
      {results.map((r, i) => {
        const isCorrect = r.selectedAnswer === r.correctAnswer;

        return (
          <div
            key={i}
            className="card"
            style={{
              marginBottom: 16,
              borderLeft: `6px solid ${isCorrect ? "#22c55e" : "#ef4444"}`,
            }}
          >
            <p style={{ fontWeight: 600, marginBottom: 8 }}>
              {i + 1}. {r.question}
            </p>

            {/* Your Answer */}
            <p
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                color: isCorrect ? "#22c55e" : "#ef4444",
                fontWeight: 500,
              }}
            >
              <span
                style={{
                  width: 24,
                  height: 24,
                  borderRadius: "50%",
                  backgroundColor: "#fff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 1px 3px rgba(0,0,0,0.2)",
                }}
              >
                {isCorrect ? "✅" : "❌"}
              </span>
              Your Answer: {r.selectedAnswer}
            </p>

            {/* Correct Answer (if wrong) */}
        {!isCorrect && (
  <>
    <p
      style={{
        marginTop: 6,
        display: "flex",
        alignItems: "center",
        gap: 8,
        color: "#22c55e",
        fontWeight: 600,
      }}
    >
      <span
        style={{
          width: 24,
          height: 24,
          borderRadius: "50%",
          backgroundColor: "#fff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 1px 3px rgba(0,0,0,0.2)",
        }}
      >
        ✅
      </span>
      Correct Answer: {r.correctAnswer}
    </p>

    <p style={{ marginTop: 6 }}>{r.explanation}</p>
  </>
)}
          </div>
        );
      })}
    </div>
  );
}
// import type { ResultItem } from "../types";

// type Props = {
//   results: ResultItem[];
//   onRestart: () => void;
// };

// export default function Result({ results, onRestart }: Props) {
//   const correct = results.filter(
//     (r) => r.selectedAnswer === r.correctAnswer
//   );

//   return (
//     <div className="card">
//       <h1 className="title">Results</h1>

//       <p className="subtitle">
//         Score: {correct.length} / {results.length}
//       </p>

//       {results.map((r, i) => {
//         const isCorrect = r.selectedAnswer === r.correctAnswer;

//         return (
//           <div key={i} style={{ marginBottom: 16 }}>
//             <p><strong>{r.question}</strong></p>

//             <p style={{ color: isCorrect ? "#22c55e" : "#ef4444" }}>
//               Your Answer: {r.selectedAnswer}
//             </p>

//             {!isCorrect && (
//               <>
//                 <p style={{ color: "#2563eb", fontWeight: 600 }}>
//                   Correct: {r.correctAnswer}
//                 </p>
//                 <p>{r.explanation}</p>
//               </>
//             )}
//           </div>
//         );
//       })}

//       <button className="button" onClick={onRestart}>
//         Back to Home
//       </button>
//     </div>
//   );
// }