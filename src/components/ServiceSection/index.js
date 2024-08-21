import React from "react";
import { Link } from "react-router-dom";

// import serviceImg1 from "../../img/service-bg-1.png";
// import serviceImg2 from "../../img/service-bg-2.jpg";
// import serviceImg3 from "../../img/service-bg-3.jpg";
// import serviceIcon1 from "../../img/service-icon-1.png";
// import serviceIcon2 from "../../img/service-icon-2.png";
// import serviceIcon3 from "../../img/service-icon-3.png";
import serviceImg1 from "../../img/card/interiror_design.png";
import serviceImg2 from "../../img/card/architecture.png";
import serviceImg3 from "../../img/card/house_planning.png";
import serviceIcon1 from "../../img/card logos/interior_disign_logo.png";
import serviceIcon2 from "../../img/card logos/architecture logo.png";
import serviceIcon3 from "../../img/card logos/housePlanning logo.png";
import "./style.css";

const ServiceSection = ({ globalLanguage }) => {
  return (
    <section className="service-area">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-4 col-md-6">
            <div
              className="service-box"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="service-icon">
                <img src={serviceIcon1} alt="service" />
              </div>
              <div className="service-text">
                <h3 className="Service_area_title mb-2">Interior Design</h3>
                <p>
                  We develop the full cycle of project documentation &amp; full
                  details. Our clients satisfaction is most
                </p>
                <Link
                  to={`/${globalLanguage}/service-single`}
                  className="cta-btn btn-border"
                >
                  Read More
                </Link>
              </div>
              <img src={serviceImg1} alt="service" />
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div
              className="service-box"
              data-aos="fade-up"
              data-aos-delay="250"
            >
              <div className="service-icon">
                <img src={serviceIcon2} alt="service" />
              </div>
              <div className="service-text">
                <h3 className="Service_area_title  mb-2">Architecture</h3>
                <p>
                  We develop the full cycle of project documentation &amp; full
                  details. Our clients satisfaction is most
                </p>
                <Link
                  to={`/${globalLanguage}/service-single`}
                  className="cta-btn btn-border"
                >
                  Read More
                </Link>
              </div>
              <img src={serviceImg2} alt="service" />
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div
              className="service-box"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <div className="service-icon">
                <img src={serviceIcon3} alt="service" />
              </div>
              <div className="service-text">
                <h3 className="Service_area_title  mb-2">House Planning</h3>
                <p>
                  We develop the full cycle of project documentation &amp; full
                  details. Our clients satisfaction is most
                </p>
                <Link
                  to={`/${globalLanguage}/service-single`}
                  className="cta-btn btn-border"
                >
                  Read More
                </Link>
              </div>
              <img src={serviceImg3} alt="service" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
