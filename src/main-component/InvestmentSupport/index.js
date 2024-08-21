import React, { Fragment } from "react";
import { Helmet } from "react-helmet-async";
import Header from "../../components/header";
import PageTitle from "../../components/pagetitle";
import SignUpNewsLetter from "../../components/SignUpNewsLetter";
import InvestmentSupportSlider from "../../components/InvestmentSupportSlider";
import Footer from "../../components/footer";
import InvestmentContactusForm from "../../components/InvestmentContactusForm";
import InvestmentService2 from "../../components/InvestMentService2";
import InvestmentService3 from "../../components/InvestmentService3";
import InvestmentService1 from "../../components/InvestmentService1";
import { useLanguage } from "../../services/context/language/LanguageContext";
import InvestmentProjectAccomplishment from "../../components/InvestmentProjectAccomplishment";
import banner from "../../img/investment/investment1.jpg";

import "./style.css";
const InvestmentSupport = () => {
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
        <title>
          Investment-Support | Best Return on Investment in Dubai | RPH
        </title>
        <meta
          name="title"
          content="Investment-Support | Best Return on Investment in Dubai | RPH"
        />
        <meta
          name="description"
          content="Unlock the Best Return on Investment in Dubai with RPH Investment-Support. Elevate your financial goals with expert guidance and strategic insights."
        />
        <link rel="canonical" href="https://rphuae.ae/en/investment-support" />

        {/* OG TAGS START  */}
        {/* <!-- Facebook Meta Tags --> */}
        <meta
          property="og:url"
          content="https://rphuae.ae/en/investment-support"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Investment-Support | Best Return on Investment in Dubai | RPH"
        />
        <meta
          property="og:description"
          content="Unlock the Best Return on Investment in Dubai with RPH Investment-Support. Elevate your financial goals with expert guidance and strategic insights."
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
          content="https://rphuae.ae/en/investment-support"
        />
        <meta
          name="twitter:title"
          content="Investment-Support | Best Return on Investment in Dubai | RPH"
        />
        <meta
          name="twitter:description"
          content="Unlock the Best Return on Investment in Dubai with RPH Investment-Support. Elevate your financial goals with expert guidance and strategic insights."
        />
        <meta
          name="twitter:image"
          content="https://royal-home.b-cdn.net/images/rph-logo-170565365042.png"
        />

        {/* OG TAGS END */}
      </Helmet>
      <Header />
      <PageTitle
        pageTitle={"RPH Investment Support"}
        pagesub={"Investment-Support"}
        bg={banner}
      />
      <div className="tstLPol">
        <InvestmentSupportSlider globalLanguage={globalLanguage} />
        {/* <InvestmentService2 globalLanguage={globalLanguage} /> */}
        <InvestmentService1 globalLanguage={globalLanguage} />
      </div>
      {/* <InvestmentService3 globalLanguage={globalLanguage} /> */}
      <InvestmentProjectAccomplishment globalLanguage={globalLanguage} />
      <InvestmentContactusForm globalLanguage={globalLanguage} />

      <SignUpNewsLetter globalLanguage={globalLanguage} />

      <Footer />
    </Fragment>
  );
};
export default InvestmentSupport;
