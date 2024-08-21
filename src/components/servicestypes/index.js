import React from "react";
import { Link } from "react-router-dom";

import FeaturedImg from "../../img/servicesTypes/interior1.png";
import FeaturedImg2 from "../../img/servicesTypes/interior2.png";
import "./style.css";

function index(props) {
  return (
    <section className="services-types-pages">
      <div className="container">
        <div className="row">
          {props.servicesData && (
            <>
              {props?.servicesData.map((item, i) => (
                <div className="col-lg-6">
                  <div className="serviceTypes-box">
                    <Link to={`/${props?.globalLanguage}${item?.link}`}>
                      <img src={item.img} alt="Featured Service" />
                      <div className="service-types-detials">
                        <h3>{item?.title}</h3>
                      </div>
                    </Link>
                  </div>
                </div>
              ))}
            </>
          )}
        </div>
      </div>
    </section>
  );
}

export default index;
