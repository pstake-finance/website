import React from "react";
import { ATOM_URL, OSMO_URL } from "../../../utils/config";

const LiquidStakingSteps = () => {
  const list = [
    {
      title: "Stake DYDX",
      icon: "step1",
      content:
        "Connect your wallet and deposit any non-zero amount of DYDX on pSTAKE.",
    },
    {
      title: "Receive stkDYDX",
      icon: "step2",
      content:
        "Get liquid stkDYDX in return. Pat yourself on the back for contributing to the dYdX chain decentralization, as your stake is now delegated to 30+ validators.",
    },
    {
      title: "Participate in DeFi",
      icon: "step3",
      content:
        "Find various yield opportunities to put your stkDYDX to work through pSTAKE’s DeFi tab. stkDYDX’s value will increase daily as DYDX and USDC staking rewards are auto-compounded.",
    },
  ];
  return (
    <>
      <div className="bg-[#1C1C28]">
        <div className="sectionContainer py-[65px] md:py-[35px] bg-no-repeat">
          <div className="sectionTitle mb-10 relative">
            <h3 className={"inline-flex relative"}>
              Liquid Staking DYDX{" "}
              <img
                src={`/images/sparkle.svg`}
                alt="Liquid ATOM Staking"
                className={"absolute -right-[40px] -top-[24px]"}
              />
            </h3>
          </div>
          <div className="flex flex-wrap">
            {list.map((item, index) => (
              <div
                className="-lg:basis-[33.3%] -lg:max-w-[33.3%] px-4 mt-4"
                data-aos="fade-up"
                key={index}
              >
                <a
                  href={OSMO_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="icon-box w-[70px] h-[70px] bg-[#36364F] cursor-pointer
                  rounded-2xl flex items-center justify-center mx-auto mb-8"
                >
                  <img
                    src={`/images/steps/${item.icon}.svg`}
                    alt="Liquid ATOM Staking"
                  />
                </a>
                <div className="text-center px-4">
                  <p className="font-bold leading-snug text-light-high text-lg my-4 text-center">
                    {item.title}
                  </p>
                  <p className="text-sm text-center text-[#E0E0E0] leading-loose">
                    {item.content}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default LiquidStakingSteps;
