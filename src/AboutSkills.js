import React from 'react';
import "./AboutSkills.css";

const AboutSkills = () => {
  return (
    <div className="about-skills">
      <h2>My Skills</h2>
      <ul>
        <li>
          <i className="fas fa-comment-dots"></i> {/* Font Awesome icon for communication */}
          <h3>Communicator &amp; Collaborator</h3>
          <p>
            I bridge the gap between ideas and action. I can clearly articulate
            complex concepts and foster collaboration in any team environment.
          </p>
        </li>
        <li>
          <i className="fas fa-feather-alt"></i> {/* Font Awesome icon for writing */}
          <h3>Prolific "How-To" &amp; Poetry Writer</h3>
          <p>
            My writing is clear, concise, and engaging. I excel at crafting
            informative guides and expressing myself creatively through poetry.
          </p>
        </li>
        <li>
          <i className="fas fa-tennis-ball"></i> {/* Font Awesome icon for tennis */}
          <h3>Competitive Tennis Player &amp; Coach</h3>
          <p>
            I bring a competitive spirit and passion for the game to the court.
            Beyond competition, I enjoy sharing my knowledge and coaching others.
          </p>
        </li>
      </ul>
    </div>
  );
};

export default AboutSkills;
