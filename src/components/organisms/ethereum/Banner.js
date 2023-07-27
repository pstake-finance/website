import React from "react";
import { useTranslation } from "next-export-i18n";
import { ATOM_URL } from "../../../utils/config";
import Button from "../../atoms/button/Button";
import ButtonLink from "../../atoms/buttonLink/ButtonLink";

const Banner = () => {
  const { t } = useTranslation("common");
  return (
    <div className="text-center aos-init aos-animate bg-ethBanner bg-no-repeat">
      <div
        className="sectionContainer pt-[170px] pb-[100px]"
        data-aos="fade-up"
      >
        <div className="flex items-center justify-center">
          <img
            src={"/images/stkEth_lg.svg"}
            className="w-[151px] h-[151px] md:w-[70px] md:h-[70px]"
            alt="Liquid ATOM Staking"
          />
        </div>
        <h1
          className="banner-heading font-bold text-[54px] leading-tight
        text-dark-black-high mt-6 md:text-[40px] sm:text-3xl mb-2"
        >
          Join stkETH v2 Marvel Testnet
        </h1>
        <p className="text-[#C73238] text-lg font-semibold">
          stkETH v2 now LIVE on Testnet. Public. Incentivized.
        </p>
        <h6
          className="max-w-[700px] mx-auto mt-6 font-medium text-base
        text-dark-black-high leading-loose sm:text-sm"
        >
          Feelin’ lucky? Become one of the first DeFi users to natively liquid
          stake ETH on L2s— Arbitrum & Optimism and unlock the remarkable title
          of stkETH Marvel.
        </h6>
        <ButtonLink
          href={"https://testnet.app.pstake.finance/eth"}
          target={"_blank"}
          className={`w-[150px] mx-auto md:py-2 md:text-sm !bg-[#C73238] mt-8`}
        >
          Join Now
        </ButtonLink>
        <p className="text-dark-black-high mt-8">
          Claim your share of <b>$10,500</b> incentives and exclusive{" "}
          <b>&#34;stkETH Marvel&#34;</b> NFTs!
        </p>
      </div>
    </div>
  );
};

export default Banner;
