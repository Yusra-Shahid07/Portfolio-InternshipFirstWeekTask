import React, { useEffect, useState } from "react";
import mypic from "../images/mypic.png";

const roles = ["Full Stack Developer", "React Developer", "Node.js Engineer", "Python Developer"];

export default function Home() {
  const [display, setDisplay] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    let timer;
    if (!deleting && charIndex < current.length) {
      timer = setTimeout(() => { setDisplay(current.slice(0, charIndex + 1)); setCharIndex(c => c + 1); }, 80);
    } else if (!deleting && charIndex === current.length) {
      timer = setTimeout(() => setDeleting(true), 1800);
    } else if (deleting && charIndex > 0) {
      timer = setTimeout(() => { setDisplay(current.slice(0, charIndex - 1)); setCharIndex(c => c - 1); }, 45);
    } else if (deleting && charIndex === 0) {
      setDeleting(false);
      setRoleIndex(r => (r + 1) % roles.length);
    }
    return () => clearTimeout(timer);
  }, [charIndex, deleting, roleIndex]);

  const scroll = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <div className="home-section">
      <div className="home-inner">
        <div className="home-text">
          <div className="home-tag">
            <span className="home-tag-dot"></span>
            Available for Remote Internships or Jobs
          </div>
          <h1 className="home-name">
            Hi, I'm<br />
            <span className="name-grad">Yusra Shahid</span>
          </h1>
          <div className="home-role-wrap">
            <span className="home-role-label">~/</span>
            <span className="home-role-text">{display}<span className="home-cursor">|</span></span>
          </div>
          <p className="home-bio">
            Building full-stack web apps with React, Node.js & Python. Passionate about
            AI-powered solutions and clean, scalable code.
          </p>
          <div className="home-cta">
            <button className="btn-primary" onClick={() => scroll("projects")}>View Projects</button>
            <a href="/Yusra_Shahid_Resume_Final.pdf" download className="btn-outline">Download CV</a>
          </div>
          <div className="home-socials">
            <a href="https://www.linkedin.com/in/yusra-shahid-40a61725a" target="_blank" rel="noreferrer" className="social-icon">
              <i className="fa-brands fa-linkedin-in"></i>
            </a>
            <a href="https://github.com/Yusra-Shahid07" target="_blank" rel="noreferrer" className="social-icon">
              <i className="fa-brands fa-github"></i>
            </a>
            <a href="mailto:syusra841@gmail.com" className="social-icon">
              <i className="fa-solid fa-envelope"></i>
            </a>
          </div>
        </div>
        <div className="home-visual">
          <div className="avatar-wrap">
            <div className="avatar-ring-outer"></div>
            <div className="avatar-img-wrap">
              <img src={mypic} alt="Yusra Shahid" />
            </div>
            <div className="avatar-badge">
              <div className="avatar-badge-dot"></div>
              <span className="avatar-badge-text">Open to Work</span>
            </div>
          </div>
        </div>
      </div>
      <div className="scroll-cue" onClick={() => scroll("about")}>
        <span>scroll</span>
        <div className="scroll-line"></div>
      </div>
    </div>
  );
}