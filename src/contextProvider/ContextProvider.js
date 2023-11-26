import React, { useState } from "react";
import { createContext } from "react";

export const routesContext = createContext();

export const ContextProvider = ({ children }) => {
  const [routes, setRoutes] = useState([]);
  return (
    <routesContext.Provider value={{ routes, setRoutes }}>
      {children}
    </routesContext.Provider>
  );
};
