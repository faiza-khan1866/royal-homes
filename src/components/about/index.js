import React from "react";
import CountUp from "react-countup";

import bg from "../../img/about-bg.png";
// import img1 from "../../img/about-1.png";
// import img2 from "../../img/about-2.png";
import img1 from "../../img/common/about_1.png";
import img2 from "../../img/common/about_2.png";

// import signature from "../../img/signature.png";
import signature from "../../img/signature/signature.png";

import "./style.css";

const About = () => {
  return (
    <section
      className="about-area" /* style={{ backgroundImage: `url(${bg})` }} */
    >
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-5 col-md-6">
            <div className="about-left" data-aos="fade-right">
              <div className="site-heading">
                <h3 className="sub-title">ABOUT US</h3>
                <h2 className="section-title">
                  Strategy-led design in every detail
                </h2>
              </div>
              <p className="about_details">
                Architecture viverra tristique justo duis vitae diam neque
                nivamus aestan ateuene artines aringianu atelit finibus viverra
                nec lacus. Nedana theme erodino setlie suscipe no curabit
                tristique aringianu atelit finibus .
              </p>
              <p className="about_details">
                Design inilla duiman at elit finibus viverra nec a lacus themo
                the drudea seneoice misuscipit non sagie the fermen.
              </p>
              <div className="about-signature">
                <div className="signature-left">
                  <img src={signature} alt="signature" />
                </div>
                <div className="signature-right">
                  <h3 className="about_signature_now">Lorem lIpsum</h3>
                  <p className="about_signature_title">President</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 offset-lg-1 col-md-6">
            <div className="about-counter">
              <div className="counter-box">
                <h2>
                  <span className="counter">
                    <CountUp start={0} end={105} duration={3} />
                  </span>
                </h2>
                <p>
                  Years of <br />
                  experience
                </p>
              </div>
              <div className="counter-box">
                <h2>
                  <span className="counter">
                    <CountUp start={0} end={436} duration={5} />
                  </span>
                  +
                </h2>
                <p>
                  Projects <br />
                  Completed
                </p>
              </div>
              <div className="counter-box">
                <h2>
                  <span className="counter">
                    <CountUp start={0} end={180} duration={3} />
                  </span>
                  +
                </h2>
                <p>
                  Awards <br />
                  Winning
                </p>
              </div>
            </div>
            <div className="about-right" data-aos="fade-left">
              <img className="about_img_1" src={img2} alt="about" />
              <img className="about_img_2" src={img1} alt="about" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
