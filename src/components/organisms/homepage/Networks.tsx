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
      className={`p-6 bg-[#202020] ${
        targetLength === 3 ? "w-[436px] xl:w-[340px]" : "w-[323px] xl:w-[300px]"
      } md:max-w-full md:min-w-full md:w-auto max-w-[500px] rounded-xl 
                md:items-center md:py-4 md:px-6
                 md:justify-between relative overflow-hidden relative`}
      key={index}
    >
      <div className="mb-2 md:items-center">
        <div className={"mb-6 md:mb-2 flex items-center"}>
          <img
            src={item.imageUrl}
            alt={item.asset}
            className="w-[40px] h-[40px] mr-2"
          />
          <p
            className="text-[#FFFFFF] text-[24px] font-semibold
                    leading-normal text-center md:text-base mr-1"
          >
            {item.asset}
          </p>
          {item.network === "solana" ? (
            <span
              className={
                "border-[0.5px] rounded-[80px] px-2 py-1 font-medium text-[8px] border-[#0C8B8B] ml-2 text-light-high bg-[#0C8B8B1A]"
              }
            >
              Coming Soon
            </span>
          ) : null}
          {item.externUrl !== "" ? (
            <a href={item.externUrl} target="_blank" rel="noreferrer">
              <Icon
                viewClass="dropDownIcon !w-[14px] fill-transparent stroke-[#454549] hover:stroke-[#E50913]"
                icon="external-link"
              />
            </a>
          ) : null}
        </div>
        <div className={"flex items-center mb-6 md:mb-0"}>
          <div className={"mr-[40px]"}>
            <p className={"text-[#B2A6A6] text-sm leading-[25px]"}>
              Total Value Locked
            </p>
            <p
              className={
                "text-[#FFFFFF] font-medium text-[18px] md:text-[14px] leading-[32px]"
              }
            >
              {item.tvl}
            </p>
          </div>
          <div>
            <p className={"text-[#B2A6A6] text-sm leading-[25px]"}>
              Validators
            </p>
            <p
              className={
                "text-[#FFFFFF] font-medium text-[18px] md:text-[14px] leading-[32px]"
              }
            >
              {item.apy}
            </p>
          </div>
        </div>
      </div>
      <ButtonLink
        className={`w-full md:p-2 !py-3 h-[45px] md:h-[40px] md:text-sm md:p-0 md:w-auto `}
        variant={"custom"}
        href={item.buttonUrl}
        scale="lg"
        target={"_blank"}
        isDisabled={item.buttonUrl === ""}
        customButtonClass={
          "bg-[#8c8c8c4f] text-[#FEFEFE] !font-normal !text-[14px] transition ease-in-out duration-200 "
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
  } = useApp();
  const { isMobile } = useWindowSize();

  const networkList = [
    {
      asset: "BNB Chain",
      network: "binance",
      imageUrl: "/images/networks/bnb.svg",
      tvl: `${numberFormat(bnbData.tvl, 3)} BNB`,
      apy: `${bnbData!.apy}%`,
      externUrl: "/bnb",
      buttonText: "Start Staking",
      buttonUrl: "https://app.pstake.finance/bnb",
      hoverBg: "hover:bg-bnbCard",
      erc20: false,
    },
    {
      asset: "Cosmos Hub",
      network: "cosmos",
      externUrl: "/atom",
      imageUrl: "/images/networks/atom.svg",
      apy: `${cosmosData!.apy === -1 ? APR_DEFAULT : cosmosData!.apy}%`,
      tvl: `${numberFormat(cosmosData.tvl, 3)} ATOM`,
      buttonText: "Start Staking",
      buttonUrl: "https://app.pstake.finance/cosmos?token=ATOM&chain=cosmos",
      erc20: false,
    },
    {
      asset: "Solana",
      network: "solana",
      externUrl: "",
      imageUrl: "/images/networks/sol.svg",
      apy: "--",
      tvl: "--",
      buttonText: "Start Staking",
      buttonUrl: "",
      erc20: false,
    },
    {
      asset: "Osmosis",
      network: "osmosis",
      externUrl: "/osmo",
      imageUrl: "/images/networks/osmo.svg",
      apy: `${osmoData!.apy === -1 ? 9.94 : osmoData.apy}%`,
      tvl: `${numberFormat(osmoData.tvl, 3)} OSMO`,
      buttonText: "Start Staking",
      buttonUrl: "https://app.pstake.finance/cosmos?token=OSMO&chain=osmosis",
      erc20: false,
    },
    {
      asset: "dYdX",
      network: "dydx",
      externUrl: "/dydx",
      imageUrl: "/images/networks/dydx.svg",
      apy: `${dydxData!.apy === -1 ? 9.94 : dydxData.apy}%`,
      tvl: `${numberFormat(dydxData.tvl, 3)} DYDX`,
      buttonText: "Start Staking",
      buttonUrl: "https://app.pstake.finance/cosmos?token=DYDX&chain=Dydx",
      erc20: false,
    },
    {
      asset: "STARS",
      network: "stars",
      externUrl: "",
      imageUrl: "/images/networks/stars.svg",
      apy: `${starsData!.apy === -1 ? 9.94 : starsData.apy}%`,
      tvl: `${numberFormat(starsData.tvl, 3)} STARS`,
      buttonText: "Start Staking",
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
      asset: "HUAHUA",
      network: "chihuahua",
      externUrl: "",
      imageUrl: "/images/networks/huahua.svg",
      apy: `${huahuaData!.apy === -1 ? 10 : huahuaData.apy}%`,
      tvl: `${numberFormat(huahuaData.tvl, 3)} HUAHUA`,
      buttonText: "Start Staking",
      buttonUrl:
        "https://app.pstake.finance/cosmos?token=HUAHUA&chain=persistence",
      erc20: false,
    },
  ];

  return (
    <div className="aos-init aos-animate" data-aos="fade-up">
      <div className="container pt-[80px] pb-[80px] md:py-[35px]">
        <p className="text-[40px] md:text-[20px] text-center font-bold mb-0 text-[#FEFEFE]">
          Truly Multi-Chain Liquid Staking
        </p>
        <p className={"text-[20px] md:text-[16px] text-center text-[#D5D5D5]"}>
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
