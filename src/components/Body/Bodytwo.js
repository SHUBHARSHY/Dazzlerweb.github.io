import React from "react";
import "./Bodytwo.css";

const Bodytwo = () => {
  return (
    <div className="services">
      <div className="sub-service">
        <div className="inr-service">
          <div className="feature">
            <span
              className="material-symbols-outlined"
              style={{
                color: "rgb(235, 53, 84)",
                marginRight: "10px",
                fontSize: "xx-large",
              }}
            >
              trending_up
            </span>
            <h3 className="service-header">78%</h3>
          </div>
          <p className="service-para">In time saved on prospecting</p>
        </div>
        <div className="partition"></div>
        <div className="inr-service">
          <div className="feature">
            <span
              className="material-symbols-outlined"
              style={{
                color: "rgb(235, 53, 84)",
                marginRight: "10px",
                fontSize: "xx-large",
              }}
            >
              cell_tower
            </span>
            <h3 className="service-header">97%</h3>
          </div>
          <p className="service-para">Achived data accuracy on average.</p>
        </div>
        <div className="partition"></div>
        <div className="inr-service">
          <div className="feature">
            <span
              className="material-symbols-outlined"
              style={{
                color: "rgb(235, 53, 84)",
                marginRight: "10px",
                fontSize: "xx-large",
              }}
            >
              alarm
            </span>
            <h3 className="service-header">2 Days</h3>
          </div>
          <p className="service-para"> Time to acheive the first result.</p>
        </div>
        <div className="partition"></div>
        <div className="inr-service">
          <div className="feature">
            <span
              className="material-symbols-outlined"
              style={{
                color: "rgb(235, 53, 84)",
                marginRight: "10px",
                fontSize: "xx-large",
              }}
            >
              stars
            </span>
            <h3 className="service-header">4.9</h3>
          </div>
          <p className="service-para">We have 1235m+ Clients Positive Rating</p>
        </div>
      </div>

      <div className="service-feature">
        <div className="service-img">
          <img className="ser-inr-img"
            src={require("../images/bodytwoimg.png")}
          />
        </div>

        <div className="service-highlights">
          <div>
            <div className="highlight-1">
              <span
                className="material-symbols-outlined"
                style={{ color: "rgb(235, 53, 84)", marginRight: "10px" }}
              >
                wifi
              </span>
              Why Choose Us
            </div>
          </div>

          <h2 className="highlight-2">
            Why People{" "}
            <span style={{ color: "rgb(235, 53, 84)" }}>Choose Our</span>{" "}
            Internet Service
          </h2>

          <div className="highlight-3">
            <div className="inr-highlight">
              <div className="high-heading">
                <img className="high-h"
                  src={require("../images/check.png")}
                />
                <h5 className="high-feature"> 550 MBPS Internet</h5>
              </div>
              <p className="high-para">
                Download speed up to 550 Mbps available in select areas.
              </p>
            </div>
            <div className="inr-highlight">
              <div className="high-heading">
                <img className="high-h"
                  src={require("../images/check.png")}
                />
                <h5 className="high-feature"> Expert Team Member</h5>
              </div>
              <p className="high-para">
                At vero eos et accusamus et iusto dignissimos ducimus blande.
              </p>
            </div>
            <div className="inr-highlight">
              <div className="high-heading">
                <img className="high-h"
                  src={require("../images/check.png")}
                />
                <h5 className="high-feature"> Project your Device</h5>
              </div>
              <p className="high-para">
                Download speed up to 550 Mbps available in select areas.
              </p>
            </div>
            <div className="inr-highlight">
              <div className="high-heading">
                <img className="high-h"
                  src={require("../images/check.png")}
                />
                <h5 className="high-feature"> Quick Response</h5>
              </div>
              <p className="high-para">
                At vero eos et accusamus et iusto dignissimos ducimus blande..
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bodytwo;
