import "./RunInfos.css";
import { useState, useContext } from "react";

import { FaTrophy } from "react-icons/fa";
import { PageContext } from "../../utils/contexts/PageContext";
import ReadSeed from "../ReadSeed/ReadSeed";

const RunInfos = ({ place, data, name, date, index }) => {
  const { setIsClicked } = useContext(PageContext);
  const [spoilers, setSpoilers] = useState(false);

  const time = name.split("_")[0];
  const seed = name.split("_")[1];

  const handleSpoilers = () => {
    setSpoilers(!spoilers);
    setIsClicked({ clicked: true, index: index });
  };

  const compareDate = (time) => {
    let currentDate = new Date();

    let timeDifference = Math.abs(currentDate.getTime() - time);
    let secondsDifference = Math.floor(timeDifference / 1000);

    if (secondsDifference < 60) {
      return "now";
    } else if (secondsDifference < 3600) {
      let minutesDifference = Math.floor(secondsDifference / 60);
      return minutesDifference + " min(s) ago";
    } else if (secondsDifference < 86400) {
      let hoursDifference = Math.floor(secondsDifference / 3600);
      return hoursDifference + " hour(s) ago";
    } else if (secondsDifference < 31536000) {
      let daysDifference = Math.floor(secondsDifference / 86400);
      return daysDifference + " day(s) ago";
    } else {
      let yearsDifference = Math.floor(secondsDifference / 31536000);
      return yearsDifference + " year(s) ago";
    }
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
      <small className="runInfos-date">{compareDate(date.getTime())}</small>
      {" - "}
      <small className="runInfos-date">{data.version || "Unknown"}</small>
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
