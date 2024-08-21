import React, { useEffect, useRef, useState } from "react";
// import img1 from "../../img/common/thumbnail.png";
import logo from "../../img/logoWhite.png";
import { motion } from "framer-motion";
import Slider from "react-slick";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";
import useMediaQuery from "@mui/material/useMediaQuery";
import img3 from "../../img/about/milestone_sec/milestone3.jpg";
import img4 from "../../img/about/milestone_sec/milestone4.jpg";
import img5 from "../../img/about/milestone_sec/milestone5.jpg";
import img6 from "../../img/about/milestone_sec/milestone6.jpg";
import img7 from "../../img/about/milestone_sec/milestone7.jpg";
import img8 from "../../img/about/milestone_sec/milestone8.jpg";
import img9 from "../../img/about/milestone_sec/milestone9.jpg";
import img11 from "../../img/about/milestone_sec/milestone11.jpg";
import img12 from "../../img/about/milestone_sec/milestone12.jpg";
import img13 from "../../img/about/milestone_sec/milestone13.jpg";
import img14 from "../../img/about/milestone_sec/milestone14.jpg";
import img15 from "../../img/about/milestone_sec/milestone15.jpg";
import img16 from "../../img/about/milestone_sec/milestone16.jpg";
import img17 from "../../img/about/milestone_sec/milestone17.jpg";
import s from "./style.module.css";
function AboutOurHistory() {
  const sliderAboutRef = useRef();
  const TabMatch = useMediaQuery("(max-width:995px)");
  const MobileMatch = useMediaQuery("(max-width:580px)");
  const [isSlideChange, setIsSlideChange] = useState(false);
  const [CurrentSlide, setCurrentSlide] = useState();

  const settings = {
    dots: false,
    arrows: false,
    infinite: false,
    autoplay: false,
    autoplaySpeed: 15000,
    slidesToShow: 3,
    slidesToScroll: 1,
    afterChange: (current) => setCurrentSlide(current),
    responsive: [
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

  useEffect(() => {
    // sliderAboutRef?.current?.slickPause();
    setTimeout(() => {
      sliderAboutRef?.current?.slickPlay();
    }, 30000);
  }, []);
  const nextSlide = () => {
    if (MobileMatch) {
      if (CurrentSlide >= 14) {
        return;
      }
    } else if (TabMatch) {
      if (CurrentSlide >= 13) {
        return;
      }
    } else {
      if (CurrentSlide >= 12) {
        return;
      }
    }
    sliderAboutRef?.current?.slickNext();
    // if (!isSlideChange) {
    sliderAboutRef?.current?.slickPause();
    // }
    setIsSlideChange(true);
  };
  const previousSlide = () => {
    sliderAboutRef?.current?.slickPrev();
    // if (!isSlideChange) {
    sliderAboutRef?.current?.slickPause();
    // }
    setIsSlideChange(true);
  };
  let OurHistoryData = [
    {
      title: "Jan - 2000",
      details:
        "The journey commenced as a one-man show, marking the birth of RPH in Canada.",
      thumb: img3,
    },
    {
      title: "Jul - 2003",
      details:
        "Canada: RPH constructs its first homes in London, Ontario, stapling luxury living as its forefront specialty",
      thumb: img4,
    },
    {
      title: "April - 2003",
      details:
        "Canada: RPH develops its first ever development consisting of a townhome complex in London, Ontario with 12 townhomes",
      thumb: img5,
    },
    {
      title: "Jan - 2011",
      details: "Canada: RPH achieves completion of over 100 luxury homes",
      thumb: img6,
    },
    {
      title: "Oct - 2013",
      details:
        "Canada: RPH develops its first ever residential subdivision in London, Ontario consisting of 15 single family homes.",
      thumb: img7,
    },
    {
      title: "Aug - 2014",
      details:
        "Canada: RPH wins the 'Dream it Win it' lottery home nomination in collaboration with the charity donation for London hospitals",
      thumb: img8,
    },
    {
      title: "Sept - 2018",
      details:
        "Canada: RPH develops its second townhome complex in London Ontario consisting of 60 upscale townhomes",
      thumb: img9,
    },
    {
      title: "Jan - 2022",
      details:
        "Dubai: RPH launches operations in Dubai as the only Canadian Fit Out Company in Dubai",
      thumb: logo,
    },
    {
      title: "Feb - 2022",
      details:
        "Canada: RPH completes the largest & most luxurious fit out in London Ontario Canada fully transforming and tripling the size of a villa within 6 months.",
      thumb: img11,
    },
    {
      title: "March - 2022",
      details:
        "Dubai: RPH completes its first luxury fit out of a one bedroom in 'The Address Dubai Marina' and breaks history achieving the highest rented annual one bedroom in the tower at 265,000 AED / Yr ",
      thumb: img12,
    },
    {
      title: "Aug - 2022",
      details:
        "Canada: RPH develops its third townhome complex in London Ontario consisting of 21 upscale luxury townhomes",
      thumb: img13,
    },
    {
      title: "Nov - 2022",
      details:
        "Canada: RPH develops and rents out its first ever rental development in Canada consisting of 42 upscale luxury townhomes",
      thumb: img14,
    },
    {
      title: "2023 - Present",
      details:
        "In Canada, RPH has currently solidified a strong footprint in transitioning and specializing in large scale luxury developments with plans to develop thousands of units over the next decade. ",
      thumb: img15,
    },
    {
      title: "2023 - Present",
      details:
        "In Dubai, RPH is growing operations in align with its vision to become the foremost luxury fit-out specialist, extending our expertise to bespoke villa constructions. ",
      thumb: img16,
    },
    {
      title: "2023 - Present",
      details:
        "Combined, RPH has completed over 1B+ AED in combined project values and plans to continue to limitlessly achieve a pleather of fruitful milestones.",
      thumb: img17,
    },
  ];
  return (
    <div className={s.aboutHistorySection}>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className={s.title_container} data-aos="fade-down">
              <h3 className="sub-title">OUR HISTORY</h3>
              <h2 className="section-title">
                Creating Milestones Through Every Step.
              </h2>
            </div>
          </div>
          <div className="col-12">
            <div className={s.Button_contianer}>
              <div className={s.slide_change_btn} data-aos="fade-down">
                <div
                  className={s.change_btn}
                  // onMouseLeave={() => {
                  //   sliderAboutRef?.current?.slickPlay();
                  // }}
                  // onMouseEnter={() => {
                  //   sliderAboutRef?.current?.slickPause();
                  // }}
                  onClick={() => previousSlide()}
                >
                  <AiOutlineArrowLeft />
                </div>
                <div
                  className={s.change_btn}
                  // onMouseLeave={() => {
                  //   sliderAboutRef?.current?.slickPlay();
                  // }}
                  // onMouseEnter={() => {
                  //   sliderAboutRef?.current?.slickPause();
                  // }}
                  onClick={() => nextSlide()}
                >
                  <AiOutlineArrowRight />
                </div>
              </div>
            </div>
          </div>
          <Slider {...settings} ref={sliderAboutRef}>
            {OurHistoryData?.map((item, i) => (
              <div className="col-md-6 col-lg-4" key={i}>
                <div className={s.history_card_wrapper} data-aos="fade-down">
                  {/* whole timeLine  */}
                  {/* {item.title.includes("2023") ? (
                    <div className={s.history_BarWrapper_whole}>
                      <div className={s.histry_bar_whole}>
                        <motion.span
                          initial={{ opacity: 0 }}
                          whileInView={{
                            opacity: 1,
                            transition: { duration: 1 },
                            left: i % 2 == 0 ? `25%` : `50%`,
                          }}
                        ></motion.span>
                      </div>
                    </div>
                  ) : null} */}

                  {/* whole timeLine end  */}

                  <div className={`${s.history_card_container}`}>
                    <div className={s.img_thumb}>
                      <img
                        src={item.thumb}
                        alt="Thumbnail"
                        title={item?.title}
                      />
                      <span className={s.yearName}>{item?.title}</span>
                    </div>
                    <div
                      className={s.history_BarWrapper}
                      style={
                        MobileMatch
                          ? { width: "100%" }
                          : {
                              width: item?.title.includes("2023")
                                ? "120%"
                                : "100%",
                            }
                      }
                    >
                      <div className={s.histry_bar}>
                        <motion.span
                          initial={{ opacity: 0 }}
                          whileInView={{
                            opacity: 1,
                            transition: { duration: 1 },
                            left: i % 2 == 0 ? `25%` : `50%`,
                          }}
                        ></motion.span>
                      </div>
                    </div>

                    <div className={s.card_details}>
                      <p>{item?.details}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default AboutOurHistory;
