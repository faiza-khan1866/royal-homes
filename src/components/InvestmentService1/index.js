import React from "react";
import { Link } from "react-router-dom";
import serviceImg1 from "../../img/investment/investment4.png";

import s from "./style.module.css";

const InvestmentService1 = () => {
  return (
    <div className={s.Investment_service_area}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-sm-6 ">
            <div
              className={s.investment_service_box}
              data-aos="fade-left"
              data-aos-delay="100"
            >
              <h3>
                The Best Part? RPH Investment Support™ is Completely Free.
              </h3>
              <p>
                You read that correctly! Our promise of a MINIMUM 100%+ ROI on
                all full Fit Out & Renovation projects comes with zero extra
                charges. This valuable guarantee is seamlessly included in our
                comprehensive Fit Out & Renovation packages designed to maximize
                property potential for our clients. We're dedicated to providing
                unmatched value, ensuring you enjoy both exceptional quality of
                work and the best return on investment in Dubai at no additional
                cost.
              </p>
              <p>
                Invest in your property with confidence. Know that your success
                is our priority, and we can achieve it without stretching your
                budget!
              </p>
              {/* <Link to="/contact" className="cta-btn btn-border">
                Contact Us
              </Link> */}
            </div>
          </div>
          <div className="col-lg-6 col-sm-6">
            <div
              className={s.investment_service_box}
              data-aos="fade-left"
              data-aos-delay="100"
            >
              <div className={s.Img_container}>
                <img
                  src={serviceImg1}
                  alt="Investment-Service-Image"
                  title="Investment Service Image"
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
export default InvestmentService1;
