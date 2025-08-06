import React from "react";

export default function Footor() {
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
    <div id="footermaindiv">
      <div className="footercontent">
        <div className="myNameatFooter">Yusra Shahid</div>
        <div className="madewith">Made with ❤️ using React.js</div>
        <div className="copyright">
          © 2025 Yusra Shahid. All rights reserved.
        </div>
      </div>
      <div
        className="buttontotop"
        onClick={(e) => {
          e.preventDefault();
          scrollToSection("home");
        }}
      >
        Back to Top
      </div>
    </div>
  );
}
