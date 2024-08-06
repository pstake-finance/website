import React from "react";
import { useTranslation } from "next-export-i18n";

const TokenSaleBanner = () => {
  const { t } = useTranslation("common");
  return (
    <div className="bg-[#1B1B1B]">
      <div className="container py-[60px] md:py-[35px]">
        <div
          className={"flex gap-3 max-w-[1140px] mx-auto md:block items-center"}
        >
            <p className="text-center text-[37px] lg:text-[24px] lg:leading-[40px] leading-[55px] font-semibold mb-0 text-[#FCFCFC]">
              {t("PSTAKE_TOKEN_SALE_TEXT")}
             <span className={"text-btcPrimary"}>{t("PSTAKE_TOKEN_SALE_TEXT2")} </span>
              {t("PSTAKE_TOKEN_SALE_TEXT3")}
            </p>
          </div>
      </div>
    </div>
  );
};

export default TokenSaleBanner;
