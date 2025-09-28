// File: Education.js
// Student Name: Rexy Sara Raju
// Student ID: 301514637
// Date: Sept 2025

function Education() {
  // List of educational qualifications with details for each program
  const educationList = [
    {
      institution: "Centennial College",
      degree: "Diploma in Software Engineering Technician",
      year: "2023 - 2025",
      details:
        "Focused on full-stack web development, database systems, and cloud computing. Built multiple academic projects using React, C#, SQL, and Node.js."
    },
    {
      institution: "Online Certification – FreeCodeCamp",
      degree: "Responsive Web Design Certification",
      year: "2024",
      details:
        "Completed over 300 hours of coursework on HTML5, CSS3, and responsive web development techniques."
    },
    {
      institution: "Coursera – University of Michigan",
      degree: "Python for Everybody Specialization",
      year: "2023",
      details:
        "Learned Python fundamentals, APIs, and data handling techniques through a hands-on specialization series."
    }
  ];

  return (
    <div className="page education-page">
      <h1>Education</h1>
      <div className="education-list">
        {educationList.map((edu, index) => (
          <div key={index} className="education-card">
            <h2>{edu.degree}</h2>
            <h3>{edu.institution}</h3>
            <p><strong>Year:</strong> {edu.year}</p>
            <p>{edu.details}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Education;
