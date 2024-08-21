import React, { Component, useState } from "react";
import { Accordion } from "react-bootstrap";

// import Img1 from "../../img/faq-1.jpg";
// import Img2 from "../../img/faq-2.jpg";
import Img3 from "../../img/support.png";
import Img4 from "../../img/social-care.png";
import Img5 from "../../img/newspaper.png";
import Icon from "../../img/customer-service.png";

import Img1 from "../../img/faq/faq1.jpg";
import Img2 from "../../img/faq/faq2.jpg";

import FaqsPage from "../../apis/pages/FaqsPage";
import DOMPurify from "dompurify";
import { useEffect } from "react";
import "./style.css";

function Faq() {
  const { GetFaqsList } = FaqsPage();
  const { data } = GetFaqsList();

  return (
    <div>
      <section className="faq-page-area">
        <div className="container-fluid CheckCointaner">
          <div className="row justify-content-center">
            <div className="col-md-6 col-lg-6 col-xl-6">
              <div className="site-heading" data-aos="fade-up">
                <h3 className="sub-title">Frequently Asked Questions</h3>
                <h2 className="section-title">You Asked. We Answered.</h2>
              </div>
              <div className="faq-accordion" data-aos="fade-up">
                <Accordion>
                  {data?.map((item, i) => {
                    return (
                      <Accordion.Item eventKey={i} key={i}>
                        <Accordion.Header as="div">
                          {item?.question}
                        </Accordion.Header>
                        <Accordion.Body>
                          <p
                            dangerouslySetInnerHTML={{
                              __html: DOMPurify.sanitize(item?.answer),
                            }}
                          />
                        </Accordion.Body>
                      </Accordion.Item>
                    );
                  })}
                </Accordion>

                {/* <Accordion>
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>
                      How to contact with your agent?
                    </Accordion.Header>
                    <Accordion.Body>
                      craft beer labore wes anderson cred nesciunt sapiente ea
                      proident. Ad vegan excepteur butcher vice lomo. Leggings
                      occaecat craft beer farm-to-table, raw denim aesthetic
                      synth nesciunt you probably haven't heard of them
                      accusamus labore sustainable VHS.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>
                      How can i install this theme?
                    </Accordion.Header>
                    <Accordion.Body>
                      craft beer labore wes anderson cred nesciunt sapiente ea
                      proident. Ad vegan excepteur butcher vice lomo. Leggings
                      occaecat craft beer farm-to-table, raw denim aesthetic
                      synth nesciunt you probably haven't heard of them
                      accusamus labore sustainable VHS.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="2">
                    <Accordion.Header>
                      How can i make it copy interior?
                    </Accordion.Header>
                    <Accordion.Body>
                      craft beer labore wes anderson cred nesciunt sapiente ea
                      proident. Ad vegan excepteur butcher vice lomo. Leggings
                      occaecat craft beer farm-to-table, raw denim aesthetic
                      synth nesciunt you probably haven't heard of them
                      accusamus labore sustainable VHS.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="3">
                    <Accordion.Header>
                      How to despout on this product?
                    </Accordion.Header>
                    <Accordion.Body>
                      craft beer labore wes anderson cred nesciunt sapiente ea
                      proident. Ad vegan excepteur butcher vice lomo. Leggings
                      occaecat craft beer farm-to-table, raw denim aesthetic
                      synth nesciunt you probably haven't heard of them
                      accusamus labore sustainable VHS.
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion> */}
              </div>
            </div>
            <div className="col-md-6 col-lg-6 col-xl-6">
              <div className="faq-img" data-aos="fade-up">
                <div className="faq-img-one">
                  <img src={Img1} alt="Featured-Image" title="Featured Image" />
                </div>
                <div className="faq-img-two">
                  <img src={Img2} alt="Featured-Image" title="Featured Image" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Faq;
