import React, { Component } from "react";
import { Collapse } from "react-bootstrap";
import { Link } from "react-router-dom";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";

import "./style.css";
import { NavLinks } from "../../utils/navLinks";

const menus = [
  {
    id: 1,
    title: "Home",
    link: "/home",
  },

  {
    id: 2,
    title: "About",
    link: "/about",
  },

  {
    id: 3,
    title: "Project",
    link: "/projects",
    submenu: [
      {
        id: 31,
        title: "Project",
        link: "/projects",
      },
      {
        id: 32,
        title: "Project Details",
        link: "/projects-single",
      },
    ],
  },
  {
    id: 4,
    title: "Service",
    link: "/service",
    submenu: [
      {
        id: 41,
        title: "Service",
        link: "/service",
      },
      {
        id: 42,
        title: "Service Details",
        link: "/service-single",
      },
    ],
  },
  {
    id: 7,
    title: "Pages",
    link: "/",
    submenu: [
      {
        id: 71,
        title: "Portfolio",
        link: "/portfolio",
      },
      {
        id: 75,
        title: "Team",
        link: "/team",
      },
      {
        id: 76,
        title: "Faq",
        link: "/faq",
      },

      {
        id: 79,
        title: "Contact",
        link: "/contact",
      },
      {
        id: 70,
        title: "Error",
        link: "/404",
      },
    ],
  },

  {
    id: 5,
    title: "Blog",
    link: "/blogs",
    submenu: [
      {
        id: 51,
        title: "Blog",
        link: "/blogs",
      },
      {
        id: 52,
        title: "Blog Single",
        link: "/blog",
      },
    ],
  },
  {
    id: 88,
    title: "Contact",
    link: "/contact",
  },
];

export default class MobileMenu extends Component {
  state = {
    isMenuShow: false,
    isOpen: 0,
    isChildMenuSHow: false,
    isChildOpen: 0,
  };

  menuHandler = () => {
    this.setState({
      isMenuShow: !this.state.isMenuShow,
    });
  };
  setIsOpen = (id) => () => {
    this.setState({
      isOpen: id === this.state.isOpen ? 0 : id,
    });
  };
  ChildmenuHandler = () => {
    this.setState({
      isChildMenuSHow: !this.state.isChildMenuSHow,
    });
  };
  setIsChildOpen = (id) => () => {
    this.setState({
      isChildOpen: id === this.state.isChildOpen ? 0 : id,
    });
  };

  render() {
    const { isMenuShow, isOpen, isChildMenuSHow, isChildOpen } = this.state;
    const { globalLanguage, setShowAppointment } = this.props;
    return (
      <>
        <div className="responsiveMenu">
          <nav
            id="mobileMenu"
            className={`mobileMenu ${
              isMenuShow ? "active" : isChildMenuSHow ? "active" : ""
            }`}
          >
            <ul className="responsivemenu">
              {NavLinks.map((item) => {
                return (
                  <li key={item.id}>
                    {item.children ? (
                      <>
                        <p
                          className="MenuOponIcon"
                          // onClick={this.setIsOpen(item.id)}
                          // aria-expanded={isMenuShow}
                        >
                          {/* {item.Name} */}
                          <a href={`/${globalLanguage}${item.route}`}>
                            {item.Name}
                          </a>
                          {item.children ? "" : ""}
                          <span>
                            {isOpen !== 0 ? (
                              <IoIosArrowDown
                                className={" iconMenu"}
                                onClick={this.setIsOpen(item.id)}
                                aria-expanded={isMenuShow}
                              />
                            ) : (
                              <IoIosArrowForward
                                className={" iconMenu"}
                                onClick={this.setIsOpen(item.id)}
                                aria-expanded={isMenuShow}
                              />
                            )}
                          </span>
                        </p>
                      </>
                    ) : (
                      <a href={`/${globalLanguage}${item.route}`}>
                        {item.Name}
                      </a>
                    )}

                    {item.children ? (
                      <Collapse in={item.id === isOpen}>
                        <ul className="sub-menu">
                          {item.children.map((submenu) => (
                            <li key={submenu.id}>
                              {submenu.children ? (
                                <p
                                  onClick={this.setIsChildOpen(submenu.id)}
                                  aria-expanded={isChildMenuSHow}
                                >
                                  {submenu.Name}
                                  {submenu.children ? "" : ""}
                                  {isChildOpen !== 0 ? (
                                    <IoIosArrowDown className={"ms-3 "} />
                                  ) : (
                                    <IoIosArrowForward className={"ms-3 "} />
                                  )}
                                </p>
                              ) : (
                                <a href={`/${globalLanguage}${submenu.route}`}>
                                  {submenu.Name}
                                </a>
                              )}
                              {submenu.children ? (
                                <Collapse in={submenu.id === isChildOpen}>
                                  <ul className="child-menu">
                                    {submenu.children.map((childMenu) => (
                                      <li className="ps-3" key={childMenu.id}>
                                        <a
                                          href={`/${globalLanguage}${childMenu.route}`}
                                        >
                                          {childMenu.Name}
                                        </a>
                                      </li>
                                    ))}
                                  </ul>
                                </Collapse>
                              ) : (
                                ""
                              )}
                            </li>
                          ))}
                        </ul>
                      </Collapse>
                    ) : (
                      ""
                    )}
                  </li>
                );
              })}
            </ul>
            <div className="consult-btn-header MobileScreenTopBookConst">
              <button
                className="header-consult-btn"
                onClick={() => setShowAppointment(true)}
              >
                <span>Book a Consultation</span>
              </button>
            </div>
          </nav>

          <div
            className={`spinner-master ${isMenuShow ? "active" : ""}`}
            onClick={this.menuHandler}
          >
            <div id="spinner-form" className="spinner-spin">
              <div className="spinner diagonal part-1"></div>
              <div className="spinner horizontal"></div>
              <div className="spinner diagonal part-2"></div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
