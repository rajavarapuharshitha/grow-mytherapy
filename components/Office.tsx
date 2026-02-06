import Image from 'next/image';

const OfficeSection = () => {
  return (
   <section id="office" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Main Large Image */}
          <div className="md:col-span-7">
            <div className="relative h-[500px] w-full overflow-hidden rounded-2xl shadow-xl">
              {/* This looks for public/office-1.jpg */}
              <Image 
                src="/office-1.jpg" 
                alt="Dr. Maya Reynolds Therapy Office - Comfortable Seating Area"
                fill
                className="object-cover"
              />
              <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm px-4 py-2 rounded text-sm text-[#3E4A59] font-medium">
                Designed for Safety & Comfort
              </div>
            </div>
          </div>

          {/* Secondary Column */}
          <div className="md:col-span-5 flex flex-col gap-8">
            <div className="relative h-[300px] w-full overflow-hidden rounded-2xl shadow-lg">
              {/* This looks for public/office-2.jpg */}
              <Image 
                src="/office-2.jpg" 
                alt="Office interior details and natural lighting"
                fill
                className="object-cover"
              />
            </div>

            {/* Address Info from Profile */}
            <div className="bg-[#F9F7F5] p-8 rounded-2xl border border-[#EEEAE5]">
              <h4 className="text-xl font-serif text-[#3E4A59] mb-4">Visit Us</h4>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start gap-3">📍 123th Street 45 W, Santa Monica, CA 90401</li>
                <li className="flex items-start gap-3">☀️ Natural light and quiet, private surroundings.</li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default OfficeSection;