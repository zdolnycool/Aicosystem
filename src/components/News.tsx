import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { newsData } from '../data/newsData';
import NewsCard from './NewsCard';

type NewsCategory = 'all' | 'ai' | 'technology' | 'business' | 'education';

const categoryLabels: Record<NewsCategory, string> = {
  all: 'Wszystkie',
  ai: 'Sztuczna Inteligencja',
  technology: 'Technologia',
  business: 'Biznes',
  education: 'Edukacja',
};

const News: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<NewsCategory>('all');

  const filteredNews = activeCategory === 'all' 
    ? newsData 
    : newsData.filter(news => news.category === activeCategory);

  return (
    <section id="wiadomości" className="py-16 px-4 bg-white">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-center mb-2 text-gray-800">Najnowsze Wiadomości</h2>
          <p className="text-gray-600 text-center mb-10 max-w-2xl mx-auto">
            Bądź na bieżąco z najnowszymi wydarzeniami i osiągnięciami w świecie sztucznej inteligencji w Polsce i na świecie.
          </p>

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {Object.entries(categoryLabels).map(([category, label]) => (
              <motion.button
                key={category}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === category
                    ? 'bg-indigo-600 text-white shadow-md'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
                onClick={() => setActiveCategory(category as NewsCategory)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {label}
              </motion.button>
            ))}
          </div>

          {/* News Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredNews.map((news) => (
                <NewsCard key={news.id} news={news} />
              ))}
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default News;