import "./ReadSeed.css";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

import { items, itemsImg } from "../../utils/items";
import { PageContext } from "../../utils/contexts/PageContext";

const ReadSeed = ({ data, reset = function () {}, where = "reader" }) => {
  const { layout, seed, version = "????" } = data;
  const { setIsClicked, locale } = useContext(PageContext);
  const [itemIndex, setItemIndex] = useState({ type: 0, index: 0 });

  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`/albw?page=${where}`);
    reset({ show: false, index: 0 });
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
                      {` ${locale.readSeed.in} `}
                      <span className="location-world">{world}</span>
                      {` ${locale.readSeed.at} `}
                      <button className="location-info">{`${zone} - ${location}`}</button>
                    </>
                  );
              }
            }
          }
          ["%portal_map%", "%crack_map%", "%weather_vane_map%"].forEach(
            (inclusion) => {
              if (item === inclusion) {
                for (const object in data[inclusion.replaceAll("%", "")]) {
                  locations[typeIndex][itemIndex].push(
                    <>
                      <span className="location-item">
                        {data[inclusion.replaceAll("%", "")][object]}
                      </span>
                      {` ${locale.readSeed.at} `}
                      <span className="location-info">{object}</span>
                    </>
                  );
                }
              }
            }
          );
          return null;
        });
        return null;
      });
      return null;
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
                <h6>{locale.readSeed.types[typesIndex]} :</h6>
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
            ) : undefined
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
        {"<"}- {locale.readSeed.return}
      </small>
    </div>
  );
};

export default ReadSeed;
