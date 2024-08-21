import React, { useState } from "react";
import whatsappgif from "../../img/common/whatsapp1.gif";
import whatsappMin from "../../img/common/whatsapp1-min.gif";
import { ImCross } from "react-icons/im";
import "./style.scss";
const WhatsappFixedIcon = () => {
  const [showIcon, setShowIcon] = useState(true);
  return (
    <div
      className={showIcon ? "whatsappIconShow SHow" : "whatsappIconShow Hide"}
    >
      <div className="CancellLogo" onClick={() => setShowIcon(!showIcon)}>
        <ImCross size={15} />
      </div>
      <a
        // href={"https://wa.me/+971543458331"}
        href="https://api.whatsapp.com/send?phone=971543458331"
        className="contact-pannel-btn text-decoration-none"
        target={"_blank"}
      >
        <img
          src={whatsappMin}
          height={"60"}
          width={"60"}
          title="Whatsapp Social"
          alt="Whatsapp-Social"
        />
      </a>
    </div>
  );
};
export default WhatsappFixedIcon;
