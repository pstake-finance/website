import React from "react";
import Image from "next/image";
import Icon from "../../molecules/Icon";
import { useTranslation } from "next-export-i18n";
import ButtonLink from "../../atoms/buttonLink/ButtonLink";
import { PSTAKE_APP_URL } from "../../../utils/config";

const Uses = () => {
  const { t } = useTranslation();
  const list = [
    {
      title: t("PSTAKE_WHY_USED1_TITLE"),
      image: "/images/protocol_governance.svg",
      content: t("PSTAKE_WHY_USED1_CONTENT"),
      sub_content: t("PSTAKE_WHY_USED1_CONTENT2"),
      buttonText: t("PARTICIPATE"),
      buttonLink: "https://forum.pstake.finance/",
    },
    {
      title: t("PSTAKE_WHY_USED2_TITLE"),
      image: "/images/btc_incentive.svg",
      content: t("PSTAKE_WHY_USED2_CONTENT"),
      sub_content: t("PSTAKE_WHY_USED2_CONTENT2"),
      buttonText: t("STAKE_BTC"),
      buttonLink: "https://app.btc.pstake.finance/",
    },
  ];
  return (
    <div className="bg-[#141414]">
      <div className="max-w-[1280px] mx-auto pt-[60px] pb-[100px] px-[30px] md:px-[10px] md:mx-4 md:py-[35px]">
        <h3 className="sectionTitle mb-8 md:mb-6 max-w-[1060px] mx-auto">
          {t("PSTAKE_WHY_USED_TITLE")}
        </h3>
        <div className="flex flex-wrap gap-8 md:block">
          {list.map((item, index) => (
            <div
              className="flex-1 mt-4 pt-12 md:pt-4"
              data-aos="fade-up"
              key={index}
            >
              <div
                className="bg-[#1B1B1B] h-full
              rounded-[16px] shadow-md border border-[#3A3A3A] flex flex-col"
              >
                <div className="h-auto">
                  <img
                    src={item.image}
                    alt={item.title}
                    className={"w-full h-full"}
                  />
                </div>
                <div className="flex-1 content md:p-4 p-6 flex flex-col justify-between">
                  <div>
                    <p className="leading-[40px] text-[26px] text-light-high font-semibold mb-3 md:text-lg">
                      {item.title}
                    </p>
                    <p className="text-[18px] leading-[27px] text-[#ADADAD] mb-6 -lg:h-[110px]">
                      {item.content}
                    </p>
                    <p className="font-bold leading-[30px] text-[20px] text-light-full mb-6">
                      {item.sub_content}
                    </p>
                  </div>
                  <div>
                    <ButtonLink
                      className={`!rounded-[8px] bg-[#F6931A1A] hover:!bg-[#F6931A4D] border !border-[#EE972C] !text-[#FEFEFE] dropDownButton !px-0 py-3" md:text-sm !w-[298px] font-semibold !h-[48px] md:!w-[100%] group`}
                      variant={"custom"}
                      href={item.buttonLink}
                      scale="lg"
                      target={"_blank"}
                      isDisabled={false}
                    >
                      <span className="nav-link pophover tooltip-multiline app-btn">
                        {item.buttonText}
                      </span>
                    </ButtonLink>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Uses;
