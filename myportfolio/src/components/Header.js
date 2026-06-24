import React, { useState, useEffect } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    setMenuOpen(false);
  };

  const navLinks = ["home", "about", "education", "skills", "projects", "experience", "contact"];

  return (
    <nav className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
      <div className="nav-brand" onClick={() => scrollToSection("home")}>
        YS<span className="brand-dot">.</span>
      </div>

      <div className={`nav-links ${menuOpen ? "nav-open" : ""}`}>
        {navLinks.map((link) => (
          <a
            key={link}
            onClick={(e) => { e.preventDefault(); scrollToSection(link); }}
            href={`#${link}`}
            className="nav-link"
          >
            {link.charAt(0).toUpperCase() + link.slice(1)}
          </a>
        ))}
      </div>

      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span><span></span><span></span>
      </div>
    </nav>
  );
}