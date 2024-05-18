import React, { useState, useEffect } from 'react';
import "./project.css"; // Import project stylesheet
import useImagePath from './useImagePath';
import ImageCarousel from './ImageCarousel'; // Import ImageCarousel component

function Project(projectData) {
  const { imageUrl, title, description, link, technologies, accomplishments, category, date } = projectData; // Destructuring
  const imagePath = useImagePath(imageUrl); // Get image path
  const [images, setImages] = useState([]); // State for image URLs (if project has multiple images)

  // Handle cases where imageUrl is a string (single image) or an array (multiple images)
  useEffect(() => {
    if (Array.isArray(imageUrl)) {
      setImages(imageUrl);
    } else {
      setImages([imageUrl]); // Convert single string to an array
    }
  }, [imageUrl]); // Update images on imageUrl change

  return (
    <div className="project">
      <div className="project-image">
        {images.length > 1 ? (
          <ImageCarousel images={images} /> // Render ImageCarousel for multiple images
        ) : (
          <img src={imagePath} alt={title} /> // Render single image if only one exists
        )}
      </div>
      <div className="project-details">
        <h3>{title}</h3>
        <p className="project-description">{description}</p>
        <div className="project-info">
          <ul className="technologies">
            {technologies.map((tech) => (
              <li key={tech}>{tech}</li>
            ))}
          </ul>
          <br /> {/* Add a line break after technologies */}
          <ul className="accomplishments">
            {accomplishments.map((achievement) => (
              <li key={achievement}>{achievement}</li>
            ))}
          </ul>
        </div>
        <div className="project-meta"> {/* Use a separate div for meta info */}
          <span className="category">Category: {category}</span>
        </div>
        <div className="project-meta-right"> {/* New div for right-aligned date */}
          <span className="date">Date: {date.toLocaleDateString()}</span>
        </div>
        <a href={link} target="_blank" rel="noopener noreferrer" className="project-link">
          View Project
        </a>
      </div>
    </div>
  );
}

export default Project;
