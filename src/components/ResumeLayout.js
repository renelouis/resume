import React from "react";
import "./ResumeLayout.scss";

const ResumeLayout = ({ left, right, skills }) => (
  <div className="resume-layout">
    <header className="resume-header">
      <h1 className="resume-name">Rene Louis</h1>
      <h2 className="resume-title">Software Engineer</h2>
    </header>
    <div className="resume-content">
      <div className="resume-main">{left}</div>
      <div className="resume-side skills">{right}</div>
    </div>
    {/* For mobile, show skills between profile and experience */}
    <div className="resume-skills-mobile">{skills}</div>
  </div>
);

export default ResumeLayout;
