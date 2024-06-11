import React from "react";
import { Link } from "react-router-dom";
import { DisplayFullWrapper } from "../../components/DisplayFullWrapper";
import { NetworkButton } from "../../components/NetworkButton";
import { NetworkEthereum4 } from "../../icons/NetworkEthereum4";
import "./style.css";

export const DivWrapper = () => {
  return (
    <div className="div-wrapper">
      <div className="frame-3">
        <div className="group-10">
          <div className="overlap-7">
            <div className="div-6">
              <div className="group-10">
                <div className="overlap-7">
                  <div className="div-6">
                    <div className="overlap-8">
                      <div className="overlap-9">
                        <img className="line-5" alt="Line" src="/img/line-1-2.svg" />
                        <img className="line-6" alt="Line" src="/img/line-2-2.svg" />
                      </div>
                      <div className="group-11">
                        <Link className="text-wrapper-16" to="/frame-1711">
                          My Asset
                        </Link>
                        <div className="text-wrapper-17">About</div>
                        <div className="group-12">
                          <div className="text-wrapper-18">Demo</div>
                        </div>
                        <Link className="group-13" to="/frame-1712">
                          <div className="text-wrapper-19">Create iNFTs</div>
                        </Link>
                      </div>
                      <div className="div-7">
                        <div className="overlap-group-4">
                          <img className="vector-7" alt="Vector" src="/img/vector-6.svg" />
                          <img className="vector-8" alt="Vector" src="/img/vector-7.svg" />
                          <img className="vector-9" alt="Vector" src="/img/vector-8.svg" />
                        </div>
                        <div className="text-wrapper-20">Intelligent NFT</div>
                      </div>
                    </div>
                    <div className="rectangle-2" />
                  </div>
                  <div className="rectangle-3" />
                  <img className="image-2" alt="Image" src="/img/image3-2.png" />
                </div>
              </div>
            </div>
            <div className="connect-buttons-3">
              <NetworkButton
                className="design-component-instance-node-3"
                icon={<NetworkEthereum4 className="network-ethereum-4" />}
                network="Ethereum"
              />
              <DisplayFullWrapper
                addy="0xhab.eth"
                balance="42.069 ETH"
                className="design-component-instance-node-3"
                display="full"
              />
            </div>
            <img className="element" alt="Element" src="/img/2024-06-11-9-39-1.png" />
          </div>
        </div>
      </div>
    </div>
  );
};
