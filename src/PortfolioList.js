import React from 'react';
import "./portfolioList.css";
function PortfolioItem({ project, onProjectClick }) {
  const handleClick = () => {
    onProjectClick(project);
  };

  return (
    <li className="portfolio-item" aria-hidden="true" tabIndex={0} onKeyDown={handleClick} onClick={handleClick}>
      {project.image && <img src={project.image} alt={project.title} className="portfolio-item-image" />}
      <h3>{project.title}</h3>
      <p className="portfolio-item-description">{project.shortDescription}</p>
      <span className="portfolio-item-category" aria-label="Category">{project.category}</span>
    </li>
  );
}

function PortfolioList({ portfolioItems, onProjectClick }) {
  return (
    <ul className="portfolio-list" aria-label="Portfolio Items">
      {portfolioItems.map((project) => (
        <PortfolioItem key={project.id} project={project} onProjectClick={onProjectClick} />
      ))}
    </ul>
  );
}

export default PortfolioList;
