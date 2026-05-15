export default function Schedule() {
  const dates = ['17/10/2022', '18/10/2022', '19/10/2022', '20/10/2022'];
  
  return (
    <section id="agenda" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">Agenda</h2>
        
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {dates.map((date, index) => (
            <button 
              key={date}
              className={`px-6 py-2 text-sm font-medium transition-colors ${
                index === 0 ? 'bg-gray-800 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {date}
            </button>
          ))}
        </div>

        <div className="max-w-4xl mx-auto bg-white border border-gray-200 p-6 rounded">
          <div className="space-y-4">
            {/* Mock Schedule Items */}
            {[1, 2, 3].map((item) => (
              <div key={item} className="flex flex-col md:flex-row border-b border-gray-100 pb-4 last:border-0 last:pb-0">
                <div className="md:w-32 font-bold text-gray-600 mb-2 md:mb-0">
                  19:00 - 20:30
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-medium text-gray-800">Palestra Magna: O Futuro da Computação {item}</h4>
                  <p className="text-gray-500 text-sm mt-1">Palestrante Convidado - Auditório Principal</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
