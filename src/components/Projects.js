import React, { useState, useEffect } from "react";
import { getProjects } from '../services/portfolioService';
import "./Projects.scss";

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      const data = await getProjects();
      setProjects(data);
      setLoading(false);
    };

    fetchProjects();
  }, []);

  if (loading) {
    return (
      <section className="projects-section" id="projects">
        <div className="projects-header">
          <h1>Loading...</h1>
        </div>
      </section>
    );
  }

  return (
    <section className="projects-section" id="projects">
      <div className="projects-header">
        <h1>Projects</h1>
        <p>
          These are some of my projects. I've built them using React.js and Spring Boot.
        </p>
      </div>

      <div className="projects-gallery">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <img src={project.image_url} alt={project.title} />
            <div className="project-overlay">
              <p>{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
