import React from "react";

const Services = () => {
  const services = [
    {
      title: "Trauma & PTSD",
      description: "Processing past experiences using EMDR and somatic approaches to help you move from feeling stuck to feeling safe.",
      icon: (
        <svg className="w-8 h-8 text-[#B07D62]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
    {
      title: "Anxiety & Panic",
      description: "Specialized tools to manage overthinking and the physiological symptoms of panic for a more regulated life.",
      icon: (
        <svg className="w-8 h-8 text-[#B07D62]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: "Professional Burnout",
      description: "Support for high-achieving adults struggling with chronic stress, exhaustion, and work-life balance.",
      icon: (
        <svg className="w-8 h-8 text-[#B07D62]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
  ];

  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-[#B07D62] font-semibold tracking-widest uppercase text-bm mb-6">
          Areas of Expertise
        </h2>
        <h3 className="text-4xl font-serif text-[#3E4A59] mb-16">
          Specialized Care for Modern Challenges
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-10 rounded-4xl border border-[#EEEAE5] hover:shadow-xl transition-shadow duration-300 text-left bg-[#FDFCFB]"
            >
              <div className="mb-6">{service.icon}</div>
              <h4 className="text-4xl font-serif text-[#3E4A59] mb-4">{service.title}</h4>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

