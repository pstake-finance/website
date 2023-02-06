import React from "react";
import { ATOM_URL } from "../../../utils/config";

const LiquidStakingSteps = () => {
  const list = [
    {
      title: "Liquid Stake ATOM",
      icon: "stake_atom",
      content:
        "Deposit any non-zero amount of ATOM to stake through pSTAKE’s\n" +
        "                  diverse validator set & earn staking rewards",
    },
    {
      title: "Receive stkATOM",
      icon: "receive_stkatom",
      content:
        "Get liquid stkATOM in return which increases in value relative\n" +
        "                  to your staked amount every staking rewards epoch",
    },
    {
      title: "Participate in DeFi",
      icon: "participate_in_defi",
      content:
        " Put your stkATOM to work in the Cosmos Ecosystem with various\n" +
        "                  opportunities in the DeFi tab on pSTAKE’s application",
    },
  ];
  return (
    <>
      <div className="bg-black-high aos-init aos-animate" data-aos="fade-up">
        <div className="sectionContainer py-[65px] md:py-[35px]">
          <h3 className="sectionTitle mb-10">Liquid Staking ATOM in 1, 2, 3</h3>
          <div className="flex flex-wrap">
            {list.map((item, index) => (
              <div
                className="-lg:basis-[33.3%] -lg:max-w-[33.3%] px-4 mt-4"
                data-aos="fade-up"
                key={index}
              >
                <a
                  href={ATOM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="icon-box w-[70px] h-[70px] bg-black-emphasis
                  hover:shadow-[0_4px_16px_#5064fb] cursor-pointer
                  rounded-2xl flex items-center justify-center mx-auto"
                >
                  <img
                    src={`/images/steps/${item.icon}.svg`}
                    alt="Liquid ATOM Staking"
                  />
                </a>
                <div className="text-center px-4">
                  <p className="font-bold leading-snug text-light-full text-lg my-4 text-center">
                    {item.title}
                  </p>
                  <p className="text-sm text-center text-light-mid leading-loose">
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
