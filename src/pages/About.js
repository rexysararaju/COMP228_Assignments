// File: About.js
// Student Name: Rexy Sara Raju
// Student ID: 301514637
// Date: Sept 2025

function About() {
  return (
    <div className="page about-page">
      <h1>About Me</h1>
      <img 
        src="/protfolioPic.jpg" 
        alt="My Portrait"
        className="about-img"
      />
      <p>
        Hi, my name is Rexy Sara Raju. I am a software engineering student passionate 
        about building modern web applications. I enjoy working with React, JavaScript, 
        and databases.
      </p>

      <p>
        <a href="/Rexy_Sara_Raju_Resume.pdf" target="_blank" rel="noopener noreferrer" className="btn">
          📄 View My Resume
        </a>
      </p>
    </div>
  );
}

export default About;
