import "./RunInfos.css";
import { useState, useContext } from "react";

import { FaTrophy } from "react-icons/fa";
import { RunContext } from "../../utils/RunContext";
import ReadSeed from "../ReadSeed/ReadSeed";

const RunInfos = ({ place, data, name, index }) => {
  const { setIsClicked } = useContext(RunContext);
  const [spoilers, setSpoilers] = useState(false);

  const time = name.split("_")[0];
  const seed = name.split("_")[1];

  const handleSpoilers = () => {
    setSpoilers(!spoilers);
    setIsClicked({ clicked: true, index: index });
  };

  return !spoilers ? (
    <div className="runInfos-container">
      <small className="runInfos-place">
        {place === 1 ? (
          <FaTrophy color="#FFD700" />
        ) : place === 2 ? (
          <FaTrophy color="#C0C0C0" />
        ) : place === 3 ? (
          <FaTrophy color="#CD7F32" />
        ) : (
          place
        )}
      </small>
      {" - "}
      <small className="runInfos-time">
        {time.replace(/[hm]/g, function (match) {
          return match + " ";
        })}
      </small>
      {" - "}
      <small className="runInfos-seed">{seed}</small>
      {" - "}
      <small className="runInfos-spoilers" onClick={handleSpoilers}>
        SPOILERS
      </small>
    </div>
  ) : (
    <ReadSeed data={data} where="best" reset={setSpoilers} />
  );
};

export default RunInfos;
