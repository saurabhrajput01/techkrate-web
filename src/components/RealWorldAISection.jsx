import React from "react";

const RealWorldAISection = () => {
  const features = [
    {
      number: "01",
      title: "Precision & Speed",
      description:
        "Our AI delivers ultra-precise damage assessments by analyzing images down to the pixel. Certainty scores accompany every estimate, ensuring accuracy and speed for even the most complex claims.",
    },
    {
      number: "02",
      title: "Efficiency at Scale",
      description:
        "Built for high-demand industries, our AI processes thousands of claims daily while identifying salvaged parts for repair and transforming workflows for unmatched efficiency.",
    },
    {
      number: "03",
      title: "Seamless Integration",
      description:
        "Our AI integrates effortlessly with your existing systems using open APIs, enabling smooth collaboration between technologies and consistent results across industries.",
    },
  ];

  return (
    <section className="bg-black text-white py-20">
      {/* SAME CONTAINER AS HERO */}
      <div className="max-w-[1380px] mx-auto px-10 lg:px-12">

        {/* GRID */}
        <div className="grid lg:grid-cols-[1.35fr_1fr] gap-32 items-start">

          {/* LEFT SIDE */}
          <div className="flex flex-col space-y-8 lg:sticky lg:top-28 h-fit">

            <h2 className="text-[32px] md:text-[44px] lg:text-[48px] font-semibold leading-[1.15] max-w-2xl">
              Techkrate AI that works in the real world
            </h2>

            <p className="text-gray-400 text-lg leading-relaxed max-w-xl">
              At Techkrate, we harness AI’s vast potential to solve real-world
              problems today. Built on applied research and trained with millions
              of data-rich images, our AI delivers fast, accurate assessments for
              vehicles and properties.
            </p>

            {/* VIDEO */}
            <div className="w-full max-w-2xl aspect-[16/9] bg-[#111] rounded-xl overflow-hidden border border-gray-800 shadow-lg">
              <video
                src="https://tractable.ai/wp-content/uploads/2024/12/Tractable-Home-Our-Technology.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              />
            </div>

          </div>

          {/* RIGHT SIDE */}
          <div className="flex flex-col space-y-8 max-w-md">

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
