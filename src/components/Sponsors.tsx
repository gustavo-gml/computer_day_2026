import Image from "next/image";
import { FaInstagram } from 'react-icons/fa6';

export default function Sponsors() {
  return (
    <section id="patrocinadores" className="py-20 bg-primary border-b-4 border-black relative">
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="inline-flex bg-black text-white px-6 md:px-8 py-3 md:py-4 border-4 border-black shadow-[6px_6px_0_#fff] mb-12 mx-auto max-w-[90vw] text-center">
          <h2 className="text-2xl md:text-5xl font-black uppercase tracking-widest drop-shadow-[2px_2px_0_#31ac87]">Patrocinador Oficial</h2>
        </div>
        
        <div className="flex flex-col items-center justify-center max-w-6xl mx-auto">
          <a 
            href="https://www.instagram.com/itoptelecom/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full max-w-md bg-white border-4 border-black flex flex-col items-center justify-center shadow-[8px_8px_0_#000] hover:-translate-y-2 hover:shadow-[12px_12px_0_#000] transition-all cursor-pointer mr-[8px] mb-[8px] p-6 text-center group"
          >
            <div className="relative w-full h-32 md:h-40 mb-6 transition-transform group-hover:scale-105">
              <Image 
                src="/itop-logo.jpg"
                alt="iTop Telecom Logo"
                fill
                className="object-contain"
              />
            </div>
            <span className="flex items-center gap-2 text-black font-bold text-lg bg-[#31ac87] text-white px-4 py-2 border-2 border-black">
              <FaInstagram className="w-5 h-5" /> @itoptelecom
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
