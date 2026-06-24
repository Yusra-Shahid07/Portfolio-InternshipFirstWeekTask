import React from "react";

const exps = [
  {
    role: "Teaching Assistant",
    org: "University of Engineering & Technology, Lahore",
    period: "Dec 2025 – Apr 2026",
    type: "Academic",
    points: [
      "Conducted lab sessions for 100+ students in Programming Fundamentals & OOP",
      "Mentored students on debugging and problem-solving",
      "Evaluated assignments with structured feedback",
    ],
  },
  {
    role: "Cybersecurity Intern",
    org: "National Centre of Artificial Intelligence, UET",
    period: "Oct – Nov 2025",
    type: "Internship",
    points: [
      "Vulnerability assessment and network security protocols",
      "Web application security testing",
    ],
  },
  {
    role: "Frontend Development Intern",
    org: "Internship Pakistan",
    period: "Aug – Sep 2025",
    type: "Internship",
    points: [
      "Built responsive interfaces using HTML, CSS & JavaScript",
      "Optimized page load times by 30% through code refactoring",
    ],
  },
];

const certs = [
  { ico: "🏆", t: "SQL Certificate", s: "HackerRank" },
  { ico: "🏆", t: "JavaScript Certificate", s: "SoloLearn" },
  { ico: "🎯", t: "AI Web Hackathon Participant", s: "UET Lahore" },
  { ico: "🎯", t: "ITEC-25 Coding Competition", s: "UET Lahore" },
];

export default function Experience() {
  return (
    <div className="section-full exp-full">
      <div className="exp-inner">
        <div className="section-header reveal">
          <span className="section-eyebrow">// where i've worked</span>
          <h2 className="section-title">Experience</h2>
          <div className="section-line"></div>
        </div>
        <div className="exp-layout">
          <div className="timeline">
            {exps.map((e, i) => (
              <div className="tl-item reveal" key={i}>
                <div className="tl-dot"></div>
                <div className="tl-card">
                  <div className="tl-head">
                    <div>
                      <div className="tl-role">{e.role}</div>
                      <div className="tl-org">{e.org}</div>
                    </div>
                    <div className="tl-meta">
                      <span className="tl-badge">{e.type}</span>
                      <span className="tl-period">{e.period}</span>
                    </div>
                  </div>
                  <ul className="tl-points">
                    {e.points.map((pt, j) => <li key={j}>{pt}</li>)}
                  </ul>
                </div>
              </div>
            ))}
          </div>
          <div className="certs-col reveal">
            <h3>Certifications & Achievements</h3>
            {certs.map((c, i) => (
              <div className="cert-item" key={i}>
                <span className="cert-ico">{c.ico}</span>
                <div>
                  <div className="cert-t">{c.t}</div>
                  <div className="cert-s">{c.s}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}