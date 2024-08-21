import React from "react";
// import bg from "../../img/expertise.jpg";
import bg from "../../img/common/living_room.png";
import { AnimatePresence, motion } from "framer-motion";
import CountUp from "react-countup";

import "./style.css";

const Expertise = () => {
  const Contduration = 4;
  return (
    <section className="expertise-area">
      <div className="expertise-bg" style={{ backgroundImage: `url(${bg})` }} />
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="expertise-inn">
              <div className="site-heading">
                <h3 className="sub-title">EXPERTISE</h3>
                <h2 className="section-title">See Our Expertise</h2>
              </div>
              <div className="skills-prog half">
                <div className="skillbar">
                  <h6>Illustration</h6>
                  <div className="progress">
                    <motion.div
                      className="progress-bar"
                      role="progressbar"
                      initial={{ width: "0" }}
                      whileInView={{ width: "75%" }}
                      transition={{ duration: 1 }}
                      viewport={{ once: true }}
                      // style={{ width: "75%" }}
                      aria-valuenow="75"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      <span className="CountHolder">
                        <div>
                          <CountUp
                            enableScrollSpy={true}
                            scrollSpyOnce={true}
                            start={0}
                            end={75}
                            duration={Contduration}
                          />
                        </div>
                      </span>
                    </motion.div>
                  </div>
                </div>
                <div className="skillbar">
                  <h6>INTERIOR DESIGN</h6>
                  <div className="progress">
                    <motion.div
                      className="progress-bar"
                      role="progressbar"
                      initial={{ width: "0" }}
                      whileInView={{ width: "95%" }}
                      transition={{ duration: 1 }}
                      viewport={{ once: true }}
                      // style={{ width: "95%" }}
                      aria-valuenow="95"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      <span className="CountHolder">
                        <div>
                          <CountUp
                            enableScrollSpy={true}
                            scrollSpyOnce={true}
                            start={0}
                            end={95}
                            duration={Contduration}
                          />
                        </div>
                      </span>
                    </motion.div>
                  </div>
                </div>
                <div className="skillbar">
                  <h6>ARCHITECTURE</h6>
                  <div className="progress">
                    <motion.div
                      className="progress-bar"
                      role="progressbar"
                      initial={{ width: "0" }}
                      whileInView={{ width: "70%" }}
                      transition={{ duration: 1 }}
                      viewport={{ once: true }}
                      // style={{ width: "70%" }}
                      aria-valuenow="70"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      <span className="CountHolder">
                        <div>
                          <CountUp
                            enableScrollSpy={true}
                            scrollSpyOnce={true}
                            start={0}
                            end={70}
                            duration={Contduration}
                          />
                        </div>
                      </span>
                    </motion.div>
                  </div>
                </div>
                <div className="skillbar">
                  <h6>PLANNING</h6>
                  <div className="progress">
                    <motion.div
                      className="progress-bar"
                      role="progressbar"
                      initial={{ width: "0" }}
                      whileInView={{ width: "80%" }}
                      transition={{ duration: 1 }}
                      viewport={{ once: true }}
                      // style={{ width: "80%" }}
                      aria-valuenow="80"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      <span className="CountHolder">
                        <div>
                          <CountUp
                            enableScrollSpy={true}
                            scrollSpyOnce={true}
                            start={0}
                            end={80}
                            duration={Contduration}
                          />
                        </div>
                      </span>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Expertise;
