import "./Preset.css";
import { useContext } from "react";
import { PageContext } from "../../utils/contexts/PageContext";

import Example from "../../utils/presets/Example.json";
import Fast from "../../utils/presets/Fast.json";

const presets = [Example, Fast, Example];

const Preset = () => {
  const {
    locale,
    preset,
    setPreset,
    infosIndex,
    setInfosIndex,
    choosedPreset,
    setChoosedPreset,
  } = useContext(PageContext);
  const getPresetInfos = () => {
    const presetArray = [];
    let index = 0;
    for (const categories in locale.preset.configurations) {
      presetArray.push([]);
      for (const settings in locale.preset.configurations[categories]) {
        presetArray[index].push(
          locale.preset.configurations[categories][settings]
        );
      }
      index++;
    }
    return presetArray;
  };

  const handleInfosIndexChange = (e) => {
    const array = getPresetInfos();
    const categoryMax = array.length - 1;
    const settingMax = array[infosIndex.category].length - 1;
    if (e === "+") {
      if (
        infosIndex.setting === settingMax &&
        infosIndex.category < categoryMax
      ) {
        setInfosIndex({ category: infosIndex.category + 1, setting: 0 });
      } else if (
        infosIndex.setting < settingMax &&
        infosIndex.category <= categoryMax
      ) {
        setInfosIndex({
          category: infosIndex.category,
          setting: infosIndex.setting + 1,
        });
      }
    }
    if (e === "-") {
      if (infosIndex.setting === 0 && infosIndex.category !== 0) {
        setInfosIndex({
          category: infosIndex.category - 1,
          setting: array[infosIndex.category - 1].length - 1,
        });
      } else if (infosIndex.setting !== 0) {
        setInfosIndex({
          category: infosIndex.category,
          setting: infosIndex.setting - 1,
        });
      }
    }
  };

  const countPages = () => {
    const array = getPresetInfos();
    let count = 0,
      current = 0;
    array.map((pages) => (count += pages.length));
    array.splice(0, infosIndex.category + 1).map((pages, i) => {
      if (infosIndex.category > i) return (current += pages.length);
      else return (current += pages.splice(0, infosIndex.setting + 1).length);
    });
    return `${current}/${count}`;
  };

  const createValue = (info) => {
    const categoryIndex = infosIndex.category;
    const settingIndex = infosIndex.setting;
    const category = Object.keys(preset)[categoryIndex];
    const setting = Object.keys(preset[category])[settingIndex];
    const value = preset[category][setting];
    switch (info) {
      case "bool":
      case "number":
        return value;
      case "select":
        const d = getPresetInfos()[categoryIndex][settingIndex];
        return d.choises?.indexOf(value) + (d.adder || 0);
      default:
        return;
    }
  };

  const updateValue = (newValue) => {
    const categoryIndex = infosIndex.category;
    const settingIndex = infosIndex.setting;
    const category = Object.keys(preset)[categoryIndex];
    const setting = Object.keys(preset[category])[settingIndex];
    setPreset((prevPreset) => ({
      ...prevPreset,
      [category]: {
        ...prevPreset[category],
        [setting]: newValue,
      },
    }));
  };

  const handleChoosePreset = (index) => {
    setChoosedPreset(index);
    setPreset(presets[index]);
  };

  return (
    <section className="App">
      <div>
        <div className="preset-container">
          <div className="preset-list">
            <ul>
              {locale.preset.texts.list.map((li, index) => (
                <li
                  key={index}
                  style={{
                    backgroundColor:
                      index === choosedPreset ? "var(--primary15)" : "inherit",
                  }}
                  onClick={() => handleChoosePreset(index)}
                >
                  {li}
                </li>
              ))}
            </ul>
          </div>
          <div className="preset-choises">
            <div className="preset-text">
              <h5>
                {getPresetInfos()[infosIndex.category][infosIndex.setting]
                  .name || "Not Found"}
              </h5>
              <div className="preset-desc">
                {getPresetInfos()[infosIndex.category][
                  infosIndex.setting
                ].description?.map((desc, i) => (
                  <small key={i}>{desc}</small>
                )) || <small>{"Not Found"}</small>}
              </div>
            </div>
            <div className="preset-footer">
              <div className="preset-pagesFooter">
                <small className="preset-counter">{countPages()}</small>
                <div className="preset-btns">
                  <button onClick={() => handleInfosIndexChange("-")}>
                    <small>{"-"}</small>
                  </button>
                  <button onClick={() => handleInfosIndexChange("+")}>
                    <small>{"+"}</small>
                  </button>
                </div>
              </div>
              <div className="preset-inputFooter">
                {[false, true].includes(
                  getPresetInfos()[infosIndex.category][infosIndex.setting].type
                ) ? (
                  <input
                    name="Boolean inputs"
                    type="checkbox"
                    checked={createValue("bool")}
                    onChange={(e) => updateValue(!createValue("bool"))}
                  />
                ) : getPresetInfos()[infosIndex.category][infosIndex.setting]
                    .choises ? (
                  <select
                    name="Multiple choises inputs"
                    value={createValue("select")}
                    onChange={(e) =>
                      updateValue(
                        getPresetInfos()[infosIndex.category][
                          infosIndex.setting
                        ].choises[
                          Number(e.target.value) -
                            getPresetInfos()[infosIndex.category][
                              infosIndex.setting
                            ].adder
                        ]
                      )
                    }
                  >
                    {getPresetInfos()[infosIndex.category][
                      infosIndex.setting
                    ].choises.map((choise, i) => (
                      <option
                        key={i}
                        value={
                          i +
                          getPresetInfos()[infosIndex.category][
                            infosIndex.setting
                          ].adder
                        }
                      >
                        {choise}
                      </option>
                    ))}
                  </select>
                ) : getPresetInfos()[infosIndex.category][infosIndex.setting]
                    .max ? (
                  <div className="preset-sliderFooter">
                    <small>
                      {
                        getPresetInfos()[infosIndex.category][
                          infosIndex.setting
                        ].min
                      }
                    </small>
                    <div className="preset-sliderInput">
                      <input
                        type="number"
                        name="Number Input"
                        value={createValue("number")}
                        onChange={(e) => {
                          if (
                            e.target.value <
                              getPresetInfos()[infosIndex.category][
                                infosIndex.setting
                              ].min ||
                            e.target.value >
                              getPresetInfos()[infosIndex.category][
                                infosIndex.setting
                              ].max
                          )
                            return;
                          return updateValue(Number(e.target.value));
                        }}
                        min={
                          getPresetInfos()[infosIndex.category][
                            infosIndex.setting
                          ].min
                        }
                        max={
                          getPresetInfos()[infosIndex.category][
                            infosIndex.setting
                          ].max
                        }
                      />
                      <input
                        type="range"
                        value={createValue("number")}
                        onChange={(e) => updateValue(Number(e.target.value))}
                        min={
                          getPresetInfos()[infosIndex.category][
                            infosIndex.setting
                          ].min
                        }
                        max={
                          getPresetInfos()[infosIndex.category][
                            infosIndex.setting
                          ].max
                        }
                      />
                    </div>
                    <small>
                      {
                        getPresetInfos()[infosIndex.category][
                          infosIndex.setting
                        ].max
                      }
                    </small>
                  </div>
                ) : undefined}
              </div>
            </div>
          </div>
          <small>
            {locale.preset.texts.info1}
            <a
              href={`data:text/json;charset=uft-8,${encodeURIComponent(
                JSON.stringify(preset, null, 2)
              )}`}
              target="_blank"
              rel="noreferrer"
              download={"CustomPreset.json"}
              onClick={() =>
                console.log(
                  "Downloaded preset : \n%c" + JSON.stringify(preset, null, 2),
                  "color: #42f578"
                )
              }
            >
              {locale.preset.texts.link}
            </a>
            {locale.preset.texts.info2}
          </small>
        </div>
      </div>
    </section>
  );
};

export default Preset;
