// File: Projects.js
// Student Name: Rexy Sara Raju
// Student ID: 301514637
// Date: Sept 2025

function Projects() {
  const projectList = [
    {
      title: "Food Delivery Database",
      description: "A database system designed in Oracle SQL for managing food orders. Includes ERD, sample data, and business queries.",
      image: "https://via.placeholder.com/150"
    },
    {
      title: "Swim Meet Management System",
      description: "A C# desktop app to register swimmers, track meets, and manage events.",
      image: "https://via.placeholder.com/150"
    },
    {
      title: "Personal Portfolio",
      description: "A React-based portfolio to showcase my work and assignments.",
      image: "https://via.placeholder.com/150"
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
