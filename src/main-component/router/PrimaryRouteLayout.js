import { Outlet } from "react-router-dom";
import React from "react";
import { LanguageProvider } from "../../services/context/language/LanguageContext";

function PrimaryRouteLayout() {
  return (
    <>
      <LanguageProvider>
        <main>
          <Outlet />
        </main>
      </LanguageProvider>
    </>
  );
}

export default PrimaryRouteLayout;
