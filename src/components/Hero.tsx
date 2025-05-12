import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

const Hero: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <section className="pt-28 pb-20 px-4 relative overflow-hidden">
      {/* Video jako tło */}
      <video
        ref={videoRef}
        src="/header.mp4"
        autoPlay
        muted
        playsInline
        loop={false}
        onEnded={() => videoRef.current?.pause()}
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* delikatny overlay, żeby tekst był czytelny */}
      <div className="absolute inset-0 bg-gray-900/60 z-0"></div>

      {/* Neural Network Background (opcjonalnie możesz to usunąć jeśli video wystarczy) */}
      <div className="absolute inset-0 z-0">
        {Array.from({ length: 10 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-indigo-500/10"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 100 + 50}px`,
              height: `${Math.random() * 100 + 50}px`,
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.5, 0.7, 0.5],
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="container mx-auto relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Stań się częścią{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
              rewolucji AI
            </span>{' '}
            w Polsce
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-gray-200 mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Odkryj najnowsze trendy, narzędzia i zastosowania sztucznej inteligencji. 
            Dołącz do społeczności budującej inteligentną przyszłość Polski.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <a 
              href="#narzedzia-ai" 
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-6 rounded-lg transition-all shadow-lg hover:shadow-indigo-100/50 flex items-center justify-center"
            >
              Odkryj narzędzia AI
              <ChevronRight className="ml-2 h-5 w-5" />
            </a>
            <a 
              href="#edukacja" 
              className="bg-white hover:bg-gray-50 text-indigo-600 font-medium py-3 px-6 rounded-lg border border-indigo-200 transition-all shadow-lg hover:shadow-indigo-100/50"
            >
              Zacznij naukę
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
