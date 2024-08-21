import React from "react";
import CountUp from "react-countup";
import { Link } from "react-router-dom";
// import bg from "../../img/homeAbout/aboutHome_BG.png";
import bg from "../../img/homeAbout/aboutHome_BG.webp";
import "./style.css";
import { BiSolidBuildingHouse } from "react-icons/bi";

const AboutUsSection = ({ globalLanguage }) => {
  const [isCashEnd, setIsCashEnd] = React.useState(false);
  return (
    <div className="about-area" style={{ backgroundImage: `url(${bg})` }}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12">
            <div className="about-top" data-aos="fade-down">
              <div className="site-heading">
                <h3 className="sub-title">ABOUT US</h3>
                <h2 className="section-title">
                  EXPERIENCE THE PINNACLE OF LUXE LIVING ™
                </h2>
              </div>
              <p className="about_details">
                Established in Canada in 2000, RPH has solidified its commitment
                to developing residential & commercial projects of the highest
                quality, excelling beyond the accepted industry standard. Our
                fit out company in Dubai specializes in everything from
                ground-up construction to luxurious villas, apartments, and
                commercial fit-outs. Our forte also extends to providing robust
                returns through RPH Investment Support™, ensuring lucrative
                sales and rental returns for our clients. Underpinned by a
                legacy of Canadian expertise,
              </p>
              <p className="about_details">
                RPH is committed to its mission of providing the utmost in
                luxury living in Dubai. Let our{" "}
                <a href="https://rphuae.ae/en/fit-out-services">
                  fit out company in Dubai
                </a>{" "}
                upgrade your commercial space with a team of the best fit out
                contractors in the UAE.
              </p>
              <br />
              <a href={`/${globalLanguage}/about`} className="about-btn">
                Read More
              </a>
            </div>
          </div>
          {/* about cards section  */}
          <div className="col-12 mt-5 mb-4">
            <div className="row">
              <div className="col-md-6 col-lg-3">
                <div className="about-card" data-aos="fade-down">
                  <div className="icon-container">
                    <i class="fas fa-calendar-alt IconStyle"></i>
                  </div>
                  <div className="Count_holder">
                    <span className="counter">
                      <CountUp
                        enableScrollSpy={true}
                        start={0}
                        end={23}
                        duration={4}
                      />
                    </span>
                  </div>
                  <span className="count-title">Years Of Experience</span>
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
                <div className="about-card" data-aos="fade-down">
                  <div className="icon-container">
                    {/* <i class="fas fa-building IconStyle"></i>
                     */}
                    <BiSolidBuildingHouse size={40} className="IconStyle" />
                  </div>
                  <div className="Count_holder">
                    <span className="counter">
                      <CountUp
                        enableScrollSpy={true}
                        start={0}
                        end={500}
                        duration={3}
                      />
                    </span>
                    +
                  </div>
                  <span className="count-title">Projects Completed</span>
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
                <div className="about-card" data-aos="fade-down">
                  <div className="icon-container ">
                    {/* <i class="fas fa-dollar-sign IconStyle"></i> */}
                    <div className="TextStyle">AED</div>
                  </div>
                  <div className="Count_holder">
                    <span className="counter">
                      {/* <CountUp
                        enableScrollSpy={true}
                        scrollSpyOnce={true}
                        start={10000000}
                        end={1.023513}
                        duration={4}
                        separator=","
                        decimals={0}
                        decimal=""
                        onEnd={() => setIsCashEnd(true)}
                      /> */}
                      <CountUp
                        enableScrollSpy={true}
                        start={13}
                        end={1}
                        duration={5}
                      />
                    </span>
                    {/* {isCashEnd ? "B+" : "M"} */} B+
                  </div>
                  <span className="count-title">Project Values Completed</span>
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
                <div className="about-card" data-aos="fade-down">
                  <div className="icon-container ">
                    <i class="fab fa-canadian-maple-leaf IconStyle"></i>
                  </div>
                  <div className="Count_holder">
                    #
                    <span className="counter">
                      <CountUp
                        enableScrollSpy={true}
                        start={23}
                        end={1}
                        duration={3}
                      />
                    </span>
                  </div>
                  <span className="count-title text-center">
                    &<span className="count-title BoldWOrldABoutUs"> Only</span>{" "}
                    Canadian Fit Out Company in Dubai
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsSection;
