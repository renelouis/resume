import React from "react";

const ExperienceSection = ({ experiences }) => (
  <section>
    <h2>Professional Experience</h2>
    <ul>
      {experiences.map((exp, idx) => (
        <li key={idx}>
          <strong>{exp.role}</strong> at {exp.company} <br />
          <em>{exp.period}</em>
          <p>{exp.description}</p>
        </li>
      ))}
    </ul>
  </section>
);

export default ExperienceSection;
