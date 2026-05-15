export default function Hero() {
  return (
    <section id="home" className="pt-24 pb-16 min-h-[80vh] flex flex-col items-center justify-center bg-gray-100">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6 uppercase tracking-wider">
          Computer Day
        </h1>
        
        {/* Logo Placeholder */}
        <div className="w-48 h-48 mx-auto bg-gray-300 flex items-center justify-center rounded-2xl mb-8 shadow-inner">
          <span className="text-gray-500 font-bold text-xl">LOGO</span>
        </div>

        <div className="flex flex-col items-center space-y-4">
          <div className="flex items-center text-gray-600 font-medium">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.243-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
            Local: Campus Principal
          </div>
          <div className="flex items-center text-gray-600 font-medium">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
            dia - mês 2026
          </div>
        </div>

        <div className="mt-10" id="inscreva-se">
          <button className="bg-gray-800 text-white px-8 py-3 font-bold rounded hover:bg-gray-700 transition-colors">
            INSCREVA-SE
          </button>
          <p className="mt-2 text-sm text-gray-500">Inscrições abertas</p>
        </div>
      </div>
    </section>
  );
}
