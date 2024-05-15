import React from "react";

const Features = () => {
  const list = [
    {
      title: "Decentralize your stake. Help the network state.",
      icon: "liquidity",
      image: "/images/galaxy.svg",
      content:
        "Deposits on pSTAKE Finance get staked with multiple validators with the help of a transparent, on-chain data-driven algorithm focused on chain decentralization.",
    },
    {
      title: "Yields. Yields. Yields. ",
      icon: "cash",
      image: "/images/pstake_yields.svg",
      content:
        "pSTAKE Finance offers one of the highest DeFi yields, thanks to low liquid staking fees and partnerships with the biggest DeFi ecosystems.",
    },
    {
      title: "Safe, Secure, and Solid.",
      icon: "redemption",
      image: "/images/pstake_shield.svg",
      content:
        "Leading blockchain security firms like Halborn, Hexens, Oak Security, Immunefi, Forta, and more help prosper secure liquid staking with pSTAKE Finance.",
    },
    {
      title: "Made for everyone from crypto bros to your grandma",
      icon: "cash",
      image: "/images/pstake_web.svg",
      content:
        "The only liquid staking protocol to be integrated with Ceffu Global (Binance Custody) and a simple and effective user experience makes pSTAKE Finance a friendly option for all. ",
    },
  ];

  return (
    <div className="aos-init aos-animate" data-aos="fade-up">
      <div className="container pt-[60px] py-[70px] md:py-[35px]">
        <p className="text-[40px] md:text-[32px] text-center font-bold mb-0 text-[#FEFEFE] mb-[60px]">
          Why Liquid Stake with pSTAKE?
        </p>
        <div className={"flex gap-3 max-w-[1240px] mx-auto md:block"}>
          <div className="flex flex-col gap-3 md:block">
            {list.slice(0, 2).map((item, index) => (
              <div
                className="-lg:max-w-[608px] border-[#000000] bg-[#1B1B1B] rounded-[8px] border
                bg-[#1B1B1B] border-[#3A3A3A] rounded-bl-md rounded-br-md md:mb-2"
                key={index}
              >
                <div className="icon-box">
                  <img
                    className="rounded-tl-lg rounded-tr-lg"
                    src={item.image}
                    title="Asset"
                    alt="Asset"
                  />
                </div>
                <div className={"px-6 py-8"}>
                  <h5 className="text-[#FCFCFC] text-[20px] font-semibold mb-4 leading-[30px]">
                    {item.title}
                  </h5>
                  <p className="text-left text-[#D5D5D5] text-base">
                    {item.content}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-col flex-wrap max-w-[1240px] mx-auto gap-3">
            {list.slice(2, list.length + 1).map((item, index) => (
              <div
                className={`${
                  index === 1 ? "flex-1" : "mb-[20px] md:mb-2"
                } -lg:max-w-[608px] border-[#000000] bg-[#1B1B1B] rounded-[8px] border bg-[#1B1B1B] border-[#3A3A3A] rounded-bl-md rounded-br-md md:mb-2`}
                key={index}
              >
                <div className="icon-box">
                  <img
                    className="rounded-tl-lg rounded-tr-lg"
                    src={item.image}
                    title="Asset"
                    alt="Asset"
                  />
                </div>
                <div className={"px-6 py-8"}>
                  <h5 className="text-[#FCFCFC] text-[20px] font-semibold mb-4 leading-[30px]">
                    {item.title}
                  </h5>
                  <p className="text-left text-[#D5D5D5] text-base">
                    {item.content}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
