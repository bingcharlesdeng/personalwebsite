import React from 'react';
import { skillsData } from './skillList.js'; // Import skillsData
import './skills.css';

const SkillItem = ({ name, icon, description, details }) => (
  <article key={name} className="skill-item">
    <i className={icon}></i>
    <div className="skill-content">
      <h3>{name}</h3>
      <p>{description}</p>
      {details && (
        <div className="skill-details">
          <span className="skill-level">Level: {details.level}</span>
          {/* Conditional rendering of sub-sections */}
          {details.projects && (
            <ul className="project-list">
              <h3>Projects</h3>
              {details.projects.map((project) => (
                <li key={project.title}>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {project.title}
                  </a>
                </li>
              ))}
            </ul>
          )}
          {details.achievements && ( // Check for achievements property
            <ul className="achievement-list">
              <h3>Achievements</h3>
              {details.achievements.map((achievement) => (
                <li key={achievement.title}>
                  <a
                    href={achievement.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {achievement.title}
                  </a>
                </li>
              ))}
            </ul>
          )}
          {/* Similar logic for other sub-sections (tools, samples, certifications) */}
        </div>
      )}
    </div>
  </article>
);

function Skills() {
  return (
    <section className="skills-section">
      <h2 className="skills-title">Skills & Expertise</h2>
      <ul className="skills-list">
        {skillsData.map((skill) => (
          <SkillItem
            key={skill.name}
            name={skill.name}
            icon={skill.icon}
            description={skill.description}
            details={skill.details} // Pass the entire details object
          />
        ))}
      </ul>
    </section>
  );
}

export default Skills;
