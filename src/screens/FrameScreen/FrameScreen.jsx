import React from "react";
import { Link } from "react-router-dom";
import { DisplayFullWrapper } from "../../components/DisplayFullWrapper";
import { NetworkButton } from "../../components/NetworkButton";
import { NetworkEthereum3 } from "../../icons/NetworkEthereum3";
import "./style.css";

export const FrameScreen = () => {
  return (
    <div className="frame-screen">
      <div className="frame-2">
        <div className="overlap-group-wrapper">
          <div className="overlap-3">
            <div className="div-4">
              <div className="overlap-4">
                <div className="div-4">
                  <div className="overlap-5">
                    <div className="overlap-6">
                      <img className="line-3" alt="Line" src="/img/line-1-2.svg" />
                      <img className="line-4" alt="Line" src="/img/line-2-2.svg" />
                    </div>
                    <div className="group-6">
                      <div className="text-wrapper-9">My Asset</div>
                      <div className="text-wrapper-10">About</div>
                      <div className="group-7">
                        <div className="text-wrapper-11">Demo</div>
                      </div>
                      <div className="group-8">
                        <div className="text-wrapper-12">Create iNFTs</div>
                      </div>
                    </div>
                    <div className="div-5">
                      <div className="overlap-group-3">
                        <img className="vector-4" alt="Vector" src="/img/vector-6.svg" />
                        <img className="vector-5" alt="Vector" src="/img/vector-7.svg" />
                        <img className="vector-6" alt="Vector" src="/img/vector-8.svg" />
                      </div>
                      <div className="text-wrapper-13">Intelligent NFT</div>
                    </div>
                  </div>
                  <div className="rectangle" />
                </div>
                <div className="connect-buttons-2">
                  <NetworkButton
                    className="design-component-instance-node-2"
                    icon={<NetworkEthereum3 className="network-ethereum-3" />}
                    network="Ethereum"
                  />
                  <DisplayFullWrapper
                    addy="0xhab.eth"
                    balance="42.069 ETH"
                    className="design-component-instance-node-2"
                    display="full"
                  />
                </div>
              </div>
            </div>
            <div className="text-wrapper-14">Demo</div>
            <p className="p">You do not own any iNFTs. Please press the button below to acquire iNFTs</p>
            <Link to="/frame-1710">
              <button className="CTA">
                <div className="img-wrapper">
                  <img className="group-9" alt="Group" src="/img/group-61.png" />
                </div>
                <div className="text-wrapper-15">Get iNFTs</div>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
