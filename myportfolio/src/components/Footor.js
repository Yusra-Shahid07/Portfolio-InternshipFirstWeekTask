import React from "react";

const navLinks = ["home", "about", "skills", "projects", "experience", "contact"];

const socials = [
  { ico: "fa-brands fa-linkedin-in", href: "https://www.linkedin.com/in/yusra-shahid-40a61725a" },
  { ico: "fa-brands fa-github", href: "https://github.com/Yusra-Shahid07" },
  { ico: "fa-solid fa-envelope", href: "https://mail.google.com/mail/?view=cm&fs=1&to=syusra841@gmail.com" },
  { ico: "fa-brands fa-whatsapp", href: "https://wa.me/923704018969" },
];

export default function Footer() {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-col footer-brand-col">
          <div className="footer-brand" onClick={() => scrollTo("home")} role="button" tabIndex={0}>
            YS<span className="brand-dot">.</span>
          </div>
          <p className="footer-tagline">Full Stack Developer · Open to opportunities</p>
        </div>

        <div className="footer-col">
          <h4 className="footer-heading">Navigate</h4>
          <ul className="footer-links">
            {navLinks.map((link) => (
              <li key={link}>
                <button className="footer-link" onClick={() => scrollTo(link)}>
                  {link.charAt(0).toUpperCase() + link.slice(1)}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-col">
          <h4 className="footer-heading">Connect</h4>
          <div className="footer-socials">
            {socials.map((s, i) => (
              <a key={i} href={s.href} target="_blank" rel="noreferrer" className="social-icon" aria-label={s.ico}>
                <i className={s.ico}></i>
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p className="footer-copy">© 2025 Yusra Shahid · Built with React.js</p>
        <button className="footer-top" onClick={() => scrollTo("home")}>
          <i className="fa-solid fa-arrow-up"></i> Back to Top
        </button>
      </div>
    </footer>
  );
}
