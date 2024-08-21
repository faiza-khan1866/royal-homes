import React, { Fragment } from "react";
import Header from "../../components/header";
import PageTitle from "../../components/pagetitle";
import ServiceSingle from "../../components/ServiceSingle";
import Footer from "../../components/footer";
import { useLanguage } from "../../services/context/language/LanguageContext";

const ServiceSinglePage = () => {
  const { globalLanguage } = useLanguage();

  return (
    <Fragment>
      <Header />
      <PageTitle pageTitle={"SERVICE DETAILS"} pagesub={"Service Details"} />
      <ServiceSingle globalLanguage={globalLanguage} />
      <Footer />
    </Fragment>
  );
};
export default ServiceSinglePage;
