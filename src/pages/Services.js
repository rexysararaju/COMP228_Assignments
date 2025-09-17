// File: Services.js
// Student Name: Rexy Sara Raju
// Student ID: 301514637
// Date: Sept 2025

function Services() {
  const services = [
    { title: "Web Development", description: "Building responsive and modern websites using HTML, CSS, JavaScript, and React." },
    { title: "Mobile App Development", description: "Designing mobile-friendly apps and understanding cross-platform development." },
    { title: "Database Systems", description: "Designing relational databases and writing queries in SQL to manage data." },
    { title: "Programming", description: "Developing efficient solutions in languages like C#, Python, and JavaScript." }
  ];

  return (
    <div className="page">
      <h1>My Services</h1>
      <div className="services">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
