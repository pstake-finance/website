import React from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { useTranslation } from "next-export-i18n";
import Icon from "../../molecules/Icon";

const Offering = () => {
  const router = useRouter();
  const { t } = useTranslation();

  return (
    <div className="container pt-[60px] md:pt-[35px] pb-[100px]">
      <h3 className="sectionTitle mb-[80px] md:mb-6 mx-auto">
        <span className={"text-[#F7931A]"}>Bitcoin</span>{" "}
        {t("BITCOIN_YBTC_TITLE")}
      </h3>
      <div className={"max-w-[1200px] mx-auto mb-8"}>
        <Image
          width={1200}
          height={360}
          src={"/images/btc_offering.svg"}
          alt={"btc_stake"}
          className={"w-full mr-auto"}
        />
      </div>
      <div
        className={"flex justify-center items-center max-w-[1200px] mx-auto"}
      >
        <div
          className={
            "px-8 py-4 border-[1.45px] border-[#3A3A3A] rounded-[8.7px] flex max-w-[577px]"
          }
        >
          <div className={"pr-[32px] mr-[32px] w-[84px] h-[84px] relative"}>
            <Image src={"/images/ybtc_shadow.svg"} alt={"btc_stake"} fill />
          </div>
          <p className="border-l border-[#787878] pl-[32px]  font-semibold text-[18px] text-light-high md:text-lg">
            {" "}
            {t("YBTC")}
            <span className={"text-base font-normal"}>
              ({t("YBTC_INFO")})
            </span>{" "}
            <span className={"text-[#F7931A]"}>+</span> {t("BABY_LON_REWARDS")}{" "}
            <span className={"text-[#F7931A]"}>+</span> {t("PSTAKE_REWARDS")}{" "}
            <span className={"text-[#F7931A]"}>+</span> {t("RESTAKING")}/{" "}
            {t("LIQUIDITY_FARMING")}
          </p>
        </div>
        <div className={"w-[40px] mx-[16px]"}>
          <Icon
            viewClass="right-arrow w-[40px] fill-[#1B1B1B]"
            icon="reverse_arrow"
          />
        </div>
        <div
          className={
            "px-8 py-4 border-[1.45px] border-[#3A3A3A] rounded-[8.7px] flex max-w-[577px]"
          }
        >
          <div className={"pr-[32px] mr-[32px] w-[84px] h-[84px] relative"}>
            <Image src={"/images/babylon_shadow.svg"} alt={"btc_stake"} fill />
          </div>
          <p className="border-l border-[#787878] pl-[32px]  font-semibold text-[18px] text-light-high md:text-lg">
            {" "}
            {t("YBTC")}
            <span className={"text-base font-normal"}>
              ({t("YBTC_INFO")})
            </span>{" "}
            <span className={"text-[#F7931A]"}>+</span> {t("BABY_LON_REWARDS")}{" "}
            <span className={"text-[#F7931A]"}>+</span> {t("PSTAKE_REWARDS")}{" "}
            <span className={"text-[#F7931A]"}>+</span> {t("RESTAKING")}/{" "}
            {t("LIQUIDITY_FARMING")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Offering;
