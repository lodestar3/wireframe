/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { AccountButton } from "../AccountButton";
import "./style.css";

export const DisplayFullWrapper = ({
  showAvatar = true,
  addy = "0xhab.eth",
  balance = "42.069 ETH",
  display,
  className,
}) => {
  return (
    <div className={`display-full-wrapper ${display} ${className}`}>
      {display === "full" && (
        <>
          <div className="text-wrapper">{balance}</div>
          <div className="account-info">
            {showAvatar && <AccountButton className="avatar" />}

            <div className="wallet-addy">
              <div className="text-wrapper">{addy}</div>
              <img className="img" alt="Icon" src="/img/icon-5.svg" />
            </div>
          </div>
        </>
      )}

      {display === "no-balance" && (
        <div className="account-info-2">
          {showAvatar && <AccountButton className="avatar" />}

          <div className="wallet-addy">
            <div className="text-wrapper">{addy}</div>
            <img className="img" alt="Icon" src="/img/icon-5.svg" />
          </div>
        </div>
      )}
    </div>
  );
};

DisplayFullWrapper.propTypes = {
  showAvatar: PropTypes.bool,
  addy: PropTypes.string,
  balance: PropTypes.string,
  display: PropTypes.oneOf(["full", "no-balance"]),
};
