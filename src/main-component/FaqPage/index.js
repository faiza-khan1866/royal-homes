import React, { Fragment, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import Header from "../../components/header";
import PageTitle from "../../components/pagetitle";
import Faq from "../../components/faq";
import Footer from "../../components/footer";
import SignUpNewsLetter from "../../components/SignUpNewsLetter";
import FaqsContentusForm from "../../components/FaqsContentusForm";
import { useLanguage } from "../../services/context/language/LanguageContext";
import banner from "../../img/faq/faqbanner.jpg";
const FaqPage = () => {
  const { globalLanguage } = useLanguage();

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  useEffect(() => {
    goToTop();
  }, []);
  return (
    <Fragment>
      <Helmet>
        <title>Frequently Asked Questions (FAQs) | RPH</title>
        <meta name="title" content="Frequently Asked Questions (FAQs) | RPH" />
        <meta
          name="description"
          content="Elevate your space with RPH, the premier fitout company. Uncover answers to your burning questions about our services, designs, and project management"
        />
        <link rel="canonical" href="https://rphuae.ae/en/faq" />
        {/* OG TAGS STAR */}
        {/* <!-- Facebook Meta Tags --> */}
        <meta property="og:url" content="https://rphuae.ae/en/faq" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Frequently Asked Questions (FAQs) | RPH"
        />
        <meta
          property="og:description"
          content="Elevate your space with RPH, the premier fitout company. Uncover answers to your burning questions about our services, designs, and project management."
        />
        <meta
          property="og:image"
          content="https://royal-home.b-cdn.net/images/rph-logo-170565365042.png"
        />

        {/* <!-- Twitter Meta Tags --> */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="rphuae.ae" />
        <meta property="twitter:url" content="https://rphuae.ae/en/faq" />
        <meta
          name="twitter:title"
          content="Frequently Asked Questions (FAQs) | RPH"
        />
        <meta
          name="twitter:description"
          content="Elevate your space with RPH, the premier fitout company. Uncover answers to your burning questions about our services, designs, and project management."
        />
        <meta
          name="twitter:image"
          content="https://royal-home.b-cdn.net/images/rph-logo-170565365042.png"
        />

        {/* OG TAGS END */}
      </Helmet>
      <Header />
      <PageTitle
        pageTitle={"Frequently Asked Questions"}
        pagesub={"FAQ"}
        bg={banner}
      />
      <Faq globalLanguage={globalLanguage} />
      <FaqsContentusForm globalLanguage={globalLanguage} />
      <SignUpNewsLetter />
      <Footer />
    </Fragment>
  );
};
export default FaqPage;
