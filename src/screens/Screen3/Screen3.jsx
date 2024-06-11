import React from "react";
import { Link } from "react-router-dom";
import { DisplayFullWrapper } from "../../components/DisplayFullWrapper";
import { NetworkButton } from "../../components/NetworkButton";
import { NetworkEthereum2 } from "../../icons/NetworkEthereum2";
import "./style.css";

export const Screen3 = () => {
  return (
    <div className="screen-3">
      <div className="frame-4">
        <div className="group-14">
          <div className="overlap-10">
            <div className="div-8">
              <div className="group-15">
                <div className="overlap-10">
                  <div className="div-8">
                    <div className="overlap-11">
                      <img className="line-7" alt="Line" src="/img/line-1.svg" />
                      <div className="group-16">
                        <Link className="text-wrapper-21" to="/frame-1711">
                          My Asset
                        </Link>
                        <div className="text-wrapper-22">About</div>
                        <Link className="group-17" to="/frame-1710">
                          <div className="text-wrapper-23">Demo</div>
                        </Link>
                        <Link className="group-18" to="/frame-1712">
                          <div className="text-wrapper-24">Create iNFTs</div>
                        </Link>
                      </div>
                      <div className="div-9">
                        <div className="overlap-group-5">
                          <img className="vector-10" alt="Vector" src="/img/vector.svg" />
                          <img className="vector-11" alt="Vector" src="/img/vector-4.svg" />
                          <img className="vector-12" alt="Vector" src="/img/vector-2.svg" />
                        </div>
                        <div className="text-wrapper-25">Intelligent NFT</div>
                      </div>
                    </div>
                    <div className="overlap-12">
                      <div className="product-2">{""}</div>
                      <div className="clearspend-makes-2">{""}</div>
                    </div>
                  </div>
                  <div className="text-wrapper-26">Create iNFTs</div>
                  <div className="group-19">
                    <img className="arrow-2" alt="Arrow" src="/img/arrow-1.svg" />
                    <div className="text-wrapper-27">Appearance</div>
                  </div>
                  <div className="connect-buttons-4">
                    <NetworkButton
                      className="design-component-instance-node-4"
                      icon={
                        <NetworkEthereum2
                          className="network-ethereum-2"
                          color="url(#paint0_linear_252_64)"
                          fill="url(#paint1_linear_252_64)"
                        />
                      }
                      network="Ethereum"
                    />
                    <DisplayFullWrapper
                      addy="0xhab.eth"
                      balance="42.069 ETH"
                      className="design-component-instance-node-4"
                      display="full"
                    />
                  </div>
                  <img className="line-8" alt="Line" src="/img/line-2.svg" />
                </div>
              </div>
            </div>
            <img className="element-2" alt="Element" src="/img/1.png" />
          </div>
        </div>
      </div>
    </div>
  );
};
