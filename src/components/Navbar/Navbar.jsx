import "./Navbar.css";

import { createElement, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { RunContext } from "../../utils/RunContext";

import { FaEye, FaTrophy } from "react-icons/fa";

const logo = require("../../assets/logo.png");

const componentsMap = {
  Reader: FaEye,
  Best: FaTrophy,
};

const Navbar = () => {
  const navigate = useNavigate();
  const { setIsClicked } = useContext(RunContext);

  const handleNavigate = (goTo = String) => {
    navigate(`/albw?page=${goTo}`);
    document.title = "ALBW - " + goTo.toString().toUpperCase();
    if (goTo !== "best") setIsClicked({ clicked: false, index: 0 });
  };

  return (
    <div className="navbar">
      <div className="navbar-logo">
        <img
          src={logo}
          alt="Logo"
          draggable={false}
          onClick={() => handleNavigate("home")}
        />
      </div>

      {["Reader", "Best"].map((el, i) => (
        <div onClick={() => handleNavigate(el.toLowerCase())} key={el + i}>
          <h5>{el}</h5>
          {createElement(componentsMap[el])}
        </div>
      ))}
    </div>
  );
};

export default Navbar;
