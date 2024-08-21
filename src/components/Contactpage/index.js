import React, { useState } from "react";
import ContactForm from "../ContactFrom";
import { useParams } from "react-router-dom";
import bg1 from "../../img/common/contactbg 1.png";
import img1 from "../../img/contact_us/contactimg1.jpg";
import img2 from "../../img/contact_us/contactimg2.jpg";
import img3 from "../../img/contact_us/contactimg3.jpg";
import img4 from "../../img/portfolio/interior_Design_Hotel.png";
import img5 from "../../img/portfolio/img_port3.png";
import "./style.css";

const Contactpage = ({ globalLanguage }) => {
  const { policy } = useParams();
  return (
    <section className="new-contact-page-area">
      <div className="form-container">
        <div className="row gt-0 form-wrapper">
          <img
            className="bottomBgImg"
            src={bg1}
            alt="Grid-Design"
            title="Grid Design"
          />
          <div className="col-lg-6">
            <div className="contact-form" data-aos="fade-down">
              <div className="site-heading">
                <h3 className="sub-title">Make an Enquiry</h3>
                <h2 className="section-title">
                  Begin Your Path To True Luxury Living.
                </h2>
                <p>Use the form below to get in touch with us</p>
              </div>
              <ContactForm globalLanguage={globalLanguage} />
            </div>
          </div>

          <div className="col-lg-6">
            <div className="form-detail-container" data-aos="fade-down">
              <ul className="form-address form-address299">
                <li>
                  <a href="#">RPH BUILDING CONTRACTING L.L.C</a>
                </li>
                <li>
                  <a href="tel:971559136032">
                    <i class="fas fa-phone-alt"></i> +971 55 913 6032
                  </a>
                </li>
                <li>
                  <a href="mailto:info@rphuae.ae">
                    <i className="fas fa-envelope" /> info@rphuae.ae
                  </a>
                </li>
                <li className="address-icon">
                  <i class="fas fa-map-marker-alt"></i>
                  <a
                    href="https://maps.app.goo.gl/HHHN3sVkVfk61MJp7"
                    target="__blank"
                  >
                    <p>
                      Al Marri Building Al Marrar office #204 - A1, Dubai, UAE
                    </p>
                  </a>
                </li>
              </ul>
              <ul className="form-social customFormSocial">
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
                    <i className="fab fa-twitter" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-sm-12">
            <div className="ImageGallery">
              <img src={img1} alt="Gallery-img" title="Gallery Image" />
              <img src={img2} alt="Gallery-img" title="Gallery Image" />
              <img src={img3} alt="Gallery-img" title="Gallery Image" />
              <img src={img4} alt="Gallery-img" title="Gallery Image" />
              <img src={img5} alt="Gallery-img" title="Gallery Image" />
            </div>
          </div>
        </div>
      </div>
      {/* <div className="row">
        <div className="col-lg-12 col-sm-12">
          <div className="contact-page-map" data-aos="fade-up">
            <iframe
              title="map"
              src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d555482.3711026354!2d55.086876101283096!3d24.842777577980748!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1629183603415!5m2!1sen!2sbd"
            ></iframe>
          </div>
        </div>
      </div> */}
    </section>
  );
};

export default Contactpage;
