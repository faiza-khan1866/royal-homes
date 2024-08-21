import React from "react";
import { Helmet } from 'react-helmet-async';
import Header from "../../components/header";
import SignUpNewsLetter from "../../components/SignUpNewsLetter";
import PrivacyPolicyContent from "../../components/PrivacyPolicyContent";
import PageTitle from "../../components/pagetitle";

function PrivacyPolicy() {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | RPH</title>
      </Helmet>
      <Header />
      <PageTitle pageTitle={"Privacy Policy"} pagesub={"privacy-policy"} />

      <PrivacyPolicyContent />
      <SignUpNewsLetter />
    </>
  );
}

export default PrivacyPolicy;
