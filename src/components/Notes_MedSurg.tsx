export default function Notes_MedSurg() {
  const items = [
    { src: "molding.png", label: "Molding" },
    { src: "IschialSpines.png", label: "Ischial Spines" },
    { src: "vaginalContraceptionRing.png", label: "Vaginal Ring" }
  ];

  return (
    <div className="space-y-6 w-full max-w-4xl mx-auto">
      <div className="grid md:grid-cols-3 gap-4">
        <div className="card border border-gray-800 hover:border-black hover:shadow-md transition">
          <h3 className="font-semibold border-b pb-1 mb-2">
            Med Surg
          </h3>
          <p className="text-sm">1 Tablespoon = 3 Teaspoons</p>
          <p className="text-sm">1 kg = 2.2 lb</p>
          <br />

          <p className="text-sm">Peptic ulcer disease risk factors include alcohol use, H. pylori, NSAID use, psychologic stress, and smoking</p>
          <p className="text-sm">Duodenal peptic ulcers characteristics:  Pain relieved with food, more common in men aged 35 to 45.</p>
          <p className="text-sm">Gastric peptic ulcers characteristics:  Pain aggravated by food consumption, more common in older women, associated with lifestyle choices (alcohol, smoking, diet), associated with Aspirin and NSAID use.</p>
          <p className="text-sm">What can cause a high BUN count (Blood Urea Nitrogen)? Dehydration</p>
          <img src="./images/GI_Surgeries.png" />

          <br />
          <p className="text-sm"></p>

          <br />
          <p className="text-sm"></p>

          <br />
          <p className="text-sm"></p>

          <br />
          <p className="text-sm"></p>

          <br />
          <p className="text-sm"></p>

          <br />
          <p className="text-sm"></p>

          <br />
          <p className="text-sm"></p>

          <br />
          <p className="text-sm"></p>

          <br />
          <p className="text-sm"></p>

          <br />
          <p className="text-sm"></p>

          <br />
          <p className="text-sm"></p>

          <br />
          <p className="text-sm"></p>

        </div>
      </div>
    </div>
  );
}