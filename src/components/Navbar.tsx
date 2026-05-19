"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import RegistrationModal from './RegistrationModal';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const navLinks = [
    { name: 'HOME', href: '#home' },
    { name: 'SOBRE', href: '#sobre' },
    { name: 'AGENDA', href: '#agenda' },
    { name: 'CONTATO', href: '#contato' },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-dark border-b-4 border-primary-bright">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        
        {/* Logo */}
        <Link href="#home" className="flex items-center group">
          <div className="w-10 h-10 border-2 border-primary-bright shadow-[2px_2px_0_#00ff97] group-hover:translate-x-[2px] group-hover:translate-y-[2px] group-hover:shadow-none transition-all bg-black flex items-center justify-center">
            <Image src="/logo.png" alt="Computer Day Logo" width={40} height={40} className="object-cover" />
          </div>
          <span className="ml-3 font-black text-light uppercase tracking-widest hidden md:block group-hover:text-primary-bright transition-colors">
            Computer Day
          </span>
        </Link>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center">
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="text-primary-bright hover:text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link 
                href={link.href}
                className="text-light hover:text-dark hover:bg-primary-bright px-3 py-1 font-bold text-sm transition-colors uppercase tracking-widest border-2 border-transparent hover:border-primary-bright"
              >
                {link.name}
              </Link>
            </li>
          ))}
          <li>
            <button 
              onClick={() => setIsModalOpen(true)}
              className="text-black bg-primary-bright hover:bg-white px-3 py-1 font-black text-sm transition-colors uppercase tracking-widest border-2 border-primary-bright hover:border-white shadow-[2px_2px_0_#00ff97] hover:shadow-[2px_2px_0_#fff]"
            >
              INSCREVA-SE
            </button>
          </li>
        </ul>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-primary-dark border-t-4 border-primary-bright shadow-[0_8px_0_rgba(0,0,0,1)] absolute w-full left-0">
          <ul className="flex flex-col px-4 pt-2 pb-4 space-y-2">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link 
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block text-light hover:text-dark hover:bg-primary-bright font-bold text-sm transition-colors py-3 px-2 uppercase tracking-widest border-2 border-transparent hover:border-black"
                >
                  {link.name}
                </Link>
              </li>
            ))}
            <li>
              <button 
                onClick={() => { setIsOpen(false); setIsModalOpen(true); }}
                className="w-full text-left text-black bg-primary-bright hover:bg-white font-black text-sm transition-colors py-3 px-2 uppercase tracking-widest border-2 border-transparent hover:border-black"
              >
                INSCREVA-SE
              </button>
            </li>
          </ul>
        </div>
      )}

      <RegistrationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </nav>
  );
}
