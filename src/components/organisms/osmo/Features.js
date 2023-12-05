import React from "react";
import Card from "react-bootstrap/Card";
import Icon from "../../molecules/Icon";

const Features = () => {
  const list = [
    {
      title: "Decentralize your OSMO stake",
      icon: "usecase1",
      content:
        "Your OSMO deposits on pSTAKE get staked with 75 Osmosis validators in the background based on on-chain data that optimizes for decentralization",
    },
    {
      title: "Get OSMO liquidity in a flash",
      icon: "usecase2",
      content:
        "Swap stkOSMO on Osmosis or use pSTAKE's unique Flash Unstake feature to receive liquid OSMO.",
    },
    {
      title: "Safe, Secure, and Solid OSMO liquid staking",
      icon: "usecase3",
      content:
        "pSTAKE’s implementation on the Persistence core-1 chain is audited by leading security firms like Halborn and Oak Security with an active Immunefi Bug Bounty program",
    },
  ];
  return (
    <div className="bg-[#140F34]">
      <div className="sectionContainer py-[65px] md:py-[35px]">
        <h3 className="sectionTitle mb-8 md:mb-6">
          Why liquid stake your <br /> OSMO with pSTAKE?
        </h3>
        <div className="flex flex-wrap">
          {list.map((item, index) => (
            <div
              className="-lg:basis-[33.3%] -lg:max-w-[33.3%] px-4 mt-4 pt-12 md:pt-4"
              data-aos="fade-up"
              key={index}
            >
              {index === 0 ? (
                <div className="feature-circle-one purple" />
              ) : index === 2 ? (
                <div className="feature-circle-two purple" />
              ) : null}
              <div
                className="bg-[#201B43] md:p-4 p-8 h-full opacity-90
              rounded-md"
              >
                <div className="py-6">
                  <Icon
                    viewClass="use-case w-[34px] fill-[#FFFFFF]"
                    icon={item.icon}
                  />
                </div>
                <div className="content">
                  <p className="font-bold leading-snug text-[18px] text-light-high mb-6">
                    {item.title}
                  </p>
                  <p className="font-normal text-sm leading-loose text-[#E0E0E0]">
                    {item.content}
                  </p>
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
