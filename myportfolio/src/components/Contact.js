import React, { useEffect, useState } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [subject, setSubject] = useState("");

  useEffect(() => {
    const contactdivs = document.querySelectorAll(".contactdiv");

    const handleMouseEnter = (event) => {
      const contactDiv = event.currentTarget;
      const iconDiv = contactDiv.querySelector(".icondiv");
      const icon = contactDiv.querySelector(".icondiv i");

      if (iconDiv && icon) {
        if (!iconDiv.dataset.originalPaddingLeft) {
          iconDiv.dataset.originalPaddingLeft =
            window.getComputedStyle(iconDiv).paddingLeft;
          iconDiv.dataset.originalPaddingRight =
            window.getComputedStyle(iconDiv).paddingRight;
        }
        if (!icon.dataset.originalFontSize) {
          icon.dataset.originalFontSize =
            window.getComputedStyle(icon).fontSize;
        }

        const currentPaddingLeft =
          parseInt(iconDiv.dataset.originalPaddingLeft) || 9;
        const currentPaddingRight =
          parseInt(iconDiv.dataset.originalPaddingRight) || 9;
        const currentFontSize = parseInt(icon.dataset.originalFontSize) || 25;

        iconDiv.style.paddingLeft = currentPaddingLeft + 3 + "px";
        iconDiv.style.paddingRight = currentPaddingRight + 3 + "px";
        icon.style.fontSize = currentFontSize + 3 + "px";

        iconDiv.style.transition = "padding 0.3s ease";
        icon.style.transition = "font-size 0.3s ease";
      }
    };
    const handleMouseLeave = (event) => {
      const contactDiv = event.currentTarget;
      const iconDiv = contactDiv.querySelector(".icondiv");
      const icon = contactDiv.querySelector(".icondiv i");

      if (iconDiv && icon) {
        const originalPaddingLeft =
          iconDiv.dataset.originalPaddingLeft || "9px";
        const originalPaddingRight =
          iconDiv.dataset.originalPaddingRight || "9px";
        const originalFontSize = icon.dataset.originalFontSize || "25px";

        iconDiv.style.paddingLeft = originalPaddingLeft;
        iconDiv.style.paddingRight = originalPaddingRight;
        icon.style.fontSize = originalFontSize;
      }
    };

    contactdivs.forEach((div) => {
      div.addEventListener("mouseenter", handleMouseEnter);
      div.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      contactdivs.forEach((div) => {
        div.removeEventListener("mouseenter", handleMouseEnter);
        div.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);
  const handleEmailClick = () => {
    window.location.href = "mailto:syusra841@gmail.com";
  };

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

  const handleGitHubClick = () => {
    window.open("https://github.com/Yusra-Shahid07", "_blank");
  };

  const handleLocationClick = () => {
    window.open("https://www.google.com/maps/place/Lahore,+Pakistan", "_blank");
  };
  return (
    <div className="contactdivmain">
      <div className="aboutmainheading">Contact</div>
      <div className="contactmainwork">
        <div className="contactinfo">
          <div className="getintouchHeading">Get In Touch</div>
          <div className="getintouchpara">
            I'm always excited to take on new challenges and collaborate on
            interesting projects. Whether you need a complete website, want to
            improve an existing
            <br />
            one, or just have questions about web development, feel free to
            reach out.
          </div>
          <div className="contactdivs">
            <div className="contactdiv" onClick={handleEmailClick}>
              <div className="icondiv">
                <i className="fa-solid fa-envelope"></i>
              </div>
              <div className="icontextdiv">
                <p className="iconheading">Email</p>
                <p className="iconmtinfo">syusra841@gmail.com</p>
              </div>
            </div>
            <div className="contactdiv" onClick={handleLinkedInClick}>
              <div className="icondiv">
                <i className="fa-brands fa-linkedin-in"></i>
              </div>
              <div className="icontextdiv">
                <p className="iconheading">LinkedIn</p>
                <p className="iconmtinfo">Connect with me</p>
              </div>
            </div>
            <div className="contactdiv" onClick={handleWhatsAppClick}>
              <div className="icondiv">
                <i className="fa-brands fa-whatsapp"></i>
              </div>
              <div className="icontextdiv">
                <p className="iconheading">WhatsApp</p>
                <p className="iconmtinfo">Message Me Directly</p>
              </div>
            </div>
            <div className="contactdiv" onClick={handleGitHubClick}>
              <div className="icondiv">
                <i className="fa-brands fa-github"></i>
              </div>
              <div className="icontextdiv">
                <p className="iconheading">GitHub</p>
                <p className="iconmtinfo">View My Projects</p>
              </div>
            </div>
            <div className="contactdiv" onClick={handleLocationClick}>
              <div className="icondiv">
                <i className="fa-solid fa-location-dot"></i>
              </div>
              <div className="icontextdiv">
                <p className="iconheading">Location</p>
                <p className="iconmtinfo">Lahore, Pakistan</p>
              </div>
            </div>
          </div>
        </div>

        <div className="contactrightside">
          <div className="sendamessageHeading">Send a Message</div>
          <div className="contactitems">
            <div className="contactitem">
              <div className="contactheading">Name</div>
              <input
                type="text"
                placeholder="Enter your name"
                className="enter"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="contactitem">
              <div className="contactheading">Email</div>
              <input
                type="email"
                placeholder="Enter your email"
                className="enter"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="contactitem">
              <div className="contactheading">Subject</div>
              <input
                type="text"
                placeholder="What's this about"
                className="enter"
                onChange={(e) => setSubject(e.target.value)}
              />
            </div>
            <div className="contactitem">
              <div className="contactheading">Message</div>
              <textarea
                placeholder="Enter your message"
                className="enter enterMessage"
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>
          </div>
          <button
            className="btn btn-primary submitbutton"
            onClick={() => {
              if (name === "") {
                alert("Enter your name");
              } else if (email === "") {
                alert("Enter your email");
              } else if (!email.includes("@") || !email.includes(".")) {
                alert("Invalid Email");
              } else if (message === "") {
                alert("Enter your message");
              } else if (subject === "") {
                alert("Enter your subject");
              } else {
                const mailtoLink = `mailto:syusra841@gmail.com?subject=${encodeURIComponent(
                  subject
                )}&body=${encodeURIComponent(
                  `Name: ${name}\nEmail: ${email}\n\n${message}`
                )}`;
                window.location.href = mailtoLink;
              }
            }}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
