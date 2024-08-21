import React from "react";
import { Link } from "react-router-dom";

import serviceImg from "../../img/services/img3.png";
import serviceImg1 from "../../img/services/Fit-Outs & Renovations slider/1 (1).jpg";
import serviceImg2 from "../../img/services/Fit-Outs & Renovations slider/2 (3).jpg";
import serviceImg3 from "../../img/services/Fit-Outs & Renovations slider/3 (2).jpg";

import Slider from "react-slick";

import { useRef } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import "./style.css";

const ServiceList = ({ globalLanguage }) => {
  const sliderAboutRef = useRef();

  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
  };
  const nextSlide = () => {
    sliderAboutRef?.current?.slickNext();
  };
  const previousSlide = () => {
    sliderAboutRef?.current?.slickPrev();
  };
  return (
    <section className="Service_list_area Service_list_area4s5">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-sm-12">
            <div
              className="fit_out_area_box"
              data-aos="fade-right"
              data-aos-delay="100"
            >
              <h3>Fit-Outs & Renovations</h3>
              <p className="text-end">
                Welcome to RPH, Dubai's only Canadian-rooted fit out company.
                Transcending the ordinary, we craft luxury spaces by committing
                to deliver The Pinnacle of Luxe Living™
              </p>
              <p className="text-end">
                With our comprehensive team - from architects to interior
                designers and unique Canadian expertise, we seamlessly turn
                visions into realities. Our fit outs, renovations, and
                constructions from the ground up cater to end-user clients and
                those looking to maximize the value of their property.
              </p>
              <p className="text-end">
                Dive into an experience of excellence with RPH, and let's
                co-create marvellous One of One projects to surpass expectations
                and excel beyond the accepted industry standard.
              </p>
              <Link
                to={`/${globalLanguage}/portfolio`}
                className="cta-btn btn-border me-md-3"
              >
                View Portfolio
              </Link>
              <a
                href={`/${globalLanguage}/fit-out-services`}
                className="cta-btn btn-fill"
              >
                View Fitout Page
              </a>
              {/* <div className={"Button_contianer"}>
                <div className={"slide_change_btn"} data-aos="fade-down">
                  <div className={"change_btn"} onClick={() => previousSlide()}>
                    <AiOutlineArrowLeft />
                  </div>
                  <div className={"change_btn"} onClick={() => nextSlide()}>
                    <AiOutlineArrowRight />
                  </div>
                </div>
              </div> */}
            </div>
          </div>
          <div
            className="col-lg-6 col-sm-12 p-0"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="ContainerBOrder">
              <span className="BorderTesting21"></span>
              {/* <Slider {...settings} ref={sliderAboutRef}> */}
              <img src={serviceImg} alt="service" title="Service Image" />
              {/* </Slider> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ServiceList;
