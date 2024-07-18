import React from 'react';
import './UserProfile.css'; // Import CSS file for styling

function UserProfile({ user }) {
  return (
    <div className="profile">
      <h1 className="username">{user.username}</h1>
      <p className="info"><strong>Age:</strong> {user.age}</p>
      <p className="info"><strong>College:</strong> {user.college}</p>

      <h2 className="section-title">Projects I'm Proud Of:</h2>
      <div className="projects">
        {user.projects.map((project, index) => (
          <div key={index} className="project">
            <h3>{project.name}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>

      <h2 className="section-title">Skills:</h2>
      <div className="skills">
        {user.skills.map((skill, index) => (
          <div key={index} className="skill">{skill}</div>
        ))}
      </div>

      <p className="note"><strong>Note to Teammates:</strong> {user.noteToTeammates}</p>

      <p className="social">
        <strong>LinkedIn:</strong> <a href={user.linkedin} target="_blank" rel="noopener noreferrer">Profile</a>
      </p>
      <p className="social">
        <strong>GitHub:</strong> <a href={user.github} target="_blank" rel="noopener noreferrer">Profile</a>
      </p>
    </div>
  );
}

export default UserProfile;
