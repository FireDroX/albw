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
      console.log(
        "Couldn't load \"" +
          localeFileName +
          '" language file. \nLoading the default Language (en_US)...'
      );
      return require(`../../locales/en_US.json`);
    }
  });

  // Spoiler logs context (if shown or not)
  const [isClicked, setIsClicked] = useState({ clicked: false, index: 0 });
  const [showSpoilers, setShowSpoilers] = useState({ show: false, index: 0 });
  const [infosIndex, setInfosIndex] = useState({ category: 0, setting: 0 });

  // Spoiler logs file import context
  const [file, setFile] = useState(undefined);

  return (
    <PageContext.Provider
      value={{
        locale,
        setLocale,
        isClicked,
        setIsClicked,
        file,
        setFile,
        infosIndex,
        setInfosIndex,
        showSpoilers,
        setShowSpoilers,
      }}
    >
      {children}
    </PageContext.Provider>
  );
};
