import React from 'react';
import { skillsData } from './skillList.js'; // Import skillsData
import "./skills.css";

function Skills() {
  return (
    <section className="skills">
      <h2>Skills</h2>
      <ul className="skills-list">
        {skillsData.map((skill) => (
          <li key={skill.name} className="skill-item">
            <i className={skill.icon}></i>
            <div className="skill-content">
              <h3>{skill.name}</h3>
              <p>{skill.description}</p>
              <div className="skill-info">
                <span className="skill-level">Level: {skill.level}</span>

                {/* Conditionally render additional info based on skill type */}
                {skill.projects && (
                  <ul className="project-list">
                    <h3>Projects</h3>
                    {skill.projects.map((project) => (
                      <li key={project.title}>
                        <a href={project.link}>{project.title}</a>
                      </li>
                    ))}
                  </ul>
                )}
                {skill.tools && (
                  <ul className="tool-list">
                    <h3>Tools</h3>
                    {skill.tools.map((tool) => (
                      <li key={tool}>{tool}</li>
                    ))}
                  </ul>
                )}
                {skill.samples && (
                  <ul className="sample-list">
                    <h3>Content Samples</h3>
                    {skill.samples.map((sample) => (
                      <li key={sample.title}>
                        <a href={sample.link}>{sample.title}</a>
                      </li>
                    ))}
                  </ul>
                )}
                {skill.achievements && (
                  <ul className="achievement-list">
                    <h3>Achievements</h3>
                    {skill.achievements.map((achievement) => (
                    <a href={achievement.link}>{achievement.title}</a>
                    
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Skills;
