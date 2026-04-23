export default function Notes() {
  const items = [

    { src: "molding.png", label: "Molding" },
    { src: "IschialSpines.png", label: "Ischial Spines" },
    { src: "Babinski.png", label: "Babinski Reflex" },
    { src: "Moro.png", label: "Moro Reflex" },

    { src: "NuchalCord.png", label: "Nuchal Cord" },

    { src: "Milia.png", label: "Milia" },

    { src: "Mottling.png", label: "Mottling" },

    { src: "OralContraceptives1.png", label: "OralContraceptives1" },
    { src: "OralContraceptives2.png", label: "OralContraceptives2" },
    { src: "OralContraceptives3.png", label: "OralContraceptives3" },
    { src: "OralContraceptives4.png", label: "OralContraceptives4" },
    { src: "TonicFencing.png", label: "TonicFencing" },
    { src: "TORCH.png", label: "TORCH" },

    { src: "apgar.png", label: "APGAR" },



    { src: "birthControlPill.png", label: "Birth Control Pill" },
    { src: "cervicalCap.jpg", label: "Cervical Cap" },
    { src: "contraceptiveSponge.png", label: "Contraceptive Sponge" },
    { src: "diaphram.jpg", label: "Diaphragm" },
    { src: "femaleCondom.png", label: "Female Condom" },
    { src: "femaleSterilizationTubalLigation.jpg", label: "Tubal Ligation" },
    { src: "implantableProgestin.png", label: "Implantable Progestin" },
    { src: "IUD.png", label: "IUD" },
    { src: "maleSterilizationVasectomy.png", label: "Vasectomy" },
    { src: "vaginalContraceptionRing.png", label: "Vaginal Ring" }
  ];
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


          {/* IMAGES */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))',
              gap: '16px'
            }}
          >
            {items.map((item) => (
              <div
                key={item.src}
                style={{
                  border: '1px solid #ddd',
                  borderRadius: '12px',
                  padding: '10px',
                  textAlign: 'center',
                  boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
                  backgroundColor: '#fff'
                }}
              >
                <img
                  src={`images/${item.src}`}
                  alt={item.label}
                  style={{
                    width: '100%',
                    height: '120px',
                    objectFit: 'cover',
                    borderRadius: '8px'
                  }}
                />
                <div style={{ marginTop: '8px', fontSize: '14px', fontWeight: '500' }}>
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>



      </div>



    </div>
  );
}