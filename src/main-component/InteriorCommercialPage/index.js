import React, { Fragment } from "react";
import Header from "../../components/header";
import PageTitle from "../../components/pagetitle";
import Footer from "../../components/footer";
import PropertyDetialsCart from "../../components/PropertyDetailsCards";
import ProjectSection from "../../components/ProjectSection";
import { useLanguage } from "../../services/context/language/LanguageContext";

const InteriorCommercialPage = () => {
  const { globalLanguage } = useLanguage();

  return (
    <Fragment>
      <Header />
      <PageTitle pageTitle={"RESIDENTIAL"} pagesub={"Interior Service"} />
      <PropertyDetialsCart globalLanguage={globalLanguage} />
      <ProjectSection globalLanguage={globalLanguage} />
      <Footer />
    </Fragment>
  );
};
export default InteriorCommercialPage;
