"use client";

interface RegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function RegistrationModal({ isOpen, onClose }: RegistrationModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm cursor-pointer"
        onClick={onClose}
      ></div>
      
      {/* Modal Content - Brutalist Style */}
      <div className="relative z-10 bg-white border-4 border-black p-8 md:p-12 shadow-[12px_12px_0_#00ff97] max-w-md w-full mx-4 transform rotate-1">
        <button 
          onClick={onClose}
          className="absolute -top-4 -right-4 w-12 h-12 bg-black text-primary-bright border-4 border-black font-black text-xl flex items-center justify-center shadow-[4px_4px_0_#00ff97] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0_#00ff97] transition-all z-20"
        >
          X
        </button>

        <h3 className="text-3xl font-black uppercase text-black mb-2 tracking-widest">Inscrições</h3>
        <p className="text-black font-bold mb-8 uppercase tracking-wide">Escolha qual modalidade você deseja participar:</p>

        <div className="flex flex-col gap-4">
          <a href="#" className="bg-[#f9a826] text-black border-4 border-black py-4 px-6 text-center font-black text-xl uppercase tracking-wider shadow-[4px_4px_0_#000] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0_#000] transition-all">
            Palestras
          </a>
          <a href="#" className="bg-primary text-black border-4 border-black py-4 px-6 text-center font-black text-xl uppercase tracking-wider shadow-[4px_4px_0_#000] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0_#000] transition-all">
            Minicursos
          </a>
        </div>
      </div>
    </div>
  );
}
