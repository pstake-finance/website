import React from "react";
import { useTranslation } from "next-export-i18n";
import { APR_DEFAULT } from "../../../utils/config";
import ButtonLink from "../../atoms/buttonLink/ButtonLink";
import { useApp } from "../../../context/appContext/AppContext";
import { useWindowSize } from "../../../customHooks/useWindowSize";
import Icon from "../../molecules/Icon";

const getItemsPerRow = (
  networkList: any[],
  initialLength: number,
  targetLength: number,
  isMobile: boolean
) => {
  return networkList.slice(initialLength, targetLength).map((item, index) => (
    <div
      className={`p-6 bg-[#202020] m-4 md:mx-2 min-w-[365px] 
                md:max-w-full md:min-w-full md:w-auto max-w-[500px] rounded-xl 
                md:flex md:items-center md:py-4 md:px-6
                 md:justify-between relative overflow-hidden relative`}
      key={index}
    >
      <div className="mb-2 md:flex md:items-center md:m-0">
        <div className={"mb-6 md:m-0 flex items-center"}>
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
          <a href={item.buttonUrl} target="_blank" rel="noreferrer">
            <Icon
              viewClass="dropDownIcon !w-[14px] fill-transparent stroke-[#454549] hover:stroke-[#E50913]"
              icon="external-link"
            />
          </a>
        </div>
        <div className={"flex items-center mb-6"}>
          <div className={"mr-[40px]"}>
            <p className={"text-[#B2A6A6] text-sm leading-[25px]"}>
              Total Value Locked
            </p>
            <p
              className={
                "text-[#FFFFFF] font-medium text-[18px] leading-[32px]"
              }
            >
              656,926.59 BNB
            </p>
          </div>
          <div>
            <p className={"text-[#B2A6A6] text-sm leading-[25px]"}>
              Validators
            </p>
            <p
              className={
                "text-[#FFFFFF] font-medium text-[18px] leading-[32px]"
              }
            >
              120
            </p>
          </div>
        </div>
        {/*<div className="md:px-4">*/}
        {/*  <h4*/}
        {/*    className="text-green text-lg font-semibold*/}
        {/*  leading-normal text-center md:text-sm"*/}
        {/*  >*/}
        {/*    {item.apy}% APY*/}
        {/*  </h4>*/}
        {/*</div>*/}
      </div>
      <ButtonLink
        className={`w-full md:p-2 !py-3 h-[45px] md:text-sm md:p-0 md:w-auto md:bg-transparent`}
        variant={"custom"}
        href={item.buttonUrl}
        scale="lg"
        target={"_blank"}
        isDisabled={false}
        customButtonClass={
          "bg-[#8c8c8c4f] text-[#FEFEFE] !font-normal !text-[14px] transition ease-in-out duration-200 "
        }
      >
        {isMobile ? (
          <Icon
            viewClass="dropDownIcon !w-[14px] ease-in duration-200 rotate-360
                group-hover:rotate-90 fill-[#ECECEC]"
            icon="chevron"
          />
        ) : (
          item.buttonText
        )}
      </ButtonLink>
    </div>
  ));
};
const Networks = () => {
  const { t } = useTranslation("common");

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
      apy: bnbData!.apy,
      buttonText: "Start Staking",
      buttonUrl: "https://app.pstake.finance/bnb",
      hoverBg: "hover:bg-bnbCard",
      erc20: false,
    },
    {
      asset: "Cosmos Hub",
      network: "cosmos",
      imageUrl: "/images/networks/atom.svg",
      apy: cosmosData!.apy === -1 ? APR_DEFAULT : cosmosData!.apy,
      buttonText: "Start Staking",
      buttonUrl: "https://app.pstake.finance/cosmos?token=ATOM&chain=cosmos",
      erc20: false,
    },
    {
      asset: "Solana",
      network: "solana",
      imageUrl: "/images/networks/sol.svg",
      apy: bldData!.apy === -1 ? 11 : bldData.apy,
      buttonText: "Start Staking",
      buttonUrl: "",
      erc20: false,
    },
    {
      asset: "Osmosis",
      network: "osmosis",
      imageUrl: "/images/networks/osmo.svg",
      apy: osmoData!.apy === -1 ? 9.94 : osmoData.apy,
      buttonText: "Start Staking",
      buttonUrl: "https://app.pstake.finance/cosmos?token=OSMO&chain=osmosis",
      erc20: false,
    },
    {
      asset: "Dydx",
      network: "dydx",
      imageUrl: "/images/networks/dydx.svg",
      apy: dydxData!.apy === -1 ? 9.94 : dydxData.apy,
      buttonText: "Start Staking",
      buttonUrl: "https://app.pstake.finance/cosmos?token=DYDX&chain=Dydx",
      erc20: false,
    },
    {
      asset: "STARS",
      network: "stars",
      imageUrl: "/images/networks/stars.svg",
      apy: starsData!.apy === -1 ? 9.94 : starsData.apy,
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
      imageUrl: "/images/networks/huahua.svg",
      apy: huahuaData!.apy === -1 ? 10 : huahuaData.apy,
      buttonText: "Start Staking",
      buttonUrl:
        "https://app.pstake.finance/cosmos?token=HUAHUA&chain=persistence",
      erc20: false,
    },
  ];

  return (
    <div className="aos-init aos-animate" data-aos="fade-up">
      <div className="sectionContainer pt-[80px] pb-[80px] md:py-[35px]">
        <p className="text-[40px] text-center font-bold mb-0 text-[#FEFEFE]">
          Truly Multi-Chain Liquid Staking
        </p>
        <p className={"text-[20px] text-center text-[#D5D5D5]"}>
          Liquid Stake your favorite tokens across BNB Chain, Solana, and
          Cosmos.
        </p>
        <div className="pt-8">
          <div className="flex flex-wrap items-center justify-center">
            {getItemsPerRow(networkList, 0, 3, isMobile)}
          </div>
          <div className="flex flex-wrap justify-center pt-8 md:pt-2">
            {getItemsPerRow(networkList, 3, 5, isMobile)}
          </div>
          <div className="flex flex-wrap justify-center pt-8 md:pt-2">
            {getItemsPerRow(networkList, 5, networkList.length + 1, isMobile)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Networks;
