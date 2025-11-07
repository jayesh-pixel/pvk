import React from 'react';
import type { Article } from '../types';
import NewsCard from './NewsCard';
import Socials from './Socials';

interface NewsDetailProps {
  article: Article;
  relatedArticles: Article[];
}

const NewsDetail: React.FC<NewsDetailProps> = ({ article, relatedArticles }) => {
  return (
    <div className="min-h-screen bg-pvk-light-bg text-pvk-dark-text">
      <article className="container mx-auto px-6 md:px-12 lg:px-16 py-8">
        {/* Breadcrumb */}
        <nav className="text-sm mb-6">
          <a href="/" className="text-pvk-gold hover:text-pvk-gold-light">Home</a>
          <span className="text-pvk-grey mx-2">/</span>
          <a href={`#${article.category.toLowerCase()}`} className="text-pvk-gold hover:text-pvk-gold-light">{article.category}</a>
          <span className="text-pvk-grey mx-2">/</span>
          <span className="text-pvk-text-secondary">{article.title}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Category & Date */}
            <div className="flex items-center gap-4 mb-4">
              <span className="text-xs font-bold uppercase tracking-widest bg-pvk-gold text-pvk-light-bg px-3 py-1 rounded">
                {article.category}
              </span>
              <span className="text-sm text-pvk-grey">{article.timestamp}</span>
            </div>

            {/* Title */}
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
              <h1 className="text-3xl md:text-5xl font-serif font-bold text-white leading-tight flex-1">
                {article.title}
              </h1>
              
              {/* Share Buttons */}
              <div className="flex-shrink-0">
                <div className="flex items-center gap-3">
                  <span className="text-sm text-pvk-grey font-semibold">Share:</span>
                  <Socials compact />
                </div>
              </div>
            </div>

            {/* Summary */}
            <p className="text-xl text-pvk-text-secondary leading-relaxed mb-8 font-medium">
              {article.summary}
            </p>

            {/* Featured Image */}
            <div className="rounded-lg overflow-hidden mb-8 shadow-2xl">
              <img 
                src={article.imageUrl} 
                alt={article.title}
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Article Content */}
            <div className="prose prose-invert prose-lg max-w-none">
              <p className="text-pvk-text-secondary leading-relaxed mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              
              <h2 className="text-2xl font-serif font-bold text-white mt-8 mb-4">Key Points</h2>
              <p className="text-pvk-text-secondary leading-relaxed mb-6">
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>

              <ul className="list-disc list-inside text-pvk-text-secondary mb-6 space-y-2">
                <li>Market analysis shows significant growth in this sector</li>
                <li>Experts predict continued momentum in the coming months</li>
                <li>Stakeholders remain optimistic about future prospects</li>
                <li>New regulations may impact the industry landscape</li>
              </ul>

              <h2 className="text-2xl font-serif font-bold text-white mt-8 mb-4">Expert Analysis</h2>
              <p className="text-pvk-text-secondary leading-relaxed mb-6">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
              </p>

              <blockquote className="border-l-4 border-pvk-gold pl-6 italic text-pvk-text-secondary my-8">
                "This development marks a significant turning point in the industry. We're witnessing unprecedented changes that will shape the future landscape."
              </blockquote>

              <p className="text-pvk-text-secondary leading-relaxed mb-6">
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.
              </p>

              <h2 className="text-2xl font-serif font-bold text-white mt-8 mb-4">Looking Ahead</h2>
              <p className="text-pvk-text-secondary leading-relaxed mb-6">
                At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.
              </p>
            </div>

            {/* Tags */}
            <div className="mt-8 pt-6 border-t border-pvk-border">
              <h3 className="text-sm font-bold text-pvk-grey uppercase mb-3">Tags:</h3>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs bg-pvk-card-bg border border-pvk-border text-pvk-text-secondary px-3 py-1 rounded-full hover:border-pvk-gold transition-colors cursor-pointer">
                  {article.category}
                </span>
                <span className="text-xs bg-pvk-card-bg border border-pvk-border text-pvk-text-secondary px-3 py-1 rounded-full hover:border-pvk-gold transition-colors cursor-pointer">
                  News
                </span>
                <span className="text-xs bg-pvk-card-bg border border-pvk-border text-pvk-text-secondary px-3 py-1 rounded-full hover:border-pvk-gold transition-colors cursor-pointer">
                  Analysis
                </span>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              {/* Author/Publisher Info */}
              <div className="bg-pvk-card-bg p-6 rounded-lg border border-pvk-border">
                <div className="flex items-center gap-4 mb-4">
                  <div className="h-16 w-16 rounded-full overflow-hidden bg-pvk-gold/20 flex items-center justify-center">
                    <img src="/logo.webp" alt="PVK News" className="h-full w-full object-cover" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">PVK News</h3>
                    <p className="text-sm text-pvk-grey">News Channel</p>
                  </div>
                </div>
                <p className="text-sm text-pvk-text-secondary leading-relaxed">
                  Your trusted source for comprehensive news coverage across multiple sectors.
                </p>
              </div>

              {/* Most Popular */}
              <div className="bg-pvk-card-bg p-6 rounded-lg border border-pvk-border">
                <h3 className="text-lg font-bold text-pvk-gold uppercase tracking-wider mb-4 border-b-2 border-pvk-gold/50 pb-2">
                  Trending Now
                </h3>
                <ul className="space-y-4">
                  {relatedArticles.slice(0, 3).map((article) => (
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
              </div>
            </div>
          </div>
        </div>

        {/* Related Articles */}
        <div className="mt-16 pt-8 border-t-2 border-pvk-gold">
          <div className="flex items-center mb-8">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-white uppercase">Related Articles</h2>
            <div className="flex-grow h-px bg-gradient-to-r from-pvk-gold/50 to-transparent ml-4"></div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedArticles.slice(0, 4).map((article) => (
              <NewsCard key={article.id} article={article} />
            ))}
          </div>
        </div>
      </article>
    </div>
  );
};

export default NewsDetail;
