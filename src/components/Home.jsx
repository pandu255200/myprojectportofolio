import React from "react";
import "../styles/Home.css";
import chevron from "../images/social/chevron.png";
import ScrollToSection from "./ScrollToSection";

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        {/* Name Box */}
        <div className="text-box name-box">
          <h1 className="animated-text">GOPINATH</h1>
        </div>

        {/* Role Box */}
        <div className="text-box role-box">
          <h2 className="animated-subtitle">FrontEnd Developer</h2>
        </div>

        {/* Description Box */}
        <div className="text-box description-box">
          <p className="fade-in-text">
            Seeking a professionally challenging career in the area of Software
            development, to use my skills and put my maximum effort in the best
            possible way for achieving organization’s growth. Key participant
            and team player in all phases of the development life cycle of
            Projects. Team Player with excellent interpersonal skills.
          </p>
        </div>
      </div>

      <ScrollToSection targetId="about" className="scroll-arrow">
        <img src={chevron} alt="Scroll down" className="arrow-image" />
      </ScrollToSection>
    </section>
  );
};

export default Hero;
