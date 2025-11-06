
import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaYoutube } from 'react-icons/fa';
import type { Article, Category } from './types';

export const NAV_CATEGORIES: Category[] = ['Commodity', 'Personal Finance', 'Agriculture', 'Stock Market', 'Business', 'Real Estate', 'Auto & Tech', 'Entertainment'];

export const DUMMY_ARTICLES: Article[] = [
  {
    id: 1,
    title: 'Global Markets Rally as Tech Stocks Surge',
    summary: 'Investors showed renewed confidence in the tech sector, pushing major indices to new heights this week.',
    imageUrl: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimg.freepik.com%2Fpremium-photo%2Fenergy-sector-decline-tech-surge-shown-stock-market-bar-graph_1252980-977.jpg%3Fw%3D1380&f=1&nofb=1&ipt=46af3441e1687cdebb38bb2838c299e1d5ff28a5bdfb9c1b2cd9ec427854fd16',
    category: 'Business',
    timestamp: '2 hours ago',
  },
  {
    id: 2,
    title: 'Gold Prices Hit a 6-Month High Amidst Economic Uncertainty',
    summary: 'The precious metal is seen as a safe haven asset, with prices climbing steadily over the past quarter.',
    imageUrl: 'https://picsum.photos/seed/gold/600/400',
    category: 'Commodity',
    timestamp: '5 hours ago',
  },
  {
    id: 3,
    title: 'Luxury Downtown Condos Sell Out in Record Time',
    summary: 'The city\'s skyline is changing as a new luxury development project reports unprecedented sales figures.',
    imageUrl: 'https://picsum.photos/seed/realestate1/600/400',
    category: 'Real Estate',
    timestamp: '1 day ago',
  },
  {
    id: 4,
    title: 'The Future is Electric: A Look at the New EV Lineup',
    summary: 'Major automakers are unveiling their next-generation electric vehicles, promising longer range and faster charging.',
    imageUrl: 'https://picsum.photos/seed/auto1/600/400',
    category: 'Auto & Tech',
    timestamp: '3 hours ago',
  },
  {
    id: 5,
    title: 'Summer Blockbuster Season Kicks Off With a Sci-Fi Epic',
    summary: 'The latest space adventure film is breaking box office records on its opening weekend.',
    imageUrl: 'https://picsum.photos/seed/entertainment1/600/400',
    category: 'Entertainment',
    timestamp: '8 hours ago',
  },
  {
    id: 6,
    title: 'Innovative Farming Techniques Boost Crop Yields',
    summary: 'New technology in precision agriculture is helping farmers increase efficiency and sustainability.',
    imageUrl: 'https://picsum.photos/seed/agri1/600/400',
    category: 'Agriculture',
    timestamp: '2 days ago',
  },
  {
    id: 7,
    title: 'Startups to Watch: The Top 5 Companies Disrupting Finance',
    summary: 'From AI-powered advisors to blockchain solutions, these fintech startups are changing how we manage money.',
    imageUrl: 'https://picsum.photos/seed/business2/600/400',
    category: 'Business',
    timestamp: '4 hours ago',
  },
  {
    id: 8,
    title: 'Crude Oil Futures Fluctuate on Supply Concerns',
    summary: 'Analysts are closely watching geopolitical tensions that could impact global oil supply chains.',
    imageUrl: 'https://picsum.photos/seed/oil/600/400',
    category: 'Commodity',
    timestamp: '10 hours ago',
  },
  {
    id: 9,
    title: 'How AI is Revolutionizing Personalized Gadgets',
    summary: 'Your next smartphone might know what you need before you do, thanks to advances in machine learning.',
    imageUrl: 'https://picsum.photos/seed/tech2/600/400',
    category: 'Auto & Tech',
    timestamp: '1 day ago',
  },
  {
    id: 10,
    title: 'Suburban Housing Market Sees Unprecedented Growth',
    summary: 'More buyers are looking for homes outside major urban centers, driving up prices in suburban areas.',
    imageUrl: 'https://picsum.photos/seed/realestate2/600/400',
    category: 'Real Estate',
    timestamp: '3 days ago',
  },
   {
    id: 11,
    title: 'The Future of Streaming: More Choices, Higher Prices?',
    summary: 'As new players enter the streaming wars, consumers face a complex landscape of content and subscriptions.',
    imageUrl: 'https://picsum.photos/seed/entertainment2/600/400',
    category: 'Entertainment',
    timestamp: '1 day ago',
  },
  {
    id: 12,
    title: 'Venture Capital Investment in Agri-Tech Reaches New Peak',
    summary: 'Investors are pouring money into technologies that promise to make food production more resilient and efficient.',
    imageUrl: 'https://picsum.photos/seed/agri2/600/400',
    category: 'Agriculture',
    timestamp: '5 days ago',
  },
   {
    id: 13,
    title: 'The Rise of the Four-Day Work Week: A Business Revolution',
    summary: 'Companies are experimenting with shorter work weeks, reporting higher productivity and employee satisfaction.',
    imageUrl: 'https://picsum.photos/seed/business3/600/400',
    category: 'Business',
    timestamp: '6 hours ago',
  },
  {
    id: 14,
    title: 'Autonomous Trucks Complete First Cross-Country Journey',
    summary: 'A major milestone in logistics and transportation technology has been achieved this week.',
    imageUrl: 'https://picsum.photos/seed/tech3/600/400',
    category: 'Auto & Tech',
    timestamp: '2 days ago',
  },
  {
    id: 15,
    title: 'Smart Budgeting Apps Help Millennials Save More',
    summary: 'New financial technology is making it easier than ever to track spending and build wealth.',
    imageUrl: 'https://picsum.photos/seed/finance1/600/400',
    category: 'Personal Finance',
    timestamp: '4 hours ago',
  },
  {
    id: 16,
    title: 'Stock Market Hits Record High Amid Economic Recovery',
    summary: 'Major indices break through previous records as investor confidence reaches new peaks.',
    imageUrl: 'https://picsum.photos/seed/stocks1/600/400',
    category: 'Stock Market',
    timestamp: '1 hour ago',
  },
  {
    id: 17,
    title: 'Retirement Planning: What You Need to Know in 2025',
    summary: 'Financial experts share key strategies for securing your financial future.',
    imageUrl: 'https://picsum.photos/seed/finance2/600/400',
    category: 'Personal Finance',
    timestamp: '6 hours ago',
  },
  {
    id: 18,
    title: 'Tech Stocks Lead Market Rally in Q4',
    summary: 'Technology sector outperforms expectations, driving overall market gains.',
    imageUrl: 'https://picsum.photos/seed/stocks2/600/400',
    category: 'Stock Market',
    timestamp: '3 hours ago',
  }
];

export const SOCIAL_LINKS = [
    {
        name: 'Facebook',
        href: '#',
    icon: <FaFacebookF size={24} />,
    },
    {
        name: 'Twitter',
        href: '#',
    icon: <FaTwitter size={24} />,
    },
    {
        name: 'LinkedIn',
        href: '#',
    icon: <FaLinkedinIn size={24} />,
    },
  {
    name: 'YouTube',
    href: '#',
    icon: <FaYoutube size={24} />,
  },
];
