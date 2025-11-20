import React, { useState, useEffect } from "react";
import DeveloperImg from "../assets/developer.jpg";
import { AiOutlineTwitter, AiOutlineFacebook, AiOutlineLinkedin } from "react-icons/ai";
import { getProfile } from '../services/portfolioService';
import "./Hero.scss";

export default function Hero() {
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

  const handleSocialClick = (url) => {
    if (url) {
      window.open(url, "_blank");
    }
  };

  if (loading) {
    return (
      <section className="hero">
        <div className="hero-content">
          <h1>Loading...</h1>
        </div>
      </section>
    );
  }

  return (
    <section className="hero">
      <div className="hero-content">
        <h1>
          Hi, <br /> I'm <span className="hero-name">{profile?.name || 'Pradeep'}</span>
          <p>I'm a {profile?.title || 'Full-stack Developer'}</p>
        </h1>

        <div className="hero-icons">
          {profile?.twitter_url && (
            <button className="icon" onClick={() => handleSocialClick(profile.twitter_url)} aria-label="Twitter">
              <AiOutlineTwitter size={40} />
            </button>
          )}
          {profile?.facebook_url && (
            <button className="icon" onClick={() => handleSocialClick(profile.facebook_url)} aria-label="Facebook">
              <AiOutlineFacebook size={40} />
            </button>
          )}
          {profile?.linkedin_url && (
            <button className="icon" onClick={() => handleSocialClick(profile.linkedin_url)} aria-label="LinkedIn">
              <AiOutlineLinkedin size={40} />
            </button>
          )}
        </div>
      </div>

      <img className="hero-img" src={DeveloperImg} alt="Developer" />
    </section>
  );
}
