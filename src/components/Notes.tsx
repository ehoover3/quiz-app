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
            Med Surg
          </h3>
          <p className="text-sm">1 Tablespoon = 3 Teaspoons</p>
          <p className="text-sm">1 kg = 2.2 lb</p>


        </div>



      </div>



    </div>
  );
}