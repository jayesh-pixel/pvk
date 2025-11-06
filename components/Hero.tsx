import React, { useState, useEffect } from 'react';
import type { Article } from '../types';
import Socials from './Socials';

interface HeroProps {
  articles: Article[];
}

const Hero: React.FC<HeroProps> = ({ articles }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const featuredArticles = articles.slice(0, 3); // Use first 3 articles for slideshow
  const popularArticles = articles.slice(3);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % featuredArticles.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(timer);
  }, [featuredArticles.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % featuredArticles.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + featuredArticles.length) % featuredArticles.length);
  };

  if (featuredArticles.length === 0) {
    return null;
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
      {/* Featured Article Slideshow */}
      <div className="lg:col-span-2 rounded-lg overflow-hidden relative shadow-xl h-[400px] md:h-[450px]">
        {/* Slides */}
        {featuredArticles.map((article, index) => (
          <div
            key={article.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={article.imageUrl}
              alt={article.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-4 md:p-6 text-white">
              <span className="text-xs font-bold uppercase tracking-widest bg-pvk-gold text-pvk-light-bg px-2 py-1 rounded">
                {article.category}
              </span>
              <h1 className="text-xl md:text-3xl font-serif font-bold mt-2 leading-tight hover:text-pvk-gold transition-colors">
                <a href="#">{article.title}</a>
              </h1>
              <p className="mt-2 text-gray-300 text-sm hidden md:block">{article.summary}</p>
            </div>
          </div>
        ))}

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-pvk-gold text-white p-2 rounded-full transition-colors z-10"
          aria-label="Previous slide"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-pvk-gold text-white p-2 rounded-full transition-colors z-10"
          aria-label="Next slide"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Dots Indicator */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {featuredArticles.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentSlide ? 'bg-pvk-gold w-8' : 'bg-white/50 hover:bg-white'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Most Popular & Social */}
      <div className="space-y-4 bg-pvk-card-bg p-5 rounded-lg shadow-lg border border-pvk-border">
        <h2 className="text-lg font-bold font-serif uppercase tracking-wider text-pvk-gold border-b-2 border-pvk-gold/50 pb-2">
          Most Popular
        </h2>
        <ul className="space-y-3">
          {popularArticles.map((article) => (
            <li key={article.id} className="border-b border-pvk-border pb-3 last:border-b-0">
              <a href="#" className="group">
                <p className="font-semibold text-white text-sm group-hover:text-pvk-gold transition-colors duration-200">
                  {article.title}
                </p>
                <p className="text-xs text-pvk-grey mt-1">{article.timestamp}</p>
              </a>
            </li>
          ))}
        </ul>
        <div className="pt-3">
            <Socials />
        </div>
      </div>
    </div>
  );
};

export default Hero;