"use client";

import { useEffect, useState } from 'react';

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState({
    dias: '00', horas: '00', minutos: '00', segundos: '00'
  });

  useEffect(() => {
    // Set target date to 10 days from now for demo purposes
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 15);

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
    <section className="bg-gray-900 py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">Estamos Quase Lá...</h2>
        
        <div className="flex justify-center gap-2 md:gap-4 max-w-3xl mx-auto">
          {Object.entries(timeLeft).map(([unit, value]) => (
            <div key={unit} className="flex-1 border border-gray-600 p-4 md:p-8 bg-gray-800">
              <div className="text-4xl md:text-6xl font-light text-white mb-2">{value}</div>
              <div className="text-gray-400 text-sm md:text-base capitalize">{unit}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
