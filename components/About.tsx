import Image from 'next/image';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-[#F9F7F5]">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
        
        {/* Image Side */}
        <div className="w-full md:w-1/2 relative h-[600px]">
          <Image 
            src="/maya.png" 
            alt="Dr. Maya Reynolds - Psychologist in Santa Monica"
            fill
            className="object-cover rounded-2xl shadow-xl"
            priority
          />
          {/* Added a small decorative badge */}
          <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg hidden md:block border border-[#EEEAE5]">
            <p className="text-[#B07D62] font-bold text-xl">10+ Years</p>
            <p className="text-[#3E4A59] text-sm font-medium uppercase tracking-tighter">Clinical Experience</p>
          </div>
        </div>

        {/* Text Side - Expanded Content */}
        <div className="w-full md:w-1/2 space-y-6">
          <h2 className="text-4xl font-serif text-[#3E4A59]">Meet Dr. Maya Reynolds</h2>
          
          <p className="text-[#B07D62] font-semibold uppercase tracking-widest text-sm">
            Psy.D. Licensed Clinical Psychologist
          </p>

          <p className="text-gray-700 leading-relaxed text-lg">
            I am a licensed clinical psychologist based in Santa Monica, California. 
            I offer specialized therapy for high-achieving adults navigating the complex 
            intersections of anxiety, trauma, and professional burnout.
          </p>

          <p className="text-gray-700 leading-relaxed">
            My approach is warm and grounded. I don't just focus on "managing" symptoms; 
            I work with you to process the root causes of distress using evidence-based 
            modalities like **EMDR, Cognitive Behavioral Therapy (CBT), and Mindfulness-based 
            stress reduction.**
          </p>

          <div className="bg-white/50 p-6 rounded-xl border border-[#EEEAE5]">
            <h4 className="font-serif text-[#3E4A59] mb-2 font-bold italic text-lg">My Philosophy</h4>
            <p className="text-gray-700 italic">
              "Healing isn't about becoming a different person, but about returning to the 
              version of yourself that feels regulated, safe, and truly alive in your own body."
            </p>
          </div>

          <div className="pt-4">
            <a 
              href="#contact" 
              className="inline-block bg-[#3E4A59] text-white px-8 py-3 rounded-full hover:bg-[#2d3742] transition-all font-medium"
            >
              Learn More About My Method
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;