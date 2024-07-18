import React, { useState } from 'react'; // Ensure useState is imported only once

import './Login.css'; // Import CSS file for styling

function Login({ setUser }) {
  const [formData, setFormData] = useState({
    username: '',
    age: '',
    college: '',
    linkedin: '',
    github: '',
    projects: [],
    skills: '',
    noteToTeammates: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser(formData);
  };

  return (
    <div className="login">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Username:</label>
          <input type="text" name="username" value={formData.username} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Age:</label>
          <input type="number" name="age" value={formData.age} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>College:</label>
          <input type="text" name="college" value={formData.college} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>LinkedIn Profile:</label>
          <input type="text" name="linkedin" value={formData.linkedin} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>GitHub Profile:</label>
          <input type="text" name="github" value={formData.github} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Projects I'm Proud Of:</label>
          <textarea name="projects" value={formData.projects} onChange={handleChange} rows="4" required />
        </div>
        <div className="form-group">
          <label>Skills:</label>
          <input type="text" name="skills" value={formData.skills} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Note to Teammates:</label>
          <textarea name="noteToTeammates" value={formData.noteToTeammates} onChange={handleChange} rows="4" required />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Login;
