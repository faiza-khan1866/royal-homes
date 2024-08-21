import React from "react";
import { Link } from "react-router-dom";
// import bg from "../../img/homeAbout/aboutHome_BG.png";
// import img3 from "../../img/about-bg.png";
import img2 from "../../img/home/Left.webp";
import img1 from "../../img/home/Right.webp";
// import { motion } from "framer-motion/dist/framer-motion";
import { motion } from "framer-motion";
import "./style.css";

const OurOffering = ({ globalLanguage }) => {
  return (
    <div className="our-offering-arae mt-5">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-6 ">
            <div className="about-left" data-aos="fade-right">
              <div className="site-heading">
                <h3 className="sub-title">OUR OFFERINGS</h3>
                <h2 className="section-title">
                  LUXURY RESIDENTIAL <br /> FIT OUTS & <br /> INVESTMENT
                  FEASIBILITY
                </h2>
                <br />
                <Link to={`/${globalLanguage}/services`} className="about-btn">
                  View All Our Services
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6">
            <div className="about-right" data-aos="fade-left">
              <motion.img
                whileHover={{ scale: 1.05 }}
                className="about_img_1 "
                // src={img1}
                src="https://royal-home.b-cdn.net/website/residential-fit-outs.webp"
                alt="Residential Fit Outs"
                title="Our Offerings"
                loading="lazy"
                height={"380"}
                width={"320"}
              />
              <motion.img
                whileHover={{ scale: 1.05 }}
                className="about_img_2"
                // src={img2}
                src="https://royal-home.b-cdn.net/website/investment-feasibility.webp"
                alt="our-offerings"
                title="Investment Feasibility"
                loading="lazy"
                height={"430"}
                width={"320"}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurOffering;
