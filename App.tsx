import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import CategorySection from './components/CategorySection';
import { DUMMY_ARTICLES, NAV_CATEGORIES } from './constants';
import type { Article, Category } from './types';

const App: React.FC = () => {
  const heroArticles = DUMMY_ARTICLES.slice(0, 5);
  const categorizedArticles = NAV_CATEGORIES.map(category => ({
    category,
    articles: DUMMY_ARTICLES.filter(article => article.category === category),
  })).filter(group => group.articles.length > 0);

  return (
    <div className="bg-pvk-light-bg min-h-screen text-pvk-dark-text font-sans">
      <Header />
      <main className="container mx-auto px-4 py-6 md:py-10">
        <Hero articles={heroArticles} />
        <div className="space-y-12 md:space-y-16 mt-12 md:mt-16">
          {categorizedArticles.map(({ category, articles }) => (
            <CategorySection
              key={category}
              title={category as Category}
              articles={articles}
            />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;