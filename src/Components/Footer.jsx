import React from "react";
import Logo2 from "../Assets/logo2.svg";
import { BsTwitter } from "react-icons/bs";
import { SiLinkedin } from "react-icons/si";
import { BsYoutube } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

const Footer = (props) => {
  return (
    <div className="footer-wrapper">
      <div className="footer-section-one">
        <div className="footer-logo-container">
          <img src={Logo2} alt="" />
        </div>
        <div className="footer-icons">
          <BsTwitter />
          <SiLinkedin />
          <BsYoutube />
          <FaFacebookF />
        </div>
      </div>
      <div className="footer-section-two">
        <div className="footer-section-columns">
          <span>Qualtiy</span>
          <span>Help</span>
          <span>Share</span>
          <span>Carrers</span>
          <span>Testimonials</span>
          <span>Work</span>
        </div>
        <div className="footer-section-columns">
          <span>(999) 129-5603</span>
          <span>mrejon@comercializadoraremm.com</span>
          <span>
            C.15 #166A X 12 Y 4 DIAG. MONTECRISTO C.P. 97133 MÉRIDA,YUCATÁN
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
