import React, { Fragment } from "react";
import { Helmet } from "react-helmet-async";
import Header from "../../components/header";
import PageTitle from "../../components/pagetitle";
import ServiceList from "../../components/ServiceList";
import Footer from "../../components/footer";
import ServiceProcess from "../../components/ServiceProcess";
import ServiceInterior from "../../components/ServiceInterior";
import ServiceMaintenance from "../../components/ServiceMaintenance";
import ServiceInvestment from "../../components/ServiceInvestment";
import SignUpNewsLetter from "../../components/SignUpNewsLetter";
import FurnishingService from "../../components/FurnishingService";
import { useLanguage } from "../../services/context/language/LanguageContext";
import banner from "../../img/services/banner.jpg";
const ServicePage = () => {
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
        <title>Our Services | RPH</title>
        <meta name="title" content="Our Services | RPH" />
        <meta
          name="description"
          content="Elevate your space with RPH's exceptional services. Explore our comprehensive range, including innovative fitouts, project management, design solutions"
        />
        <link rel="canonical" href="https://rphuae.ae/en/services" />
        {/* OG TAGS START */}
        {/* <!-- Facebook Meta Tags --> */}
        <meta property="og:url" content="https://rphuae.ae/en/services" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Our Services | RPH" />
        <meta
          property="og:description"
          content="Elevate your space with RPH's exceptional services. Explore our comprehensive range, including innovative fitouts, project management, design solutions."
        />
        <meta
          property="og:image"
          content="https://royal-home.b-cdn.net/images/rph-logo-170565365042.png"
        />

        {/* <!-- Twitter Meta Tags --> */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="rphuae.ae" />
        <meta property="twitter:url" content="https://rphuae.ae/en/services" />
        <meta name="twitter:title" content="Our Services | RPH" />
        <meta
          name="twitter:description"
          content="Elevate your space with RPH's exceptional services. Explore our comprehensive range, including innovative fitouts, project management, design solutions."
        />
        <meta
          name="twitter:image"
          content="https://royal-home.b-cdn.net/images/rph-logo-170565365042.png"
        />

        {/* OG TAGS END */}
      </Helmet>
      <Header />
      <PageTitle pageTitle={"SERVICES"} pagesub={"Services"} bg={banner} />
      <ServiceList globalLanguage={globalLanguage} />
      <ServiceProcess globalLanguage={globalLanguage} />
      <ServiceInvestment globalLanguage={globalLanguage} />
      <ServiceMaintenance globalLanguage={globalLanguage} />
      <ServiceInterior globalLanguage={globalLanguage} />
      <FurnishingService globalLanguage={globalLanguage} />
      <SignUpNewsLetter />
      <Footer />
    </Fragment>
  );
};
export default ServicePage;
