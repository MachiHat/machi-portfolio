import React from "react";
import { motion, AnimatePresence } from "framer-motion";

export const Skills = () => {
  return (
    <AnimatePresence exitBeforeEnter>
      <motion.div
        initial={{ opacity: 0 }}
        transition={{ duration: 1 }}
        animate={{ opacity: 1 }}
        className="preset-container"
      >
        <h1 className="a-title">My Skills</h1>
        <h2>What I learned so far:</h2>
        <ul className="skills-list">
          <hr />
          <li>
            <h3>HTML5 {"&"} CSS3.</h3>
            <p>
              Full indepth course from CoderHouse academy{" "}
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.coderhouse.com/certificados/61eacecbc65e90004178aa3f?lang=en"
              >
                {" (Certificate) "}
              </a>
              .
            </p>
          </li>
          <hr />
          <li>
            <h3>Javascript.</h3>
            <p>
              Full indepth course from CoderHouse academy
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.coderhouse.com/certificados/6178a221302e600ebba75935?lang=en"
              >
                {" (Certificate) "}
              </a>
              , internet courses and book: "You don't know JS - Vol 1".
            </p>
          </li>
          <hr />
          <li>
            <h3>ReactJS.</h3>
            <p>
              Full indepth course from CoderHouse academy
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.coderhouse.com/certificados/61eacecbc65e90004178aa3f?lang=en"
              >
                {" (Certificate) "}
              </a>
              , using various libraries for design and functionality{" "}
              {
                "(such as framer motion, react router, typescript, Firebase-Firestore database usage for small proyects, etc...)"
              }
              .
            </p>
          </li>
          <hr />
          <li>
            <h3>Git version control system.</h3> From CoderHouse course,
            internet courses, and videos.
          </li>
          <hr />
        </ul>
      </motion.div>
    </AnimatePresence>
  );
};
