import React from "react";
import { motion, AnimatePresence } from "framer-motion";

export const Projects = () => {
  const projectArray = [
    {
      title: "SUCOIN",
      page: "https://sucoin.com.ar/",
      github: "#",
      description: (
        <React.Fragment>
          <p>
            The SUCOIN project is a currently available web service for a
            cryptocurrency that goes by the same name.
          </p>
          <p>
            This was my first real project! I worked as a front-end developer
            with another newbie, with all the page markup, structure, design,
            and javascript. <br />
            Primarily using ReactJS with Typescript.
          </p>
        </React.Fragment>
      ),
    },
    {
      title: "MATIMOVEMENT",
      page: "#",
      github: "https://github.com/MachiHat/MatiMovement",
      description: (
        <React.Fragment>
          <p>
            My first ever project, an original idea by me, made as a final
            asignment for the CoderHouse academy HTML5 and CSS3 course. I also
            added myself some javascript code.
          </p>
        </React.Fragment>
      ),
    },
    {
      title: "MATIMOVEMENT - ECCOMERCE",
      page: "https://matimovement-shop.netlify.app/",
      github: "https://github.com/MachiHat/MatiMovement",
      description: (
        <React.Fragment>
          <p>
            Second project, this is an E-Commerce, as it was requested in the
            ReactJS course. Using the same idea as my previous project, I remade
            it entirely to fit the asignment requested.
          </p>
        </React.Fragment>
      ),
    },
  ];

  return (
    <AnimatePresence exitBeforeEnter>
      <motion.div
        initial={{ opacity: 0 }}
        transition={{ duration: 1 }}
        animate={{ opacity: 1 }}
        className="preset-container"
      >
        <h1 className="a-title">Previous Projects</h1>
        <p className="a-description">
          This section is looking kinda empty... to solve it click{" "}
          <a className="common-link" href="/contact">
            THIS
          </a>{" "}
        </p>
        <hr />

        {/* ---------- PROYECT ARRAY ---------- */}
        {projectArray.map((project, i) => (
          <div className="project-card">
            <div className="project-card-title">
              <h3>{project.title}</h3>
              <a className="common-link" href={project.page}>
                WebPage
              </a>
              <a className="common-link" href={project.github}>
                Github Repo
              </a>
            </div>
            {project.description}
            <hr />
          </div>
        ))}
      </motion.div>
    </AnimatePresence>
  );
};
