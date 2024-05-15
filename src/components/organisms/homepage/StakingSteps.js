import React from "react";

const StakingSteps = () => {
  const list = [
    {
      title: "Stake",
      icon: "1",
      content: "Stake any amount to get daily auto-compounded rewards",
    },
    {
      title: "Receive LSTT",
      icon: "2",
      content:
        "Get liquid LSTs in return. Pat yourself on the back for contributing to network decentralization.",
    },
    {
      title: "Use in DeFi",
      icon: "3",
      content:
        "Put your LST to work with various yield opportunities on pSTAKE’s DeFi tab.",
    },
  ];

  return (
    <div className="aos-init aos-animate" data-aos="fade-up">
      <div className="container pt-[60px] py-[70px] lg:py-[35px]">
        <p className="text-[40px] lg:text-[32px] text-center font-bold mb-0 text-[#FEFEFE] mb-[70px]">
          Liquid Staking as simple as 1, 2, 3
        </p>
        <div className="mb-6 max-w-[1240px] mx-auto ">
          <div
            className={
              "flex lg:mx-auto  lg:block items-center justify-center -lg:ml-[50px]"
            }
          >
            <div
              className={
                "flex items-center lg:flex-1 lg:mb-2 relative lg:justify-center lg:block"
              }
            >
              <div
                className={
                  "text-[#C7323880] -lg:absolute -lg:-left-[85px] -lg:-top-[56px] text-[78px] lg:text-[32px] mr-4 font-bold "
                }
              >
                01
              </div>
              <div className={""}>
                <p className="text-[#FCFCFC] font-semibold mb-3 text-[26px] leading-[39px]">
                  Stake Token
                </p>
                <p className="text-[#ECECEC] text-[14px] w-[220px] break-words leading-[21px] lg:w-fit">
                  Stake any amount of your tokens to get daily auto-compounded
                </p>
              </div>
            </div>
            <div
              className={`bg-[#ECECEC] w-[156px] h-[1px] mx-4 lg:mx-2 lg:hidden`}
            />
            <div
              className={
                "flex items-center lg:flex-1 lg:mb-2 relative lg:justify-center lg:block"
              }
            >
              <div
                className={
                  "text-[#C7323880] -lg:absolute -lg:-left-[105px] -lg:-top-[56px] text-[78px] mr-4 lg:text-[32px] font-bold"
                }
              >
                02
              </div>
              <div className={""}>
                <p className="text-[#FCFCFC] font-semibold mb-3 text-[26px] leading-[39px]">
                  Receive stkToken
                </p>
                <p className="text-[#ECECEC] text-[14px] w-[260px] break-words leading-[21px] lg:w-fit">
                  Get liquid stkToken in return. Pat yourself on the back for
                  contributing to network decentralization.
                </p>
              </div>
            </div>
            <div
              className={`bg-[#ECECEC] w-[156px] h-[1px] mx-4 lg:mx-2 lg:hidden `}
            />
            <div
              className={
                "flex items-center lg:flex-1 relative  lg:justify-center lg:block"
              }
            >
              <div
                className={
                  "text-[#C7323880] -lg:absolute -lg:-left-[105px] -lg:-top-[56px] text-[78px] lg:text-[32px] mr-4 font-bold"
                }
              >
                03
              </div>
              <div className={""}>
                <p className="text-[#FCFCFC] font-semibold mb-3 text-[26px] leading-[39px]">
                  Use in DeFi
                </p>
                <p className="text-[#ECECEC] text-[14px] w-[212px] break-words leading-[21px] lg:w-fit">
                  Put your stkToken to work with various yield opportunities on
                  pSTAKE’s DeFi tab.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StakingSteps;
