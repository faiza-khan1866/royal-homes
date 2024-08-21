import React, { Fragment } from "react";
import Header from "../../components/header";
import PageTitle from "../../components/pagetitle";
import ServicesTypes from "../../components/servicestypes";
import Footer from "../../components/footer";

import FeaturedImg1 from "../../img/servicesTypes/interior1.png";
import FeaturedImg2 from "../../img/servicesTypes/interior2.png";
import { useLanguage } from "../../services/context/language/LanguageContext";

const InteriorPage = () => {
  const { globalLanguage } = useLanguage();

  let servicesData = [
    {
      img: FeaturedImg1,
      title: "RESIDENTIAL",
      link: "/interior/residential",
    },
    {
      img: FeaturedImg2,
      title: "COMMERCIAL",
      link: "/interior/commercial",
    },
  ];
  return (
    <Fragment>
      <Header />
      <PageTitle pageTitle={"INTERIOR"} pagesub={"Interior"} />
      <ServicesTypes
        servicesData={servicesData}
        globalLanguage={globalLanguage}
      />
      <Footer />
    </Fragment>
  );
};
export default InteriorPage;
