// AppContext.js
import React, { createContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [pageName, setPageName] = useState("");
  const [tab, setTeb] = useState("")

  return (
    <AppContext.Provider value={{ pageName, setPageName, tab, setTeb }}>
      {children}
    </AppContext.Provider>
  );
};
