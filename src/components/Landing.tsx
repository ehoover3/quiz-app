type Props = {
  onStart: () => void;
};

export default function Landing({ onStart }: Props) {
  return (
    <div className="card">
      <h1 className="title">Quiz App</h1>
      <p className="subtitle">Test your knowledge</p>

      <button className="button" onClick={onStart}>
        Start Quiz
      </button>
    </div>
  );
}