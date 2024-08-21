import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default (
  <Router>
    <Switch>
      <Route path="/" />
      <Route path="/en" />
      <Route path="/ar" />
      <Route path="/ru" />
      <Route path="/en/home" />
      <Route path="/ar/home" />
      <Route path="/ru/home" />
      <Route path="/en/about" />
      <Route path="/ar/about" />
      <Route path="/ru/about" />
      <Route path="/en/services" />
      <Route path="/ar/services" />
      <Route path="/ru/services" />
      <Route path="/en/maintenance-company" />
      <Route path="/ar/maintenance-company" />
      <Route path="/ru/maintenance-company" />
      <Route path="/en/fit-out-services" />
      <Route path="/ar/fit-out-services" />
      <Route path="/ru/fit-out-services" />
      <Route path="/en/investment-support" />
      <Route path="/ar/investment-support" />
      <Route path="/ru/investment-support" />
      <Route path="/en/portfolio" />
      <Route path="/ar/portfolio" />
      <Route path="/ru/portfolio" />
      <Route path="/en/portfolio-inner/:id" />
      <Route path="/ar/portfolio-inner/:id" />
      <Route path="/ru/portfolio-inner/:id" />
      <Route path="/en/faq" />
      <Route path="/ar/faq" />
      <Route path="/ru/faq" />
      <Route path="/en/contact" />
      <Route path="/ar/contact" />
      <Route path="/ru/contact" />
      <Route path="/en/contact/:policy" />
      <Route path="/ar/contact/:policy" />
      <Route path="/ru/contact/:policy" />
      <Route path="/en/blogs" />
      <Route path="/ar/blogs" />
      <Route path="/ru/blogs" />
      <Route path="/en/blogs/:categoryId" />
      <Route path="/ar/blogs/:categoryId" />
      <Route path="/ru/blogs/:categoryId" />
      <Route path="/en/blog/:blogRoute" />
      <Route path="/ar/blog/:blogRoute" />
      <Route path="/ru/blog/:blogRoute" />
      <Route path="/en/privacy-policy" />
      <Route path="/ar/privacy-policy" />
      <Route path="/ru/privacy-policy" />
    </Switch>
  </Router>
);
