import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#3E4A59] text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-b border-white/10 pb-12">
          
          {/* Column 1: Brand & Bio */}
          <div className="space-y-4">
            <h3 className="text-2xl font-serif">Maya Reynolds<span className="text-[#B07D62]">.</span></h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Licensed Clinical Psychologist providing warm, grounded therapy for high-achieving adults in Santa Monica and throughout California via telehealth.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h4 className="font-bold uppercase tracking-widest text-xs text-[#B07D62]">Navigation</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Column 3: Contact Info (From Profile) */}
          <div className="space-y-4">
            <h4 className="font-bold uppercase tracking-widest text-xs text-[#B07D62]">Location</h4>
            <address className="not-italic text-sm text-gray-300 space-y-2">
              <p>123th Street 45 W</p>
              <p>Santa Monica, CA 90401</p>
              <p className="pt-2 text-white">hello@drmayareynolds.com</p>
            </address>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400 gap-4">
          <p>© 2026 Dr. Maya Reynolds, PsyD. All rights reserved.</p>
          <div className="flex gap-6">
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;