import React from "react";
import { useTranslation } from "next-export-i18n";
import ButtonLink from "../../atoms/buttonLink/ButtonLink";
import Icon from "../../molecules/Icon";
import { INSTITUTIONAL_CONTACT_US } from "../../../utils/config";

const ReadyToStake = () => {
  const { t } = useTranslation("common");
  return (
    <div className="mt-12 bg-[#1B1B1B] bg-readyToStakeBannerBg bg-no-repeat">
      <div className="container py-[60px] md:py-[35px]">
        <div
          className={"flex gap-3 max-w-[1240px] mx-auto md:block items-center"}
        >
          <div className={"flex-1 max-w-[705px]"}>
            <p className="text-[40px] lg:text-[28px] lg:leading-[40px] leading-[60px] font-semibold mb-0 text-[#FCFCFC] mb-[12px]">
              {"Ready to Stake?"}
            </p>
            <p className="text-[18px] md:text-[14px] font-light text-[#D5D5D5] leading-[32px]">
              {
                "Secure your Bitcoin, earn yield, and tap into the multi-billion-dollar potential of institutional BTC staking custom tailored as per your needs."
              }
            </p>
            <ButtonLink
              className={`!rounded-[8px] mt-4 !bg-[#F6931A1A] hover:!bg-[#F6931A4D] border !border-[#EE972C] !text-[#FEFEFE] dropDownButton md:!w-[170px] -md:!w-[220px] md:py-2 !py-3 md:text-sm md:!text-[12px] !text-[18px] !font-normal`}
              variant={"outline"}
              href={INSTITUTIONAL_CONTACT_US}
              scale="lg"
              target={"_blank"}
              isDisabled={false}
            >
              <span className="nav-link pophover tooltip-multiline app-btn text-[16px] font-semibold flex gap-2 items-center">
                Contact Us
                <Icon viewClass="!w-[17px] !h-[17px]" icon={"email"} />
              </span>
            </ButtonLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReadyToStake;
