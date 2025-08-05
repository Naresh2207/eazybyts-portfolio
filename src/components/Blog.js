import React from "react";
import { Link } from "react-router-dom"; // Import Link
import "../style/Blog.css"; // Keep your CSS file

const Blog = () => {
  return (
    <div className="blog">
      <div className="header">
        <h1>My Blog</h1>
        <p>Sharing my learning and projects</p>
      </div>

      <div className="blog-container">
        <div className="blog-post">
          <h2>How I Built My Portfolio Website</h2>
          <p className="date">August 4, 2025</p>
          <p>
            I created my portfolio using HTML, CSS, and React. It was a great
            learning experience.
          </p>
        </div>

        <div className="blog-post">
          <h2>Learning JavaScript Basics</h2>
          <p className="date">July 28, 2025</p>
          <p>
            JavaScript is the brain of the web. Here’s how I understood
            variables, loops, and functions.
          </p>
        </div>
      </div>

      {/* Replace anchor with Link */}
      <Link to="/">
        <button>Back</button>
      </Link>
    </div>
  );
};

export default Blog;
