import React from "react";
import ButtonLink from "../../atoms/buttonLink/ButtonLink";
import { useTranslation } from "next-export-i18n";

const BitcoinBanner = () => {
  const { t } = useTranslation("common");
  return (
    <div className="aos-init aos-animate" data-aos="fade-up">
      <div className="container py-[60px] md:py-[35px]">
        <div
          className={"flex gap-3 max-w-[1240px] mx-auto md:block items-center"}
        >
          <div className={"w-[40%] mr-auto"}>
            <img
              src={"/images/btc_stake.svg"}
              alt={"btc_stake"}
              className={"max-w-[360px] mr-auto"}
            />
          </div>
          <div className={"flex-1 max-w-[645px]"}>
            <p className="text-[40px] md:text-[32px] font-bold mb-0 text-[#FCFCFC] mb-[24px]">
              {t("HOME_BITCOIN_TITLE")}
            </p>
            <p className="text-[18px] md:text-[14px]  text-[#D5D5D5] mb-[44px]">
              {t("HOME_BITCOIN_SUB_TITLE")}
            </p>
            <ButtonLink
              className={`hover:!bg-[#E509134D] dropDownButton py-3" md:text-base !w-[293px] font-semibold md:!h-[42px] !h-[48px] md:!w-[100%]`}
              variant={"outline"}
              href={"/btc"}
              scale="lg"
              target={"_blank"}
              isDisabled={false}
            >
              <span className="nav-link pophover tooltip-multiline app-btn">
                {t("LEARN_MORE")}
              </span>
            </ButtonLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BitcoinBanner;
