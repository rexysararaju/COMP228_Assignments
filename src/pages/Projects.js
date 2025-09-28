// File: Projects.js
// Student Name: Rexy Sara Raju
// Student ID: 301514637
// Date: Sept 2025

function Projects() {
  // List of projects with title, description, and image for each
  const projectList = [
    {
      title: "Food Delivery Database",
      description: "A database system designed in Oracle SQL for managing food orders. Includes ERD, sample data, and business queries.  My Role: I designed the database schema, normalized the tables, and wrote SQL queries to handle ordering and reporting. Outcome: Delivered a fully functional backend database ready for integration with a food delivery app.",
      image: "/database.jpg"
    },
    {
      title: "Swim Meet Management System",
      description: "A C# desktop app to register swimmers, track meets, and manage events.My Role: I developed the core object-oriented logic, built the registration and event modules, and implemented JSON data storage. Outcome: The system automated swimmer management and simplified event tracking.",
      image: "/swimmeet.jpg"
    },
    {
      title: "Personal Portfolio",
      description: "A React-based portfolio to showcase my work and assignments.My Role: I built the site from scratch using React, implemented routing for multiple pages, and deployed it online. Outcome: A professional web presence to demonstrate my skills and projects to potential employers.",
      image: "/portfolio.png"
    }
  ];

  return (
    <div className="page">
      <h1>My Projects</h1>
      <div className="projects">
        {projectList.map((project, index) => (
          <div key={index} className="project-card">
            <img src={project.image} alt={project.title} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
