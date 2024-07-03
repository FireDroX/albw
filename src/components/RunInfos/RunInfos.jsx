import "./RunInfos.css";
import { useContext } from "react";

import { FaTrophy } from "react-icons/fa";
import { PageContext } from "../../utils/contexts/PageContext";
import ReadSeed from "../ReadSeed/ReadSeed";

const RunInfos = ({ place, data, name, date, index }) => {
  const { setIsClicked, showSpoilers, setShowSpoilers } =
    useContext(PageContext);

  const time = name.split("_")[0];
  const seed = name.split("_")[1];

  const handleSpoilers = () => {
    setShowSpoilers({ show: true, index: index });
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

  return showSpoilers.show && showSpoilers.index === index ? (
    <ReadSeed data={data} where="best" reset={setShowSpoilers} />
  ) : (
    <tr className="runInfos-container">
      <td className="runInfos-place">
        <p>
          {place === 1 ? (
            <FaTrophy color="#FFD700" />
          ) : place === 2 ? (
            <FaTrophy color="#C0C0C0" />
          ) : place === 3 ? (
            <FaTrophy color="#CD7F32" />
          ) : (
            place
          )}
        </p>
      </td>
      <td className="runInfos-time">
        <p>
          {time.replace(/[hm]/g, function (match) {
            return match + " ";
          })}
        </p>
      </td>
      <td className="runInfos-date">
        <p>{compareDate(date.getTime())}</p>
      </td>
      <td className="runInfos-version">
        <p>{data.version || "Unknown"}</p>
      </td>
      <td className="runInfos-seed">
        <p>{seed}</p>
      </td>
      <td className="runInfos-spoilers" onClick={handleSpoilers}>
        <p>SPOILERS</p>
      </td>
    </tr>
  );
};

export default RunInfos;
