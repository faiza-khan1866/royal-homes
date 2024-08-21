import React from "react";
import CountUp from "react-countup";
import { Link } from "react-router-dom";
import "./style.css";
import { BiSolidBuildingHouse } from "react-icons/bi";

const AboutMainCount = () => {
  const [isCashEnd, setIsCashEnd] = React.useState(false);

  return (
    <div className="about-area-count mt-5">
      <div className="container">
        <div className="row align-items-center">
          {/* about cards section  */}
          <div className="col-12 mb-4">
            <div className="row">
              <div className="col-md-6 col-lg-3">
                <div className="about-card" data-aos="fade-down">
                  <div className="icon-container">
                    <i class="fas fa-calendar-alt IconStyle"></i>
                  </div>
                  <div className="count_conTitle">
                    <span className="counter">
                      <CountUp
                        enableScrollSpy={true}
                        start={0}
                        end={23}
                        duration={4}
                      />
                    </span>
                  </div>
                  <div className="count_consubTitle">Years Of Experience</div>
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
                <div className="about-card" data-aos="fade-down">
                  <div className="icon-container">
                    {/* <i class="fas fa-building"></i> */}
                    <BiSolidBuildingHouse size={40} className="IconStyle" />
                  </div>
                  <div className="count_conTitle">
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
                  <div className="count_consubTitle">Projects Completed</div>
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
                <div className="about-card" data-aos="fade-down">
                  <div className="icon-container">
                    {/* <i class="fas fa-dollar-sign"></i> */}
                    <div className="TextStyle">AED</div>
                  </div>
                  <div div className="count_conTitle">
                    <span className="counter">
                      {/* <CountUp
                        enableScrollSpy={true}
                        scrollSpyOnce={false}
                        start={354}
                        end={1}
                        duration={3}
                      /> */}
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
                    {/* {isCashEnd ? "B+" : "M"} */}
                    B+
                  </div>
                  <div className="count_consubTitle">
                    Project Values Completed
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
                <div className="about-card" data-aos="fade-down">
                  <div className="icon-container">
                    <i class="fab fa-canadian-maple-leaf"></i>
                  </div>
                  <div className="count_conTitle">
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
                  <div className="count_consubTitle text-center">
                    & Only Canadian Fit Out Company in Dubai
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMainCount;
