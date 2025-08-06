import React, { useEffect } from "react";

export default function MyPage(props) {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-dark">
        <div className="textofnav text-light">
          <div className="mainheading">
            <strong>{props.mainHeading}</strong>
          </div>
          <div className="subHeadingofnav">
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("home");
              }}
            >
              Home
            </a>
            <a
              href="#about"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("about");
              }}
            >
              About
            </a>
            <a
              href="#skills"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("skills");
              }}
            >
              Skills
            </a>
            <a
              href="#hobbies"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("hobbies");
              }}
            >
              Hobbies
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("contact");
              }}
            >
              Contact
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}
