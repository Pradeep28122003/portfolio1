import React, { useState, useEffect } from 'react';
import Aboutimg from '../assets/about.jpg';
import { getProfile } from '../services/portfolioService';
import './About.scss';

export default function About() {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProfile = async () => {
      const data = await getProfile();
      setProfile(data);
      setLoading(false);
    };

    fetchProfile();
  }, []);

  if (loading) {
    return (
      <section className="about-section" id="about">
        <div className="about-right">
          <div className="about-content">
            <h1>Loading...</h1>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="about-section" id="about">
      <div className="about-left">
        <img src={Aboutimg} alt="About section" />
      </div>

      <div className="about-right">
        <div className="about-content">
          <h1>About Me</h1>
          <p>
            {profile?.bio || "I'm a full-stack developer specializing in React.js and Spring Boot. I enjoy turning ideas into real-world applications and constantly learning new tools and frameworks to improve my craft."}
          </p>
        </div>
      </div>
    </section>
  );
}
