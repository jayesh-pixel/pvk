import React from 'react';
import type { Article, Category } from '../types';
import NewsCard from './NewsCard';

interface CategorySectionProps {
  title: Category;
  articles: Article[];
}

const CategorySection: React.FC<CategorySectionProps> = ({ title, articles }) => {
  if (articles.length === 0) {
    return null;
  }

  return (
    <section>
      <div className="flex items-center mb-6">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-white uppercase">{title}</h2>
        <div className="flex-grow h-px bg-gradient-to-r from-pvk-gold/50 to-transparent ml-4"></div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {articles.map((article) => (
          <NewsCard key={article.id} article={article} />
        ))}
      </div>
    </section>
  );
};

export default CategorySection;