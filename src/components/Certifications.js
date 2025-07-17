import React from "react";

const Certifications = ({ certifications, display }) => (
  <section className={`${display}`}>
    <h2>Certifications</h2>
    <ul>
      {certifications.map((certification, idx) => (
        <li key={idx}>
          <div>
            <strong>{certification.title}</strong>
          </div>
          <div>{certification.date}</div>
          <div>{certification.issuer}</div>
        </li>
      ))}
    </ul>
  </section>
);

export default Certifications;
