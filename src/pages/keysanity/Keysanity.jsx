import "./Keysanity.css";
import { useState } from "react";

import small_key from "../../assets/items/key_small.png";
import big_key from "../../assets/items/key_big.png";

import EP from "../../assets/items/EP.png";
import TH from "../../assets/items/TH.png";
import HG from "../../assets/items/HG.png";
import PD from "../../assets/items/PD.png";
import SP from "../../assets/items/SP.png";
import SW from "../../assets/items/SW.png";
import T_H from "../../assets/items/T'H.png";
import TR from "../../assets/items/TR.png";
import DP from "../../assets/items/DP.png";
import IR from "../../assets/items/IR.png";
import LC from "../../assets/items/LC.png";

const NAMES = [EP, TH, HG, PD, SP, SW, T_H, TR, DP, IR, LC];

const Keysanity = () => {
  const [dungeons, setDungeons] = useState([
    {
      name: "Eastern Palace",
      small_keys: 2,
      small_key_owned: 0,
      big_key: true,
      big_key_owned: false,
    },
    {
      name: "House of Gales",
      small_keys: 4,
      small_key_owned: 0,
      big_key: true,
      big_key_owned: false,
    },
    {
      name: "Tower of Hera",
      small_keys: 2,
      small_key_owned: 0,
      big_key: true,
      big_key_owned: false,
    },
    {
      name: "Dark Palace",
      small_keys: 4,
      small_key_owned: 0,
      big_key: true,
      big_key_owned: false,
    },
    {
      name: "Swamp Palace",
      small_keys: 4,
      small_key_owned: 0,
      big_key: true,
      big_key_owned: false,
    },
    {
      name: "Skull Woods",
      small_keys: 3,
      small_key_owned: 0,
      big_key: true,
      big_key_owned: false,
    },
    {
      name: "Thieves' Hideout",
      small_keys: 1,
      small_key_owned: 0,
      big_key: true,
      big_key_owned: false,
    },
    {
      name: "Turtle Rock",
      small_keys: 3,
      small_key_owned: 0,
      big_key: true,
      big_key_owned: false,
    },
    {
      name: "Desert Palace",
      small_keys: 5,
      small_key_owned: 0,
      big_key: true,
      big_key_owned: false,
    },
    {
      name: "Ice Ruins",
      small_keys: 3,
      small_key_owned: 0,
      big_key: true,
      big_key_owned: false,
    },
    {
      name: "Lorule Castle",
      small_keys: 5,
      small_key_owned: 0,
      big_key: false,
      big_key_owned: false,
    },
  ]);

  const handleBigKey = (event, index) => {
    event.preventDefault();
    const updatedDungeons = [...dungeons];
    if (event.type === "click") {
      updatedDungeons[index].big_key_owned = true;
    } else if (event.type === "contextmenu") {
      updatedDungeons[index].big_key_owned = false;
    }
    setDungeons(updatedDungeons);
  };

  const handleSmallKey = (event, index, value, max) => {
    event.preventDefault();
    const updatedDungeons = [...dungeons];
    if (event.type === "click") {
      if (value !== max) updatedDungeons[index].small_key_owned = value + 1;
    } else if (event.type === "contextmenu") {
      if (value !== 0) updatedDungeons[index].small_key_owned = value - 1;
    }
    setDungeons(updatedDungeons);
  };

  return (
    <section className="App">
      <div>
        <div className="keys-container">
          {dungeons.map((dungeon, index) => (
            <div className="dungeon-container" key={index}>
              <div className="dungeon-keys">
                <img
                  src={small_key}
                  alt="Small Keys"
                  style={{ opacity: dungeon.small_key_owned > 0 ? 1 : 0.1 }}
                  onClick={(event) =>
                    handleSmallKey(
                      event,
                      index,
                      dungeon.small_key_owned,
                      dungeon.small_keys
                    )
                  }
                  onContextMenu={(event) =>
                    handleSmallKey(
                      event,
                      index,
                      dungeon.small_key_owned,
                      dungeon.small_keys
                    )
                  }
                />
                <img
                  src={big_key}
                  alt="Big Key"
                  style={{ opacity: dungeon.big_key_owned ? 1 : 0.1 }}
                  onClick={(event) => handleBigKey(event, index)}
                  onContextMenu={(event) => handleBigKey(event, index)}
                />
                <small>
                  {dungeon.small_key_owned}/{dungeon.small_keys}
                </small>
              </div>
              <img
                src={NAMES[index]}
                alt={dungeon.name}
                className="dungeon-name"
              />
            </div>
          ))}
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <p style={{ textAlign: "left", color: "var(--text45)" }}>
          If you want to put it on OBS : <br /> - Resize the screen to the
          smaller size,
          <br /> - Remove the background color{" "}
          <span
            style={{
              userSelect: "all",
              color: "var(--secondary85)",
              textDecoration: "underline solid 2px",
            }}
          >
            #101314
          </span>{" "}
          using an OBS filter
        </p>
      </div>
    </section>
  );
};

export default Keysanity;
