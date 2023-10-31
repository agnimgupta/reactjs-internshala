/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

export const StatusbarDynamicisland = ({ className }) => {
  return (
    <svg
      className={`statusbar-dynamicisland ${className}`}
      fill="none"
      height="226"
      viewBox="0 0 393 226"
      width="393"
      xmlns="http://www.w3.org/2000/svg"
    >
      <mask
        className="mask"
        height="222"
        id="mask0_1_83"
        maskUnits="userSpaceOnUse"
        style="mask-type:alpha"
        width="393"
        x="0"
        y="4"
      >
        <path
          className="path"
          d="M0 90.4C0 60.1572 0 45.0357 5.88565 33.4845C11.0628 23.3238 19.3238 15.0628 29.4845 9.88565C41.0357 4 56.1572 4 86.4 4H306.6C336.843 4 351.964 4 363.515 9.88565C373.676 15.0628 381.937 23.3238 387.114 33.4845C393 45.0357 393 60.1572 393 90.4V226H0V90.4Z"
          fill="white"
        />
      </mask>
      <g className="g" mask="url(#mask0_1_83)">
        <g className="g" filter="url(#filter0_bf_1_83)">
          <path className="path" d="M10 -30H383V204H10V-30Z" fill="#FFFF00" fillOpacity="0.01" />
        </g>
      </g>
      <rect className="rect" fill="black" height="37" rx="18.5" width="80" x="135" y="14" />
      <rect className="rect" fill="black" height="37" rx="18.5" width="37" x="223" y="14" />
      <g className="g" filter="url(#filter1_d_1_83)">
        <rect className="rect" fill="black" height="200" rx="42" width="373" x="10" y="4" />
      </g>
      <defs className="defs">
        <filter
          className="filter"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
          height="298"
          id="filter0_bf_1_83"
          width="437"
          x="-22"
          y="-62"
        >
          <feFlood className="fe-flood" floodOpacity="0" result="BackgroundImageFix" />
          <feGaussianBlur className="fe-gaussian-blur" in="BackgroundImageFix" stdDeviation="2" />
          <feComposite className="fe-composite" in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_1_83" />
          <feBlend
            className="fe-blend"
            in="SourceGraphic"
            in2="effect1_backgroundBlur_1_83"
            mode="normal"
            result="shape"
          />
          <feGaussianBlur className="fe-gaussian-blur" result="effect2_foregroundBlur_1_83" stdDeviation="16" />
        </filter>
        <filter
          className="filter"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
          height="216"
          id="filter1_d_1_83"
          width="389"
          x="2"
          y="0"
        >
          <feFlood className="fe-flood" floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            className="fe-color-matrix"
            in="SourceAlpha"
            result="hardAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset className="fe-offset" dy="4" />
          <feGaussianBlur className="fe-gaussian-blur" stdDeviation="4" />
          <feComposite className="fe-composite" in2="hardAlpha" operator="out" />
          <feColorMatrix className="fe-color-matrix" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.4 0" />
          <feBlend className="fe-blend" in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_83" />
          <feBlend className="fe-blend" in="SourceGraphic" in2="effect1_dropShadow_1_83" mode="normal" result="shape" />
        </filter>
      </defs>
    </svg>
  );
};
