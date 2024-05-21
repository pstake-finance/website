import React from "react";
import { useTranslation } from "next-i18next";
import ButtonLink from "../../atoms/buttonLink/ButtonLink";
import { BNB_URL } from "../../../utils/config";

const Comparison = ({ bnbData }) => {
  const { t } = useTranslation("common");
  const tableData = [
    {
      title: "What is it?",
      staking:
        "Act of locking BNB for securing the BNB chain to receive\n" +
        "                  rewards",
      liquidStake:
        " Liquidity on staked BNB to enable its usage in DeFi dApps on\n" +
        "                  BSC",
    },
    {
      title: "APR (after fees)",
      staking: "Upto ~3.5%",
      liquidStake: bnbData.apy + `%`,
    },
    {
      title: "Minimum BNB Requirement",
      staking: "1 BNB",
      liquidStake: "0.000001 BNB",
    },
    {
      title: "Auto-compounding rewards",
      staking: "No",
      liquidStake: "Yes",
    },
    {
      title: "Liquidity",
      staking: "None",
      liquidStake: "High",
    },
    {
      title: "Risk",
      staking: "Low",
      liquidStake: "Medium",
    },
    {
      title: "Unstaking",
      staking: "Unbonding period of 7 days where no staking rewards are earned",
      liquidStake: " Directly swap for BNB via a Liquidity Pool",
    },
    {
      title: "Drawbacks",
      staking: "Staked BNB remains locked and inaccessible",
      liquidStake: "Additional smart contract risk",
    },
    {
      title: <></>,
      staking: <></>,
      liquidStake: (
        <>
          <ButtonLink
            className={`w-[200px] mx-auto md:py-2 md:text-sm`}
            variant={"custom"}
            href={BNB_URL}
            scale="lg"
            customButtonClass="bg-bnbPrimary text-dark-high"
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
    <div className="bg-black-high aos-init aos-animate" data-aos="fade-up">
      <div className="sectionContainer py-[65px] md:py-[35px]">
        <h3 className="sectionTitle mb-6 md:mb-4">Staking vs Liquid Staking</h3>
        <div className="list overflow-x-auto">
          <div className="flex w-full justify-center md:justify-start">
            <div className="type w-[350px] py-6 shrink-0" />
            <div
              className="bnb w-[350px] py-6 flex shrink-0
            flex-col justify-center items-center text-center"
            >
              <img
                src={"/images/networks/bnb.svg"}
                className="w-[36px] h-[36px] mb-2"
                alt="Liquid ATOM Staking"
              />
              <span className="text-light-high text-base font-medium">
                Staking BNB
              </span>
            </div>
            <div className="stk-bnb w-[350px] py-6 shrink-0 flex flex-col justify-center items-center text-center">
              <img
                src={"/images/stkBNB.svg"}
                className="w-[36px] h-[36px] mb-2"
                alt="Liquid Stake ATOM"
              />
              <span className="text-light-high text-base font-medium">
                Liquid Staking BNB with pSTAKE
              </span>
            </div>
          </div>
          <div className="comparison bnb rounded-md opacity-90">
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
