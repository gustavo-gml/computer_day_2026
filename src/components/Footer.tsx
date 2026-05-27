"use client";

import { FaInstagram, FaFacebook, FaGlobe, FaEnvelope } from 'react-icons/fa6';

export default function Footer() {
  return (
    <footer id="contato" className="bg-dark pt-16 border-t-4 border-primary-bright text-white relative">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00ff9711_1px,transparent_1px),linear-gradient(to_bottom,#00ff9711_1px,transparent_1px)] bg-[size:32px_32px]"></div>
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-3xl md:text-5xl font-black text-center text-primary-bright mb-12 uppercase tracking-widest drop-shadow-[2px_2px_0_#31ac87]">Entre Em Contato</h2>
        
        <div className="flex flex-col gap-12 max-w-5xl mx-auto mb-16 pr-2 pb-2">
          
          {/* Redes Sociais e Contato */}
          <div className="bg-secondary p-6 md:p-8 border-4 border-black shadow-[8px_8px_0_#00ff97] w-full">
            <h3 className="text-2xl font-black text-black mb-6 uppercase text-center md:text-left">Redes Sociais e Contato:</h3>
            <div className="flex flex-col md:flex-row items-stretch justify-center gap-6">
               <a href="mailto:luciano.carvalho@ifsuldeminas.edu.br" className="flex-1 bg-primary-bright hover:bg-white border-4 border-black px-8 py-6 flex items-center justify-center shadow-[6px_6px_0_#000] hover:-translate-y-1 hover:shadow-[8px_8px_0_#000] transition-all cursor-pointer group min-h-[80px]">
                 <span className="font-black text-xl text-black uppercase tracking-wider transition-colors flex items-center gap-3">
                   <FaEnvelope className="w-6 h-6" /> Enviar E-mail
                 </span>
               </a>
               <div className="flex-1 flex gap-6">
                 <a href="https://www.instagram.com/informatica.ifmachado" target="_blank" rel="noopener noreferrer" className="flex-1 bg-primary-bright hover:bg-white border-4 border-black flex items-center justify-center text-black font-black text-2xl shadow-[6px_6px_0_#000] hover:-translate-y-1 hover:shadow-[8px_8px_0_#000] transition-all min-h-[80px]" aria-label="Instagram">
                   <FaInstagram className="w-8 h-8" />
                 </a>
                 <a href="https://www.facebook.com/informaticaifmachado" target="_blank" rel="noopener noreferrer" className="flex-1 bg-primary-bright hover:bg-white border-4 border-black flex items-center justify-center text-black font-black text-2xl shadow-[6px_6px_0_#000] hover:-translate-y-1 hover:shadow-[8px_8px_0_#000] transition-all min-h-[80px]" aria-label="Facebook">
                   <FaFacebook className="w-8 h-8" />
                 </a>
                 <a href="https://portal.mch.ifsuldeminas.edu.br/" target="_blank" rel="noopener noreferrer" className="flex-1 bg-primary-bright hover:bg-white border-4 border-black flex items-center justify-center text-black font-black text-xl shadow-[6px_6px_0_#000] hover:-translate-y-1 hover:shadow-[8px_8px_0_#000] transition-all min-h-[80px]" aria-label="Site Oficial">
                   <FaGlobe className="w-8 h-8" />
                 </a>
               </div>
            </div>
          </div>

          {/* Localização */}
          <div className="bg-white border-4 border-black shadow-[8px_8px_0_#00ff97] w-full">
            <div className="p-6 md:p-8 border-b-4 border-black flex flex-col md:flex-row md:items-center justify-between gap-4">
              <h3 className="text-2xl font-black text-black uppercase text-center md:text-left">Localização</h3>
              <p className="text-black font-bold text-sm uppercase text-center md:text-right">
                IFSULDEMINAS - Campus Machado<br className="md:hidden" />
                <span className="hidden md:inline"> • </span>Rodovia Machado - Paraguaçu, km 03<br className="md:hidden" />
                <span className="hidden md:inline"> • </span>CEP 37.750-000
              </p>
            </div>
            {/* Mapa */}
            <div className="w-full h-[400px] bg-gray-200 relative overflow-hidden">
              <iframe 
                title="Mapa Localização"
                width="100%" 
                height="100%" 
                style={{ border: 0 }}
                loading="lazy"
                src="https://maps.google.com/maps?width=100%25&amp;height=100%25&amp;hl=pt-BR&amp;q=IFSULDEMINAS%20-%20Campus%20Machado&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                className="absolute inset-0 w-full h-full grayscale contrast-125 opacity-90 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
              ></iframe>
            </div>
          </div>

        </div>
      </div>
      
      {/* Copyright Bar */}
      <div className="bg-primary-bright border-t-4 border-black py-4 text-center text-black font-bold uppercase tracking-widest relative z-10 text-sm">
        &copy; {new Date().getFullYear()} Computer Day. Todos os direitos reservados.
      </div>
    </footer>
  );
}
