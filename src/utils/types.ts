export interface NewsItem {
  id: number;
  title: string;
  description: string;
  category: 'ai' | 'technology' | 'business' | 'education';
  image: string;
  date: string;
}

export interface EducationItem {
  id: number;
  title: string;
  description: string;
  icon: string;
  link: string;
}

export interface AITool {
  id: number;
  name: string;
  description: string;
  category: string;
  rating: number;
  supportsPolish: boolean;
  image: string;
  link: string;
  priceType: 'free' | 'freemium' | 'paid';
}

export interface SuccessStory {
  id: number;
  company: string;
  description: string;
  logo: string;
  industry: string;
}