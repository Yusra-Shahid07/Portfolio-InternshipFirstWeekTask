import React from "react";
import mypic from "C:/Users/syusr/Downloads/Semesters/Internships/First Internship Front End Development By Internship Pakistan/Portfolio/myportfolio/src/images/mypic.png";
export default function About(props) {
  return (
    <div id="aboutdiv">
      <div className="aboutmainheading">{props.mainHeading}</div>
      <div className="aboutmaincontent">
        <div className="aboutmetext">
          <p>
            I'm Yusra Shahid, a BS Computer Science student with a strong
            interest in web development and a passion for coding. I enjoy
            building interactive, user-friendly web applications and bringing
            creative ideas to life through code. Currently focused on learning
            React, I'm developing a solid foundation in front-end development.
            Beyond that, I’m also exploring exciting fields like cybersecurity
            and artificial intelligence (AI), both of which I hope to dive
            deeper into as my journey in tech continues. With a mindset of
            continuous learning, I actively seek out opportunities through
            personal projects, internships, and emerging technologies to sharpen
            my skills and grow as a developer. My aim is to become a versatile
            developer who builds impactful and meaningful tech solutions.
          </p>
        </div>
        <div className="divsabout">
          <div className="aboutsmalldiv">
            <span class="emoji">🧠</span>
            <br />
            <span class="iconlowerheading"> Web Development</span>
            <br />
            Focused on building responsive interactive web applications using
            modern front-end technologies like React.
          </div>
          <div className="aboutsmalldiv">
            <span class="emoji">💻</span>
            <br />
            <span class="iconlowerheading">Programming Skills</span> <br />
            Proficient in Html, CSS, C, C++, C#, Python, JavaScript and React
            blending logic with creativity to bring ideas to life.
          </div>
          <div className="aboutsmalldiv">
            <span class="emoji">🔐</span>
            <br />
            <span class="iconlowerheading"> Cybersecurity Exploration</span>
            <br />
            Learning secure coding practices and the fundamentals of
            cybersecurity to build safer applications.
          </div>
          <div className="aboutsmalldiv">
            <span class="emoji">🚀</span>
            <br />
            <span class="iconlowerheading"> Tech Growth Mindset</span>
            <br />
            Driven by curiosity and continuous learning — always aiming to grow
            as a well-rounded, adaptable developer.
          </div>
        </div>
      </div>
    </div>
  );
}
