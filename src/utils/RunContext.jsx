import { createContext, useState } from "react";

export const RunContext = createContext();

export const RunProvider = ({ children }) => {
  const [isClicked, setIsClicked] = useState({ clicked: false, index: 0 });

  return (
    <RunContext.Provider
      value={{
        isClicked,
        setIsClicked,
      }}
    >
      {children}
    </RunContext.Provider>
  );
};
