import React, { Fragment } from "react";
import Header from "../../components/header";
import PageTitle from "../../components/pagetitle";
import TeamList from "../../components/TeamList";
import Footer from "../../components/footer";
import { useLanguage } from "../../services/context/language/LanguageContext";

const TeamPage = () => {
  const { globalLanguage } = useLanguage();

  return (
    <Fragment>
      <Header />
      <PageTitle pageTitle={"TEAM"} pagesub={"Contact Team"} />
      <TeamList globalLanguage={globalLanguage} />
      <Footer />
    </Fragment>
  );
};
export default TeamPage;
