import React, { useRef, useState } from "react";
import { SlCalender } from "react-icons/sl";
import {
  MdCleaningServices,
  MdHandyman,
  MdOutlinePlumbing,
  MdPestControlRodent,
} from "react-icons/md";
import { AiFillFormatPainter } from "react-icons/ai";
import { FaFan, FaPencilRuler } from "react-icons/fa";
import { GiVacuumCleaner } from "react-icons/gi";
// import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import img from "../../img/maintance/maintance2.png";
// import Slider from "react-slick";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import s from "./style.module.css";
import "./style.css";
import { useLanguage } from "../../services/context/language/LanguageContext";
function MaintancePageSection() {
  const { globalLanguage } = useLanguage();

  const [readMore, setReadmore] = useState(null);
  const sliderRef = useRef();
  const nextSlide = () => {
    sliderRef.current.slickNext();
  };
  const previousSlide = () => {
    sliderRef.current.slickPrev();
  };
  let cardData = [
    {
      title: "YEAR-ROUND MAINTENANCE PACKAGES",
      detials:
        "Our Year-Round Maintenance Packages are designed for homeowners seeking hassle-free living or rentals, with services tailored to your property's unique needs. Our custom-tailored maintenance plans cover preventative and reactive maintenance tasks, ensuring your property remains in pristine condition all year. Enjoy peace of mind knowing that expert technicians from our Canadian home maintenance company in Dubai are at your service, proactively addressing and preventing potential issues!",
      icon: <SlCalender size={40} className={s.Icon} />,
    },
    {
      title: "AC Servicing & Duct Cleaning",
      detials:
        "Living in a hot climate like Dubai requires a fully functional and efficient air conditioning unit that is maintained properly to ensure functionality and minimize risks of leaks and damage. Our AC Servicing & Duct Cleaning services ensure your cooling systems run optimally through thorough inspections, cleaning, and necessary repairs. Enhance your indoor air quality and comfort with our team of certified technicians dedicated to extending your AC’s lifespan and efficiency. Trust our home maintenance services in Dubai to keep your AC running smoothly all year long.",
      icon: <FaFan size={40} className={s.Icon} />,
    },
    {
      title: "Painting",
      detials:
        "Brighten and revitalize your living spaces with our premium Painting services. Our home maintenance experts in Dubai will evaluate your needs, provide color consultations and get the job done with minimal disruption.Our professional painters are skilled in delivering high-quality finishes, whether you are refreshing your current shade or opting for a dramatic transformation. We use eco-friendly, durable paints that not only look good but also stand the test of time, providing a fresh and lasting appearance.",
      icon: <AiFillFormatPainter size={40} className={s.Icon} />,
    },
    {
      title: "Cleaning",
      detials:
        "As a leading home maintenance company in Dubai, we understand the importance of keeping your home in pristine condition. Our Cleaning service offers meticulous attention to every corner of your home, promoting a healthy and hygienic environment. From routine cleaning to more extensive deep-cleaning tasks, our trained staff employs the latest equipment and eco-friendly products to ensure a sparkling clean home, freeing you to enjoy your time without the burden of household chores.",
      icon: <MdCleaningServices size={40} className={s.Icon} />,
    },
    {
      title: "Deep Cleaning",
      detials:
        "Deep Cleaning service goes beyond regular cleaning, providing an intensive, detailed clean that targets hard-to-reach and often neglected areas. Ideal for spring cleaning or post-renovation, this service rejuvenates your home, removing accumulated grime, dust, and allergens, resulting in a home that feels fresh, clean, and renewed. Choose our maintenance services in Dubai for all your home cleaning needs.",
      icon: <GiVacuumCleaner size={40} className={s.Icon} />,
    },
    {
      title: "Landscaping",
      detials:
        "Enhance your outdoor spaces with our Landscaping service, crafting an inviting and well-maintained exterior that reflects your style. Our experienced landscapers work with you to design, implement, and maintain existing gardens and yards, creating a well-maintained serene and beautiful outdoor environment for you and your family to relax and entertain in.",
      icon: <FaPencilRuler size={40} className={s.Icon} />,
    },
    {
      title: "Handyman Services",
      detials:
        "For miscellaneous repairs and installations, our Handyman Services are your go-to solution. Our skilled handymen are equipped to handle a wide range of tasks, from fixing leaky faucets to assembling furniture, with precision and care. Trust our home maintenance company in Dubai to efficiently complete small to medium-sized jobs, saving you time and effort.",
      icon: <MdHandyman size={40} className={s.Icon} />,
    },
    {
      title: "Electrical & Plumbing",
      detials:
        "Our Electrical & Plumbing services provide expert solutions for your home’s critical systems. As a preferred home maintenance company in Dubai, we understand how important it is to have reliable electrical and plumbing systems. Our licensed electricians and plumbers diagnose, repair, and install a wide array of electrical and plumbing components, ensuring your home’s safety and functionality. With prompt and reliable services, we address issues efficiently, minimizing disruptions to your daily life.",
      icon: <MdOutlinePlumbing size={40} className={s.Icon} />,
    },
    {
      title: "Pest Control",
      detials:
        "Protect your home from unwanted pests with our effective Pest Control services. Utilizing safe and environmentally friendly methods, our trained technicians expertly eliminate and prevent infestations, providing a comfortable and pest-free living environment. We cover a wide range of pest prevention and extermination services, delivering peace of mind and protection for your home. Trust our maintenance company in Dubai to provide you with top-notch pest control services.",
      icon: <MdPestControlRodent size={40} className={s.Icon} />,
    },
  ];
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 1500,
    slidesToShow: 3,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 6500,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 980,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 680,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div id="Maintance_page" className={s.Maintance_page}>
      <div className="container" data-aos="fade-up">
        <div className="row">
          <div className="col-md-6">
            <div className={`${s.Maintance_detials}  mb-3`}>
              <h3 className={"section-title  mb-3"}>Maintenance Services</h3>
              <p>
                As a preferred maintenance company in Dubai, RPH offers complete
                maintenance packages customized to your property’s requirements
                to ensure it is kept in pristine condition year-round.
              </p>
              <p>
                Whether you are living in your property, use it for vacation, or
                rent it out, our monthly status reporting, preventative
                maintenance management, and complete repair services ensure your
                property is maintained to the pinnacle of excellence, providing
                you with a hassle-free maintenance management experience.
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <img
              src={img}
              alt="Maintenance-Services"
              title="Maintenance Services"
            />
          </div>
        </div>
      </div>

      <div className={s.service_benefits} data-aos="fade-up">
        <div className="container">
          {/* <div className="row"> */}
          {/* <div className="col-12">
              <div className={s.card_section_title}>
                <h2>Maintenance Service Benefits</h2>
                <div className={s.slide_change_btn}>
                  <div className={s.prev_btn} onClick={previousSlide}>
                    <AiOutlineArrowLeft />
                  </div>
                  <div className={s.next_btn} onClick={nextSlide}>
                    <AiOutlineArrowRight />
                  </div>
                </div>
              </div>
            </div> */}
          {/* </div> */}
          <div className="row">
            {/* <Slider {...settings} ref={sliderRef}> */}
            {cardData?.map((item, i) => (
              <motion.div layout className="col-sm-12 col-md-6 col-lg-4">
                <motion.div layout className={s.card}>
                  <div className={s.card_icon}>
                    {/* <img src={item?.icon} alt="card-icon" /> */}
                    {item?.icon}
                  </div>
                  <div className={s.Title}>{item?.title}</div>
                  <p className={s.Detials}>
                    {readMore == i ? (
                      <>{item?.detials}</>
                    ) : (
                      <>
                        {/* {item?.detials?.length <= "267"
                          ? item?.detials
                          : item?.detials?.slice(0, 267) + "..."} */}
                        {item?.detials}
                      </>
                    )}{" "}
                    {/* <span
                      className={s.readMore}
                      onClick={() => {
                        if (readMore == i) {
                          setReadmore(null);
                        } else {
                          setReadmore(i);
                        }
                      }}
                    >
                      {readMore == i ? "Read Less" : "Read More"}
                    </span> */}
                  </p>
                  <br />
                  <div className={s.ENqueiryWrapper}>
                    <Link
                      className={s.EnquiryBtn}
                      to={`/${globalLanguage}/contact?service=Maintenance`}
                    >
                      ENQUIRE NOW
                    </Link>
                  </div>
                </motion.div>
              </motion.div>
            ))}
            {/* </Slider> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MaintancePageSection;
