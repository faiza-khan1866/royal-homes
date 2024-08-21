import React, { Fragment } from "react";
import { Helmet } from "react-helmet-async";
import Header from "../../components/header";
import PageTitle from "../../components/pagetitle";
import Contactpage from "../../components/Contactpage";
import Footer from "../../components/footer";
import SignUpNewsLetter from "../../components/SignUpNewsLetter";
import { useLanguage } from "../../services/context/language/LanguageContext";
import banner from "../../img/contact_us/contactbanner.png";
const NewContactPage = () => {
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
        <title>Contact Us for Fit out and Renovation Services</title>
        <meta
          name="title"
          content="Contact Us for Fit out and Renovation Services"
        />
        <meta
          name="description"
          content="Transform Your Space with Expert Fit-Out and Renovation Services. Contact Us Today for Precision, Style, and Excellence in Every Detail."
        />
        <link rel="canonical" href="https://rphuae.ae/en/contact" />

        {/* OG TAGS START  */}
        {/* <!-- Facebook Meta Tags --> */}
        <meta property="og:url" content="https://rphuae.ae/en/contact" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Contact Us for Fit out and Renovation Services"
        />
        <meta
          property="og:description"
          content="Transform Your Space with Expert Fit-Out and Renovation Services. Contact Us Today for Precision, Style, and Excellence in Every Detail."
        />
        <meta
          property="og:image"
          content="https://royal-home.b-cdn.net/images/rph-logo-170565365042.png"
        />

        {/* <!-- Twitter Meta Tags --> */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="rphuae.ae" />
        <meta property="twitter:url" content="https://rphuae.ae/en/contact" />
        <meta
          name="twitter:title"
          content="Contact Us for Fit out and Renovation Services"
        />
        <meta
          name="twitter:description"
          content="Transform Your Space with Expert Fit-Out and Renovation Services. Contact Us Today for Precision, Style, and Excellence in Every Detail."
        />
        <meta
          name="twitter:image"
          content="https://royal-home.b-cdn.net/images/rph-logo-170565365042.png"
        />

        {/* OG TAGS END  */}
      </Helmet>
      <Header />
      <PageTitle pageTitle={"CONTACT"} pagesub={"Contact"} bg={banner} />
      <Contactpage globalLanguage={globalLanguage} />
      <SignUpNewsLetter />
      <Footer />
    </Fragment>
  );
};
export default NewContactPage;
