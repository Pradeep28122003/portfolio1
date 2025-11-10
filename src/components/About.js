import React from 'react';
import Aboutimg from '../assets/about.jpg';
import './About.scss';

export default function About() {
  return (
    <section className="about-section" id="about">
      <div className="about-left">
        <img src={Aboutimg} alt="About section" />
      </div>

      <div className="about-right">
        <div className="about-content">
          <h1>About Me</h1>
          <p>
            I’m a full-stack developer specializing in React.js and Spring Boot.
            I enjoy turning ideas into real-world applications and constantly
            learning new tools and frameworks to improve my craft.
          </p>
        </div>
      </div>
    </section>
  );
}
