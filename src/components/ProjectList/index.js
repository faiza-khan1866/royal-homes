import React from "react";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { useMediaQuery } from "@mui/material";
//
import projectImg1 from "../../img/project/cncert_hall.png";
import projectImg2 from "../../img/project/mdern_interior.png";
import projectImg3 from "../../img/project/drawing room in las vegas.png";
import projectImg4 from "../../img/project/swiming_pool_romania.png";
import projectImg5 from "../../img/project/office_las_vegas.png";
import projectImg6 from "../../img/project/master kitchen.png";
import projectImg7 from "../../img/project/modernHallRoom.png";
import projectImg8 from "../../img/project/modernHouse.png";
import projectImg9 from "../../img/project/medern_resturant.png";

import "./style.css";

let imageList = [
  {
    img: projectImg1,
    title: "CONCERT HALL",
    title_half: "IN NEW WORK",
    para: "ARCHITECTURE",
  },

  {
    img: projectImg3,
    title: "DRAWING ROOM",
    title_half: "IN LAS VEGAS",
    para: "INTERIOR",
  },
  {
    img: projectImg5,
    title: "MODERN OFFICE",
    title_half: "IN LOS ANGELS",
    para: "INTERIOR",
  },

  {
    img: projectImg7,
    title: "MODERN RESTURENT",
    title_half: "IN BAHRAIN",
    para: "INTERIOR",
  },
  {
    img: projectImg2,
    title: "MODERN INTERIOR",
    title_half: "IN AUSTRALIA",
    para: "INTERIOR",
  },
  {
    img: projectImg4,
    title: "SWIMMING POOL",
    title_half: "IN ROMANIA",
    para: "HOUSE PLANNING",
  },
  {
    img: projectImg6,
    title: "MASTER KITCHEN",
    title_half: "IN DHAKA",
    para: "ARCHITECTURE",
  },
  {
    img: projectImg9,
    title: "MODERN RESTURENT ",
    title_half: "IN BAHRAIN",
    para: "INTERIOR",
  },
  {
    img: projectImg8,
    title: "MODERN HALL ROOM",
    title_half: "IN AUSTRALIA",
    para: "ARCHITECTURE",
  },
];
const ProjectList = ({ globalLanguage }) => {
  const matches = useMediaQuery("(min-width:600px)");
  return (
    <section className="projects-area projects-page-area">
      <div className="container">
        <div className="row">
          <div className="col-md-12 mx-auto">
            <div className="row">
              <div className="col-md-12">
                <div className="site-heading text-center">
                  <h3 className="sub-title">PROJECTS</h3>
                  <h2 className="section-title">Featured Work.</h2>
                </div>
              </div>
            </div>

            <div className="row align-items-start justify-content-center">
              {/* <div className="col-md-5  col-sm-6">
                <div className="project-box">
                  <Link to="/projects-single">
                    <img src={projectImg1} alt="img" />
                    <h3>
                      CONCERT HALL
                      <br /> IN NEW WORK
                    </h3>
                    <p>ARCHITECTURE</p>
                    <div className="project-zoom">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-eye"
                      >
                        <path
                          stroke="#ffffff"
                          d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"
                        />
                        <circle stroke="#ffffff" cx={12} cy={12} r={3} />
                      </svg>
                    </div>
                  </Link>
                </div>
              </div>
              <div className="col-md-5 col-sm-6">
                <div className="project-box">
                  <Link to="/projects-single">
                    <img src={projectImg2} alt="img" />
                    <h3>
                      MODERN INTERIOR
                      <br /> IN AUSTRALIA
                    </h3>
                    <p>INTERIOR</p>
                    <div className="project-zoom">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-eye"
                      >
                        <path
                          stroke="#ffffff"
                          d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"
                        />
                        <circle stroke="#ffffff" cx={12} cy={12} r={3} />
                      </svg>
                    </div>
                  </Link>
                </div>
              </div>
              <div className="col-md-5 col-sm-6">
                <div className="project-box">
                  <Link to="/projects-single">
                    <img src={projectImg3} alt="img" />
                    <h3>
                      DRAWING ROOM
                      <br /> IN LAS VEGAS
                    </h3>
                    <p>INTERIOR</p>
                    <div className="project-zoom">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-eye"
                      >
                        <path
                          stroke="#ffffff"
                          d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"
                        />
                        <circle stroke="#ffffff" cx={12} cy={12} r={3} />
                      </svg>
                    </div>
                  </Link>
                </div>
              </div>
              <div className="col-md-5 col-sm-6">
                <div className="project-box">
                  <Link to="/projects-single">
                    <img src={projectImg4} alt="img" />
                    <h3>
                      SWIMMING POOL
                      <br /> IN ROMANIA
                    </h3>
                    <p>HOUSE PLANNING</p>
                    <div className="project-zoom">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-eye"
                      >
                        <path
                          stroke="#ffffff"
                          d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"
                        />
                        <circle stroke="#ffffff" cx={12} cy={12} r={3} />
                      </svg>
                    </div>
                  </Link>
                </div>
              </div>
              <div className="col-md-5 col-sm-6">
                <div className="project-box">
                  <Link to="/projects-single">
                    <img src={projectImg5} alt="img" />
                    <h3>
                      MODERN OFFICE
                      <br /> IN LOS ANGELS
                    </h3>
                    <p>INTERIOR</p>
                    <div className="project-zoom">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-eye"
                      >
                        <path
                          stroke="#ffffff"
                          d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"
                        />
                        <circle stroke="#ffffff" cx={12} cy={12} r={3} />
                      </svg>
                    </div>
                  </Link>
                </div>
              </div>
              <div className="col-md-5 col-sm-6">
                <div className="project-box">
                  <Link to="/projects-single">
                    <img src={projectImg6} alt="img" />
                    <h3>
                      MASTER KITCHEN
                      <br /> IN DHAKA
                    </h3>
                    <p>ARCHITECTURE</p>
                    <div className="project-zoom">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-eye"
                      >
                        <path
                          stroke="#ffffff"
                          d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"
                        />
                        <circle stroke="#ffffff" cx={12} cy={12} r={3} />
                      </svg>
                    </div>
                  </Link>
                </div>
              </div>
              <div className="col-md-5 col-sm-6">
                <div className="project-box">
                  <Link to="/projects-single">
                    <img src={projectImg7} alt="img" />
                    <h3>
                      MODERN RESTURENT
                      <br /> IN BAHRAIN
                    </h3>
                    <p>INTERIOR</p>
                    <div className="project-zoom">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-eye"
                      >
                        <path
                          stroke="#ffffff"
                          d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"
                        />
                        <circle stroke="#ffffff" cx={12} cy={12} r={3} />
                      </svg>
                    </div>
                  </Link>
                </div>
              </div>
              <div className="col-md-5 col-sm-6">
                <div className="project-box">
                  <Link to="/projects-single">
                    <img src={projectImg8} alt="img" />
                    <h3>
                      MODERN HALL ROOM
                      <br /> IN AUSTRALIA
                    </h3>
                    <p>ARCHITECTURE</p>
                    <div className="project-zoom">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-eye"
                      >
                        <path
                          stroke="#ffffff"
                          d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"
                        />
                        <circle stroke="#ffffff" cx={12} cy={12} r={3} />
                      </svg>
                    </div>
                  </Link>
                </div>
              </div> */}
            </div>
          </div>
        </div>
        <ImageList variant="masonry" cols={matches ? 2 : 1} gap={10}>
          {imageList?.map((item, i) => (
            <ImageListItem key={i}>
              <div className="project-box">
                <Link to={`/${globalLanguage}/projects-single/testId`}>
                  <img src={item?.img} alt="project" loading="lazy" />
                  <h3>
                    {item?.title}
                    <br />
                    {item?.title_half}
                  </h3>

                  <p className="ProjectMainPara">{item?.para}</p>
                  <div className="project-zoom">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-eye"
                    >
                      <path
                        stroke="#ffffff"
                        d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"
                      />
                      <circle stroke="#ffffff" cx={12} cy={12} r={3} />
                    </svg>
                  </div>
                </Link>
              </div>
            </ImageListItem>
          ))}
        </ImageList>
      </div>
    </section>
  );
};
export default ProjectList;
