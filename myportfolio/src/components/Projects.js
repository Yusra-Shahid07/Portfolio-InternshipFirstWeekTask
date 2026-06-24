import React from "react";

const projects = [
  {
    title: "StudyBuddy",
    sub: "AI-Powered Study Management System",
    desc: "Full-stack platform with RAG AI chatbot, pgvector semantic search, linear regression predictor, Chart.js analytics, and ACID-compliant CockroachDB schema with Views, CTEs & window functions.",
    tech: ["Node.js", "React", "CockroachDB", "Gemini AI", "pgvector", "Chart.js"],
    github: "https://github.com/YusraShahid07",
    featured: true,
  },
  {
    title: "DineX",
    sub: "DSA-Optimized Food Delivery System",
    desc: "Python/Flask app using Min-Heap, AVL Tree & Hash Table for priority ordering, menu search, and O(1) lookups. Dijkstra's algorithm improved route efficiency by 35%.",
    tech: ["Python", "Flask", "Dijkstra", "AVL Tree", "Min-Heap"],
    github: "https://github.com/YusraShahid07",
    featured: false,
  },
  {
    title: "MERN School System",
    sub: "Role-Based Academic Platform",
    desc: "Full MERN stack with JWT auth, role-based dashboards (Admin/Teacher/Student), attendance tracking, exam management, and RESTful API.",
    tech: ["React", "Node.js", "MongoDB", "JWT", "Express.js"],
    github: "https://github.com/YusraShahid07",
    featured: false,
  },
  {
    title: "USB Encryption Tool",
    sub: "Secure File Encryption",
    desc: "AES-CBC file encryption with bcrypt password hashing for secure key management. Built with Python and Flask.",
    tech: ["Python", "Flask", "AES-CBC", "bcrypt"],
    github: "https://github.com/YusraShahid07",
    featured: false,
  },
  {
    title: "Modest Aura",
    sub: "E-Commerce Desktop App",
    desc: "Role-based Windows Forms app for modest wear with Admin, Seller & Customer dashboards using C# and MySQL.",
    tech: ["C#", "MySQL", "Windows Forms"],
    github: "https://github.com/YusraShahid07",
    featured: false,
  },
];

export default function Projects() {
  return (
    <div className="section">
      <div className="section-header reveal">
        <span className="section-eyebrow">// what i've built</span>
        <h2 className="section-title">Projects</h2>
        <div className="section-line"></div>
      </div>
      <div className="projects-grid">
        {projects.map((p, i) => (
          <div className={`proj-card reveal ${p.featured ? "proj-featured" : ""}`} key={i} style={{ transitionDelay: `${i * 0.08}s` }}>
            {p.featured && <div className="proj-badge">⭐ Featured Project</div>}
            <h3 className="proj-title">{p.title}</h3>
            <p className="proj-sub">{p.sub}</p>
            <p className="proj-desc">{p.desc}</p>
            <div className="proj-tech">
              {p.tech.map((t, j) => <span className="tech-pill" key={j}>{t}</span>)}
            </div>
            <a href={p.github} target="_blank" rel="noreferrer" className="proj-link">
              <i className="fa-brands fa-github"></i> View on GitHub →
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}