import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { storiesData } from '../data/storiesData';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const SuccessStories: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [width, setWidth] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (carouselRef.current) {
      setWidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth);
    }
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === storiesData.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? storiesData.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <section id="historie-sukcesu" className="py-16 px-4 bg-gradient-to-br from-indigo-50 to-purple-50">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-2 text-gray-800">Historie Sukcesu</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Poznaj polskie firmy, które z sukcesem zaimplementowały rozwiązania AI w swoich operacjach.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <motion.div 
            ref={carouselRef}
            className="overflow-hidden"
          >
            <motion.div
              className="flex"
              animate={{ x: -currentIndex * 100 + '%' }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {storiesData.map((story, index) => (
                <motion.div
                  key={story.id}
                  className="min-w-full"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ 
                    opacity: currentIndex === index ? 1 : 0.5,
                    scale: currentIndex === index ? 1 : 0.9
                  }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="bg-white p-8 rounded-xl shadow-md flex flex-col md:flex-row items-center gap-8">
                    <div className="w-full md:w-1/3 flex justify-center">
                      <img 
                        src={story.logo}
                        alt={story.company}
                        className="w-32 h-32 object-cover rounded-full border-4 border-indigo-100"
                      />
                    </div>
                    <div className="w-full md:w-2/3">
                      <div className="flex items-center mb-3">
                        <h3 className="text-xl font-bold text-gray-800">{story.company}</h3>
                        <span className="ml-3 px-3 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-full">
                          {story.industry}
                        </span>
                      </div>
                      <p className="text-gray-600">{story.description}</p>
                      <a 
                        href="#" 
                        className="mt-4 inline-flex items-center text-indigo-600 font-medium hover:text-indigo-800 transition-colors"
                      >
                        Pełna historia
                        <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Navigation Buttons */}
          <button
            className="absolute left-0 top-1/2 -translate-y-1/2 -ml-4 md:-ml-6 bg-white h-10 w-10 rounded-full shadow-md flex items-center justify-center text-indigo-600 hover:text-indigo-800 transition-colors z-10"
            onClick={prevSlide}
          >
            <ChevronLeft size={20} />
          </button>
          <button
            className="absolute right-0 top-1/2 -translate-y-1/2 -mr-4 md:-mr-6 bg-white h-10 w-10 rounded-full shadow-md flex items-center justify-center text-indigo-600 hover:text-indigo-800 transition-colors z-10"
            onClick={nextSlide}
          >
            <ChevronRight size={20} />
          </button>
          
          {/* Indicators */}
          <div className="flex justify-center mt-6 space-x-2">
            {storiesData.map((_, index) => (
              <button
                key={index}
                className={`h-2 rounded-full transition-all ${
                  currentIndex === index 
                    ? 'w-8 bg-indigo-600' 
                    : 'w-2 bg-indigo-200'
                }`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;