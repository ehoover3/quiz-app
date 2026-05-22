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
          <br />
          <p className="text-sm"><strong>Trimesters</strong></p>
          <p className="text-sm">Weeks 1 to 13.  Weeks 14 to 27.  Weeks 28 to 40.</p>
          <br />
          <p className="text-sm"><strong>PreNatal Care</strong></p>
          <p className="text-sm">Want first prenatal visit before 12 weeks.</p>
          <p className="text-sm">If post 40 weeks, 2x visits per week due to risk of fetal death.</p>
          <p className="text-sm">Initial visit:  CBC (can she clot?), ABO Rh, Rubella, HepB, HIV, RPR (syphillis).</p>
          <p className="text-sm">Every Visit:  Urine dipstick for glucose, protein, leukocytes</p>
          <p className="text-sm">@ 28 weeks:  Glucose Tolerance Test (GTT), CBC</p>
          <p className="text-sm">@ 36 weeks:  Group B Strep Test (GBS)</p>
          <br />
          <p className="text-sm"><strong>Rh Isoimmunization </strong></p>
          <p className="text-sm">If mom is Rh- and baby is Rh+...</p>
          <p className="text-sm">Mother can produce anti-Rh antibodies, so if pregnant with Rh+ again, anti-Rh antibodies attack fetal red blood cells</p>
          <br />
          <p className="text-sm"><strong>5 P's of Labor</strong></p>
          <p className="text-sm">Passenger, Passageway, Powers, Position, Psychological</p>
          <p className="text-sm">Passenger: Headdown passenge is best</p>
          <p className="text-sm">Passageway: Pelvis</p>
          <p className="text-sm">Powers: Contractions</p>
          <p className="text-sm">Position: We want mom up and moving around</p>
          <p className="text-sm">Psychological: Are there trauma issues</p>

          <br />
          <p className="text-sm"><strong>Cervical Exam</strong></p>
          <p className="text-sm">Effacement: 0% to 100%</p>
          <p className="text-sm">Dilation: 0cm to 10cm (push at 10cm)</p>
          <p className="text-sm">Station: -3 (in mom) to +3 (outside mom) Ischial Spines</p>
          <br />

          <p className="text-sm"><strong>Stages of Labor</strong></p>
          <p className="text-sm">Stage 1: Latent, Active, Transition</p>
          <p className="text-sm">Stage 2: Push</p>
          <p className="text-sm">Stage 3: Placenta</p>
          <p className="text-sm">Stage 4: Recovery</p>
          <br />
          <p className="text-sm"><strong>APGAR Scoring</strong></p>
          <p className="text-sm">Activity </p>
          <p className="text-sm">Pulse </p>
          <p className="text-sm">Grimace </p>
          <p className="text-sm">Appearance</p>
          <p className="text-sm">Respiration </p>
          <br />
          <p className="text-sm">less than 3 is severely depressed </p>
          <p className="text-sm">4-6 needs some assistance </p>
          <p className="text-sm">7-10 is baby is adjusting </p>
          <br />
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
          <br />
          <p className="text-sm"><strong>Newborn Thermoregulation</strong></p>
          <p className="text-sm">
            Heat Loss: large surface area, less fat, no shiver response
            Prevention: dry baby immediately, hat on head, skin-to-skin, warm blankets
          </p>
          <br />
          <p className="text-sm"><strong>Newborn Measurements</strong></p>
          <p className="text-sm">
            Weight
            Head Circumference (OFC)
            Length
          </p>
          <br />
          <p className="text-sm"><strong>Newborn Medications</strong></p>
          <p className="text-sm">
            Vitamin K (Coagulation)
            Erythromycin (Antibiotic for Gonnerhea / Clamadia)
            Hepatitis B Vaccination
          </p>
          <br />
          <p className="text-sm"><strong>Definitions</strong></p>
          <p className="text-sm">
            Maternal health: Woman health during the antepartum, intrapartum, and postpartum periods
            Newborn health: Neonate (first 28 days), or newborn infant (first year)
            Infant health: Birth to one year of life
          </p>
          <br />
          <p className="text-sm"><strong>Maternal Mortality</strong></p>
          <p className="text-sm">
            MATERNAL MORTALITY: Death while pregnant or within 42 days (6 weeks) of the end of pregnancy, irrespective of the duration and site of the pregnancy.
            PREGNANCY-ASSOCIATED: The death of a woman while pregnant or within one year of the end of a pregnancy, regardless of cause.
            THREE SUBCATEGORIES: related to pregnancy, unrelated, or unable to determine relatedness.
            PREGNANCY-RELATED: The death of a woman during pregnancy or within one year of the end of a pregnancy from a pregnancy complication or event initiated by the physiologic effects of pregnancy.
            MATERNAL MORBIDITY: Physical or mental illness or disability directly related to pregnancy and/or childbirth.
          </p>
          <br />
          <p className="text-sm"><strong>US MATERNAL MORTALITY</strong></p>
          <p className="text-sm">Leading underlying causes:
            Mental health conditions
            Hemorrhage (bleeding)
            Cardiovascular conditions
            Infection
          </p>
          <br />
          <p className="text-sm"><strong>Maternal Mortality Review Committees</strong></p>
          <p className="text-sm">review all maternal death cases that occurred within 1 year of the end of pregnancy</p>
          <br />
          <p className="text-sm"><strong>Postpartum</strong></p>
          <p className="text-sm">Interval between birth and the return of the
            reproductive organs to their normal nonpregnant
            state</p>
          <p className="text-sm">Begins with delivery of the placenta</p>
          <p className="text-sm">Also called 4th trimester, puerperium, or postnatal
            period</p>
          <br />
          <p className="text-sm"><strong>Normal Postpartum Assessment: BUBBLE HEN</strong></p>
          <p className="text-sm">
            Breasts - soft filling, firm, nipples.
            Uterus - consistency, position height.
            Bladder - voiding pattern.
            Bowels - bowel sounds, BM, hemorrhoids.
            Lochia - amount, color, odor, clots.
            Episiotomy - lacerations, C/S incision.
            Homans' Sign - present or not.
            Emotional Status - bonding, blues.
            Nutrition - tolerating diet, education/counseling.
          </p>
          <br />
          <p className="text-sm"><strong>Postpartum Breasts</strong></p>
          <p className="text-sm">
            Delivering placenta decreases estrogen, progesterone, and other hormones
          </p>
          <p className="text-sm">Promote breastfeeding vs. lactation suppression</p>
          <p className="text-sm">Colostrum first milk produced - packed iwth IgA (passive immunities)</p>
          <p className="text-sm">Breasts obtain mature milk by 72-96 hours</p>
          <p className="text-sm">check nipples for cracks, blisters, redness</p>
          <p className="text-sm">Clean with warm water, no soap, and dry thoroughly</p>
          <br />
          <p className="text-sm"><strong>Postpartum Uterus</strong></p>
          <p className="text-sm">Return of uterus to nonpregnant state following birth.</p>
          <p className="text-sm">Fundus descends 1 to 2cm every 24 hours</p>
          <p className="text-sm">Uterus is no longer palpable 2 weeks postpartum</p>
          <p className="text-sm">Returns to non-pregnant state by 6 weeks postpartum</p>
          <p className="text-sm">SUBINVOLUTION: failure of uterus to return to non-pregnant state</p>
          <br />
          <p className="text-sm"><strong>Postpartum Contractions and AfterPains</strong></p>
          <p className="text-sm">Cramps due to uterine contractions.
            Last 2-3 days.
            Breastfeeding can intensify afterpains and slow bleeding.
            Interventions: Heat, Ambulation, Mild Analgesic (Naproxen, Ibuprofen)</p>
          <br />
          <p className="text-sm"><strong>Postpartum Bladder</strong></p>
          <p className="text-sm">Birth induced trauma can occur to the bladder
             Can be painful to void post repair
             Postpartum diuresis (losing excess fluid)
             Urethra and bladder
             Excessive bleeding can occur because of
            displacement of the uterus if bladder is full
             Inability to void post anesthesia (epidural or spinal)
             Increased risk of UTI
          </p>

          <br />
          <p className="text-sm"><strong>Postpartum Bowels</strong></p>
          <p className="text-sm">
             Can take 2-3 days to have a bowel movement
             These patients often experience constipation
             Encourage early ambulation, fiber intake, hydration, stool softeners
             They anticipate pain with a bowel movement if they had a repair
             Hemorrhoids common in postpartum women
          </p>

          <br />
          <p className="text-sm"><strong>Postpartum Lochia (vaginal bleeding)</strong></p>
          <p className="text-sm"> Uterine blood or discharge after delivery
             Assess color, amount, consistency (scant, light, moderate, heavy)
             May contain clots initially
             Resembles heavy period first 2 hours PP
             Rubra (bright red color): consists of blood and trophoblastic debris
             Bright red, fleshy odor; lasts 3-4 days postpartum
             Serosa (browner color): old blood, serum, leukocytes and tissue debris
             Pinkish brown color; starts at 3-4 days and lasts 22-27 days after delivery (can go away at 10 days)
             Alba (yellow-whitish color): consists of WBCs, decidua, epithelial cells, mucus, serum and bacteria
             Yellowish white color; lasts from 4-8 weeks postpartum</p>
          <p className="text-sm">Weight bloody materials.  1 gram = 1 mL blood loss</p>

          <br />
          <p className="text-sm"><strong>Postpartum Episiotomy (vaginal lacerations / C-section) & Perineum</strong></p>
          <p className="text-sm">Episiotomy is intentional incision (nowadays, it is better to tear)</p>
          <p className="text-sm"> Vagina
             Returns to pre-pregnant size by 6-10 weeks
             Episiotomy heals within 2-3 weeks
             Lacerations can be traumatic or spontaneous
             Locations: Labia, perineal, vaginal, cervical, periurethral
             Repaired vs. heal naturally
             Watch for redness, drainage, warmth, swelling, or lack of approximation
             If C-section delivery, remember to assess surgical incision
             Excessive postpartum bleeding may be due to unrepaired laceration(s) or hematoma if the fundus is firm</p>
          <p className="text-sm"><strong>REEDA:  Redness, echymosis, edema, drainage & approximation</strong></p>
          <img src='images/legDeepVeinThrombosis.png' />

          <br />
          <p className="text-sm"><strong>Postpartum Perineum Interventions</strong></p>
          <p className="text-sm">Comfort Measures and Interventions
             Patient should lie on side as much as possible
             Analgesics and/or topical anesthetics (Dermaplast or Epifoam)
             Ice packs for first 12-24 hours to decrease swelling
             Sitz baths 3-4 times/day
             Change pads regularly & with each stool/void
             Teach perineal cleaning:
             Hand hygiene, mild soap & warm water, clean front to back, use squeeze bottle, avoid wiping</p>

          <br />
          <p className="text-sm"><strong>Homans’ Sign</strong></p>
          <p className="text-sm">May occur due to venous statis</p>
          <p className="text-sm">If present, may be early sign of venous thrombosis</p>
          <p className="text-sm">Report immediately</p>
          <p className="text-sm">Body is hyper-coagulation event</p>
          <p className="text-sm">Dorsi flex foot, if pain, then clot could exist in leg</p>
          <p className="text-sm">If positive, do doppler studies</p>

          <br />
          <p className="text-sm"><strong>Postpartum Emotional Status</strong></p>
          <p className="text-sm"> Important to assess the patient’s emotional state
             EPDS prior to discharge
             Bonding/engagement in care of newborn
             “Baby blues” are normal for the first two weeks postpartum
             Emotional, crying for no reason, may also experience fatigue, insomnia, and/or anxiety
             Perinatal Mood & Anxiety Disorders
             Postpartum depression
             Postpartum psychosis
             Postpartum anxiety disorder</p>

          <br />
          <p className="text-sm"><strong>Edinburgh Postnatal Depression Scale</strong></p>
          <p className="text-sm">Any thoughts of self-harm should be immediately reported</p>

          <br />
          <p className="text-sm"><strong>Postpartum Nutrition</strong></p>
          <p className="text-sm"> Mother has lost blood and needs iron and iron-rich foods
             500 extra calories to breastfeed
             1800-2000 calories per day for non-breastfeeding mothers
             Healing from delivery or surgery
             Good time to counsel on diet</p>

          <br />
          <p className="text-sm"><strong>Postpartum Cardiovascular System</strong></p>
          <p className="text-sm"> Blood Volume increase of 40-45% during pregnancy
             Blood loss during delivery and hormones affect CV system
             Vital signs (table 18.1)
             Hgb and Hct
             ↑DVT or thromboembolism
             Hypercoagulable state
          </p>

          <br />
          <p className="text-sm"><strong>Postpartum Cervix</strong></p>
          <p className="text-sm"> Soft immediately after birth
             During the next 12 to 18 hours the cervix shortens, becomes firm, and regains pre-pregnant form
             External os does not regain its pre-pregnancy appearance
             Cervical os dilated to 10 cm during labor</p>

          <br />
          <p className="text-sm"><strong>Postpartum Ovulation & Menstruation</strong></p>
          <p className="text-sm"> Ovulation occurs as early as 27 days and menstruation within 3 months after birth for non-breastfeeding moms
             Breastfeeding moms – elevated serum prolactin levels suppress ovulation
             Can still ovulate and menstruate – does NOT prevent pregnancy</p>

          <br />
          <p className="text-sm"><strong>Postpartum Musculoskeletal</strong></p>
          <p className="text-sm">Pelvic muscular support
             Supportive tissues of pelvic floor torn or stretched during childbirth
             Abdomen
             During first 2 weeks abdominal wall remains relaxed
             Woman has a still-pregnant appearance
             Return to prepregnancy state takes 6 weeks
             Diastasis recti abdominis – abdominal wall separates</p>

          <br />
          <p className="text-sm"><strong>Postpartum C-section Care</strong></p>
          <p className="text-sm"> Frequent assessments during recovery – VS, fundal checks, incision
             Safety considerations/risk for falls due to anesthesia/analgesics
             Incisional care and assessment
             Fundal height and massage more of a challenge
             Foley catheter/Bladder
             Pain management
             Promote bonding
          </p>

          <br />
          <p className="text-sm"><strong>Postpartum Vaccinations & RhoGAM</strong></p>
          <p className="text-sm">
            Rubella vaccination (MMR) post partum given if serologically non-immune
             Flu shot can be given any time
             Injection of RhoGAM within 72 hours to prevent Rh Isoimmunization
             Rh sensitization due to mixture of fetal and maternal blood
             RhoGAM kills fetal Rh positive blood cells before mom develops antibodies
          </p>

          <br />
          <p className="text-sm"><strong>Postpartum Education</strong></p>
          <p className="text-sm">Self management, nutrition, exercise, sexual intercourse, meds for mom and baby</p>
          <p className="text-sm">Meds: route, dose, frequency, side effects (narcotics cause drowsiness)</p>
          <p className="text-sm">Contraception/postpartum</p>
          <p className="text-sm">Diet counseling</p>
          <p className="text-sm">Call orders (signs of infection or excessive bleeding, uncontrolled pain)</p>

          <br />
          <p className="text-sm"><strong>Postpartum Appointment</strong></p>
          <p className="text-sm">Discuss birth control
             Explore troubles with pregnancy and birth
             Assess emotional state and need for follow-up for postpartum depression
             Examine pregnancy complications to see if resolved
             Diabetes
             Hypertension
             Physical exam
             Vaccinations should be up to date</p>

          <br />
          <p className="text-sm"><strong>Postpartum Engorgement</strong></p>
          <p className="text-sm"> Vascular congestions related to increased blood and lymph supply
            – 72-96 hours postpartum
             Breasts are hard and painful
            – Difficult for infant to latch and feed
            Interventions
             Nurse frequently (every 1/2-3 hours), long enough to empty breasts
             Warm shower or compress to stimulate letdown
             Alternate breasts with each feeding
             Mild analgesic before feeding
             Ice packs between feeding for pronounced discomfort
             Consult a lactation specialist</p>

          <br />
          <p className="text-sm"><strong>Postpartum Mastitis</strong></p>
          <p className="text-sm"> Breast infection: occurs after milk established
             Fever, flu-like, red spot on breast, tender
             Treated with antibiotics, continue to breastfeed</p>

          <br />
          <p className="text-sm"><strong>Postpartum Subinvolution</strong></p>
          <p className="text-sm">Subinvolution: Failure of uterus to return to non-pregnant state</p>
          <p className="text-sm"> Causes
             Retained placental fragments
             Infection
             Assessment findings
             May be febrile
             Tender uterus
             Boggy uterus
             Prolonged or late postpartum bleeding
             Treatment: Antibiotics, D&C, oxytocic drugs
          </p>

          <br />
          <p className="text-sm"><strong>Postpartum Retained Placenta</strong></p>
          <p className="text-sm"> Non-adherent vs. adherent retained placenta
             Accreta, increta, percreta
             Ultrasound used to detect fragments
             Manual removal vs. uterine curettage (D&C)
             More common with premature birth
             Placenta not ready to detach
             Hysterectomy may be indicated</p>

          <br />
          <p className="text-sm"><strong>❗❗ Postpartum Uterine Atony (uterus lacks tone / boggy / not firm) ❗❗</strong></p>
          <p className="text-sm"> Causes include:
             Polyhydramnios
             Macrosomia
             Multiple gestation or high parity
             Birth trauma
             MgSO4
             Rapid or prolonged labor
             Chorioamnionitis
             Use of Pit for induction or augmentation
             Full bladder
             Retained placenta
             Leading cause of PP hemorrhage (1st hour)
            ❗❗❗ Priority nursing intervention is fundal massage!❗❗❗</p>
          <img src="images/uterineAtony.png" />

          <br />
          <p className="text-sm"><strong>Postpartum Hemorrhage</strong></p>
          <p className="text-sm"> Early vs. late PPH
             Evaluate uterine firmness – fundal massage!
             Express any clots
             Empty bladder if needed
             Examination for retained placenta
             If still not firm, can give medications:
             Rapid IV infusion of Pitocin
             Methergine IM
             Hemabate, prostin
             Cytotec (misoprostol) rectally
             Bakri Balloon
             May need to call OR for surgery</p>

          <br />
          <p className="text-sm"><strong>Postpartum Fundal Massage</strong></p>
          <p className="text-sm"> Non-dominant hand above symphysis pubis to prevent any downward displacement, uterine prolapse, or inversion!</p>

          <br />
          <p className="text-sm"><strong>Postpartum Hemorrhagic Shock</strong></p>
          <p className="text-sm"> Emergency!
             Hypovolemic Shock secondary to hemorrhage
             Continue fundal massage to keep uterus firm
             Administer oxytocic medications as ordered by MD
             Monitor VS, determine cause, restore volume with IVF (LR, NS) and blood products
             Protect and maintain airway
             Stay calm
             Inform family with simple explanations</p>

          <br />
          <p className="text-sm"><strong>Postpartum Infection</strong></p>
          <p className="text-sm"> Puerperal infection: any infection of genital tract within 28 days of delivery
             Causes: streptococcal, staph aureus, E. coli
          </p>
          <p className="text-sm"> Risks:
             Immunosuppression
             Anemia
             hemorrhage
             Diabetes
             Prolonged rupture of membranes (ROM)
             Long labor
             Intrauterine monitoring
             Operative birth
             Retained placenta</p>
          <p className="text-sm"> Prevention:
             Handwashing
             Nutrition
             Perineal hygiene
             Aseptic technique with childbirth
             Antibiotics</p>


          <br />
          <p className="text-sm"><strong>Postpartum Endometritis (infection of uterus)</strong></p>
          <p className="text-sm">Infection at placental site: Spreads. Most common postpartum infection seen with C/S, prolonged labor, or prolonged ROM</p>
          <p className="text-sm">Signs/symptoms: Chills
            Fever.
            Tachycardia.
            Nausea.
            Fatigue.
            Anorexia.
            Tender uterus.
            Foul smelling lochia.
            Increased bleeding.
            Increased sed rate & anemia.
            Increased WBC.</p>
          <p className="text-sm">Treatment: Broad spectrum IV antibiotics,hydration, rest, and pain management
          </p>

          <br />
          <p className="text-sm"><strong>Postpartum Venous Thromboembolism</strong></p>
          <p className="text-sm"> Formation of blood clot inside blood vessel due to inflammation (thrombophlebitis)
             Superficial
             Deep venous thrombosis
             Pulmonary embolism
             Prevention through early ambulation
             Due to venous stasis & hypercoagulability
             Risks: C-section patients, varicose veins, age, obesity, smokers, genetics, immobility</p>

          <br />
          <p className="text-sm"><strong>Postpartum Deep Vein Thrombosis (DVT)</strong></p>
          <p className="text-sm">Risks: Preeclampsia, hypertensive disorders, C/S, any condition that causes patient to be on bedrest/decreased mobility
             Diagnosed by ultrasound or venous study (Doppler flow studies)
             Interventions:
             Heparin or Lovenox
             Bed rest, elevate leg
             Analgesics
             Watch for PE
             SCDs and/or compression stockings
             Avoid prolonged standing
          </p>

          <br />
          <p className="text-sm"><strong>Perinatal Mood & Anxiety Disorders</strong></p>
          <p className="text-sm">Postpartum Blues: 50-85% mothers in first 2 weeks postpartum.  Irritiable, anxiety, fluctating moods, increased emotional reactivity.  Mild & spontaneous remits, not considered psychiatric disorder</p>
          <p className="text-sm">Postpartum Depression: 10-20% mothers in first year.  symptoms are excessive guilt, anxiety, anhedonia, depressed mood, insomnia/hypersomnia, suidical ideation, fatigue</p>
          <p className="text-sm">Postpartum Psychosis: 0.01% mothers in first 3 months postpartum. Mixed or rapid cycling, agitation, disorganized behavior, cognitive impairment, low insight.  Severe. considered psychiatric emergency. Often necessistates hospitalization.</p>

          <br />
          <p className="text-sm"><strong>Postpartum Anxiety Disorders</strong></p>
        <p className="text-sm"></p>

          <br />
          <p className="text-sm"><strong></strong></p>
          <p className="text-sm"></p>

          <br />
          <p className="text-sm"><strong></strong></p>
          <p className="text-sm"></p>

          <br />
          <p className="text-sm"><strong></strong></p>
          <p className="text-sm"></p>

          <br />
          <p className="text-sm"><strong></strong></p>
          <p className="text-sm"></p>
        </div>
      </div>
    </div>
  );
}