import React from "react";
import ButtonLink from "../../atoms/buttonLink/ButtonLink";
import { useTranslation } from "next-export-i18n";

const BitcoinBanner = () => {
  const { t } = useTranslation("common");
  return (
    <div className="bg-[#1B1B1B] bg-bitcoinBannerBg bg-no-repeat">
      <div className="container py-[60px] md:py-[35px]">
        <div
          className={"flex gap-3 max-w-[1240px] mx-auto md:block items-center"}
        >
          <div className={"flex-1 max-w-[705px]"}>
            <p className="text-[43px] lg:text-[28px] lg:leading-[40px] leading-[64px] font-semibold mb-0 text-[#FCFCFC] mb-[12px]">
              {t("HOME_BITCOIN_TITLE")}
            </p>
            <p className="text-[20px] md:text-[14px]  text-[#D5D5D5] ">
              {t("HOME_BITCOIN_SUB_TITLE")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BitcoinBanner;
