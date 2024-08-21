import React, { useRef } from "react";
import Slider from "react-slick";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";

//
import img1 from "../../img/investment/investment2.jpg";
import img2 from "../../img/investment/investment3.jpg";
//
import s from "./style.module.css";
function InvestmentSupportSlider() {
  const sliderRef = useRef();
  const nextSlide = () => {
    sliderRef.current.slickNext();
  };
  const previousSlide = () => {
    sliderRef.current.slickPrev();
  };
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6500,
  };
  return (
    <div className={s.InvestmentSupportSlider}>
      <div className={"container"}>
        <div className="row ">
          <div className="col-lg-6 " data-aos="fade-down">
            <div className={s.MainImageWrapper}>
              <div className={s.Img1}>
                <img
                  src={img1}
                  alt="Investment Support Image"
                  title="Investment Support Image"
                />
              </div>
              <div className={s.Img2}>
                <img
                  src={img2}
                  alt="Investment Support Image"
                  title="Investment Support Image"
                />
              </div>
            </div>
          </div>
          <div className="col-lg-6" data-aos="fade-down">
            <div className={s.slider_wrapper}>
              <Slider {...settings} ref={sliderRef}>
                {[1].map((item, i) => (
                  <div className={s.slider_container} key={i}>
                    <h3>RPH INVESTMENT SUPPORT™</h3>
                    <p>
                      With RPH Investment Support, our extensive experience and
                      knowledge in the real estate industry allow us to take
                      returns on investment for our clients’ projects to the
                      next level. By combining minimized risk and maximized
                      gains, we constantly strive to achieve limitless success.
                    </p>
                    <p>
                      RPH Investment Support promises a
                      <strong>
                        {" "}
                        MINIMUM sales Return on Investment (ROI) of 100%{" "}
                      </strong>
                      for all our completed full Fit Out & Renovation projects,
                      calculated after accounting for the client’s investment
                      costs in the project. Our clients can be assured of
                      getting the best return on investment in Dubai when
                      partnering with us!
                    </p>
                  </div>
                ))}
              </Slider>
              {/* <div className={s.slide_change_btn}>
                <div className={s.change_btn} onClick={() => previousSlide()}>
                  <AiOutlineArrowLeft size={15} />
                </div>
                <div className={s.change_btn} onClick={() => nextSlide()}>
                  <AiOutlineArrowRight size={15} />
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InvestmentSupportSlider;
