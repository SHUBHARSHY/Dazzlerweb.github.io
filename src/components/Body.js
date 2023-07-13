import React from "react";
import "./Body.css";
import Bodyone from "./Body/Bodyone";
import Bodytwo from "./Body/Bodytwo";
import Bodythree from "./Body/Bodythree";
import Bodyfour from "./Body/Bodyfour";
import Bodysix from "./Body/Bodysix";
import Bodyseven from "./Body/Bodyseven";
import Footer from "./Footer";

const Body = () => {
  return (
    <div className="Body">
      <Bodyone />
      <Bodytwo />
      <Bodythree />
      <Bodyfour />
      <Bodysix />
      <Bodyseven />
      <Footer />
    </div>
  );
};

export default Body;
