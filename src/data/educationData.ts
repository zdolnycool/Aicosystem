import { EducationItem } from '../utils/types';
import { BrainCog, LineChart, Building, School, Code, Lightbulb } from 'lucide-react';

export const educationData: EducationItem[] = [
  {
    id: 1,
    title: 'Podstawy AI',
    description: 'Zrozum fundamentalne koncepcje sztucznej inteligencji i uczenia maszynowego.',
    icon: 'BrainCog',
    link: '/education/basics'
  },
  {
    id: 2,
    title: 'Zastosowania AI',
    description: 'Odkryj, jak AI rewolucjonizuje różne branże, od medycyny po transport.',
    icon: 'LineChart',
    link: '/education/applications'
  },
  {
    id: 3,
    title: 'Programowanie AI',
    description: 'Naucz się tworzyć i trenować własne modele sztucznej inteligencji.',
    icon: 'Code',
    link: '/education/programming'
  },
  {
    id: 4,
    title: 'Etyka w AI',
    description: 'Zgłęb zagadnienia etyczne związane z rozwojem i wdrażaniem technologii AI.',
    icon: 'Lightbulb',
    link: '/education/ethics'
  },
  {
    id: 5,
    title: 'AI dla Biznesu',
    description: 'Dowiedz się, jak wdrożyć rozwiązania AI w swojej firmie.',
    icon: 'Building',
    link: '/education/business'
  },
  {
    id: 6,
    title: 'Kursy i Certyfikacje',
    description: 'Przegląd dostępnych kursów i programów certyfikacyjnych w zakresie AI.',
    icon: 'School',
    link: '/education/courses'
  }
];

export const getIconComponent = (iconName: string) => {
  switch (iconName) {
    case 'BrainCog':
      return BrainCog;
    case 'LineChart':
      return LineChart;
    case 'Building':
      return Building;
    case 'School':
      return School;
    case 'Code':
      return Code;
    case 'Lightbulb':
      return Lightbulb;
    default:
      return BrainCog;
  }
};