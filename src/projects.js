import React from 'react';
import { useState, useMemo } from 'react';
import Project from './project'; // Import Project component
import "./projects.css";

// Import projects data (assuming it's in a separate file)
import { projects } from './projectList';

function Projects() {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [sortedProjects, setSortedProjects] = useState(projects.slice());
  const [selectedSort, setSelectedSort] = useState('');

  const uniqueCategories = useMemo(() => {
    const categorySet = new Set();
    projects.forEach((project) => categorySet.add(project.category));
    return Array.from(categorySet);
  }, [projects]);

  const handleFilterChange = (event) => {
    setSelectedFilter(event.target.value);
    const filteredProjects = projects.filter((project) =>
      project.category.toLowerCase().includes(event.target.value.toLowerCase())
    );
    setSortedProjects(filteredProjects);
  };

  const handleSortChange = (sortOption) => {
    setSelectedSort(sortOption);
    let sortedProjects = [...projects]; // Initialize sortedProjects with the projects array
    switch (sortOption) {
      case 'newest':
        sortedProjects = [...sortedProjects].sort((a, b) => b.date - a.date);
        break;
      case 'oldest':
        sortedProjects = [...sortedProjects].sort((a, b) => a.date - b.date);
        break;
      case 'name-asc':
        sortedProjects = [...sortedProjects].sort((a, b) => (a.title > b.title ? 1 : -1));
        break;
      case 'name-desc':
        sortedProjects = [...sortedProjects].sort((a, b) => (a.title < b.title ? 1 : -1));
        break;
      default:
        sortedProjects = projects.slice(); // Reset to original order if no sort selected
    }
    setSortedProjects(sortedProjects);
  };

  return (
    <section className="projects">
      <h2 className="projects-heading">Projects</h2>
      <div className='project-helper'>
      <div className="project-filters"> {/* Plural for consistency with CSS */}
        <label htmlFor="filter">Filter by Category:</label>
        <select id="filter" value={selectedFilter} onChange={handleFilterChange}>
          <option value="">All</option>
          {uniqueCategories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
        <span className="label-space">
        <label htmlFor="sort">Sort by:</label>
        </span>
        <select id="sort" value={selectedSort} onChange={(e) => handleSortChange(e.target.value)}>
          <option value="">None</option>
          <option value="newest">Newest First</option>
          <option value="oldest">Oldest First</option>
          <option value="name-asc">Name (A-Z)</option>
          <option value="name-desc">Name (Z-A)</option>
        </select>
      </div>

      {sortedProjects.length > 0 ? ( // Render description only if projects exist
        <p className="project-description">Here are some of the projects I've been working on:</p>
      ) : null}
      <div className="project-container"> {/* Added container for spacing */}
        {sortedProjects.map((project) => (
          <Project key={project.title} {...project} />
        ))}
      </div>
      </div>
    </section>
  );
}

export default Projects;
