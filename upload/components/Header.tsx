export default function Header() {
  return (
    <header className="w-full border-b bg-white">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo / Name */}
        <h1 className="text-xl font-serif font-semibold text-[#0F2F24]">
          Dr. Maya Reynolds
        </h1>

        {/* Navigation Links */}
        <nav className="hidden md:flex gap-8 text-sm font-medium text-gray-700">
          <a href="#home" className="hover:text-[#0F2F24]">Home</a>
          <a href="#about" className="hover:text-[#0F2F24]">About</a>
          <a href="#services" className="hover:text-[#0F2F24]">Services</a>
          <a href="#office" className="hover:text-[#0F2F24]">Office</a>
          <a href="#contact" className="hover:text-[#0F2F24]">Contact</a>
        </nav>

      </div>
    </header>
  );
}
