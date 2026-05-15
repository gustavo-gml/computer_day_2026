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
      description: 'A programação une teoria e prática através de palestras sobre temas como Inteligência Artificial e cibersegurança, além de minicursos de programação e gestão ágil. O encontro também conta com painéis focados em empreendedorismo e exposições de projetos tecnológicos criados pelos próprios alunos.'
    },
    {
      title: 'Objetivo',
      icon: '✔️',
      description: 'O principal objetivo é complementar a formação dos participantes, possibilitando a aquisição de novos conhecimentos nas áreas da computação e mercado de trabalho.'
    }
  ];

  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-16">Sobre A Jornada</h2>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {pillars.map((pillar, index) => (
            <div key={index} className="border border-gray-200 p-8 text-center relative mt-6 bg-gray-50">
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-gray-700 flex items-center justify-center text-white text-xl">
                {pillar.icon}
              </div>
              <h3 className="text-xl font-medium text-gray-700 mt-4 mb-4">{pillar.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
