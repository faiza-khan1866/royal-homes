import React from "react";
import { Link } from "react-router-dom";
import Sidebar from "../Sidebar";
import { slice } from "lodash";
import { useParams, useLocation } from "react-router-dom";
import blog1 from "../../img/blogs/blog banner.png";
import blog2 from "../../img/news-2.png";

import BlogPage from "../../apis/pages/BlogPage";
import { useEffect } from "react";
import { useState } from "react";
import moment from "moment";
import "./style.css";

function useQuery() {
  const { search } = useLocation();

  return React.useMemo(() => new URLSearchParams(search), [search]);
}
const BlogList = ({ globalLanguage }) => {
  const { categoryId } = useParams();
  let query = useQuery();
  let DefaultIndexCount = 3;
  // const [allBlogData, setAllBlogData] = useState([]);
  const [filteredBlogData, setfilteredBlogData] = useState([]);
  const [index, setIndex] = useState(DefaultIndexCount);
  const initialPosts = slice(filteredBlogData, 0, index);
  const [isCompleted, setIsCompleted] = useState(false);

  const { fetchBlogList, GetBlogList } = BlogPage();
  const { data: allBlogData, isLoading } = GetBlogList();

  const loadMore = () => {
    setIndex(index + 2);
    if (index >= filteredBlogData.length) {
      setIsCompleted(true);
    } else {
      setIsCompleted(false);
    }
  };

  useEffect(() => {
    setfilteredBlogData(allBlogData);
    setIndex(DefaultIndexCount);
    setIsCompleted(false);
    // fetchBlogList().then(function (result) {
    //   let resutData = [...result?.data];
    //   setAllBlogData(result.data);
    //   setfilteredBlogData(result?.data);
    //   setIndex(DefaultIndexCount);
    //   setIsCompleted(false);
    //   // blog category
    //   if (categoryId == "all") {
    //     setIndex(DefaultIndexCount);
    //     setIsCompleted(false);
    //     return;
    //   }
    //   if (categoryId && categoryId !== "") {
    //     const filteredBlog = resutData.filter((item) => {
    //       return item.category_id == categoryId;
    //     });
    //     setIndex(DefaultIndexCount);
    //     setIsCompleted(false);
    //     setfilteredBlogData(filteredBlog);
    //   }
    // });
  }, [isLoading]);

  useEffect(() => {
    if (categoryId && categoryId !== "") {
      if (categoryId == "all") {
        setIndex(DefaultIndexCount);
        setIsCompleted(false);
        setfilteredBlogData(allBlogData);
        return;
      }
      const filteredBlog = allBlogData?.filter((item) => {
        return item.category.route == categoryId;
      });
      if (filteredBlog?.length <= DefaultIndexCount) {
        setIndex(DefaultIndexCount);
        setIsCompleted(true);
        setfilteredBlogData(filteredBlog);
        return;
      }
      setIndex(DefaultIndexCount);
      setIsCompleted(false);
      setfilteredBlogData(filteredBlog);
    }
  }, [categoryId, isLoading]);

  useEffect(() => {
    if (query.get("search") && query.get("search") !== "") {
      const searchedData = allBlogData?.filter((item) => {
        return item.title
          .toLowerCase()
          .includes(query.get("search").toLowerCase());
      });
      setIndex(DefaultIndexCount);
      setIsCompleted(false);
      setfilteredBlogData(searchedData);
    }
  }, [query.get("search"), isLoading]);

  return (
    <section className="blog-page-area">
      <div className="container">
        <div className="row">
          <Sidebar
            DefaultIndexCount={DefaultIndexCount}
            setIndex={setIndex}
            setIsCompleted={setIsCompleted}
            setfilteredBlogData={setfilteredBlogData}
            MainBlog={true}
            globalLanguage={globalLanguage}
          />
          {isLoading ? (
            <>
              <div className="col-lg-8 col-md-7 order-md-1 addMargin-top">
                <div className="blog-left">
                  <h6>Loading Blogs...</h6>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="col-lg-8 col-md-7 order-md-1 addMargin-top">
                <div className="blog-left">
                  {query.get("search") ? (
                    <p>
                      About {filteredBlogData?.length} results of "
                      {query.get("search")}" found
                    </p>
                  ) : null}

                  <div className="row">
                    {initialPosts?.length <= 0 ? (
                      <>
                        <h6>No Blog Found!</h6>
                      </>
                    ) : (
                      initialPosts?.map((item, i) => (
                        <div className="col-lg-12" key={i}>
                          <Link
                            to={`/${globalLanguage}/blog/${item?.route}`}
                            className="news-box"
                            data-aos="fade-up"
                          >
                            <div className="news-img">
                              <img
                                src={`${process.env.REACT_APP_IMAGE_BASE_URL}/${item?.featured_img}`}
                                alt={item?.title}
                                title={item?.title}
                                loading="lazy"
                              />
                            </div>
                            <div className="news-text">
                              <p className="news-date">
                                {/* Posted by: {item?.posted_by} */}
                                Posted On:{" "}
                                {moment(item?.updated_at).format("MMM DD YYYY")}
                              </p>
                              <div className="BlogTitle">{item?.title}</div>
                            </div>
                          </Link>
                        </div>
                      ))
                    )}
                  </div>

                  <div className="row">
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
                          {initialPosts?.length <= 0 ? null : (
                            <div className="text-center blog-left">
                              <button
                                onClick={loadMore}
                                type="button"
                                className="cta-btn btn-fill More_btnFill"
                              >
                                Explore More
                              </button>
                            </div>
                          )}
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default BlogList;
