import React from 'react';

function PortfolioItem({ title, link, image = "", description = "" }) {
  return (
    <li className="portfolio-item">
      {image && <img src={image} alt={title} className="portfolio-item-image" />} {/* Optional image */}
      <h3>{title}</h3>
      {link && <a href={link} target="_blank" rel="noopener noreferrer">View Project</a>} {/* Optional link */}
      {description && <p className="portfolio-item-description">{description}</p>} {/* Optional description */}
    </li>
  );
}

export default PortfolioItem;
