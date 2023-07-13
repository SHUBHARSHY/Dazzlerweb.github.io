import React from "react";
import "./Bodythree.css";

const Bodythree = () => {
  return (
    <div className="team">
      <div className="inr-team">
        <div className="our-team">
          <span
            className="material-symbols-outlined"
            style={{ color: "rgb(235, 53, 84)", marginRight: "10px" }}
          >
            wifi
          </span>{" "}
          Meet Our Team
        </div>
        <h2 className="experience-team">
          Meet Our Experience{" "}
          <span style={{ color: "rgb(235, 53, 84)" }}>Team</span>
        </h2>
        <div className="team-members">
          <div className="member">
            <div className="mem-details">
              <img
                src={require("../images/member-1.png")}
                className="member-img"
              />
              <p className="team-para">Manuel.J lake</p>
              <p className="team-para1">CEO & Founder</p>
            </div>
          </div>
          <div className="member">
            <div className="mem-details">
              <img
                src={require("../images/member-2.png")}
                className="member-img"
              />
              <p className="team-para">Jack N.Markham</p>
              <p className="team-para1">Web Designer</p>
            </div>
          </div>
          <div className="member">
            <div className="mem-details">
              <img
                src={require("../images/member-3.png")}
                className="member-img"
              />
              <p className="team-para">Spencer S.Fuchs</p>
              <p className="team-para1">Senior Manager</p>
            </div>
          </div>
          <div className="member">
            <div className="mem-details">
              <img
                src={require("../images/member-2.png")}
                className="member-img"
              />
              <p className="team-para">Jack N.Markham</p>
              <p className="team-para1">Web Designer</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bodythree;
