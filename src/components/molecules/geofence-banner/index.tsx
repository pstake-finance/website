import React, { useState } from "react";
import Icon from "../Icon";
import { useTranslation } from "next-export-i18n";

const GeofenceNotice = () => {
  const { t } = useTranslation();
  const [banner, setBanner] = useState(true);
  const closeBanner = () => {
    setBanner(false);
  };
  return (
    <div
      className={
        !banner
          ? "hidden"
          : "top-banner-section bg-[#EE972C] bg-contain bg-no-repeat py-2.5 pr-12 pl-4"
      }
    >
      <p className="text-[#1D1D22] text-[12px] font-semibold flex items-center flex-wrap text-center justify-center">
        <a
          className="link flex items-center"
          href={"https://app.btc.pstake.finance/"}
          target="_blank"
          rel="noopener noreferrer"
        >
          {t("BREAKING")}: {t("APP_BANNER_TEXT")}
          <Icon
            viewClass="close w-[17px] h-[14px] ml-2 fill-[#000]"
            icon="right-arrow-bold"
          />
        </a>
      </p>
      <div onClick={closeBanner}>
        <Icon
          viewClass="close w-[10px] h-[10px] fill-[#000] absolute top-[13px] right-[20px] cursor-pointer"
          icon="close"
        />
      </div>
    </div>
  );
};

export default GeofenceNotice;
