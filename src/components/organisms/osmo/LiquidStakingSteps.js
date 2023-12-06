import React from "react";
import { ATOM_URL, OSMO_URL } from "../../../utils/config";

const LiquidStakingSteps = () => {
  const list = [
    {
      title: "Stake OSMO",
      icon: "step1",
      content:
        "Deposit any non-zero amount of OSMO to stake through pSTAKE’s diverse validator set (automated stake delegation and rebalancing) & earn staking rewards.",
    },
    {
      title: "Receive stkOSMO",
      icon: "step2",
      content:
        "Get liquid stkOSMO in return which increases in value relative to your staked amount every staking rewards epoch.",
    },
    {
      title: "Participate in DeFi",
      icon: "step3",
      content:
        "Put your stkOSMO to work across Osmosis and Cosmos Ecosystems with various opportunities in the DeFi tab on pSTAKE’s application.",
    },
  ];
  return (
    <>
      <div className="bg-[#140F34]">
        <div className="sectionContainer py-[65px] md:py-[35px]">
          <h3 className="sectionTitle mb-10">Liquid Staking OSMO</h3>
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
                  className="icon-box w-[70px] h-[70px] bg-[#1F1A42] cursor-pointer
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
