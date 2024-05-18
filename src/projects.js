import React, { useState, useMemo } from 'react';
import Project from './project'; // Import Project component (updated)
import { projects } from './projectList'; // Import projects data
import Option from './option'; // Import Option component
import "./projects.css";

function Projects() {
  const [selectedFilter, setSelectedFilter] = useState('all'); // Initial filter state
  const [sortedProjects, setSortedProjects] = useState(projects.slice()); // Initially unsorted copy of projects
  const [selectedSort, setSelectedSort] = useState(''); // Initial sort selection (default to none)

  // Use useMemo to create unique categories (avoiding duplicates)
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

  const handleSortChange = (sortOption) => { // Receive sortOption as argument
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
      <div className="project-filters">
        <label htmlFor="filter">Filter by Category:</label>
        <select
          id="filter"
          value={selectedFilter}
          onChange={handleFilterChange}
        >
          <Option value="">All</Option>
          {/* Use Option component for category options with unique categories */}
          {uniqueCategories.map((category) => (
            <Option key={category} value={category}>
              {category}
            </Option>
          ))}
        </select>
        <label htmlFor="sort">Sort by:</label>
        <select id="sort" value={selectedSort} onChange={(e) => handleSortChange(e.target.value)}>
          <Option value="">None</Option>
          <Option value="newest">Newest First</Option>
          <Option value="oldest">Oldest First</Option>
          <Option value="name-asc">Name (A-Z)</Option>
          <Option value="name-desc">Name (Z-A)</Option>
        </select>
      </div>
      <p className="project-description">Here are some of the projects I've been working on:</p>
      {sortedProjects.map((project) => (
        <Project key={project.title} {...project} /> // Pass project data to Project component
      ))}
    </section>
  );
}

export default Projects;
