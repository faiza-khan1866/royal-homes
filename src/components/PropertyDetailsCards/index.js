import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import "./style.css";
import Img6 from "../../img/common/bedrom.png";

function PropertyDetailsCards(props) {
  return (
    <>
      <section className="PropertyDetailsCards">
        <div className="container">
          <div className="project-details-type">
            <div className="row">
              <div className="col-md-4">
                <motion.div
                  initial={{ y: -100 }}
                  whileInView={{ y: 0 }}
                  transition={{ duration: 0.4 }}
                  viewport={{ once: true }}
                  className="details-box"
                >
                  <div className="project-box project-details-box">
                    <img src={Img6} alt="Bedroom" />
                    <p>BEDROOM</p>
                  </div>
                  <div className="project-details-box-meta-text">
                    <p>
                      Many desktop publishing packages and web page editors now
                      use Lorem Ipsum as their default model text, and a search
                      for 'lorem ipsum'
                    </p>
                    <Link to="/">Learn More</Link>
                  </div>
                </motion.div>
              </div>
              <div className="col-md-4">
                <motion.div
                  initial={{ y: -100 }}
                  whileInView={{ y: 0 }}
                  transition={{ delay: 0.2, duration: 0.4 }}
                  viewport={{ once: true }}
                  className="details-box"
                >
                  <div className="project-box project-details-box">
                    <img src={Img6} alt="Hallroom" />
                    <p>HALLROOM</p>
                  </div>
                  <div className="project-details-box-meta-text">
                    <p>
                      Many desktop publishing packages and web page editors now
                      use Lorem Ipsum as their default model text, and a search
                      for 'lorem ipsum'
                    </p>
                    <Link to="/">Learn More</Link>
                  </div>
                </motion.div>
              </div>
              <div className="col-md-4">
                <motion.div
                  initial={{ y: -100 }}
                  whileInView={{ y: 0 }}
                  transition={{ duration: 0.4 }}
                  viewport={{ once: true }}
                  className="details-box"
                >
                  <div className="project-box project-details-box">
                    <img src={Img6} alt="Kitchen" />
                    <p>KITCHEN</p>
                  </div>
                  <div className="project-details-box-meta-text">
                    <p>
                      Many desktop publishing packages and web page editors now
                      use Lorem Ipsum as their default model text, and a search
                      for 'lorem ipsum'
                    </p>
                    <Link to="/">Learn More</Link>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default PropertyDetailsCards;
