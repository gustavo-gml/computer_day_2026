export default function About() {
  const pillars = [
    {
      title: 'O Evento',
      icon: '📚',
      description: 'O Computer Day é um evento anual voltado para a área de Tecnologia, organizado pelo Departamento de Computação do IFSULDEMINAS - Campus Machado.'
    },
    {
      title: 'Conteúdo',
      icon: '✏️',
      description: 'A programação une teoria e prática através de palestras, minicursos, rodas de conversa e exposição de projetos.'
    },
    {
      title: 'Objetivo',
      icon: '✔️',
      description: 'O principal objetivo é complementar a formação dos participantes, possibilitando a aquisição de novos conhecimentos nas áreas da computação e mercado de trabalho.'
    }
  ];

  return (
    <section id="sobre" className="py-20 bg-primary border-b-4 border-primary-bright relative">
      <div className="container mx-auto px-4 relative z-10">
        <div className="inline-flex bg-black text-primary-bright px-6 md:px-8 py-3 md:py-4 border-4 border-black shadow-[6px_6px_0_rgba(0,0,0,1)] mb-16 mx-auto max-w-[90vw] text-center transform -rotate-2">
          <h2 className="text-2xl md:text-5xl font-black uppercase tracking-widest drop-shadow-[2px_2px_0_#fff]">Sobre o Computer Day</h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pillars.map((pillar, index) => (
            <div key={index} className="border-4 border-black p-8 text-center relative mt-6 bg-secondary shadow-[8px_8px_0_rgba(0,0,0,1)] hover:-translate-y-2 hover:shadow-[12px_12px_0_rgba(0,0,0,1)] transition-all mr-[8px] mb-[8px]">
              <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-16 h-16 bg-primary-bright border-4 border-black flex items-center justify-center text-3xl shadow-[4px_4px_0_rgba(0,0,0,1)] z-10">
                {pillar.icon}
              </div>
              <h3 className="text-2xl font-black text-black mt-6 mb-4 uppercase tracking-wider">{pillar.title}</h3>
              <p className="text-black font-medium text-base leading-relaxed text-justify">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
