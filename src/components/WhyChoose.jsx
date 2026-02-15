import React from "react";

const WhyChoose = ({ features = [], imageSrc, eyebrow, title, subtitle }) => {
  return (
    <section className="w-full py-16 bg-black/40 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h3 className="text-sm font-semibold text-[#2563EB] inline-block px-3 py-1 rounded-full bg-[#2563EB]/10">{eyebrow}</h3>
          <h2 className="mt-4 text-3xl md:text-4xl font-extrabold text-white">{title}</h2>
          <p className="mt-3 text-gray-400 max-w-2xl mx-auto">{subtitle}</p>
        </div>

        <div className="relative flex flex-col md:flex-row items-center justify-between gap-8">

          <div className="flex-1 flex flex-col items-start space-y-8 pr-6">
            {features.slice(0, 3).map((f, i) => {
              const Icon = f.icon;
              return (
                <div key={i} className="flex items-start gap-4 md:gap-6">
                  <div className="flex-shrink-0 w-14 h-14 rounded-full bg-gradient-to-br from-[#2563EB] to-[#00ADEF] flex items-center justify-center shadow-lg">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">{f.title}</h4>
                    <p className="text-gray-400 text-sm">{f.description}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="w-full md:w-80 lg:w-96 flex-shrink-0 flex flex-col items-center">
            <div className="w-56 md:w-72 lg:w-80 h-[420px] md:h-[520px] rounded-3xl overflow-hidden relative shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-b from-[#2B3990]/70 via-transparent to-[#00ADEF]/40" />
              <img src={imageSrc} alt="showcase" className="object-cover w-full h-full relative z-10" />
            </div>
            <div className="mt-4 text-center">
              <p className="text-white font-semibold">Platform Match</p>
              <p className="text-gray-400 text-sm">Tailored to your brand and claims workflow</p>
            </div>
          </div>

          <div className="flex-1 flex flex-col items-end space-y-8 pl-6">
            {features.slice(3, 6).map((f, i) => {
              const Icon = f.icon;
              return (
                <div key={i} className="flex items-start gap-4 md:gap-6">
                  <div className="flex-shrink-0 w-14 h-14 rounded-full bg-gradient-to-br from-[#F15A29] to-[#FFB86B] flex items-center justify-center shadow-lg">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-right">
                    <h4 className="text-white font-semibold">{f.title}</h4>
                    <p className="text-gray-400 text-sm">{f.description}</p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
