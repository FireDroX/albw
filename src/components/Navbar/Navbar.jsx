import "./Navbar.css";

import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { PageContext } from "../../utils/contexts/PageContext";

import { FaEye, FaTrophy, FaRandom } from "react-icons/fa";

const logo = require("../../assets/logo.png");

const Navbar = () => {
  const navigate = useNavigate();
  const { setIsClicked, setShowSpoilers, locale } = useContext(PageContext);

  const handleNavigate = (goTo = String) => {
    navigate(`/albw?page=${goTo}`);
    document.title = "ALBW - " + goTo.toString().toUpperCase();
    if (goTo !== "best") {
      setIsClicked({ clicked: false, index: 0 });
      setShowSpoilers({ show: false, index: 0 });
    }
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

      <div onClick={() => handleNavigate("portals")}>
        <h5>{locale.nav.cracks}</h5>
        <FaRandom />
      </div>
      <div onClick={() => handleNavigate("reader")}>
        <h5>{locale.nav.reader}</h5>
        <FaEye />
      </div>
      <div onClick={() => handleNavigate("best")}>
        <h5>{locale.nav.best}</h5>
        <FaTrophy />
      </div>
    </div>
  );
};

export default Navbar;
