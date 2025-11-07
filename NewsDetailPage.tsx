import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import NewsDetail from './components/NewsDetail';
import { DUMMY_ARTICLES } from './constants';

const NewsDetailPage: React.FC = () => {
  // Get the first article as example (in real app, this would come from routing/URL params)
  const article = DUMMY_ARTICLES[0];
  
  // Get related articles from the same category
  const relatedArticles = DUMMY_ARTICLES.filter(
    (a) => a.category === article.category && a.id !== article.id
  ).slice(0, 4);

  // If not enough related articles in same category, fill with others
  if (relatedArticles.length < 4) {
    const additionalArticles = DUMMY_ARTICLES.filter(
      (a) => a.id !== article.id && !relatedArticles.includes(a)
    ).slice(0, 4 - relatedArticles.length);
    relatedArticles.push(...additionalArticles);
  }

  return (
    <div className="bg-pvk-light-bg min-h-screen text-pvk-dark-text font-sans">
      <Header />
      <NewsDetail article={article} relatedArticles={relatedArticles} />
      <Footer />
    </div>
  );
};

export default NewsDetailPage;
