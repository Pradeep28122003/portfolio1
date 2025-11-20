import React from "react";
import "./Projects.scss";
import hrms from "../assets/Ecom.jpg";
import ecom from "../assets/hrms.png";

export default function Projects() {
  // 👉 Static projects list with local images
  const projects = [
    {
      id: 1,
      title: "HRMS System",
      image_url: hrms,
      description: "Human Resource Management System using Spring Boot & React."
    },
    {
      id: 2,
      title: "Employee Dashboard",
      image_url: ecom,
      description: "Interactive dashboard with modern UI components."
    }
  ];

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
