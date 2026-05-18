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
          <br />
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
          <p className="text-sm"><strong>NAEGELE'S RULE</strong></p>
          <p className="text-sm">Substract 3 Months, Add 7 Days</p>

          <p className="text-sm"><strong>Trimesters</strong></p>
          <p className="text-sm">Weeks 1 to 13.  Weeks 14 to 27.  Weeks 28 to 40.</p>

          <p className="text-sm"><strong>PreNatal Care</strong></p>
          <p className="text-sm">Want first prenatal visit before 12 weeks.</p>
          <p className="text-sm">If post 40 weeks, 2x visits per week due to risk of fetal death.</p>
          <p className="text-sm">Initial visit:  CBC (can she clot?), ABO Rh, Rubella, HepB, HIV, RPR (syphillis).</p>
          <p className="text-sm">Every Visit:  Urine dipstick for glucose, protein, leukocytes</p>
          <p className="text-sm">@ 28 weeks:  Glucose Tolerance Test (GTT), CBC</p>
          <p className="text-sm">@ 36 weeks:  Group B Strep Test (GBS)</p>

          <p className="text-sm"><strong>Rh Isoimmunization </strong></p>
          <p className="text-sm">If mom is Rh- and baby is Rh+...</p>
          <p className="text-sm">Mother can produce anti-Rh antibodies, so if pregnant with Rh+ again, anti-Rh antibodies attack fetal red blood cells</p>

          <p className="text-sm"><strong>5 P's of Labor</strong></p>
          <p className="text-sm">Passenger, Passageway, Powers, Position, Psychological</p>
          <p className="text-sm">Passenger: Headdown passenge is best</p>
          <p className="text-sm">Passageway: Pelvis</p>
          <p className="text-sm">Powers: Contractions</p>
          <p className="text-sm">Position: We want mom up and moving around</p>
          <p className="text-sm">Psychological: Are there trauma issues</p>


          <p className="text-sm"><strong>Cervical Exam</strong></p>
          <p className="text-sm">Effacement: 0% to 100%</p>
          <p className="text-sm">Dilation: 0cm to 10cm (push at 10cm)</p>
          <p className="text-sm">Station: -3 (in mom) to +3 (outside mom) Ischial Spines</p>


          <p className="text-sm"><strong>Stages of Labor</strong></p>
          <p className="text-sm">Stage 1: Latent, Active, Transition</p>
          <p className="text-sm">Stage 2: Push</p>
          <p className="text-sm">Stage 3: Placenta</p>
          <p className="text-sm">Stage 4: Recovery</p>

          <p className="text-sm"><strong>APGAR Scoring</strong></p>
          <p className="text-sm">Activity </p>
          <p className="text-sm">Pulse </p>
          <p className="text-sm">Grimace </p>
          <p className="text-sm">Appearance</p>
          <p className="text-sm">Respiration </p>

          <p className="text-sm">less than 3 is severely depressed </p>
          <p className="text-sm">4-6 needs some assistance </p>
          <p className="text-sm">7-10 is baby is adjusting </p>

          <p className="text-sm"><strong>Newborn Respiration</strong></p>
          <p className="text-sm">
            Surfactant: lowers surface tension in alveoli - increasing lung compliance
            First Breath: activation of chemoreceptors & compression of chest
            Obligatory Nose Breather
            RR: 30-60/min
            Signs of Respiratory Distress
            • Nasal Flaring
            • Grunting
            • Retractions
          </p>

          <p className="text-sm"><strong>Newborn Thermoregulation</strong></p>
          <p className="text-sm">
            Heat Loss: large surface area, less fat, no shiver response
            Prevention: dry baby immediately, hat on head, skin-to-skin, warm blankets
          </p>


          <p className="text-sm"><strong>Newborn Measurements</strong></p>
          <p className="text-sm">
            Weight
            Head Circumference (OFC)
            Length
          </p>



          <p className="text-sm"><strong>Newborn Medications</strong></p>
          <p className="text-sm">
            Vitamin K (Coagulation)
            Erythromycin (Antibiotic for Gonnerhea / Clamadia)
            Hepatitis B Vaccination
          </p>


          <p className="text-sm"><strong></strong></p>
          <p className="text-sm"></p>


          <p className="text-sm"><strong></strong></p>
          <p className="text-sm"></p>

          <p className="text-sm"><strong></strong></p>
          <p className="text-sm"></p>


          <p className="text-sm"><strong></strong></p>
          <p className="text-sm"></p>


          <p className="text-sm"><strong></strong></p>
          <p className="text-sm"></p>
        </div>
      </div>
    </div>
  );
}