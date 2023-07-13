import React from "react";
import "./Bodyone.css";
const Bodyone = () => {
  return (
    <div className="social">
      <div className="inr-social">
        <div className="social-1">
          <span
            className="material-symbols-outlined"
            style={{ color: "rgb(235, 53, 84)", marginRight: "10px" }}
          >
            wifi
          </span>
          100mbps internet provider
        </div>

        <h1 className="social-head">
          Super <span style={{ color: "rgb(235, 53, 84)" }}>Faster</span> &
          Quality Internet
        </h1>
        <p className="social-para">
          We thepsum sit amet consectetur. Conequat laoreet amet neque
          condimentum sit vitae. Vulputate.0 curabitur vitae vestibulum
        </p>
        <div className="social-2">
          <button className="social-btn">Explore Packages</button>
          <a className="social-ancr">How it works</a>
        </div>
      </div>

      <div className="img-container">
        <img src={require("../images/social.png")} className="social-png" />
      </div>
    </div>
  );
};

export default Bodyone;
