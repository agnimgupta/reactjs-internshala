/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const StatusbarTime = ({ time = "9:41", darkMode, type, className }) => {
  return (
    <div className={`statusbar-time ${type} dark-mode-${darkMode} ${className}`}>
      {["blue", "default", "green", "orange"].includes(type) && <div className="time">{time}</div>}

      {type === "focus" && (
        <>
          <div className="text-wrapper">{time}</div>
          <img className="SF-symbol-bed-double" alt="Sf symbol bed double" src="/img/sf-symbol-bed-double-fill.svg" />
        </>
      )}
    </div>
  );
};

StatusbarTime.propTypes = {
  time: PropTypes.string,
  darkMode: PropTypes.bool,
  type: PropTypes.oneOf(["default", "focus", "blue", "orange", "green"]),
};
