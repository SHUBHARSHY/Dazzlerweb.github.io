import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="Footer">
      <div className="sub-footer">
        <p className="footer-para">
          Copyright @2023,{" "}
          <span style={{ color: " rgb(235, 53, 84" }}> TwoNet </span> All Rights
          Reserved
        </p>
        <div className="para-contain">
          <p className="footer-para">Terms of use </p>
          <p className="footer-para"> Privacy Policy</p>
          <p className="footer-para"> FAQs</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
