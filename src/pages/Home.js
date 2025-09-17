// File: Home.js
// Student Name: Rexy Sara Raju
// Student ID: 301514637
// Date: Sept 2025

import { Link } from "react-router-dom";

function Home() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Welcome to My Portfolio</h1>
      <p>
       Hi, I’m Rexy Sara Raju. I’m passionate about web development and love building
        modern web applications.
      </p>
      <Link to="/about">
        <button className="btn">About Me</button>
      </Link>
    </div>
  );
}

export default Home;
