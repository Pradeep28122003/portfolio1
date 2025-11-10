import React from "react";
import DeveloperImg from "../assets/developer.jpg";
import { AiOutlineTwitter, AiOutlineFacebook, AiOutlineLinkedin } from "react-icons/ai";
import "./Hero.scss";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>
          Hi, <br /> I'm Pradeep
          <p>I'm a Full-stack developer</p>
        </h1>

        <div className="hero-icons">
          <a href="#" className="icon">
            <AiOutlineTwitter size={40} />
          </a>
          <a href="#" className="icon">
            <AiOutlineFacebook size={40} />
          </a>
          <a href="#" className="icon">
            <AiOutlineLinkedin size={40} />
          </a>
        </div>
      </div>

      <img className="hero-img" src={DeveloperImg} alt="Developer" />
    </section>
  );
}
