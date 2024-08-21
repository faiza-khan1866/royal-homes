import React from "react";
import { Link } from "react-router-dom";
import serviceImg from "../../img/servicesTypes/FurnishingService.png";
import s from "./style.module.css";

const InvestmentService2 = () => {
  return (
    <div className={s.service_area}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-sm-6">
            <div
              className={s.service_box}
              data-aos="fade-right"
              data-aos-delay="100"
            >
              <h3>We Are CONFIDENT</h3>
              <p>
                RPH Investment Support&#8482; guarantees a{" "}
                <strong>
                  {" "}
                  MINIMUM Sales Return on investment (ROI) of 100%
                </strong>
                for all our Completed Full Fit Out & Renovation projects,
                calculated after accounting for the client's investment costs in
                the project. This ensures the Post Project Sales values reflect
                a profitable outcome for every client we serve.
              </p>
              {/* <Link to="/contact" className="cta-btn btn-border">
                Contact Us
              </Link> */}
            </div>
          </div>
          <div className="col-lg-6 col-sm-6">
            <div className={s.service_box}>
              <div className={s.Img_container}>
                <img
                  src={serviceImg}
                  alt="service"
                  data-aos="fade-up"
                  data-aos-delay="100"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvestmentService2;
