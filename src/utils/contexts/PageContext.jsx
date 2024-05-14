import { createContext, useState } from "react";

export const PageContext = createContext();

export const PageProvider = ({ children }) => {
  // Language
  const [locale, setLocale] = useState(() => {
    const lang = navigator.language;
    const localeFileName = lang.replace("-", "_");
    return (
      require(`../../locales/${localeFileName}.json`) ||
      require(`../../locales/en_US.json`)
    );
  });

  // Spoiler logs shown
  const [isClicked, setIsClicked] = useState({ clicked: false, index: 0 });

  return (
    <PageContext.Provider
      value={{
        locale,
        setLocale,
        isClicked,
        setIsClicked,
      }}
    >
      {children}
    </PageContext.Provider>
  );
};
