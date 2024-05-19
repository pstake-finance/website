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
    <div className="text-center aos-init aos-animate bg-btcBanner bg-no-repeat">
      <div
        className="sectionContainer pt-[170px] pb-[100px]"
        data-aos="fade-up"
      >
        <div className="flex items-center justify-center">
          <img
            src={"/images/btc_coin.svg"}
            className="w-[151px] h-[151px] md:w-[70px] md:h-[70px]"
            alt="Liquid ATOM Staking"
          />
        </div>
        <h1
          className="banner-heading font-bold text-[54px] leading-tight
        text-dark-black-high mt-6 md:text-[40px] sm:text-3xl"
        >
          Secure and Reliable Bitcoin
          <br /> Yields with BTC Liquid Staking
        </h1>
        <h6
          className="max-w-[700px] mx-auto mt-6 font-medium text-base
        text-dark-black-high leading-loose sm:text-sm"
        >
          Liquid Stake BTC to get rewards from Babylon&apos;s staking protocol
          for securing multiple app chains while maintaining your liquidity.
        </h6>
        <div className="mt-6 flex justify-center mx-auto gap-5">
          <ButtonLink
            className={`w-[200px] md:py-2 md:text-sm`}
            variant={"custom"}
            href={"/"}
            scale="lg"
            customButtonClass="bg-btcPrimary text-light-high"
            target={"_blank"}
            isDisabled={true}
            focusEffect={false}
          >
            Coming Soon
          </ButtonLink>
          <ButtonLink
            className={`w-[200px] md:py-2 md:text-sm !border-[#EE972C] hover:!bg-btcPrimary !bg-transparent !text-dark-high`}
            variant={"outline"}
            href={
              "https://blog.pstake.finance/2024/05/15/pstake-finance-to-launch-btc-liquid-staking-in-collaboration-with-babylon/"
            }
            scale="lg"
            customButtonClass="  !text-black-high"
            target={"_blank"}
            isDisabled={false}
            focusEffect={false}
          >
            Learn More
          </ButtonLink>
        </div>
      </div>
    </div>
  );
};

export default Banner;
