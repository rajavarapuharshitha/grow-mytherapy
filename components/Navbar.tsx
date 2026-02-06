import React from 'react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="container mx-auto px-6 h-20 flex justify-between items-center">
        
        {/* Logo Area */}
        <div className="text-xl font-serif font-bold text-[#3E4A59]">
          Maya Reynolds<span className="text-[#B07D62]">.</span>
        </div>

        {/* Menu Links - Using IDs to jump to sections */}
        <div className="hidden md:flex gap-8 text-sm uppercase tracking-widest font-medium text-[#3E4A59]">
          <a href="#home" className="hover:text-[#B07D62] transition-colors">Home</a>
          <a href="#services" className="hover:text-[#B07D62] transition-colors">Services</a>
          <a href="#about" className="hover:text-[#B07D62] transition-colors">About</a>
          <a href="#office" className="hover:text-[#B07D62] transition-colors">Office</a>
        </div>

        {/* Mobile Call to Action */}
        <a href="#contact" className="bg-[#3E4A59] text-white px-5 py-2 rounded-full text-xs font-bold uppercase tracking-tighter">
          Book Session
        </a>
      </div>
    </nav>
  );
};

export default Navbar;