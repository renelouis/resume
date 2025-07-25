import React from "react";

const ProfileSection = ({ profile }) => (
  <section id="profile" className="profile-section">
    <h2>Profile</h2>
    <p>{profile}</p>
  </section>
);

export default ProfileSection;
