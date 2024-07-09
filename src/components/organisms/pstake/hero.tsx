import React from "react";
import { useTranslation } from "next-export-i18n";
import ButtonLink from "../../atoms/buttonLink/ButtonLink";
import { useApp } from "../../../context/appContext/AppContext";
import { PSTAKE_APP_URL } from "../../../utils/config";
import Investors from "../homepage/Investors";

const HeroSection = () => {
  const { t } = useTranslation();
  const { cosmosData } = useApp();

  return (
    <div className="text-center aos-init aos-animate">
      <div
        className="sectionContainer pt-[170px] pb-[100px] lg:pb-[40px]"
        data-aos="fade-up"
      >
        <h1
          className="banner-heading font-medium text-[80px] leading-[100px]
        text-light-full mt-6 lg:text-[40px] lg:leading-normal sm:text-[28px] max-w-[940px] mx-auto "
        >
          <span className={"text-btcPrimary"}>{t("PSTAKE_HERO_TITLE_ONE")}</span>
          {t("PSTAKE_HERO_TITLE_TWO")}
          <span className={"text-btcPrimary"}>{t("PSTAKE_HERO_TITLE_THREE")}</span>
        </h1>
        <h6
          className="max-w-[940px] mx-auto my-[32px] font-light text-[32px]
        text-[#ADADAD] leading-[40px] lg:text-[18px] lg:leading-normal "
        >
          {t("PSTAKE_HERO_CONTENT")}
        </h6>
        <div className={"flex items-center gap-6 md:flex-col justify-center"}>
          <ButtonLink
            className={`!rounded-[8px] !bg-[#F6931A1A] hover:!bg-[#F6931A4D] border !border-[#EE972C] !text-[#FEFEFE] dropDownButton py-3 md:text-base !w-[240px] font-semibold md:!h-[42px] !h-[48px] md:!w-[100%]`}
            variant={"outline"}
            href={"https://app.btc-testnet.pstake.finance/"}
            scale="lg"
            target={"_blank"}
            isDisabled={false}
          >
              <span className="nav-link pophover tooltip-multiline app-btn">
                {t("EXPLORE_BTC_TESTNET")}
              </span>
          </ButtonLink>
          <ButtonLink
            className={`!rounded-[8px] hover:!bg-[#F6931A4D] border !border-[#EE972C] !text-[#FEFEFE] dropDownButton !px-0 py-3" md:text-sm !w-[240px] font-semibold !h-[48px] md:!w-[100%] group`}
            variant={"custom"}
            href={PSTAKE_APP_URL}
            scale="lg"
            target={"_blank"}
            isDisabled={false}
          >
                <span className="nav-link pophover tooltip-multiline app-btn">
                {t("LIQUID_STAKE_NOW")}
                </span>
          </ButtonLink>
        </div>
        <div className={' bg-no-repeat pt-[60px]'}>
          <div className={"flex items-center justify-center"}>
            <img
              src={"/images/pstake_hero.svg"}
            />
          </div>
          <div className={""}>
            <div
              className="max-w-[1220px] mx-auto px-6 py-8 bg-[#FAFAFA1A] border-[0.3px] border-[#FAFAFA] rounded-[24px] flex gap-[76px] items-center justify-between
              lg:flex-col lg:justify-start lg:items-start lg:gap-[30px]">
              <div className={"flex-1"}>
                <p
                  className={"text-[72px] leading-[90px] lg:text-[30px] lg:leading-normal font-semibold text-light-full lg:text-left"}>$50M</p>
                <p
                  className={"text-[32px] leading-[40px] lg:text-[20px] lg:leading-normal font-light text-light-full lg:text-left"}> {t("MARKET_CAP")}</p>
              </div>
              <div className={"flex-1"}>
                <p
                  className={"text-[72px] leading-[90px] lg:text-[30px] lg:leading-normal font-semibold text-light-full lg:text-left"}>0%</p>
                <p
                  className={"text-[32px] leading-[40px] lg:text-[20px] lg:leading-normal font-light text-light-full lg:text-left"}> {t("INFLATION")}</p>
              </div>
              <div className={"flex-1"}>
                <p
                  className={"text-[72px] leading-[90px] lg:text-[30px] lg:leading-normal font-semibold text-light-full lg:text-left"}>94%</p>
                <p
                  className={"text-[32px] leading-[40px] lg:text-[20px] lg:leading-normal font-light text-light-full lg:text-left"}> {t("UNLOCKED_VESTED")}</p>
              </div>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
};

export default HeroSection;
