import React, { useState } from 'react';
import '../styles/AboutPage.css';

function AboutPage() {
  const [name, setName] = useState('');
  const [submittedName, setSubmittedName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedName(name);
    setName('');
  };

  return (
    <div className="about-page">
      <h1>About Us</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Enter your name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your Name"
          />
        </label>
        <button className="btn" type="submit">Submit</button>
      </form>
      {submittedName && <p>Thank you, {submittedName}!</p>}
    </div>
  );
}

export default AboutPage;

