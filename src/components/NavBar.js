import React, { useState } from "react";
import { Link, Element, animateScroll as scroll } from "react-scroll";
import "./NavBar.scss";

const sections = [
  { name: "Profile", anchor: "profile" },
  { name: "Certifications", anchor: "certifications" },
  { name: "Skills", anchor: "skills" },
  { name: "Experience", anchor: "experience" },
  { name: "Education", anchor: "education" },
];

function NavBar() {
  const [open, setOpen] = useState(false);

  const handleNavClick = (anchor) => {
    const el = document.getElementById(anchor);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      el.classList.add("zoom-animate");
      setTimeout(() => {
        el.classList.remove("zoom-animate");
      }, 500); // match animation duration
      setOpen(false);
    }
  };

  return (
    <nav className="navbar">
      <button
        className="navbar-toggle"
        onClick={() => setOpen((prev) => !prev)}
        aria-label="Toggle navigation"
      >
        ☰
      </button>
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
