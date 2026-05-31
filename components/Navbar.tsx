import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-6 py-1 flex items-center justify-between">

        {/* Logo */}
        <a href="#home" className="flex items-center">
         <Image
  src="/fintechlogo.png"
  alt="Fintech Logo"
  width={85}
  height={25}
  priority
  className="object-contain"
/>
        </a>

        {/* Navigation */}
        <div className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
          <a href="#home" className="hover:text-blue-700 transition">
            Home
          </a>

          <a href="#about" className="hover:text-blue-700 transition">
            About
          </a>

          <a href="#services" className="hover:text-blue-700 transition">
            Services
          </a>

          <a href="#projects" className="hover:text-blue-700 transition">
            Projects
          </a>

          <a href="#contact" className="hover:text-blue-700 transition">
            Contact
          </a>
        </div>

        {/* Contact Button */}
        <a
          href="#contact"
          className="bg-blue-800 text-white px-6 py-3 rounded-xl hover:bg-blue-900 transition"
        >
          Contact Us
        </a>

      </div>
    </nav>
  );
}