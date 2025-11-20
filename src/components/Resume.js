import React from "react";
import "./Resume.scss";
import resume from "../assets/res.photo.jpeg";
export default function Resume() {
  const resumeImage = "/src/assets/res.photo.jpeg"; 
  const resumeFile = "/files/Pradeep_Kumar_Resume.pdf";
  const description = "You can view my resume here:";

  return (
    <section className="resume-section" id="resume">
      
      <div className="resume-left">
        <img src={resume} alt="Resume preview" />
      </div>

     
      <div className="resume-right">
        <div className="resume-content">
          <h1>Resume</h1>
          <p>
            {description}{" "}
            <a
              className="resume-btn"
              href={resumeFile}
              download="Pradeep_Kumar_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
