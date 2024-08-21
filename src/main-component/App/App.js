import React, { useEffect } from "react";
import AllRoute from "../router";
import AOS from "aos";
import "aos/dist/aos.css";
import "./App.css";
import Appointment from "../../components/appointment/Appointment";
import ScrollToTop from "../../components/ScrollToTop";
import WhatsappFixedIcon from "../../components/whatsappLogo/WhatsappFixedIcon";
import usePreventZoom from "./usePreventZoom";
import BookConsultation from "../../components/BookConsultation/BookConsultation";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { HelmetProvider } from "react-helmet-async";

const App = () => {
  const queryClient = new QueryClient();

  usePreventZoom();
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 1000,
    });
  });

  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <div className="App body_wrap">
          <Appointment />
          <AllRoute />
          <WhatsappFixedIcon />
          <ScrollToTop />
          <BookConsultation />
        </div>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </HelmetProvider>
  );
};

export default App;
