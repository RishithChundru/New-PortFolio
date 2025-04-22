import React, { useState, useEffect } from 'react';
import '../styles/components/Projects.css';
import projectsData from '../data/project';

const Projects = () => {
  const [filter, setFilter] = useState('all');
  const [displayCount, setDisplayCount] = useState(6);
  const [visibleProjects, setVisibleProjects] = useState([]);
  
  // Filter projects based on selected category
  const filteredProjects = filter === 'all' 
    ? projectsData 
    : projectsData.filter(project => project.category === filter);
  
  // Update visible projects whenever filter or display count changes
  useEffect(() => {
    setVisibleProjects(filteredProjects.slice(0, displayCount));
  }, [filter, displayCount, filteredProjects]);
  
  // View more handler
  const handleViewMore = () => {
    setDisplayCount(projectsData.length);
  };
  
  // Reset display count when changing filters
  useEffect(() => {
    setDisplayCount(6);
  }, [filter]);

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">My Projects</h2>
        
        <div className="project-filters">
          <button 
            className={`filter-btn ${filter === 'all' ? 'active' : ''}`} 
            onClick={() => setFilter('all')}
          >
            All
          </button>
          <button 
            className={`filter-btn ${filter === 'web' ? 'active' : ''}`} 
            onClick={() => setFilter('web')}
          >
            Web Development
          </button>
          <button 
            className={`filter-btn ${filter === 'app' ? 'active' : ''}`} 
            onClick={() => setFilter('app')}
          >
            App Development
          </button>
          <button 
            className={`filter-btn ${filter === 'datascience' ? 'active' : ''}`} 
            onClick={() => setFilter('datascience')}
          >
            Data Science
          </button>
          <button 
            className={`filter-btn ${filter === 'design' ? 'active' : ''}`} 
            onClick={() => setFilter('design')}
          >
            UI/UX Design
          </button>
        </div>
        
        <div className="projects-grid">
          {visibleProjects.map((project) => (
            <div className="project-card" key={project.id}>
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <div className="project-links">
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="project-link">
                      Source Code
                    </a>
                  </div>
                </div>
              </div>
              <div className="project-info">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tags">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="project-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* View More button - only show if there are more projects to display */}
        {filteredProjects.length > displayCount && (
          <div className="view-more-container">
            <button className="view-more-btn" onClick={handleViewMore}>
              View More Projects
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;