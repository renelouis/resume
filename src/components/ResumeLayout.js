import React from "react";
import "./ResumeLayout.scss";
import NavBar from "./NavBar";

const ResumeLayout = ({ left, right, skills, personalInfo }) => (
  <div className="resume-layout">
    <header className="resume-header">
      <h1 className="resume-name">{personalInfo.name}</h1>
      <h2 className="resume-title">{personalInfo.jobTitle}</h2>
    </header>
    <NavBar />
    <div className="resume-content">
      <div className="resume-main">{left}</div>
      <div className="resume-side skills">{right}</div>
    </div>
    {/* For mobile, show skills between profile and experience */}
    <div className="resume-skills-mobile">{skills}</div>
  </div>
);

export default ResumeLayout;
