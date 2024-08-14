import React from "react";
import ButtonLink from "../../atoms/buttonLink/ButtonLink";
import { useTranslation } from "next-export-i18n";

const BitcoinBanner = () => {
  const { t } = useTranslation("common");
  return (
      <div className="bg-[#252525] max-w-[1240px] mx-auto rounded-[8px] mb-[80px]">
          <div className={"h-[306px]  flex"}>
            <div className={""}>
              <img
                src={"/images/join-team.svg"}
                alt={"logo"}
                className="max-w-[410px] h-[306px]"
              />
            </div>
            <div className={"p-[54px]"}>
              <p
                className="text-[33px] lg:text-[28px] lg:leading-[40px] leading-[40px] font-bold text-[#EAEAEA] mb-[12px]">
                {t("TEAM_CONTRIBUTE_TITLE")}
              </p>
              <p className="text-[16px] leading-normal text-[#FFFFFFCC] mb-[40px] max-w-[561px]">
                {t("TEAM_CONTRIBUTE_SUB_TITLE")}
              </p>
              <ButtonLink
                className={`!rounded-[8px] bg-[#F6931A1A] hover:!bg-[#F6931A4D] border !border-[#EE972C] !text-[#FEFEFE] dropDownButton !px-0 py-3" md:text-sm !w-[293px] font-semibold !h-[48px] md:!w-[100%] group`}
                variant={"custom"}
                href={"https://www.linkedin.com/company/pstake/jobs/"}
                scale="lg"
                target={"_blank"}
                isDisabled={false}
              >
                <span className="nav-link pophover tooltip-multiline app-btn">
                  {t("EXPLORE_OPEN_POSITIONS")}
                </span>
              </ButtonLink>
            </div>
          </div>
      </div>
  );
};

export default BitcoinBanner;
