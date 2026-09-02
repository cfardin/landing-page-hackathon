"use client"
import React, { useState } from 'react';

const WHATSAPP = "https://wa.me/8801960481983";

const Navbar = () => {
     const [open, setOpen] = useState(false);
    return (
        <header className="container mx-auto sticky top-0 z-50 flex items-center justify-between border-b border-brown/10 bg-ivory/90 px-6 py-4 backdrop-blur sm:px-10">
        <span className="font-serif text-lg italic">Heaven Furniture Mart</span>
        <nav className="hidden gap-8 text-sm sm:flex">
          <a href="#collections" className="hover:text-brass">Collections</a>
          <a href="#bespoke" className="hover:text-brass">Bespoke</a>
          <a href="#about" className="hover:text-brass">About</a>
          <a href={WHATSAPP} className="border border-brown/20 px-4 py-2 hover:border-brass hover:text-brass">
            Book a Consultation
          </a>
        </nav>
        <button onClick={() => setOpen(!open)} className="sm:hidden" aria-label="Menu">
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
            <path d="M2 6h18M2 11h18M2 16h18" stroke="currentColor" strokeWidth="1.5" />
          </svg>
        </button>
      </header>
    );
};

export default Navbar;