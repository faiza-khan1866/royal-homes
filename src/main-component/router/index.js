import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { LanguageProvider } from "../../services/context/language/LanguageContext";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
//pages
import PrivacyPolicy from "../PrivacyPolicy";

//# lazy routes
const Homepage = lazy(() => import("../HomePage"));
const AboutPageNew = lazy(() => import("../AboutPageNew"));
const ServicePage = lazy(() => import("../ServicePage"));
const MaintenancePage = lazy(() => import("../MaintancePage"));
const FitOutServices = lazy(() => import("../FitOutServices"));
const PortfolioPage = lazy(() => import("../PortfolioPage"));
const PortfolioInnerPage = lazy(() => import("../PortfolioInnerPage"));
const InvestmentSupport = lazy(() => import("../InvestmentSupport"));
const FaqPage = lazy(() => import("../FaqPage"));
const ContactPage = lazy(() => import("../NewContactPage"));
// const ErrorPage = lazy(() => import("../ErrorPage"));
const BlogPage = lazy(() => import("../BlogPage"));
const BlogSinglePage = lazy(() => import("../BlogSinglePage"));
const Loader = lazy(() => import("../../components/Loader/Loader"));

//# route import end

const AllRoute = () => {
  return (
    <Router>
      <Suspense fallback={<Loader />}>
        <LanguageProvider>
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route exact path="/:lang(en|ar|ru)" component={Homepage} />
            <Route path="/:lang(en|ar|ru)/home" component={Homepage} />
            <Route path="/:lang(en|ar|ru)/about" component={AboutPageNew} />
            <Route path="/:lang(en|ar|ru)/services" component={ServicePage} />
            <Route
              path="/:lang(en|ar|ru)/maintenance-company"
              component={MaintenancePage}
            />
            <Route
              path="/:lang(en|ar|ru)/fit-out-services"
              component={FitOutServices}
            />
            <Route
              path="/:lang(en|ar|ru)/investment-support"
              component={InvestmentSupport}
            />
            <Route
              exact
              path="/:lang(en|ar|ru)/portfolio"
              component={PortfolioPage}
            />
            <Route
              path="/:lang(en|ar|ru)/portfolio-inner/:id"
              component={PortfolioInnerPage}
            />
            <Route path="/:lang(en|ar|ru)/faq" component={FaqPage} />
            <Route
              exact
              path="/:lang(en|ar|ru)/contact"
              component={ContactPage}
            />
            <Route
              path="/:lang(en|ar|ru)/contact/:policy"
              component={ContactPage}
            />
            <Route exact path="/:lang(en|ar|ru)/blogs" component={BlogPage} />
            <Route
              path="/:lang(en|ar|ru)/blogs/:categoryId"
              component={BlogPage}
            />
            <Route
              path="/:lang(en|ar|ru)/blog/:blogRoute"
              component={BlogSinglePage}
            />
            {/* <Route
                exact
                path="/:lang(en|ar|ru)/privacy-policy"
                component={PrivacyPolicy}
              /> */}
            {/* <Route path="/*" component={ErrorPage} /> */}
          </Switch>
        </LanguageProvider>
      </Suspense>
    </Router>
  );
};

export default AllRoute;
