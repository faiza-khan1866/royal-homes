import React, { useState } from "react";
import brochure from "../../assets/Welcome_to_RPH.pdf";
import "./style.css";
const OurBrochure = ({ globalLanguage }) => {
  return (
    <div className="BrochureArea">
      <div className="container">
        <div className="BrochureArea-top" data-aos="fade-down">
          {/* <div className="site-heading"> */}
          {/* <h3 className="sub-title"></h3> */}
          {/* <h2 className="section-title">
                </h2> */}
          {/* </div> */}
          <a
            href={brochure}
            target="_blank"
            className="brochure-btn change_toUperCase"
          >
            Download Our Brochure
          </a>
        </div>
      </div>
    </div>
  );
};

export default OurBrochure;
