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
      <div >

        <div className="card">
          <h1 className="title">Choose a Quiz</h1>
          <button className="button" onClick={() => handleSelectQuiz("fundamentalsExam3")}>Fundamentals Exam 3 (All TopHat Questions)</button>
          <button className="button" onClick={() => handleSelectQuiz("fundamentalsExam3Modified")}>Fundamentals Exam 3 (Focused Review)</button>
          {/* <button className="button" onClick={() => handleSelectQuiz("healthAssessment")}>Health Assessment</button> */}
          <button className="button" onClick={() => handleSelectQuiz("healthyPopulationsExam3")}>Health Populations</button>
          {/* <button className="button" onClick={() => handleSelectQuiz("pharmacology")}>Pharmacology</button> */}
          <button className="button" onClick={() => handleSelectQuiz("test")}>Test</button>
        </div>
        <div className="card p-4 space-y-6">

          <h2 className="text-xl font-bold">Notes</h2>

          {/* Hemodynamics */}
          <section className="space-y-2">
            <h3 className="font-semibold text-lg">Hemodynamics</h3>

            <div><strong>Cardiac Output:</strong> Stroke Volume × Heart Rate</div>
            <div><strong>Preload:</strong> Amount of blood in LV at end of diastole</div>
            <div><strong>Afterload:</strong> Resistance to LV ejection</div>
          </section>

<br/>
        {/* Oxygen Delivery */}
        
          <section className="space-y-3">
            <h3 className="font-semibold text-lg">Oxygen Delivery Devices</h3>

            <div>
              <strong>Nasal Cannula</strong>
              <p className="text-sm text-gray-600">Up to 6 L/min (24%–44%)</p>
              <ul className="list-disc pl-6">
                <li>1 L/min = 24%</li>
                <li>2 L/min = 28%</li>
                <li>3 L/min = 32%</li>
                <li>4 L/min = 36%</li>
                <li>5 L/min = 40%</li>
                <li>6 L/min = 44%</li>
              </ul>
            </div>

            <div>
              <strong>Simple Face Mask</strong>
              <p className="text-sm text-gray-600">5–10 L/min → 35%–60%</p>
            </div>

            <div>
              <strong>Partial & Non-Rebreather</strong>
              <ul className="list-disc pl-6">
                <li>Partial: 10–15 L/min (60–90%)</li>
                <li>Non-rebreather: 10–15 L/min (80–98%)</li>
                <li>Reservoir bag must remain inflated</li>
              </ul>
            </div>

            <div>
              <strong>Venturi Mask</strong>
              <p className="text-sm text-gray-600">
                24%–60% with 4–15 L/min depending on adapter
              </p>
            </div>

            <div>
              <strong>Positive Airway Pressure</strong>
              <p className="text-sm text-gray-600">
                21%–100% O₂ delivery depending on device
              </p>

              <div className="pl-4 mt-2 space-y-1">
                <div><strong>CPAP:</strong> Continuous pressure</div>
                <div><strong>BiPAP:</strong> Separate inspiratory & expiratory pressures</div>
              </div>
            </div>

          </section>
<br/>
<section className="space-y-3">
  <h3 className="font-semibold text-lg">Fluid & Electrolyte Imbalances</h3>

  {/* VOLUME */}
  <div>
    <strong>Hypervolemia (Fluid Overload) ⬆️</strong>
    <ul className="list-disc pl-6 text-sm text-gray-700">
      <li>Causes: CHF, renal failure, excess IV fluids</li>
      <li>Signs: edema, crackles, JVD, HTN, weight gain</li>
      <li>Treatment: diuretics, fluid restriction, I&O monitoring</li>
    </ul>
  </div>

  <div>
    <strong>Hypovolemia (Fluid Deficit) ⬇️</strong>
    <ul className="list-disc pl-6 text-sm text-gray-700">
      <li>Causes: hemorrhage, dehydration, vomiting/diarrhea</li>
      <li>Signs: tachycardia, hypotension, dry mucosa, poor turgor</li>
      <li>Treatment: IV fluids (NS/LR), replace losses</li>
    </ul>
  </div>

  {/* SODIUM */}
  <div>
    <strong>Hypernatremia ⬆️ Na+</strong>
    <ul className="list-disc pl-6 text-sm text-gray-700">
      <li>Causes: dehydration, diabetes insipidus</li>
      <li>Signs: thirst, confusion, restlessness</li>
      <li>Treatment: hypotonic fluids (D5W, 0.45% NS), slow correction</li>
    </ul>
  </div>

  <div>
    <strong>Hyponatremia ⬇️ Na+</strong>
    <ul className="list-disc pl-6 text-sm text-gray-700">
      <li>Causes: excess fluids, SIADH, diuretics</li>
      <li>Signs: headache, seizures, confusion</li>
      <li>Treatment: fluid restriction, hypertonic saline (3% NS if severe)</li>
    </ul>
  </div>

  {/* POTASSIUM */}
  <div>
    <strong>Hyperkalemia ⬆️ K+</strong>
    <ul className="list-disc pl-6 text-sm text-gray-700">
      <li>Causes: renal failure, ACE inhibitors, tissue breakdown</li>
      <li>Signs: peaked T waves, dysrhythmias, muscle weakness</li>
      <li>Treatment: calcium gluconate, insulin + D50, kayexalate</li>
    </ul>
  </div>

  <div>
    <strong>Hypokalemia ⬇️ K+</strong>
    <ul className="list-disc pl-6 text-sm text-gray-700">
      <li>Causes: diuretics, vomiting, diarrhea</li>
      <li>Signs: U waves, muscle cramps, weakness, dysrhythmias</li>
      <li>Treatment: oral/IV potassium (never IV push)</li>
    </ul>
  </div>

  {/* CALCIUM */}
  <div>
    <strong>Hypercalcemia ⬆️ Ca²⁺</strong>
    <ul className="list-disc pl-6 text-sm text-gray-700">
      <li>Causes: hyperparathyroidism, bone cancer</li>
      <li>Signs: “stones, bones, groans, psychiatric overtones”</li>
      <li>Treatment: hydration, calcitonin, bisphosphonates</li>
    </ul>
  </div>

  <div>
    <strong>Hypocalcemia ⬇️ Ca²⁺</strong>
    <ul className="list-disc pl-6 text-sm text-gray-700">
      <li>Causes: hypoparathyroidism, vitamin D deficiency</li>
      <li>Signs: tetany, Chvostek & Trousseau signs, seizures</li>
      <li>Treatment: calcium gluconate, vitamin D</li>
    </ul>
  </div>

  {/* MAGNESIUM */}
  <div>
    <strong>Hypermagnesemia ⬆️ Mg²⁺</strong>
    <ul className="list-disc pl-6 text-sm text-gray-700">
      <li>Causes: renal failure, excessive antacids/laxatives</li>
      <li>Signs: hypotension, lethargy, respiratory depression</li>
      <li>Treatment: calcium gluconate, diuretics, dialysis</li>
    </ul>
  </div>

  <div>
    <strong>Hypomagnesemia ⬇️ Mg²⁺</strong>
    <ul className="list-disc pl-6 text-sm text-gray-700">
      <li>Causes: alcoholism, malnutrition, diuretics</li>
      <li>Signs: tremors, seizures, torsades de pointes</li>
      <li>Treatment: magnesium sulfate replacement</li>
    </ul>
  </div>
</section>
        </div>
      </div>
    );
  }

  if (results) {
    return <Result results={results} onRestart={handleRestart} />;
  }

  return <Quiz quizFile={quizFile} onFinish={handleFinish} />;
}