import { useEffect, useState } from "react";
import { shuffle } from "../utils/shuffle";
import type { Question, ResultItem } from "../types";

type Props = {
  quizFile: string;
  onFinish: (results: ResultItem[]) => void;
};

export default function Quiz({ quizFile, onFinish }: Props) {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [index, setIndex] = useState<number>(0);
  const [answers, setAnswers] = useState<ResultItem[]>([]);
  const [selected, setSelected] = useState<string | null>(null);
  const [showFeedback, setShowFeedback] = useState<boolean>(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadQuiz() {
      setLoading(true);
      try {
        const data = await import(`../data/${quizFile}.json`);
        const quizData: Question[] = data.default || data;

        const shuffledQuestions = shuffle(quizData);
        const shuffledWithOptions = shuffledQuestions.map((q) => ({
          ...q,
          options: shuffle(q.options),
        }));
        setQuestions(shuffledWithOptions);
      } catch (err) {
        console.error("Failed to load quiz:", err);
      } finally {
        setLoading(false);
      }
    }

    loadQuiz();
  }, [quizFile]);

  if (loading) return <div className="card">Loading quiz...</div>;
  if (questions.length === 0) return <div className="card">No questions found.</div>;

  const current = questions[index];
  const isCorrect = selected === current.correctAnswer;

  const handleAnswer = (option: string) => {
    if (!current || showFeedback) return;

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
      setIndex(index + 1);
      setSelected(null);
      setShowFeedback(false);
    } else {
      onFinish(answers);
    }
  };

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
            if (opt === current.correctAnswer) className += " correct";
            else if (opt === selected) className += " wrong";
          }

          return (
            <button
              key={opt}
              className={className}
              onClick={() => handleAnswer(opt)}
              disabled={showFeedback}
            >
              {opt}
            </button>
          );
        })}
      </div>

      {showFeedback && (
        <div style={{ marginTop: 16 }}>
          <p style={{ fontWeight: 600, color: isCorrect ? "#22c55e" : "#ef4444" }}>
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

      <p className="progress">{index + 1} / {questions.length}</p>
    </div>
  );
}