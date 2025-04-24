// AppContext.js
import React, { createContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [pageName, setPageName] = useState("");

  return (
    <AppContext.Provider value={{ pageName, setPageName }}>
      {children}
    </AppContext.Provider>
  );
};
