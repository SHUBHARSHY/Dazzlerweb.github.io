import React from "react";
import "./Bodyfour.css";

const Bodyfour = () => {
  return (
    <div className="bodyfour">
      <div className="sub-bodyfour">
        <div className="inr-bodyfour">
          <div className="highlight-1">
            <span
              className="material-symbols-outlined"
              style={{ color: "rgb(235, 53, 84)", marginRight: "10px" }}
            >
              wifi
            </span>
            How to Benefit
          </div>
          <h2 className="bodyfour-head">
            Trusted & Super Speed Internet{" "}
            <a style={{ color: "rgb(235, 53, 84)" }}> Live & TV </a> net
          </h2>
          <p className="bodyfour-para">
            Sorem ipsum dolor sit amet consectetur. Consequat laoreet amet neque
            condimentum sit vitae.Vulputate curabitur vitae vestibulum
          </p>
          <div className="bodyfour-img">
            <img className="bodyfour-pic"
              src={require("../images/multiroom.png")}
            />
            <img className="bodyfour-pic"
              src={require("../images/ultrafast.png")}
            />
            <img className="bodyfour-pic"
              src={require("../images/4k.png")}
            />
          </div>
          <button className="bodyfour-btn">learn More Us </button>
        </div>

        <div className="inr2-bodyfour">
          <img className="inr2-bodyfour-img"
            src={require("../images/body-4.png")}
          />
        </div>
      </div>
    </div>
  );
};

export default Bodyfour;
