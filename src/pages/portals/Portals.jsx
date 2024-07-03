import "./Portals.css";
import { useEffect, useRef, useState, useContext } from "react";
import { PageContext } from "../../utils/contexts/PageContext";

import map from "../../assets/images/maps.png";
import initialPortalsState from "../../utils/initialPortalsState";

const Portals = () => {
  const canvasRef = useRef(null);
  const [portals, setPortals] = useState(initialPortalsState);
  const [indexClicked, setIndexClicked] = useState(null);
  const [hoveredPortal, setHoveredPortal] = useState(null);
  const { locale } = useContext(PageContext);

  useEffect(() => {
    retreivePortals();
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const image = new Image();
    image.src = map;

    image.onload = () => {
      canvas.width = image.width;
      canvas.height = image.height;
      ctx.drawImage(image, 0, 0);

      // Draw the line between linked portals
      if (
        hoveredPortal !== null &&
        portals[hoveredPortal].linkedIndex !== null
      ) {
        const linkedIndex = portals[hoveredPortal].linkedIndex;
        ctx.beginPath();
        ctx.moveTo(portals[hoveredPortal].X, portals[hoveredPortal].Y);
        ctx.lineTo(portals[linkedIndex].X, portals[linkedIndex].Y);
        ctx.strokeStyle = "#6495ed";
        ctx.lineWidth = 3;
        ctx.stroke();
      }
    };
  }, [portals, hoveredPortal]);

  const handleLeftClick = (index) => {
    setIndexClicked((prev) => {
      if (portals[index].enabled) {
        return null; // Do nothing if the div is already enabled
      }

      if (prev !== null) {
        if (index === prev) {
          return null;
        } else {
          const updatedPortals = [...portals];
          updatedPortals[index].linkedIndex = prev;
          updatedPortals[prev].linkedIndex = index;
          updatedPortals[index].enabled = true;
          updatedPortals[prev].enabled = true;
          setPortals(updatedPortals);
          localStorage.setItem("portals", JSON.stringify(updatedPortals));
          return null;
        }
      } else {
        return index;
      }
    });
  };

  const handleRightClick = (e, index) => {
    e.preventDefault();
    if (!portals[index].enabled) return;
    const updatedPortals = [...portals];
    const linkedPortalIndex = updatedPortals[index].linkedIndex;
    updatedPortals[index].linkedIndex = null;
    updatedPortals[linkedPortalIndex].linkedIndex = null;
    updatedPortals[index].enabled = false;
    updatedPortals[linkedPortalIndex].enabled = false;
    setPortals(updatedPortals);
    localStorage.setItem("portals", JSON.stringify(updatedPortals));
  };

  const resetPortals = () => {
    setPortals(initialPortalsState);
    localStorage.setItem("portals", JSON.stringify(initialPortalsState));
  };

  const retreivePortals = () => {
    const retreivedPortals =
      JSON.parse(localStorage.getItem("portals")) || portals;
    setPortals(retreivedPortals);
  };

  return (
    <section className="App">
      <div>
        <div className="portals-container">
          <canvas ref={canvasRef}></canvas>
          {portals.map((portal, index) => (
            <div
              key={index}
              className="portal-box"
              name={portal.name}
              style={{
                top: portal.Y - 6,
                left: portal.X - 6,
                backgroundColor:
                  portal.enabled &&
                  (hoveredPortal === index ||
                    hoveredPortal === portal.linkedIndex)
                    ? "#6495ed" // Blue
                    : portal.linkedIndex !== null
                    ? "#00ff00" // Green
                    : indexClicked === index
                    ? "#ff8c00" // Orange
                    : "#ff3030", // Red
              }}
              onClick={() => handleLeftClick(index)}
              onContextMenu={(e) => handleRightClick(e, index)}
              onMouseOver={() => setHoveredPortal(index)}
              onMouseOut={() => setHoveredPortal(null)}
            ></div>
          ))}
        </div>
        <br />
        <div className="portals-description">
          <div className="portals-text">
            <small>{locale.cracks.leftClick}</small>
            <small>{locale.cracks.rightClick}</small>
          </div>
          <small className="portals-reset" onClick={resetPortals}>
            {locale.cracks.reset}
          </small>
        </div>
      </div>
    </section>
  );
};

export default Portals;
