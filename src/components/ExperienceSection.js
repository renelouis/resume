import React from "react";
import "./Experience.scss";

const ExperienceSection = ({ experiences }) => (
  <section className="experience-section">
    <h2>Professional Experience</h2>
    <ul>
      {experiences.map((exp, idx) => (
        <li key={idx}>
          <strong>{exp.role}</strong> at {exp.company} <br />
          <em>{exp.period}</em>
          <p>{exp.description}</p>
          <ul className="experience-details">
            {experiences[idx].details.map((item, itemIdx) => (
              <li key={itemIdx}>{item}</li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  </section>
);

export default ExperienceSection;
