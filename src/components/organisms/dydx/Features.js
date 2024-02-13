import React from "react";
import Card from "react-bootstrap/Card";
import Icon from "../../molecules/Icon";

const Features = () => {
  const list = [
    {
      title: "Decentralize your DYDX stake. And the dYdX chain.",
      icon: "dydx_usecase1",
      content:
        "DYDX deposits on pSTAKE get staked with 30+ dYdX validators with the help of a transparent, on-chain data-driven algorithm focused on chain decentralization.",
    },
    {
      title: "Built for DYDX. Built On Persistence One.",
      icon: "dydx_usecase2",
      content:
        "Never worry about repeatedly claiming rewards with no-click auto compounding of DYDX and USDC staking rewards with stkDYDX. Enjoy 0% fees for DYDX liquid staking until April 2024.",
    },
    {
      title: "Safe, Secure, and Solid.",
      icon: "dydx_usecase3",
      content:
        "Liquid staking with pSTAKE is audited by leading security firms like Halborn and Notional, along with an active Immunefi Bug Bounty program. stkDYDX is also audited separately by Oak Security.",
    },
    {
      title: "Get DYDX liquidity in a flash",
      icon: "dydx_usecase4",
      content:
        "Swap stkDYDX on DEXs like Dexter or use pSTAKE’s unique Flash Unstake feature to get liquid DYDX.",
    },
  ];
  return (
    <div className="bg-[#1C1C28]">
      <div className="sectionContainer py-[65px] md:py-[35px] dydx-usecase">
        <h3 className="sectionTitle mb-8 md:mb-6">
          Why Liquid Stake your <br /> DYDX with pSTAKE?
        </h3>
        <div className="flex flex-wrap">
          {list.map((item, index) => (
            <div
              className={`-lg:basis-[25%] -lg:max-w-[25%] px-3 mt-4 pt-12 md:pt-4`}
              data-aos="fade-up"
              key={index}
            >
              {index === 0 ? (
                <div className="feature-circle-one lavender" />
              ) : index === 3 ? (
                <div className="feature-circle-two lavender" />
              ) : null}
              <div
                className="bg-[#232334] md:p-4 h-full z-100 relative
              rounded-md box"
              >
                <div className={"p-6"}>
                  <div className="py-6">
                    <Icon
                      viewClass="use-case w-[34px] fill-[#FFFFFF]"
                      icon={item.icon}
                    />
                  </div>
                  <div className="content">
                    <p
                      className={`font-bold leading-snug text-light-high ${
                        index === 2 || index === 3 ? "mb-11" : "mb-6 "
                      }`}
                    >
                      {item.title}
                    </p>
                    <p className="font-normal text-sm leading-loose text-[#E0E0E0]">
                      {item.content}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
