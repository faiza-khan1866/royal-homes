import React from "react";
import { Link } from "react-router-dom";

// import projectImg1 from "../../img/project-1.png";
// import projectImg2 from "../../img/project-2.png";
// import projectImg3 from "../../img/project-3.png";
// import projectImg1 from "../../img/common/side img1.png";
// import projectImg3 from "../../img/common/side img2.png";
import "./style.css";
import PortfolioPageApi from "../../apis/pages/PortfolioPageApi";

const NewProjectSection = ({ globalLanguage }) => {
  const { GetHomeProjectList } = PortfolioPageApi();

  const { data: LatestpageAllData, isLoadng } = GetHomeProjectList();
  return (
    <div className="new-projects-area">
      <div className="container">
        <div className="row align-items-center">
          {LatestpageAllData?.map((item, i) => (
            <div
              className={i == 0 ? "col-md-6 " : "col-md-6 projectColumn2"}
              key={i}
            >
              {i == 0 && (
                <>
                  <div className="site-heading">
                    <span className="sub-title">PROJECTS</span>
                    <div className="section-title">
                      Our Featured Work. <br /> The Pinnacle of Luxe Living
                    </div>
                  </div>
                </>
              )}
              <div className="project-box" data-aos="fade-up">
                <Link
                  to={`/${globalLanguage}/portfolio-inner/${item?.project_detail?.route}`}
                >
                  <img
                    className="Home_Project-Image"
                    src={`${process.env.REACT_APP_IMAGE_BASE_URL}/${item?.project_detail?.content?.Main_section?.feature_img}`}
                    title={item?.project_detail?.content?.Main_section?.title}
                    alt={item?.project_detail?.content?.Main_section?.title}
                    style={{ display: "block", Width: "620px" }}
                    loading="lazy"
                    height={"800"}
                    width={"620"}
                  />
                  <div className="Image_overlay Home_Project-Image">
                    <div className="project-title">
                      {item?.project_detail?.content?.Main_section?.title}{" "}
                      <br />
                    </div>
                    {/* <p>{item?.content?.Main_section?.sub_title}</p> */}
                    <div className="project-zoom-wrapper">
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
                      <span className="View_here_Text">View Project Here</span>
                    </div>
                  </div>
                </Link>
              </div>
              {i == 1 && (
                <div className="text-center mt-5 d-lg-block ">
                  <Link
                    to={`/${globalLanguage}/portfolio`}
                    className="cta-btn btn-fill"
                  >
                    View Our Portfolio
                  </Link>
                </div>
              )}
            </div>
          ))}

          {/* <div className="col-sm-6 projectColumn2 mt-2 mb-2">
            <div className="project-box" data-aos="fade-up">
              <Link to="/portfolio-inner/testId">
                <img
                  src={projectImg3}
                  alt="img"
                  style={{ display: "block", maxWidth: "620px" }}
                />
                <h3>
                  MODERN LIVING
                  <br /> ROOM
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
            <div className="text-center mt-5 d-lg-block d-none">
              <Link to="/portfolio" className="cta-btn btn-fill">
                See Projects
              </Link>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default NewProjectSection;
