import React from "react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-brand">YS<span className="brand-dot">.</span></div>
        <p className="footer-text">Built with React.js — Yusra Shahid © 2025</p>
        <button className="back-to-top" onClick={() => document.getElementById("home")?.scrollIntoView({ behavior: "smooth" })}>
          ↑ Back to Top
        </button>
      </div>
    </footer>
  );
}