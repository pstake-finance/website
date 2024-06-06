import React from "react";
import ButtonLink from "../../atoms/buttonLink/ButtonLink";
import { useTranslation } from "next-export-i18n";
import Icon from "../../molecules/Icon";

const Token = () => {
  const { t } = useTranslation();
  return (
    <div className="bg-[#1B1B1B] aos-init aos-animate" data-aos="fade-up">
      <div className="container">
        <div className="flex flex-wrap justify-between py-[60px] max-w-[1240px] mx-auto">
          <div className={"max-w-[600px]"}>
            <p
              className={
                "font-bold text-[44px] md:text-[32px] text-[#fcfcfc] mb-6"
              }
            >
              {t("HOME_TOKEN_TITLE")}
            </p>
            <p
              className={"text-[18px] text-[#D5D5D5] md:text-[16px] mb-[48px]"}
            >
              {t("HOME_TOKEN_CONTENT")}
            </p>
            <div className={"flex items-center gap-6"}>
              <ButtonLink
                className={`!bg-[#EE972C4D] border !border-[#EE972C] !text-[#FEFEFE] dropDownButton py-3" md:text-sm !w-[293px] font-semibold !h-[48px] md:!w-[100%]`}
                variant={"outline"}
                href={"https://www.coingecko.com/en/coins/pstake-finance"}
                scale="lg"
                target={"_blank"}
                isDisabled={false}
              >
                <span className="nav-link pophover tooltip-multiline app-btn">
                  {t("GET_PSTAKE")}
                </span>
              </ButtonLink>
              <ButtonLink
                className={`!bg-transparent border-0  !text-[#EE972C] dropDownButton !px-0 py-3" md:text-sm !w-[293px] font-semibold !h-[48px] md:!w-[100%] group`}
                variant={"custom"}
                href={"https://forum.pstake.finance/"}
                scale="lg"
                target={"_blank"}
                isDisabled={false}
              >
                <span className="nav-link pophover tooltip-multiline app-btn">
                  {t("EXPLORE_GOVERNANCE")}
                </span>
                <Icon
                  viewClass="arrow-right w-[14px] ml-2 stroke-[#EE972C] group-hover:stroke-[#EE972C] fill-transparent"
                  icon="right-arrow2"
                />
              </ButtonLink>
            </div>
          </div>
          <div>
            <div className={"flex items-center"}>
              <img
                src={"/images/pstake_coin.svg"}
                alt={"pstake"}
                className="w-[270px] h-[270px] md:absolute md:top-0 md:opacity-[0.1] md:w-[200px]"
              />
              <img
                src={"/images/btc_coin.svg"}
                alt={"pstake"}
                className="w-[270px] h-[270px] md:absolute md:top-0 md:opacity-[0.1] md:w-[200px] -ml-[70px]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Token;
