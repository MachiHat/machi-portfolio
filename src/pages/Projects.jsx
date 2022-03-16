import React from "react";

export const Projects = () => {
  return (
    <div className="preset-container">
      <h1 className="a-title">Previous Projects</h1>
      <p className="a-description">
        This section is looking kinda empty... to solve it click{" "}
        <a className="common-link" href="/contact">
          THIS
        </a>{" "}
      </p>
      <hr />
      <div className="project-card">
        <div className="project-card-title">
          <h3>SUCOIN</h3>
          <a className="common-link" href="https://sucoin.com.ar/">
            WebPage
          </a>
        </div>
        <p>
          The SUCOIN project is a currently available web service for a
          cryptocurrency that goes by the same name.
        </p>
        <p>
          This was my first real project! I worked as a front-end developer with
          another newbie, with all the page markup, structure, design, and
          javascript. <br />
          Primarily using ReactJS, and typescript for functionality, html for
          structure, and sass for styling.
        </p>
      </div>
      <hr />
      <div className="project-card">
        <div className="project-card-title">
          <h3>MATIMOVEMENT</h3>
          <span>
            <a
              className="common-link"
              href="https://github.com/MachiHat/MatiMovement"
            >
              GitHub Repo
            </a>
          </span>
        </div>
        <p>
          My first ever project, made for a final asignment for the CoderHouse
          academy HTML5 and CSS3 course.{" "}
        </p>
      </div>
      <hr />
      <div className="project-card">
        <div className="project-card-title">
          <h3>MATIMOVEMENT - ECOMMERCE</h3>
          <a
            className="common-link"
            href="https://matimovement-shop.netlify.app/"
          >
            WebPage
          </a>
          <a
            className="common-link"
            href="https://github.com/MachiHat/E-Commerce-App"
          >
            Updated Github Repo
          </a>
        </div>
        <p>
          Second project, this is an E-Commerce, as it was requested in the
          ReactJS course. Using the same idea as my previous project, I remade
          it entirely to fit the asignment requested.
        </p>
      </div>
      <hr />
    </div>
  );
};
