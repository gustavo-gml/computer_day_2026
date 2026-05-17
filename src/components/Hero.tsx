"use client";

import { useState } from 'react';
import RegistrationModal from './RegistrationModal';

export default function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <section id="home" className="pt-24 pb-16 min-h-[90vh] flex flex-col items-center justify-center bg-primary-dark bg-[linear-gradient(to_right,#31ac8744_1px,transparent_1px),linear-gradient(to_bottom,#31ac8744_1px,transparent_1px)] bg-[size:48px_48px] relative overflow-hidden">
      <div className="container mx-auto px-4 text-center relative z-10">
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-8 uppercase tracking-widest leading-none drop-shadow-[4px_4px_0_#000] md:drop-shadow-[8px_8px_0_#000]">
          Computer Day
        </h1>

        {/* Logo Placeholder - Brutalist Style */}
        <div className="w-32 h-32 md:w-48 md:h-48 mx-auto bg-primary-bright border-4 border-black flex items-center justify-center mb-8 shadow-[8px_8px_0_#000]">
          <span className="text-black font-black text-2xl md:text-3xl rotate-[-5deg]">LOGO</span>
        </div>

        <div className="flex flex-col items-center max-w-3xl mx-auto">
          <div className="bg-primary text-white border-4 border-black p-4 md:p-6 shadow-[6px_6px_0_#000] mb-8 w-full">
            <h2 className="text-xl md:text-3xl font-black uppercase text-black drop-shadow-[2px_2px_0_#fff] text-center md:text-justify break-words">
              Um dia para criar, aprender e experimentar tecnologia.
            </h2>
          </div>

          <div className="bg-primary-bright text-black border-4 border-black p-4 shadow-[6px_6px_0_#000] mb-10 w-full flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8 font-bold text-lg md:text-xl uppercase">
            <div className="flex items-center text-center">
              <svg className="w-6 h-6 mr-2 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.243-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
              <span>IFSULDEMINAS <br className="md:hidden" />- Campus Machado</span>
            </div>
            <div className="flex items-center">
              <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
              10 de Junho
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col md:flex-row items-center justify-center gap-6" id="inscreva-se">
          <button 
            onClick={() => setIsModalOpen(true)}
            className="bg-black text-primary-bright border-4 border-primary-bright px-8 py-4 text-xl font-black hover:bg-primary-bright hover:text-black hover:border-black transition-all shadow-[6px_6px_0_#00ff97] hover:shadow-[6px_6px_0_#000] uppercase tracking-wider relative group"
          >
            <span className="relative z-10">INSCREVA-SE</span>
            <div className="absolute inset-0 bg-primary-bright transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left z-0"></div>
          </button>
          <div className="bg-black text-white border-2 border-white px-4 py-2 text-sm font-bold uppercase tracking-widest rotate-2 shadow-[2px_2px_0_#fff]">
            Inscrições abertas
          </div>
        </div>
      </div>

      <RegistrationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
}
