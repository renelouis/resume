import React, { useState } from "react";
import { Link } from "react-scroll";
import "./NavBar.scss";

const sections = [
  { name: "Profile", anchor: "profile" },
  { name: "Certifications", anchor: "certifications" },
  { name: "Skills", anchor: "skills" },
  { name: "Experience", anchor: "experience" },
  { name: "Education", anchor: "education" },
  // { name: "Contact", anchor: "contact" }, // todo: Add contact section
  // { name: "Download", anchor: "download" }, //TODO: Add download section
];

function NavBar() {
  const [open] = useState(false);

  return (
    <nav className="navbar">
      <ul className={`navbar-list${open ? " open" : ""}`}>
        {sections.map((section) => (
          <li key={section.anchor}>
            <Link
              to={`${section.anchor}`}
              smooth={true}
              duration={500}
              //   className="navbar-link"
              //   href={`#${section.anchor}`}
              //   onClick={() => handleNavClick(section.anchor)}
            >
              {section.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default NavBar;
