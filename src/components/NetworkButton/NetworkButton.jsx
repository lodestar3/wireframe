/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { NetworkEthereum } from "../../icons/NetworkEthereum";
import "./style.css";

export const NetworkButton = ({
  network = "Ethereum",
  showIcon = true,
  showName = true,
  className,
  icon = <NetworkEthereum className="icon" />,
}) => {
  return (
    <div className={`network-button ${className}`}>
      {showIcon && <>{icon}</>}

      <div className="div">
        {showName && <div className="ethereum">{network}</div>}

        <img className="icon" alt="Icon" src="/img/icon-2.svg" />
      </div>
    </div>
  );
};

NetworkButton.propTypes = {
  network: PropTypes.string,
  showIcon: PropTypes.bool,
  showName: PropTypes.bool,
};
