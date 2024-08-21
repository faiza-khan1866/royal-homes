import React from "react";

// import partnerImg1 from "../../img/partner-1.png";
// import partnerImg2 from "../../img/partner-2.png";
// import partnerImg3 from "../../img/partner-3.png";
// import partnerImg4 from "../../img/partner-4.png";
// import partnerImg5 from "../../img/partner-5.png";
// import partnerImg6 from "../../img/partner-6.png";
// import partnerImg7 from "../../img/partner-7.png";

import partnerImg1 from "../../img/partners logs/skye_news_logo.png";
import partnerImg3 from "../../img/partners logs/abcb_logo.png";
import partnerImg4 from "../../img/partners logs/cleveland_clinic.png";
import partnerImg2 from "../../img/partners logs/al_futtaim.png";

import "./style.css";

const Partners = () => {
  return (
    <section className="partners-area pt-0 mt-3" data-aos="fade-up">
      <div className="container">
        <div className="row">
          <div className="col-lg-10 mx-auto">
            <div className="partner-inn">
              <ul>
                <li>
                  <img src={partnerImg1} alt="partner" />
                </li>
                <li>
                  <img src={partnerImg2} alt="partner" />
                </li>
                <li>
                  <img src={partnerImg3} alt="partner" />
                </li>
                <li>
                  <img src={partnerImg4} alt="partner" />
                </li>
                <li>
                  <img src={partnerImg2} alt="partner" />
                </li>
                <li>
                  <img src={partnerImg1} alt="partner" />
                </li>
                <li>
                  <img src={partnerImg4} alt="partner" />
                </li>
                <li>
                  <img src={partnerImg2} alt="partner" />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
