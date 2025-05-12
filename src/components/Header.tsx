import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Brain, Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(o => !o);

  // wspólna klasa gradientu dla tekstu
  const gradientText = 'text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600';

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* logo i tytuł */}
          <div className="flex items-center">
            <Brain className="text-gray-900 h-8 w-8 mr-2" />
            <motion.h1
              className={`font-bold ${gradientText} ${isScrolled ? 'text-xl' : 'text-2xl'}`}
              animate={{ scale: isScrolled ? 0.95 : 1 }}
              transition={{ duration: 0.3 }}
            >
              AI Polska
            </motion.h1>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center space-x-8">
            {['Wiadomości', 'Edukacja', 'Narzędzia AI', 'Historie Sukcesu'].map((item, idx) => (
              <motion.a
                key={idx}
                href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                className={`font-medium ${gradientText} transition-colors`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item}
              </motion.a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700 focus:outline-none"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="md:hidden bg-white shadow-lg absolute left-0 right-0 top-full"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="container mx-auto px-4 py-4">
                <nav className="flex flex-col space-y-4">
                  {['Wiadomości', 'Edukacja', 'Narzędzia AI', 'Historie Sukcesu'].map((item, idx) => (
                    <a
                      key={idx}
                      href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                      className={`font-medium ${gradientText} transition-colors py-2`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item}
                    </a>
                  ))}
                </nav>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Header;
