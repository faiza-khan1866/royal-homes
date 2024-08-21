// LanguageContext.js
import React, { createContext, useState, useContext } from "react";
import { useHistory } from "react-router-dom";

export const LanguageContext = createContext({});

export function LanguageProvider({ children }) {
  const history = useHistory();
  const [globalLanguage, setGlobalLanguage] = useState("en");

  const changeLanguage = (newLanguage) => {
    setGlobalLanguage(newLanguage);
    localStorage.setItem("CurrentLanguage", newLanguage);

    // Get the current pathname and replace the language part
    const currentPathname = history.location.pathname;
    const newPathname = currentPathname.replace(
      /\/[a-z]{2}\//,
      `/${newLanguage}/`
    );

    // Replace the URL without reloading the page
    history.replace({ pathname: newPathname, search: history.location.search });
  };

  return (
    <LanguageContext.Provider value={{ globalLanguage, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
