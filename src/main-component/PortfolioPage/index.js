import React, { Fragment, useState } from "react";
import { Helmet } from "react-helmet-async";

import Header from "../../components/header";
import PageTitle from "../../components/pagetitle";
import Footer from "../../components/footer";
import NewPortfolio from "../../components/Newportfolio";
import NewPortfolioSlider from "../../components/NewPortfolioSlider";
import SignUpNewsLetter from "../../components/SignUpNewsLetter";
import { useLanguage } from "../../services/context/language/LanguageContext";
import PortfolioMainGallery from "../../components/PortfolioMainGallery";
import banner from "../../img/portfolio/banner.jpg";
const PortfolioPage = () => {
  const { globalLanguage } = useLanguage();

  React.useEffect(() => {
    const goToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    };
    goToTop();
  }, []);
  return (
    <>
      <Helmet>
        <title>Our Portfolio | RPH</title>
        <meta name="title" content="Our Portfolio | RPH" />
        <meta
          name="description"
          content="Discover the art of transformation in RPH's portfolio. Immerse yourself in a visual journey showcasing our expertise in fitouts."
        />
        <link rel="canonical" href="https://rphuae.ae/en/portfolio" />
        {/* OG TAGS START  */}
        {/* <!-- Facebook Meta Tags --> */}
        <meta property="og:url" content="https://rphuae.ae/en/portfolio" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Our Portfolio | RPH" />
        <meta
          property="og:description"
          content="Discover the art of transformation in RPH's portfolio. Immerse yourself in a visual journey showcasing our expertise in fitouts."
        />
        <meta
          property="og:image"
          content="https://royal-home.b-cdn.net/images/rph-logo-170565365042.png"
        />

        {/* <!-- Twitter Meta Tags --> */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="rphuae.ae" />
        <meta property="twitter:url" content="https://rphuae.ae/en/portfolio" />
        <meta name="twitter:title" content="Our Portfolio | RPH" />
        <meta
          name="twitter:description"
          content="Discover the art of transformation in RPH's portfolio. Immerse yourself in a visual journey showcasing our expertise in fitouts."
        />
        <meta
          name="twitter:image"
          content="https://royal-home.b-cdn.net/images/rph-logo-170565365042.png"
        />

        {/* OG TAGS END */}
      </Helmet>
      <Header />
      <PageTitle pageTitle={"PORTFOLIO"} pagesub={"Portfolio"} bg={banner} />
      {/* <NewPortfolioSlider /> */}
      <NewPortfolio globalLanguage={globalLanguage} />
      <PortfolioMainGallery globalLanguage={globalLanguage} />
      <SignUpNewsLetter />
      <Footer />
    </>
  );
};
export default PortfolioPage;
