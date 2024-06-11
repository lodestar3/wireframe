/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

export const NetworkEthereum = ({ className }) => {
  return (
    <svg
      className={`network-ethereum ${className}`}
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        clipRule="evenodd"
        d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37259 18.6274 0 12 0C5.37258 0 -1.14441e-05 5.37259 -1.14441e-05 12C-1.14441e-05 18.6274 5.37258 24 12 24Z"
        fill="#25292E"
        fillRule="evenodd"
      />
      <path
        className="path"
        clipRule="evenodd"
        d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37259 18.6274 0 12 0C5.37258 0 -1.14441e-05 5.37259 -1.14441e-05 12C-1.14441e-05 18.6274 5.37258 24 12 24Z"
        fill="url(#paint0_linear_210_214)"
        fillOpacity="0.3"
        fillRule="evenodd"
      />
      <path
        className="path"
        d="M7.02 12.6607L12 15.607L16.979 12.6607L12 19.6793L7.02 12.6607Z"
        fill="url(#paint1_linear_210_214)"
      />
      <path className="path" d="M12 14.5095L7.02 11.5633L12 3.72001L16.98 11.5633L12 14.5095Z" fill="white" />
      <defs className="defs">
        <linearGradient
          className="linear-gradient"
          gradientUnits="userSpaceOnUse"
          id="paint0_linear_210_214"
          x1="-1.14441e-05"
          x2="12"
          y1="0"
          y2="24"
        >
          <stop className="stop" stopColor="white" />
          <stop className="stop" offset="1" stopColor="white" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          className="linear-gradient"
          gradientUnits="userSpaceOnUse"
          id="paint1_linear_210_214"
          x1="11.9995"
          x2="11.9995"
          y1="12.6607"
          y2="19.6793"
        >
          <stop className="stop" stopColor="white" />
          <stop className="stop" offset="1" stopColor="white" stopOpacity="0.9" />
        </linearGradient>
      </defs>
    </svg>
  );
};
