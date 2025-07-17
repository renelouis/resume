import React from "react";
import "./SkillsSection.scss";

const SkillsSection = ({ skills, display }) => (
  <section className={`skills ${display}`}>
    <div className="skills-flex">
      <h2>Skills</h2>
      <ul>
        {skills.map((skill, idx) => (
          <li key={idx}>{skill}</li>
        ))}
      </ul>
    </div>
  </section>
);

export default SkillsSection;
