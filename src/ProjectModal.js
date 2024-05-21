
import useImagePath from './useImagePath';

function ProjectModal({ project, onClose }) {

  const projectImage = useImagePath(project.image);
  return (
    <div className="project-modal">
      <h2>{project.title}</h2>
      <img src={projectImage} alt={project.title} className="project-modal-image" />
      <p className="project-modal-description">{project.description}</p>
      <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-modal-link">Visit Project</a>
      <button onClick={onClose}>Close</button>
    </div>
  );
}

export default ProjectModal;