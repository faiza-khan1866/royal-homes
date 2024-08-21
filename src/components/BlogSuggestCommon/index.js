import React, { useEffect, useRef, useState } from "react";
import blogthum from "../../img/blogs/blog-commno.png";
import { Link } from "react-router-dom";
import s from "./style.module.css";
import "./style.css";
import BlogPage from "../../apis/pages/BlogPage";

function BlogSuggestCommon({ globalLanguage, filterId }) {
  // const [allBlogData, setAllBlogData] = useState([]);
  // const [popularPosts, setPopularPosts] = useState([]);

  const { fetchBlogList, GetLatestBlogList } = BlogPage();
  const { data: popularPosts, isLoading } = GetLatestBlogList();

  // useEffect(() => {
  //   fetchBlogList().then(function (result) {
  //     let UpdateData = [...result?.data];
  //     const popularPost = UpdateData.sort((a, b) => {
  //       let item1 = new Date(a?.updated_at).getTime();
  //       let item2 = new Date(b?.updated_at).getTime();
  //       return item2 - item1;
  //     });
  //     setPopularPosts(popularPost);
  //     setAllBlogData(result.data);
  //   });
  // }, []);
  if (!popularPosts?.length || popularPosts?.length == 0) {
    return;
  }
  return (
    <div id="BlogSuggestCommone" className={s.BlogSuggestCommon}>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className={s.main_title} data-aos="fade-up">
              <div>
                <h3 className="sub-title">Latest Maintenance Articles</h3>
                <h2 className="section-title">Our Thoughts!</h2>
              </div>
              <Link
                to={`/${globalLanguage}/blogs`}
                className="cta-btn btn-fill"
              >
                Explore Blogs
              </Link>
            </div>
          </div>
          {isLoading ? (
            <>
              <h6>Loading...</h6>
            </>
          ) : (
            <>
              {popularPosts?.filter((item) => item?.category_id == filterId)
                ?.length ? (
                popularPosts
                  ?.filter((item) => item?.category_id == filterId)
                  ?.slice(0, 2)
                  .map((item, i) => (
                    <div className="col-lg-6" key={i}>
                      <Link to={`/${globalLanguage}/blog/${item?.route}`}>
                        <div
                          className={s.blog_suggest_wrapper}
                          data-aos="fade-up"
                        >
                          <img
                            src={`${process.env.REACT_APP_IMAGE_BASE_URL}/${item?.featured_img}`}
                            alt="blog-thumbnail"
                            title={item?.title}
                            // style={{
                            //   display: "block",
                            //   maxWidth: "600px",
                            //   maxHeight: "450px",
                            // }}
                          />
                          <div className={s.blog_details}>
                            <p className="news-date">
                              {/* {item?.sub_title} -{" "} */}
                              {new Date(item?.updated_at)?.toLocaleDateString(
                                "en-US",
                                {
                                  day: "numeric",
                                  month: "short",
                                  year: "numeric",
                                }
                              )}
                            </p>
                            <h3>{item?.title}</h3>
                          </div>
                        </div>
                      </Link>
                    </div>
                  ))
              ) : (
                <h6>No Blogs Yet...</h6>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default BlogSuggestCommon;
