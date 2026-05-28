export default function Schedule() {
  type ScheduleItem = {
    time: string;
    title: string;
    speaker?: string;
    type?: string;
    location?: string;
    description?: string;
  };

  const scheduleItems: ScheduleItem[] = [
    {
      time: "09:15 - 09:30",
      title: "Abertura e Apresentação de Projetos",
      speaker: "",
      type: "Exposição",
      location: "Presencial - Auditório"
    },
    {
      time: "09:30 - 10:20",
      title: "start_Engenharia: Ciência, Tecnologia e Carreiras",
      speaker: "Marcelo Henrique (Inatel)",
      type: "Palestra",
      location: "Presencial - Auditório"
    },
    {
      time: "13:00 - 16:30",
      title: "Robótica Móvel com Lego NXT",
      speaker: "",
      type: "Minicurso",
      location: "Presencial",
      description: "Introdução à robótica através da montagem e programação com blocos Lego."
    },
    {
      time: "13:00 - 16:30",
      title: "Programação com Arduino",
      speaker: "",
      type: "Minicurso",
      location: "Presencial",
      description: "Introdução aos conceitos básicos de programação e montagem de circuitos interativos para iniciantes."
    },
    {
      time: "13:00 - 16:30",
      title: "Modelagem e Impressão 3D",
      speaker: "",
      type: "Minicurso",
      location: "Presencial",
      description: "Técnicas de criação de modelos 3D e preparação para impressão física."
    },
    {
      time: "13:00 - 16:30",
      title: "Visão Computacional",
      speaker: "",
      type: "Minicurso",
      location: "Presencial",
      description: "Fundamentos de como fazer sistemas computacionais enxergarem o mundo real."
    },
    {
      time: "13:00 - 16:30",
      title: "Introdução ao Desenvolvimento PHP + Laravel",
      speaker: "",
      type: "Minicurso",
      location: "Presencial",
      description: "Aprenda a criar aplicações web modernas e robustas do zero utilizando PHP e o framework Laravel. (Limite: 20 vagas)"
    },
    {
      time: "13:00 - 16:30",
      title: "OBI - Olimpíada Brasileira de Informática",
      speaker: "",
      type: "Minicurso",
      location: "Presencial",
      description: "Apenas para alunos do Ensino Técnico e 1º período de Sistemas de Informação."
    },
    {
      time: "19:15 - 19:45",
      title: "Intercâmbio Acadêmico e Novas Tecnologias",
      speaker: "Pedro Franco (IP Bragança / IFSULDEMINAS)",
      type: "Palestra",
      location: "Remoto",
    },
    {
      time: "20:00",
      title: "Tecnologia, Inclusão e Autonomia",
      speaker: "Laissa Soares (Colibri Interfaces e Tecnologias)",
      type: "Palestra",
      location: "Remoto"
    }
  ];

  return (
    <section id="agenda" className="py-20 bg-dark border-b-4 border-primary-bright relative">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#31ac8722_1px,transparent_1px),linear-gradient(to_bottom,#31ac8722_1px,transparent_1px)] bg-[size:32px_32px]"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="inline-flex bg-primary-bright text-black px-6 md:px-8 py-3 md:py-4 border-4 border-black shadow-[6px_6px_0_#31ac87] mb-12 mx-auto max-w-[90vw] text-center transform rotate-1">
          <h2 className="text-2xl md:text-5xl font-black uppercase tracking-widest">Agenda</h2>
        </div>

        <div className="max-w-[calc(100%-8px)] md:max-w-4xl mx-auto bg-primary border-4 border-black p-6 md:p-8 rounded-none shadow-[8px_8px_0_#00ff97] mr-[8px] mb-[8px] md:mr-auto">
          <div className="space-y-8">
            {scheduleItems.map((item, index) => (
              <div key={index} className="flex flex-col md:flex-row border-b-4 border-black pb-8 last:border-0 last:pb-0 items-start">
                <div className="md:w-56 font-black text-black bg-white border-4 border-black px-4 py-2 shadow-[4px_4px_0_#000] mb-4 md:mb-0 text-center text-lg md:text-xl whitespace-nowrap transform -rotate-1 hover:rotate-0 transition-transform cursor-default">
                  {item.time}
                </div>
                <div className="flex-1 md:pl-8">
                  <div className="flex flex-wrap gap-2 mb-2">
                    {item.type && (
                      <span className="text-black font-black text-xs md:text-sm uppercase tracking-wider bg-[#00ff97] px-2 py-1 border-2 border-black shadow-[2px_2px_0_#000]">
                        {item.type}
                      </span>
                    )}
                    {item.location && (
                      <span className="text-black font-black text-xs md:text-sm uppercase tracking-wider bg-[#ff90e8] px-2 py-1 border-2 border-black shadow-[2px_2px_0_#000]">
                        📍 {item.location}
                      </span>
                    )}
                  </div>
                  <h4 className="text-xl md:text-2xl font-black text-white uppercase drop-shadow-[2px_2px_0_#000] mb-2 leading-tight">
                    {item.title}
                  </h4>
                  {item.description && (
                    <p className="text-white text-sm md:text-base mb-3 font-medium max-w-2xl drop-shadow-[1px_1px_0_#000]">
                      {item.description}
                    </p>
                  )}
                  {item.speaker && (
                    <p className="text-black font-black text-sm md:text-base uppercase tracking-wider mb-3 bg-[#f9a826] inline-block px-3 py-1 border-2 border-black shadow-[2px_2px_0_#000]">
                      🎤 {item.speaker}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
