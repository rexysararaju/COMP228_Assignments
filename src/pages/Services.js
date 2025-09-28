// File: Services.js
// Student Name: Rexy Sara Raju
// Student ID: 301514637
// Date: Sept 2025

function Services() {
  // Array of services offered, each with a title, description, and image
  const services = [
    { 
      title: "Web Development", 
      description: "Building responsive and modern websites using HTML, CSS, JavaScript, and React.",
      image: "/Web_development.jpg"
    },
    { 
      title: "Mobile App Development", 
      description: "Designing mobile-friendly apps and understanding cross-platform development.",
      image: "/Mobile.jpg"
    },
    { 
      title: "Database Systems", 
      description: "Designing relational databases and writing queries in SQL to manage data.",
      image: "/database.jpg"
    },
    { 
      title: "Programming", 
      description: "Developing efficient solutions in languages like C#, Python, and JavaScript.",
      image: "/programming.jpg"
    }
  ];

  return (
    <div className="page">
      <h1>My Services</h1>
      <div className="services">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <img 
              src={service.image} 
              alt={service.title} 
              className="service-img" 
            />
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
