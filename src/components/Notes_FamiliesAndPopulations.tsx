export default function Notes_FamiliesAndPopulations() {
  const items = [
    { src: "molding.png", label: "Molding" },
    { src: "IschialSpines.png", label: "Ischial Spines" },
    { src: "Babinski.png", label: "Babinski Reflex" }
  ];

  return (
    <div className="space-y-6 w-full max-w-4xl mx-auto">
      <div className="grid md:grid-cols-3 gap-4">
        <div className="card border border-gray-800 hover:border-black hover:shadow-md transition">
          <h3 className="font-semibold border-b pb-1 mb-2">
            Families and Populations
          </h3>
          <br/>
          <p className="text-sm"><strong>APGAR Score</strong></p>
          <ul className="list-disc pl-5 space-y-1 text-gray-700">
            <p>
              <strong>A</strong> = Appearance
            </p>
            <p>
              <strong>P</strong> = Pulse
            </p>
            <p>
              <strong>G</strong> = Grimace
            </p>
            <p>
              <strong>A</strong> = Activity
            </p>
            <p>
              <strong>R</strong> = Respirations
            </p>

            <p>- Performed at 1 and 5 minutes after birth</p>
            <p>- Each category scored 0–2;  Max score = 10</p>
            <p>- 7–10 = normal adaptation</p>
            <p>- 4–6 = moderate distress</p>
            <p>- 0–3 = severe distress</p>
            <p>- Heart rate is the most important assessment</p>
          </ul>
        </div>
      </div>
    </div>
  );
}