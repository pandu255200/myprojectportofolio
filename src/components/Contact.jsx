import React from "react";
import "../styles/Contact.css";
import insta from "../images/social/insta.png";
import github from "../images/social/github.png";
import youtube from "../images/social/youtube.png";
import twitter from "../images/social/twitter.png";
import linkedin from "../images/social/linkedin.png";
import mail from "../images/social/mail.png";
import chevron from "../images/social/chevron.png";
import ScrollToSection from "./ScrollToSection";



const Contact = () => {
  return (
    <section id="contact" className="contact">
      <h2>Connect With Me</h2>
      <div className="social-links">
        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="social-link"
        >
          <img
            src={insta} // Replace with your Instagram image URL
            alt="Instagram"
            className="social-icon"
          />
          <span>Instagram</span>
        </a>
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="social-link"
        >
          <img
            src={github}// Replace with your GitHub image URL
            alt="GitHub"
            className="social-icon"
          />
          <span>GitHub</span>
        </a>
        <a
          href="https://www.youtube.com"
          target="_blank"
          rel="noopener noreferrer"
          className="social-link"
        >
          <img
            src={youtube} // Replace with your YouTube image URL
            alt="YouTube"
            className="social-icon"
          />
          <span>YouTube</span>
        </a>
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="social-link"
        >
          <img
            src={twitter} // Replace with your Twitter image URL
            alt="Twitter"
            className="social-icon"
          />
          <span>Twitter</span>
        </a>
        <a
          href="https://www.linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="social-link"
        >
          <img
            src={linkedin} // Replace with your LinkedIn image URL
            alt="LinkedIn"
            className="social-icon"
          />
          <span>LinkedIn</span>
        </a>
        <a
          href="mailto:your-email@example.com"
          target="_blank"
          rel="noopener noreferrer"
          className="social-link"
        >
          <img
            src={mail}
            className="social-icon"
          />
          <span>Email</span>
        </a>
        
      </div>
      <ScrollToSection targetId="home" className="scroll-arrow">
        <img src={chevron} alt="Scroll down" className="arrow-image bounce" />
      </ScrollToSection>
    </section>
  );
};

export default Contact;
