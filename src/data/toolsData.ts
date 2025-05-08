import { AITool } from '../utils/types';

export const toolsData: AITool[] = [
  {
    id: 1,
    name: 'AI Translator Pro',
    description: 'Zaawansowane narzędzie do tłumaczenia tekstów z pełnym wsparciem dla języka polskiego i specjalistycznej terminologii.',
    category: 'text',
    rating: 4.8,
    supportsPolish: true,
    image: 'https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    link: '/tools/ai-translator',
    priceType: 'freemium'
  },
  {
    id: 2,
    name: 'DataViz AI',
    description: 'Narzędzie do automatycznej wizualizacji danych z wykorzystaniem sztucznej inteligencji.',
    category: 'analytics',
    rating: 4.5,
    supportsPolish: true,
    image: 'https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    link: '/tools/dataviz',
    priceType: 'paid'
  },
  {
    id: 3,
    name: 'MediScan',
    description: 'System wspomagania diagnostyki medycznej oparty na analizie obrazów z wykorzystaniem głębokich sieci neuronowych.',
    category: 'analytics',
    rating: 4.9,
    supportsPolish: true,
    image: 'https://images.pexels.com/photos/6476808/pexels-photo-6476808.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    link: '/tools/mediscan',
    priceType: 'paid'
  },
  {
    id: 4,
    name: 'ContentGenius',
    description: 'Generator treści marketingowych z optymalizacją pod kątem SEO i personalizacją dla odbiorcy.',
    category: 'text',
    rating: 4.6,
    supportsPolish: true,
    image: 'https://images.pexels.com/photos/7567443/pexels-photo-7567443.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    link: '/tools/contentgenius',
    priceType: 'freemium'
  },
  {
    id: 5,
    name: 'CodeAssist',
    description: 'Asystent programisty wykorzystujący AI do sugerowania kodu, debugowania i optymalizacji.',
    category: 'development',
    rating: 4.7,
    supportsPolish: false,
    image: 'https://images.pexels.com/photos/2004161/pexels-photo-2004161.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    link: '/tools/codeassist',
    priceType: 'free'
  },
  {
    id: 6,
    name: 'AgriSense',
    description: 'System AI do monitorowania upraw i optymalizacji produkcji rolnej na podstawie danych z czujników i zdjęć satelitarnych.',
    category: 'analytics',
    rating: 4.4,
    supportsPolish: true,
    image: 'https://images.pexels.com/photos/440731/pexels-photo-440731.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    link: '/tools/agrisense',
    priceType: 'paid'
  },
  {
    id: 7,
    name: 'VoiceAI Studio',
    description: 'Zaawansowane narzędzie do przetwarzania i syntezy mowy z obsługą wielu języków.',
    category: 'audio',
    rating: 4.6,
    supportsPolish: true,
    image: 'https://images.pexels.com/photos/3779447/pexels-photo-3779447.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    link: '/tools/voiceai',
    priceType: 'freemium'
  },
  {
    id: 8,
    name: 'TaskMaster AI',
    description: 'Inteligentny asystent do zarządzania zadaniami i automatyzacji procesów biznesowych.',
    category: 'productivity',
    rating: 4.3,
    supportsPolish: true,
    image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    link: '/tools/taskmaster',
    priceType: 'free'
  },
  {
    id: 9,
    name: 'DesignAI Pro',
    description: 'Generator grafik i projektów wykorzystujący sztuczną inteligencję do tworzenia unikalnych kompozycji.',
    category: 'graphics',
    rating: 4.8,
    supportsPolish: false,
    image: 'https://images.pexels.com/photos/1762851/pexels-photo-1762851.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    link: '/tools/designai',
    priceType: 'paid'
  }
];