import React from "react";
import prcessIcon1 from "../../img/process/processIcon1.png";
import prcessIcon2 from "../../img/process/processIcon2.png";
import prcessIcon3 from "../../img/process/processIcon3.png";
import prcessIcon4 from "../../img/process/processIcon4.png";
import prcessIcon5 from "../../img/process/processIcon5.png";
import prcessIcon6 from "../../img/process/processIcon6.png";
import prcessIcon7 from "../../img/process/processIcon7.png";
import Slider from "react-slick";

import { useRef } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import "./style.css";

const ServiceProcess = () => {
  let sliderServiceRef = useRef(null);
  const settings = {
    dots: true,
    arrows: true,
    infinite: false,
    speed: 1500,
    slidesToShow: 3,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    pauseOnSlide: true,
    responsive: [
      {
        breakpoint: 1450,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 995,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 580,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const serviceProcessData = [
    {
      id: 1,
      icon: prcessIcon1,
      title: "Client Consultation",
      detail: [
        "Assessment of the property’s current condition and potential opportunities to maximize the property’s potential",
        "Initial budget and timeline discussions to align with clients’ expectations.",
      ],
    },
    {
      id: 2,
      icon: prcessIcon3,
      title: "Proposal and feasibility studies",
      detail: [
        "Comprehensive cost estimations and scope of work",
        "Complete market study and evaluation of projected returns on investment, considering low, expected, and high cases",
        "Preliminary 3D visualizations to provide the client with the “Vision”",
        "Presentation of initial concepts and solutions with the client.",
      ],
    },
    {
      id: 3,
      icon: prcessIcon4,
      title: "Permits & Approvals",
      detail: [
        "Securing the necessary permissions and licenses to commence construction and related work.",
      ],
    },
    {
      id: 4,
      icon: prcessIcon5,
      title: "Design Procurement & Execution",
      detail: [
        "sourcing and purchasing required material, furnishings, and fixtures",
      ],
    },
    {
      id: 5,
      icon: prcessIcon2,
      title: "Investment Support",
      detail: [
        "Maintenance packages presented to the client to keep the property in pristine condition.",
      ],
    },
  ];
  const nextSlide = () => {
    sliderServiceRef?.current?.slickNext();
  };
  const previousSlide = () => {
    sliderServiceRef?.current?.slickPrev();
  };
  return (
    <section className="service_process_area service_process_area252">
      <h2 data-aos="fade-up" data-aos-delay="100">
        <span>OUR FULL SERVICE PROCESS.</span>
        {/* ! */}
      </h2>
      <div className="container">
        <div className="row row-cols-lg-5 row-cols-md-3 row-cols-1">
          {/* <div className="col-md-12 col-lg-12">
            <div className={"Button_contianer"}>
              <div className={"slide_change_btn"} data-aos="fade-down">
                <div
                  className={"change_btn"}
                  onMouseLeave={() => {
                    sliderServiceRef?.current?.slickPlay();
                  }}
                  onMouseEnter={() => {
                    sliderServiceRef?.current?.slickPause();
                  }}
                  onClick={() => previousSlide()}
                >
                  <AiOutlineArrowLeft />
                </div>
                <div
                  className={"change_btn"}
                  onMouseLeave={() => {
                    sliderServiceRef?.current?.slickPlay();
                  }}
                  onMouseEnter={() => {
                    sliderServiceRef?.current?.slickPause();
                  }}
                  onClick={() => nextSlide()}
                >
                  <AiOutlineArrowRight />
                </div>
              </div>
            </div>
          </div> */}
          <div className="col-12 col-md-12 col-lg-12">
            <Slider {...settings} ref={sliderServiceRef}>
              {serviceProcessData?.map((x, i) => (
                <div
                  className="service_process_box"
                  data-aos="fade-up"
                  data-aos-delay="100"
                  key={i}
                >
                  <div className="img_wrape">
                    <img src={x?.icon} alt="icon" title={x?.title} />
                  </div>
                  <div className="service_title">
                    {i + 1}. {x?.title}
                  </div>
                  <ul>
                    {x?.detail?.map((item, i) => (
                      <li className="Para_details" key={i}>
                        <div className="ListDetails">{item}</div>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ServiceProcess;
