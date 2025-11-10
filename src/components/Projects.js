import React from "react";
import websiteimg1 from "../assets/ecommerce.png";
import websiteimg2 from "../assets/hrms.png";
import "./Projects.scss";

export default function Projects() {
  return (
    <section className="projects-section" id="projects">
      <div className="projects-header">
        <h1>Projects</h1>
        <p>
          These are some of my projects. I’ve built them using React.js and Spring Boot.
        </p>
      </div>

      <div className="projects-gallery">
        <div className="project-card">
          <img src={websiteimg1} alt="E-commerce website project" />
          <div className="project-overlay">
            <p>E-commerce website built with React.js and Spring Boot</p>
          </div>
        </div>

        <div className="project-card">
          <img src={websiteimg2} alt="HRMS application project" />
          <div className="project-overlay">
            <p>HRMS application built with React.js and Spring Boot</p>
          </div>
        </div>
      </div>
    </section>
  );
}
