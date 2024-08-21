import React, { useEffect, useState } from "react";
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";
import { motion } from "framer-motion";
import Slider from "react-slick";
import { useRef } from "react";
import {
  AiOutlineArrowLeft,
  AiOutlineArrowRight,
  AiFillAccountBook,
} from "react-icons/ai";
import img1 from "../../img/GalleryBeforeAfter/Before-after-kitchen-renovation.png";
import img2 from "../../img/GalleryBeforeAfter/NoVacancy.png";
import img3 from "../../img/GalleryBeforeAfter/kitchenBEAf.png";
import Lightbox, { useLightboxState } from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import "./style.css";
import s from "./style.module.css";
const ShowImg = ({ title, src, alt, isAlt, isExpendtrue, sim }) => {
  return (
    <div>
      <div className={s.imgContainer}>
        <div
          className={`${s.ImgDetails}`}
          style={
            sim
              ? {
                  top: "10px",
                  left: !isAlt ? "15px" : null,
                  right: isAlt ? "15px" : null,
                }
              : {
                  top: !isAlt ? "10px" : null,
                  bottom: isAlt ? "10px" : null,
                  left: "15px",
                }
          }
        >
          {title}
        </div>
        <img
          src={src}
          alt={alt}
          className={s.ImageCLiserL}
          style={
            isExpendtrue
              ? { height: "80vh", width: "70vw" }
              : { height: "350px", width: "100%" }
          }
        />
      </div>
    </div>
  );
};

const PortfolioInnerBeforeAfterGalleryList = ({ imagesData }) => {
  const SlideBeforeAftr = useRef(null);
  const [index, setIndex] = React.useState(-1);

  const [IsLightOpne, setIsLightOpen] = useState(false);
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6500,
    draggable: false,
    swipeToSlide: false,
    touchMove: false,
    swipe: false,
  };

  // let imgSlides = [
  //   {
  //     src: img1,
  //   },
  //   {
  //     src: img3,
  //   },
  //   {
  //     src: img1,
  //   },
  //   {
  //     src: img3,
  //   },
  //   {
  //     src: img2,
  //   },
  //   {
  //     src: img1,
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
  //     src: img2,
  //   },
  //   {
  //     src: img3,
  //   },
  //   {
  //     src: img1,
  //   },
  // ];

  const stopPropagation = (event) => {
    event.preventDefault();
    event.stopPropagation();
  };

  function CustomSlide({ slide }) {
    const index = imagesData.findIndex((el) => el === slide);
    const { currentIndex } = useLightboxState();

    return index === currentIndex ? (
      <div>
        <ReactCompareSlider
          portrait={true}
          itemOne={
            <ShowImg
              title={"Before"}
              src={`${process.env.REACT_APP_IMAGE_BASE_URL}/${slide?.before}`}
              alt={"img"}
              isExpendtrue={true}
            />
          }
          itemTwo={
            <ShowImg
              title={"After"}
              src={`${process.env.REACT_APP_IMAGE_BASE_URL}/${slide?.after}`}
              alt={"img"}
              isAlt={true}
              isExpendtrue={true}
            />
          }
        />
      </div>
    ) : null;
  }

  const nextSlide = () => {
    SlideBeforeAftr?.current?.slickNext();
  };
  const previousSlide = () => {
    SlideBeforeAftr?.current?.slickPrev();
  };
  return (
    <>
      <div className="portfolio_inner_beforeAfter_gallery">
        <div className="container">
          <div className="title">
            <h2 className="mb-3 mt-3">BEFORE & AFTER GALLERY</h2>
          </div>
          <div className="Slides_projects">
            <Slider {...settings} ref={SlideBeforeAftr}>
              {imagesData?.map((item, i) => (
                <div
                  className="service_fit_out_images_box"
                  data-aos="fade-up"
                  data-aos-delay="100"
                  key={i}
                  onClick={() => setIndex(i)}
                >
                  <div className="BeforeImg">
                    {/* <h2>{item?.title?.slice(0, 18)}</h2> */}
                    <ReactCompareSlider
                      itemOne={
                        <ShowImg
                          title={"Before"}
                          src={`${process.env.REACT_APP_IMAGE_BASE_URL}/${item?.before}`}
                          alt={"img"}
                          sim={true}
                        />
                      }
                      itemTwo={
                        <ShowImg
                          title={"After"}
                          src={`${process.env.REACT_APP_IMAGE_BASE_URL}/${item?.after}`}
                          alt={"img"}
                          isAlt={true}
                          sim={true}
                        />
                      }
                    />
                  </div>
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
          <div className="row list_project">
            {imagesData?.slice(0, 12)?.map((item, i) => (
              <div className="col-lg-4 col-md-6" key={i}>
                <div
                  className={`service_fit_out_images_box service_fit_out_images_boxd1s`}
                  data-aos="fade-up"
                  data-aos-delay="100"
                  onClick={() => setIndex(i)}
                >
                  <div className="BeforeImg">
                    <ReactCompareSlider
                      itemOne={
                        <ShowImg
                          title={"Before"}
                          src={`${process.env.REACT_APP_IMAGE_BASE_URL}/${item?.before}`}
                          alt={"img"}
                          sim={true}
                        />
                        // <ReactCompareSliderImage
                        //   src={`${process.env.REACT_APP_IMAGE_BASE_URL}/${item?.before}`}
                        //   alt="Image one"
                        // />
                      }
                      itemTwo={
                        <ShowImg
                          title={"After"}
                          src={`${process.env.REACT_APP_IMAGE_BASE_URL}/${item?.after}`}
                          alt={"img"}
                          isAlt={true}
                          sim={true}
                        />
                        // <ReactCompareSliderImage
                        //   src={`${process.env.REACT_APP_IMAGE_BASE_URL}/${item?.after}`}
                        //   alt="Image two"
                        // />
                      }
                    />
                    {/* <div className="title_img_box">
                      <h4>{item?.title?.slice(0, 18)}</h4>
                    </div> */}
                    <div
                      className="ExptneVIew"
                      onClick={() => {
                        setIsLightOpen(true);
                        setIndex(i);
                      }}
                    >
                      <button>Expand</button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {imagesData && (
        <>
          <Lightbox
            index={index}
            slides={imagesData}
            open={IsLightOpne}
            render={{
              slide: ({ slide }) => <CustomSlide slide={slide} />,
            }}
            close={() => setIsLightOpen(false)}
          />
        </>
      )}
    </>
  );
};
export default PortfolioInnerBeforeAfterGalleryList;
