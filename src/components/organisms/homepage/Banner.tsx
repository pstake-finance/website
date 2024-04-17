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
    tooltip: "dYdX",
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
    <div className="text-center aos-init aos-animate bg-homeBannerBg bg-[#141414] tall:h-screen h-max bg-cover bg-center bg-no-repeat">
      <div className="pt-[200px] -2xl:pt-[300px] pb-[200px] relative h-full max-w-[1240px] md:px-2 mx-auto">
        <div className={"flex mb-[100px] md:mb-[40px] md:h-auto"}>
          <div className={"flex-1"}>
            <h1 className="text-[48px] md:text-[20px] lg:text-4xl font-bold leading-tight text-left text-[#FEFEFE] mb-6">
              Liquid Stake Everything
            </h1>
            <h6 className="text-[20px] md:text-[14px] text-[#D5D5D5] text-left mb-8 max-w-[450px] break-words">
              Securely liquid stake the biggest crypto assets and generate
              additional yield in DeFi.
            </h6>
            <ButtonLink
              className={`hover:!bg-[#E509134D] dropDownButton py-3" md:text-sm !w-[293px] font-semibold md:!h-[42px] !h-[48px] md:!w-[200px]`}
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
        </div>
        <div className="">
          <div className={"flex flex-wrap pt-10"}>
            <div className={"pr-8 md:border-0 border-r border-[#FCFCFC]"}>
              <p className="text-light-high font-bold text-[44px] md:text-[30px] text-left">
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
            <div
              className={
                "pl-8 md:pl-0 md:border-0 border-l border-[#FCFCFC] pt-4"
              }
            >
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
