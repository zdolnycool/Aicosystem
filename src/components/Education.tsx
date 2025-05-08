import React from 'react';
import { motion } from 'framer-motion';
import { educationData, getIconComponent } from '../data/educationData';

const Education: React.FC = () => {
  return (
    <section id="edukacja" className="py-16 px-4 bg-gradient-to-br from-gray-50 to-indigo-50">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-2 text-gray-800">Edukacja AI</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Zdobądź wiedzę i umiejętności z zakresu sztucznej inteligencji dzięki naszym materiałom edukacyjnym.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {educationData.slice(0, 6).map((item, index) => {
            const IconComponent = getIconComponent(item.icon);
            
            return (
              <motion.div
                key={item.id}
                className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="rounded-full bg-indigo-100 p-3 w-12 h-12 flex items-center justify-center mb-4">
                  <IconComponent className="text-indigo-600 h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">{item.title}</h3>
                <p className="text-gray-600 mb-6">{item.description}</p>
                <a
                  href={item.link}
                  className="text-indigo-600 font-medium inline-flex items-center hover:text-indigo-800 transition-colors"
                >
                  Rozpocznij naukę
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </motion.div>
            );
          })}
        </div>

        {/* Call to Action Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 md:p-12 text-center text-white"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Gotowy do rozpoczęcia nauki?
          </h3>
          <p className="text-lg md:text-xl mb-8 opacity-90">
            Zapisz się do naszego programu edukacyjnego i uzyskaj dostęp do wszystkich kursów, materiałów i społeczności ekspertów.
          </p>
          <motion.button
            className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-medium hover:bg-opacity-90 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Przeglądaj kursy AI
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;