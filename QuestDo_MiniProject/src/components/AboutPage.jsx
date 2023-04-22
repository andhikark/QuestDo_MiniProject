import React from "react";
import "../styles/About.css";

function About() {
  return (
    <div className="about-container">
      <div className="about-header">
        <div className="about-title">
          <div className="about-rectangle">
            <h2>About</h2>
          </div>
        </div>
      </div>
      <div className="about-content">
        <p>
          This website was made by Putu Andhika Restu Kurnia as a requirement from Web Development Course. Feel free to contact me through my email <a href="mailto:putuandhika.rest@mail.kmutt.ac.th">putuandhika.rest@mail.kmutt.ac.th</a> if you have any suggestions regarding this website.
        </p>
      </div>
    </div>
  );
}

export default About;
