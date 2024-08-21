import React, { Fragment } from "react";
import { Helmet } from 'react-helmet-async';
import Header from "../../components/header";
import Hero from "../../components/hero";
import AboutUsSection from "../../components/AboutUsSection";
// import Testimonial from "../../components/testimonial";
import BlogSection from "../../components/BlogSection";
import Footer from "../../components/footer";
import OurOffering from "../../components/homeOurOffering";
import HomeHowWeWork from "../../components/HowWeWork";
import NewProjectSection from "../../components/NewProjectSection";
import SignUpNewsLetter from "../../components/SignUpNewsLetter";
import { useLanguage } from "../../services/context/language/LanguageContext";
import OurBrochure from "../../components/OurBrochure";
// import HomeIntroVideo from "../../components/HomeIntroVideo";

const HomePage = () => {
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
        <title>RPH | Fit Out Company in Dubai, UAE</title>
        <meta name="title" content="RPH | Fit Out Company in Dubai, UAE" />
        <meta
          name="description"
          content="Discover the art of fit-outs with RPH, your trusted fit-out company in Dubai, UAE. Elevate your space with our precision and style, setting new benchmarks in interiors"
        />
        <link rel="canonical" href="https://rphuae.ae/en" />

        {/* OG TAGS START */}
        {/* <!-- Facebook Meta Tags --> */}
        <meta property="og:url" content="https://rphuae.ae/en" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="RPH | Fit Out Company in Dubai, UAE"
        />
        <meta
          property="og:description"
          content="Discover the art of fit-outs with RPH, your trusted fit-out company in Dubai, UAE. Elevate your space with our precision and style, setting new benchmarks in interiors."
        />
        <meta
          property="og:image"
          content="https://royal-home.b-cdn.net/images/rph-logo-170565365042.png"
        />

        {/* <!-- Twitter Meta Tags --> */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="rphuae.ae" />
        <meta property="twitter:url" content="https://rphuae.ae/en" />
        <meta
          name="twitter:title"
          content="RPH | Fit Out Company in Dubai, UAE"
        />
        <meta
          name="twitter:description"
          content="Discover the art of fit-outs with RPH, your trusted fit-out company in Dubai, UAE. Elevate your space with our precision and style, setting new benchmarks in interiors."
        />
        <meta
          name="twitter:image"
          content="https://royal-home.b-cdn.net/images/rph-logo-170565365042.png"
        />

        {/* OG TAGS END */}
        {/* <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "RPH",
              "image": "https://rphuae.ae/static/media/logoNoBg1.a996e8610a3eef92a585.webp",
              "@id": "",
              "url": "https://rphuae.ae/en",
              "telephone": "+971 55 913 6032",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Al Marri Building Al Marrar office #204 - A1",
                "addressLocality": "Dubai",
                "postalCode": "",
                "addressCountry": "AE"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 25.2815589,
                "longitude": 55.3153476
              },
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                  "Sunday"
                ],
                "opens": "09:30",
                "closes": "18:30"
              },
              "sameAs": [
                "https://www.facebook.com/rphuae",
                "https://twitter.com/RphUae",
                "https://www.instagram.com/rphuae/",
                "https://www.youtube.com/@rphuae",
                "https://rphuae.ae/en"
              ]
            }
          `}
        </script> */}
      </Helmet>
      <Header />
      <Hero globalLanguage={globalLanguage} />
      {/* <HomeIntroVideo globalLanguage={globalLanguage} /> */}
      <OurBrochure globalLanguage={globalLanguage} />
      <AboutUsSection globalLanguage={globalLanguage} />
      <OurOffering globalLanguage={globalLanguage} />
      <HomeHowWeWork globalLanguage={globalLanguage} />
      <NewProjectSection globalLanguage={globalLanguage} />
      {/* <Testimonial globalLanguage={globalLanguage} /> */}
      <BlogSection globalLanguage={globalLanguage} />
      <SignUpNewsLetter />
      <Footer />
    </Fragment>
  );
};
export default HomePage;
