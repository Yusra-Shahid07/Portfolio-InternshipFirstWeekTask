import React, { useEffect, useState } from "react";
import c from "C:/Users/syusr/Downloads/Semesters/Internships/First Internship Front End Development By Internship Pakistan/Portfolio/myportfolio/src/images/c++.png";
import conly from "C:/Users/syusr/Downloads/Semesters/Internships/First Internship Front End Development By Internship Pakistan/Portfolio/myportfolio/src/images/c.png";
import python from "C:/Users/syusr/Downloads/Semesters/Internships/First Internship Front End Development By Internship Pakistan/Portfolio/myportfolio/src/images/python.png";
import react from "C:/Users/syusr/Downloads/Semesters/Internships/First Internship Front End Development By Internship Pakistan/Portfolio/myportfolio/src/images/React.png";
import css from "C:/Users/syusr/Downloads/Semesters/Internships/First Internship Front End Development By Internship Pakistan/Portfolio/myportfolio/src/images/css-3.png";
import js from "C:/Users/syusr/Downloads/Semesters/Internships/First Internship Front End Development By Internship Pakistan/Portfolio/myportfolio/src/images/java-script.png";
import csharp from "C:/Users/syusr/Downloads/Semesters/Internships/First Internship Front End Development By Internship Pakistan/Portfolio/myportfolio/src/images/csharp.png";
import html from "C:/Users/syusr/Downloads/Semesters/Internships/First Internship Front End Development By Internship Pakistan/Portfolio/myportfolio/src/images/html-5.png";

export default function Skills(props) {
  let maxSkill = 8;
  useEffect(() => {
    for (let i = 1; i <= maxSkill; i++) {
      let skill = document.querySelector(`.skill${i}`);
      if (skill) {
        skill.style.height = "180px";
        skill.style.width = "200px";
        skill.style.backgroundColor = "gray";
        skill.style.color = "white";

        skill.style.borderRadius = "20px";

        skill.addEventListener("mouseenter", () => {
          skill.style.transform = `translateY(-10px)`;
          skill.style.transition = `transform 0.5s linear`;
          skill.style.background = "linear-gradient(135deg, #3b82f6, #8b5cf6)";
          skill.style.boxShadow = "0 20px 20px 2px rgba(0, 0, 0, 0.3)";
        });
        skill.addEventListener("mouseleave", () => {
          skill.style.transform = `translateY(0px)`;
          skill.style.background = "gray";
          skill.style.boxShadow = "none";
        });
      }
    }
  });
  return (
    <div id="skillsDiv">
      <div className="aboutmainheading">{props.mainHeading}</div>
      <div className="divSkills">
        <div className="skill1">
          <div className="icon">
            <img src={python} />
          </div>
          <div className="skillName">Python</div>
        </div>
        <div className="skill2">
          <div className="icon">
            <img src={css} />
          </div>
          <div className="skillName">CSS</div>
        </div>
        <div className="skill3">
          <div className="icon">
            <img src={html} />
          </div>
          <div className="skillName">Html5</div>
        </div>
        <div className="skill4">
          <div className="icon">
            <img src={react} />
          </div>
          <div className="skillName">React</div>
        </div>
        <div className="skill5">
          <div className="icon">
            <img src={conly} />
          </div>
          <div className="skillName">C</div>
        </div>
        <div className="skill6">
          <div className="icon">
            <img src={c} />
          </div>
          <div className="skillName">C++</div>
        </div>
        <div className="skill7">
          <div className="icon">
            <img src={js} />
          </div>
          <div className="skillName">Java Script</div>
        </div>
        <div className="skill8">
          <div className="icon">
            <img src={csharp} />
          </div>
          <div className="skillName">C#</div>
        </div>
      </div>
    </div>
  );
}
