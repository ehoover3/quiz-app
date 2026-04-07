import { useEffect, useState } from "react";
import questionsData from "../data/questions.json";
import { shuffle } from "../utils/shuffle";
import type { Question, ResultItem } from "../types";

type Props = {
  onFinish: (results: ResultItem[]) => void;
};

export default function Quiz({ onFinish }: Props) {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [index, setIndex] = useState<number>(0);
  const [answers, setAnswers] = useState<ResultItem[]>([]);
  const [selected, setSelected] = useState<string | null>(null);
  const [showFeedback, setShowFeedback] = useState<boolean>(false);

  useEffect(() => {
    // shuffle questions
    const shuffledQuestions = shuffle(questionsData as Question[]);

    // also shuffle options per question
    const shuffledWithOptions = shuffledQuestions.map((q) => ({
      ...q,
      options: shuffle(q.options),
    }));

    setQuestions(shuffledWithOptions);
  }, []);

  const current = questions[index];

  const handleAnswer = (option: string) => {
    if (!current) return;

    setSelected(option);
    setShowFeedback(true);

    const record: ResultItem = {
      question: current.questionText,
      correctAnswer: current.correctAnswer,
      selectedAnswer: option,
      explanation: current.explanationText,
    };

    setAnswers((prev) => [...prev, record]);
  };

  const handleNext = () => {
    if (index + 1 < questions.length) {
      setIndex((prev) => prev + 1);
      setSelected(null);
      setShowFeedback(false);
    } else {
      onFinish(answers);
    }
  };

  if (!current) return <div className="card">Loading...</div>;

  const isCorrect = selected === current.correctAnswer;

  return (
    <div className="card">
      <h2 className="title">{current.questionText}</h2>

      {current.questionImage && (
        <img src={current.questionImage} className="image" />
      )}

      <div>
        {current.options.map((opt) => {
          let className = "button answer";

          if (showFeedback) {
            if (opt === current.correctAnswer) {
              className += " correct";
            } else if (opt === selected) {
              className += " wrong";
            }
          }

          return (
            <button
              key={opt}
              className={className}
              onClick={() => !showFeedback && handleAnswer(opt)}
              disabled={showFeedback}
            >
              {opt}
            </button>
          );
        })}
      </div>

      {showFeedback && (
        <div style={{ marginTop: 16 }}>
          <p
            style={{
              fontWeight: 600,
              color: isCorrect ? "#22c55e" : "#ef4444",
            }}
          >
            {isCorrect ? "Correct" : "Incorrect"}
          </p>

          <p>{current.explanationText}</p>

          {current.explanationImage && (
            <img src={current.explanationImage} className="image" />
          )}

          <button className="button" onClick={handleNext}>
            {index + 1 < questions.length ? "Next" : "Finish"}
          </button>
        </div>
      )}

      <p className="progress">
        {index + 1} / {questions.length}
      </p>
    </div>
  );
}