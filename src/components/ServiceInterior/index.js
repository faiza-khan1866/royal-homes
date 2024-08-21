import React from "react";
import { Link } from "react-router-dom";
import serviceImg2 from "../../img/services/More_Services_we_offer/left.png";
import serviceImg1 from "../../img/services/More_Services_we_offer/right.png";

import "./style.css";

const ServiceInterior = ({ globalLanguage }) => {
  return (
    <div className="service_interior_area service_interior_area5s4">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-sm-6">
            <div className="row align-items-end justify-content-end">
              <div className="col-lg-5">
                <img
                  src={serviceImg2}
                  className="ServiceInterior"
                  alt="Interior-Image"
                  title="Interior Image"
                  data-aos="fade-up"
                  data-aos-delay="100"
                />
              </div>
              <div className="col-lg-5 MobileCOl">
                <img
                  src={serviceImg1}
                  alt="Interior-Image"
                  title="Interior Image"
                  data-aos="fade-up"
                />
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-sm-6">
            <div
              className="service_interior_box"
              data-aos="fade-left"
              data-aos-delay="100"
            >
              <h4>MORE SERVICES WE OFEER</h4>
              <h3>
                Luxury Fit Outs & Construction <br />
                for Commercial Spaces
              </h3>
              <p>
                Looking to do a fit out on your new F&B location or construct
                another franchise location?
              </p>
              <p>
                From office spaces to restaurants, hotels, retail, and more, RPH
                offers custom fit out, design, municipal approvals and
                construction services to create the perfect project to suit your
                business’s needs with high-level Canadian practices.
              </p>
              <p>Contact us for more information!</p>
              <Link
                to={`/${globalLanguage}/contact`}
                className="cta-btn btn-border"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ServiceInterior;
