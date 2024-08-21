import React from "react";
import { Link } from "react-router-dom";
// import arrow from "../../img/arrow.png";
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaPinterest,
  FaTiktok,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

import { NavLinks } from "../../utils/navLinks";
import Logo from "../../img/logoWhite.webp";
import "./style.css";
import { useLanguage } from "../../services/context/language/LanguageContext";

const Footer = () => {
  const { globalLanguage } = useLanguage();

  const NewsletterHandler = (e) => {
    e.preventDefault();
  };

  return (
    <footer className="footer-area">
      <div className="footer-top">
        <div className="container">
          <div className="row ">
            <div className="col-lg-4 col-sm-6 order-lg-1 order-1 footer-border footer-border-left-none">
              <div className="single-footer singleFooter_logo">
                <Link to={`/${globalLanguage}`}>
                  <img
                    src={Logo}
                    title="RPH Logo"
                    alt="Rph-logo"
                    loading="lazy"
                    width={"290"}
                    height={"220"}
                  />
                </Link>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 order-lg-2 order-3 footer-border">
              <div className="single-footer">
                <div className="footer-Middle">
                  <div className="footer_title">Quick Links</div>
                  <ul>
                    {NavLinks.map((links, i) => (
                      <li key={i}>
                        <Link to={`/${globalLanguage}${links?.route}`}>
                          + {links.Name}
                        </Link>
                      </li>
                    ))}
                    {/* <li>
                      <Link to={"/faq"}>+ Faqs</Link>
                    </li> */}
                  </ul>
                </div>
              </div>
            </div>
            {/* <div className="col-lg-2 col-sm-6 order-lg-3 order-4">
              <div className="single-footer">
                <h3>Exlore</h3>
                <ul>
                  <li>
                    <Link to="/">Case Study</Link>
                  </li>
                  <li>
                    <Link to="/">Latest News</Link>
                  </li>
                  <li>
                    <Link to="/">Help Center</Link>
                  </li>
                  <li>
                    <Link to="/">Privacy Policy</Link>
                  </li>
                  <li>
                    <Link to="/">Terms & Condition</Link>
                  </li>
                </ul>
              </div>
            </div> */}
            <div className="col-lg-4 col-sm-6 order-lg-4 order-2 footer-border footer-border-right-none">
              <div className="single-footer single-footer-last">
                <div className="footer_title">Contact Us</div>

                {/* <p>Sign up now for weekly news & updates.</p> */}
                {/* <div className="newsletter_form">
                  <form onSubmit={NewsletterHandler}>
                    <input type="email" placeholder="Email Address" />
                    <button type="submit">
                      <img src={arrow} />
                    </button>
                  </form>
                </div> */}
                <ul className="footer-contact ">
                  <li>
                    <a href="mailto:info@rphuae.ae">
                      <i className="fas fa-envelope" /> info@rphuae.ae
                    </a>
                  </li>
                  <li>
                    <a href="tel:971559136032">
                      <i class="fas fa-phone-alt" />
                      +971 55 913 6032
                    </a>
                  </li>
                  <li>
                    <a
                      // href={"https://wa.me/+971543458331"}
                      href="https://api.whatsapp.com/send?phone=971543458331"
                      target={"_blank"}
                    >
                      <i class="fab fa-whatsapp"></i>
                      +971 54 345 8331
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://maps.app.goo.gl/HHHN3sVkVfk61MJp7"
                      target="__blank"
                    >
                      <i className="fas fa-map" /> Al Marri Building Al Marrar
                      office #204 - A1, Dubai, UAE
                    </a>
                  </li>
                </ul>
                <ul className="footer-social footer_Contact_main">
                  <li>
                    <a href="https://www.facebook.com/rphuae" target="_blank">
                      <FaFacebook />
                    </a>
                  </li>
                  <li>
                    <a href="https://pin.it/CIQuhGn" target="_blank">
                      <FaPinterest />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.tiktok.com/@rph.uae?is_from_webapp=1&sender_device=pc"
                      target="_blank"
                    >
                      <FaTiktok />
                    </a>
                  </li>
                  <li>
                    <a href="https://twitter.com/RphUae" target="_blank">
                      <FaXTwitter />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.youtube.com/@rphuae/featured"
                      target="_blank"
                    >
                      <FaYoutube />
                    </a>
                  </li>
                  {/* <li>
                    <Link to="/">
                      <FaLinkedin />
                    </Link>
                  </li> */}
                  <li>
                    <a href="https://www.instagram.com/rphuae/" target="_blank">
                      <FaInstagram />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">{/* <div className="fade_rule" /> */}</div>
      <div className="copyright">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <p>
                &copy; Copyright 2023 - Privacy Policy - Terms and Conditions -
                Designed and Managed By{" "}
                <a
                  className="LinkTextCOlr"
                  href="https://www.prism-me.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Prism
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
