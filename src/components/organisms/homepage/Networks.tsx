import React from "react";
import { useTranslation } from "next-export-i18n";
import { APR_DEFAULT } from "../../../utils/config";
import ButtonLink from "../../atoms/buttonLink/ButtonLink";
import { useApp } from "../../../context/appContext/AppContext";
import { useWindowSize } from "../../../customHooks/useWindowSize";
import Icon from "../../molecules/Icon";
import { numberFormat } from "../../../utils/helpers";

const getItemsPerRow = (
  networkList: any[],
  initialLength: number,
  targetLength: number,
  isMobile: boolean
) => {
  return networkList.slice(initialLength, targetLength).map((item, index) => (
    <div
      className={`p-6 md:p-4 bg-[#202020] ${
        targetLength === 3 ? "w-[436px] xl:w-[340px]" : "w-[323px] xl:w-[300px]"
      } md:max-w-full md:min-w-full md:w-auto max-w-[500px] rounded-xl md:items-center md:py-4 md:px-3 md:justify-between
       relative overflow-hidden relative flex flex-col justify-between`}
      key={index}
    >
      <div className="mb-2 md:w-full">
        <div className={"mb-6 md:mb-2 flex justify-between items-center"}>
          <div className={"flex items-center"}>
            <img
              src={item.imageUrl}
              alt={item.asset}
              className="w-[40px] h-[40px] mr-2"
            />
            <div className={"mr-1"}>
              <p
                className="text-[#FFFFFF] text-[22px] leading-[36px] font-semibold
                    leading-normal text-center md:text-base flex items-center"
              >
                {item.asset}
                {item.externUrl !== "" ? (
                  <a href={item.externUrl} target="_blank" rel="noreferrer">
                    <Icon
                      viewClass="dropDownIcon !w-[14px] fill-transparent stroke-[#454549] hover:stroke-[#E50913] ml-2"
                      icon="external-link"
                    />
                  </a>
                ) : null}
                {item.network === "solana" ? (
                  <span
                    className={
                      "border-[0.5px] rounded-[80px] px-2 py-1 font-medium text-[8px] border-[#0C8B8B] ml-2 text-light-high bg-[#0C8B8B1A]"
                    }
                  >
                    Coming Soon
                  </span>
                ) : null}
              </p>
              <p
                className={
                  "text-[13px] -mt-[8px] leading-[25px] font-light text-[#D5D5D5CC]"
                }
              >
                {item.symbol}
              </p>
            </div>
          </div>
          <div>
            <p
              className={
                "text-[#FCFCFC] text-[18px] md:text-[14px] leading-[25px]"
              }
            >
              {" "}
              {item.apy}
            </p>
            <p
              className={
                "text-[#B2A6A6] font-light text-right text-[14px] md:text-[12px] leading-[32px] -mt-[8px]"
              }
            >
              APY
            </p>
          </div>
        </div>
        <div
          className={
            "flex items-center mb-[22px] md:mb-0 md:justify-between md:text-center"
          }
        >
          <div className={"mr-[40px] md:mr-2"}>
            <p className={"text-[#B2A6A6] text-sm leading-[25px]"}>
              Total Value Locked
            </p>
            <p
              className={
                "text-[#FFFFFF] font-medium text-[16px] md:text-[14px] leading-[32px] md:text-left"
              }
            >
              {item.tvl}
            </p>
          </div>
          {item.validatorsLength !== null ? (
            <div>
              <p className={"text-[#B2A6A6] text-sm leading-[25px]"}>
                Validators
              </p>
              <p
                className={
                  "text-[#FFFFFF] font-medium text-[16px] md:text-[14px] leading-[32px] flex items-center md:justify-end"
                }
              >
                {item.validatorsLength}
                {item.network !== "solana" ? (
                  <a
                    href={item.validatorsLink}
                    target="_blank"
                    rel="noreferrer"
                    className={
                      "text-[#FFFFFF] font-medium text-[16px] md:text-[14px] leading-[32px] hover:underline md:text-center"
                    }
                  >
                    <Icon
                      viewClass="dropDownIcon !w-[14px] fill-transparent stroke-[#454549] hover:stroke-[#E50913] ml-1"
                      icon="external-link"
                    />
                  </a>
                ) : null}
              </p>
            </div>
          ) : null}
        </div>
      </div>
      <ButtonLink
        className={`w-full md:p-2 !py-3 h-[45px] md:h-[40px] md:text-sm md:p-0 md:w-full `}
        variant={"custom"}
        href={item.buttonUrl}
        scale="lg"
        target={"_blank"}
        isDisabled={item.buttonUrl === ""}
        customButtonClass={
          "hover:bg-[#2F2F32] bg-[#454549] text-[#FEFEFE] !font-normal !text-[14px] transition ease-in-out duration-200 "
        }
      >
        {item.buttonText}
      </ButtonLink>
    </div>
  ));
};
const Networks = () => {
  const {
    cosmosData,
    bnbData,
    osmoData,
    dydxData,
    starsData,
    bldData,
    huahuaData,
    validatorsList,
  } = useApp();
  const { isMobile } = useWindowSize();

  const networkList = [
    {
      asset: "BNB Chain",
      symbol: "BNB",
      network: "binance",
      denom: "bnb",
      imageUrl: "/images/networks/bnb.svg",
      validatorsLength: null,
      validatorsLink: "",
      tvl: `${numberFormat(bnbData.tvl, 2)} BNB`,
      apy: `${bnbData!.apy}%`,
      externUrl: "/bnb",
      buttonText: "Liquid Stake Now",
      buttonUrl: "https://app.pstake.finance/bnb",
      hoverBg: "hover:bg-bnbCard",
      erc20: false,
    },
    {
      asset: "Cosmos Hub",
      symbol: "ATOM",
      network: "cosmos",
      externUrl: "/atom",
      denom: "uatom",
      validatorsLink: "/atom/validators",
      imageUrl: "/images/networks/atom.svg",
      validatorsLength: validatorsList["uatom"],
      apy: `${cosmosData!.apy === -1 ? APR_DEFAULT : cosmosData!.apy}%`,
      tvl: `${numberFormat(cosmosData.tvl, 2)} ATOM`,
      buttonText: "Liquid Stake Now",
      buttonUrl: "https://app.pstake.finance/cosmos?token=ATOM&chain=cosmos",
      erc20: false,
    },
    {
      asset: "Solana",
      symbol: "SOL",
      denom: "sol",
      network: "solana",
      externUrl: "",
      validatorsLink: "",
      validatorsLength: "--",
      imageUrl: "/images/networks/sol.svg",
      apy: "--",
      tvl: "--",
      buttonText: "Coming Soon",
      buttonUrl: "",
      erc20: false,
    },
    {
      asset: "Osmosis",
      symbol: "OSMO",
      network: "osmosis",
      denom: "uosmo",
      externUrl: "/osmo",
      validatorsLink: "/osmo/validators",
      imageUrl: "/images/networks/osmo.svg",
      validatorsLength: validatorsList["uosmo"],
      apy: `${osmoData!.apy === -1 ? 9.94 : osmoData.apy}%`,
      tvl: `${numberFormat(osmoData.tvl, 2)} OSMO`,
      buttonText: "Liquid Stake Now",
      buttonUrl: "https://app.pstake.finance/cosmos?token=OSMO&chain=osmosis",
      erc20: false,
    },
    {
      asset: "dYdX",
      symbol: "DYDX",
      network: "dydx",
      denom: "adydx",
      externUrl: "/dydx",
      validatorsLink: "/dydx/validators",
      imageUrl: "/images/networks/dydx.svg",
      validatorsLength: validatorsList["adydx"],
      apy: `${dydxData!.apy === -1 ? 9.94 : dydxData.apy}%`,
      tvl: `${numberFormat(dydxData.tvl, 2)} DYDX`,
      buttonText: "Liquid Stake Now",
      buttonUrl: "https://app.pstake.finance/cosmos?token=DYDX&chain=Dydx",
      erc20: false,
    },
    {
      asset: "Stargaze",
      symbol: "STARS",
      network: "stars",
      denom: "ustars",
      externUrl: "",
      validatorsLink: "/stars/validators",
      imageUrl: "/images/networks/stars.svg",
      validatorsLength: validatorsList["ustars"],
      apy: `${starsData!.apy === -1 ? 9.94 : starsData.apy}%`,
      tvl: `${numberFormat(starsData.tvl, 2)} STARS`,
      buttonText: "Liquid Stake Now",
      buttonUrl:
        "https://staging.app.pstake.finance/cosmos?token=STARS&chain=Stargaze",
      erc20: false,
    },
    // {
    //   asset: "BLD",
    //   network: "agoric",
    //   imageUrl: "/images/networks/bld.svg",
    //   apy: bldData!.apy === -1 ? 11 : bldData.apy,
    //   buttonText: "Start Staking",
    //   buttonUrl:
    //     "https://staging.app.pstake.finance/cosmos?token=BLD&chain=persistence",
    //   erc20: false,
    // },
    {
      asset: "CHIHUAHUA",
      symbol: "HUAHUA",
      network: "chihuahua",
      denom: "uhuahua",
      externUrl: "",
      validatorsLink: "/huahua/validators",
      imageUrl: "/images/networks/huahua.svg",
      apy: `${huahuaData!.apy === -1 ? 10 : huahuaData.apy}%`,
      tvl: `${numberFormat(huahuaData.tvl, 2)} HUAHUA`,
      validatorsLength: validatorsList["uhuahua"],
      buttonText: "Liquid Stake Now",
      buttonUrl:
        "https://app.pstake.finance/cosmos?token=HUAHUA&chain=persistence",
      erc20: false,
    },
  ];

  return (
    <div className="aos-init aos-animate" data-aos="fade-up">
      <div className="container pt-[80px] pb-[80px] md:py-[35px]">
        <p className="text-[40px] md:text-[32px] text-center font-bold mb-0 text-[#FEFEFE]">
          Truly Multi-Chain Liquid Staking
        </p>
        <p className={"text-[20px] md:text-[14px] text-center text-[#D5D5D5]"}>
          Liquid Stake your favorite tokens across BNB Chain, Solana, and
          Cosmos.
        </p>
        <div className="pt-8">
          <div className="flex flex-wrap items-center gap-5 justify-center">
            {getItemsPerRow(networkList, 0, 3, isMobile)}
          </div>
          <div className="flex flex-wrap justify-center gap-5 pt-[22px] md:pt-2">
            {getItemsPerRow(networkList, 3, networkList.length + 1, isMobile)}
          </div>
          {/*<div className="flex flex-wrap justify-center gap-5 pt-8 md:pt-2">*/}
          {/*  {getItemsPerRow(networkList, 5, networkList.length + 1, isMobile)}*/}
          {/*</div>*/}
        </div>
      </div>
    </div>
  );
};

export default Networks;
