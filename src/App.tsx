import { useState } from "react";
import Landing from "./components/Landing";
import Quiz from "./components/Quiz";
import Result from "./components/Result";
import type { ResultItem } from "./types";

type View = "landing" | "quiz" | "result";

function App() {
  const [view, setView] = useState<View>("landing");
  const [results, setResults] = useState<ResultItem[]>([]);

  const startQuiz = () => {
    setResults([]);
    setView("quiz");
  };

  const finishQuiz = (data: ResultItem[]) => {
    setResults(data);
    setView("result");
  };

  const goHome = () => {
    setView("landing");
  };

  return (
    <div className="app">
      {view === "landing" && <Landing onStart={startQuiz} />}
      {view === "quiz" && <Quiz onFinish={finishQuiz} />}
      {view === "result" && (
        <Result results={results} onRestart={goHome} />
      )}
    </div>
  );
}

export default App;