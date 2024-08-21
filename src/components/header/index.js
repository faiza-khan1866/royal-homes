import React, { useEffect, useState } from "react";
// import Logo from "../../img/logoNoBg1.png";
import Logo from "../../img/logoNoBg1.webp";
import MobileMenu from "../../components/MobileMenu";
import { Link, useLocation, useHistory } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";
import { NavLinks } from "../../utils/navLinks";
import { motion } from "framer-motion";
import { useLanguage } from "../../services/context/language/LanguageContext";

import Appointment from "../appointment/Appointment";
// import { CreateLanguage } from "../../services/context/language/LanguageContext";

import "./style.css";
function useQuery() {
  const { search } = useLocation();

  return React.useMemo(() => new URLSearchParams(search), [search]);
}

const Header = () => {
  // const { globalLanguage, setGlobalLanguage } = useContext(CreateLanguage);
  const { globalLanguage, changeLanguage } = useLanguage();

  useEffect(() => {
    // let Language = localStorage.getItem("CurrentLanguage");
    // if (Language) {
    //   changeLanguage(Language);
    // }
  }, []);
  const handleLanguageChange = (newLanguage) => {
    changeLanguage(newLanguage);
  };

  const location = useLocation();
  const [show, setShow] = useState(false);
  const [activeLink, setActiveLink] = useState("/en/");
  const [showAppoint, setShowAppointment] = useState(false);
  const [querySearch, setQuerySearch] = useState("");
  let history = useHistory();
  let query = useQuery();

  const SubmitHandler = (e) => {
    e.preventDefault();
    setShow(false);
    history.push(`/${globalLanguage}/portfolio?search=${querySearch}`);
  };
  const onClick = (e) => {
    e.preventDefault();
  };
  useEffect(() => {
    if (query.get("search")) {
      setQuerySearch(query.get("search"));
    }
  }, []);
  useEffect(() => {
    if (location?.pathname == `/${globalLanguage}/services`) {
      setActiveLink(location?.pathname);
    }
  }, [location?.pathname]);

  return (
    <header className="header">
      <div className="row">
        <div className="col-lg-12">
          <div className="header-inn">
            <div className="site-logo">
              <a href={`/${globalLanguage}`}>
                <img
                  src={Logo}
                  title={"RPH Logo"}
                  alt="RPH-logo"
                  loading="lazy"
                  height={"160"}
                  width={"210"}
                />
              </a>
            </div>
            <div className="consult-btn-header MidScreenTopBookConst">
              <button
                className="header-consult-btn"
                onClick={() => setShowAppointment(true)}
              >
                <span className="fullName">Book a Consultation</span>
                {/* <span className="halfName">Consultation</span> */}
              </button>
            </div>
            <div className="header-navigation">
              <div className="mainmenu">
                <nav id="menu">
                  <ul className="dropdown dropDownMain">
                    {NavLinks?.map((links, i) => (
                      <>
                        <li
                          key={i}
                          className={
                            location?.pathname ==
                              `/${globalLanguage}${links.route}` ||
                            links?.children?.filter(
                              (item) =>
                                `/${globalLanguage}${item.route}` ==
                                location?.pathname
                            )[0]
                              ? "active"
                              : ""
                          }
                        >
                          <a href={`/${globalLanguage}${links.route}`}>
                            {links.Name}{" "}
                            {links?.children?.length && <IoIosArrowDown />}
                          </a>
                          {/* sub menu  */}
                          <ul className="subDropDown">
                            {links?.children?.map((sub_links, i) => (
                              <li
                                key={i}
                                className={
                                  location?.pathname ==
                                  `/${globalLanguage}${sub_links?.route}`
                                    ? "menuLinkList active "
                                    : "menuLinkList "
                                }
                              >
                                <div className="d-flex flex-row justify-content-between align-items-center pe-3">
                                  <a
                                    className="menuLink "
                                    href={`/${globalLanguage}${sub_links.route}`}
                                  >
                                    {sub_links.Name}
                                    {sub_links.route ==
                                    "/investment-support" ? (
                                      <>&#8482;</>
                                    ) : null}
                                  </a>
                                </div>
                                {sub_links?.children && (
                                  <>
                                    <ul className="childDropDown">
                                      {sub_links?.children?.map(
                                        (child_links, i) => (
                                          <li
                                            key={i}
                                            className={
                                              location?.pathname ==
                                              `/${globalLanguage}${child_links.route}`
                                                ? "menuLinkList borderLeft active"
                                                : "menuLinkList borderLeft"
                                            }
                                          >
                                            <a
                                              className="menuLink"
                                              href={`/${globalLanguage}${child_links.route}`}
                                            >
                                              {child_links.Name}
                                            </a>
                                          </li>
                                        )
                                      )}
                                    </ul>
                                  </>
                                )}
                              </li>
                            ))}
                          </ul>

                          {location?.pathname ==
                            `/${globalLanguage}${links.route}` ||
                          links?.children?.filter(
                            (item) =>
                              `/${globalLanguage}${item.route}` ==
                              location?.pathname
                          )[0] ? (
                            <motion.div
                              className="underline"
                              layoutId="underline"
                            />
                          ) : null}
                        </li>
                      </>
                    ))}
                  </ul>
                </nav>
              </div>

              <div className="header-action">
                <button className="search-toggle" onClick={() => setShow(true)}>
                  <i className="fa fa-search"></i>
                </button>
                {/* <div className="language-change-option">
                  <select
                    name="Language"
                    id="lang"
                    value={globalLanguage}
                    onChange={(e) => {
                      handleLanguageChange(e.target.value);
                    }}
                  >
                    <option value="en">EN</option>
                    <option value="ar">AR</option>
                    <option value="ru">RU</option>
                  </select>
                </div> */}

                {/* <div className="language-change">
                  <ul>
                    <li
                      className={globalLanguage == "en" ? "active" : null}
                      onClick={() => {
                        handleLanguageChange("en");
                      }}
                    >
                      EN
                    </li>
                    <li
                      className={
                        globalLanguage == "ar"
                          ? "active middle_border"
                          : "middle_border"
                      }
                      onClick={() => {
                        handleLanguageChange("ar");
                      }}
                    >
                      AR
                    </li>
                    <li
                      className={globalLanguage == "ru" ? "active" : null}
                      onClick={() => {
                        handleLanguageChange("ru");
                      }}
                    >
                      RU
                    </li>
                  </ul>
                </div> */}

                <Link
                  to={"#"}
                  className="header-btn deskTOpBookCOnst"
                  onClick={() => setShowAppointment(true)}
                >
                  {/* <div className="icon-holder">
                    <i className="far fa-envelope scale-elt"></i>
                  </div> */}
                  <i class="fas fa-phone-alt"></i>
                  &nbsp; Book a Consultation
                </Link>

                <Appointment
                  showAppoint={showAppoint}
                  setShowAppointment={setShowAppointment}
                />
              </div>
              <div
                id="search-overlay"
                className={`block ${show ? "show" : ""}`}
              >
                <div className="centered">
                  <div id="search-box">
                    <i
                      id="close-btn"
                      onClick={() => setShow(false)}
                      className="fa fa-times fa-2x"
                    ></i>
                    <form id="search-form" onSubmit={SubmitHandler}>
                      <input
                        id="search-text"
                        name="q"
                        placeholder="Type here..."
                        type="text"
                        value={querySearch}
                        onChange={(e) => setQuerySearch(e.target.value)}
                      />
                      <button id="search-button" type="submit">
                        <i className="fa fa-search"></i>
                      </button>
                    </form>
                  </div>
                </div>
              </div>
              <MobileMenu
                globalLanguage={globalLanguage}
                setShowAppointment={setShowAppointment}
              />
            </div>
          </div>
          {/* <div className="consult-btn-header MobileScreenTopBookConst">
            <button
              className="header-consult-btn"
              onClick={() => setShowAppointment(true)}
            >
              <span className="fullName">Book a Consultation</span>
              {/* <span className="halfName">Consultation</span> */}
          {/* </button> */}
          {/* </div> */}
          {/* column end  */}
        </div>
      </div>
    </header>
  );
};

export default Header;
