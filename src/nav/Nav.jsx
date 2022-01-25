import Switcher from "./Switcher";
import Topnav from "./Topnav";

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const Nav = () => {
  // NAVIGATION LINKS ARRAY DATA
  const linkArray = [
    { id: 1, label: "HOME", route: "/home" },
    { id: 2, label: "ABOUT", route: "/about" },
    { id: 3, label: "SKILLS", route: "/skills" },
    { id: 4, label: "PROYECTS", route: "/proyects" },
    { id: 5, label: "CONTACT", route: "/contact" },
  ];

  // NAVIGATION LOCATIONS AND PAGES
  const [CurrentPage, setCurrentPage] = useState(0);

  const route = linkArray[CurrentPage]?.route;

  const next = () => {
    if (CurrentPage >= linkArray.length - 1) return;
    setCurrentPage(CurrentPage + 1);
  };
  const back = () => {
    if (CurrentPage <= 0) return;
    setCurrentPage(CurrentPage - 1);
  };

  const goTo = (destination) => {
    setCurrentPage(destination);
  };

  const navigate = useNavigate();

  useEffect(() => {
    navigate(route);
  }, [CurrentPage, navigate, route]);

  const hasNext = linkArray[CurrentPage + 1]?.route;
  const hasPrev = linkArray[CurrentPage - 1]?.route;

  return (
    <div>
      <Topnav linkArray={linkArray} goTo={goTo} CurrentPage={CurrentPage} />
      <Switcher next={next} back={back} hasNext={hasNext} hasPrev={hasPrev} />
    </div>
  );
};
