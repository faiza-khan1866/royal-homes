import React, { useState } from "react";
import img1 from "../../img/about/missonVission.jpg";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { motion } from "framer-motion";
import s from "./style.module.css";
function AboutGoals() {
  const [selectedTitle, setSelectedTitle] = useState("mission");
  return (
    <div className={s.aboutGoal_section}>
      <div className="container-sm">
        <div className="row" data-aos="fade-down">
          <div className="col-12">
            <div className={s.title_container}>
              <h3 className="sub-title">OUR GOALS</h3>
              <h2 className="section-title">Vision & Mission</h2>
            </div>
          </div>
          <div className="col-lg-6">
            <div className={s.missionDetails}>
              <div className={s.missionTitle}>
                <div
                  className={`sub-title ${
                    selectedTitle == "mission"
                      ? s.subtitle_main
                      : s.subtitle_dim
                  }`}
                  onClick={() => setSelectedTitle("mission")}
                  style={{ cursor: "pointer" }}
                >
                  Mission
                </div>
                <div className={s.titleDivider}></div>
                <div
                  className={`sub-title ${
                    selectedTitle == "vision" ? s.subtitle_main : s.subtitle_dim
                  }`}
                  onClick={() => setSelectedTitle("vision")}
                  style={{ cursor: "pointer" }}
                >
                  Vision
                </div>
                <span></span>
              </div>

              {selectedTitle == "mission" ? (
                <>
                  <motion.p layout>
                    Drawing from deep-rooted Canadian expertise and practices,
                    at RPH, we are dedicated to redefining the essence of luxury
                    in Dubai's construction & fit out industry. Our mission is
                    to craft exquisite residential sanctuaries and fit outs that
                    reflect our Pinnacle of Luxe Living™ practices.
                  </motion.p>
                  <motion.p layout>
                    Through meticulous luxury renovations, ground-up designs,
                    and insightful ROI studies to ensure our clients benefit
                    from A to Z, we are steadfast in our commitment from Canada
                    to Dubai in quality, elegance, and integrity. We stand out
                    as Dubai's premier and only Canadian fit out company,
                    pioneering unparalleled standards from concept to
                    completion.
                  </motion.p>
                </>
              ) : (
                <>
                  <motion.p layout>
                    At RPH, we envision a future where we stand as Dubai's
                    foremost luxury fit out specialist, extending our expertise
                    to bespoke villa construction. Inspired by the drive to
                    redefine luxury, we aim to craft unparalleled projects that
                    not only embody opulence but also influence its very
                    definition.
                  </motion.p>
                  <motion.p layout>
                    Rooted in our unique Canadian heritage and being Dubai's
                    sole Canadian fit out company, our vision is to engrave our
                    mark globally and leave behind a memorable legacy, leading
                    with distinction and pioneering the next chapter of luxury
                    living.
                  </motion.p>
                </>
              )}

              {/* <motion.p className="mb-5">
                {selectedTitle == "vision" ? (
                  <>
                    Drawing from deep-rooted Canadian expertise and practices,
                    we at RPH are dedicated to redefining the essence of luxury
                    in Dubai's construction & fit out landscape. Our mission is
                    to craft exquisite residential sanctuaries and fit outs that
                    reflect our Pinnacle of Luxe Living TM practices. Through
                    meticulous luxury renovations, ground-up designs, and
                    insightful ROI studies to ensure our owners benefit from A
                    to Z, we are steadfast in our commitment from Canada to
                    Dubai in quality, elegance, and integrity. Serving our
                    valued property owners and developers, we stand distinct as
                    Dubai's Premier & Only Canadian Fit-Out company, pioneering
                    unparalleled standards from concept to completion.
                  </>
                ) : (
                  <>
                    Mission Nam metus lacus, porttitor eu mauris a, blandit
                    ultrices nibh. Mauris sit amet m agna non ligula vestibulum
                    eleifend. Nulla varius volutpat turpis
                  </>
                )}
              </motion.p> */}
              <div className={s.Button_contianer}>
                <div className={s.slide_change_btn}>
                  <div
                    className={s.change_btn}
                    onClick={() => setSelectedTitle("mission")}
                  >
                    <AiOutlineArrowLeft />
                  </div>
                  <div
                    className={s.change_btn}
                    onClick={() => setSelectedTitle("vision")}
                  >
                    <AiOutlineArrowRight />
                  </div>
                </div>
              </div>
              {/* // */}
            </div>
          </div>
          <div className="col-lg-6">
            <div className={s.featuredImg}>
              <img src={img1} alt="featuredImg" title="Featured Image" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutGoals;
