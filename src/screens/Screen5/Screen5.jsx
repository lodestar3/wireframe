import React from "react";
import { Link } from "react-router-dom";
import { DisplayFullWrapper } from "../../components/DisplayFullWrapper";
import { NetworkButton } from "../../components/NetworkButton";
import { NetworkEthereum8 } from "../../icons/NetworkEthereum8";
import "./style.css";

export const Screen5 = () => {
  return (
    <div className="screen-5">
      <div className="frame-5">
        <div className="group-34">
          <div className="overlap-20">
            <div className="group-35">
              <div className="div-11">
                <div className="group-35">
                  <div className="div-11">
                    <div className="group-35">
                      <div className="div-11">
                        <div className="overlap-21">
                          <img className="line-12" alt="Line" src="/img/line-1.svg" />
                          <div className="group-36">
                            <Link className="text-wrapper-34" to="/frame-1711">
                              My Asset
                            </Link>
                            <div className="text-wrapper-35">About</div>
                            <Link className="group-37" to="/frame-1710">
                              <div className="text-wrapper-36">Demo</div>
                            </Link>
                            <div className="group-38">
                              <div className="text-wrapper-37">Create iNFTs</div>
                            </div>
                          </div>
                          <div className="div-12">
                            <div className="overlap-group-7">
                              <img className="vector-16" alt="Vector" src="/img/vector.svg" />
                              <img className="vector-17" alt="Vector" src="/img/vector-4.svg" />
                              <img className="vector-18" alt="Vector" src="/img/vector-2.svg" />
                            </div>
                            <div className="text-wrapper-38">Intelligent NFT</div>
                          </div>
                        </div>
                        <div className="overlap-22">
                          <div className="product-3">Create iNFTs</div>
                          <p className="clearspend-makes-3">
                            ClearSpend makes spend control and expense management easier, because
                            <br />
                            every dollar counts.
                          </p>
                        </div>
                      </div>
                    </div>
                    <img className="line-13" alt="Line" src="/img/line-3.svg" />
                    <img className="line-14" alt="Line" src="/img/line-2.svg" />
                  </div>
                </div>
                <div className="group-39">
                  <Link className="group-40" to="/frame-1713">
                    <img className="arrow-3" alt="Arrow" src="/img/arrow-1.svg" />
                    <div className="text-wrapper-39">Appearance</div>
                  </Link>
                  <div className="group-41">
                    <img className="arrow-3" alt="Arrow" src="/img/arrow-1.svg" />
                    <div className="text-wrapper-39">Character</div>
                  </div>
                  <Link className="group-42" to="/frame-1714">
                    <img className="arrow-3" alt="Arrow" src="/img/arrow-1.svg" />
                    <div className="text-wrapper-39">Voice</div>
                  </Link>
                  <div className="feature">FEATURE</div>
                  <img className="line-15" alt="Line" src="/img/line-3.svg" />
                </div>
                <img className="img-2" alt="Img" src="/img/621dceea99a5f2a54e5e192d-group-2099-1-1.svg" />
              </div>
            </div>
            <div className="connect-buttons-6">
              <NetworkButton
                className="design-component-instance-node-6"
                icon={
                  <NetworkEthereum8
                    className="network-ethereum-6"
                    color="url(#paint0_linear_252_324)"
                    fill="url(#paint1_linear_252_324)"
                  />
                }
                network="Ethereum"
              />
              <DisplayFullWrapper
                addy="0xhab.eth"
                balance="42.069 ETH"
                className="design-component-instance-node-6"
                display="full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
