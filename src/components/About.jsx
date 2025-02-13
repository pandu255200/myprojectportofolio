import React from "react";
import "../styles/About.css";
import chevron from "../images/social/chevron.png";
import ScrollToSection from "./ScrollToSection";

const About = () => {
  const skills = [
    "React",
    "JavaScript",
    "Node.js",
    "HTML/CSS",
    "Python",
    "SQL",
    "Git",
    "UI/UX Design",
    "React Native",
  ];

  return (
    <section id="about" className="about">
      <div className="overlay"></div>
      <div className="about-content">
        <h2 className="fade-in">About Me</h2>
        <p className="fade-in">
          Hi, I am currently in the final semester of my B.Tech final year at
          Kallam Harinath Reddy Institute of Technology, Guntur. I'm a
          passionate full-stack developer with expertise in React, Node.js, and
          modern web technologies. I love building scalable and user-friendly
          applications that solve real-world problems.
        </p>
        <div className="skills-section fade-in">
          <h3>Skills</h3>
          <div className="skills-list">
            {skills.map((skill, index) => (
              <span key={index} className="skill-item pop-effect">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
      <ScrollToSection targetId="projects" className="scroll-arrow">
        <img src={chevron} alt="Scroll down" className="arrow-image bounce" />
      </ScrollToSection>
    </section>
  );
};

export default About;