import React from "react";
import { useTranslation } from "next-export-i18n";
import Icon from "../../molecules/Icon";
import { ATOM_URL } from "../../../utils/config";
import { decimalize, formatNumber } from "../../../utils/helpers";
import ButtonLink from "../../atoms/buttonLink/ButtonLink";
import { useApp } from "../../../context/appContext/AppContext";

const Banner = () => {
  const { t } = useTranslation("common");
  const { cosmosData } = useApp();

  return (
    <div className="text-center aos-init aos-animate bg-atomBanner bg-no-repeat">
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
        text-dark-black-high mt-6 md:text-[40px] sm:text-3xl"
        >
          L2 Native ETH Liquid Staking
        </h1>
        <h6
          className="max-w-[700px] mx-auto mt-6 font-medium text-base
        text-dark-black-high leading-loose sm:text-sm"
        >
          A new way to liquid stake ETH on Arbitrum. <br />
          Simple. Convenient. Efficient. Fast.
        </h6>
        <div className="mt-8">
          <ButtonLink
            className={`w-[200px] mx-auto md:py-2 md:text-sm`}
            variant={"custom"}
            href={ATOM_URL}
            scale="lg"
            customButtonClass="bg-ethPrimary text-light-high"
            target={"_blank"}
            isDisabled={false}
            focusEffect={true}
          >
            {t("Liquid Stake ETH Now")}
            <Icon
              viewClass="right-arrow w-[14px] fill-[#fff]"
              icon="right-arrow"
            />
          </ButtonLink>
        </div>
        <div className="my-6">
          <h6 className="font-bold text-[36px] sm:text-2xl text-dark-black-high leading-snug">
            {formatNumber(Number(cosmosData.tvl), 3, 2)} ATOM
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
