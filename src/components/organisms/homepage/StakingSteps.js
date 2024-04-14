import React from "react";

const StakingSteps = () => {
  const list = [
    {
      title: "Stake your PoS ASSET",
      icon: "1",
      content:
        "Select a non-zero amount of tokens to stake through pSTAKE’s\n" +
        "                  robust validator set & earn staking rewards",
    },
    {
      title: "Receive stkASSET",
      icon: "2",
      content:
        " Get your stkASSET token which increases in value relative to\n" +
        "                your staked amount each epoch from staking rewards",
    },
    {
      title: "Participate in DeFi",
      icon: "3",
      content:
        "Put your stkASSET to work with various opportunities in the DeFi\n" +
        "                tab on pSTAKE’s application",
    },
  ];

  return (
    <div className="aos-init aos-animate" data-aos="fade-up">
      <div className="container pt-[60px] py-[70px] md:py-[35px]">
        <p className="text-[40px] text-center font-bold mb-0 text-[#FEFEFE] mb-[47px]">
          Liquid Staking as simple as 1, 2, 3
        </p>
        <div className="flex items-center justify-center mb-6 md:block max-w-[1240px] mx-auto md:mx-auto ">
          <div
            className={
              "flex items-center md:flex-1 md:mb-2 relative md:justify-start"
            }
          >
            <div
              className={
                "text-[#C7323880] -lg:absolute -lg:-left-[65px] -lg:-top-[38px] -lg:text-[52px] text-[78px] mr-4 font-bold"
              }
            >
              01
            </div>
            <div className={""}>
              <p className="text-light-full font-medium mb-3">Stake Token</p>
              <p className="text-[#ECECEC] text-[12px]">
                Stake any amount of your
                <br /> tokens to get daily <br />
                auto-compounded
              </p>
            </div>
          </div>
          <div
            className={`bg-[#ECECEC] w-[156px] h-[1px] mx-4 md:mx-2 md:hidden`}
          />
          <div
            className={
              "flex items-center md:flex-1 md:mb-2 relative md:justify-start"
            }
          >
            <div
              className={
                "text-[#C7323880] -lg:absolute -lg:-left-[75px] -lg:-top-[38px] -lg:text-[52px] text-[78px] mr-4 font-bold"
              }
            >
              02
            </div>
            <div className={""}>
              <p className="text-light-full font-medium mb-3">
                Receive stkToken
              </p>
              <p className="text-[#ECECEC] text-[12px]">
                Get liquid stkToken in return. Pat
                <br /> yourself on the back for
                <br />
                contributing to network
                <br /> decentralization.
              </p>
            </div>
          </div>
          <div
            className={`bg-[#ECECEC] w-[156px] h-[1px] mx-4 md:mx-2 md:hidden `}
          />
          <div
            className={"flex items-center md:flex-1 relative md:justify-start"}
          >
            <div
              className={
                "text-[#C7323880] -lg:absolute -lg:-left-[75px] -lg:-top-[38px] -lg:text-[52px] text-[78px] mr-4 font-bold"
              }
            >
              03
            </div>
            <div className={""}>
              <p className="text-light-full font-medium mb-3">Use in DeFi</p>
              <p className="text-[#ECECEC] text-[12px]">
                Put your stkToken to work with <br /> various yield
                opportunities on
                <br /> pSTAKE’s DeFi tab.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StakingSteps;
