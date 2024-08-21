import React, { useState } from "react";
import { Link } from "react-router-dom";
import serviceImg1 from "../../img/fitOutServices/fitoutimg1.png";
import serviceImg2 from "../../img/fitOutServices/fitoutimg2.png";
import Slider from "react-slick";
import { HiOutlineArrowSmRight, HiOutlineArrowSmLeft } from "react-icons/hi";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { useRef } from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";
import PortfolioPageApi from "../../apis/pages/PortfolioPageApi";
import useMediaQuery from "@mui/material/useMediaQuery";

import "./style.css";
import s from "./style.module.css";
const NextArrow = (props) => (
  <>
    <div className={props.className}>
      <button className="fitout_nextArrow_wrape" onClick={props.onClick}>
        <HiOutlineArrowSmRight fontSize={"24px"} />
      </button>
    </div>
  </>
);

const PrevArrow = (props) => (
  <>
    <div className={props.className}>
      <button className="fitout_prevArrow_wrape" onClick={props.onClick}>
        <HiOutlineArrowSmLeft fontSize={"24px"} />
      </button>
    </div>
  </>
);

const FitOutServicesProjects = ({ globalLanguage }) => {
  const { GetFitoutProjectList } = PortfolioPageApi();
  const { data: ProjectDataList, isLoading } = GetFitoutProjectList();
  const sliderRef = useRef(null);
  const sliderFitoutRef = useRef(null);
  const sliderImgFitoutRef = useRef(null);
  const TabMatch = useMediaQuery("(max-width:995px)");
  const MobileMatch = useMediaQuery("(max-width:580px)");
  const [CurrentSlide, setCurrentSlide] = useState();

  const [open, setOpen] = React.useState(false);
  const [ViewImg, setViewImg] = useState(null);
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3500,
  };
  const settingsImg = {
    dots: false,
    arrows: false,
    infinite: false,
    speed: 1500,
    slidesToShow: ProjectDataList?.length < 3 ? ProjectDataList?.length : 3,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 3500,
    // nextArrow: <NextArrow />,
    // prevArrow: <PrevArrow />,
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
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const nextSlide = () => {
    if (MobileMatch) {
      if (ProjectDataList.length - 1 == CurrentSlide) {
        return;
      }
    } else if (TabMatch) {
      if (ProjectDataList.length - 2 == CurrentSlide) {
        return;
      }
    } else {
      if (ProjectDataList.length - 3 == CurrentSlide) {
        return;
      }
    }
    sliderRef.current.slickNext();
    sliderRef?.current?.slickPause();
  };
  const previousSlide = () => {
    sliderRef?.current?.slickPrev();
    sliderRef?.current?.slickPause();
  };

  return (
    <section className="service_project_area fitoutServiceArea service_project_areass45">
      <Dialog fullWidth={true} open={open} onClose={handleClose}>
        <DialogContent>
          <img
            src={ViewImg}
            alt="full-image"
            title="Full Image"
            className="DialogImg"
            // data-aos="fade-up"
            // data-aos-delay="100"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="error">
            Close
          </Button>
        </DialogActions>
      </Dialog>

      <div className="container">
        <div className="row align-items-center">
          <div className="col col-lg-12 col-sm-12">
            <div className="service_project_box">
              <div className="title">
                {/* <h4>Projects</h4> */}
                <div className="Port_title">OUR PORTFOLIO</div>
              </div>
              <div className="Details">
                <p>
                  With over 20 years crafting stunning designs from Canada to
                  Dubai, our portfolio is a captivating showcase of our
                  expertise. Each piece tells a unique story, blending diverse
                  aesthetics and exceeding expectations.
                </p>
                <p>
                  See a design you like? Let’s make it yours! Our dedicated team
                  is ready to bring your vision to life with the same passion
                  and precision reflected in our portfolio. Explore and get
                  inspired!
                </p>
              </div>
            </div>
          </div>
          <div className="col-12">
            <div className={s.Button_contianer}>
              <div className={s.slide_change_btn} data-aos="fade-down">
                <div className={s.change_btn} onClick={() => previousSlide()}>
                  <AiOutlineArrowLeft />
                </div>
                <div className={s.change_btn} onClick={() => nextSlide()}>
                  <AiOutlineArrowRight />
                </div>
              </div>
            </div>
          </div>
          <div className="col col-lg-12 col-sm-12 mt-3">
            {isLoading ? (
              "Loading... "
            ) : (
              <Slider {...settingsImg} ref={sliderRef}>
                {ProjectDataList?.map((item, i) => (
                  // <Link to={`/${globalLanguage}/portfolio-inner/${item?.route}`}>
                  <Link to={`#`}>
                    <div
                      className="img_wrape"
                      key={i}
                      onClick={() => {
                        setViewImg(serviceImg1);
                        // handleClickOpen();
                      }}
                    >
                      <img
                        src={`${process.env.REACT_APP_IMAGE_BASE_URL}/${item?.project_detail?.content?.Main_section?.feature_img}`}
                        alt={item?.project_detail?.content?.Main_section?.title}
                        title={
                          item?.project_detail?.content?.Main_section?.title
                        }
                      />
                      {/* <p className="text">One Palm</p> */}
                    </div>
                  </Link>
                ))}
              </Slider>
            )}
          </div>
          <div className="col col-lg-12 col-sm-12 mt-3 justify-content-center">
            <div className="PortFolioBtn">
              <Link
                to={`/${globalLanguage}/portfolio`}
                className="cta-btn btn-fill"
              >
                View Our Portfolio
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default FitOutServicesProjects;
