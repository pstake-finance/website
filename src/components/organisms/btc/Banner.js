import React from "react";
import { useTranslation } from "next-export-i18n";
import ButtonLink from "../../atoms/buttonLink/ButtonLink";

const Banner = () => {
  const { t } = useTranslation();
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
        text-dark-black-high mt-6 md:text-[40px] sm:text-3xl max-w-[900px] mx-auto "
        >
          {t("BTC_HERO_TITLE")}
          {/*Secure and Reliable Bitcoin*/}
          {/*<br /> Yields with BTC Liquid Staking*/}
        </h1>
        <h6
          className="max-w-[700px] mx-auto mt-6 font-medium text-base
        text-dark-black-high leading-loose sm:text-sm"
        >
          {t("BTC_HERO_SUB_TITLE")}
        </h6>
        <div className="mt-6 flex justify-center mx-auto gap-5">
          <ButtonLink
            className={`w-[200px] md:py-2 md:text-sm`}
            variant={"custom"}
            href={"https://app.btc.pstake.finance/"}
            scale="lg"
            customButtonClass="bg-btcPrimary text-light-high"
            target={"_blank"}
            isDisabled={false}
            focusEffect={false}
          >
            {t("STAKE_BITCOIN_NOW")}
          </ButtonLink>
        </div>
      </div>
    </div>
  );
};

export default Banner;
