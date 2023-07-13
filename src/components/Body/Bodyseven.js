import React from "react";
import "./Bodyseven.css";

const Bodyseven = () => {
  return (
    <div className="bodyseven">
      <div className="sub-bodyseven">
        <div className="body7-1">
          <h5 className=" body7-sine">
            <span
              className="material-symbols-outlined"
              style={{ color: "rgb(235, 53, 84)", marginRight: "10px" }}
            >
              wifi
            </span>
            TwoNet
          </h5>
          <p className="body7-para">
            Sorem ipsum dolor sit amet consectrtur. Conse lacreesy condimentum
            sit vitae.
          </p>
          <div className="social-icon">
            <img src={require("../images/facebook.png")} />
            <img src={require("../images/instagram.png")} />
            <img src={require("../images/linkedin.png")} />
            <img src={require("../images/twitter.png")} />
          </div>
        </div>
        <div className="body7-2">
          <h5 className="body7-head">Link</h5>
          <p className="body7-para">About</p>
          <p className="body7-para">ur Services</p>
          <p className="body7-para">Clients Say</p>
          <p className="body7-para">Company History</p>
          <p className="body7-para">Latest News</p>
          <p className="body7-para">Contact Us</p>
        </div>
        <div className="body7-3">
          <h5 className="body7-head">Contact</h5>
          <div className="body7-para">
            <span
              className="material-symbols-outlined"
              style={{
                color: "rgb(235, 53, 84)",
                marginRight: "10px",
                fontSize: "small",
              }}
            >
              location_on
            </span>
            <p>55 main street, 2nd block Melborne, Australia</p>
          </div>
          <div className="body7-para">
            <span
              className="material-symbols-outlined"
              style={{
                color: "rgb(235, 53, 84)",
                marginRight: "10px",
                fontSize: "small",
              }}
            >
              drafts
            </span>
            <p>support@gmail.com</p>
          </div>
          <div className="body7-para">
            <span
              className="material-symbols-outlined"
              style={{
                color: "rgb(235, 53, 84)",
                marginRight: "10px",
                fontSize: "small",
              }}
            >
              add_call
            </span>
            +000 (123) 456 86
          </div>
        </div>
        <div className="body7-4">
          <h5 className="body7-head">Newsletter</h5>
          <input
            type="text"
            placeholder="Email Address"
            className="body7-input"
          />
          <button className="body7-btn">Subscribe</button>
        </div>
      </div>
    </div>
  );
};

export default Bodyseven;
