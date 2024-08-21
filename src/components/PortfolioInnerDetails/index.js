import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import DOMPurify from "dompurify";
import { Helmet } from 'react-helmet-async';
// images
import banner from "../../img/common/slider_1.jpg";
// api
import PortfolioPageApi from "../../apis/pages/PortfolioPageApi";
import PortfolioInnerGalleryList from "../PortfolioInnerGalleryList";
// css files
import PortfolioInnerBeforeAfterGalleryList from "../PortfolioInnerBeforeAfterGalleryList";
import "./style.css";

function PortfolioInnerDetails({ globalLanguage, setBanner }) {
  const { id } = useParams();
  const [pageData, setPageData] = useState({});

  const [galleryList, setGalleryList] = useState([]);

  const { fetchSingleProjects } = PortfolioPageApi();

  useEffect(() => {
    if (id && id !== "") {
      fetchSingleProjects(id)
        .then((res) => {
          setPageData(res.data);
          setBanner(
            `${process.env.REACT_APP_IMAGE_BASE_URL}/${res.data?.content?.Main_section?.Banner_Image}`
          );
          let galleryData = res?.data?.content?.gallery_images?.map((item) => {
            return {
              src: `${process.env.REACT_APP_IMAGE_BASE_URL}/${item?.img}`,
              title: item?.title,
            };
          });
          setGalleryList(galleryData);
        })
        .catch((e) => {
          console.log("singlePortfolio", e);
        });
    }
  }, [id]);

  useEffect(() => {
    const goToTop = () => {
      window.scrollTo({
        top: 100,
        behavior: "smooth",
      });
    };
    goToTop();
  }, [id]);

  return (
    <>
      <Helmet>
        <title>
          RPH | Portfolio |{" "}
          {pageData?.content?.Main_section?.title
            ? `${pageData?.content?.Main_section?.title}`
            : id}
        </title>
        {/* <title>{singleBlogData?.seo?.meta_title}</title> */}
        <meta name="title" content={pageData?.seo?.meta_title} />
        <meta name="description" content={pageData?.seo?.meta_description} />
        <meta name="schema_markup" content={pageData?.seo?.schema_markup} />
      </Helmet>
      <section id="new_portolio_inner_details">
        <div className="container">
          <h2 className="section-title mb-2 UpperCasetext">
            {pageData?.content?.Main_section?.title}
          </h2>
          <span className="Divider"></span>
          <h3 className="sectin_subTitle">
            {pageData?.content?.Main_section?.sub_title}
          </h3>
        </div>
        {/* <img
        className="img-fluid banner_img"
        src={`${process.env.REACT_APP_IMAGE_BASE_URL}/${pageData?.content?.Main_section?.Banner_Image}`}
        alt={pageData?.content?.Main_section?.sub_title}
      /> */}
        <div className="container">
          {pageData?.content?.detail_section?.video_link?.length > 3 ? (
            <div className="videoContainer">
              <div className="VideoSection">
                {/* <h5>Intro</h5> */}
                <iframe
                  height={500}
                  src={pageData?.content?.detail_section?.video_link}
                  alt={pageData?.content?.detail_section?.sub_title}
                ></iframe>
              </div>
            </div>
          ) : null}

          {/* <h5>Before</h5> */}
          {/* <video
                  autoPlay
                  muted
                  loop
                  className="Video_section"
                  controls
                  poster={`${process.env.REACT_APP_IMAGE_BASE_URL}/${pageData?.content?.Main_section?.Banner_Image}`}
                  id="video_background"
                >
                  <source
                    src={pageData?.content?.Main_section?.video_link}
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video> */}

          <h3 className="mb-3 change_toUperCase mt-4">
            {/* Project Overview & Accomplishments */}
            Project Overview
          </h3>
          <h2 className="mb-3">{pageData?.content?.detail_section?.title}</h2>
          <p
            className="Par_containerKS9"
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(
                pageData?.content?.detail_section?.description
              ),
            }}
          />

          {/* <div className="normal-subtitle">
          <h3 className="sub-title">
            {pageData?.content?.feature_section?.title}
          </h3>
        </div> */}
        </div>
        {/* <div className="side-img-container">
        <div className="row">
          <div className="col-md-4">
            <div className="title-container rotate-subtitle">
              <h3 className="sub-title">
                {pageData?.content?.feature_section?.title}
              </h3>
            </div>
          </div>
          <div className="col-md-8">
            <img
              className="img-fluid side_img"
              src={`${process.env.REACT_APP_IMAGE_BASE_URL}/${pageData?.content?.feature_section?.feature_img}`}
              alt="banner"
            />
          </div>
        </div>
      </div> */}

        {/* <div className="container mt-5">
        <div className="row">
          <div className="col-md-7">
            <p
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(
                  pageData?.content?.feature_section?.description
                ),
              }}
            />
          </div>
        </div>
      </div> */}
        {/*//# images gallery list */}

        <div className="Finishing_Gallery_wrapper">
          {/* <h2>BEFORE & AFTER GALLERY</h2> */}
          <PortfolioInnerGalleryList
            galleryList={galleryList}
            globalLanguage={globalLanguage}
          />
        </div>

        {/* //# Before and after  */}
        {pageData?.content?.images[0]?.after ? (
          <div className="Gallery_wrapper">
            {/* <span className="Divider"></span> */}
            <PortfolioInnerBeforeAfterGalleryList
              imagesData={pageData?.content?.images}
            />
            {/* <span className="Divider"></span> */}
          </div>
        ) : null}

        {/* images gallery list end*/}
        {/* <div className="container" data-aos="fade-up">
        <div className="row g-0">
          <div className="col-lg-6">
            <div className="img-inner">
              <img
                src={`${process.env.REACT_APP_IMAGE_BASE_URL}/${pageData?.content?.feature_Inner_card?.feature_img}`}
                alt=""
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="img-details-inner">
              <h2 className="section-title">
                {" "}
                {pageData?.content?.feature_Inner_card?.title}
              </h2>
              <span></span>
              <p
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(
                    pageData?.content?.feature_Inner_card?.description
                  ),
                }}
              />
            </div>
          </div>
        </div>
      </div> */}
      </section>
    </>
  );
}

export default PortfolioInnerDetails;
