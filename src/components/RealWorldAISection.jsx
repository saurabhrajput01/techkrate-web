import React from "react";
import carVideo from "../assets/video/car.mp4";

const RealWorldAISection = () => {
  const features = [
    {
      number: "01",
      title: "Capture & Analyse Instantly",
      description:
        "Photograph the damaged vehicle using the Moval App — no special equipment required. Images are instantly processed by AI for detailed evaluation.",
    },
    {
      number: "02",
      title: "AI-Based Damage Detection",
      description:
        "The AI automatically detects scratches, dents, and cracks, marking each damage area with precision using visual indicators.",
    },
    {
      number: "03",
      title: "Intelligent Parts Recognition",
      description:
        "The system automatically identifies impacted components, including the bumper, hood, doors, fenders, and other vehicle parts.",
    },
    {
      number: "04",
      title: "Automated ILA Report Generation",
      description:
        "Using Moval’s integrated parts rate charts, the platform calculates part pricing and labour costs and generates a complete Intelligent Loss Assessment (ILA) report within minutes.",
    },
    {
      number: "05",
      title: "Speed, Accuracy & Operational Efficiency",
      description:
        "The end-to-end AI workflow ensures precision, eliminates manual estimation errors, and significantly reduces claim processing time.",
    },
  ];

  return (
    <section className="bg-black text-white py-20">
      {/* SAME CONTAINER AS HERO */}
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 xl:px-16">

        {/* GRID */}
        <div className="grid lg:grid-cols-[1.35fr_1fr] gap-32 items-start">

          {/* LEFT SIDE */}
          <div className="flex flex-col space-y-8 lg:sticky lg:top-28 h-fit">

            <h2 className="text-[32px] md:text-[44px] lg:text-[48px] font-semibold leading-[1.15] max-w-2xl">
              Techkrate AI that works in the real world
            </h2>

            <p className="text-gray-400 text-lg leading-relaxed max-w-xl">
              At Techkrate, we harness AI’s vast potential to solve real-world
              problems today. Built on applied research and trained
              of data-rich images, our AI delivers fast, accurate assessments for
              vehicles and properties.
            </p>

            {/* VIDEO */}
            <div className="w-full max-w-2xl aspect-[16/9] bg-[#111] rounded-xl overflow-hidden border border-gray-800 shadow-lg">
              <video
                src={carVideo}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              />
            </div>

          </div>

          {/* RIGHT SIDE */}
          <div className="flex flex-col space-y-16 max-w-md pb-20">

            {features.map((feature, index) => (
              <div key={index} className="space-y-4">

                <span className="text-3xl text-indigo-500 font-semibold">
                  {feature.number}
                </span>

                <h3 className="text-2xl font-medium leading-snug">
                  {feature.title}
                </h3>

                <p className="text-gray-400 leading-relaxed">
                  {feature.description}
                </p>

              </div>
            ))}

          </div>

        </div>
      </div>
    </section>
  );
};

export default RealWorldAISection;
