import Link from 'next/link';

export default function Navbar() {
  const navLinks = [
    { name: 'HOME', href: '#home' },
    { name: 'SOBRE', href: '#sobre' },
    { name: 'AGENDA', href: '#agenda' },
    { name: 'CONTATO', href: '#contato' },
    { name: 'INSCREVA-SE', href: '#inscreva-se' },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-sm border-b border-gray-200">
      <div className="container mx-auto px-4 h-16 flex items-center justify-center">
        <ul className="flex space-x-8">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link 
                href={link.href}
                className="text-gray-600 hover:text-gray-900 font-medium text-sm transition-colors"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
