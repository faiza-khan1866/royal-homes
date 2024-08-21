import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import Img1 from "../../img/portfolio/img_port1.png";
import Img2 from "../../img/portfolio/img_port2.png";
import Img3 from "../../img/portfolio/img_port3.png";
import Img4 from "../../img/portfolio/img_port4.png";
import Img5 from "../../img/portfolio/img_port5.png";
import Img6 from "../../img/portfolio/img_port6.png";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { BsArrowRight } from "react-icons/bs";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";
import PortfolioPageApi from "../../apis/pages/PortfolioPageApi";
import { slice } from "lodash";

// css files
import "./style.css";

function useQuery() {
  const { search } = useLocation();

  return React.useMemo(() => new URLSearchParams(search), [search]);
}
const NewPortfolio = ({ globalLanguage }) => {
  // const [pageAllData, setPageData] = useState([]);
  const [filteredPageData, setFilteredPageData] = useState([]);
  let query = useQuery();

  const { GetProjectList } = PortfolioPageApi();
  const { data: pageAllData, isLoading } = GetProjectList();
  let DefaultIndexCount = 4;
  const [Viewindex, setViewIndex] = useState(DefaultIndexCount);
  const initialPosts = slice(filteredPageData, 0, Viewindex);
  const [isCompleted, setIsCompleted] = useState(false);

  const loadMore = () => {
    setViewIndex(Viewindex + 2);
    if (Viewindex >= filteredPageData.length) {
      setIsCompleted(true);
    } else {
      setIsCompleted(false);
    }
  };
  useEffect(() => {
    setFilteredPageData(pageAllData);
    // fetchAllProjects().then((res) => {
    //   setPageData(res.data);
    //   setFilteredPageData(res.data);
    // });
  }, [isLoading]);

  useEffect(() => {
    if (query.get("search") && query.get("search") !== "") {
      const searchedData = pageAllData?.filter((item) => {
        return item?.content?.Main_section?.title
          .toLowerCase()
          .includes(query.get("search").toLowerCase());
      });
      setFilteredPageData(searchedData);
    } else {
      setFilteredPageData(pageAllData);
    }
  }, [query.get("search"), pageAllData]);

  return (
    <section className="portfolio-area new-portfolio-page new-portfolio-page32809j">
      <div className="container">
        {!isLoading && (
          <>
            <h2 className="section-title mb-2">Completed Projects</h2>
            <h3 className="sub_details mb-2">From Visions to Reality</h3>
          </>
        )}
        <div className="row">
          {isLoading ? (
            <>
              <h6>Loading...</h6>
            </>
          ) : (
            <>
              {initialPosts?.length <= 0 ? (
                <>
                  <h3>No Result Found...!</h3>
                </>
              ) : (
                <>
                  {query.get("search") ? (
                    <p>
                      About {initialPosts?.length} results of "
                      {query.get("search")}" found
                    </p>
                  ) : null}
                  {initialPosts?.map((item, i) => (
                    <div
                      key={i}
                      className={
                        item?.content?.Main_section?.isFeaturedImgFull
                          ? "col-md-6"
                          : "col-12"
                      }
                    >
                      <div
                        className="mt-3 img-list_contianer"
                        data-aos="fade-up"
                      >
                        <img
                          className={
                            item?.content?.Main_section?.isFeaturedImgFull
                              ? "featuredImage"
                              : "Main_Img"
                          }
                          src={`${process.env.REACT_APP_IMAGE_BASE_URL}/${
                            item?.content?.Main_section?.isFeaturedImgFull
                              ? item?.content?.Main_section?.feature_img
                              : item?.content?.Main_section?.Banner_Image
                          }`}
                          // className={`${item?.imgType}`}
                          title={item?.content?.Main_section?.title}
                          alt={item?.content?.Main_section?.title}
                          loading="lazy"
                        />
                        <div className="img-deaitls">
                          <dov className="sub-title">
                            {item?.content?.Main_section?.sub_title}
                          </dov>
                          <div className="section-title ">
                            {item?.content?.Main_section?.title}
                          </div>
                          <br />
                          <Link
                            to={`/${globalLanguage}/portfolio-inner/${item?.route}`}
                            className="sec-btn"
                          >
                            View Project <BsArrowRight />
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
                </>
              )}
            </>
          )}
        </div>
        <div className="row mt-5" data-aos="fade-up">
          <div className="col-lg-12">
            {isCompleted ? (
              <div className="text-center blog-left">
                <button
                  className="cta-btn btn-fill More_btnFill_portfolio disabled_more"
                  disabled
                >
                  No More Projects to Show
                </button>
              </div>
            ) : (
              <>
                {initialPosts?.length <= 0 ? null : (
                  <div className="text-center blog-left">
                    <button
                      onClick={loadMore}
                      type="button"
                      className="cta-btn btn-fill More_btnFill_portfolio"
                    >
                      Show More Projects
                    </button>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewPortfolio;
