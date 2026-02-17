import React from 'react';

const PreFooterCTA = () => {
    return (
        <section className="relative w-full py-6 md:py-24 overflow-hidden">
            {/* Background with modern SaaS gradient */}
            <div className="absolute inset-0 bg-[#0B0F19]">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-900/30 via-slate-900/40 to-indigo-900/30" />

                {/* Subtle glows/blobs */}
                <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-purple-500/20 rounded-full blur-[100px]" />
                <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-blue-500/20 rounded-full blur-[100px]" />
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-indigo-500/10 blur-[120px]" />
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-4xl mx-auto px-4 md:px-6 text-center">
                <h2 className="text-2xl sm:text-3xl md:text-5xl font-normal text-white mb-6 tracking-tight leading-tight ">
                    Our solutions will transform your business.
                </h2>
                <p className="text-lg sm:text-2xl md:text-4xl text-white/90 font-normal leading-snug">
                    Get in touch to see how.
                </p>
            </div>
        </section>
    );
};

export default PreFooterCTA;
