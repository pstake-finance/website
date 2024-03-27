import React from "react";
import { useTranslation } from "next-export-i18n";
import { PSTAKE_APP_URL } from "../../../utils/config";
import Icon from "../../molecules/Icon";
import ButtonLink from "../../atoms/buttonLink/ButtonLink";
import { useApp } from "../../../context/appContext/AppContext";
import { numberFormat } from "../../../utils/helpers";

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
    <div className="text-center aos-init aos-animate bg-homeBannerBg bg-[#fff] bg-cover bg-no-repeat">
      <div className="pt-[250px] pb-[200px] relative">
        <div>
          <h1 className="text-[4rem] lg:text-4xl font-bold leading-tight text-center text-dark-high mb-6">
            Multichain Liquid <br /> Staking Protocol
          </h1>
          <h6 className="text-base text-dark-high font-medium mb-8">
            {" "}
            {t("STAKE_ASSETS")}
          </h6>
          <ButtonLink
            className={`w-[200px] mx-auto md:py-2 md:text-sm`}
            variant={"solid"}
            href={PSTAKE_APP_URL}
            scale="lg"
            target={"_blank"}
            isDisabled={false}
            focusEffect={true}
          >
            {t("LIQUID_STAKE_NOW")}
            <Icon
              viewClass="right-arrow w-[14px] fill-[#fff]"
              icon="right-arrow"
            />
          </ButtonLink>
        </div>
        <div className="md:relative absolute -bottom-[60px] left-0 right-0 z-10">
          <div className={"flex flex-wrap justify-center"}>
            <div className="max-w-[350px] min-w-[250px] rounded-md px-4 py-5 my-2 bg-[#fff] drop-shadow-lg">
              <p className="text-dark-full font-medium mb-4">Live networks</p>
              <div className="flex items-center justify-center">
                <img
                  src={"/images/networks/atom.svg"}
                  alt={"atom"}
                  width={26}
                  height={26}
                  className={"mx-2"}
                />
                <img
                  src={"/images/networks/bnb.svg"}
                  alt={"atom"}
                  width={26}
                  height={26}
                  className={"mx-2"}
                />
                <img
                  src={"/images/networks/ethereum.svg"}
                  alt={"atom"}
                  width={26}
                  height={26}
                  className={"mx-2"}
                />
                <img
                  src={"/images/networks/osmo.svg"}
                  alt={"atom"}
                  width={26}
                  height={26}
                  className={"mx-2"}
                />
                <img
                  src={"/images/networks/dydx.svg"}
                  alt={"atom"}
                  width={20}
                  height={20}
                  className={"mx-2"}
                />
                <img
                  src={"/images/networks/stars.svg"}
                  alt={"atom"}
                  width={20}
                  height={20}
                  className={"mx-2"}
                />
              </div>
            </div>
            <div className="max-w-[350px] min-w-[250px] rounded-md px-4 py-6 my-2 bg-[#fff] mx-8 drop-shadow-lg">
              <p className="text-dark-full font-medium mb-3">
                Total Value Unlocked
              </p>
              <p className="text-dark-full font-semibold text-2xl">
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
            </div>
            <div className="max-w-[350px] min-w-[250px] rounded-md px-4 py-6 my-2 bg-[#fff] drop-shadow-lg">
              <p className="text-dark-full font-medium mb-3">
                Total Defi partners
              </p>
              <p className="text-dark-full font-semibold text-lg text-2xl">
                12
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
