import React, { Fragment, useState } from "react";
import { Helmet } from "react-helmet-async";
import Header from "../../components/header";
import PageTitle from "../../components/pagetitle";
import Footer from "../../components/footer";
import NewPortfolioSlider from "../../components/NewPortfolioSlider";
import bginner from "../../img/portfolio/portInnerbg1.png";
import frontinner from "../../img/portfolio/portInnerBg2.png";
import PortfolioInnerDetails from "../../components/PortfolioInnerDetails";
import SignUpNewsLetter from "../../components/SignUpNewsLetter";
import { useParams } from "react-router-dom";
import { useLanguage } from "../../services/context/language/LanguageContext";

const PortfolioInnerPage = () => {
  const { globalLanguage } = useLanguage();
  const { id } = useParams();
  const [banner, setBanner] = useState(null);

  return (
    <Fragment>
      <Helmet>
        <title>Portfolio | {id} | RPH</title>
        <link rel="canonical" href="https://rphuae.ae/en/portfolio" />
      </Helmet>
      <Header />
      <PageTitle pageTitle={"PORTFOLIO"} pagesub={"Portfolio"} bg={banner} />
      <PortfolioInnerDetails
        globalLanguage={globalLanguage}
        setBanner={setBanner}
      />
      <NewPortfolioSlider globalLanguage={globalLanguage} />
      <SignUpNewsLetter />
      <Footer />
    </Fragment>
  );
};
export default PortfolioInnerPage;
