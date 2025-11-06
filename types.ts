
export type Category = 'Commodity' | 'Personal Finance' | 'Agriculture' | 'Stock Market' | 'Business' | 'Real Estate' | 'Auto & Tech' | 'Entertainment';

export interface Article {
  id: number;
  title: string;
  summary: string;
  imageUrl: string;
  category: Category;
  timestamp: string;
}
