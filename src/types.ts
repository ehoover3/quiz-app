export type Question = {
  id: number;
  questionText: string;
  questionImage: string | null;
  options: string[];
  correctAnswer: string;
  explanationText: string;
  explanationImage: string | null;
};

export type QuizData = {
  shuffleQuestions?: boolean;
  shuffleOptions?: boolean;
  questions: Question[];
};

export type ResultItem = {
  question: string;
  correctAnswer: string;
  selectedAnswer: string;
  explanation: string;
};