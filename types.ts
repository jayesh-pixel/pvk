
export type Category = 'Business' | 'Commodity' | 'Real Estate' | 'Auto & Tech' | 'Entertainment' | 'Agriculture';

export interface Article {
  id: number;
  title: string;
  summary: string;
  imageUrl: string;
  category: Category;
  timestamp: string;
}
