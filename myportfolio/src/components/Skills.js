import React from "react";

const cats = [
  { name: "Frontend", tags: ["React", "JavaScript", "HTML5", "CSS3"] },
  { name: "Backend", tags: ["Node.js", "Express.js", "Flask", "Python", "REST APIs"] },
  { name: "Databases", tags: ["CockroachDB", "MongoDB", "MySQL", "PostgreSQL", "Neo4j"] },
  { name: "AI & ML", tags: ["Gemini AI", "pgvector", "RAG Pipeline", "Embeddings", "Linear Regression"] },
  { name: "Languages", tags: ["Python", "JavaScript", "C++", "C#", "C"] },
  { name: "Tools", tags: ["Git", "GitHub", "Postman", "VS Code", "Vercel"] },
];

export default function Skills() {
  return (
    <div className="section-full skills-full">
      <div className="skills-inner">
        <div className="section-header reveal">
          <span className="section-eyebrow">// what i use</span>
          <h2 className="section-title">Skills</h2>
          <div className="section-line"></div>
        </div>
        <div className="skills-grid">
          {cats.map((c, i) => (
            <div className="skill-card reveal" key={i} style={{ transitionDelay: `${i * 0.08}s` }}>
              <div className="skill-head">
                <span className="skill-name">{c.name}</span>
              </div>
              <div className="skill-tags">
                {c.tags.map((t, j) => <span className="skill-tag" key={j}>{t}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}