import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { toolsData } from '../data/toolsData';
import { AITool } from '../utils/types';
import { Filter, Search, Check } from 'lucide-react';

type Category = 'all' | 'text' | 'audio' | 'analytics' | 'graphics' | 'development' | 'productivity';
type PriceFilter = 'all' | 'free' | 'freemium' | 'paid';
type SortOption = 'popularity' | 'alphabetical';

const Tools: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<Category>('all');
  const [priceFilter, setPriceFilter] = useState<PriceFilter>('all');
  const [polishSupport, setPolishSupport] = useState<'all' | 'yes' | 'no'>('all');
  const [sortBy, setSortBy] = useState<SortOption>('popularity');
  const [showFilterMenu, setShowFilterMenu] = useState(false);

  const filterTools = () => {
    let filtered = [...toolsData];

    // Search filter
    if (searchQuery) {
      filtered = filtered.filter(tool => 
        tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        tool.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Category filter
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(tool => tool.category.toLowerCase() === selectedCategory);
    }

    // Price filter
    if (priceFilter !== 'all') {
      filtered = filtered.filter(tool => tool.priceType === priceFilter);
    }

    // Polish language support filter
    if (polishSupport !== 'all') {
      filtered = filtered.filter(tool => 
        polishSupport === 'yes' ? tool.supportsPolish : !tool.supportsPolish
      );
    }

    // Sorting
    filtered.sort((a, b) => {
      if (sortBy === 'alphabetical') {
        return a.name.localeCompare(b.name);
      }
      return b.rating - a.rating; // Default popularity sort
    });

    return filtered;
  };

  return (
    <section id="narzędzia-ai" className="py-16 px-4 bg-white">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-2 text-gray-800">Katalog Narzędzi AI</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Odkryj najlepsze narzędzia AI, które pomogą Ci zwiększyć produktywność i innowacyjność.
          </p>
        </motion.div>

        {/* Search and Filters */}
        <div className="mb-8 space-y-6">
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Szukaj narzędzi..."
                className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-colors"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          {/* Filter Categories */}
          <div className="flex flex-wrap justify-center gap-3">
            {['Wszystkie', 'Tekst', 'Audio', 'Analityka', 'Grafika', 'Programowanie', 'Produktywność'].map((category, index) => (
              <motion.button
                key={index}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedCategory === category.toLowerCase() || (category === 'Wszystkie' && selectedCategory === 'all')
                    ? 'bg-indigo-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
                onClick={() => setSelectedCategory(category.toLowerCase() as Category)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
              </motion.button>
            ))}
          </div>

          {/* Additional Filters */}
          <div className="flex flex-wrap justify-center gap-6">
            {/* Price Filter */}
            <div className="flex gap-2">
              {['wszystkie', 'Darmowe', 'Freemium', 'Płatne'].map((price, index) => (
                <button
                  key={index}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    priceFilter === price.toLowerCase() || (price === 'wszystkie' && priceFilter === 'all')
                      ? 'bg-indigo-100 text-indigo-700'
                      : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
                  }`}
                  onClick={() => setPriceFilter(price.toLowerCase() as PriceFilter)}
                >
                  {price}
                </button>
              ))}
            </div>

            {/* Polish Support Filter */}
            <div className="flex gap-2">
              <button
                className={`px-4 py-2 rounded-lg text-sm font-medium ${
                  polishSupport === 'yes' ? 'bg-indigo-100 text-indigo-700' : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
                }`}
                onClick={() => setPolishSupport(polishSupport === 'yes' ? 'all' : 'yes')}
              >
                Wsparcie języka polskiego
              </button>
            </div>

            {/* Sort Options */}
            <div className="flex gap-2">
              <button
                className={`px-4 py-2 rounded-lg text-sm font-medium ${
                  sortBy === 'popularity' ? 'bg-indigo-100 text-indigo-700' : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
                }`}
                onClick={() => setSortBy('popularity')}
              >
                Popularność
              </button>
              <button
                className={`px-4 py-2 rounded-lg text-sm font-medium ${
                  sortBy === 'alphabetical' ? 'bg-indigo-100 text-indigo-700' : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
                }`}
                onClick={() => setSortBy('alphabetical')}
              >
                Alfabetycznie
              </button>
            </div>
          </div>
        </div>

        {/* Tools Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`${selectedCategory}-${priceFilter}-${polishSupport}-${sortBy}-${searchQuery}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filterTools().map((tool, index) => (
              <motion.div
                key={tool.id}
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="h-40 overflow-hidden">
                  <img 
                    src={tool.image} 
                    alt={tool.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-5">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="font-bold text-lg text-gray-800">{tool.name}</h3>
                    <span className="bg-indigo-100 text-indigo-800 text-xs font-semibold px-2.5 py-1 rounded-full">
                      {tool.rating.toFixed(1)}★
                    </span>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="bg-gray-100 text-gray-700 text-xs px-2.5 py-1 rounded-full">
                      {tool.category}
                    </span>
                    {tool.supportsPolish && (
                      <span className="bg-green-100 text-green-800 text-xs px-2.5 py-1 rounded-full">
                        Wspiera język polski
                      </span>
                    )}
                    <span className={`text-xs px-2.5 py-1 rounded-full ${
                      tool.priceType === 'free' ? 'bg-green-100 text-green-800' :
                      tool.priceType === 'freemium' ? 'bg-blue-100 text-blue-800' :
                      'bg-purple-100 text-purple-800'
                    }`}>
                      {tool.priceType === 'free' ? 'Darmowe' :
                       tool.priceType === 'freemium' ? 'Freemium' : 'Płatne'}
                    </span>
                  </div>
                  
                  <p className="text-gray-600 mb-4">
                    {tool.description}
                  </p>
                  
                  <a 
                    href={tool.link} 
                    className="text-white bg-indigo-600 hover:bg-indigo-700 px-4 py-2 rounded-lg inline-block transition-colors font-medium"
                  >
                    Wypróbuj narzędzie
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Tools;