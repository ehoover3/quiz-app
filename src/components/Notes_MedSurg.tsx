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
          <br />
          <h1>MISC</h1>
          <p className="text-sm">1 Tablespoon = 3 Teaspoons</p>
          <p className="text-sm">1 kg = 2.2 lb</p>
          <br />

          <p className="text-sm">Peptic ulcer disease risk factors include alcohol use, H. pylori, NSAID use, psychologic stress, and smoking</p>
          <p className="text-sm">Duodenal peptic ulcers characteristics:  Pain relieved with food, more common in men aged 35 to 45.</p>
          <p className="text-sm">Gastric peptic ulcers characteristics:  Pain aggravated by food consumption, more common in older women, associated with lifestyle choices (alcohol, smoking, diet), associated with Aspirin and NSAID use.</p>
          <p className="text-sm">What can cause a high BUN count (Blood Urea Nitrogen)? Dehydration</p>
          <img src="./images/GI_Surgeries.png" />

          <br />
          <h1>DIABETES</h1>
          <br />
          <p className="text-sm">DM</p>
          <p className="text-sm">90% of DM is type 2.</p>
          <p className="text-sm">DM is A1C of more than 6.5%</p>




          <br />
          <p className="text-sm">Metformin</p>
          <p className="text-sm">Reduce liver glucose production</p>
          <p className="text-sm">Improve glucose transport into cells</p>
          <p className="text-sm">May cause weight loss</p>
          <p className="text-sm">Beneficial against plasma lipids</p>
          <p className="text-sm">MAY DAMAGE KIDNEYS</p>
          <p className="text-sm">WITHHOLD 48 HOURS BEFORE AND AFTER CONTRAST DYE - ACUTE KIDNEY FAILURE RISK!</p>

          <br />
          <p className="text-sm">GLIPIZIDE</p>
          <p className="text-sm">CLASS: Sulfonylureas (Type 2 DM class)</p>
          <p className="text-sm">Once daily, 30 minutes before first meal of day</p>
          <p className="text-sm">Increases insulin prorduction from pancreas' beta cells</p>
          <p className="text-sm">Risk of hypoglycemia + weight gain</p>

          <br />
          <p className="text-sm">GLP1 - Ozempic and Wegovy</p>
          <p className="text-sm">CLASS: Semaglutide</p>
          <p className="text-sm">Ozempic is to control blood sugar</p>
          <p className="text-sm">Wegovy is to promote weight loss</p>

          <br />
          <p className="text-sm">Diabetic Ketoacidosis (DKA)</p>
          <p className="text-sm">Lack of insulin, means K doesn't go into cell, so hyperkalemia risk.</p>
          <p className="text-sm">DKA Treatment</p>
          <p className="text-sm">Rapid assessment, oxygen support, cardiac monitor, IV access & labs, fluid resuscitation, regular insulin drip.</p>
          <p className="text-sm"></p>
          <p className="text-sm"></p>

          <br />
          <p className="text-sm">Hyperosmolar Hyperglycemic Syndrome (HHS)</p>
          <p className="text-sm">Almost exclusively Type 2 patients</p>
          <p className="text-sm">Blood glucose usually more than 600</p>
          <p className="text-sm">Insulin is in system, so keoacidosis does not occur</p>
          <p className="text-sm">life threatening</p>
          <p className="text-sm">Precipitating factors:  UTIs, pneumonia, sepsis, acute illness, non-compliance with meds, newly diagnosed type 2 DM</p>
          <p className="text-sm">Lots of urination, lots of dehydration.</p>
          <p className="text-sm">No Ketones</p>
          <p className="text-sm">Treatment:  Fluids, insulin, cardiac monitoring, follow electrolytes carefully</p>

          <br />
          <p className="text-sm">QUICK NOTE</p>
          <p className="text-sm">Do they have acidosis?  DKA</p>
          <p className="text-sm">No acidosis?  Hyperosmolar Hyperglycemic Syndrome (HHS)</p>

          <br />
          <p className="text-sm">Hypoglycemia (Emergency)</p>
          <p className="text-sm">Causes:  too little food, too much insulin.</p>
          <p className="text-sm">Signs/Symptoms:  Sweat, shakey, irritable</p>
          <p className="text-sm">Treatment:  RULE OF 15.</p>
          <p className="text-sm">15 grams of simple fast acting carbohydrate</p>
          <p className="text-sm">Recheck blood glucose in 15 minutes and retreat with 15grams of fast acting carbs again.</p>
          <p className="text-sm">Fast Acting Carbs:  1/2 c apple juice, 5 lifesavers, 4 starburts, 15 skittles</p>
          <p className="text-sm">Outpatient Hypoglycemia:  Glucagon IM or SubQ - prepare for vomiting/roll to side</p>
          <p className="text-sm">Inpatient Hypoglycemia:  Dextrose IV Push</p>

          <br />
          <p className="text-sm">Long Term Complications of Diabetes</p>
          <p className="text-sm">High blood glucose damages blood vessels, nerves</p>
          <p className="text-sm">Retinopathy, neuropathy, nephropathy, cardiovascular risk, heart disease, hypertension</p>
          <p className="text-sm">Maintain sugar, diet modification, exercise</p>
          <p className="text-sm">Screenings: A1C at least annually or 2x per year; eye exam; foot exam daily; BUN & Creatinine blood work</p>
          <p className="text-sm">Diabetic nephropathy is leading cause of kidney failure</p>
          <p className="text-sm">Check feet daily</p>
          <br />
          <h1>ADRENAL GLANDS</h1>

          <br />
          <p className="text-sm">Adrenal glands control SUGAR, SALT, + SEX</p>
          <p className="text-sm">Aldosterone and Glucocorticoids</p>
          <p className="text-sm">Cortisol regulates blood glucose, inhibits inflammation, supports in response to stress, promotes metabolism</p>

          <br />
          <p className="text-sm">ADDISON'S DISEASE (LIFE THREATENING)</p>
          <p className="text-sm">Primary Adrenocortical Insufficiency - cancer, Adrenalectomy, radiation</p>
          <p className="text-sm">Taper quitting prednisone because body needs time to make some naturally</p>
          <p className="text-sm"></p>
          <p className="text-sm"></p>
          <p className="text-sm"></p>

          <br />
          <p className="text-sm">CUSHING'S SYNDROME (not life threatening)</p>
          <p className="text-sm">over secretion of corticosteriods</p>
          <p className="text-sm">over medication, i.e. prednisone</p>
          <p className="text-sm">examples of corticosteriods use: stop, control, reduce inflammatory process</p>
          <p className="text-sm">excess corticosteriods, leads to excess salt, fluid overload, puffy face, weight gain in upper back</p>
          <p className="text-sm"></p>

          <br />
          <p className="text-sm">HYPERTENSION MEDICATIONS</p>
          <p className="text-sm">ACE Inhibitors (Lisinopril):  Blocks angiotensin – allows meds to dilate veins and arteries. Side effects: chronic dry cough, hyperkalemia, kidney damage</p>
          <p className="text-sm">Angiotension 2 receptor blockers (Losartan): Blocks the action of angiotensin II- veins and arteries dilate. Direct Vasodilators (Hydralazine, Nitroglycerin): Relax vascular smooth muscle and reduce SVR. Side effects: Headache, Hypotension</p>
          <p className="text-sm">Beta Blockers (Metoprolol): Causes the heart to beat slower, with less force = lowers BP.  Some also relax blood vessel walls. Side effects: Bradycardia</p>
          <p className="text-sm">Calcium Channel Blockers (Verapamil):  Blocks BP by preventing calcium from entering cells of the heart and arteries. Side effects: peripheral edema</p>

          <br />
          <p className="text-sm">WHERE SHOULD FLUID BE?</p>
          <p className="text-sm">28 L of Intracellular (within cells)</p>
          <p className="text-sm">10 L of Interstitial Fluid (space between cells)</p>
          <p className="text-sm">3 L of Plasma</p>

          <br />
          <p className="text-sm">SPACING</p>
          <p className="text-sm">1st spacing is where fluid should be</p>
          <p className="text-sm">2nd spacing is edema (edema does not always mean fluid overload)</p>
          <p className="text-sm">3rd spacing is fluid in a body cavity (very difficult to get out)</p>

          <br />
          <p className="text-sm">FLUID BALANCE PROBLEMS</p>
          <p className="text-sm">structure changes in kidneys decrease ability to conserve water</p>
          <p className="text-sm">hormone changes lead to increase risk of fluid and electrolyte imbalance</p>

          <br />
          <p className="text-sm">FUROSEMIDE (Lasix)</p>
          <p className="text-sm">Can cause hypokalemia</p>
          <p className="text-sm">given 10 mg / mL</p>
          <p className="text-sm">can cause otoxic if pushed too fast (hearing damage)</p>
          <p className="text-sm">pushed 10 mg per minute (a.k.a. 1 mL per minute)</p>

          <br />
          <p className="text-sm">ELECTROLYTE BALANCE</p>
          <p className="text-sm">focus on sodium and potassium for this class (also magnesium and calcium for other classes)</p>
          <p className="text-sm">Most potassium should be in the cell</p>
          <p className="text-sm">Na is 135-145 in plasma.</p>
          <p className="text-sm">K is 3.5 to 5 in plasma.</p>

          <br />
          <p className="text-sm">SODIUM IMBALANCE</p>
          <p className="text-sm">causes</p>
          <p className="text-sm">HYPONATREMIA: GI Loss, diuretics, burns, fasting diet, excessive hypotonic IV, polydipsia (drinking lots of water)</p>
          <p className="text-sm">HYPERNATREMIA: Hypertonic IV fluid, excessive isotonic IV, tube feeds without enough water supplementation, near drowning salt water, insufficient water intake, loss of pure water such as high fever, heatstroke, prolonged hyperventilation, Cushing Syndrome, hyperaldosteronism, diabetes insipidus (body cannot regulate water balance for exessive thirst and urine)</p>
          <p className="text-sm">assessment</p>
          <p className="text-sm">Hyponatremia:  confusion, fatigue, convulsion, weakness, loss of consciousness, low BP</p>
          <p className="text-sm">Hypernatremia:  F.R.I.E.D.  flushed skin, restless, increased BP, edema, decreased urine output</p>
          <p className="text-sm">treatment</p>
          <p className="text-sm">Hyponatremia: fluid restriction, isotonic, sodium containing IV solutions, encourage oral intake of Na</p>
          <p className="text-sm">Hypernatremia: if mild, isotonic IV solution, if severe, hypotonic IV solution, restrict Na in diet, diuretics (if fluid overload)</p>
          <p className="text-sm">!!! Na must be corrected SLOWLY to prevent neurological damage !!!</p>

          <br />
          <p className="text-sm">POTASSIUM IMBALANCE</p>
          <p className="text-sm">greatly impacts muscles</p>
          <p className="text-sm">causes</p>
          <p className="text-sm">hypokalemia: GI loss, renal loss/urination, dialysis, inadequate diet, medications like diuretics (furosemide) or insulin</p>
          <p className="text-sm">hyperkalemia: Kidney failure, excessive K+ intake, renal/kidney disease</p>
          <p className="text-sm">assessment</p>
          <p className="text-sm">hypokalemia: fatigue, irritable, confusion, EKG changes, irregular pulse, decreased muscle tone</p>
          <p className="text-sm">hyperkalemia: M.U.R.D.E.R.  muscle cramps, urine abnormal, respiratory distress, decrased cardiac contraction, EKG changes (tall T wave, wide QRS), reflexes (hyper or hypo-reflexive)</p>
          <p className="text-sm">treatment</p>
          <p className="text-sm">hypokalemia: K+ pills/liquid, higher K+ diet, IV K+ infusion</p>
          <p className="text-sm">hyperkalemia: diuretics (furosemide), sodium polystyrene (kaexylate), dialysis, low K+ diet, insulin, calcium gluconate (protects cardiac cells), beta agonists (albuterol) helps bring K+ into cell</p>
          <p className="text-sm"></p>
          <p className="text-sm">QRS wave is like the mountain and T is like the hill.  If the T is also a mountain, then it might be hyperkalemia.</p>

          <br />
          <p className="text-sm">HYPERTONIC SOLUTIONS</p>
          <p className="text-sm">3% sodium chloride give slowly.</p>
          <p className="text-sm">Vessicant (irritates and feels like burning)</p>
          <p className="text-sm">can cause pulmonary edema - watch respiratory status</p>
          <p className="text-sm">listen for crackles</p>
          <p className="text-sm">Hypertonic solutions for head injuries is good to shrink swelling in head</p>
          <p className="text-sm">Dextrose 10% in water.</p>

          <br />
          <p className="text-sm">BIOLOGICAL VARIANCES</p>
          <p className="text-sm">babies do not produce tears until 6 weeks of age</p>
          <p className="text-sm">infant fontanel: sunken or bulging (assess when baby is calm)</p>
          <p className="text-sm">infant dependent on others to meet fluid needs</p>
          <p className="text-sm">infant has limited ability to dilute and concentrate urine</p>

          <br />
          <p className="text-sm">CALCULATE FLUID REQUIREMENTS</p>
          <p className="text-sm">1 to 10 kg (100 mL/kg)</p>
          <p className="text-sm">11 to 20 kg (1000 mlL + 50 mL/kg)</p>
          <p className="text-sm">More than 20 kg (1500 + 20 mL/kg)</p>

          <br />
          <p className="text-sm">Output</p>
          <p className="text-sm">Urine output decreases as we get older</p>
          <p className="text-sm">Infant: 1-2 mL / kg / hr</p>
          <p className="text-sm">Child: 1 mL / kg / hr</p>

          <br />
          <p className="text-sm">DEHYDRATION SEVERITY</p>
          <p className="text-sm">Mild: Oral rehydration</p>
          <p className="text-sm">Moderate: Oral rehydration</p>
          <p className="text-sm">Severe (based on body weight loss): IV</p>

          <br />
          <p className="text-sm">VIRUSES</p>
          <p className="text-sm">Rotovirus: most common cause of diarrhea in children</p>
          <p className="text-sm">Norovirus: more common in cruises (common in shellfish)</p>

          <br />
          <p className="text-sm">MANAGING GASTROENTERITIS</p>
          <p className="text-sm">avoid anti-diarrheals (diarrhea helps gets disease out)</p>
          <p className="text-sm">assess dehydration</p>
          <p className="text-sm">oral rehydration</p>
          <p className="text-sm">IV therapy as needed</p>
          <p className="text-sm">enteric precautions until stool culture diagnosis is resolved</p>
          <p className="text-sm">!!! Potassium is added to IV fluids only after child has voided !!!</p>

          <br />
          <p className="text-sm">ANEMIA</p>
          <p className="text-sm">!!! Pernicious Anemia !!!</p>
          <p className="text-sm">Insufficient absorption of vitamin 12</p>
          <p className="text-sm">Pernicious is megaloblastic - big RBCs</p>
          <p className="text-sm">This happens because we need our stomach's acid secretion of intrinsic factor to absorb B12.</p>
          <p className="text-sm">BASICALLY, stomach changes (surgery) can lead to not absorbing vitamin B12.</p>
          <p className="text-sm">i.e. autoimmune disease, gastic bypass, ileum resection, etc.</p>
          <p className="text-sm">Pernicious Anemia signs + symptoms</p>
          <p className="text-sm">normal anemia signs + numbness/tingling, muscle ataxia (muscle weakness)</p>


          <br />
          <p className="text-sm">IRON DEFICIENCY</p>
          <p className="text-sm">!!! treatment: take iron on empty stomach !!!</p>
          <p className="text-sm">vitamin C is to help absorb iron.</p>
          <p className="text-sm"></p>
          <p className="text-sm"></p>
          <p className="text-sm"></p>

          <br />
          <p className="text-sm"></p>
          <p className="text-sm"></p>
          <p className="text-sm"></p>
          <p className="text-sm"></p>
          <p className="text-sm"></p>
          <p className="text-sm"></p>

          <br />
          <p className="text-sm"></p>
          <p className="text-sm"></p>
          <p className="text-sm"></p>
          <p className="text-sm"></p>
          <p className="text-sm"></p>
          <p className="text-sm"></p>

          <br />
          <p className="text-sm"></p>
          <p className="text-sm"></p>
          <p className="text-sm"></p>
          <p className="text-sm"></p>
          <p className="text-sm"></p>
          <p className="text-sm"></p>

        </div>
      </div>
    </div>
  );
}