import React from "react";
import { Link } from "react-router-dom";
import "../style/About.css"; // Make sure the path matches your project structure

const About = () => {
  return (
    <div>
      {/* BACK button using Link */}
      <Link to="/">
        <button>BACK</button>
      </Link>

      <div className="body">
        {/* Image */}
        <div className="image">
          <img src="/avatar2.jpg" alt="about" />
        </div>

        {/* About Me */}
        <div className="about">
          <h1>Hello!</h1>
          <h1>I'm Naresh.</h1>

          <p>
            I am a Computer Science graduate with a strong foundation in web
            development. I have successfully completed a Frontend Development
            program, gaining hands-on experience in building responsive and
            user-friendly websites using HTML and CSS. One of my key projects
            involved converting a Figma design into a fully functional webpage,
            showcasing my attention to detail and design accuracy. I am
            passionate about writing clean, efficient code and continuously
            enhancing my skills to contribute effectively to modern web
            development projects.
          </p>

          <h2>Coding Languages I've Known</h2>
          <ul>
            <li>HTML</li>
            <li>CSS (Cascading Stylesheet)</li>
            <li>JavaScript (Basics)</li>
            <li>Python (Basics)</li>
            <li>SQL</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
