import React from "react";
import img1 from "../../img/about/aboutleft.png";
import img2 from "../../img/about/aboutright.png";
import s from "./style.module.css";
function AboutMainPage() {
  return (
    <div className={s.aboutNew}>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className={s.title_container} data-aos="fade-down">
              <h3 className="sub-title">23 Amazing Years and Growing!</h3>
              <h2>
                Our Canadian Roots Empower us to Deliver <br />
                The Pinnacle of Luxe Living&#8482; Globally.
              </h2>
            </div>
          </div>
          <div className="col-lg-6">
            <div className={s.subTitle_container} data-aos="fade-down">
              <div className={s.container_subtitle}>About Us</div>
              <p>
                Established in Canada in 2000, Royal Premier Homes Canada has
                solidified its commitment to developing residential and
                commercial projects of the highest quality in Canada and now
                excelling beyond the accepted industry standard of Dubai. We
                specialize in everything from ground-up construction to
                luxurious villas, apartments, and commercial fit outs. Our forte
                also extends to providing robust investment support, ensuring
                lucrative sales and rental returns for our clients.
              </p>
              <p>
                RPH is committed to its mission of offering the utmost of luxury
                living in Dubai: The True Pinnacle of Luxe Living™
              </p>
            </div>
          </div>
          <div className="col-lg-6">
            <div className={s.image_wrapper} data-aos="fade-down">
              <div className={s.img1}>
                <img src={img1} alt="about-image" title="About us Image" />
              </div>
              <div className={s.img2}>
                <img src={img2} alt="about-image" title="About us Image" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMainPage;
