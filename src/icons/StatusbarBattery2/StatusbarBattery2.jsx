/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

export const StatusbarBattery2 = ({ className }) => {
  return (
    <svg
      className={`statusbar-battery-2 ${className}`}
      fill="none"
      height="13"
      viewBox="0 0 28 13"
      width="28"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M0.5 4C0.5 2.067 2.067 0.5 4 0.5H21C22.933 0.5 24.5 2.067 24.5 4V9C24.5 10.933 22.933 12.5 21 12.5H4C2.067 12.5 0.5 10.933 0.5 9V4Z"
        opacity="0.35"
        stroke="black"
      />
      <path
        className="path"
        d="M26 5V9.22034C26.8491 8.86291 27.4012 8.0314 27.4012 7.11017C27.4012 6.18894 26.8491 5.35744 26 5Z"
        fill="black"
        opacity="0.4"
      />
      <path
        className="path"
        d="M2 4C2 2.89543 2.89543 2 4 2H21C22.1046 2 23 2.89543 23 4V9C23 10.1046 22.1046 11 21 11H4C2.89543 11 2 10.1046 2 9V4Z"
        fill="black"
      />
    </svg>
  );
};
