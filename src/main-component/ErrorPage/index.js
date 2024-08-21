import React, { Fragment } from "react";
import Header from "../../components/header";
import PageTitle from "../../components/pagetitle";
import Error from "../../components/404";
import Footer from "../../components/footer";
import { Helmet } from 'react-helmet-async';

const ErrorPage = () => {
  return (
    <Fragment>
      <Helmet>
        <title>RPH | Page Not Found</title>
        <meta name="prerender-status-code" content="404" />
      </Helmet>
      <Header />
      <PageTitle pageTitle={"ERROR"} pagesub={"404 Notfound"} />
      <Error />
      <Footer />
    </Fragment>
  );
};
export default ErrorPage;
