import React from "react";
import { Link } from "react-router-dom";
import serviceImg1 from "../../img/servicesTypes/SInvestment1.png";
import serviceImg2 from "../../img/servicesTypes/SInvestment2.png";
import Slider from "react-slick";
import { HiOutlineArrowSmRight, HiOutlineArrowSmLeft } from "react-icons/hi";

import "./style.css";

const NextArrow = ({ onClick }) => (
  <button className="nextArrow_wrape" onClick={onClick}>
    <HiOutlineArrowSmRight fontSize={"24px"} />
  </button>
);

const PrevArrow = ({ onClick }) => (
  <button className="prevArrow_wrape" onClick={onClick}>
    <HiOutlineArrowSmLeft fontSize={"24px"} />
  </button>
);

const ServiceInvestment = ({ globalLanguage }) => {
  const settings = {
    dots: false,
    arrows: false,
    // nextArrow: <NextArrow />,
    // prevArrow: <PrevArrow />,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3500,
  };
  return (
    <div className="service_investment_area service_investment_area_support_4543">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-sm-6">
            <div className="row align-items-lg-end justify-content-lg-end justify-content-md-center">
              <div className="col-lg-5 ">
                <img
                  src={serviceImg1}
                  className="InvestMent_img1"
                  alt="Investment-image"
                  title="Investment Support Image"
                  data-aos="fade-up"
                  data-aos-delay="100"
                />
              </div>
              <div className="col-lg-5 MobileCOl">
                <img
                  src={serviceImg2}
                  alt="Investment-image"
                  title="Investment Support Image"
                  data-aos="fade-up"
                  data-aos-delay="100"
                />
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-sm-6">
            <Slider {...settings}>
              {[1].map((item, i) => (
                <div
                  className="service_investment_box"
                  data-aos="fade-left"
                  data-aos-delay="100"
                  key={i}
                >
                  <h3>RPH Investment Support™</h3>
                  <p>
                    Following the completion of a fit out & Renovation, if
                    geared towards investment, RPH offers post-project
                    arrangements to help clients secure the highest potential
                    rental and sales values after completion through various
                    studies and practices
                  </p>
                  <p>
                    We Provide a Promise of a 100%ROI increase in sales value
                    for full renovations completed on your pro…” with “We
                    promise a 100% increase in ROI for full renovations
                    completed on your property. The best part? RPH Investment
                    Support is completely free!
                  </p>
                  <p>
                    We will assist you with marketing and listing the unit with
                    Triple-A agents in Dubai to ensure the maximum possible
                    return after renovation is achieved, which often surpasses
                    our original feasibility studies and projections.
                  </p>
                  <Link
                    to={`/${globalLanguage}/investment-support`}
                    className="cta-btn btn-border"
                  >
                    View RPH Investment Support™ Page
                  </Link>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ServiceInvestment;
