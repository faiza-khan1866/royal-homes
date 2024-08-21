import React from "react";
import { Link } from "react-router-dom";
import serviceImg1 from "../../img/services/Maintenance_Services/4.jpg";
import "./style.css";

const ServiceMaintenance = ({ globalLanguage }) => {
  return (
    <section className="service_maintenance_area service_maintenance_area55s">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-sm-6">
            <div
              className="service_maintenance_box"
              data-aos="fade-right"
              data-aos-delay="100"
            >
              <h3>Maintenance Services</h3>
              <p>
                We offer complete maintenance management packages tailored to
                the requirements of your property to ensure it is kept in
                pristine condition.
              </p>
              <p>
                With monthly status reporting, preventative maintenance
                management, and complete repair services, RPH is committed to
                ensuring your property is maintained to the pinnacle of
                excellence.
                {/* <Link to={`/${globalLanguage}/maintenance`}>click here.</Link> */}
              </p>
              <Link
                to={`/${globalLanguage}/maintenance-company`}
                className="cta-btn btn-border"
              >
                View Our Maintenance Services
              </Link>
            </div>
          </div>
          <div className="col-lg-6 col-sm-6">
            <img
              src={serviceImg1}
              alt="Maintenance-Service"
              title="Maintenance Service"
              className="Img_thumb"
              data-aos="fade-up"
              data-aos-delay="100"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceMaintenance;
