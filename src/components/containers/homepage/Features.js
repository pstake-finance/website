import React from "react";

const Features = () => {
  const list = [
    {
      title: "Say goodbye to illiquidity",
      icon: "liquidity",
      content:
        "Receive stkAssets to maintain liquidity of otherwise locked PoS\n" +
        "                Asset when you stake",
    },
    {
      title: "Maximise your capital efficiency",
      icon: "cash",
      content:
        "Generate the highest yields with staking rewards & various\n" +
        "                stkAsset DeFi opportunities, all while securing the underlying\n" +
        "                PoS chain",
    },
    {
      title: "Redemption time?",
      icon: "redemption",
      content:
        "Skip unstaking and unbonding process of your Pos Asset by\n" +
        "                directly swapping stkAsset from a liquidity pool",
    },
  ];

  return (
    <div className="bg-homePageBg3 bg-cover bg-no-repeat aos-init aos-animate">
      <div className="sectionContainer py-[100px]">
        <h3 className="sectionTitle mb-6">Why liquid stake with pSTAKE?</h3>
        <p className="sectionSubTitle mb-16">
          Why choose between Staking or DeFi yield when you can do both with
          liquid staking?
        </p>
        <div className="flex flex-wrap">
          {list.map((item, index) => (
            <div
              className="-lg:basis-[33.3%] -lg:max-w-[33.3%] px-4 mt-4"
              key={index}
            >
              <div className="bg-black-emphasis md:p-4 p-8 h-full">
                <div className="icon-box">
                  <img
                    className="pt-4 pb-4 md:w-[26px] w-[34px]"
                    src={`/images/${item.icon}.svg`}
                    title="Asset"
                    alt="Asset"
                  />
                </div>
                <h5 className="text-light-full text-lg font-semibold my-4 ">
                  {item.title}
                </h5>
                <p className="text-left text-light-mid leading-loose text-base">
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

export default Features;
