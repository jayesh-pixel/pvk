import React from 'react';
import type { Article } from '../types';
import Socials from './Socials';

interface HeroProps {
  articles: Article[];
}

const Hero: React.FC<HeroProps> = ({ articles }) => {
  const featuredArticle = articles[0];
  const popularArticles = articles.slice(1);

  if (!featuredArticle) {
    return null;
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
      {/* Featured Article */}
      <div className="lg:col-span-2 rounded-lg overflow-hidden group relative shadow-2xl">
        <img
          src={featuredArticle.imageUrl}
          alt={featuredArticle.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
        <div className="absolute bottom-0 left-0 p-6 md:p-8 text-white">
          <span className="text-xs font-bold uppercase tracking-widest bg-pvk-gold text-pvk-light-bg px-2 py-1 rounded">
            {featuredArticle.category}
          </span>
          <h1 className="text-2xl md:text-4xl font-serif font-bold mt-2 leading-tight group-hover:text-pvk-gold transition-colors">
            <a href="#">{featuredArticle.title}</a>
          </h1>
          <p className="mt-2 text-gray-300 hidden md:block">{featuredArticle.summary}</p>
        </div>
      </div>

      {/* Most Popular & Social */}
      <div className="space-y-6 bg-pvk-card-bg p-6 rounded-lg shadow-lg border border-pvk-border">
        <h2 className="text-xl font-bold font-serif uppercase tracking-wider text-pvk-gold border-b-2 border-pvk-gold/50 pb-2">
          Most Popular
        </h2>
        <ul className="space-y-4">
          {popularArticles.map((article) => (
            <li key={article.id} className="border-b border-pvk-border pb-3 last:border-b-0">
              <a href="#" className="group">
                <p className="font-semibold text-white group-hover:text-pvk-gold transition-colors duration-200">
                  {article.title}
                </p>
                <p className="text-xs text-pvk-grey mt-1">{article.timestamp}</p>
              </a>
            </li>
          ))}
        </ul>
        <div className="pt-4">
            <Socials />
        </div>
      </div>
    </div>
  );
};

export default Hero;