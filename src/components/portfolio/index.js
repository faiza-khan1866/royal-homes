import React from "react";

// import Img1 from "../../img/portfolio-1.jpg";
// import Img2 from "../../img/portfolio-2.jpg";
// import Img3 from "../../img/portfolio-3.jpg";
// import Img4 from "../../img/portfolio-4.jpg";
// import Img5 from "../../img/portfolio-5.jpg";
// import Img6 from "../../img/portfolio-6.jpg";
import Img1 from "../../img/portfolio/interior_Design_Garden.png";
import Img2 from "../../img/portfolio/interior_Design_Room.png";
import Img3 from "../../img/portfolio/interior_Design_Residential.png";
import Img4 from "../../img/portfolio/interior_Design_Room2.png";
import Img5 from "../../img/portfolio/interior_Design_Pool.png";
import Img6 from "../../img/portfolio/interior_Design_bathroom.png";
import "./style.css";

const Portfolio = () => {
  let PortFolioData = [
    {
      FeaturedImg: Img1,
      title: "Interior Design",
      subTitle: "City",
    },
    {
      FeaturedImg: Img2,
      title: "Interior Design",
      subTitle: "Drawing Room",
    },
    {
      FeaturedImg: Img3,
      title: "Interior Design",
      subTitle: "Drawing Room",
    },
    {
      FeaturedImg: Img4,
      title: "Interior Design",
      subTitle: "Pool",
    },
    {
      FeaturedImg: Img5,
      title: "Interior Design",
      subTitle: "Garden",
    },
    {
      FeaturedImg: Img1,
      title: "Interior Design",
      subTitle: "Bathroom",
    },
    {
      FeaturedImg: Img6,
      title: "Interior Design",
      subTitle: "Pool",
    },
    {
      FeaturedImg: Img3,
      title: "Interior Design",
      subTitle: "Hotel",
    },
    {
      FeaturedImg: Img4,
      title: "Interior Design",
      subTitle: "Residential",
    },
  ];
  return (
    <section className="portfolio-area portfolio-page">
      <div className="container">
        <div className="row">
          {PortFolioData?.map((item, i) => (
            <div className="col-md-4 col-sm-6 no-paading mt-2 mb-2" key={i}>
              <div className="portfolio-box">
                <div className="portfolio-img">
                  <img src={item?.FeaturedImg} alt="portfolio img" />
                </div>
                <div className="portfolio-text text-center">
                  <h2 className="h4">{item?.title}</h2>
                  <h3 className="h2">{item?.subTitle}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* <div className="row">
          <div className="col-md-4 col-sm-6 no-paading mt-2 mb-2">
            <div className="portfolio-box">
              <div className="portfolio-img">
                <img src={Img1} alt="portfolio img" />
              </div>
              <div className="portfolio-text text-center">
                <h2 className="h4">Interior Design</h2>
                <h3 className="h2">City</h3>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-6 no-paading mt-2 mb-2">
            <div className="portfolio-box">
              <div className="portfolio-img">
                <img src={Img2} alt="portfolio img" />
              </div>
              <div className="portfolio-text text-center">
                <h2 className="h4">Interior Design</h2>
                <h3 className="h2">Drawing Room</h3>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-6 no-paading mt-2 mb-2">
            <div className="portfolio-box">
              <div className="portfolio-img">
                <img src={Img3} alt="portfolio img" />
              </div>
              <div className="portfolio-text text-center">
                <h2 className="h4">Interior Design</h2>
                <h3 className="h2">Drawing Room</h3>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-6 no-paading mt-2 mb-2">
            <div className="portfolio-box">
              <div className="portfolio-img">
                <img src={Img4} alt="portfolio img" />
              </div>
              <div className="portfolio-text text-center">
                <h2 className="h4">House Planning</h2>
                <h3 className="h2">Pool</h3>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-6 no-paading mt-2 mb-2">
            <div className="portfolio-box">
              <div className="portfolio-img">
                <img src={Img5} alt="portfolio img" />
              </div>
              <div className="portfolio-text text-center">
                <h2 className="h4">House Planning</h2>
                <h3 className="h2">Garden</h3>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-6 no-paading mt-2 mb-2">
            <div className="portfolio-box">
              <div className="portfolio-img">
                <img src={Img6} alt="portfolio img" />
              </div>
              <div className="portfolio-text text-center">
                <h2 className="h4">Interior Design</h2>
                <h3 className="h2">Bathroom</h3>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-6 no-paading mt-2 mb-2">
            <div className="portfolio-box">
              <div className="portfolio-img">
                <img src={Img3} alt="portfolio img" />
              </div>
              <div className="portfolio-text text-center">
                <h2 className="h4">House Planning</h2>
                <h3 className="h2">Pool</h3>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-6 no-paading mt-2 mb-2">
            <div className="portfolio-box">
              <div className="portfolio-img">
                <img src={Img2} alt="portfolio img" />
              </div>
              <div className="portfolio-text text-center">
                <h2 className="h4">Interior Design</h2>
                <h3 className="h2">Hotel</h3>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-6 no-paading mt-2 mb-2">
            <div className="portfolio-box">
              <div className="portfolio-img">
                <img src={Img1} alt="portfolio img" />
              </div>
              <div className="portfolio-text text-center">
                <h2 className="h4">Interior Design</h2>
                <h3 className="h2">Residential</h3>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Portfolio;
