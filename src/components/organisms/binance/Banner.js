import React, { useEffect, useState } from "react";
import Icon from "../../molecules/Icon";
import ButtonLink from "../../atoms/buttonLink/ButtonLink";
import { ATOM_URL, BNB_URL } from "../../../utils/config";

const Banner = ({ maxApy, tvl }) => {
  return (
    <div className="text-center aos-init aos-animate bg-bnbBanner bg-no-repeat">
      <div
        className="sectionContainer pt-[170px] pb-[100px]"
        data-aos="fade-up"
      >
        <div className="">
          <div className="flex items-center justify-center">
            <img
              src={"/images/stkBNB.svg"}
              className="w-[151px] h-[151px] md:w-[70px] md:h-[70px]"
              alt="stkBNB"
            />
          </div>

          <h1
            className="banner-heading font-bold text-[54px] leading-tight
        text-dark-black-high mt-6 md:text-[40px] sm:text-3xl"
          >
            Unlock Liquidity of BNB
          </h1>
          <h6
            className="max-w-[700px] mx-auto mt-6 font-medium text-base
        text-dark-black-high leading-loose sm:text-sm"
          >
            Enjoy the best of both worlds in the BNB ecosystem -{" "}
            <span className="font-semibold text-bnbPrimary">
              Earn upto {maxApy}%{" "}
            </span>{" "}
            in staking and DeFi yields when you stake your BNB with pSTAKE
          </h6>
          <div className="mt-8">
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
              Liquid Stake BNB
              <Icon
                viewClass="right-arrow w-[14px] fill-[#1B1B1B]"
                icon="right-arrow"
              />
            </ButtonLink>
          </div>
          <div className="my-6">
            <h6 className="font-bold text-[36px] sm:text-2xl text-dark-black-high leading-snug">
              {tvl} BNB
            </h6>
            <h6 className="text-lg sm:text-base text-[#838c9f] leading-snug">
              Total Value Unlocked(TVU)
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
