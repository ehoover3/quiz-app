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