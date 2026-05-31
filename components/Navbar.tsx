"use client";

import { useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-6 py-2 flex items-center justify-between">

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

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
          <a href="#home" className="hover:text-blue-700">Home</a>
          <a href="#about" className="hover:text-blue-700">About</a>
          <a href="#services" className="hover:text-blue-700">Services</a>
          <a href="#projects" className="hover:text-blue-700">Projects</a>
          <a href="#contact" className="hover:text-blue-700">Contact</a>
        </div>

        {/* Desktop Contact Button */}
        <a
          href="#contact"
          className="hidden md:block bg-blue-800 text-white px-6 py-3 rounded-xl hover:bg-blue-900 transition"
        >
          Contact Us
        </a>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-3xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t shadow-lg">
          <div className="flex flex-col p-4 gap-4">
            <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
            <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
            <a href="#services" onClick={() => setMenuOpen(false)}>Services</a>
            <a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>
            <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>

            <a
              href="#contact"
              className="bg-blue-800 text-white text-center py-3 rounded-lg"
              onClick={() => setMenuOpen(false)}
            >
              Contact Us
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}