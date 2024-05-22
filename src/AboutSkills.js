import React from 'react';
import './AboutSkills.css';

const AboutSkills = () => {
  const aboutMeDescription = `I bridge the gap between ideas and action. I can clearly articulate complex concepts and foster collaboration in any team environment.`;
  const skills = [
    {
      title: 'Communicator & Collaborator',
      description: aboutMeDescription,
    },
    {
      title: 'Prolific How-To & Poetry Writer',
      description: `My writing is clear, concise, and engaging. I excel at crafting informative guides and expressing myself creatively through poetry.`,
    },
    {
      title: 'Competitive Tennis Player & Coach',
      description: `I bring a competitive spirit and passion for the game to the court. Beyond competition, I enjoy sharing my knowledge and coaching others.`,
    },
  ];

  return (
    <div className="about-skills">
      <h2>My Skills</h2>
      {skills.map((skill) => (
        <div key={skill.title} className="skill-item">
          <h3>{skill.title}</h3>
          <p>{skill.description}</p>
        </div>
      ))}
    </div>
  );
};

export default AboutSkills;
