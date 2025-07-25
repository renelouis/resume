import React, { useEffect, useRef, useState } from "react";
import "./ResumeLayout.scss";
import NavBar from "./NavBar";

const navSections = [
  { name: "Profile", anchor: "profile" },
  { name: "Certifications", anchor: "certifications" },
  { name: "Skills", anchor: "skills" },
  { name: "Experience", anchor: "experience" },
  { name: "Education", anchor: "education" },
];

const ResumeLayout = ({ left, right, skills, personalInfo }) => {
  const headerRef = useRef(null);
  const [showHamburger, setShowHamburger] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!headerRef.current) return;
      if (window.scrollY > 30) {
        headerRef.current.classList.add("shrink");
        setShowHamburger(true);
      } else {
        headerRef.current.classList.remove("shrink");
        setShowHamburger(false);
        setMenuOpen(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // For mobile: always show hamburger, never NavBar
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 700) {
        setShowHamburger(true);
      } else if (window.scrollY <= 30) {
        setShowHamburger(false);
      }
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleMenuClick = (anchor) => {
    const el = document.getElementById(anchor);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      el.classList.add("zoom-animate");
      setTimeout(() => {
        el.classList.remove("zoom-animate");
      }, 500);
      setMenuOpen(false);
    }
  };

  return (
    <div className="resume-layout">
      <header ref={headerRef} className="resume-header sticky-header">
        <section className="resume-header-nav">
          {showHamburger && (
            <div className="header-hamburger-wrapper">
              <button
                className="header-hamburger"
                aria-label="Open menu"
                onClick={() => setMenuOpen((open) => !open)}
              >
                ☰
              </button>
              {menuOpen && (
                <ul className="header-hamburger-menu">
                  {navSections.map((section) => (
                    <li key={section.anchor}>
                      <button
                        className="header-hamburger-link"
                        onClick={() => handleMenuClick(section.anchor)}
                      >
                        {section.name}
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          )}
        </section>
        <section className="resume-header-main">
          <h1 className="resume-name">{personalInfo.name}</h1>
          <h2 className="resume-title">{personalInfo.jobTitle}</h2>
        </section>
      </header>
      {/* Hide NavBar if hamburger is shown */}
      {!showHamburger && <NavBar />}
      <div className="resume-content">
        <div className="resume-main">{left}</div>
        <div className="resume-side skills">{right}</div>
      </div>
      {/* For mobile, show skills between profile and experience */}
      <div className="resume-skills-mobile">{skills}</div>
    </div>
  );
};

export default ResumeLayout;
