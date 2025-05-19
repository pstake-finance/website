import React from "react";
import { useTranslation } from "next-export-i18n";
import Image from "next/image";
import Icon from "../../molecules/Icon";
import ButtonLink from "../../atoms/buttonLink/ButtonLink";
import { INSTITUTIONAL_CONTACT_US } from "../../../utils/config";

const Hero = () => {
  const { t } = useTranslation();

  return (
    <div className="sectionContainer py-[100px] md:py-[40px]">
      <div className="grid grid-cols-2 md:grid-cols-1 gap-8 items-center">
        <div>
          <h1 className="text-[48px] md:text-[32px] font-bold text-[#FEFEFE] mb-6">
            {t("INSTITUTIONAL_HERO_TITLE")}
          </h1>
          <p className="text-[18px] md:text-[16px] !text-[#D5D5D5] font-light mb-8 leading-[32px]">
            {t("INSTITUTIONAL_HERO_DESCRIPTION")}
          </p>
          <ButtonLink
            className={`!rounded-[8px] !bg-[#F6931A1A] hover:!bg-[#F6931A4D] border !border-[#EE972C] !text-[#FEFEFE] dropDownButton md:!w-[170px] -md:!w-[220px] md:py-2 !py-3 md:text-sm md:!text-[12px] !text-[18px] !font-normal`}
            variant={"outline"}
            href={INSTITUTIONAL_CONTACT_US}
            scale="lg"
            target={"_blank"}
            isDisabled={false}
          >
            <span className="nav-link pophover tooltip-multiline app-btn text-[16px] font-semibold flex gap-2 items-center">
              {t("INSTITUTIONAL_HERO_BUTTON")}
              <Icon viewClass="!w-[17px] !h-[17px]" icon={"email"} />
            </span>
          </ButtonLink>
        </div>
        <div className="relative">
          <img
            src="/images/institutions/hero-image.svg"
            alt="Bitcoin Staking"
            width={620}
            height={400}
            // className="w-[540px] h-[400px] object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
