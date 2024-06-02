import "./Home.css";
import { useContext } from "react";
import { PageContext } from "../../utils/contexts/PageContext";

import logo from "../../assets/logo.png";
import bow_light from "../../assets/images/items/bow_light.png";

const Home = () => {
  const { locale } = useContext(PageContext);
  return (
    <section className="App">
      <div>
        <div className="home-container">
          <div className="home-logo">
            <a
              href="https://github.com/FireDroX/albw/tree/main"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={logo}
                alt="Logo"
                style={{ width: "80px", height: "80px" }}
              />
            </a>
            <a
              href="https://github.com/rickfay/z17-randomizer/tree/master"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={bow_light}
                alt="skyofskill"
                style={{ width: "50px", height: "50px", padding: "20px" }}
              />
            </a>
          </div>
          <div className="home-title">
            {locale?.home?.title?.map((text, i) => (
              <h5 key={i}>{text}</h5>
            ))}
          </div>
        </div>
        <div className="home-imgs">
          <a href="https://react.dev/" target="_blank" rel="noreferrer">
            <img
              src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB&colorB=555"
              alt="React-icon"
            />
          </a>
          <a
            href="https://github.com/FireDroX/albw/graphs/contributors"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://img.shields.io/github/contributors/firedrox/albw.svg?style=for-the-badge"
              alt="Contributors-icon"
            />
          </a>
          <a
            href="https://github.com/FireDroX/albw/stargazers"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://img.shields.io/github/stars/firedrox/albw.svg?style=for-the-badge"
              alt="Stars-icon"
            />
          </a>
          <a
            href="https://discord.gg/Zmmqd9Tbnn"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://img.shields.io/badge/Discord-5865F2?style=for-the-badge&logo=discord&colorB=555"
              alt="Discord-icon"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
