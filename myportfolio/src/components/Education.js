import React from "react";

export default function Education() {
  return (
    <div className="section">
      <div className="section-header reveal">
        <span className="section-eyebrow">// where i studied</span>
        <h2 className="section-title">Education</h2>
        <div className="section-line"></div>
      </div>
      <div className="edu-card reveal">
        <div className="edu-left">
          <div className="edu-degree">Bachelor of Science in Computer Science</div>
          <div className="edu-uni">University of Engineering & Technology, Lahore</div>
          <div className="edu-detail">Batch 2024 – 2028 &nbsp;·&nbsp; CGPA 3.4 / 4.0</div>
        </div>
        <div className="edu-right">
          <div className="edu-badge">In Progress</div>
        </div>
      </div>
    </div>
  );
}