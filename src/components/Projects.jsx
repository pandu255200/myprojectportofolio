import React from "react";
import "../styles/Projects.css";
import chevron from "../images/social/chevron.png";
import ScrollToSection from "./ScrollToSection";
import image60 from "../images/image60.jpg"; // Ensure this path is correct

const Projects = () => {
  const projects = [
    {
      title: "Data Solutions",
      description: "Leading the future with data-driven decision making.",
      url: "https://afry.com/en/area/data-solutions",
    },
    {
      title: "SmartResume - AI Resume Builder",
      description:
        "A web app that generates professional resumes using AI-powered suggestions and templates.",
      url: "https://smartresume.ai",
    },
    {
      title: "TaskMaster - Productivity App",
      description:
        "A task and project management tool with real-time collaboration and reminders.",
      url: "https://purelydot.in/products/taskmaster-productivity-tracker",
    },
    {
      title: "WeatherNow - Live Weather App",
      description:
        "A real-time weather forecasting app with location-based weather updates.",
      url: "https://weathernow.app",
    },
  ];

  const handleProjectClick = (url) => {
    if (url) {
      console.log("Opening URL:", url);
      window.open(url, "_blank");
    }
  };

  return (
    <section id="projects" className="projects">
      <h2 className="section-title">Portfolio</h2>
      <div className="portfolio-container">
        <div className="portfolio-image">
          <img src={image60} alt="Portfolio" className="responsive-image" />
        </div>
        <div className="projects-content">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              {project.url ? (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="clickable-title"
                >
                  <h3>{project.title}</h3>
                </a>
              ) : (
                <h3>{project.title}</h3>
              )}
              <p>{project.description}</p>
            </div>
          ))}
        </div>
      </div>
      <ScrollToSection targetId="contact" className="scroll-arrow">
        <img src={chevron} alt="Scroll down" className="arrow-image bounce" />
      </ScrollToSection>
    </section>
  );
};

export default Projects;
