import React, { useState } from "react";
import whatsappgif from "../../img/common/whatsapp1.gif";
import { ImCross } from "react-icons/im";
import "./style.scss";
import Appointment from "../appointment/Appointment";
import { FaHeadset } from "react-icons/fa";
import { motion } from "framer-motion";
const BookConsultation = () => {
  const [showIcon, setShowIcon] = useState(true);
  const [showAppoint, setShowAppointment] = useState(false);

  return (
    <div
      className={
        showIcon ? "SHow ConsultationButton" : "Hide ConsultationButton"
      }
    >
      <div className="CancellLogo" onClick={() => setShowIcon(!showIcon)}>
        <ImCross size={15} />
      </div>
      <motion.div
        initial={{ scale: 1 }}
        animate={{ scale: [1, 1.1, 1.3, 1], rotate: [0, 0, 270, 270, 0] }}
        transition={{ repeat: Infinity, repeatDelay: 10 }}
        className="ConsultationIconWrapper"
        onClick={() => setShowAppointment(!showAppoint)}
      >
        <FaHeadset size={25} className="ConsultationIcon" />
      </motion.div>
      <Appointment
        showAppoint={showAppoint}
        setShowAppointment={setShowAppointment}
      />
    </div>
  );
};
export default BookConsultation;
