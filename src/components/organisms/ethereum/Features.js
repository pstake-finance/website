import React from "react";
import Card from "react-bootstrap/Card";
import Icon from "../../molecules/Icon";

const Features = () => {
  const list = [
    {
      title: "Efficiency like never before",
      icon: "usecase2",
      content:
        "’Liquid staking’ and ‘L2s efficiency’ are a match made in heaven.\n" +
        "Unlock the efficiency of Staked ETH like never before, only with pSTAKE.",
    },
    {
      title: "Native L2 Liquid Staking",
      icon: "security",
      content:
        "For the first time, directly liquid stake ETH present on Arbitrum. \n" +
        "No need to bridge it back to Ethereum. No extra steps required. No time & gas fees lost.",
    },
    {
      title: "Convenience at your fingertips",
      icon: "cosmos",
      content:
        "Say goodbye to multiple txns & high fees with 1-click liquid staking on Layer 2s.",
    },
  ];
  return (
    <div className="bg-black-high">
      <div className="sectionContainer py-[65px] md:py-[35px]">
        <h3 className="sectionTitle mb-8 md:mb-6">
          Scaling Ethereum LSTfi to new heights
        </h3>
        <div className="flex flex-wrap">
          {list.map((item, index) => (
            <div
              className="-lg:basis-[33.3%] -lg:max-w-[33.3%] px-4 mt-4 pt-12 md:pt-4"
              data-aos="fade-up"
              key={index}
            >
              {index === 0 ? (
                <div className="feature-circle-red" />
              ) : index === 2 ? (
                <div className="feature-circle-two violet" />
              ) : null}
              <div
                className="bg-black-emphasis md:p-4 p-8 h-full opacity-90
              rounded-md border border-solid border-[#2a2c31]"
              >
                <div className="py-6">
                  <Icon
                    viewClass="use-case w-[34px] fill-[#5064fb]"
                    icon={item.icon}
                  />
                </div>
                <div className="content">
                  <p className="font-bold leading-snug text-base text-light-full mb-6">
                    {item.title}
                  </p>
                  <p className="font-normal text-sm leading-loose text-light-emphasis">
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
