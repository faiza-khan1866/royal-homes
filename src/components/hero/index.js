import React, { Component } from "react";
// import Slider from "react-slick";
import { Link } from "react-router-dom";
import VideoModal from "../../components/ModalVideo";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import { motion } from "framer-motion";
import { FaXTwitter } from "react-icons/fa6";
// import hero1 from "../../img/slider-1.jpg";
// import hero2 from "../../img/slider-2.png";
// import hero1 from "../../img/home/Home_banner2.png";
import hero1 from "../../img/home/fit-out-company-in-dubai.webp";
// import hero2 from "../../img/common/page_banner.png";

import "./style.css";

class Hero extends Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }
  next() {
    this.slider.slickNext();
  }
  previous() {
    this.slider.slickPrev();
  }

  render() {
    var settings = {
      dots: false,
      arrows: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      pauseOnHover: false,
      speed: 1200,
      autoplaySpeed: 6500,
      fade: false,
    };
    const { globalLanguage } = this.props;
    return (
      <>
        <section className="hero-area">
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
          <div className="hero-slider">
            {/* <div className="hero_arrows">
            <button className="button" onClick={this.previous}>
              <i className="fas fa-angle-left"></i>
            </button>
            <button className="button" onClick={this.next}>
              <i className="fas fa-angle-right"></i>
            </button>
          </div> */}
            {/* <Slider ref={(c) => (this.slider = c)} {...settings}> */}
            <div className="slide">
              <div
                className="hero-slide-item"
                // style={{ backgroundImage: `url(${hero1})` }}
                style={{
                  backgroundImage: `url(https://royal-home.b-cdn.net/website/fit-out-company-in-dubai.webp)`,
                }}
              >
                <div className="container">
                  <div className="hero-text">
                    <h1 className="hero-title change_toUperCase">
                      The Only Canadian Fit Out Company in Dubai. RPH.
                    </h1>
                    <div className="hero-action">
                      <Link
                        to={`/${globalLanguage}/portfolio`}
                        className="cta-btn btn-fill btn-hover-border"
                      >
                        View Projects
                      </Link>
                      <Link
                        to={`/${globalLanguage}/contact`}
                        className="cta-btn btn-border"
                      >
                        Get a Quote
                      </Link>
                    </div>
                  </div>
                  <div className="video-main">
                    <div className="promo-video">
                      <div className="waves-block">
                        <div className="waves wave-1" />
                        <div className="waves wave-2" />
                        <div className="waves wave-3" />
                      </div>
                    </div>

                    <VideoModal videoId="rS4dhDhB7KY" />
                  </div>
                </div>
              </div>
            </div>
            {/* </Slider> */}
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
  }
}

export default Hero;
