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
    <div className="aos-init aos-animate bg-black-high" data-aos="fade-up">
      <div className="sectionContainer py-[65px] md:py-[35px]">
        <h3 className="sectionTitle mb-8">
          Liquid Staking as simple as 1, 2, 3
        </h3>
        <div className="flex flex-wrap">
          {list.map((item, index) => (
            <div
              className="-lg:basis-[33.3%] -lg:max-w-[33.3%] px-4 mt-4"
              key={index}
            >
              <div className="md:p-4 p-8 h-full text-center">
                <div className="bg-black-400 rounded-full w-[60px] h-[60px] m-auto flex justify-center items-center">
                  <span className="text-3xl font-bold leading-normal text-center text-red">
                    {item.icon}
                  </span>
                </div>
                <h5 className="font-bold leading-snug text-light-full text-base my-4">
                  {item.title}
                </h5>
                <p className="text-sm text-center text-light-emphasis">
                  {item.content}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StakingSteps;
