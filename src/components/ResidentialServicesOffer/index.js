import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import serviceIMg1 from "../../img/fitout/fitout3.jpg";
import "./style.css";

const ResidentialServicesOffer = () => {
  const [SliceLength, setSliceLength] = useState(3);

  const [showMore, setShowMore] = useState(false);
  const offersData = [
    {
      title: "FULL RENOVATION",
      detail:
        "For properties that need a total transformation for investment or end-use purposes, our fit out services in Dubai breathe new life into spaces. From full interior and exterior transformations to expansion of villas, we surpass the demands of modern luxury living rooted in Canadian building practices. Our renovation company in Dubai revitalizes every facet of the property, ensuring a blend of timeless elegance and cutting-edge design.",
    },
    {
      title: "INTERIOR DESIGN",
      detail:
        "Our Interior Design service is a collaborative process where we closely work with clients to understand their vision for a space and plan a partial or full transformation. We provide tailored fit out services in Dubai, incorporating the finest material and innovative designs rooted in Canadian aesthetics, ensuring each space is not only visually stunning but also profoundly comfortable and functional.",
    },
    {
      title: "INTERIOR & EXTERIOR Fit Out",
      detail:
        "Our Interior & Exterior fit out services involve the complete transformation of interior spaces and exterior facades, tailoring them to the client’s specifications while embodying RPH’s Pinnacle of Luxe Living™. From flooring to ceilings, lighting to bespoke furnishings, every element is expertly curated with precision, reflective of our Canadian craftsmanship, to create interiors that boldly represent luxury and sophistication.",
    },

    {
      title: "GROUND UP CONSTRUCTION",
      detail:
        "Have a plot of land that you’re looking to build your dream home on? RPH offers full ground up construction services from planning and design to permissions and approvals, and full construction to completion. Our decades of experience in high end home remodeling and building large scale residential developments give us an all-around understanding of delivering a custom masterpiece while exceeding industry standards and delivering true luxury living.",
    },
    {
      title: "PROJECT MANAGEMENT",
      detail:
        "Our Project Management service is designed to oversee the seamless execution of the clients’ required renovation services from start to finish, guaranteeing that each project not only meets but exceeds our Pinnacle of Luxe Living™ standards. With a dedicated team of expert interior renovation contractors steering the project, we assure timely delivery, stress-free handling from start to completion, and a superior level of professionalism throughout the project lifecycle.",
    },
    {
      title: "OUR PORTFOLIO",
      detail:
        "With over 20 years crafting stunning designs from Canada to Dubai, our portfolio is a captivating showcase of our interior fit out expertise. Each piece tells a unique story, blending diverse aesthetics and exceeding expectations.",
      detail2:
        "See a design you like? Let’s make it yours! Our dedicated team is ready to bring your vision to life with the same passion and precision reflected in our portfolio. Explore and get inspired by our fit out services!",
    },
  ];
  return (
    <section
      className="residentail_fit_out_area residentail_fit_out_area46sa"
      data-aos="fade-down"
      data-aos-delay="50"
    >
      <h2>Our Transformative Residential fit out Solutions</h2>
      <div className="container">
        <div className="row">
          <div layout className="col-lg-6 col-sm-12 p-md-0">
            <img
              src={serviceIMg1}
              alt={"Fitout-Service"}
              title={"Fitout Service"}
              data-aos="fade-up"
              data-aos-delay="100"
            />
          </div>
          <div
            className="col-lg-6 col-sm-12"
            data-aos="fade-right"
            data-aos-delay="100"
          >
            <div className="ShowMore_container">
              {offersData
                ?.slice(0, showMore ? offersData?.length : SliceLength)
                ?.map((x, i) => (
                  <motion.div
                    layout
                    transition={{
                      type: "spring",
                      stiffness: 700,
                      damping: 30,
                    }}
                    className="residentail_fit_out_box"
                    key={i}
                  >
                    <h3>{x?.title}</h3>
                    <p>{x?.detail}</p>
                    {x?.detail2 ? <p>{x?.detail2}</p> : null}
                    {/* <Link to="/fit-out-services" className="cta-btn btn-border">
                  Read More
                </Link> */}
                  </motion.div>
                ))}
              <div className="residentail_fit_out_ShowMore">
                <span
                  className="ShowMore"
                  onClick={() => {
                    setShowMore(!showMore);
                  }}
                >
                  {showMore ? "Show less" : "Show More"}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ResidentialServicesOffer;
