/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const NetworkEthereum2 = ({
  color = "url(#paint0_linear_252_341)",
  fill = "url(#paint1_linear_252_341)",
  className,
}) => {
  return (
    <svg
      className={`network-ethereum-2 ${className}`}
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        clipRule="evenodd"
        d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37259 18.6274 0 12 0C5.37259 0 0 5.37259 0 12C0 18.6274 5.37259 24 12 24Z"
        fill="#25292E"
        fillRule="evenodd"
      />
      <path
        className="path"
        clipRule="evenodd"
        d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37259 18.6274 0 12 0C5.37259 0 0 5.37259 0 12C0 18.6274 5.37259 24 12 24Z"
        fill={color}
        fillOpacity="0.3"
        fillRule="evenodd"
      />
      <path className="path" d="M7.02002 12.6606L12 15.6069L16.9791 12.6606L12 19.6792L7.02002 12.6606Z" fill={fill} />
      <path className="path" d="M12 14.5098L7.02002 11.5635L12 3.72021L16.98 11.5635L12 14.5098Z" fill="white" />
      <defs className="defs">
        <linearGradient
          className="linear-gradient"
          gradientUnits="userSpaceOnUse"
          id="paint0_linear_252_64"
          x1="0"
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
          id="paint1_linear_252_64"
          x1="11.9995"
          x2="11.9995"
          y1="12.6606"
          y2="19.6792"
        >
          <stop className="stop" stopColor="white" />
          <stop className="stop" offset="1" stopColor="white" stopOpacity="0.9" />
        </linearGradient>
      </defs>
    </svg>
  );
};

NetworkEthereum2.propTypes = {
  color: PropTypes.string,
  fill: PropTypes.string,
};
