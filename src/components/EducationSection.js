import React from "react";

const EducationSection = ({ education }) => (
  <section>
    <h2>Education</h2>
    <ul>
      {education.map((edu, idx) => (
        <li key={idx}>
          <strong>{edu.degree}</strong> - {edu.school} <br />
          <em>{edu.period}</em>
        </li>
      ))}
    </ul>
  </section>
);

export default EducationSection;
