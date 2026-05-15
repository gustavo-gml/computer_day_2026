export default function Sponsors() {
  const sponsors = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-12 text-primary">Nossos Patrocinadores</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 items-center justify-center">
          {sponsors.map((id) => (
            <div 
              key={id} 
              className="h-24 bg-accent/50 rounded-lg flex items-center justify-center border border-secondary transition-transform hover:scale-105"
            >
              <span className="text-primary font-medium">Logo {id}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
