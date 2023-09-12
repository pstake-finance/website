import React, { useEffect, useState } from "react";
import { APR_DEFAULT, ATOM_URL } from "../../../utils/config";
import ButtonLink from "../../atoms/buttonLink/ButtonLink";
import { useApp } from "../../../context/appContext/AppContext";

const Comparison = () => {
  const { cosmosData } = useApp();

  const tableData = [
    {
      title: "Native L2 liquid staking",
      staking: "Not available",
      liquidStake: "Available",
    },
    {
      title: "Bridge mechanism",
      staking: "Lock & mint",
      liquidStake: `Burn & mint`,
    },
    {
      title: "Efficiency",
      staking: "Low",
      liquidStake: "High",
    },
    {
      title: "Gas fee",
      staking: "High",
      liquidStake: "Low",
    },
    {
      title: "No. of transactions",
      staking: "Multiple txs",
      liquidStake: "Single txs",
    },
    {
      title: "UX",
      staking: "Complicated",
      liquidStake: "Simple",
    },
    {
      title: "Cross-chain liquid staking feature",
      staking: "Not available yet",
      liquidStake: "To be added soon",
    },
    {
      title: <></>,
      staking: <></>,
      liquidStake: (
        <>
          <ButtonLink
            className={`w-[200px] mx-auto md:py-2 md:text-sm`}
            variant={"custom"}
            href={ATOM_URL}
            scale="lg"
            customButtonClass="bg-ethPrimary text-light-high"
            target={"_blank"}
            isDisabled={false}
            focusEffect={true}
          >
            Go to app
          </ButtonLink>
        </>
      ),
    },
  ];
  return (
    <div className="bg-black-high" data-aos="fade-up">
      <div className="sectionContainer py-[65px] md:py-[35px]">
        <h3 className="sectionTitle mb-6 md:mb-4">
          Staking vs Liquid Staking ATOM
        </h3>
        <div className="list overflow-x-auto">
          <div className="flex w-full justify-center md:justify-start">
            <div className="type w-[350px] py-6 shrink-0" />
            <div
              className="bnb w-[350px] py-6 flex shrink-0
            flex-col justify-center items-center text-center"
            >
              <img
                src={"/images/eth.svg"}
                className="w-[36px] h-[36px] mb-2"
                alt="Liquid Staking"
              />
              <span className="text-light-high text-base font-medium">
                Other Liquid Staking solutions
              </span>
            </div>
            <div className="stk-bnb w-[350px] py-6 shrink-0 flex flex-col justify-center items-center text-center">
              <img
                src={"/images/stkEth_lg.svg"}
                className="w-[36px] h-[36px] mb-2"
                alt="Liquid Stake ATOM"
              />
              <span className="text-light-high text-base font-medium">
                pSTAKE’s stkETH v2
              </span>
            </div>
          </div>
          <div className="comparison rounded-md opacity-90">
            {tableData.map((item, index) => (
              <div
                className="item flex w-full justify-center md:justify-start"
                key={index}
              >
                <div
                  className="type w-[350px] py-6 px-12 shrink-0
                  bg-black-emphasis leading-snug text-sm text-[#70747c] font-medium text-left"
                >
                  {item.title}
                </div>
                <div
                  className="bnb w-[350px] py-6 px-12 shrink-0
                  bg-black-emphasis leading-snug text-sm text-[#dbd6d6] font-normal text-center"
                >
                  {item.staking}
                </div>
                <div
                  className="stk-bnb w-[350px] text-sm py-6 px-12 shrink-0
                  bg-black-emphasis leading-snug text-center text-[#dbd6d6] font-normal"
                >
                  {item.liquidStake}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comparison;
