import React from "react";
import ButtonLink from "../../atoms/buttonLink/ButtonLink";
import { PSTAKE_APP_URL } from "../../../utils/config";

const BitcoinBanner = () => {
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
      image: "/images/pstake_hand.svg",
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
      <div className="container py-[60px] md:py-[35px]">
        <div
          className={"flex gap-3 max-w-[1240px] mx-auto md:block items-center"}
        >
          <div className={"w-[40%] mr-auto"}>
            <img
              src={"/images/btc_stake.svg"}
              alt={"btc_stake"}
              className={"max-w-[360px] mr-auto"}
            />
          </div>
          <div className={"flex-1 max-w-[645px]"}>
            <p className="text-[40px] md:text-[32px] font-bold mb-0 text-[#FCFCFC] mb-[24px]">
              Bitcoin Liquid Staking is coming soon
            </p>
            <p className="text-[18px] md:text-[14px]  text-[#D5D5D5] mb-[44px]">
              pSTAKE Finance is building a premier BTC Liquid Staking solution
              in collaboration with Babylon.
            </p>
            <ButtonLink
              className={`hover:!bg-[#E509134D] dropDownButton py-3" md:text-base !w-[293px] font-semibold md:!h-[42px] !h-[48px] md:!w-[100%]`}
              variant={"outline"}
              href={PSTAKE_APP_URL}
              scale="lg"
              target={"_blank"}
              isDisabled={false}
            >
              <span className="nav-link pophover tooltip-multiline app-btn">
                Learn More
              </span>
            </ButtonLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BitcoinBanner;
