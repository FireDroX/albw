import "./Best.css";
import { useState, useContext } from "react";

import { fast } from "../../utils/runs";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";
import RunInfos from "../../components/RunInfos/RunInfos";
import preset from "../../utils/presets/Fast.json";
import { RunContext } from "../../utils/RunContext";

const Best = () => {
  const { isClicked } = useContext(RunContext);
  const [viewMore, setViewMore] = useState(5);
  const filteredRuns = fast.sort((a, b) => {
    return (
      parseInt(a.name.split("_")[0].replace(/[hms.]/g, "")) -
      parseInt(b.name.split("_")[0].replace(/[hms.]/g, ""))
    );
  });

  return (
    <section className="App">
      <div>
        <div className="best-page">
          <small>
            All done with a{" "}
            <a
              href={`data:text/json;charset=uft-8,${encodeURIComponent(
                JSON.stringify(preset, null, 2)
              )}`}
              target="_blank"
              rel="noreferrer"
              download={"Fast.json"}
            >
              Fast
            </a>{" "}
            preset (click "Fast" to download the preset)
          </small>
          <div className="best-container">
            {filteredRuns
              .slice(0, viewMore)
              .map((run, i) =>
                isClicked.clicked && isClicked.index !== i ? undefined : (
                  <RunInfos
                    data={run.data}
                    name={run.name}
                    date={run.date}
                    place={i + 1}
                    index={i}
                    key={i}
                  />
                )
              )}
          </div>
          {isClicked.clicked ? undefined : viewMore === undefined ? (
            <div className="best-viewMore">
              <small className="best-viewMore" onClick={() => setViewMore(5)}>
                View less <FaArrowUp />
              </small>
            </div>
          ) : (
            <div className="best-viewMore">
              <small
                className="best-viewMore"
                onClick={() => setViewMore(undefined)}
              >
                View more <FaArrowDown />
              </small>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Best;
