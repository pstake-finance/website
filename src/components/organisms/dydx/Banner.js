import React from "react";
import { useTranslation } from "next-i18next";
import Icon from "../../molecules/Icon";
import { ATOM_URL, DYDX, OSMO_URL } from "../../../utils/config";
import { decimalize, formatNumber } from "../../../utils/helpers";
import ButtonLink from "../../atoms/buttonLink/ButtonLink";
import { useApp } from "../../../context/appContext/AppContext";

const Banner = () => {
  const { t } = useTranslation("common");
  const { dydxData } = useApp();

  return (
    <div className="text-center aos-init aos-animate bg-dydxBanner bg-no-repeat bg-[#FCFBFE]">
      <div
        className="sectionContainer pt-[170px] pb-[100px]"
        data-aos="fade-up"
      >
        <div className="flex items-center justify-center">
          <img
            src={"/images/stk_dydx.svg"}
            className="w-[151px] h-[151px] md:w-[70px] md:h-[70px]"
            alt="Liquid ATOM Staking"
          />
        </div>
        <h1
          className="banner-heading font-bold text-[54px] leading-tight
        text-dark-black-high mt-4 md:text-[40px] sm:text-3xl"
        >
          Secure, Decentralized
          <br /> DYDX Liquid Staking
        </h1>
        <h6
          className="max-w-[700px] mx-auto mt-8 font-medium text-base
        text-[#393939] leading-loose sm:text-sm"
        >
          Liquid Stake DYDX with 30+ dYdX validators to enjoy the best of both
          worlds—DYDX staking rewards & stkDYDX DeFi opportunities.
        </h6>
        <div className="mt-8">
          <ButtonLink
            className={`w-[200px] mx-auto md:py-2 md:text-sm`}
            variant={"custom"}
            href={DYDX}
            scale="lg"
            customButtonClass="bg-dydxPrimary text-light-high"
            target={"_blank"}
            isDisabled={false}
            focusEffect={true}
          >
            {t("Liquid Stake DYDX Now")}
            <Icon
              viewClass="right-arrow w-[20px] fill-[#fff]"
              icon="right-arrow"
            />
          </ButtonLink>
        </div>
        <div className="my-6 hidden">
          <h6 className="font-bold text-[36px] sm:text-2xl text-dark-black-high leading-snug">
            {formatNumber(Number(dydxData.tvl), 3, 2)} DYDX
          </h6>
          <h6 className="text-lg sm:text-base text-[#838c9f] leading-snug">
            {t("TOTAL_VALUE_UNLOCKED")}
          </h6>
        </div>
      </div>
    </div>
  );
};

export default Banner;
//
// padding: 1px;
// background-origin: border-box;
// background-clip: content-box, border-box;
// border-radius: 5px;
// background-image: linear-gradient(to right, #232334, #232334), linear-gradient(to bottom, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0))
