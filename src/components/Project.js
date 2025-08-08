import React from "react";
import { Link } from "react-router-dom";
import "../style/Project.css";

const Project = () => {
  return (
    <>
      <div className="wrapproject">
        {/* Back Button */}
        <Link to="/">
          <button>Back</button>
        </Link>

        <div className="heading">
          <p>Some Of My Recent Works</p>
          <h1>PROJECTS</h1>
        </div>
        <hr />
        <div className="bdy">
          {/* Project 1 */}
          <div className="bdy1">
            <img src="/coffee logo.avif" alt="project image" />

            <h1>Figma Coffee Website</h1>
            <p>
              The Coffee Website project is a responsive, visually appealing
              landing page inspired by a Figma design. It showcases a modern
              layout with sections for featured products, brand story, and
              customer engagement. Built using HTML and CSS, the site reflects a
              clean design structure, smooth user experience, and attention to
              detail in translating a static Figma design into a functional
              webpage.
            </p>

            <a
              href="/figma-project/main-project.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button>Click Here</button>
            </a>
          </div>

          {/* Project 2 */}
          <div className="bdy2">
            <img src="/proofreading project.png" alt="project image" />

            <h1>Professional Services Website</h1>
            <p>
              We offer professional editing and proofreading services to help
              improve the quality of your writing. Whether it’s for a document,
              website, or project, we carefully check for grammar, spelling,
              punctuation, and clarity. Our goal is to make your content clear,
              polished, and professional, while keeping your original message
              intact.
            </p>

            <a
              href="/figma-project-2/project.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button>Click Here</button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
