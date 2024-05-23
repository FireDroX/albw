import "./Best.css";
import { useState, useContext } from "react";

import { fast, cracksanity } from "../../utils/runs";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";
import RunInfos from "../../components/RunInfos/RunInfos";
import { PageContext } from "../../utils/contexts/PageContext";

const Best = () => {
  const { isClicked, locale } = useContext(PageContext);
  const [viewMore, setViewMore] = useState(5);
  const [listIndex, setListIndex] = useState(0);
  const runs = [fast, cracksanity];
  const filteredRuns = runs[listIndex].sort((a, b) => {
    return (
      parseInt(a.name.split("_")[0].replace(/[hms.]/g, "")) -
      parseInt(b.name.split("_")[0].replace(/[hms.]/g, ""))
    );
  });

  return (
    <section className="App">
      <div>
        <div className="best-box">
          <ul className="best-selection">
            {["Fast", "Cracksanity"].map((li, index) => (
              <li
                key={index}
                onClick={() => setListIndex(index)}
                style={{
                  backgroundColor:
                    listIndex === index ? "var(--secondary65)" : "transparent",
                }}
              >
                {li}
              </li>
            ))}
          </ul>
          <div className="best-page">
            <small>{locale.best.presets[listIndex].info}</small>
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
                  {locale.best.viewLess} <FaArrowUp />
                </small>
              </div>
            ) : (
              <div className="best-viewMore">
                <small
                  className="best-viewMore"
                  onClick={() => setViewMore(undefined)}
                >
                  {locale.best.viewMore} <FaArrowDown />
                </small>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Best;
