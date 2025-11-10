import React from "react";
import DeveloperImg from "../assets/developer.jpg";
import { AiOutlineTwitter, AiOutlineFacebook, AiOutlineLinkedin } from "react-icons/ai";
import "./Hero.scss";

export default function Hero() {
  // optional: handle icon clicks
  const handleSocialClick = (platform) => {
    if (platform === "twitter") {
      window.open("https://twitter.com/", "_blank");
    } else if (platform === "facebook") {
      window.open("https://facebook.com/", "_blank");
    } else if (platform === "linkedin") {
      window.open("https://linkedin.com/", "_blank");
    }
  };

  return (
    <section className="hero">
      <div className="hero-content">
        <h1>
          Hi, <br /> I'm <span className="hero-name">Pradeep</span>
          <p>I'm a Full-stack Developer</p>
        </h1>

        <div className="hero-icons">
          <button className="icon" onClick={() => handleSocialClick("twitter")} aria-label="Twitter">
            <AiOutlineTwitter size={40} />
          </button>
          <button className="icon" onClick={() => handleSocialClick("facebook")} aria-label="Facebook">
            <AiOutlineFacebook size={40} />
          </button>
          <button className="icon" onClick={() => handleSocialClick("linkedin")} aria-label="LinkedIn">
            <AiOutlineLinkedin size={40} />
          </button>
        </div>
      </div>

      <img className="hero-img" src={DeveloperImg} alt="Developer" />
    </section>
  );
}
