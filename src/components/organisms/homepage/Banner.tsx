import React from "react";
import { useTranslation } from "next-export-i18n";
import { PSTAKE_APP_URL } from "../../../utils/config";
import Icon from "../../molecules/Icon";
import ButtonLink from "../../atoms/buttonLink/ButtonLink";
import { useApp } from "../../../context/appContext/AppContext";
import { numberFormat } from "../../../utils/helpers";
import Tooltip from "rc-tooltip";
import { keys } from "lodash";

const netWorkList = [
  {
    logoUrl: "/images/networks/bnb.svg",
    tooltip: "BNB Chain",
    link: "https://app.pstake.finance/bnb",
  },
  {
    logoUrl: "/images/networks/sol.svg",
    tooltip: "Solana(Coming Soon)",
    link: "",
  },
  {
    logoUrl: "/images/networks/atom.svg",
    tooltip: "Cosmos",
    link: "https://app.pstake.finance/cosmos",
  },
  {
    logoUrl: "/images/networks/osmo.svg",
    tooltip: "Osmosis",
    link: "https://app.pstake.finance/cosmos",
  },
  {
    logoUrl: "/images/networks/dydx.svg",
    tooltip: "Dydx",
    link: "https://app.pstake.finance/cosmos",
  },
  {
    logoUrl: "/images/networks/stars.svg",
    tooltip: "Stargaze",
    link: "https://app.pstake.finance/cosmos",
  },
  {
    logoUrl: "/images/networks/huahua.svg",
    tooltip: "Chihuahua",
    link: "https://app.pstake.finance/cosmos",
  },
];
const Banner = () => {
  const {
    cosmosData,
    bnbData,
    tokenPrices,
    osmoData,
    dydxData,
    xprtData,
    starsData,
    bldData,
    huahuaData,
  } = useApp();

  const { t } = useTranslation("common");
  return (
    <div className="text-center aos-init aos-animate bg-homeBannerBg bg-[#141414] h-screen bg-cover bg-center bg-no-repeat">
      <div className="pt-[250px] pb-[200px] relative h-full max-w-[1240px] mx-auto">
        <div className={"flex h-full"}>
          <div className={"flex-1"}>
            <h1 className="text-[48px] lg:text-4xl font-bold leading-tight text-left text-[#FEFEFE] mb-6">
              Liquid Stake Everything
            </h1>
            <h6 className="text-[20px] text-[#D5D5D5] text-left mb-8 w-[450px] break-words">
              Securely liquid stake the biggest crypto assets and generate
              additional yield in DeFi.
            </h6>
            <ButtonLink
              className={`dropDownButton py-3" md:text-sm !w-[293px] font-semibold !h-[48px]`}
              variant={"outline"}
              href={PSTAKE_APP_URL}
              scale="lg"
              target={"_blank"}
              isDisabled={false}
            >
              <span className="nav-link pophover tooltip-multiline app-btn">
                Liquid Stake Now
              </span>
            </ButtonLink>
          </div>
          <div className={"relative w-[635px] h-[460px] hidden"}>
            <img
              src={"/images/pstake_icon.svg"}
              alt={"atom"}
              className={"absolute right-[112px] top-[20px]"}
            />
            <img
              src={"/images/solana_icon.svg"}
              alt={"atom"}
              className={"absolute right-[0] bottom-[13px]"}
            />
            <img
              src={"/images/atom_icon.svg"}
              alt={"atom"}
              className={"absolute left-[0] top-[121px]"}
            />
            <img
              src={"/images/bitcoin_icon.svg"}
              alt={"atom"}
              className={"absolute left-[143px] top-[0px]"}
            />
            <img
              src={"/images/bnb_icon.svg"}
              alt={"atom"}
              className={"absolute left-[140px] bottom-[0]"}
            />
          </div>
        </div>
        <div className="">
          <div className={"flex flex-wrap pt-10"}>
            <div className={"pr-8 border-r border-[#FCFCFC]"}>
              <p className="text-light-high font-bold text-[44px]">
                $
                {numberFormat(
                  Number(cosmosData.tvl * tokenPrices.ATOM) +
                    Number(bnbData.tvl * tokenPrices.BNB) +
                    Number(starsData.tvl * tokenPrices.STARS) +
                    Number(osmoData.tvl * tokenPrices.OSMO) +
                    Number(xprtData.tvl * tokenPrices.XPRT) +
                    Number(dydxData.tvl * tokenPrices.DYDX) +
                    Number(bldData.tvl * tokenPrices.BLD) +
                    Number(huahuaData.tvl * tokenPrices.HUAHUA),
                  3
                )}
              </p>
              <p className={"text-[#D5D5D5] text-[18px]"}>
                Total Volume Unlocked
              </p>
            </div>
            <div className={"pl-8 border-l border-[#FCFCFC] pt-4"}>
              <div className="flex items-center justify-center pb-3">
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
                        className={`${index !== 0 ? "mx-2" : "mrr-2"}`}
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
              <p className={"text-[#D5D5D5] text-[18px] text-left"}>
                Supported Assets
              </p>
            </div>
            {/*<div className="max-w-[350px] min-w-[250px] rounded-md px-4 py-6 my-2 bg-[#fff] drop-shadow-lg">*/}
            {/*  <p className="text-dark-full font-medium mb-3">*/}
            {/*    Total Defi partners*/}
            {/*  </p>*/}
            {/*  <p className="text-dark-full font-semibold text-lg text-2xl">*/}
            {/*    12*/}
            {/*  </p>*/}
            {/*</div>*/}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
