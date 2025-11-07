
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import NewsDetailPage from './NewsDetailPage';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

// Simple routing based on URL hash
const renderApp = () => {
  const hash = window.location.hash;
  
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      {hash.startsWith('#/article/') ? <NewsDetailPage /> : <App />}
    </React.StrictMode>
  );
};

renderApp();

// Listen for hash changes
window.addEventListener('hashchange', renderApp);
