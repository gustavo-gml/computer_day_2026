export default function Footer() {
  return (
    <footer id="contato" className="bg-dark pt-16 border-t-4 border-primary-bright text-white relative">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00ff9711_1px,transparent_1px),linear-gradient(to_bottom,#00ff9711_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-3xl md:text-5xl font-black text-center text-primary-bright mb-12 uppercase tracking-widest drop-shadow-[2px_2px_0_#31ac87]">Entre Em Contato</h2>
        
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto mb-16">
          {/* Contact Form */}
          <div className="bg-primary p-6 md:p-8 border-4 border-black shadow-[8px_8px_0_#00ff97]">
            <h3 className="text-2xl font-black text-black mb-6 uppercase">Mande-nos um e-mail:</h3>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-bold text-black mb-1 uppercase">Nome:</label>
                <input type="text" className="w-full p-3 border-4 border-black bg-white text-black focus:outline-none focus:ring-4 focus:ring-primary-bright transition-all" placeholder="DIGITE SEU NOME..." />
              </div>
              <div>
                <label className="block text-sm font-bold text-black mb-1 uppercase">Assunto:</label>
                <input type="text" className="w-full p-3 border-4 border-black bg-white text-black focus:outline-none focus:ring-4 focus:ring-primary-bright transition-all" placeholder="DIGITE O ASSUNTO..." />
              </div>
              <div>
                <label className="block text-sm font-bold text-black mb-1 uppercase">E-mail:</label>
                <input type="email" className="w-full p-3 border-4 border-black bg-white text-black focus:outline-none focus:ring-4 focus:ring-primary-bright transition-all" placeholder="DIGITE SEU EMAIL..." />
              </div>
              <div>
                <label className="block text-sm font-bold text-black mb-1 uppercase">Mensagem:</label>
                <textarea rows={4} className="w-full p-3 border-4 border-black bg-white text-black focus:outline-none focus:ring-4 focus:ring-primary-bright transition-all resize-none" placeholder="DIGITE SUA MENSAGEM..."></textarea>
              </div>
              <div className="flex gap-4 pt-4">
                <button type="button" className="px-6 py-3 bg-white text-black border-4 border-black font-black uppercase tracking-wider hover:bg-gray-200 shadow-[4px_4px_0_#000] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0_#000] transition-all">Limpar</button>
                <button type="submit" className="flex-1 px-6 py-3 bg-primary-bright text-black border-4 border-black font-black uppercase tracking-wider hover:bg-white shadow-[4px_4px_0_#000] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0_#000] transition-all">Enviar</button>
              </div>
            </form>
          </div>

          {/* Map and Social */}
          <div className="space-y-8 flex flex-col justify-between">
            <div className="bg-secondary p-6 md:p-8 border-4 border-black shadow-[8px_8px_0_#fff]">
              <h3 className="text-2xl font-black text-black mb-6 uppercase">Redes Sociais:</h3>
              <div className="flex items-center gap-4 md:gap-6 flex-wrap">
                <a href="https://www.instagram.com/ifsuldeminasmachado/" target="_blank" rel="noopener noreferrer" className="w-14 h-14 md:w-16 md:h-16 bg-primary-bright border-4 border-black flex items-center justify-center text-black font-black text-xl md:text-2xl hover:bg-white shadow-[4px_4px_0_#000] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0_#000] transition-all">IG</a>
                <a href="https://www.facebook.com/ifsuldeminasmachado/?locale=pt_BR" target="_blank" rel="noopener noreferrer" className="w-14 h-14 md:w-16 md:h-16 bg-primary-bright border-4 border-black flex items-center justify-center text-black font-black text-xl md:text-2xl hover:bg-white shadow-[4px_4px_0_#000] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0_#000] transition-all">FB</a>
                <a href="https://portal.mch.ifsuldeminas.edu.br/" target="_blank" rel="noopener noreferrer" className="w-14 h-14 md:w-16 md:h-16 bg-primary-bright border-4 border-black flex items-center justify-center text-black font-black text-sm md:text-base hover:bg-white shadow-[4px_4px_0_#000] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0_#000] transition-all">SITE</a>
              </div>
            </div>

            <div className="bg-white p-6 md:p-8 border-4 border-black shadow-[8px_8px_0_#31ac87] flex-1 flex flex-col">
              <h3 className="text-2xl font-black text-black mb-2 uppercase">Localização:</h3>
              <p className="text-black font-bold text-sm mb-4 leading-tight uppercase">
                IFSULDEMINAS - Campus Machado<br/>
                Rodovia Machado - Paraguaçu, km 03<br/>
                Bairro Santo Antônio<br/>
                CEP 37.750-000 - Machado - MG
              </p>
              {/* Google Maps */}
              <div className="w-full flex-1 min-h-[200px] bg-gray-200 flex items-center justify-center border-4 border-black relative overflow-hidden">
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
      </div>
      
      {/* Copyright Bar */}
      <div className="bg-primary-bright border-t-4 border-black py-4 text-center text-black font-bold uppercase tracking-widest relative z-10 text-sm">
        &copy; {new Date().getFullYear()} Computer Day. Todos os direitos reservados.
      </div>
    </footer>
  );
}
