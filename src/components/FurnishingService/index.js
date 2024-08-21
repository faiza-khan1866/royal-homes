import React from "react";
import { Link } from "react-router-dom";
import service1 from "../../img/services/Furnishing_Services/FrnishingService.webp";
import "./style.css";

const FurnishingService = ({ globalLanguage }) => {
  return (
    <div className="FurnishingService_area FurnishingService_area45s">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-sm-6">
            <div
              className="service_maintenance_box"
              data-aos="fade-right"
              data-aos-delay="100"
            >
              <div className="furn_title">Furnishing Services</div>
              <p>
                Looking to furnish your property for personal use or a holiday
                home rental?
              </p>
              <p>
                Teaming up with premium designers and manufacturers worldwide,
                we cater to your needs and budget to create the perfect
                furnishing package for your or your tenant's needs.
              </p>
              <p>
                Our design team maximizes practicality and comfort while
                showcasing uniqueness through exquisite custom pieces. Contact
                us for more information!
              </p>
              <Link
                to={`/${globalLanguage}/contact`}
                className="cta-btn btn-border"
              >
                Contact Us
              </Link>
            </div>
          </div>
          <div className="col-lg-6 col-sm-6">
            <img
              src={service1}
              className="img_thumb2"
              alt="Contact-Us-Thumbnailmg"
              title="Contact us Thumbnail"
              data-aos="fade-up"
              data-aos-delay="100"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FurnishingService;
