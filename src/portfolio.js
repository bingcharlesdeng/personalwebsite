import React from 'react';
import PortfolioList from './PortfolioList'; // Import PortfolioList component
import { portfolioItems } from './portfolioData'; // Import portfolioItems from portfolioData.js


function Portfolio() {
 

  return (
    <section className="portfolio">
      <h2>Portfolio</h2>
      <p>
        {/* Briefly describe your portfolio content (e.g., websites, designs) */}
      </p>
      <PortfolioList portfolioItems={portfolioItems} />
    </section>
  );
}

export default Portfolio;
