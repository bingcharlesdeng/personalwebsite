import React, { useState, useEffect } from 'react';
import PortfolioList from './PortfolioList';
import { portfolioItems } from './portfolioData'; // Import portfolioItems from portfolioData.js
import PortfolioItem from './PortfolioItem';
import './portfolio.css';

function Portfolio() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [filter, setFilter] = useState('all'); // Initial filter state
  const [categories, setCategories] = useState([]); // State to store unique categories

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  // Function to extract unique categories from portfolioItems
  useEffect(() => {
    const uniqueCategories = [...new Set(portfolioItems.map((item) => item.category))];
    setCategories(['all', ...uniqueCategories]); // Add "all" button first
  }, []);

  const filteredItems = portfolioItems.filter((item) => {
    if (filter === 'all') return true;
    return item.category.includes(filter);
  });

  return (
    <section className="portfolio">
      <div className="portfolio-header">
        <h1 className="portfolio-title">Bing's Portfolio</h1>
        <p className="portfolio-description">
          {/* Briefly describe your portfolio content (e.g., websites, designs) */}
          A showcase of my creative and technical skills, highlighting web development projects, design explorations, and more.
        </p>
      </div>
      <div className="portfolio-filters">
        {categories.map((category) => (
          <button key={category} className="portfolio-filter-btn" onClick={() => handleFilterChange(category)}>
            {category}
          </button>
        ))}
      </div>
      <ul className="portfolio-list" aria-label="Portfolio Items">
        {filteredItems.map((project) => (
          <PortfolioItem key={project.id} project={project} onProjectClick={handleProjectClick} />
        ))}
      </ul>
    </section>
  );
}

export default Portfolio;
