import { createContext, useState } from "react";

export const PageContext = createContext();

export const PageProvider = ({ children }) => {
  // Lang context
  const [locale, setLocale] = useState(() => {
    const lang = navigator.language;
    const localeFileName = lang.replace("-", "_");
    try {
      return require(`../../locales/${localeFileName}.json`);
    } catch {
      return require(`../../locales/en_US.json`);
    }
  });

  // Spoiler logs context (if shown or not)
  const [isClicked, setIsClicked] = useState({ clicked: false, index: 0 });

  // Spoiler logs file import context
  const [file, setFile] = useState(undefined);

  // Preset file generator context
  const [preset, setPreset] = useState(require("../presets/Example.json"));
  const [choosedPreset, setChoosedPreset] = useState(2);
  const [infosIndex, setInfosIndex] = useState({ category: 0, setting: 0 });

  return (
    <PageContext.Provider
      value={{
        locale,
        setLocale,
        isClicked,
        setIsClicked,
        file,
        setFile,
        preset,
        setPreset,
        infosIndex,
        setInfosIndex,
        choosedPreset,
        setChoosedPreset,
      }}
    >
      {children}
    </PageContext.Provider>
  );
};
