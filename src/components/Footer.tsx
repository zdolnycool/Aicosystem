import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Facebook, Twitter, Linkedin, Instagram, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* About Column */}
          <div>
            <div className="flex items-center mb-4">
              <Brain className="text-indigo-400 h-6 w-6 mr-2" />
              <h3 className="font-bold text-xl text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
                AI Polska
              </h3>
            </div>
            <p className="text-gray-400 mb-6">
              Łączymy innowatorów, ekspertów i entuzjastów AI w Polsce, 
              tworząc społeczność budującą inteligentną przyszłość.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>
          
          {/* Links Column */}
          <div>
            <h4 className="font-bold text-lg mb-4">Szybkie Linki</h4>
            <ul className="space-y-2">
              {['O nas', 'Wiadomości', 'Edukacja', 'Narzędzia AI', 'Historie Sukcesu', 'Kontakt'].map((item, index) => (
                <li key={index}>
                  <a 
                    href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Resources Column */}
          <div>
            <h4 className="font-bold text-lg mb-4">Zasoby</h4>
            <ul className="space-y-2">
              {['Dokumentacja', 'Tutoriale', 'Webinary', 'Konferencje', 'Blog', 'FAQ'].map((item, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Newsletter Column */}
          <div>
            <h4 className="font-bold text-lg mb-4">Newsletter</h4>
            <p className="text-gray-400 mb-4">
              Zapisz się, aby otrzymywać najnowsze informacje ze świata AI.
            </p>
            <form className="mb-4">
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Twój adres email" 
                  className="bg-gray-800 rounded-l-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-indigo-500 text-gray-200"
                />
                <button 
                  type="submit" 
                  className="bg-indigo-600 hover:bg-indigo-700 rounded-r-lg px-4 py-2 text-white transition-colors"
                >
                  <Mail size={20} />
                </button>
              </div>
            </form>
            <p className="text-gray-500 text-xs">
              Zapisując się, akceptujesz naszą politykę prywatności. Możesz zrezygnować w dowolnym momencie.
            </p>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} AI Polska. Wszelkie prawa zastrzeżone.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-gray-300 text-sm transition-colors">
                Polityka Prywatności
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-300 text-sm transition-colors">
                Warunki Korzystania
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-300 text-sm transition-colors">
                Mapa Strony
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;