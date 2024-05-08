import "./Navbar.css";

import { createElement } from "react";
import { useNavigate } from "react-router-dom";

import { FaEye, FaTrophy } from "react-icons/fa";

const logo = require("../../assets/logo.png");

const componentsMap = {
  Reader: FaEye,
  Best: FaTrophy,
};

const Navbar = () => {
  const navigate = useNavigate();

  const handleNavigate = (goTo = String) => {
    navigate("/albw/" + goTo);
    document.title = "ALBW - " + goTo.toString().toUpperCase();
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
