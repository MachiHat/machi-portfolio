import React from "react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer>
      <div className="foot-list">
        <a className="common-link" href="https://github.com/MachiHat/">
            <FaGithub />
        </a>
        <a
            className="common-link"
            href="https://www.instagram.com/machi_herrera01/"
        >
            <FaInstagram />
        </a>
        <a
            className="common-link"
            href="https://www.linkedin.com/in/machi-development/"
        >
            <FaLinkedin />
        </a>
      </div>
      <span id="foot-tag">
        <b>©2022</b> MACHIHAT - WIP
      </span>
    </footer>
  );
};
