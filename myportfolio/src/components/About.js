import React from "react";

const stats = [
  { num: "3.4", lbl: "CGPA", sub: "out of 4.0" },
  { num: "5+", lbl: "Projects", sub: "built & deployed" },
  { num: "3", lbl: "Internships", sub: "completed" },
  { num: "2+", lbl: "Years", sub: "of coding" },
];

export default function About() {
  return (
    <div className="about-section">
      <div className="section-header reveal">
        <span className="section-eyebrow">// who i am</span>
        <h2 className="section-title">About Me</h2>
        <div className="section-line"></div>
      </div>
      <div className="about-body-wrap reveal">
        <p>
          I'm <strong>Yusra Shahid</strong>, a Full Stack Developer specializing in React, Node.js and Python —
          building production-ready applications that solve real problems, not just toy projects.
        </p>
        <p>
          My flagship project <strong>StudyBuddy</strong> features a complete RAG AI pipeline,
          semantic search with pgvector, ML-based predictions, and ACID-compliant CockroachDB
          transactions — integrated with Google Gemini AI.
        </p>
        <p>
          I've served as a <strong>Teaching Assistant</strong> for 100+ students, completed internships
          in Cybersecurity and Frontend Development, and I'm actively seeking remote full-stack opportunities.
        </p>
      </div>
      <div className="about-stats-row reveal">
        {stats.map((s, i) => (
          <div className="about-stat-card" key={i}>
            <div className="about-stat-num">{s.num}</div>
            <div className="about-stat-lbl">{s.lbl}</div>
            <div className="about-stat-sub">{s.sub}</div>
          </div>
        ))}
      </div>
    </div>
  );
}