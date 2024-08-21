import React from "react";
import { Link } from "react-router-dom";
import serviceImg1 from "../../img/fitout/fitout2.jpg";
import "./style.css";

const ServiceFitOut = () => {
  return (
    <section className="service_fit_out_area service_fit_out_area9912">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-sm-6 p-md-0">
            <div
              className="service_fit_out_box"
              data-aos="fade-right"
              data-aos-delay="100"
            >
              <h3>Fit-Outs & Renovations</h3>
              <p>
                Welcome to RPH, Dubai's only Canadian-rooted fit out company.
                Transcending the ordinary, we design luxury spaces by committing
                to deliver The Pinnacle of luxe Living™ with our comprehensive A
                - Z team ranging from architects to interior designers and the
                best fit out services in Dubai, we seamlessly turn visions into
                realities. Our fit outs, renovations and ground-up constructions
                cater to end-user clients and those looking to maximize the
                value of their property.
              </p>
            </div>
          </div>
          <div className="col-lg-6 col-sm-6 p-md-0">
            {/* <video
              autoPlay
              muted
              loop
              controls
              className="Video_section"
              poster={serviceImg}
              id="video_background"
            >
              <source src="null" type="video/mp4" />
              Your browser does not support the video tag.
            </video> */}
            <img
              src={serviceImg1}
              alt="Fitout-Image"
              title="Fitout Image"
              data-aos="fade-up"
              data-aos-delay="100"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default ServiceFitOut;
