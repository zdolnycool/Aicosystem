import { useEffect, useState } from "react";
import NewsCard from "./NewsCard";

interface NewsItem {
  title: string;
  link: string;
  pubDate: string;
  description: string;
  thumbnail?: string;
  category?: string;
}

const News = () => {
  const [articles, setArticles] = useState<NewsItem[]>([]);
  const [activeCategory, setActiveCategory] = useState<string>("Wszystkie");
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const mockArticles: NewsItem[] = [
      {
        title: "AI przyspiesza rozwój leków",
        link: "https://example.com/artykul1",
        pubDate: new Date().toISOString(),
        description: "Nowe technologie oparte na AI pomagają przyspieszyć badania farmaceutyczne.",
        thumbnail: "https://via.placeholder.com/300x180",
        category: "Ogólne AI"
      },
      {
        title: "Uczenie maszynowe w rolnictwie",
        link: "https://example.com/artykul2",
        pubDate: new Date().toISOString(),
        description: "Rolnicy coraz częściej sięgają po inteligentne systemy analizy danych.",
        thumbnail: "",
        category: "Uczenie maszynowe"
      },
      {
        title: "Wizja komputerowa w diagnostyce medycznej",
        link: "https://example.com/artykul3",
        pubDate: new Date().toISOString(),
        description: "Systemy CV wspomagają lekarzy w analizie zdjęć medycznych.",
        thumbnail: "https://via.placeholder.com/300x180",
        category: "Wizja komputerowa"
      },
      {
        title: "Chatboty w bankowości",
        link: "https://example.com/artykul4",
        pubDate: new Date().toISOString(),
        description: "Banki coraz częściej wykorzystują AI do obsługi klienta w czasie rzeczywistym.",
        thumbnail: "https://via.placeholder.com/300x180",
        category: "Przetwarzanie języka"
      },
      {
        title: "Roboty wspomagające logistykę",
        link: "https://example.com/artykul5",
        pubDate: new Date().toISOString(),
        description: "Automatyczne magazyny i roboty AI usprawniają zarządzanie łańcuchem dostaw.",
        thumbnail: "",
        category: "Robotyka"
      }
    ];
    

    setArticles(mockArticles);
    setLoading(false);
  }, []);

  const filteredArticles =
    activeCategory === "Wszystkie"
      ? articles
      : articles.filter((a) => a.category === activeCategory);

  const categories = [
    "Wszystkie",
    "Ogólne AI",
    "Uczenie maszynowe",
    "Wizja komputerowa",
    "Przetwarzanie języka",
    "Robotyka",
  ];

  return (

    // <section className="p-4 bg-gray-900 text-white">
    <section className="p-4 bg-white">
   
      <h2 className="text-3xl font-bold text-center mb-2">Aktualności AI</h2>
      <p className="text-center text-gray-600 mb-6">
        Bądź na bieżąco z najnowszymi wydarzeniami i trendami w świecie sztucznej inteligencji.
      </p>

      {/* Kategorie */}
      <div className="flex justify-center gap-2 mb-8 flex-wrap">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`px-4 py-1.5 rounded-full border text-sm transition ${
              activeCategory === cat
                ? "bg-blue-600 text-white"
                : "bg-white text-blue-600 border-blue-600 hover:bg-blue-50"
            }`}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Treść */}
      {loading ? (
        <p className="text-center text-gray-500">Ładowanie aktualności...</p>
      ) : filteredArticles.length === 0 ? (
        <p className="text-center text-gray-500">Brak aktualności dla wybranej kategorii.</p>
      ) : (
        <div className="flex flex-wrap justify-center gap-6">
          {filteredArticles.map((article, index) => (
            <NewsCard
              key={index}
              title={article.title}
              description={article.description}
              image={article.thumbnail}
              link={article.link}
              category={article.category}
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default News;
