export default function Notes() {
  return (
    <div className="space-y-6 w-full max-w-4xl mx-auto">



      {/* GRID SECTION */}
      <div className="grid md:grid-cols-3 gap-4">

        <div className="card border border-gray-800 hover:border-black hover:shadow-md transition">
          <h3 className="font-semibold border-b pb-1 mb-2">
            Healthy Pop
          </h3>
          <p className="text-sm">Coitus Interuptus (lowest rate of prevention)</p>
          <p className="text-sm"><strong>Fertility Awareness Methods</strong></p>
          <p className="text-sm">(understand ovulation period and when to be abstinent)</p>
          <p className="text-sm">Basal Body Temperature (find when luteal phase is where temp is higher)</p>
          <p className="text-sm">Cervical Mucos Ovulation Detection Method (observe mucous to determine ovulation... mucuos becomes thicker and more abundant (like egg whites)</p>
          <p className="text-sm">Spinnbarkeit's Sign:  mucus' ability to stretch between the fingers at time of ovulation</p>
          <p className="text-sm">Home Predictor Kit</p>
          <p className="text-sm">Lactational Amenorrhea (when infant breastfeeds, prolactin is released and inhibits estrogen)</p>
          <p className="text-sm">__</p>
          <p className="text-sm">Spermicides (attacks flagella and body of sperm)</p>
          <p className="text-sm">Condoms (don't use spermicides with condoms)</p>
          <p className="text-sm">Diaphragm (has to be fitted with healthcare provider)</p>
          <p className="text-sm">Contraceptive Sponge</p>
          <p className="text-sm">Oral Contraceptives (inhibits follicle maturation & ovulation - take same time everyday - smoker at higher risk for heart disease w/ contraceptive)</p>
          <p className="text-sm">Benefits:  Decreased blood flow, regulation fo cycles.. decreased dysmennohea, improve symptoms of PMS, improve acne, less ovarian and uterine cysts, preven endometrial and overian cancers</p>
          <p className="text-sm">Risks: DVT, stroke, embolism, and more (see notes)</p>
          <p className="text-sm">Meds that make oral contraceptives less affective:  Antibiotics, anticonvulsants, antifungals, antituberculosis, anti-HIV protease inhbitors</p>
          <p className="text-sm">_</p>
          <p className="text-sm">Ring and Patch</p>
          <p className="text-sm">RING: Leave ring in for 3 weeks, out for 1 week.</p>
          <p className="text-sm">PATCH: place on for 1 week, change for 3 weeks, rotating sites.  Higher failure rate for people weighing more than 198 lbs.</p>
          <p className="text-sm">_</p>
          <p className="text-sm">Injectable Progesterone.  Given every 11 to 13 weeks.  S.E. Weight Gain.  Can take up to 18 months for fertility to resume.</p>
          <p className="text-sm">Implantible Progestin.  Rod implanted in arm for 3 years.  Is quickly reversible.</p>
          <p className="text-sm">Emergency Contraception.  Ideally less than 72 hours.  Stops release of the egg.</p>
          <p className="text-sm">Intrauterine Device (IUD).  T shaped device goes against cervix.  Impairs sperm motility.  Effective 3 to 7 years.</p>
          <p className="text-sm">Permanent Sterilization: Laparoscopic procedure to occlude fallopian tube.</p>
          <p className="text-sm">Permanent Sterilization: Vasectomy.  Vas deferens are cut & sealed.  Must do 2 consecutive sperm counts both showing 0 sperm.</p>

          <p className="text-sm">NOTE:  GO TO MODULES. DO CAN YOU GUESS THE CONTRACEPTIVE.</p>
        </div>



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
            <p className="text-sm">Stones = kidney stones. Bones = bone pain. Groans = abdominal pain, constipation, nausea. Thrones = polyuria, dehydration. Psychiatric overtones = confusion, lethargy, depression</p>
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