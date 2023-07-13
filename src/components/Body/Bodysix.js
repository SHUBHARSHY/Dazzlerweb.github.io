import React from "react";
import "./Bodysix.css";

const Bodysix = () => {
  return (
    <div className="bodysix">
      <div className="sub-bodysix">
        <div className="high-wifi">
          <span
            className="material-symbols-outlined"
            style={{ color: "rgb(235, 53, 84)", marginRight: "10px" }}
          >
            wifi
          </span>
          How to Benefit
        </div>
        <h2 className="head-bodysix">
          What <span style={{ color: "rgb(235, 53, 84)" }}> Clients Says </span>{" "}
          Us
        </h2>

        <div className="wrapper">
          <div className="carousel">
            <div className="inr-crousel">
              <img
                className="crousel-rating"
                src={require("../images/rating.png")}
              />
              <p className="crousel-des">
                Sed ut perspiciatis unde omnis estesye natus error site
                volptatem accusantium doloremque laudan toams aperias
              </p>
              <div className="inrmost-crousel">
                <img
                  className="crousel-img"
                  src={require("../images/person-1.png")}
                />
                <div className="crousel-con">
                  <p className="crousel-name">Frank L.Hughes</p>
                  <p className="crousel-prof">Bussiness Man</p>
                </div>
              </div>
            </div>

            <div className="inr-crousel">
              <img
                className="crousel-rating"
                src={require("../images/rating.png")}
              />
              <p className="crousel-des">
                Sed ut perspiciatis unde omnis estesye natus error site
                volptatem accusantium doloremque laudan toams aperias
              </p>
              <div className="inrmost-crousel">
                <img
                  className="crousel-img"
                  src={require("../images/person-2.png")}
                />
                <div className="crousel-con">
                  <p className="crousel-name">Michael A.Olson</p>
                  <p className="crousel-prof">consultant</p>
                </div>
              </div>
            </div>

            <div className="inr-crousel">
              <img
                className="crousel-rating"
                src={require("../images/rating.png")}
              />
              <p className="crousel-des">
                Sed ut perspiciatis unde omnis estesye natus error site
                volptatem accusantium doloremque laudan toams aperias
              </p>
              <div className="inrmost-crousel">
                <img
                  className="crousel-img"
                  src={require("../images/person-3.png")}
                />
                <div className="crousel-con">
                  <p className="crousel-name">Dennis A.McGehee</p>
                  <p className="crousel-prof">Web Developer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bodysix;
