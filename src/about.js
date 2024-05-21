import React from 'react';
import AboutIntro from './AboutIntro'; // Import AboutIntro component
import AboutSkills from './AboutSkills'; // Import AboutSkills component
import AboutExperience from './AboutExperience'; // Import AboutExperience component
import './about.css'; // Import stylesheet for customization

const About = () => {
  return (
    <section className="about-section">
      <AboutIntro /> {/* Display introduction section */}
      <AboutSkills /> {/* Display skills section */}
      <AboutExperience /> {/* Display experience section */}
      {/* Add more sections as needed (e.g., Testimonials, Awards) */}
    </section>
  );
};

export default About;
