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
      <div className="max-w-[1500px] mx-auto px-6">
        
        {/* GRID RATIO CHANGED */}
        <div className="grid lg:grid-cols-[1.35fr_1fr] gap-20 items-start lg:pl-12">

          {/* LEFT */}
          <div className="flex flex-col space-y-8 lg:sticky lg:top-28 h-fit">

            {/* HEADING WIDER */}
            <h3 className="text-3xl md:text-4xl lg:text-[2.5rem] leading-tight font-medium max-w-full tracking-tight">
  Techkrate that works in the real world
</h3>


            {/* PARAGRAPH WIDER */}
            <p className="text-gray-400 text-lg leading-relaxed max-w-2xl">
              At Techkrate, we harness AI’s vast potential to solve real-world
              problems today. Built on applied research and trained with millions
              of data-rich images, our AI delivers fast, accurate assessments for
              vehicles and properties.
            </p>

            {/* IMAGE BIGGER */}
            <div className="w-full max-w-3xl aspect-[16/9] bg-[#111] rounded-xl overflow-hidden border border-gray-800 shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1617814076367-b759c7d7e738?q=80&w=1400&auto=format&fit=crop"
                alt="AI damage detection"
                className="w-full h-full object-cover"
              />
            </div>

          </div>

          {/* RIGHT */}
          <div className="flex flex-col space-y-9">
            {features.map((feature, index) => (
              <div key={index} className="max-w-md space-y-3">
                
                <span className="text-3xl text-indigo-500 font-semibold">
                  {feature.number}
                </span>

                <h3 className="text-2xl font-medium">
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



