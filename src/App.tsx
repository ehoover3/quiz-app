import { useState } from "react";
import Quiz from "./components/Quiz";
import Result from "./components/Result";
import type { ResultItem } from "./types";

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
      <div className="card">
        <h1 className="title">Choose a Quiz</h1>
        <button className="button" onClick={() => handleSelectQuiz("fundamentals")}>Fundamentals</button>
        <button className="button" onClick={() => handleSelectQuiz("healthAssessment")}>Health Assessment</button>
                <button className="button" onClick={() => handleSelectQuiz("healthyPopulations")}>Health Populations</button>
        <button className="button" onClick={() => handleSelectQuiz("pharmacology")}>Pharmacology</button>

      </div>
    );
  }

  if (results) {
    return <Result results={results} onRestart={handleRestart} />;
  }

  return <Quiz quizFile={quizFile} onFinish={handleFinish} />;
}