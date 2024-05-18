import React from 'react';
import PortfolioItem from './PortfolioItem'; // Import PortfolioItem component

function PortfolioList({ portfolioItems }) {
  return (
    <ul className="portfolio-list">
      {portfolioItems.map((item) => (
        <PortfolioItem key={item.title} {...item} />
      ))}
    </ul>
  );
}

export default PortfolioList;