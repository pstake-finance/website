import React from "react";

const Features = () => {
  const list = [
    {
      title: "Say goodbye to illiquidity",
      icon: "liquidity",
      content:
        "Receive stkASSETs to maintain liquidity of otherwise locked PoS Asset when you stake.",
    },
    {
      title: "Safe, Secure, Solid / Security is our priority",
      icon: "redemption",
      content:
        "Maximum security is ensured through multi-layered measures, including multiple security audits, bug bounties, and on-chain monitoring.",
    },
    {
      title: "Maximise your capital efficiency",
      icon: "cash",
      content:
        "Generate the highest yields with staking rewards & various stkASSET DeFi opportunities, all while securing the underlying PoS chain.",
    },
  ];

  return (
    <div
      className="bg-homePageBg3 bg-cover bg-no-repeat aos-init aos-animate"
      data-aos="fade-up"
    >
      <div className="sectionContainer py-[65px] md:py-[35px]">
        <h3 className="sectionTitle mb-8">Why liquid stake with pSTAKE?</h3>
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
