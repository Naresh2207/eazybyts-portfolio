import React from "react";
import { Link } from "react-router-dom";
import "../style/Home.css"; // Make sure this path matches your CSS file

const Home = () => {
  return (
    <div>
      {/* Background */}
      <div className="background"></div>

      {/* Personal */}
      <div className="personal">
        <img src="/Dark-Black-pfp.jpg" alt="profile pic" />
        <h1>NARESH</h1>
        <h3>Frontend Developer</h3>
      </div>

      {/* Sidebar */}
      <div className="sidebar">
        <ul>
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link to="/about">ABOUT ME</Link>
          </li>
          <li>
            <Link to="/projects">PROJECTS</Link>
          </li>
          <li>
            <Link to="/blog">BLOG</Link>
          </li>
          <li>
            <Link to="/contact">CONTACT</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
