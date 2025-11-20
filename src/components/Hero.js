import React from "react";
import DeveloperImg from "../assets/developer.jpg";
import { AiOutlineTwitter, AiOutlineFacebook, AiOutlineLinkedin } from "react-icons/ai";
import "./Hero.scss";

export default function Hero() {
  
  const name = "Pradeep Kumar";

  const twitter = "https://twitter.com/";
  const facebook = "https://facebook.com/";
  const linkedin = "https://linkedin.com/";

  const handleSocialClick = (url) => {
    window.open(url, "_blank");
  };

  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <h1>
          Hi, <br /> I'm <span className="hero-name">{name}</span>
        </h1>
        <p className="name">I'm a Full Stack Developer</p>

        <div className="hero-icons">
          <button className="icon" onClick={() => handleSocialClick(twitter)}>
            <AiOutlineTwitter size={40} />
          </button>

          <button className="icon" onClick={() => handleSocialClick(facebook)}>
            <AiOutlineFacebook size={40} />
          </button>

          <button className="icon" onClick={() => handleSocialClick(linkedin)}>
            <AiOutlineLinkedin size={40} />
          </button>
        </div>
      </div>

      <img className="hero-img" src={DeveloperImg} alt="Developer" />
    </section>
  );
}
