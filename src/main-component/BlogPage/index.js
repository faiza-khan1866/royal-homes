import React, { Fragment } from "react";
import { Helmet } from 'react-helmet-async';
import Header from "../../components/header";
import PageTitle from "../../components/pagetitle";
import BlogList from "../../components/BlogList";
import Footer from "../../components/footer";
import { useLanguage } from "../../services/context/language/LanguageContext";
import banner from "../../img/blogs/Blogs_Banner_main.png";
const ContactPage = () => {
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
        <title>Our Blog | RPH</title>
        <meta name="title" content="Our Blog | RPH" />
        <meta
          name="description"
          content="Discover the latest insights, trends, and expertise in our blog by RPH. Dive into a wealth of information covering a range of topics, from real estate & investment tips."
        />
        <link rel="canonical" href="https://rphuae.ae/en/blogs" />

        {/* OG TAGS START  */}
        {/* <!-- Facebook Meta Tags --> */}
        <meta property="og:url" content="https://rphuae.ae/en/blogs" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Our Blog | RPH" />
        <meta
          property="og:description"
          content="Discover the latest insights, trends, and expertise in our blog by RPH. Dive into a wealth of information covering a range of topics, from real estate & investment tips."
        />
        <meta
          property="og:image"
          content="https://royal-home.b-cdn.net/images/rph-logo-170565365042.png"
        />

        {/* <!-- Twitter Meta Tags --> */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="rphuae.ae" />
        <meta property="twitter:url" content="https://rphuae.ae/en/blogs" />
        <meta name="twitter:title" content="Our Blog | RPH" />
        <meta
          name="twitter:description"
          content="Discover the latest insights, trends, and expertise in our blog by RPH. Dive into a wealth of information covering a range of topics, from real estate & investment tips."
        />
        <meta
          name="twitter:image"
          content="https://royal-home.b-cdn.net/images/rph-logo-170565365042.png"
        />

        {/* OG TAGS END  */}
      </Helmet>
      <Header />
      <PageTitle pageTitle={"BLOGS"} pagesub={"Blogs"} bg={banner} />
      <BlogList globalLanguage={globalLanguage} />
      <Footer />
    </Fragment>
  );
};
export default ContactPage;
