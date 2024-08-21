import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import img1 from "../../img/GalleryBeforeAfter/Before-after-kitchen-renovation.png";
import img2 from "../../img/GalleryBeforeAfter/NoVacancy.png";
import img3 from "../../img/GalleryBeforeAfter/kitchenBEAf.png";
import GalleryImg from "../../img/logoWhite.png";
import Slider from "react-slick";
import {
  FacebookIcon,
  FacebookShareButton,
  PinterestShareButton,
  PinterestIcon,
  TwitterShareButton,
  TwitterIcon,
} from "react-share";
import Lightbox, { useLightboxState } from "yet-another-react-lightbox";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Download from "yet-another-react-lightbox/plugins/download";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import Share from "yet-another-react-lightbox/plugins/share";

import "./style.css";
import s from "./style.module.css";
import g from "./styleShare.module.css";
import PortfolioPageApi from "../../apis/pages/PortfolioPageApi";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { AnimatePresence, motion, useInView } from "framer-motion";
import { GiCancel } from "react-icons/gi";
import { BsTwitterX } from "react-icons/bs";
import {
  BsCloudDownload,
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
import useMediaQuery from "@mui/material/useMediaQuery";
function PortfolioMainGallery(props) {
  const sliderRef = useRef(null);
  const thumbnailsRef = useRef(null);
  const refInViEw = useRef(null);
  const isInView = useInView(refInViEw);
  const [index, setIndex] = React.useState(-1);
  const [galleryList, setGalleryList] = React.useState([]);
  const [galleryName, setGalleryName] = React.useState();
  const [isShare, setIsShare] = useState(false);
  const [carosalIndex, setCarosalIndex] = useState(0);
  const [shareFile, setSHareFile] = useState({});
  //# get current index from multiple sliders
  const [SliderCurrentIndex, setsliderCurrentIndex] = useState({});

  const [SliderSetting, setSliderSetting] = useState([]);

  const matches = useMediaQuery("(max-width:580px)");
  const { GetProjectList, GetGalleryCategory } = PortfolioPageApi();
  const { data: pageAllData, isLoading } = GetProjectList();
  const { data: galleryData, isLoading: isGalleryLoading } =
    GetGalleryCategory();

  useEffect(() => {
    let SliderIndex = galleryData?.map((item, i) => {
      return {
        dots: false,
        arrows: true,
        infinite: false,
        speed: 1500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 6500,
        draggable: false,
        swipeToSlide: false,
        touchMove: false,
        swipe: false,
        beforeChange: (current, next) => {
          setsliderCurrentIndex((prev) => ({
            ...prev,
            [`SlideListNo${i}`]: next,
          }));
        },
      };
    });
    setSliderSetting(SliderIndex);
  }, [galleryData?.length]);

  const handleGalleryList = async (ImagesList, name) => {
    let galleryList = await ImagesList?.map((item) => {
      return {
        src: `${process.env.REACT_APP_IMAGE_BASE_URL}/${item}`,
        title: name,
      };
    }).filter((item) => item);
    setGalleryList(galleryList);
  };

  function CustomSlide({ slide }) {
    const index = galleryList.findIndex((el) => el === slide);
    const { currentIndex } = useLightboxState();

    return index === currentIndex ? (
      <div className={g.SlideWrapper}>
        <AnimatePresence>
          {isShare && (
            <motion.div
              className={g.customShare}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <div>
                <GiCancel
                  size={20}
                  className={g.cancellIcon}
                  onClick={() => setIsShare(false)}
                />
              </div>
              <AnimatePresence>
                <motion.div
                  className={g.shareItems_wrapper}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0 }}
                >
                  <h5>Share this On:</h5>
                  <div className={g.shareItems}>
                    <FacebookShareButton
                      url={`${slide.src}`}
                      quote={galleryName}
                    >
                      <FacebookIcon size={40} round={true} />
                    </FacebookShareButton>
                    <PinterestShareButton
                      url={`${slide.src}`}
                      media={`${slide.src}`}
                      description={galleryName}
                    >
                      <PinterestIcon size={40} round={true} />
                    </PinterestShareButton>
                    <TwitterShareButton url={`${slide.src}`}>
                      {/* <TwitterIcon size={40} round={true} title={galleryName} /> */}
                      <div className={g.TwitterIcon}>
                        <BsTwitterX size={23} />
                      </div>
                    </TwitterShareButton>
                    <a
                      href={`${slide.src}`}
                      className={g.DownloadIcon}
                      download={galleryName}
                    >
                      <BsCloudDownload size={23} />
                    </a>
                  </div>
                </motion.div>
              </AnimatePresence>
            </motion.div>
          )}
        </AnimatePresence>
        <img
          src={`${slide.src}`}
          style={{
            height: matches ? "70vh" : "90vh",
            // width: matches ? "100%" : "80vw",
            // objectFit: "cover",
            // objectPosition: "50% 50%",
          }}
          alt={slide?.title}
          title={slide?.title}
        />
        <div className={s.ContactUs}>
          <h5>
            Want this or similar for your property?{" "}
            <Link to={`/${props.globalLanguage}/contact`}>
              Click Here to Contact Us
            </Link>
          </h5>
        </div>
      </div>
    ) : null;
  }

  const nextSlide = (refSet) => {
    refSet.current.slickNext();
  };
  const previousSlide = (refSet) => {
    refSet.current.slickPrev();
  };
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6500,
  };
  const settingsThumb = {
    dots: false,
    arrows: true,
    infinite: false,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6500,
    draggable: false,
    swipeToSlide: false,
    touchMove: false,
    swipe: false,
    beforeChange: (current, next) => setCarosalIndex(next),
  };
  return (
    <div
      className={`${s.PortFolioGallery} portFolioGallerySider`}
      data-aos="fade-up"
      ref={refInViEw}
    >
      <div className={s.CommonView}>
        <div className="container">
          <h3 className={`${s.sub_heading} mb-3`}>
            View Our Gallery and Feel Inspired
          </h3>
          <h2 className={`${s.main_heading} mb-4`}>
            From Canada To Dubai. What We Can Create For You.
          </h2>
          {isInView ? (
            <div className="row">
              {SliderSetting?.length &&
                galleryData?.map((item, i) => (
                  <div className="col col-lg-4 col-md-6 col-sm-12" key={i}>
                    <div className={s.galleryItemContainer}>
                      <Slider {...SliderSetting[i]}>
                        {item?.images?.map((Galleryitem, index) => (
                          <div
                            className={s.ImageWrapper}
                            style={{ zIndex: "-1" }}
                            key={index}
                            onClick={async () => {
                              setGalleryName(item?.name);
                              await handleGalleryList(item?.images, item?.name);
                              setIndex(
                                SliderCurrentIndex[`SlideListNo${i}`]
                                  ? SliderCurrentIndex[`SlideListNo${i}`]
                                  : 0
                              );
                              // setIndex(0);
                              // setIndex(carosalIndex);
                            }}
                          >
                            <img
                              src={
                                Galleryitem
                                  ? `${process.env.REACT_APP_IMAGE_BASE_URL}/${Galleryitem}`
                                  : GalleryImg
                              }
                              alt="Furniture-Image"
                              title="Furniture Image"
                            />
                          </div>
                        ))}
                      </Slider>

                      <div
                        className={s.ImgSubTitle}
                        onClick={async () => {
                          setGalleryName(item?.name);
                          // await setGalleryList(item?.images);
                          await handleGalleryList(item?.images, item?.name);
                          // await handleGalleryList(i);

                          setIndex(
                            SliderCurrentIndex[`SlideListNo${i}`]
                              ? SliderCurrentIndex[`SlideListNo${i}`]
                              : 0
                          );
                          // setIndex(carosalIndex);
                        }}
                      >
                        <span className={s.ImgSubTitleShow}>{item?.name}</span>
                        <span className={s.ImgSubViewMore}>View More</span>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          ) : null}
        </div>
      </div>
      {isInView ? (
        <div className={s.MobileView}>
          <div className="container">
            <h3 className={`${s.sub_heading} mb-3`}>
              View Our Gallery and Feel Inspired
            </h3>
            <h2 className={`${s.main_heading} mb-4`}>
              What We Can Create For You. We Are Limitless.
            </h2>
            <Slider {...settings} ref={sliderRef}>
              {galleryData?.length &&
                galleryData?.map((item, i) => (
                  <div
                    key={i}
                    className={s.galleryItemContainer}
                    onClick={async () => {
                      // await handleGalleryList(i);
                      setGalleryName(item?.name);
                      // await setGalleryList(item?.images);
                      await handleGalleryList(item?.images, item?.name);
                      setIndex(0);
                    }}
                  >
                    <div className={s.ImageWrapper}>
                      <img
                        src={
                          item?.images[0]
                            ? `${process.env.REACT_APP_IMAGE_BASE_URL}/${item?.images[0]}`
                            : GalleryImg
                        }
                        alt="Furniture-Image"
                        title="Furniture Image"
                      />
                    </div>
                    <div className={s.ImgSubTitle}>
                      <span>{item?.name}</span>
                    </div>
                  </div>
                ))}
            </Slider>
            <div className={s.SlideChange_wrapper} data-aos="fade-down">
              <div
                className={s.slide_changer}
                onClick={() => previousSlide(sliderRef)}
              >
                <AiOutlineArrowLeft />
              </div>
              <div
                className={s.slide_changer}
                onClick={() => nextSlide(sliderRef)}
              >
                <AiOutlineArrowRight />
              </div>
            </div>
          </div>
        </div>
      ) : null}
      <Lightbox
        index={index}
        slides={galleryList}
        render={{
          slide: ({ slide }) => <CustomSlide slide={slide} />,
        }}
        share={{
          share: ({ slide }) => {
            setIsShare(true);
            setSHareFile(slide);
          },
        }}
        plugins={[Share, Thumbnails, Download]}
        thumbnails={{
          ref: thumbnailsRef,
          width: 80,
          height: 80,
          showToggle: true,
          vignette: true,
          position: matches ? "top" : "end",
        }}
        open={index >= 0}
        close={() => setIndex(-1)}
      />
    </div>
  );
}

export default PortfolioMainGallery;
