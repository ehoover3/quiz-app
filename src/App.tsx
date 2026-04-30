import { useState } from "react";
import Quiz from "./components/Quiz";
import Result from "./components/Result";
import type { ResultItem } from "./types";
import Notes from "./components/Notes";
import AudioPlayer from "./components/AudioPlayer";

export default function App() {
  const [quizFile, setQuizFile] = useState<string | null>(null);
  const [results, setResults] = useState<ResultItem[] | null>(null);

  const handleSelectQuiz = (file: string) => {
    setQuizFile(file);
    setResults(null); // reset previous results
  };

  const handleFinish = (res: ResultItem[]) => {
    setResults(res);
  };

  const handleRestart = () => {
    setQuizFile(null);
    setResults(null);
  };

  if (!quizFile) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col items-center p-6 space-y-6">

        {/* Quiz Card */}
        <div className="card w-full max-w-2xl">
          <h1 className="title">Choose a Quiz</h1>

          <button className="button" onClick={() => handleSelectQuiz("labs")}>
            Labs
          </button>

         <button className="button" onClick={() => handleSelectQuiz("cardiacRhythms")}>
            Cardiac Rhythms
          </button>




          <button className="button" onClick={() => handleSelectQuiz("healthAssessment")}>
            Health Assessment
          </button>

          <button className="button" onClick={() => handleSelectQuiz("pharmacology")}>
            Pharmacology
          </button>

          <button className="button" onClick={() => handleSelectQuiz("pharmacologyInstructorReview")}>
            Pharmacology Instructor Review
          </button>

          <button className="button" onClick={() => handleSelectQuiz("fundamentals")}>
            Fundamentals (All TopHat Questions)
          </button>

          <button className="button" onClick={() => handleSelectQuiz("test")}>
          Test
          </button>
        </div>

        <div className="w-full max-w-2xl">
          <Notes />
          <AudioPlayer />

        </div>

      </div>
    );
  }

  if (results) {
    return <Result results={results} onRestart={handleRestart} />;
  }

  return <Quiz quizFile={quizFile} onFinish={handleFinish} />;
}