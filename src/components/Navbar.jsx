import React, { useState, useEffect } from "react";
import "../styles/navbar.css";

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const handleNavClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`navbar ${isVisible ? "visible" : "hidden"}`}>
      <div className="menu-icon" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
        ☰
      </div>
      <ul className={`nav-links ${isMobileMenuOpen ? "open" : ""}`}>
        <li><a href="#home" onClick={handleNavClick}>Home</a></li>
        <li><a href="#about" onClick={handleNavClick}>About</a></li>
        <li><a href="#projects" onClick={handleNavClick}>Portfolio</a></li>
        <li><a href="#contact" onClick={handleNavClick}>Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
