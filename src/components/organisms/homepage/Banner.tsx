import React, { useEffect } from "react";
import { useTranslation } from "next-export-i18n";
import ButtonLink from "../../atoms/buttonLink/ButtonLink";
import { numberFormat } from "../../../utils/helpers";
import Tooltip from "rc-tooltip";
import { shallow } from "zustand/shallow";
import { useAppStore } from "../../../store/store";

const netWorkList = [
  {
    logoUrl: "/images/networks/btc.svg",
    tooltip: "Bitcoin",
    link: "https://app.pstake.finance/",
  },
  {
    logoUrl: "/images/more.svg",
    tooltip: "ATOM, OSMO, XPRT",
    link: "https://app.pstake.finance/",
  },
];

const Banner = () => {
  const [fetchTokenPrices, fetchTVLList, tvlList, tokenPrices] = useAppStore(
    (state) => [
      state.fetchTokenPrices,
      state.fetchTVLList,
      state.tvlList,
      state.tokenPrices,
    ],
    shallow
  );

  //fetching pstake info
  useEffect(() => {
    const fetch = async () => {
      fetchTVLList();
      fetchTokenPrices();
    };
    fetch();
  }, []);

  const { t } = useTranslation("common");
  return (
    <div className="text-center aos-init aos-animate -lg:bg-homeBannerBg bg-[#141414]  bg-cover bg-center bg-no-repeat ">
      <div className="pt-[200px] -2xl:pt-[300px] pb-40px] relative h-screen max-w-[1280px] container mx-auto">
        <div className={"flex mb-[40px] md:mb-[40px] md:h-auto"}>
          <div className={"flex-1"}>
            <h1 className="max-w-[640px] break-words text-[40px] md:text-[28px] md:leading-[40px] lg:text-4xl font-bold leading-[60px] text-left text-[#FCFCFC] mb-3">
              {t("HOME_HERO_SECTION_TITLE")}
            </h1>
            <h6 className="text-[18px] md:text-[14px] text-[#D5D5D5] text-left mb-10 max-w-[600px] break-words">
              {t("HOME_HERO_SECTION_SUB_TITLE")}
            </h6>
            <div className={"flex items-center gap-6 md:flex-col"}>
              <ButtonLink
                className={`!rounded-[8px] !bg-[#F6931A1A] hover:!bg-[#F6931A4D] border !border-[#EE972C] !text-[#FEFEFE] dropDownButton py-3 md:text-base !w-[240px] font-semibold md:!h-[42px] !h-[48px] md:!w-[100%]`}
                variant={"outline"}
                href={"https://app.btc.pstake.finance/"}
                scale="lg"
                target={"_blank"}
                isDisabled={false}
              >
                <span className="nav-link pophover tooltip-multiline app-btn">
                  {t("STAKE_BITCOIN_NOW")}
                </span>
              </ButtonLink>
              <ButtonLink
                className={`!rounded-[8px] hover:!bg-[#F6931A4D] border !border-[#EE972C] !text-[#FEFEFE] dropDownButton !px-0 py-3" md:text-sm !w-[240px] font-semibold !h-[48px] md:!w-[100%] group`}
                variant={"custom"}
                href={
                  "https://blog.pstake.finance/category/bitcoin-liquid-staking/"
                }
                scale="lg"
                target={"_blank"}
                isDisabled={false}
              >
                <span className="nav-link pophover tooltip-multiline app-btn">
                  {t("LEARN_MORE")}
                </span>
              </ButtonLink>
            </div>
          </div>
        </div>
        <div className="mb-4">
          <div className={"flex flex-wrap pt-4 md:justify-start lg:block"}>
            <div
              className={
                "pr-8 lg:border-r-0 lg:border-b-[0.5px] border-r border-[#FCFCFC] lg:border-[#fcfcfc59] md:flex-1 lg:pb-4"
              }
            >
              <p className="text-light-high font-bold text-[44px] md:text-[24px] text-left">
                $
                {numberFormat(
                  Number(tvlList.cosmos * tokenPrices.ATOM) +
                    Number(tvlList.bnb * tokenPrices.BNB) +
                    Number(tvlList.stars * tokenPrices.STARS) +
                    Number(tvlList.osmo * tokenPrices.OSMO) +
                    Number(tvlList.xprt * tokenPrices.XPRT) +
                    Number(tvlList.dydx * tokenPrices.DYDX) +
                    Number(tvlList.huahua * tokenPrices.HUAHUA) +
                    Number(tvlList.btc * tokenPrices.BTC),
                  3
                )}
              </p>
              <p
                className={
                  "text-[#D5D5D5] text-[18px] md:text-[14px] lg:text-left"
                }
              >
                {t("TOTAL_VALUE_UNLOCKED")}
              </p>
            </div>
            <div
              className={
                "pl-8 md:pl-0 lg:border-0 border-l border-[#FCFCFC] pt-4"
              }
            >
              <div className="flex items-center justify-start pb-3 lg:justify-start">
                {netWorkList.map((item, index) => (
                  <Tooltip
                    key={index}
                    placement="top"
                    showArrow
                    overlayStyle={{
                      opacity: 1,
                    }}
                    overlay={
                      <span className={"text-sm text-light-high font-light"}>
                        {item.tooltip}
                      </span>
                    }
                  >
                    {item.link === "" ? (
                      <img
                        src={item.logoUrl}
                        alt={"atom"}
                        width={36}
                        height={36}
                        className={`${index !== 0 ? "mx-2" : "mr-2"}`}
                      />
                    ) : (
                      <a
                        className={`hover:cursor-pointer `}
                        href={item.link}
                        target={"_blank"}
                        rel="noreferrer"
                      >
                        <img
                          src={item.logoUrl}
                          alt={"atom"}
                          width={36}
                          height={36}
                          className={`${index !== 0 ? "mx-2" : "mr-2"}`}
                        />
                      </a>
                    )}
                  </Tooltip>
                ))}
              </div>
              <p
                className={
                  "text-[#D5D5D5] text-[18px] md:text-[14px] text-left"
                }
              >
                {t("SUPPORTED_Assets")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
