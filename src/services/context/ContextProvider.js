import React, { useState } from "react";
import LanguageContext from "./language/LanguageContext";
// import { LanguageContext } from "./language/LanguageContext";

function ContextProvider({ children }) {
  return (
    <>
      <LanguageContext>{children}</LanguageContext>
    </>
  );
}

export default ContextProvider;
