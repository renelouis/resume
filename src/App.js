import "./App.css";
import "./components/skills/SkillsSection.scss";
import ResumeLayout from "./components/ResumeLayout";
import ProfileSection from "./components/ProfileSection";
import ExperienceSection from "./components/ExperienceSection";
import EducationSection from "./components/EducationSection";
import SkillsSection from "./components/skills/SkillsSection";

function App() {
  // Placeholder data, to be replaced with parsed content from rene_louis_cv.docx
  const profile =
    "Software engineer with experience in Java, Spring Boot, Kafka, GCP, etc. Certified GCP Professional Data engineer and GCP Associate Cloud Engineer. Passionate about building scalable and efficient systems.";
  const experiences = [
    {
      role: "Senior Software Engineer",
      company: "Tech Company",
      period: "2021 - Present",
      description: "Lead backend development for cloud-based solutions.",
    },
    {
      role: "Software Engineer",
      company: "Another Company",
      period: "2018 - 2021",
      description: "Developed scalable microservices and data pipelines.",
    },
  ];
  const education = [
    {
      degree: "MSc Computer Science",
      school: "University Name",
      period: "2016 - 2018",
    },
    {
      degree: "BSc Information Technology",
      school: "Another University",
      period: "2012 - 2016",
    },
  ];
  const skills = [
    "Java",
    "Spring Boot",
    "Kafka",
    "GCP",
    "Python",
    "React",
    "SQL",
    "Docker",
  ];

  return (
    <ResumeLayout
      left={
        <>
          <ProfileSection profile={profile} />
          <div className="resume-skills-mobile skills">
            <SkillsSection skills={skills} />
          </div>
          <ExperienceSection experiences={experiences} />
          <EducationSection education={education} />
        </>
      }
      right={
        <div className={"skills-desktop skills"}>
          <SkillsSection skills={skills} />
        </div>
      }
    />
  );
}

export default App;
