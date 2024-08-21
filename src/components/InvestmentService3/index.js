import React from "react";
import { Link } from "react-router-dom";
import serviceImg1 from "../../img/common/videoThumb.png";

import s from "./style.module.css";

const InvestmentService3 = () => {
  return (
    <section className={s.service_interior_area}>
      <div className={s.InvestmentWrapper}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12 col-sm-12">
              <div
                className={s.investMent_service_Box}
                data-aos="fade-left"
                data-aos-delay="100"
              >
                <h4>HOW IT WORKS</h4>
                <p>
                  Click the video below to view a comprehensive breakdown of how
                  RPH Investment Support™ delivers exceptional results for our
                  valued clients.
                </p>
                {/* <Link to="/contact" className="cta-btn btn-border">
                Contact Us
              </Link> */}
              </div>
            </div>
            <div className="col-lg-12 col-sm-12">
              <div className={s.investMent_service_Box}>
                <video
                  controls
                  className={s.CompVideo}
                  poster={serviceImg1}
                  id="video_background"
                >
                  <source src="https://youtu.be/8jeYVNIRrQA" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default InvestmentService3;
