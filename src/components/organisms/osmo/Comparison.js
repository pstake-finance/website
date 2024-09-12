import React from "react";
import { APR_DEFAULT, ATOM_URL } from "../../../utils/config";
import ButtonLink from "../../atoms/buttonLink/ButtonLink";

const Comparison = () => {
  const tableData = [
    {
      title: "What is it?",
      staking:
        "Act of locking ATOM for securing the Cosmos Hub to receive\n" +
        "                rewards",
      liquidStake:
        "Act of locking ATOM with a liquid staking protocol to secure the\n" +
        "                Cosmos Hub & receive a staked ATOM token to participate in\n" +
        "                Cosmos DeFi",
    },
    {
      title: "APR (after fees)",
      staking: "Average ~18.5 %",
      liquidStake: `Up to ~${APR_DEFAULT} %`,
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
      title: "Participation in Governance",
      staking: "Yes",
      liquidStake: "In subsequent upgrade after stkATOM launch",
    },
    {
      title: "Unstaking",
      staking:
        "Unbonding period of 21 days where no staking rewards are earned",
      liquidStake: "Directly swap for ATOM via a Liquidity Pool",
    },
    {
      title: "Drawbacks",
      staking: "Staked ATOM remains locked and inaccessible",
      liquidStake: "Additional smart contract risk with liquid staking ATOM",
    },
    {
      title: "Fees & Commissions",
      staking: "Average 7% on ATOM staking rewards",
      liquidStake: (
        <>
          0% on withdrawals & deposits <br /> 5% on ATOM staking rewards
        </>
      ),
    },
    {
      title: "Validator Delegation",
      staking: "You choose who to delegate to",
      liquidStake: "Your ATOM stake is divided equally among 62 validators",
    },
    {
      title: "Instant Redemption by skipping unbonding period",
      staking: "Not possible",
      liquidStake: "Only possible with pSTAKE",
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
            customButtonClass="bg-atomPrimary text-light-high"
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
                src={"/images/atom.svg"}
                className="w-[36px] h-[36px] mb-2"
                alt="Liquid ATOM Staking"
              />
              <span className="text-light-high text-base font-medium">
                Staking ATOM
              </span>
            </div>
            <div className="stk-bnb w-[350px] py-6 shrink-0 flex flex-col justify-center items-center text-center">
              <img
                src={"/images/stkAtom.svg"}
                className="w-[36px] h-[36px] mb-2"
                alt="Liquid Stake ATOM"
              />
              <span className="text-light-high text-base font-medium">
                Liquid Staking ATOM with pSTAKE
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
