import React, { useState, useRef } from 'react';
import PortfolioList from './PortfolioList';
import ProjectModal from './ProjectModal'; // Import ProjectModal component
import { portfolioItems } from './portfolioData'; // Import portfolioItems from portfolioData.js
import PortfolioItem from './PortfolioItem';
import './portfolio.css';

function Portfolio() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [filter, setFilter] = useState('all'); // Initial filter state
  const listRef = useRef(null); // Ref for portfolio list

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  const handleListKeyDown = (event) => {
    const key = event.key;
    const items = listRef.current.querySelectorAll('.portfolio-item');
    let focusedIndex = items.findIndex((item) => item === document.activeElement);

    if (focusedIndex === -1) focusedIndex = 0; // No focused item, set to first

    if (key === 'ArrowDown') {
      focusedIndex = (focusedIndex + 1) % items.length;
      items[focusedIndex].focus();
    } else if (key === 'ArrowUp') {
      focusedIndex = (focusedIndex - 1 + items.length) % items.length;
      items[focusedIndex].focus();
    } else if (key === 'Enter') {
      handleProjectClick(items[focusedIndex].dataset.projectId);
    }
  };

  const filteredItems = portfolioItems.filter((item) => {
    if (filter === 'all') return true;
    return item.category.includes(filter);
  });

  return (
    <section className="portfolio">
      <div className="portfolio-header">
        <h1 className="portfolio-title">Your Portfolio Title</h1>
        <p className="portfolio-description">
          {/* Briefly describe your portfolio content (e.g., websites, designs) */}
          A showcase of my creative and technical skills, highlighting web development projects, design explorations, and more.
        </p>
      </div>
      <div className="portfolio-filters">
        <button onClick={() => handleFilterChange('all')}>All</button>
        <button onClick={() => handleFilterChange('web')}>Web Development</button>
        <button onClick={() => handleFilterChange('design')}>Design</button>
        {/* Add more filter buttons as needed */}
      </div>
      <ul className="portfolio-list" aria-label="Portfolio Items" ref={listRef} onKeyDown={handleListKeyDown}>
        {filteredItems.map((project) => (
          <PortfolioItem key={project.id} project={project} onProjectClick={handleProjectClick} />
        ))}
      </ul>
      {selectedProject && <ProjectModal project={selectedProject} onClose={handleCloseModal} />}
    </section>
  );
}

export default Portfolio;
