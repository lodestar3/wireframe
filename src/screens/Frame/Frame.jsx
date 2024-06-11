import React from "react";
import { Link } from "react-router-dom";
import { DisplayFullWrapper } from "../../components/DisplayFullWrapper";
import { NetworkButton } from "../../components/NetworkButton";
import { NetworkEthereum2 } from "../../icons/NetworkEthereum2";
import "./style.css";

export const Frame = () => {
  return (
    <div className="frame">
      <div className="group-wrapper">
        <div className="group">
          <div className="overlap">
            <div className="div-2">
              <div className="group">
                <div className="overlap-wrapper">
                  <div className="overlap">
                    <div className="div-2">
                      <div className="overlap-group">
                        <img className="line" alt="Line" src="/img/line-1.svg" />
                        <div className="group-2">
                          <Link className="text-wrapper-2" to="/frame-1711">
                            My Asset
                          </Link>
                          <div className="text-wrapper-3">About</div>
                          <Link className="group-3" to="/frame-1710">
                            <div className="text-wrapper-4">Demo</div>
                          </Link>
                          <Link className="group-4" to="/frame-1712">
                            <div className="text-wrapper-5">Create iNFTs</div>
                          </Link>
                        </div>
                        <div className="div-3">
                          <div className="overlap-group-2">
                            <img className="vector" alt="Vector" src="/img/vector.svg" />
                            <img className="vector-2" alt="Vector" src="/img/vector-4.svg" />
                            <img className="vector-3" alt="Vector" src="/img/vector-2.svg" />
                          </div>
                          <div className="text-wrapper-6">Intelligent NFT</div>
                        </div>
                      </div>
                      <div className="overlap-2">
                        <div className="product">{""}</div>
                        <div className="clearspend-makes">{""}</div>
                      </div>
                    </div>
                    <div className="text-wrapper-7">Create iNFTs</div>
                    <div className="group-5">
                      <img className="arrow" alt="Arrow" src="/img/arrow-1.svg" />
                      <div className="text-wrapper-8">Voice</div>
                    </div>
                    <div className="connect-buttons">
                      <NetworkButton
                        className="design-component-instance-node"
                        icon={
                          <NetworkEthereum2
                            className="network-ethereum"
                            color="url(#paint0_linear_252_341)"
                            fill="url(#paint1_linear_252_341)"
                          />
                        }
                        network="Ethereum"
                      />
                      <DisplayFullWrapper
                        addy="0xhab.eth"
                        balance="42.069 ETH"
                        className="design-component-instance-node"
                        display="full"
                      />
                    </div>
                    <img className="line-2" alt="Line" src="/img/line-2.svg" />
                  </div>
                </div>
              </div>
            </div>
            <img className="image" alt="Image" src="/img/image-4.png" />
          </div>
        </div>
      </div>
    </div>
  );
};
