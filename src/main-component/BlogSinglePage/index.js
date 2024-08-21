import React, { Fragment } from "react";
import { Helmet } from 'react-helmet-async';
import Header from "../../components/header";
import PageTitle from "../../components/pagetitle";
import BlogSingle from "../../components/BlogSingle";
import Footer from "../../components/footer";
import { useParams } from "react-router-dom";
import { useLanguage } from "../../services/context/language/LanguageContext";
import SignUpNewsLetter from "../../components/SignUpNewsLetter";
import banner from "../../img/blogs/Blogs_Banner_main.png";
const ContactPage = () => {
  const { globalLanguage } = useLanguage();
  const { blogRoute } = useParams();
  const goToTop = () => {
    window.scrollTo({
      top: 150,
      behavior: "smooth",
    });
  };
  React.useEffect(() => {
    goToTop();
  }, []);
  return (
    <Fragment>
      <Helmet>
        <title>Blogs | {blogRoute} | RPH</title>
        <link rel="canonical" href={`https://rphuae.ae/en/blog/${blogRoute}`} />
      </Helmet>
      <Header />
      <PageTitle pageTitle={"BLOG"} pagesub={"Blog"} bg={banner} />
      <BlogSingle globalLanguage={globalLanguage} />
      <SignUpNewsLetter />
      <Footer />
    </Fragment>
  );
};
export default ContactPage;
