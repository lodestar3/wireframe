import React from "react";
import { Link } from "react-router-dom";
import { DisplayFullWrapper } from "../../components/DisplayFullWrapper";
import { NetworkButton } from "../../components/NetworkButton";
import { NetworkEthereum8 } from "../../icons/NetworkEthereum8";
import "./style.css";

export const Screen4 = () => {
  return (
    <div className="screen-4">
      <div className="div-wrapper-2">
        <div className="group-20">
          <div className="div-wrapper-2">
            <div className="overlap-13">
              <div className="group-21">
                <div className="group-20">
                  <div className="overlap-14">
                    <div className="group-21">
                      <div className="overlap-15">
                        <div className="group-22">
                          <div className="overlap-14">
                            <div className="desktop-nav-product">
                              <div className="overlap-16">
                                <img className="line-9" alt="Line" src="/img/line-1-5.svg" />
                                <div className="group-23">
                                  <div className="text-wrapper-28">My Asset</div>
                                  <div className="text-wrapper-29">About</div>
                                  <Link className="group-24" to="/frame-1710">
                                    <div className="text-wrapper-30">Demo</div>
                                  </Link>
                                  <Link className="group-25" to="/frame-1712">
                                    <div className="text-wrapper-31">Create iNFTs</div>
                                  </Link>
                                </div>
                                <div className="div-10">
                                  <div className="overlap-group-6">
                                    <img className="vector-13" alt="Vector" src="/img/vector-15.svg" />
                                    <img className="vector-14" alt="Vector" src="/img/vector-16.svg" />
                                    <img className="vector-15" alt="Vector" src="/img/vector-17.svg" />
                                  </div>
                                  <div className="text-wrapper-32">Intelligent NFT</div>
                                </div>
                              </div>
                              <div className="rectangle-4" />
                            </div>
                            <img className="line-10" alt="Line" src="/img/line-2-5.svg" />
                            <div className="group-26">
                              <div className="group-27">
                                <div className="text-wrapper-33">Free</div>
                              </div>
                            </div>
                            <div className="group-28">
                              <div className="group-29">
                                <div className="text-wrapper-33">Holder</div>
                              </div>
                            </div>
                            <div className="my-asset">MY ASSET</div>
                            <img className="line-11" alt="Line" src="/img/line-3.svg" />
                          </div>
                        </div>
                        <div className="connect-buttons-5">
                          <NetworkButton
                            className="design-component-instance-node-5"
                            icon={
                              <NetworkEthereum8
                                className="network-ethereum-8"
                                color="url(#paint0_linear_252_99)"
                                fill="url(#paint1_linear_252_99)"
                              />
                            }
                            network="Ethereum"
                          />
                          <DisplayFullWrapper
                            addy="0xhab.eth"
                            balance="42.069 ETH"
                            className="design-component-instance-node-5"
                            display="full"
                          />
                        </div>
                        <div className="connect-buttons-5">
                          <NetworkButton
                            className="design-component-instance-node-5"
                            icon={
                              <NetworkEthereum8
                                className="network-ethereum-8"
                                color="url(#paint0_linear_252_398)"
                                fill="url(#paint1_linear_252_398)"
                              />
                            }
                            network="Ethereum"
                          />
                          <DisplayFullWrapper
                            addy="0xhab.eth"
                            balance="42.069 ETH"
                            className="design-component-instance-node-5"
                            display="full"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="group-30">
                      <div className="overlap-17">
                        <div className="rectangle-5" />
                        <img className="image-3" alt="Image" src="/img/image-2.png" />
                      </div>
                    </div>
                    <div className="group-31">
                      <div className="overlap-18">
                        <div className="rectangle-6" />
                        <img className="image-4" alt="Image" src="/img/image-1.png" />
                      </div>
                    </div>
                    <div className="group-32">
                      <div className="overlap-19">
                        <div className="rectangle-7" />
                        <img className="image-3" alt="Image" src="/img/image3-2.png" />
                      </div>
                    </div>
                    <div className="rectangle-8" />
                  </div>
                </div>
              </div>
              <div className="group-33">
                <div className="text-wrapper-33">Free</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
