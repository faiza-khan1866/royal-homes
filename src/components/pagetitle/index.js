import React from "react";
import { Link } from "react-router-dom";
// import bg from "../../img/breadcrumb-bg.jpg";
import bg from "../../img/common/page_banner.png";
import { FaXTwitter } from "react-icons/fa6";
import useMediaQuery from "@mui/material/useMediaQuery";
import "./style2.css";
import "./style.css";

const PageTitle = (props) => {
  const matches = useMediaQuery("(max-width:767px)");
  return (
    <>
      <section
        className="breadcrumb-area"
        style={{ backgroundImage: `url(${props?.bg ? props?.bg : bg})` }}
      >
        {matches ? null : (
          <div className="hero-social">
            <ul>
              <li>
                <a href="https://pin.it/CIQuhGn" target="_blank">
                  <i className="fab fa-pinterest-p" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/@rphuae/featured"
                  target="_blank"
                >
                  <i class="fab fa-youtube"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://www.tiktok.com/@rph.uae?is_from_webapp=1&sender_device=pc"
                  target="_blank"
                >
                  <i class="fab fa-tiktok"></i>
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/rphuae" target="_blank">
                  <i className="fab fa-facebook-f" />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/rphuae/" target="_blank">
                  <i className="fab fa-instagram" />
                </a>
              </li>
              <li>
                <a href="https://twitter.com/RphUae" target="_blank">
                  <FaXTwitter />
                </a>
              </li>
            </ul>
            {/* <p>Follow Us</p> */}
          </div>
        )}

        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcrumb-inn">
                <h1>
                  {props.pageTitle}
                  {props?.pagesub == "Investment-Support" ? <>&#8482;</> : null}
                </h1>
                <ul>
                  <li className="home">
                    <Link to="/">
                      <span className="fas fa-home" />
                    </Link>
                  </li>
                  <li>
                    {props.pagesub}
                    {props?.pagesub == "Investment-Support" ? (
                      <>&#8482;</>
                    ) : null}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="Hero_mobile_Socials">
        <div className="">
          <ul className="SocialIconsk3i1">
            <li>
              <a href="/" target="_blank">
                <i className="fab fa-pinterest-p" />
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/@rphuae/featured"
                target="_blank"
              >
                <i class="fab fa-youtube"></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.tiktok.com/@rph.uae?is_from_webapp=1&sender_device=pc"
                target="_blank"
              >
                <i class="fab fa-tiktok"></i>
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/rphuae" target="_blank">
                <i className="fab fa-facebook-f" />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/rphuae/" target="_blank">
                <i className="fab fa-instagram" />
              </a>
            </li>
            <li>
              <a href="https://twitter.com/RphUae" target="_blank">
                <FaXTwitter />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default PageTitle;
