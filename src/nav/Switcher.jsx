import { motion } from "framer-motion";

const Switcher = ({ next, back, hasNext, hasPrev }) => {
  return (
    <nav className="arrow-container">
      <motion.button
        whileHover={{ x: -10, textShadow: "1px 1px 8px #fff"}}
        onClick={back}
        className={`switch-arrows arrow-left ${!hasPrev && "disabled"}`}
      >
        {"<"}
      </motion.button>
      <motion.button
        whileHover={{ x: 10, textShadow: "1px 1px 8px #fff"}}
        onClick={next}
        className={`switch-arrows arrow-right ${!hasNext && "disabled"}`}
      >
        {">"}
      </motion.button>
    </nav>
  );
};

export default Switcher;