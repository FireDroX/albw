import "./ReadSeed.css";
import { useState } from "react";

import { items, itemsImg } from "../../utils/items";

const data = require("../../utils/logs/1h20m47.33s_1240282282_spoiler.json");

const ReadSeed = () => {
  const { layout, metrics, seed, settings, version } = data;
  const [itemIndex, setItemIndex] = useState(0);

  function findLocationOfItemsInLayout(itemsName) {
    let locations = [];
    itemsName.map((item) => {
      for (const world in layout) {
        for (const zone in layout[world]) {
          for (const location in layout[world][zone]) {
            if (layout[world][zone][location] === item)
              locations.push(`${item} => ${world} - ${zone} - ${location}`);
          }
        }
      }
    });
    return locations;
  }

  return (
    <div className="read-container">
      <div className="read-values">
        <div className="read-imgs">
          {itemsImg.map((img, i) => (
            <img src={img} key={img + i} onClick={() => setItemIndex(i)} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReadSeed;
