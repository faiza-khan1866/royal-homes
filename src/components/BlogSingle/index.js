import React, { useState } from "react";
import { Link } from "react-router-dom";
import Sidebar from "../Sidebar";
import DOMPurify from "dompurify";
import Skeleton from "@mui/material/Skeleton";
import { Helmet } from "react-helmet-async";
import blog1 from "../../img/blogInner/blog_main.png";
// import Img1 from "../../img/blogInner/avatar.png";
import Img1 from "../../img/logo.png";
import Img2 from "../../img/blogInner/comment-avatar2.png";
import Img3 from "../../img/blogInner/replayer.png";
import Img4 from "../../img/blogInner/comment-avatar1.png";
import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  PinterestShareButton,
} from "react-share";
import { FaXTwitter } from "react-icons/fa6";
import BlogPage from "../../apis/pages/BlogPage";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import Swal from "sweetalert2";
import { Stack } from "@mui/material";
import SideBarInnerBlog from "../SideBarInnerBlog";
import moment from "moment";
import "./style.css";

const BlogSingle = ({ globalLanguage }) => {
  const { blogRoute } = useParams();
  let initialComment = {
    blog_id: "",
    comment: "",
    first_name: "",
    email: "",
    message: "",
  };
  // get blog data
  const { fetchBlogSingle, fetchBlogList, fetchAllComments, PostAComment } =
    BlogPage();
  const [formData, setFormData] = useState({ ...initialComment });
  const [isSeding, setIsSending] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const [singleBlogData, setSingleBlogData] = useState({});

  const [allBlogs, setAllBlogs] = useState([]);
  const [relatedBlogs, setRelatedBlogs] = useState([]);

  const [BlogComments, setBlogComments] = useState([]);
  const [BlogApprovedComments, setBlogApprovedComments] = useState([]);
  const [filteredBlogComments, setFilteredBlogComments] = useState([]);
  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  // post a comment
  const SubmitHandler = async (e) => {
    e.preventDefault();
    // setFormData((prev) => ({ ...prev, blog_id: singleBlogData.id }));
    setIsSending(true);

    if (formData.blog_id == "") {
      setIsSending(false);

      return;
    }
    if (formData.name == "") {
      setIsSending(false);
      Swal.fire({
        icon: "info",
        text: "Enter your Name",
      });
      return;
    }
    if (formData?.email == "") {
      setIsSending(false);
      Swal.fire({
        icon: "info",
        text: "Enter your Email",
      });
      return false;
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(formData?.email)
    ) {
      Swal.fire({
        icon: "info",
        text: "Invalid Email",
      });
      setIsSending(false);

      return;
    } else if (formData.message == "") {
      Swal.fire({
        icon: "info",
        text: "Enter your Website or Social Link",
      });
      setIsSending(false);

      return;
    } else if (formData.comment == "") {
      Swal.fire({
        icon: "info",
        text: "Enter your Comment",
      });
      setIsSending(false);

      return;
    }
    // sending data
    const response = await PostAComment(formData);
    setIsSending(false);
    if (response?.status == 200 || response?.status == 201) {
      Swal.fire({
        icon: "success",
        text: "Thank You, your commit is added, waiting for approval ",
        confirmButtonColor: "#c21b1e",
      });
      setFormData({ ...initialComment });
    }
  };

  useEffect(() => {
    if (blogRoute && blogRoute !== "") {
      setIsLoading(true);
      fetchBlogSingle(blogRoute).then((res) => {
        setFormData((prev) => ({ ...prev, blog_id: res?.data.id }));
        setSingleBlogData(res?.data);
        setIsLoading(false);
      });

      fetchBlogList().then((res) => {
        setAllBlogs(res?.data);
      });
      fetchAllComments().then((res) => {
        let updatedData = res?.data?.filter((item, i) => {
          return item?.status != 0;
        });
        setBlogApprovedComments(updatedData);
        setBlogComments(res?.data);
      });
    }
  }, [blogRoute]);

  useEffect(() => {
    let filteredBlog = allBlogs.filter((item) => {
      return (
        item.category_id == singleBlogData?.category_id &&
        item.id !== singleBlogData?.id
      );
    });
    let filteredBlogComments = BlogApprovedComments.filter((item) => {
      return item.blog_id == singleBlogData?.id;
    });
    setFilteredBlogComments(filteredBlogComments);
    setRelatedBlogs(filteredBlog);
  }, [singleBlogData, allBlogs]);

  return (
    <>
      <Helmet>
        <title>
          {singleBlogData?.seo?.meta_title
            ? singleBlogData?.seo?.meta_title
            : blogRoute}
        </title>
        <meta name="title" content={singleBlogData?.seo?.meta_title} />
        <meta
          name="description"
          content={singleBlogData?.seo?.meta_description}
        />
        <meta
          name="schema_markup"
          content={singleBlogData?.seo?.schema_markup}
        />
      </Helmet>
      {isLoading ? (
        <>
          <section className="blog-page-area blog-page-area4d4d">
            <div className="container">
              <div className="row">
                <div className="col-lg-7 col-md-7">
                  <div className="blog-left">
                    <div className="blog-left-content text-align-right">
                      <h2>
                        <Skeleton variant="rounded" width={350} height={40} />
                      </h2>
                      <Stack spacing={1}>
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 1, 4]?.map(
                          (item) => (
                            <Skeleton
                              variant="rounded"
                              sx={{ width: "100%" }}
                              height={20}
                            />
                          )
                        )}
                      </Stack>
                      <div className="blog-left-content-share">
                        <h3>
                          <Skeleton
                            variant="rounded"
                            sx={{ margin: "auto", marginTop: "20px" }}
                            width={200}
                            height={20}
                          />
                        </h3>
                        <ul>
                          <li>
                            <Skeleton
                              variant="rounded"
                              sx={{ margin: "auto" }}
                              width={40}
                              height={40}
                            />
                          </li>
                          <li>
                            {" "}
                            <Skeleton
                              variant="rounded"
                              sx={{ margin: "auto" }}
                              width={40}
                              height={40}
                            />
                          </li>
                          <li>
                            {" "}
                            <Skeleton
                              variant="rounded"
                              sx={{ margin: "auto" }}
                              width={40}
                              height={40}
                            />
                          </li>
                          <li>
                            {" "}
                            <Skeleton
                              variant="rounded"
                              sx={{ margin: "auto" }}
                              width={40}
                              height={40}
                            />
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="blog-left-related-post">
                      <h3>
                        <Skeleton variant="rounded" width={200} height={30} />
                      </h3>
                      <div className="row">
                        <div className="col-lg-6">
                          <Link
                            to={`/${globalLanguage}/blogs`}
                            className="news-box"
                          >
                            <div className="news-img relatedBlogs">
                              <Skeleton
                                variant="rounded"
                                sx={{ width: "100%" }}
                                height={250}
                              />
                            </div>
                          </Link>
                        </div>
                        <div className="col-lg-6">
                          <Link
                            to={`/${globalLanguage}/blogs`}
                            className="news-box"
                          >
                            <div className="news-img relatedBlogs">
                              <Skeleton
                                variant="rounded"
                                sx={{ width: "100%" }}
                                height={250}
                              />
                            </div>
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="blog-comment-area">
                      <h3>
                        <Skeleton
                          variant="rounded"
                          sx={{ width: "30%" }}
                          height={20}
                        />
                      </h3>
                      <div className="blog-comment-box">
                        <div className="blog-comment-people">
                          <Skeleton variant="circular" width={80} height={80} />
                        </div>
                        <div className="blog-comment-text">
                          <div className="blog-comment-date mb-2">
                            <Stack spacing={1}>
                              <Skeleton
                                variant="rounded"
                                sx={{ width: "30%" }}
                                height={20}
                              />
                              <Skeleton
                                variant="rounded"
                                sx={{ width: "20%" }}
                                height={20}
                              />
                            </Stack>
                          </div>
                          <p>
                            <Stack spacing={1}>
                              <Skeleton
                                variant="rounded"
                                sx={{ width: "100%" }}
                                height={20}
                              />
                              <Skeleton
                                variant="rounded"
                                sx={{ width: "60%" }}
                                height={20}
                              />
                            </Stack>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-5 col-md-5 order-md-2 ">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="news-img">
                        <Skeleton variant="rounded" height={500} />
                      </div>
                    </div>
                  </div>
                  <div className="blog-info">
                    <div className="b_info_flex mb-2">
                      <div className="blog-info-date">
                        <Skeleton variant="rounded" width={150} height={20} />
                      </div>
                    </div>
                    <div className="blog-info-comments mb-2">
                      <Skeleton variant="rounded" width={150} height={20} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>{" "}
        </>
      ) : (
        <>
          <section className="blog-page-area blog-page-area4d4d">
            <div className="container">
              <div className="row">
                <div className="col-lg-7 col-md-7">
                  <div className="blog-left">
                    <div className="row ThumbView_mobile">
                      <div className="col-lg-12">
                        <div className="news-img">
                          <img
                            src={`${process.env.REACT_APP_IMAGE_BASE_URL}/${singleBlogData?.featured_img}`}
                            alt="Blog-Featured-Image"
                            title="Blog Featured Image"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="blog-left-content">
                      {/* blog post time   */}
                      <div className="ThumbView_mobile">
                        <div className="blog-info ">
                          <div className="b_info_flex">
                            <div className="blog-info-img">
                              <img
                                src={Img1}
                                alt="Featured Thumbnail"
                                title="Featured Thumbnail"
                                className="Blog_rphLogo"
                              />
                            </div>
                            <div className="blog-info-date">
                              <p>
                                <i className="far fa-calendar-alt" />
                                {moment(singleBlogData?.updated_at).format(
                                  "MMM-DD YYYY"
                                )}
                              </p>
                            </div>
                            <div className="blog-info-comments">
                              <p>
                                <i className="far fa-comments" />
                                Comments ({filteredBlogComments?.length})
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* blog details  */}
                      <div className="Blog_detials">
                        <h2 className="mb-3">{singleBlogData?.title}</h2>
                        <p
                          className="BlogInnerDetails02j"
                          dangerouslySetInnerHTML={{
                            __html: DOMPurify.sanitize(
                              singleBlogData?.short_description
                            ),
                          }}
                        />
                        <p>-{singleBlogData?.posted_by}</p>
                      </div>
                      <div className="blog-left-content-share">
                        <h3>Share this post</h3>
                        <ul>
                          <FacebookShareButton
                            url={`${window.location.href}`}
                            quote={singleBlogData?.title}
                            hashtag="#RPH"
                          >
                            <li>
                              <Link to="#">
                                <i className="fab fa-facebook-f" />
                              </Link>
                            </li>
                          </FacebookShareButton>
                          <TwitterShareButton
                            url={`${window.location.href}`}
                            quote={singleBlogData?.title}
                            hashtag="#RPH"
                          >
                            <li>
                              <Link to="#">
                                <FaXTwitter />
                              </Link>
                            </li>
                          </TwitterShareButton>
                          <WhatsappShareButton
                            url={`${window.location.href}`}
                            quote={singleBlogData?.title}
                            hashtag="#RPH"
                          >
                            <li>
                              <Link to="#">
                                <i class="fab fa-whatsapp"></i>
                              </Link>
                            </li>
                          </WhatsappShareButton>
                          <PinterestShareButton
                            url={`${window.location.href}`}
                            media={`${process.env.REACT_APP_IMAGE_BASE_URL}/${singleBlogData?.featured_img}`}
                            quote={singleBlogData?.title}
                            hashtag="#RPH"
                          >
                            <li>
                              <Link to="#">
                                <i className="fab fa-pinterest-p" />
                              </Link>
                            </li>
                          </PinterestShareButton>
                        </ul>
                      </div>
                    </div>
                    <div className="blog-left-related-post">
                      <h3>Related Blog Post</h3>
                      <div className="row">
                        {relatedBlogs.length >= 1 ? (
                          relatedBlogs?.slice(0, 2)?.map((item) => (
                            <div className="col-lg-6" key={item?.title}>
                              <Link
                                to={`/${globalLanguage}/blog/${item?.route}`}
                                className="news-box"
                              >
                                <div className="news-img relatedBlogs">
                                  <img
                                    src={`${process.env.REACT_APP_IMAGE_BASE_URL}/${item?.featured_img}`}
                                    alt="Featured Thumbnail"
                                    title="Featured Thumbnail"
                                  />
                                </div>
                                <div className="news-text">
                                  <p className="news-date">
                                    {item.posted_by !== "" ||
                                      (undefined && "Posted by:")}{" "}
                                    {item?.posted_by}
                                  </p>
                                  <h3>{item?.title}</h3>
                                </div>
                              </Link>
                            </div>
                          ))
                        ) : (
                          <div className="col-lg-6 mt-3 mb-3">
                            <p>No Related Blog Found!</p>
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="blog-comment-area">
                      <div className="comment-ara-title">
                        Comments <span>{filteredBlogComments?.length}</span>
                      </div>
                      {filteredBlogComments.length ? (
                        filteredBlogComments?.map((item) => (
                          <div className="blog-comment-box">
                            <div className="blog-comment-people">
                              <img
                                src={Img2}
                                alt="Featured avatar"
                                title="Featured avatar"
                              />
                            </div>
                            <div className="blog-comment-text">
                              <div className="blog-comment-date">
                                <h5>{item?.first_name}</h5>
                                <p>
                                  <i className="far fa-calendar-alt" />
                                  {/* {`${new Date(
                              item?.updated_at
                            ).getMonth()} ${new Date(
                              item?.updated_at
                            ).getFullYear()}`} */}
                                  {new Date(
                                    item?.updated_at
                                  )?.toLocaleDateString("en-US", {
                                    day: "numeric",
                                    month: "short",
                                    year: "numeric",
                                  })}{" "}
                                  at{" "}
                                  {new Date(
                                    item?.updated_at
                                  ).toLocaleTimeString("en-US")}
                                </p>
                              </div>
                              <p>{item?.comment}</p>
                            </div>
                          </div>
                        ))
                      ) : (
                        <div className="blog-comment-box">
                          <div className="blog-comment-text">
                            <div className="blog-comment-date">
                              <h5>No Comment Found!</h5>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                    <div className="blog-leave-comment ThumbView_mobile">
                      <div className="leave-comment-title">
                        Leave A Comments
                      </div>
                      <form onSubmit={SubmitHandler}>
                        <div className="row">
                          <div className="col-lg-4 col-md-6">
                            <div className="comment-form-group">
                              <input
                                type="text"
                                placeholder="Name"
                                name="first_name"
                                onChange={handleChange}
                                value={formData.first_name}
                                required
                              />
                              <i className="fas fa-user" />
                            </div>
                          </div>
                          <div className="col-lg-4 col-md-6">
                            <div className="comment-form-group">
                              <input
                                type="email"
                                placeholder="Email"
                                name="email"
                                onChange={handleChange}
                                value={formData.email}
                                required
                              />
                              <i className="fas fa-envelope" />
                            </div>
                          </div>
                          <div className="col-lg-4 col-md-12">
                            <div className="comment-form-group">
                              <input
                                type="text"
                                placeholder="Social or Website Link"
                                name="message"
                                onChange={handleChange}
                                value={formData.message}
                                required
                              />
                              <i className="fas fa-globe-asia" />
                            </div>
                          </div>
                          <div className="col-lg-12 col-md-12">
                            <div className="comment-form-text">
                              <textarea
                                placeholder="Write your comments here"
                                name="comment"
                                onChange={handleChange}
                                value={formData.comment}
                                required
                              />
                            </div>
                          </div>
                          <div className="col-lg-12">
                            <div className="blog-comment-submit">
                              <button
                                className="form-button"
                                type="submit"
                                disabled={isSeding}
                              >
                                {isSeding ? "Sending..." : "Submit"}
                              </button>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
                <div className="col-lg-5 col-md-5 order-md-2 ">
                  <div className="row ThumbView_desktop">
                    <div className="col-lg-12">
                      <div className="news-img">
                        <img
                          src={`${process.env.REACT_APP_IMAGE_BASE_URL}/${singleBlogData?.featured_img}`}
                          alt="Featured Image"
                          title="Featured Image"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="ThumbView_desktop">
                    <div className="blog-info ">
                      <div className="b_info_flex">
                        <div className="blog-info-img">
                          <img
                            src={Img1}
                            alt="Featured Thumbnail"
                            title="Featured Thumbnail"
                          />
                        </div>
                        <div className="blog-info-date">
                          <p>
                            <i className="far fa-calendar-alt" />
                            {moment(singleBlogData?.updated_at).format(
                              "MMM-DD YYYY"
                            )}
                          </p>
                        </div>
                      </div>
                      <div className="blog-info-comments">
                        <p>
                          <i className="far fa-comments" />
                          Comments ({filteredBlogComments?.length})
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="blog-leave-comment ThumbView_desktop">
                    <div className="leave-comment-title">Leave A Comments</div>
                    <form onSubmit={SubmitHandler}>
                      <div className="row">
                        <div className="col-lg-4 col-md-6">
                          <div className="comment-form-group">
                            <input
                              type="text"
                              placeholder="Name"
                              name="first_name"
                              onChange={handleChange}
                              value={formData.first_name}
                              required
                            />
                            <i className="fas fa-user" />
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                          <div className="comment-form-group">
                            <input
                              type="email"
                              placeholder="Email"
                              name="email"
                              onChange={handleChange}
                              value={formData.email}
                              required
                            />
                            <i className="fas fa-envelope" />
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-12">
                          <div className="comment-form-group">
                            <input
                              type="text"
                              placeholder="Social or Website Link"
                              name="message"
                              onChange={handleChange}
                              value={formData.message}
                              required
                            />
                            <i className="fas fa-globe-asia" />
                          </div>
                        </div>
                        <div className="col-lg-12 col-md-12">
                          <div className="comment-form-text">
                            <textarea
                              placeholder="Write your comments here"
                              name="comment"
                              onChange={handleChange}
                              value={formData.comment}
                              required
                            />
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <div className="blog-comment-submit">
                            <button
                              className="form-button"
                              type="submit"
                              disabled={isSeding}
                            >
                              {isSeding ? "Sending..." : "Send Message"}
                            </button>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                  <br />
                  <SideBarInnerBlog globalLanguage={globalLanguage} />
                </div>
              </div>
            </div>
          </section>
        </>
      )}
    </>
  );
};

export default BlogSingle;
