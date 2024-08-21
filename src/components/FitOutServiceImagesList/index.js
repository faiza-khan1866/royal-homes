import React, { useEffect, useState } from "react";
import serviceImg from "../../img/logoWhite.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Slider from "react-slick";

import PortfolioPageApi from "../../apis/pages/PortfolioPageApi";
import { useRef } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import "./style.css";

const FitOutServiceImagesList = ({ globalLanguage }) => {
  const [LatestpageAllData, setLatestPageData] = useState([]);
  const slideFitoutImageList = useRef(null);

  const { GetProjectList } = PortfolioPageApi();
  const { data: ProjectDataList, isLoading } = GetProjectList();

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
  useEffect(() => {
    let getData = structuredClone(ProjectDataList);
    const latestProjects = getData?.sort((a, b) => {
      let item1 = new Date(a?.updated_at).getTime();
      let item2 = new Date(b?.updated_at).getTime();
      return item2 - item1;
    });
    setLatestPageData(latestProjects);
  }, [isLoading]);

  const nextSlide = () => {
    slideFitoutImageList?.current?.slickNext();
  };
  const previousSlide = () => {
    slideFitoutImageList?.current?.slickPrev();
  };
  return (
    <section className="service_fit_out_images_area service_fit_out_images_area4d5s">
      <div className="container">
        <h2 className="Main_tile_project">Completed Projects</h2>
        <div className="Slides_projects">
          <Slider {...settings} ref={slideFitoutImageList}>
            {LatestpageAllData?.filter((item) => item?.status == "1")
              ?.slice(0, 6)
              ?.map((item, i) => (
                <div
                  className="service_fit_out_images_box service_fit_out_images_box54ds"
                  data-aos="fade-up"
                  data-aos-delay="100"
                  key={i}
                >
                  <Link
                    to={`/${globalLanguage}/portfolio-inner/${item?.route}`}
                  >
                    <motion.img
                      whileHover={{
                        scale: 1.07,
                      }}
                      whileTap={{ scale: 0.9 }}
                      src={`${process.env.REACT_APP_IMAGE_BASE_URL}/${item?.content?.Main_section?.feature_img}`}
                      alt={item?.content?.Main_section?.title}
                      title={item?.content?.Main_section?.title}
                      className="img-fluid ServiceImg"
                    />
                    <div className="title_img_box">
                      <div className="image_title_fitout">
                        {item?.content?.Main_section?.title}
                      </div>
                    </div>
                  </Link>
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
        <div className="row row-cols-lg-3 row-cols-md-2 row-cols-1 list_project">
          {LatestpageAllData?.filter((item) => item?.status == "1")
            ?.slice(0, 6)
            ?.map((item, i) => (
              <div className="col" key={i}>
                <div
                  className="service_fit_out_images_box service_fit_out_images_box54ds"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <Link
                    to={`/${globalLanguage}/portfolio-inner/${item?.route}`}
                  >
                    <motion.img
                      whileHover={{
                        scale: 1.07,
                      }}
                      whileTap={{ scale: 0.9 }}
                      src={`${process.env.REACT_APP_IMAGE_BASE_URL}/${item?.content?.Main_section?.feature_img}`}
                      alt={item?.content?.Main_section?.title}
                      title={item?.content?.Main_section?.title}
                      className="img-fluid"
                    />
                    <div className="title_img_box">
                      <h4>{item?.content?.Main_section?.title}</h4>
                    </div>
                  </Link>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};
export default FitOutServiceImagesList;
