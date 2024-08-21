import React from "react";
import { Helmet } from 'react-helmet-async';
import Header from "../../components/header";
import PageTitle from "../../components/pagetitle";
import Footer from "../../components/footer";
import MaintancePageSection from "../../components/MaintancePageSection";
import SignUpNewsLetter from "../../components/SignUpNewsLetter";
import BlogSuggestCommon from "../../components/BlogSuggestCommon";
import { useLanguage } from "../../services/context/language/LanguageContext";
import banner from "../../img/maintance/maintance1.png";
function MaintancePage() {
  const { globalLanguage } = useLanguage();

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  React.useEffect(() => {
    // goToTop();
  }, []);
  return (
    <>
      <Helmet>
        <title>Maintenance Company in Dubai, UAE | RPH</title>
        <meta name="title" content="Maintenance Company in Dubai, UAE | RPH" />
        <meta
          name="description"
          content="Revitalize Your Space with RPH Maintenance Company in Dubai, UAE. Transforming Houses into Homes with Precision and Style."
        />
        <link rel="canonical" href="https://rphuae.ae/en/maintenance-company" />
        {/* OG TAGS START */}
        {/* <!-- Facebook Meta Tags --> */}
        <meta
          property="og:url"
          content="https://rphuae.ae/en/maintenance-company"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Maintenance Company in Dubai, UAE | RPH"
        />
        <meta
          property="og:description"
          content="Revitalize Your Space with RPH Maintenance Company in Dubai, UAE. Transforming Houses into Homes with Precision and Style."
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
          content="https://rphuae.ae/en/maintenance-company"
        />
        <meta
          name="twitter:title"
          content="Maintenance Company in Dubai, UAE | RPH"
        />
        <meta
          name="twitter:description"
          content="Revitalize Your Space with RPH Maintenance Company in Dubai, UAE. Transforming Houses into Homes with Precision and Style."
        />
        <meta
          name="twitter:image"
          content="https://royal-home.b-cdn.net/images/rph-logo-170565365042.png"
        />

        {/* OG TAGS END */}
      </Helmet>
      <Header />
      <PageTitle
        pageTitle={"MAINTENANCE SERVICES"}
        pagesub={"Maintenance"}
        bg={banner}
      />
      <MaintancePageSection globalLanguage={globalLanguage} />
      <BlogSuggestCommon globalLanguage={globalLanguage} filterId={7} />
      <SignUpNewsLetter />
      <Footer />
    </>
  );
}

export default MaintancePage;
