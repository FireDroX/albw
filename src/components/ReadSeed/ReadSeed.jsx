import "./ReadSeed.css";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

import { items, itemsImg } from "../../utils/items";
import { RunContext } from "../../utils/RunContext";

const ReadSeed = ({ data, reset = function () {}, where = "reader" }) => {
  const { layout, seed, version } = data;
  const { setIsClicked } = useContext(RunContext);
  const [itemIndex, setItemIndex] = useState(0);

  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/albw/" + where);
    reset(undefined);
    setIsClicked({ clicked: false, index: 0 });
  };

  function findLocationOfItemsInLayout(itemsName) {
    const locations = [];
    itemsName.map((item, index) => {
      for (const world in layout) {
        for (const zone in layout[world]) {
          for (const location in layout[world][zone]) {
            if (layout[world][zone][location] === item)
              locations.push(
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
      return true;
    });
    return locations;
  }

  return (
    <div className="read-container">
      <div className="read-values">
        <div className="read-infos">
          <small style={{ color: "var(--text45)" }}>
            SEED : <span className="location-info">{seed}</span> ; VERSION :{" "}
            <span className="location-info">{version}</span>
          </small>
        </div>
        <div className="read-imgs">
          {itemsImg.map((img, i) => (
            <img
              alt={"ICON_" + i}
              src={img}
              key={img + i}
              style={{
                backgroundColor:
                  itemIndex === i ? "var(--secondary35)" : "transparent",
              }}
              onClick={() => setItemIndex(i)}
            />
          ))}
        </div>
        <div className="read-items">
          {findLocationOfItemsInLayout(items[itemIndex]).map((el, i) => (
            <small key={el + i}>{el}</small>
          ))}
        </div>
      </div>
      <small className="read-goback" onClick={handleNavigate}>
        {"<"}- RETURN
      </small>
    </div>
  );
};

export default ReadSeed;
