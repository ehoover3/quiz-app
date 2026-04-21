export default function Notes() {
  return (
    <div className="space-y-6 w-full max-w-4xl mx-auto">

      {/* HEADER */}
      <div className="card border border-gray-800 hover:border-black transition">
        <h2 className="title">Nursing Notes</h2>
        <p className="text-sm text-gray-500">
          High-yield quick review cards
        </p>
      </div>

      {/* GRID SECTION */}
      <div className="grid md:grid-cols-3 gap-4">

        <div className="card border border-gray-800 hover:border-black hover:shadow-md transition">
          <h3 className="font-semibold border-b pb-1 mb-2">
            Cardiac Output
          </h3>
          <p className="text-sm">Stroke Volume × Heart Rate</p>
        </div>

        <div className="card border border-gray-800 hover:border-black hover:shadow-md transition">
          <h3 className="font-semibold border-b pb-1 mb-2">
            Preload
          </h3>
          <p className="text-sm">Blood in LV at end of diastole</p>
        </div>

        <div className="card border border-gray-800 hover:border-black hover:shadow-md transition">
          <h3 className="font-semibold border-b pb-1 mb-2">
            Afterload
          </h3>
          <p className="text-sm">Resistance to LV ejection</p>
        </div>

      </div>

      {/* OXYGEN */}
      <div className="card border border-gray-800">

        <h3 className="title text-lg">Oxygen Delivery Devices</h3>

        <div className="grid md:grid-cols-2 gap-4 mt-4">

          <div className="card border border-gray-800 hover:border-black hover:shadow-md transition">
            <h4 className="font-semibold">Nasal Cannula</h4>
            <p className="text-sm text-gray-500">1–6 L/min</p>
            <p className="text-sm">24%–44%</p>
          </div>

          <div className="card border border-gray-800 hover:border-black hover:shadow-md transition">
            <h4 className="font-semibold">Simple Mask</h4>
            <p className="text-sm text-gray-500">5–10 L/min</p>
            <p className="text-sm">35%–60%</p>
          </div>

          <div className="card border border-gray-800 hover:border-black hover:shadow-md transition">
            <h4 className="font-semibold">Non-Rebreather</h4>
            <p className="text-sm text-gray-500">10–15 L/min</p>
            <p className="text-sm">80%–98%</p>
            <p className="text-xs text-gray-500 mt-1">
              Bag must stay inflated
            </p>
          </div>

          <div className="card border border-gray-800 hover:border-black hover:shadow-md transition">
            <h4 className="font-semibold">Venturi Mask</h4>
            <p className="text-sm text-gray-500">24%–60%</p>
            <p className="text-sm">Precise FiO₂ delivery</p>
          </div>

        </div>
      </div>

      {/* ELECTROLYTES */}
      <div className="card border border-gray-800">

        <h3 className="title text-lg">
          Fluid & Electrolyte Imbalances
        </h3>

        <div className="grid md:grid-cols-2 gap-4 mt-4">

          <div className="card border border-gray-800 hover:border-black hover:shadow-md transition">
            <h4 className="font-semibold">Hypervolemia ↑</h4>
            <p className="text-sm">Edema, crackles, JVD, weight gain</p>
          </div>

          <div className="card border border-gray-800 hover:border-black hover:shadow-md transition">
            <h4 className="font-semibold">Hypovolemia ↓</h4>
            <p className="text-sm">Dry mucosa, hypotension, tachycardia</p>
          </div>

          <div className="card border border-gray-800 hover:border-black hover:shadow-md transition">
            <h4 className="font-semibold">Na⁺ High</h4>
            <p className="text-sm">Thirst, confusion</p>
          </div>

          <div className="card border border-gray-800 hover:border-black hover:shadow-md transition">
            <h4 className="font-semibold">Na⁺ Low</h4>
            <p className="text-sm">Seizures, headache, confusion</p>
          </div>

          <div className="card border border-black hover:border-black hover:shadow-md transition">
            <h4 className="font-semibold">K⁺ High</h4>
            <p className="text-sm">Peaked T waves, weakness</p>
          </div>

          <div className="card border border-gray-800 hover:border-black hover:shadow-md transition">
            <h4 className="font-semibold">K⁺ Low</h4>
            <p className="text-sm">U waves, cramps, dysrhythmias</p>
          </div>

          <div className="card border border-gray-800 hover:border-black hover:shadow-md transition">
            <h4 className="font-semibold">Ca²⁺ High</h4>
            <p className="text-sm">Stones, bones, groans</p>
          </div>

          <div className="card border border-gray-800 hover:border-black hover:shadow-md transition">
            <h4 className="font-semibold">Ca²⁺ Low</h4>
            <p className="text-sm">Tetany, Chvostek, Trousseau</p>
          </div>

          <div className="card border border-gray-800 hover:border-black hover:shadow-md transition">
            <h4 className="font-semibold">Mg²⁺ High</h4>
            <p className="text-sm">Respiratory depression, hypotension</p>
          </div>

          <div className="card border border-gray-800 hover:border-black hover:shadow-md transition">
            <h4 className="font-semibold">Mg²⁺ Low</h4>
            <p className="text-sm">Tremors, torsades de pointes</p>
          </div>

        </div>
      </div>

    </div>
  );
}