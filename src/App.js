import "./components/skills/SkillsSection.scss";
import ResumeLayout from "./components/ResumeLayout";
import ProfileSection from "./components/ProfileSection";
import ExperienceSection from "./components/ExperienceSection";
import EducationSection from "./components/EducationSection";
import SkillsSection from "./components/skills/SkillsSection";
import resumeContent from "./content/resumeContent.json";
import Certifications from "./components/Certifications";

function App() {
  // Placeholder data, to be replaced with parsed content from rene_louis_cv.docx
  const personalInfo = resumeContent.personal;
  const profile = resumeContent.summary || "Brief profile summary.";
  const experiences = resumeContent.experiences;
  const education = resumeContent.education || [];
  const skills = resumeContent.skills || [];
  const certifications = resumeContent.certifications || [];

  return (
    <ResumeLayout
      personalInfo={personalInfo}
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
          <Certifications certifications={certifications} />
        </div>
      }
    />
  );
}

export default App;
