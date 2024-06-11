/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const AccountButton = ({ showAvatar = true, addy = "0xhab.eth", balance = "4.20 ETH", className }) => {
  return <div className={`account-button ${className}`} />;
};

AccountButton.propTypes = {
  showAvatar: PropTypes.bool,
  addy: PropTypes.string,
  balance: PropTypes.string,
};
