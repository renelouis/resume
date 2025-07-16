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
          <ul>
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
