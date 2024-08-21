import React, { useRef } from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import bg1 from "../../img/portfolio/bg1.png";
import bg2 from "../../img/portfolio/bg2.png";
import { BsArrowRight } from "react-icons/bs";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";
import { useParams } from "react-router-dom";
import { useState } from "react";
import PortfolioPageApi from "../../apis/pages/PortfolioPageApi";
import { useEffect } from "react";
// css file
import "./style.css";

function NewPortfolioSlider({ globalLanguage, backImg, frontImg }) {
  const { id } = useParams();
  const sliderRef = useRef();
  const [pageAllData, setPageData] = useState([]);
  const [LatestpageAllData, setLatestPageData] = useState([]);

  const { fetchAllProjects, GetProjectList } = PortfolioPageApi();
  const { data: ProjectDataList, isLoading } = GetProjectList();

  useEffect(() => {
    let getData = structuredClone(ProjectDataList);
    const latestProjects = getData?.sort((a, b) => {
      let item1 = new Date(a?.updated_at).getTime();
      let item2 = new Date(b?.updated_at).getTime();
      return item2 - item1;
    });
    setLatestPageData(latestProjects);
    if (id && id !== "") {
      let data = ProjectDataList?.filter((item) => item.route !== id);
      setPageData(data);
      return;
    }
    setPageData(ProjectDataList);
    // fetchAllProjects().then((res) => {
    //   let getData = structuredClone(res?.data);
    //   const latestProjects = getData?.sort((a, b) => {
    //     let item1 = new Date(a?.updated_at).getTime();
    //     let item2 = new Date(b?.updated_at).getTime();
    //     return item2 - item1;
    //   });
    //   setLatestPageData(latestProjects);
    //   if (id && id !== "") {
    //     let data = res.data?.filter((item) => item.route !== id);
    //     setPageData(data);
    //     return;
    //   }
    //   setPageData(res.data);
    // });
  }, [id, isLoading]);

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
    autoplay: false,
    autoplaySpeed: 6500,
    nextArrow: <AiOutlineArrowRight />,
    prevArrow: <AiOutlineArrowLeft />,
  };
  return (
    <div id="new-portolio-slider">
      <div className="new-slider-wrapper" data-aos="fade-down">
        <div
          className="slide-container-cts"
          style={{
            // backgroundImage: `url(${item?.content?.Main_section?.Banner_Image})`,
            backgroundImage: `url(${bg1})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <div className="bg-img-overlay">
            <img
              className="bg-img project-slider-bg-img"
              // src={`${process.env.REACT_APP_IMAGE_BASE_URL}/${item?.content?.Main_section?.Banner_Image}`}
              src={backImg ? backImg : bg1}
              alt="Main-Banner"
              title="Main Banner"
            />
          </div>
          <img
            className="main-img project-slider-main-img"
            // src={`${process.env.REACT_APP_IMAGE_BASE_URL}/${item?.content?.Main_section?.Banner_Image}`}
            src={frontImg ? frontImg : bg2}
            alt="Main-Banner"
            title="Main Banner"
          />
          <div className="slide-details" data-aos="fade-up">
            {/* {!frontImg ? (
                  <Link to="/portfolio-inner/testId" className="sec-btn">
                    View Project <BsArrowRight />
                  </Link>
                ) : (
                  <Link to="/portfolio" className="sec-btn">
                    View Projects <BsArrowRight />
                  </Link>
                )} */}
            <Link to={`/${globalLanguage}/portfolio`} className="sec-btn">
              View All Projects <BsArrowRight />
            </Link>
            <span />
            <h2 className="section-title">
              Experience The Pinnacle of Luxe Living™
            </h2>
          </div>
        </div>
        {/* <Slider {...settings} ref={sliderRef}>
          {LatestpageAllData?.slice(0, 1)?.map((item, i) => (
            <div
              key={i}
              className="slide-container-cts"
              style={{
                backgroundImage: `url(${item?.content?.Main_section?.Banner_Image})`,
                // backgroundImage: `url(${bg1})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
            >
              <div className="bg-img-overlay">
                <img
                  className="bg-img project-slider-bg-img"
                  src={`${process.env.REACT_APP_IMAGE_BASE_URL}/${item?.content?.Main_section?.Banner_Image}`}
                  // src={backImg ? backImg : bg1}
                  alt=""
                />
              </div>
              <img
                className="main-img project-slider-main-img"
                src={`${process.env.REACT_APP_IMAGE_BASE_URL}/${item?.content?.Main_section?.Banner_Image}`}
                // src={frontImg ? frontImg : bg2}
                alt=""
              />
              <div className="slide-details" data-aos="fade-down">
                {/* {!frontImg ? (
                  <Link to="/portfolio-inner/testId" className="sec-btn">
                    View Project <BsArrowRight />
                  </Link>
                ) : (
                  <Link to="/portfolio" className="sec-btn">
                    View Projects <BsArrowRight />
                  </Link>
                )} */}
        {/* <Link
                  to={`/${globalLanguage}/portfolio-inner/${item?.route}`}
                  className="sec-btn"
                >
                  View Project <BsArrowRight />
                </Link>
                <span />
                <h2 className="section-title">
                  {item?.content?.Main_section?.title}
                </h2>
              </div>
            </div> */}
        {/* ))} */}
        {/* // </Slider> */}
        {/* <div className="slide-change-btn" data-aos="fade-down">
          <div className="change-btn" onClick={() => previousSlide()}>
            <AiOutlineArrowLeft />
          </div>
          <div className="change-btn" onClick={() => nextSlide()}>
            <AiOutlineArrowRight />
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default NewPortfolioSlider;
