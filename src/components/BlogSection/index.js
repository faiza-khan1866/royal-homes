import React from "react";
import { Link } from "react-router-dom";

// import blog1 from "../../img/news-1.png";
// import blog2 from "../../img/news-2.png";;
// import blog1 from "../../img/common/interior_1.png";
// import blog2 from "../../img/common/interior_2.png";
import BlogPage from "../../apis/pages/BlogPage";
//
import "./style.css";

const BlogSection = ({ globalLanguage }) => {
  // const [allBlogData, setAllBlogData] = useState([]);

  // const [popularPosts, setPopularPosts] = useState([]);

  const { GetLatestBlogList } = BlogPage();

  const { data: popularPosts, isLoading } = GetLatestBlogList();

  // useEffect(() => {
  // fetchBlogList().then(function (result) {
  // let UpdateData = structuredClone(result.data);
  // let UpdateData = allBlogData;
  // const popularPost = UpdateData?.sort((a, b) => {
  //   let item1 = new Date(a?.updated_at).getTime();
  //   let item2 = new Date(b?.updated_at).getTime();
  //   return item2 - item1;
  // });
  // setPopularPosts(popularPost);
  // setAllBlogData(result.data);
  // });
  // }, []);
  if (!popularPosts?.length || popularPosts?.length == 0) {
    return;
  }
  return (
    <section
      className="latest-news-area latest-news-area-home"
      data-aos="fade-up"
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            {popularPosts?.length && (
              <div className="site-heading">
                <div className="blog-sb-title sub-title">
                  THE LATEST NEWS FROM RPH
                </div>
                <div className="blog-mn-title section-title">Our Blogs</div>
              </div>
            )}
          </div>
        </div>
        {isLoading ? (
          <>
            <span className="LoadingBlog">Loading...</span>
          </>
        ) : (
          <>
            <div className="row">
              {popularPosts?.slice(0, 2)?.map((item, i) => (
                <div className="col-md-6" key={i}>
                  <Link
                    to={`/${globalLanguage}/blog/${item?.route}`}
                    className={i == 0 ? "news-box news-box-margin" : "news-box"}
                  >
                    <div className="news-img">
                      <img
                        src={`${process.env.REACT_APP_IMAGE_BASE_URL}/${item?.featured_img}`}
                        alt="Blog-image"
                        title="Blog Featured Image"
                        style={{
                          display: "block",
                          maxWidth: "600px",
                          maxHeight: "450px",
                        }}
                        loading="lazy"
                        height={"350"}
                        width={"600"}
                      />
                    </div>
                    <div className="news-text">
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
                      <div className="blog_sub_title">{item?.title}</div>
                    </div>
                  </Link>
                  {i == 1 && (
                    <>
                      <div className="text-center news_more">
                        <Link
                          to={`/${globalLanguage}/blogs`}
                          className="cta-btn btn-fill"
                        >
                          View Our Blogs
                        </Link>
                      </div>
                    </>
                  )}
                </div>
              ))}

              {/* <div className="col-md-6">
            <Link to="/blogs" className="news-box">
              <div className="news-img">
                <img
                  src={blog2}
                  alt="img"
                  style={{
                    display: "block",
                    maxWidth: "600px",
                  }}
                />
              </div>
              <div className="news-text">
                <p className="news-date">Planning - 18.04.2020</p>
                <h3>Luxurious And Ultra Modern Homes</h3>
              </div>
            </Link>
            <div className="text-center news_more">
              <Link to="/blogs" className="cta-btn btn-fill">
                Explore More
              </Link>
            </div>
          </div> */}
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default BlogSection;
