import React from 'react';
import ExperienceItem from './ExperienceItem'; // Import ExperienceItem component
import experienceData from "./experienceData.js";
import "./AboutExperience.css";

const AboutExperience = () => {
  return (
    <ul className="experience-list">
      {experienceData.map((experience) => (
        <ExperienceItem key={experience.company} {...experience} /> // Spread operator for props
      ))}
    </ul>
  );
};

export default AboutExperience;
