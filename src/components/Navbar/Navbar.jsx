import "./Navbar.css";

import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { PageContext } from "../../utils/contexts/PageContext";

import { FaEye, FaTrophy } from "react-icons/fa";
import { FaDatabase } from "react-icons/fa6";

const logo = require("../../assets/logo.png");

const Navbar = () => {
  const navigate = useNavigate();
  const { setIsClicked, locale } = useContext(PageContext);

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

      <div onClick={() => handleNavigate("reader")}>
        <h5>{locale.nav.reader}</h5>
        <FaEye />
      </div>
      <div onClick={() => handleNavigate("preset")}>
        <h5>{locale.nav.preset}</h5>
        <FaDatabase />
      </div>
      <div onClick={() => handleNavigate("best")}>
        <h5>{locale.nav.best}</h5>
        <FaTrophy />
      </div>
    </div>
  );
};

export default Navbar;
