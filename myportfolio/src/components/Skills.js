import React from "react";

const cats = [
  {
    name: "Frontend",
    icon: "fa-solid fa-laptop-code",
    tags: [
      { name: "React", icon: "fa-brands fa-react" },
      { name: "JavaScript", icon: "fa-brands fa-js" },
      { name: "HTML5", icon: "fa-brands fa-html5" },
      { name: "CSS3", icon: "fa-brands fa-css3-alt" },
    ],
  },
  {
    name: "Backend",
    icon: "fa-solid fa-server",
    tags: [
      { name: "Node.js", icon: "fa-brands fa-node-js" },
      { name: "Express.js", icon: "fa-solid fa-bolt" },
      { name: "Flask", icon: "fa-solid fa-flask" },
      { name: "Python", icon: "fa-brands fa-python" },
      { name: "REST APIs", icon: "fa-solid fa-diagram-project" },
    ],
  },
  {
    name: "Databases",
    icon: "fa-solid fa-database",
    tags: [
      { name: "CockroachDB", icon: "fa-solid fa-database" },
      { name: "MongoDB", icon: "fa-solid fa-leaf" },
      { name: "MySQL", icon: "fa-solid fa-database" },
      { name: "PostgreSQL", icon: "fa-solid fa-database" },
      { name: "Neo4j", icon: "fa-solid fa-circle-nodes" },
    ],
  },
  {
    name: "AI & ML",
    icon: "fa-solid fa-brain",
    tags: [
      { name: "Gemini AI", icon: "fa-solid fa-robot" },
      { name: "pgvector", icon: "fa-solid fa-vector-square" },
      { name: "RAG Pipeline", icon: "fa-solid fa-diagram-project" },
      { name: "Embeddings", icon: "fa-solid fa-layer-group" },
      { name: "Linear Regression", icon: "fa-solid fa-chart-line" },
    ],
  },
  {
    name: "Languages",
    icon: "fa-solid fa-terminal",
    tags: [
      { name: "Python", icon: "fa-brands fa-python" },
      { name: "JavaScript", icon: "fa-brands fa-js" },
      { name: "C++", icon: "fa-solid fa-code" },
      { name: "C#", icon: "fa-solid fa-code" },
      { name: "C", icon: "fa-solid fa-code" },
    ],
  },
  {
    name: "Tools",
    icon: "fa-solid fa-toolbox",
    tags: [
      { name: "Git", icon: "fa-brands fa-git-alt" },
      { name: "GitHub", icon: "fa-brands fa-github" },
      { name: "Postman", icon: "fa-solid fa-paper-plane" },
      { name: "VS Code", icon: "fa-solid fa-code" },
      { name: "Vercel", icon: "fa-solid fa-cloud" },
    ],
  },
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
                <span className="skill-icon"><i className={c.icon}></i></span>
                <span className="skill-name">{c.name}</span>
              </div>
              <div className="skill-tags">
                {c.tags.map((t, j) => (
                  <span className="skill-tag" key={j}>
                    <i className={t.icon}></i> {t.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}