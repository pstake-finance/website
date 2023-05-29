import React from "react";
import { useTranslation } from "next-export-i18n";
import { PSTAKE_APP_URL } from "../../../utils/config";
import Icon from "../../molecules/Icon";
import ButtonLink from "../../atoms/buttonLink/ButtonLink";
import { useApp } from "../../../context/appContext/AppContext";

const Banner = () => {
  const { cosmosData, bnbData } = useApp();
  const { t } = useTranslation("common");
  return (
    <div className="text-center aos-init aos-animate bg-homePageBanner bg-cover bg-no-repeat">
      <div className="pt-[250px] pb-[200px]">
        <div className="pb-[100px]">
          <h1 className="text-[3rem] lg:text-3xl font-bold leading-tight text-center text-dark-high mb-6">
            Multichain Liquid Staking Protocol
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
        <div className="flex justify-evenly flex-wrap">
          <div className="max-w-[350px] min-w-[250px] rounded-md px-4 py-5 my-2 bg-[#26262bba]">
            <p className="text-light-emphasis font-medium mb-4">
              Live networks
            </p>
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
            </div>
          </div>
          <div className="max-w-[350px] min-w-[250px] rounded-md px-4 py-6 my-2 bg-[#26262bba]">
            <p className="text-light-emphasis font-medium mb-3">
              Total Value Unlocked
            </p>
            <p className="text-light-mid font-medium text-lg">
              ${(Number(cosmosData.tvl) + Number(bnbData.tvl)).toLocaleString()}
            </p>
          </div>
          <div className="max-w-[350px] min-w-[250px] rounded-md px-4 py-6 my-2 bg-[#26262bba]">
            <p className="text-light-emphasis font-medium mb-3">
              Total Defi partners
            </p>
            <p className="text-light-mid font-medium text-lg">12</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
