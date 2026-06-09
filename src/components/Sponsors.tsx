import Image from "next/image";
import { FaInstagram } from 'react-icons/fa6';

export default function Sponsors() {
  return (
    <section id="patrocinadores" className="py-20 bg-primary border-b-4 border-black relative">
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="inline-flex bg-black text-white px-6 md:px-8 py-3 md:py-4 border-4 border-black shadow-[6px_6px_0_#fff] mb-12 mx-auto max-w-[90vw] text-center">
          <h2 className="text-2xl md:text-5xl font-black uppercase tracking-widest drop-shadow-[2px_2px_0_#31ac87]">Patrocinador Oficial</h2>
        </div>
        
        <div className="flex flex-col md:flex-row items-stretch justify-center gap-8 max-w-6xl mx-auto">
          <a 
            href="https://www.instagram.com/itoptelecom/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full max-w-md bg-white border-4 border-black flex flex-col items-center justify-between shadow-[8px_8px_0_#000] hover:-translate-y-2 hover:shadow-[12px_12px_0_#000] transition-all cursor-pointer p-6 text-center group"
          >
            <div className="flex-1 w-full flex flex-col items-center justify-center mb-6">
              <div className="relative w-full h-32 md:h-40 transition-transform group-hover:scale-105">
                <Image 
                  src="/itop-logo.jpg"
                  alt="iTop Telecom Logo"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            <span className="flex items-center justify-center gap-2 bg-[#31ac87] text-white font-bold text-lg h-14 px-6 border-2 border-black shadow-[4px_4px_0_#000] w-full md:w-auto hover:translate-y-1 hover:shadow-[2px_2px_0_#000] transition-all">
              <FaInstagram className="w-5 h-5" /> @itoptelecom
            </span>
          </a>

          <div className="w-full max-w-md bg-white border-4 border-black flex flex-col items-center justify-between shadow-[8px_8px_0_#000] hover:-translate-y-2 hover:shadow-[12px_12px_0_#000] transition-all p-6 text-center">
            <div className="flex-1 w-full flex flex-col items-center justify-center mb-6">
              <h3 className="text-xl md:text-2xl font-black uppercase mb-2">Sorteio de Brindes</h3>
              <p className="font-bold mb-4 text-gray-800">Faça seu cadastro para participar do sorteio exclusivo!</p>
              
              <div className="relative w-40 h-40 md:w-48 md:h-48 mb-2 border-4 border-black p-2 bg-white">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=https://itopcompday-nzd6hcnt.manus.space/"
                  alt="QR Code para Sorteio"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            <a 
              href="https://itopcompday-nzd6hcnt.manus.space/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center bg-[#31ac87] text-white font-bold text-lg h-14 px-6 border-2 border-black shadow-[4px_4px_0_#000] hover:translate-y-1 hover:shadow-[2px_2px_0_#000] transition-all w-full md:w-auto"
            >
              Link de Cadastro
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
