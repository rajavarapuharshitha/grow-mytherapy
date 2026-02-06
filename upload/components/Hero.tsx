import React from 'react';

const Hero = () => {
  return (
   <section id="home" className="relative h-[90vh] flex items-center bg-[#F7EFEA]">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[#3E4A59]/5 rounded-l-full transform translate-x-20"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl">
          {/* SEO Optimized Tagline */}
          <h2 className="text-[#B07D62] font-semibold tracking-widest uppercase text-sm mb-6 animate-fade-in">
            Licensed Clinical Psychologist • Santa Monica
          </h2>

          {/* Main Headline from Dr. Maya's Profile */}
          <h1 className="text-5xl md:text-7xl font-serif text-[#3E4A59] leading-tight mb-8">
            Grounded support for the <span className="italic text-[#B07D62]">high-achieving</span> soul.
          </h1>

          {/* Subtext describing her approach */}
          <p className="text-xl text-gray-600 mb-10 leading-relaxed max-w-xl">
            Helping you move from feeling "functional" to truly regulated. Specialized therapy for anxiety, trauma, and burnout in a warm, collaborative space.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-[#3E4A59] text-white px-10 py-4 rounded-full font-medium hover:bg-[#2d3742] transition-all shadow-lg">
              Book a Consultation
            </button>
            <button className="border border-[#3E4A59] text-[#3E4A59] px-10 py-4 rounded-full font-medium hover:bg-[#3E4A59] hover:text-white transition-all">
              Our Services
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;