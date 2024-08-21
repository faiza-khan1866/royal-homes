import React from "react";
import { Link, useHistory, useLocation } from "react-router-dom";

import Img1 from "../../img/blogs/popular posts.png";
import Img2 from "../../img/blogs/posts.png";
import Img3 from "../../img/blogs/posts2.png";
import Img4 from "../../img/blogs/posts3.png";
import Img5 from "../../img/blogs/posts4.png";
import Img6 from "../../img/blogs/posts5.png";

import "./style.css";
import BlogPage from "../../apis/pages/BlogPage";
import { useEffect } from "react";
import { useState } from "react";
import commonApi from "../../apis/commonApi";
import Swal from "sweetalert2";
import ClipLoader from "react-spinners/ClipLoader";
function useQuery() {
  const { search } = useLocation();

  return React.useMemo(() => new URLSearchParams(search), [search]);
}

const SideBarInnerBlog = ({
  setIndex,
  setIsCompleted,
  DefaultIndexCount,
  MainBlog,
  setfilteredBlogData,
  InnerBlogbar,
  globalLanguage,
}) => {
  const initialState = {
    email: "",
  };
  const [searchQuery, setSearchQuery] = React.useState("");
  // const [AllCategoryList, setAllCategoryList] = React.useState([]);
  // const [allBlogData, setAllBlogData] = React.useState([]);
  // const [popularPosts, setPopularPosts] = useState([]);
  const [formData, setFormData] = React.useState({ ...initialState });
  const [isSeding, setIsSending] = useState(false);
  let history = useHistory();
  let query = useQuery();

  const { PostSubscriber } = commonApi();
  const {
    fetchBlogCategory,
    fetchBlogList,
    GetBlogCategoryList,
    GetLatestBlogList,
    GetBlogList,
  } = BlogPage();
  // get blog categories
  const { data: AllCategoryList, isLoading: isBlogCategoryListLoading } =
    GetBlogCategoryList();
  // all blog data
  const { data: allBlogData, isLoading: isAllBlogLoading } = GetBlogList();
  // latest blog data
  const { data: popularPosts, isLoading: isPopularBlogsLoading } =
    GetLatestBlogList();

  useEffect(() => {
    if (query.get("search")) {
      setSearchQuery(query.get("search"));
    }
    // fetchBlogCategory().then((result) => {
    //   setAllCategoryList(result?.data);
    // });
  }, []);
  // useEffect(() => {
  // fetchBlogList().then(function (result) {
  // let UpdateData = structuredClone(result.data);
  // let UpdateData = [...result?.data];
  // const popularPost = UpdateData.sort((a, b) => {
  //   let item1 = new Date(a?.updated_at).getTime();
  //   let item2 = new Date(b?.updated_at).getTime();
  //   return item2 - item1;
  // });
  // setPopularPosts(popularPost);
  // setAllBlogData(result.data);
  // });
  // }, []);
  //search form
  const formHandler = (e) => {
    e.preventDefault();

    history.push(`/blogs?search=${searchQuery}`);
  };
  // news letter form
  const HandleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleSubmit = async (e) => {
    setIsSending(true);
    e.preventDefault();
    if (!formData.email) {
      setIsSending(false);

      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please Enter Email Address",
      });
      return;
    }
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(formData?.email)) {
      setIsSending(false);

      Swal.fire({
        icon: "error",
        title: "Email is Invalid",
      });
      return;
    }
    const response = await PostSubscriber(formData);
    if (response?.status == 200 || response?.status == 201) {
      Swal.fire({
        icon: "success",
        text: "Thank you for Subscribing to our Newsletter Program",
        confirmButtonColor: "#c21b1e",
      });
      setIsSending(false);
      setFormData({ ...initialState });
    }
  };

  return (
    <div className="blogSide_bar">
      <div className="blog-sidebar" data-aos="fade-up">
        <div className="blog-search-box">
          <form onSubmit={formHandler}>
            <div class="input-group mb-3">
              <input
                type="text"
                placeholder="Search"
                class="form-control"
                aria-label="Search"
                aria-describedby="button-addon2"
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                }}
                value={searchQuery}
              />
              {/* clear Search query  */}
              {searchQuery && (
                <i
                  class="far fa-times-circle cancelIcon"
                  onClick={() => {
                    setIndex(DefaultIndexCount);
                    setIsCompleted(false);
                    setSearchQuery("");
                    setfilteredBlogData(allBlogData);
                    history.push("/blogs");
                  }}
                />
              )}

              <div class="input-group-append">
                <Link to={`/${globalLanguage}/blogs?search=${searchQuery}`}>
                  <button
                    // class="btn btn-outline-secondary"
                    type="submit"
                    id="button-addon2"
                  >
                    <i className="fa fa-search" />
                  </button>
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="blog-sidebar-categories" data-aos="fade-up">
        <div className="blog-sidebar-heading">
          <h3>Categories</h3>
        </div>
        <ul className="sidebar-content">
          <Link to={`/${globalLanguage}/blogs/all`}>
            <li>
              All
              <span>({allBlogData?.length})</span>
              {/* </Link> */}
            </li>
          </Link>
          {AllCategoryList?.map((item, i) => (
            <Link to={`/${globalLanguage}/blogs/${item.route}`} key={item.route}>
              <li>
                {/* <Link to="/blog" className="sidebarCategory"> */}
                {item?.name}{" "}
                <span>
                  (
                  {
                    allBlogData?.filter(
                      (Blogitem) => Blogitem.category_id == item.id
                    ).length
                  }
                  )
                </span>
                {/* </Link> */}
              </li>
            </Link>
          ))}
        </ul>
      </div>
      <div className="blog-sidebar-post" data-aos="fade-up">
        <div className="blog-sidebar-heading">
          <div className="blogSideBar-Heading-title">Popular Post</div>
        </div>
        {popularPosts?.slice(0, 5)?.map((item, i) => (
          <div className="sidebar-post-box" key={i}>
            <div className="sidebar-post-img">
              <img
                src={`${process.env.REACT_APP_IMAGE_BASE_URL}/${item?.featured_img}`}
                alt={item?.title}
                title={item?.title}
              />
            </div>
            <div className="sidebar-post-text">
              <p>Posted by: {item?.posted_by}</p>
              <Link to={`/${globalLanguage}/blog/${item?.route}`}>
                <h5>{item?.title}</h5>
              </Link>
            </div>
          </div>
        ))}

        <div className="siderbar-newslater" data-aos="fade-up">
          <div className="blog-sidebar-heading">
            <div className="blogSideBar-Heading-title">Newsletter</div>
          </div>
          <p>Enter your e-mail and subscribe to our newsletter.</p>
          <form className="NewsLetter_blogSide">
            <input
              type="email"
              name="email"
              class="form-control form-signup-input"
              placeholder="Your Email address"
              aria-label="Your Email address"
              aria-describedby="basic-addon2"
              value={formData.email}
              onChange={HandleChange}
              required
            />
            <button type="submit" onClick={handleSubmit} disabled={isSeding}>
              {isSeding ? (
                <ClipLoader color="#c21b1e" />
              ) : (
                <i className="fa fa-paper-plane" />
              )}
            </button>
          </form>
        </div>
        {/* <div className="sidebar-tags" data-aos="fade-up">
          <div className="blog-sidebar-heading">
            <h3>Tags</h3>
          </div>
          <ul>
            <li>
              <Link to={`/${globalLanguage}/blog`}>Interior</Link>
            </li>
            <li>
              <Link to={`/${globalLanguage}/blog`}>Painting</Link>
            </li>
            <li>
              <Link to={`/${globalLanguage}/blog`}>Constraction</Link>
            </li>
            <li>
              <Link to={`/${globalLanguage}/blog`}>Ingineering</Link>
            </li>
            <li>
              <Link to={`/${globalLanguage}/blog`}>Consultanty</Link>
            </li>
            <li>
              <Link to={`/${globalLanguage}/blog`}>Property</Link>
            </li>
            <li>
              <Link to={`/${globalLanguage}/blog`}>Swimming Pool</Link>
            </li>
            <li>
              <Link to={`/${globalLanguage}/blog`}>Garden</Link>
            </li>
            <li>
              <Link to={`/${globalLanguage}/blog`}>Furniture</Link>
            </li>
            <li>
              <Link to={`/${globalLanguage}/blog`}>Event</Link>
            </li>
          </ul>
        </div> */}

        {/* <div className="sidebar-gallery" data-aos="fade-up">
          <div className="blog-sidebar-heading">
            <h3>From Instagram</h3>
          </div>
          <ul>
            <li>
              <img src={Img4} alt="img" />
            </li>
            <li>
              <img src={Img2} alt="img" />
            </li>
            <li>
              <img src={Img3} alt="img" />
            </li>
            <li>
              <img src={Img4} alt="img" />
            </li>
            <li>
              <img src={Img5} alt="img" />
            </li>
            <li>
              <img src={Img6} alt="img" />
            </li>
            <li>
              <img src={Img2} alt="img" />
            </li>
            <li>
              <img src={Img3} alt="img" />
            </li>
            <li>
              <img src={Img4} alt="img" />
            </li>
          </ul>
        </div> */}
      </div>
    </div>
  );
};

export default SideBarInnerBlog;
