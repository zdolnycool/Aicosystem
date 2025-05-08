import React from 'react';
import { motion } from 'framer-motion';
import { NewsItem } from '../utils/types';
import { Calendar } from 'lucide-react';

interface NewsCardProps {
  news: NewsItem;
}

const NewsCard: React.FC<NewsCardProps> = ({ news }) => {
  return (
    <motion.article
      className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 flex flex-col h-full"
      whileHover={{ y: -5 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative h-48 overflow-hidden">
        <img 
          src={news.image} 
          alt={news.title} 
          className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
        />
        <span className="absolute top-4 right-4 bg-indigo-600 text-white text-xs font-semibold py-1 px-3 rounded-full">
          {news.category === 'ai' && 'Sztuczna Inteligencja'}
          {news.category === 'technology' && 'Technologia'}
          {news.category === 'business' && 'Biznes'}
          {news.category === 'education' && 'Edukacja'}
        </span>
      </div>
      <div className="p-5 flex-grow flex flex-col">
        <div className="flex items-center text-gray-500 text-sm mb-3">
          <Calendar className="mr-1 h-4 w-4" />
          <time>{news.date}</time>
        </div>
        <h3 className="font-bold text-lg mb-3 text-gray-800 leading-snug">
          {news.title}
        </h3>
        <p className="text-gray-600 mb-4 flex-grow">
          {news.description}
        </p>
        <a 
          href="#" 
          className="text-indigo-600 font-medium inline-flex items-center mt-auto hover:text-indigo-800 transition-colors"
        >
          Czytaj więcej
          <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </a>
      </div>
    </motion.article>
  );
};

export default NewsCard;