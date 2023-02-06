import React from "react";
import useTranslation from "next-translate/useTranslation";
import { PSTAKE_APP_URL, VIDEO_URL } from "../../../constants/config";
import Icon from "../../Icon";
import ButtonLink from "../../atoms/buttonLink/ButtonLink";

const Banner = () => {
  const { t } = useTranslation("common");
  return (
    <div className="text-center aos-init aos-animate bg-homePageBanner bg-cover bg-no-repeat">
      <div className="pt-[200px] pb-[100px]">
        <h1 className="text-[4rem] lg:text-3xl font-bold leading-tight text-center text-dark-high mb-3">
          {t("UNLOCKING_LIQUIDITY")} <br />
          {t("STAKED_ASSETS")}
        </h1>
        <div>
          <h6 className="text-base text-dark-high font-medium mb-4">
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
            {t("GET_STARTED")}
            <Icon
              viewClass="right-arrow w-[14px] fill-[#fff]"
              icon="right-arrow"
            />
          </ButtonLink>
        </div>
      </div>
      <div className="info-section bg-homePageBg2 bg-bottom bg-no-repeat bg-cover">
        <div className="container mx-auto px-4">
          <div className="w-full">
            <iframe
              title="Introducing pSTAKE | Multi-chain Liquid Staking"
              className="embed-responsive-item w-full h-[700px] md:h-[300px] sm:h-[200px]"
              src={VIDEO_URL}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
