import React, { Fragment } from "react";
import { Helmet } from "react-helmet-async";
import Header from "../../components/header";
import PageTitle from "../../components/pagetitle";
import Feature from "../../components/feature";
import Partners from "../../components/partners";
import Expertise from "../../components/expertise";
import Team from "../../components/team";
import Footer from "../../components/footer";
import SignUpNewsLetter from "../../components/SignUpNewsLetter";
import AboutMainCount from "../../components/AboutMainCount";
import AboutMainPage from "../../components/AboutMainPage";
import AboutOurHistory from "../../components/AboutOurHistory";
import AboutGoals from "../../components/AboutGoals";
import { useLanguage } from "../../services/context/language/LanguageContext";
import banner from "../../img/about/aboutbanner.jpg";

const AboutPageNew = () => {
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
        <title>About Us | RPH</title>
        <meta name="title" content="About Us | RPH" />
        <meta
          name="description"
          content="Discover our commitment to precision, innovation, and excellence in every project. Learn more about our journey in crafting exceptional environments."
        />
        <link rel="canonical" href="https://rphuae.ae/en/about" />
        {/* OG TAGS START  */}
        {/* <!-- Facebook Meta Tags --> */}
        <meta property="og:url" content="https://rphuae.ae/en/about" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="About Us | RPH" />
        <meta
          property="og:description"
          content="Discover our commitment to precision, innovation, and excellence in every project. Learn more about our journey in crafting exceptional environments."
        />
        <meta
          property="og:image"
          content="https://royal-home.b-cdn.net/images/rph-logo-170565365042.png"
        />

        {/* <!-- Twitter Meta Tags --> */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="rphuae.ae" />
        <meta property="twitter:url" content="https://rphuae.ae/en/about" />
        <meta name="twitter:title" content="About Us | RPH" />
        <meta
          name="twitter:description"
          content="Discover our commitment to precision, innovation, and excellence in every project. Learn more about our journey in crafting exceptional environments."
        />
        <meta
          name="twitter:image"
          content="https://royal-home.b-cdn.net/images/rph-logo-170565365042.png"
        />

        {/* OG TAGS END */}
      </Helmet>
      <Header />
      <PageTitle pageTitle={"About Us"} pagesub={"About"} bg={banner} />
      <AboutMainPage />
      <AboutMainCount />
      {/* <AboutOurHistory /> */}
      <AboutGoals />
      <SignUpNewsLetter />
      <Footer />
    </Fragment>
  );
};
export default AboutPageNew;
