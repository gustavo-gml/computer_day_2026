export default function Sponsors() {
  const sponsors = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <section className="py-20 bg-secondary border-b-4 border-black relative">
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="inline-block bg-black text-white px-8 py-4 border-4 border-black shadow-[6px_6px_0_#fff] mb-12 mx-auto flex w-max">
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-widest drop-shadow-[2px_2px_0_#31ac87]">Nossos Patrocinadores</h2>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 items-center justify-center max-w-6xl mx-auto">
          {sponsors.map((id) => (
            <div 
              key={id} 
              className="h-32 bg-white border-4 border-black flex items-center justify-center shadow-[6px_6px_0_#000] hover:-translate-y-2 hover:shadow-[10px_10px_0_#000] transition-all cursor-pointer"
            >
              <span className="text-black font-black text-xl uppercase">Logo {id}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
