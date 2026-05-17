export default function Schedule() {
  return (
    <section id="agenda" className="py-20 bg-dark border-b-4 border-primary-bright relative">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#31ac8722_1px,transparent_1px),linear-gradient(to_bottom,#31ac8722_1px,transparent_1px)] bg-[size:32px_32px]"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="inline-block bg-primary-bright text-black px-8 py-4 border-4 border-black shadow-[6px_6px_0_#31ac87] mb-12 mx-auto flex w-max transform rotate-1">
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-widest">Agenda</h2>
        </div>

        <div className="max-w-4xl mx-auto bg-primary border-4 border-black p-6 md:p-8 rounded-none shadow-[8px_8px_0_#00ff97]">
          <div className="space-y-6">
            {/* Mock Schedule Items */}
            {[1, 2, 3].map((item) => (
              <div key={item} className="flex flex-col md:flex-row border-b-4 border-black pb-6 last:border-0 last:pb-0 items-start md:items-center">
                <div className="md:w-48 font-black text-black bg-white border-2 border-black px-3 py-1 shadow-[2px_2px_0_#000] mb-4 md:mb-0 text-center text-lg">
                  19:00 - 20:30
                </div>
                <div className="flex-1 md:pl-8">
                  <h4 className="text-xl md:text-2xl font-black text-white uppercase drop-shadow-[2px_2px_0_#000]">Palestra Magna: O Futuro da Computação {item}</h4>
                  <p className="text-black font-bold mt-2 text-lg uppercase tracking-wide">Palestrante Convidado - Auditório Principal</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
