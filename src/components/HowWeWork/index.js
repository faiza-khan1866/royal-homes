import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useInView, useAnimate } from "framer-motion";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import { FaEarthAmericas } from "react-icons/fa6";
import {
  FaPencilRuler,
  FaRegCheckCircle,
  FaRegObjectGroup,
} from "react-icons/fa";
import { BiSolidBookContent } from "react-icons/bi";
import { SiMaterialdesignicons } from "react-icons/si";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";

import TimelineOppositeContent, {
  timelineOppositeContentClasses,
} from "@mui/lab/TimelineOppositeContent";
// import before_img from "../../img/our-work/before-img.png";
// import after_img from "../../img/our-work/after-img.png";
import Slider from "react-slick";
// import logo from "../../img/logoNoBG.png";
import logo from "../../img/logoNoBG.webp";

import img1B from "../../img/home/beforeAfter/3  (1).webp";
import img1A from "../../img/home/beforeAfter/3 (1).webp";
import img2B from "../../img/home/beforeAfter/4 (4) (1).webp";
import img2A from "../../img/home/beforeAfter/4 (4) (1)-1.webp";
import img3B from "../../img/home/beforeAfter/5 (3)-1.webp";
import img3A from "../../img/home/beforeAfter/5 (3).webp";
import img4B from "../../img/home/beforeAfter/6 (3).webp";
import img4A from "../../img/home/beforeAfter/6 (3)-1.webp";
import img5B from "../../img/home/beforeAfter/7 (4) (2).webp";
import img5A from "../../img/home/beforeAfter/7 (4) (2)-1.webp";
import img6B from "../../img/home/beforeAfter/8 (1) (1).webp";
import img6A from "../../img/home/beforeAfter/8 (1) (2).webp";
import { useScroll } from "framer-motion";
import "./style.css";
const HomeHowWeWork = ({ globalLanguage }) => {
  const [scope, animate] = useAnimate();
  const ViewTimeLineRef = useRef(null);
  const isInView = useInView(scope);
  // let beforeAfterGallery = [
  //   {
  //     before: img1B,
  //     after: img1A,
  //   },
  //   {
  //     before: img2B,
  //     after: img2A,
  //   },
  //   {
  //     before: img3B,
  //     after: img3A,
  //   },
  //   {
  //     before: img4B,
  //     after: img4A,
  //   },
  //   {
  //     before: img5B,
  //     after: img5A,
  //   },
  //   {
  //     before: img6B,
  //     after: img6A,
  //   },
  // ];

  let beforeAfterGallery = [
    {
      before: "https://royal-home.b-cdn.net/website/living-room-before.webp",
      after: "https://royal-home.b-cdn.net/website/living-room-after.webp",
      alt: "living-room",
      title: "living-room",
    },
    {
      before:
        "https://royal-home.b-cdn.net/website/living-room-with-open-kitchen-before.webp",
      after:
        "https://royal-home.b-cdn.net/website/living-room-with-open-kitchen-after.webp",
      alt: "living-room-with-open-kitchen",
      title: "living-room-with-open-kitchen",
    },
    {
      before:
        "https://royal-home.b-cdn.net/website/living-room-with-dining-space-before.webp",
      after:
        "https://royal-home.b-cdn.net/website/living-room-with-dining-space-after.webp",
      alt: "living-room-with-dining-space",
      title: "living-room-with-dining-space",
    },
    {
      before: "https://royal-home.b-cdn.net/website/kitchen-before.webp",
      after: "https://royal-home.b-cdn.net/website/open-kitchen-after.webp",
      alt: "open-kitchen-after",
      title: "open-kitchen-after",
    },
    {
      before: "https://royal-home.b-cdn.net/website/washroom-before.webp",
      after: "https://royal-home.b-cdn.net/website/washroom-after.webp",
      alt: "washroom",
      title: "washroom",
    },
    {
      before: "https://royal-home.b-cdn.net/website/bedroom-before.webp",
      after: "https://royal-home.b-cdn.net/website/bedroom-after.webp",
      alt: "bedroom",
      title: "bedroom",
    },
  ];
  let timeline_data = [
    {
      title: <FaEarthAmericas />,
      details: "1. Client Consultation",
    },
    {
      title: <BiSolidBookContent />,
      details: "2. Proposal & Feasibility Studies",
      alternate: true,
    },
    {
      title: <FaPencilRuler />,
      details: "3. Design Approvals",
    },
    {
      title: <FaRegObjectGroup />,
      details: "4. Permits & Approval",
      alternate: true,
    },
    {
      title: <SiMaterialdesignicons />,
      details: "5. Design Procurement & Execution",
    },
    {
      title: <AiOutlineFundProjectionScreen />,
      details: "6. Project Handover",
      alternate: true,
    },
    {
      title: <FaRegCheckCircle />,
      details: "7. RPH Investment Support™",
    },
  ];
  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 10000,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          arrows: false,
        },
      },
    ],
  };

  useEffect(() => {
    if (isInView) {
      animate(
        ".TimeLineColorFill",
        { backgroundColor: ["hsl(240, 8%, 76%)", "hsl(359, 76%, 43%)"] },
        { duration: 2 },
        { ease: "linear" }
      );
    } else if (!isInView) {
      animate(
        ".TimeLineColorFill",
        { backgroundColor: ["hsl(359, 76%, 43%)", "hsl(240, 8%, 76%)"] },
        { duration: 2 },
        { ease: "linear" }
      );
    }
  }, [isInView]);
  return (
    <div className="mt-5 HomeHowWeWork HomeHowWeWork434s">
      <div className="container">
        <div className="row">
          <div className="col col-lg-6 col-xl-6">
            <div className="timeline-container ">
              <Timeline
                sx={{
                  [`& .${timelineOppositeContentClasses.root}`]: {
                    // flex: { xs: 0.1, sm: 0.1 },
                    flex: { xs: 0.1, md: 1, lg: 0.7 },
                  },
                }}
                ref={scope}
              >
                {timeline_data?.map((item, i) => (
                  <motion.div
                    key={i}
                    layout
                    initial={{ scaleY: 0 }}
                    whileInView={{ scaleY: 1 }}
                    transition={{ duration: 0.3 }}
                    ref={ViewTimeLineRef}
                  >
                    <TimelineItem key={i}>
                      <TimelineOppositeContent
                        sx={{
                          marginTop: item?.alternate ? "-20px" : "-10px",
                          // padding: "0 5px 0 0",
                        }}
                      >
                        <>
                          {item?.alternate ? (
                            <span className="timeline-details timeline-title  TimeLine_desktop">
                              {item?.details}
                            </span>
                          ) : (
                            <span className="timeline-details timeline-icons TimeLine_desktop">
                              {item?.title}
                            </span>
                          )}
                        </>

                        <span className="timeline-details timeline-icons TimeLine_mobil">
                          {item?.title}
                        </span>
                      </TimelineOppositeContent>
                      <TimelineSeparator
                        sx={{
                          height:
                            i !== timeline_data?.length - 1 ? "100px" : null,
                        }}
                      >
                        <TimelineDot
                          className="TimeLineColorFill"
                          sx={{
                            margin: 0,
                            // backgroundColor: isInView ? "red" : "#FFFFFF",
                          }}
                        />
                        {i !== timeline_data?.length - 1 ? (
                          <TimelineConnector
                            className="TimeLineColorFill"
                            sx={
                              {
                                // backgroundColor: isInView ? "red" : "#FFFFFF",
                              }
                            }
                          />
                        ) : null}
                      </TimelineSeparator>
                      <TimelineContent
                        sx={{
                          marginTop: item?.alternate ? "-10px" : "-20px",
                          // padding: "0 0 0 5px",
                        }}
                      >
                        <>
                          {item?.alternate ? (
                            <span className="timeline-details timeline-icons   TimeLine_desktop ">
                              {item?.title}
                            </span>
                          ) : (
                            <span className="timeline-details timeline-title  TimeLine_desktop ">
                              {item?.details}
                            </span>
                          )}
                        </>

                        <span className="timeline-details timeline-title TimeLine_mobil">
                          {item?.details}
                        </span>
                      </TimelineContent>
                    </TimelineItem>
                  </motion.div>
                ))}
              </Timeline>
            </div>
          </div>
          <div className="col col-lg-6 col-xl-6">
            <div className="slider-container" data-aos="fade-down">
              <h3 className="sub-title">HOW WE WORK</h3>
              <h2 className="section-title">Our All-Canadian Process</h2>
              <div className="SliderAbout_Button">
                <Link to={`/${globalLanguage}/services`} className="about-btn">
                  View Our Full Process
                </Link>
              </div>
              {/* <div className="LogoContainer">
                <div className="logoBgContainer" />
                <img src={logo} alt="" />
              </div> */}
              <Slider {...settings}>
                {beforeAfterGallery.map((item, i) => (
                  <div className="our-work-container WOrkBTk" key={i}>
                    <div className="work-image-container">
                      <div className="image-before single-image-Container">
                        <div className="CardBFTitle">
                          <div className="card-titleLogo">
                            <div className="LogoContainer">
                              <img
                                // src={logo}
                                src="https://royal-home.b-cdn.net/website/logoNoBG.webp"
                                alt="RPH_Logo"
                                title="RPH Logo"
                                loading="lazy"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="card-title">
                          <span>Before</span>
                        </div>
                        <img
                          // class="img-fluid"
                          src={item?.before}
                          alt={`${item?.alt}-before`}
                          title={`${item?.title}-before`}
                          loading="lazy"
                          height={"280"}
                          width={"630"}
                          // style={{ display: "block", maxWidth: "690px" }}
                        />
                        {/* <div className="card-details">
                          <h2>
                            Downtown Dubai <br /> Mayfair
                          </h2>
                        </div> */}
                      </div>
                      <div className="image-after single-image-Container">
                        <div className="card-titleLogo">
                          <div className="LogoContainer">
                            <img
                              // src={logo}
                              src="https://royal-home.b-cdn.net/website/logoNoBG.webp"
                              alt="RPH_Logo"
                              title="RPH Logo"
                              loading="lazy"
                            />
                          </div>
                        </div>

                        <div className="card-title">
                          <span>After</span>
                        </div>
                        <img
                          // class="img-fluid"
                          src={item?.after}
                          alt={`${item?.alt}-after`}
                          title={`${item?.title}-after`}
                          loading="lazy"
                          height={"280"}
                          width={"630"}
                          // style={{ display: "block", maxWidth: "690px" }}
                        />

                        {/* <div className="card-details">
                          <h2>
                            Downtown Dubai <br /> Mayfair
                          </h2>
                        </div> */}
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeHowWeWork;
