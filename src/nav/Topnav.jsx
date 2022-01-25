import React from "react";

export const Topnav = ({ linkArray, goTo, CurrentPage }) => {
  return (
    <nav className="navbar">
      <img src="img/Mlogo.png" alt="mainLogo" />
      <ul className="navlist">
        {linkArray.map((linkItem, index) => (
          <button
            className={`navlist-item ${CurrentPage === index && "active"}`}
            key={index}
            onClick={() => goTo(index)}
          >
            {linkItem.label}
          </button>
        ))}
      </ul>
    </nav>
  );
};

export default Topnav;
