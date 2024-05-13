import "./ReadSeed.css";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

import { items, itemsImg } from "../../utils/items";
import { RunContext } from "../../utils/RunContext";

const ReadSeed = ({ data, reset = function () {}, where = "reader" }) => {
  const {
    layout,
    seed,
    version = "????",
    portal_map = undefined,
    weather_vane_map = undefined,
  } = data;
  const { setIsClicked } = useContext(RunContext);
  const [itemIndex, setItemIndex] = useState({ type: 0, index: 0 });

  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`/albw?page=${where}`);
    reset(undefined);
    setIsClicked({ clicked: false, index: 0 });
  };

  const allLocationsOfItems = () => {
    const locations = [];
    items.map((types, typeIndex) => {
      locations.push([]);
      types.map((itemArray, itemIndex) => {
        locations[typeIndex].push([]);
        itemArray.map((item) => {
          for (const world in layout) {
            for (const zone in layout[world]) {
              for (const location in layout[world][zone]) {
                if (layout[world][zone][location] === item)
                  locations[typeIndex][itemIndex].push(
                    <>
                      <span className="location-item">{item}</span>
                      {" in "}
                      <span className="location-world">{world}</span>
                      {" at "}
                      <span className="location-info">{`${zone} - ${location}`}</span>
                    </>
                  );
              }
            }
          }
          if (item === "%portal_map%") {
            for (const portal in portal_map) {
              locations[typeIndex][itemIndex].push(
                <>
                  <span className="location-item">{portal_map[portal]}</span>
                  {" at "}
                  <span className="location-info">{portal}</span>
                </>
              );
            }
          }
          if (item === "%weather_vane_map%") {
            for (const weather_vane in weather_vane_map) {
              locations[typeIndex][itemIndex].push(
                <>
                  <span className="location-item">
                    {weather_vane_map[weather_vane]}
                  </span>
                  {" at "}
                  <span className="location-info">{weather_vane}</span>
                </>
              );
            }
          }
          return 0;
        });
        return 0;
      });
      return 0;
    });
    return locations;
  };

  return (
    <div className="read-container">
      <div className="read-values">
        <div className="read-infos">
          <small style={{ color: "var(--text45)" }}>
            SEED : <span className="location-info">{seed}</span> ; VERSION :{" "}
            <span className="location-info">{version}</span>
          </small>
        </div>
        <div className="read-imgs-container">
          {allLocationsOfItems().map((types, typesIndex) =>
            types[typesIndex].length > 0 ? (
              <div className="read-imgs-sub" key={typesIndex}>
                <h6>{["ITEMS", "OTHERS", "KEYS"][typesIndex]} :</h6>
                <div className="read-imgs">
                  {types.map((items, itemsIndex) =>
                    items.length > 0 ? (
                      <img
                        alt={"ICON_" + typesIndex + "-" + itemsIndex}
                        src={itemsImg[typesIndex][itemsIndex]}
                        key={typesIndex + "-" + itemsIndex}
                        style={{
                          backgroundColor:
                            itemIndex.type === typesIndex &&
                            itemIndex.index === itemsIndex
                              ? "var(--secondary35)"
                              : "transparent",
                        }}
                        onClick={() =>
                          setItemIndex({ type: typesIndex, index: itemsIndex })
                        }
                      />
                    ) : undefined
                  )}
                </div>
              </div>
            ) : (
              false
            )
          )}
        </div>
        <div className="read-items">
          {allLocationsOfItems()[itemIndex.type][itemIndex.index].map(
            (el, i) => (
              <small key={el + i}>{el}</small>
            )
          )}
        </div>
      </div>
      <small className="read-goback" onClick={handleNavigate}>
        {"<"}- RETURN
      </small>
    </div>
  );
};

export default ReadSeed;
