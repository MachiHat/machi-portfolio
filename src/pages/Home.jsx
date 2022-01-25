import React from "react";
import { motion, AnimatePresence } from "framer-motion";

export const Home = () => {
  return (
    <AnimatePresence exitBeforeEnter>
      <div className="centerflex home-intro">
        <motion.div
          initial={{ opacity: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          animate={{ opacity: 1 }}
          className="centerflex title-wrap"
        >
          <h1 className="hello-title part1">
            Hello! I'm <br />
            <span>
              MATIAS
              <br />
              HERRERA
            </span>
            ,
          </h1>
          <h1 className="hello-title part2">front-end Web Dev.</h1>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default Home;
