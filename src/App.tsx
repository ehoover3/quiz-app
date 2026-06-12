import { useState } from "react";
import Quiz from "./components/Quiz";
import Result from "./components/Result";
import type { ResultItem } from "./types";
import Notes_MedSurg from "./components/Notes_MedSurg";
import Notes_FamiliesAndPopulations from "./components/Notes_FamiliesAndPopulations";
// import AudioPlayer from "./components/AudioPlayer";

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

          <button className="button button-blue button-blue:hover" onClick={() => handleSelectQuiz("familiesAndPopulations")}>
            Families and Populations
          </button>

          <button className="button button-blue button-blue:hover" onClick={() => handleSelectQuiz("maternalNewborn")}>
            Maternal Newborn
          </button>

          <button className="button button-blue button-blue:hover" onClick={() => handleSelectQuiz("maternalNewbornExam1")}>
            Maternal Newborn Exam 1
          </button>

          <button className="button button-blue button-blue:hover" onClick={() => handleSelectQuiz("maternalNewbornExam1-B")}>
            Maternal Newborn Exam 1 ATI 
          </button>



          <button className="button button-blue button-blue:hover" onClick={() => handleSelectQuiz("medicalSurgicalQuizWeek5")}>
            Medical Surgical Quiz Week 5
          </button>

          <button className="button button-blue button-blue:hover" onClick={() => handleSelectQuiz("medicalSurgical")}>
            Medical Surgical
          </button>

          <button className="button button-red button-red:hover" onClick={() => handleSelectQuiz("cardiacRhythms")}>
            Cardiac Rhythms
          </button>

          <button className="button button-red button-red:hover" onClick={() => handleSelectQuiz("labs")}>
            Labs
          </button>

          <button className="button button-orange button-orange:hover" onClick={() => handleSelectQuiz("test")}>
            Test
          </button>
        </div>

        <div className="w-full max-w-2xl">
          <Notes_MedSurg />
          <Notes_FamiliesAndPopulations />
          {/* <AudioPlayer /> */}

        </div>

      </div>
    );
  }

  if (results) {
    return <Result results={results} onRestart={handleRestart} />;
  }

  return <Quiz quizFile={quizFile} onFinish={handleFinish} />;
}