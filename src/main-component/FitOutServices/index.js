import React, { Fragment } from "react";
import { Helmet } from 'react-helmet-async';
import Header from "../../components/header";
import PageTitle from "../../components/pagetitle";
import ServiceFitOut from "../../components/ServiceFitOut";
import ResidentialServicesOffer from "../../components/ResidentialServicesOffer";
import FitOutServiceImagesList from "../../components/FitOutServiceImagesList";
import FitOutServicesProjects from "../../components/FitOutServicesProjects";
import Footer from "../../components/footer";
import SignUpNewsLetter from "../../components/SignUpNewsLetter";
import { useLanguage } from "../../services/context/language/LanguageContext";
import banner from "../../img/fitout/fitout1.jpg";

const FitOutServices = () => {
  const { globalLanguage } = useLanguage();

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  React.useEffect(() => {
    goToTop();
  }, []);
  return (
    <Fragment>
      <Helmet>
        <title>Fit Out Services Dubai | RPH </title>
        <meta name="title" content="Fit Out Services Dubai | RPH" />
        <meta
          name="description"
          content="Elevate Your Space with RPH Fit Out Services in Dubai. Precision, Style, Perfection. Transforming Visions into Exceptional Interiors."
        />
        <link rel="canonical" href="https://rphuae.ae/en/fit-out-services" />
        {/* OG TAGS START */}
        {/* <!-- Facebook Meta Tags --> */}
        <meta
          property="og:url"
          content="https://rphuae.ae/en/fit-out-services"
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Fit Out Services Dubai | RPH" />
        <meta
          property="og:description"
          content="Elevate Your Space with RPH Fit Out Services in Dubai. Precision, Style, Perfection. Transforming Visions into Exceptional Interiors."
        />
        <meta
          property="og:image"
          content="https://royal-home.b-cdn.net/images/rph-logo-170565365042.png"
        />

        {/* <!-- Twitter Meta Tags --> */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="rphuae.ae" />
        <meta
          property="twitter:url"
          content="https://rphuae.ae/en/fit-out-services"
        />
        <meta name="twitter:title" content="Fit Out Services Dubai | RPH" />
        <meta
          name="twitter:description"
          content="Elevate Your Space with RPH Fit Out Services in Dubai. Precision, Style, Perfection. Transforming Visions into Exceptional Interiors."
        />
        <meta
          name="twitter:image"
          content="https://royal-home.b-cdn.net/images/rph-logo-170565365042.png"
        />

        {/* OG TAGS End */}
      </Helmet>
      <Header />
      <PageTitle
        pageTitle={"Fit-Outs & Renovations"}
        pagesub={"Fit-Outs & Renovations"}
        bg={banner}
      />
      <ServiceFitOut globalLanguage={globalLanguage} />
      <ResidentialServicesOffer globalLanguage={globalLanguage} />
      <FitOutServiceImagesList globalLanguage={globalLanguage} />
      <FitOutServicesProjects globalLanguage={globalLanguage} />
      <SignUpNewsLetter />
      <Footer />
    </Fragment>
  );
};
export default FitOutServices;
