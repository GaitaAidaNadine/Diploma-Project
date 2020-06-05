import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { faAt } from "@fortawesome/free-solid-svg-icons";
import manOffice from "./../../assets/man-ofiice.jpg";
import "./ContactPage.scss";

const ContactPage = () => {
  return (
    <div className="contact-page-style">
      <img className="image" src={manOffice} alt="man-office" />
      <div className="contact-page">
        <div className="contact-title">
          <span>CONTACT US</span>
          <span className="message">We'd &#9825; to help!</span>
          <span>........................................</span>
        </div>
        <div className="contact-phone">
          <FontAwesomeIcon icon={faPhoneAlt} />
          <p className="paragraph-number">+40 770390780</p>
        </div>
        <div className="contact-email">
          <FontAwesomeIcon icon={faAt} />
          <p className="paragraph-email">sales@fitaddict.ro</p>
        </div>
      </div>
    </div>
  );
};
export default ContactPage;
