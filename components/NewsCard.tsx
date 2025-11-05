import React from 'react';
import type { Article } from '../types';

interface NewsCardProps {
  article: Article;
}

const NewsCard: React.FC<NewsCardProps> = ({ article }) => {
  return (
    <div className="bg-pvk-card-bg rounded-lg overflow-hidden group shadow-lg hover:shadow-pvk-gold/10 transition-all duration-300 hover:-translate-y-1 border border-pvk-border hover:border-pvk-gold/50">
      <a href="#">
        <div className="overflow-hidden">
            <img 
                src={article.imageUrl} 
                alt={article.title} 
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
            />
        </div>
        <div className="p-4">
          <span className="text-xs font-bold uppercase text-pvk-gold">{article.category}</span>
          <h3 className="text-lg font-bold mt-1 text-white leading-tight group-hover:text-pvk-gold transition-colors">
            {article.title}
          </h3>
          <p className="text-sm text-pvk-text-secondary mt-2">{article.summary}</p>
          <p className="text-xs text-pvk-grey mt-3">{article.timestamp}</p>
        </div>
      </a>
    </div>
  );
};

export default NewsCard;