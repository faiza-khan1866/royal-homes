import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Slider from "react-slick";
import { useRef } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import img1 from "../../img/project/medern_resturant.png";
import img2 from "../../img/project/mdern_interior.png";
import img4 from "../../img/project/master kitchen.png";
import img3 from "../../img/project/drawing room in las vegas.png";
import img5 from "../../img/project/office_las_vegas.png";
import {
  FacebookIcon,
  FacebookShareButton,
  PinterestShareButton,
  PinterestIcon,
  TwitterShareButton,
  TwitterIcon,
} from "react-share";
import { Link } from "react-router-dom";

import Lightbox, { useLightboxState } from "yet-another-react-lightbox";
import Share from "yet-another-react-lightbox/plugins/share";
import Download from "yet-another-react-lightbox/plugins/download";

import "yet-another-react-lightbox/styles.css";
import "./style.css";
import s from "./style.module.css";
import { AnimatePresence } from "framer-motion";
import { BsCloudDownload } from "react-icons/bs";
import { GiCancel } from "react-icons/gi";
import useMediaQuery from "@mui/material/useMediaQuery";

const PortfolioInnerGalleryList = ({ galleryList, globalLanguage }) => {
  const slideFitoutImageList = useRef(null);
  const fullscreenRef = useRef(null);
  const [index, setIndex] = React.useState(-1);
  const [isShare, setIsShare] = useState(false);
  const [shareFile, setSHareFile] = useState({});
  const matches = useMediaQuery("(max-width:580px)");

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

  // let imgSlides = [
  //   {
  //     src: img1,
  //   },
  //   {
  //     src: img2,
  //   },
  //   {
  //     src: img4,
  //   },
  //   {
  //     src: img5,
  //   },
  //   {
  //     src: img3,
  //   },
  //   {
  //     src: img4,
  //   },
  //   {
  //     src: img3,
  //   },
  //   {
  //     src: img2,
  //   },
  //   {
  //     src: img3,
  //   },
  //   {
  //     src: img4,
  //   },
  //   {
  //     src: img5,
  //   },
  //   {
  //     src: img1,
  //   },
  // ];

  const nextSlide = () => {
    slideFitoutImageList?.current?.slickNext();
  };
  const previousSlide = () => {
    slideFitoutImageList?.current?.slickPrev();
  };
  // custom slides
  function CustomSlide({ slide }) {
    const index = galleryList.findIndex((el) => el === slide);

    const { currentIndex } = useLightboxState();

    return index === currentIndex ? (
      <div className={s.SlideWrapper}>
        <AnimatePresence>
          {isShare && (
            <motion.div
              className={s.customShare}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <div>
                <GiCancel
                  size={20}
                  className={s.cancellIcon}
                  onClick={() => setIsShare(false)}
                />
              </div>
              <motion.div
                className={s.shareItems_wrapper}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0 }}
              >
                <h5>Share this On:</h5>
                <div className={s.shareItems}>
                  <FacebookShareButton url={slide.src} quote={slide.title}>
                    <FacebookIcon size={40} round={true} />
                  </FacebookShareButton>
                  <PinterestShareButton
                    url={slide.src}
                    media={slide.src}
                    description={slide.title}
                  >
                    <PinterestIcon size={40} round={true} />
                  </PinterestShareButton>
                  <TwitterShareButton url={slide.src}>
                    <TwitterIcon size={40} round={true} title={slide.title} />
                  </TwitterShareButton>
                  <a
                    href={slide.src}
                    className={s.DownloadIcon}
                    download={slide.title}
                  >
                    <BsCloudDownload size={25} />
                  </a>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
        <div
          style={{
            height: matches ? "50vh" : "70vh",
            width: "100%",
            overflow: "scroll",
            overflowX: "scroll",
            scrollbarWidth: "none",
          }}
        >
          <img
            src={slide.src}
            alt={slide.title}
            title={slide.title}
            style={{
              height: `100%`,
              widows: `100%`,
              objectFit: "cover",
            }}
          />
        </div>
        <div className={`${s.ContactUs} mt-3 mt-md-2`}>
          {/* <button
            type="button"
            onClick={() => setZoomScale((prev) => prev + 1)}
          >
            Zoom In
          </button>

          <button
            type="button"
            onClick={() => setZoomScale((prev) => prev - 1)}
          >
            Zoom Out
          </button> */}
          <h5>
            Want this or similar for your property?{" "}
            <Link to={`/${globalLanguage}/contact`}>
              Click Here to Contact Us
            </Link>
          </h5>
        </div>
      </div>
    ) : null;
  }

  return (
    <>
      <div className="portfolioInner_gallery_list portfolioInner_gallery_list324d">
        <div className="container">
          <div className="titleKDj">
            <h2>Finishings Gallery </h2>
          </div>
          {/* <div className="title_main">
            <h2 className="main-title">
              WHAT WE CAN CREATE FOR YOU. WE ARE LIMITLESS
            </h2>
            <h3 className="sub-title">View Our Gallery and Feel Inspired</h3>
          </div> */}

          <div className="Slides_projects">
            <Slider {...settings} ref={slideFitoutImageList}>
              {galleryList?.slice(0, 12)?.map((item, i) => (
                <div
                  className="service_fit_out_images_box service_fit_out_images_box232fs"
                  data-aos="fade-up"
                  data-aos-delay="100"
                  key={i}
                  onClick={() => setIndex(i)}
                >
                  <motion.img
                    whileHover={{
                      scale: 1.07,
                    }}
                    whileTap={{ scale: 0.9 }}
                    src={item?.src}
                    alt={item?.title}
                    title={item?.title}
                  />
                  {/* <div className="title_img_box"> */}
                  {/* <h4>{item?.title?.slice(0, 18)}</h4> */}
                  {/* </div> */}
                </div>
              ))}
            </Slider>
            <div className="service_fit_out_images_box">
              <div className={"Button_contianer"}>
                <div className={"slide_change_btn"}>
                  <div className={"change_btn"} onClick={previousSlide}>
                    <AiOutlineArrowLeft />
                  </div>
                  <div className={"change_btn"} onClick={nextSlide}>
                    <AiOutlineArrowRight />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row row-cols-xl-3  row-cols-lg-3 row-cols-md-2 row-cols-1 list_project">
            {galleryList?.slice(0, 12)?.map((item, i) => (
              <div className="col" key={i}>
                <div
                  className="service_fit_out_images_box"
                  data-aos="fade-up"
                  data-aos-delay="100"
                  onClick={() => {
                    setIndex(i);
                  }}
                >
                  <motion.img
                    whileHover={{
                      scale: 1.07,
                    }}
                    whileTap={{ scale: 0.9 }}
                    src={item?.src}
                    alt={item?.title}
                    title={item?.title}
                    className="ImgKJ20"
                  />
                  {/* <div className="title_img_box">
                    <h4>{item?.title?.slice(0, 18)}</h4>
                  </div> */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Lightbox
        index={index}
        slides={galleryList}
        open={index >= 0}
        render={{
          slide: ({ slide }) => (
            <CustomSlide slide={slide} globalLanguage={globalLanguage} />
          ),
        }}
        plugins={[Share, Download]}
        share={{
          share: ({ slide }) => {
            setIsShare(true);
            setSHareFile(slide);
          },
        }}
        close={() => setIndex(-1)}
      />
    </>
  );
};
export default PortfolioInnerGalleryList;
