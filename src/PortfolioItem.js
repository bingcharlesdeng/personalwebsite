import React from 'react';
import "./portfolioItem.css";
import useImagePath from './useImagePath';

function PortfolioItem({ project, onProjectClick }) {
  const handleClick = () => {
    onProjectClick(project);
  };
  const portfolioImage = useImagePath(project.image);

  return (
    <li className="portfolio-item" aria-hidden="true" tabIndex={0} onKeyDown={handleClick} onClick={handleClick}>
      {project.image && <img src={portfolioImage} alt={project.title} className="portfolio-item-image" />}
      <h3>{project.title}</h3>
      <p className="portfolio-item-description">{project.shortDescription}</p>
      <span className="portfolio-item-category" aria-label="Category">{project.category}</span>
    </li>
  );
}

export default PortfolioItem;