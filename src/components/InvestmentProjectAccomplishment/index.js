import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import img1 from "../../img/common/interior_1.png";
import { BiBed } from "react-icons/bi";
import { FaLocationDot } from "react-icons/fa6";
import Slider from "react-slick";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import PortfolioPageApi from "../../apis/pages/PortfolioPageApi";
import { MdAttachMoney } from "react-icons/md";
import CountUp from "react-countup";
import s from "./style.module.css";
import "./style.css";
import { Grid } from "@mui/material";
import { slice } from "lodash";
import { useInView, motion } from "framer-motion";
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        right: "10px",
        zIndex: "111",
        top: "50%",
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        left: "10px",
        zIndex: "111",
        top: "50%",
      }}
      onClick={onClick}
    />
  );
}

const InvestmentProjectAccomplishment = (props) => {
  const refSlider = useRef(null);
  let DefaultIndexCount = 3;
  const refInViEw = useRef(null);
  const isInView = useInView(refInViEw);

  const { GetAccomplishmentList } = PortfolioPageApi();
  const { data, isLoading } = GetAccomplishmentList();
  const [index, setIndex] = useState(DefaultIndexCount);
  const initialData = slice(data, 0, index);
  const [isCompleted, setIsCompleted] = useState(false);
  const loadMore = () => {
    setIndex(index + 2);
    if (index >= data.length) {
      setIsCompleted(true);
    } else {
      setIsCompleted(false);
    }
  };
  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 8500,
    pauseOnHover: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  const settingsMain = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 1500,
    slidesToShow: data?.length < 3 ? data?.length : 3,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 12500,
    draggable: false,
    swipeToSlide: false,
    touchMove: false,
    swipe: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const nextSlide = () => {
    refSlider.current.slickNext();
  };
  const previousSlide = () => {
    refSlider.current.slickPrev();
  };
  return (
    <section
      className={`${s.InvestmentProjectAccomplishment} investmentAccomplish442ss`}
      ref={refInViEw}
    >
      {isInView ? (
        <motion.div
          layout
          className="container-fluid"
          transition={{ duration: 0.5 }}
          initial={{ opacity: 0, x: "-30%", scale: 0.5 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
        >
          {/* <h3 className="sub-title">PROJECT</h3> */}
          <h2>RPH Investment Support™ Accomplishments</h2>
          <div className="row mt-2">
            {/* <div className="col-lg-12">
            <div className={s.Slider_changeCont} data-aos="fade-down">
              <div className={s.SliderChange} onClick={() => previousSlide()}>
                <AiOutlineArrowLeft />
              </div>
              <div className={s.SliderChange} onClick={() => nextSlide()}>
                <AiOutlineArrowRight />
              </div>
            </div>
          </div> */}
            {/* <Slider {...settingsMain} className="Main_Slider" ref={refSlider}> */}
            {initialData?.map((item, index) => (
              <div className="col col-lg-4 col-md-6 col-sm-12">
                <div className={s.AccompCard}>
                  <div className={s.ImageSlider}>
                    <Slider {...settings}>
                      {item?.slider_images.map((GalleryItem) => (
                        <img
                          className={s.GalleryImgSize}
                          src={`${GalleryItem}`}
                          alt={GalleryItem?.title}
                          title={GalleryItem?.title}
                        />
                      ))}
                    </Slider>
                  </div>
                  <div className={s.cardDetails}>
                    <div className={s.title}>
                      <h4>{item?.project?.title}</h4>
                      {/* <h5>
                        400AED / <span className={s.RantSPan}>rent</span>
                      </h5> */}
                    </div>
                    {/* <div className={s.details}>
                    <div className={s.Detials_icon}>
                      <MdAttachMoney size={20} className={s.Icon} />
                      <h5>ROI</h5>
                    </div>
                    <h5>
                      {item?.roi} AED /{" "}
                      <span className={s.RantSPan}>{item?.rent_sale}</span>
                    </h5>
                  </div> */}
                    <div className={s.Amanities}>
                      <Grid container spacing={2}>
                        {item?.project?.aminities
                          ?.sort((item) => {
                            let check = item.name
                              .toLowerCase()
                              .includes("bath");
                            if (check) {
                              return -1;
                            } else {
                              return 0;
                            }
                          })
                          ?.sort((item) => {
                            let check = item.name
                              .toLowerCase()
                              .includes("bedroom");
                            if (check) {
                              return -1;
                            } else {
                              return 0;
                            }
                          })
                          ?.sort((item) => {
                            let check = item.name
                              .toLowerCase()
                              .includes("property");
                            if (check) {
                              return -1;
                            } else {
                              return 0;
                            }
                          })
                          ?.map((amet, i) => (
                            <>
                              <Grid item xs={8} md={8}>
                                {" "}
                                <div className={s.amanities_Details}>
                                  <img
                                    src={amet?.icon}
                                    className={s.AmetIcon}
                                    height={20}
                                    width={20}
                                    alt={amet?.name}
                                    title={amet?.name}
                                  />
                                  <h6>{amet?.name}</h6>
                                </div>
                              </Grid>
                            </>
                          ))}
                      </Grid>
                    </div>
                    <div className={s.details_ROIInvest}>
                      <Grid container spacing={2}>
                        <Grid item xs={8}>
                          <div className={s.Detials_icon_ROIt}>
                            <MdAttachMoney size={20} className={s.Icon} />
                            <h5>{item?.rent_sale} ROI After Project Costs</h5>
                          </div>
                        </Grid>
                        <Grid item xs={4}>
                          <h5 className={s.ROITitle}>
                            <span className={s.ROIINvestment}>
                              <CountUp
                                enableScrollSpy={true}
                                scrollSpyOnce={false}
                                start={0}
                                end={item?.roi}
                                duration={4}
                              />
                              %
                            </span>
                          </h5>
                        </Grid>
                      </Grid>
                    </div>
                    <div className={s.address}>
                      <FaLocationDot size={20} className={s.Icon} />
                      <p>
                        <a href={item?.map_link} target="__blank">
                          {item?.location}
                        </a>
                      </p>
                    </div>
                    <Link
                      to={`/${props.globalLanguage}/portfolio-inner/${item?.project?.route}`}
                      className={s.ViewProjct}
                    >
                      View Project
                    </Link>
                  </div>
                </div>
              </div>
            ))}

            {/* </Slider> */}

            <div className="col-lg-12">
              {isCompleted ? (
                <div className="text-center blog-left">
                  <button
                    className="cta-btn btn-fill More_btnFill disabled_more"
                    disabled
                  >
                    No More blogs to Show
                  </button>
                </div>
              ) : (
                <>
                  {initialData?.length <= 0 ? null : (
                    <div className="text-center blog-left">
                      <button
                        onClick={loadMore}
                        type="button"
                        className="cta-btn btn-fill More_btnFill"
                      >
                        See More
                      </button>
                    </div>
                  )}
                </>
              )}
            </div>
          </div>
        </motion.div>
      ) : (
        <div className="container-fluid">
          {/* <h3 className="sub-title">PROJECT</h3> */}
          <h2>RPH Investment Support™ Accomplishments</h2>
          <div className="row mt-2">
            {/* <div className="col-lg-12">
        <div className={s.Slider_changeCont} data-aos="fade-down">
          <div className={s.SliderChange} onClick={() => previousSlide()}>
            <AiOutlineArrowLeft />
          </div>
          <div className={s.SliderChange} onClick={() => nextSlide()}>
            <AiOutlineArrowRight />
          </div>
        </div>
      </div> */}
            {/* <Slider {...settingsMain} className="Main_Slider" ref={refSlider}> */}
            {initialData?.map((item, index) => (
              <div className="col col-lg-4 col-md-6 col-sm-12">
                <div className={s.AccompCard}>
                  <div className={s.ImageSlider}>
                    <Slider {...settings}>
                      {item?.slider_images.map((GalleryItem) => (
                        <img
                          className={s.GalleryImgSize}
                          src={`${GalleryItem}`}
                          alt={GalleryItem?.title}
                          title={GalleryItem?.title}
                        />
                      ))}
                    </Slider>
                  </div>
                  <div className={s.cardDetails}>
                    <div className={s.title}>
                      <h4>{item?.project?.title}</h4>
                      {/* <h5>
                    400AED / <span className={s.RantSPan}>rent</span>
                  </h5> */}
                    </div>
                    {/* <div className={s.details}>
                <div className={s.Detials_icon}>
                  <MdAttachMoney size={20} className={s.Icon} />
                  <h5>ROI</h5>
                </div>
                <h5>
                  {item?.roi} AED /{" "}
                  <span className={s.RantSPan}>{item?.rent_sale}</span>
                </h5>
              </div> */}
                    <div className={s.Amanities}>
                      <Grid container spacing={2}>
                        {item?.project?.aminities
                          ?.sort((item) => {
                            let check = item.name
                              .toLowerCase()
                              .includes("bath");
                            if (check) {
                              return -1;
                            } else {
                              return 0;
                            }
                          })
                          ?.sort((item) => {
                            let check = item.name
                              .toLowerCase()
                              .includes("bedroom");
                            if (check) {
                              return -1;
                            } else {
                              return 0;
                            }
                          })
                          ?.sort((item) => {
                            let check = item.name
                              .toLowerCase()
                              .includes("property");
                            if (check) {
                              return -1;
                            } else {
                              return 0;
                            }
                          })
                          ?.map((amet, i) => (
                            <>
                              <Grid item xs={8} md={8}>
                                {" "}
                                <div className={s.amanities_Details}>
                                  <img
                                    src={amet?.icon}
                                    className={s.AmetIcon}
                                    height={20}
                                    width={20}
                                    alt={amet?.name}
                                    title={amet?.name}
                                  />
                                  <h6>{amet?.name}</h6>
                                </div>
                              </Grid>
                            </>
                          ))}
                      </Grid>
                    </div>
                    <div className={s.details_ROIInvest}>
                      <Grid container spacing={2}>
                        <Grid item xs={8}>
                          <div className={s.Detials_icon_ROIt}>
                            <MdAttachMoney size={20} className={s.Icon} />
                            <h5>{item?.rent_sale} ROI After Project Costs</h5>
                          </div>
                        </Grid>
                        <Grid item xs={4}>
                          <h5 className={s.ROITitle}>
                            <span className={s.ROIINvestment}>
                              <CountUp
                                enableScrollSpy={true}
                                scrollSpyOnce={false}
                                start={0}
                                end={item?.roi}
                                duration={4}
                              />
                              %
                            </span>
                          </h5>
                        </Grid>
                      </Grid>
                    </div>
                    <div className={s.address}>
                      <FaLocationDot size={20} className={s.Icon} />
                      <p>
                        <a href={item?.map_link} target="__blank">
                          {item?.location}
                        </a>
                      </p>
                    </div>
                    <Link
                      to={`/${props.globalLanguage}/portfolio-inner/${item?.project?.route}`}
                      className={s.ViewProjct}
                    >
                      View Project
                    </Link>
                  </div>
                </div>
              </div>
            ))}

            {/* </Slider> */}

            <div className="col-lg-12">
              {isCompleted ? (
                <div className="text-center blog-left">
                  <button
                    className="cta-btn btn-fill More_btnFill disabled_more"
                    disabled
                  >
                    No More blogs to Show
                  </button>
                </div>
              ) : (
                <>
                  {initialData?.length <= 0 ? null : (
                    <div className="text-center blog-left">
                      <button
                        onClick={loadMore}
                        type="button"
                        className="cta-btn btn-fill More_btnFill"
                      >
                        See More
                      </button>
                    </div>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
export default InvestmentProjectAccomplishment;
