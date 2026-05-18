"use client";

import { useEffect, useState } from 'react';

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState({
    dias: '00', horas: '00', minutos: '00', segundos: '00'
  });

  useEffect(() => {
    // Set target date to June 10, 2026
    const targetDate = new Date('2026-06-10T00:00:00');

    const interval = setInterval(() => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference <= 0) {
        clearInterval(interval);
        return;
      }

      const d = Math.floor(difference / (1000 * 60 * 60 * 24));
      const h = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const s = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({
        dias: d.toString().padStart(2, '0'),
        horas: h.toString().padStart(2, '0'),
        minutos: m.toString().padStart(2, '0'),
        segundos: s.toString().padStart(2, '0')
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-black py-20 border-y-4 border-primary-bright relative">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00ff9722_1px,transparent_1px),linear-gradient(to_bottom,#00ff9722_1px,transparent_1px)] bg-[size:32px_32px]"></div>
      <div className="container mx-auto px-4 text-center relative z-10">
        <h2 className="text-3xl md:text-5xl font-black text-white mb-12 uppercase tracking-widest drop-shadow-[4px_4px_0_#31ac87]">Estamos Quase Lá...</h2>
        
        <div className="flex flex-wrap justify-center gap-4 md:gap-8 max-w-4xl mx-auto">
          {Object.entries(timeLeft).map(([unit, value]) => (
            <div key={unit} className="flex-1 min-w-[120px] border-4 border-primary-bright p-4 md:p-8 bg-dark shadow-[6px_6px_0_#00ff97] mr-[6px] mb-[6px]">
              <div className="text-5xl md:text-7xl font-black text-primary-bright mb-2 drop-shadow-[2px_2px_0_#fff]">{value}</div>
              <div className="text-white font-bold text-sm md:text-lg uppercase tracking-widest">{unit}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
