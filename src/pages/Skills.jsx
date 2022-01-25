import React from "react";

export const Skills = () => {
  return (
    <div className="preset-container">
      <h1 className="a-title">My Skills</h1>
      <p className="a-desc">
        I currently am cualified React Dev, using both basic and more complex
        tools and libraries.
      </p>
      <div className="small-container">

        <div className="container-card">
          <h3>Git {"&"} Github </h3>
          <p>Advanced Git and Github managment.
            <br/>
          </p>
        </div>

        <div className="container-card">
          <h3>HTML5 {"&"} CSS3 Course</h3>
          <p>Full advanced course</p>
          <ul>Topics:
            <li>Responsive design</li>
            <li>Bootstrap</li>
            <li>SASS</li>
            <li>SEO</li>
          </ul>
          <a href="https://www.coderhouse.com/certificados/6132c9f06674af03936bbf71">Certificate</a>
        </div>

        <div className="container-card">
          <h3>Javascript Course</h3>
        </div>

        <div className="container-card">
          <h3>ReactJS Course</h3>
        </div>

      </div>
    </div>
  );
};
