import React, { useEffect, useState } from "react";
import mypic from "C:/Users/syusr/Downloads/Semesters/Internships/First Internship Front End Development By Internship Pakistan/Portfolio/myportfolio/src/images/mypic.png";

export default function Home(props) {
  const [display, setDisplay] = useState("");
  const [index, setIndex] = useState(0);
  const [back, setBack] = useState(false);
  useEffect(() => {
    let timer;
    if (index < props.fullword.length && back === false) {
      timer = setTimeout(() => {
        setDisplay((prev) => prev + props.fullword[index]);
        setIndex((prev) => prev + 1);
      }, 100);
      return () => {
        clearTimeout(timer);
      };
    } else if (index === props.fullword.length && !back) {
      timer = setTimeout(() => {
        setBack(true);
      }, 100);
      return () => {
        clearTimeout(timer);
      };
    } else if (back && index > 0) {
      timer = setTimeout(() => {
        setDisplay((prev) => prev.slice(0, -1));
        setIndex((prev) => prev - 1);
      }, 100);
    } else if (back && index === 0) {
      timer = setTimeout(() => {
        setBack(false);
      }, 100);
    }
  }, [index, back]);
  const handleLinkedInClick = () => {
    window.open(
      "https://www.linkedin.com/in/yusra-shahid-40a61725a/",
      "_blank"
    );
  };

  const handleWhatsAppClick = () => {
    window.open(
      "https://wa.me/923704018969?text=Hi%20Yusra!%20I%20found%20your%20portfolio%20and%20wanted%20to%20connect.",
      "_blank"
    );
  };

  const handleInstragramClick = () => {
    window.open("https://www.instagram.com/yusra841h/", "_blank");
  };
  return (
    <div className="homediv">
      <div className="homemaincontent">
        <div className="mineimg">
          <img src={mypic} />
        </div>
        <div className="homemetext">
          <p id="yusraHeadingHome">
            Hi, I'm <br />
            <span className="namehighlight">{props.name}</span>
          </p>
          <p id="smallintro">
            And a <span id="webdeveloper">{display}</span>
          </p>
          <p>
            React learner & coding enthusiast, building web apps and exploring
            tech.
          </p>
        </div>
      </div>
      <div className="appbuttons">
        <i className="fa-brands fa-whatsapp" onClick={handleWhatsAppClick}></i>
        <i
          className="fa-brands fa-linkedin-in"
          onClick={handleLinkedInClick}
        ></i>
        <i
          className="fa-brands fa-instagram"
          onClick={handleInstragramClick}
        ></i>
      </div>
      <div className="buttons">
        <div className="cvbutton">
          <a href="/Yusra_Shahid_Resume.pdf" download>
            Download CV
          </a>
        </div>
      </div>
    </div>
  );
}
