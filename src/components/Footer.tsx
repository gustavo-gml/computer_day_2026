export default function Footer() {
  return (
    <footer id="contato" className="bg-gray-200 pt-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Entre Em Contato</h2>
        
        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto mb-16">
          {/* Contact Form */}
          <div>
            <h3 className="text-lg font-medium text-gray-700 mb-4">Mande-nos um e-mail:</h3>
            <form className="space-y-4">
              <div>
                <label className="block text-sm text-gray-600 mb-1">Nome:</label>
                <input type="text" className="w-full p-2 border border-gray-300 rounded" placeholder="digite seu nome..." />
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-1">Assunto:</label>
                <input type="text" className="w-full p-2 border border-gray-300 rounded" placeholder="digite o assunto..." />
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-1">E-mail:</label>
                <input type="email" className="w-full p-2 border border-gray-300 rounded" placeholder="digite seu email..." />
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-1">Mensagem:</label>
                <textarea rows={4} className="w-full p-2 border border-gray-300 rounded" placeholder="digite sua mensagem..."></textarea>
              </div>
              <div className="flex gap-4">
                <button type="button" className="px-6 py-2 bg-gray-400 text-white rounded hover:bg-gray-500">Limpar</button>
                <button type="submit" className="px-6 py-2 bg-gray-800 text-white rounded hover:bg-gray-900">Enviar</button>
              </div>
            </form>
          </div>

          {/* Map and Social */}
          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-medium text-gray-700 mb-4">Ou entre em contato pelas redes sociais:</h3>
              <div className="flex items-center gap-4">
                {/* Social Placeholder */}
                <div className="w-12 h-12 bg-gray-400 rounded flex items-center justify-center text-white font-bold cursor-pointer hover:bg-gray-500 transition-colors">IG</div>
                <div className="w-12 h-12 bg-gray-400 rounded flex items-center justify-center text-white font-bold cursor-pointer hover:bg-gray-500 transition-colors">FB</div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-medium text-gray-700 mb-4">Localização:</h3>
              {/* Google Maps Placeholder */}
              <div className="w-full h-48 bg-gray-300 flex items-center justify-center border border-gray-400 rounded">
                <span className="text-gray-600 font-medium">[ Google Maps iframe here ]</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Copyright Bar */}
      <div className="bg-gray-800 py-4 text-center text-gray-400 text-sm">
        &copy; {new Date().getFullYear()} Computer Day. Todos os direitos reservados.
      </div>
    </footer>
  );
}
