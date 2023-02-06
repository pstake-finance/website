import React from "react";
import Card from "react-bootstrap/Card";
import useTranslation from "next-translate/useTranslation";
import Icon from "../../Icon";

const SectionTwo = () => {
  const { t } = useTranslation("common");
  const list = [
    {
      title: t("WHY_PSTAKE_FOR_BNB_ONE_HEADING"),
      icon: "usecase1",
      content:
        "Receive stkBNB to maintain liquidity of otherwise locked BNB\n" +
        "                    when you stake",
    },
    {
      title: "Yields. Yields. Yields.",
      icon: "usecase2",
      content:
        "Generate the highest yields with auto-compounding BNB\n" +
        "                    staking rewards & various stkBNB DeFi opportunities, all\n" +
        "                    while securing the BNB chain network",
    },
    {
      title: t("WHY_PSTAKE_FOR_BNB_THREE_HEADING"),
      icon: "usecase3",
      content: t("WHY_PSTAKE_FOR_BNB_THREE_CONTENT"),
    },
  ];
  return (
    <div className="bg-black-high">
      <div className="sectionContainer py-[65px] md:py-[35px]">
        <h3 className="sectionTitle mb-12 md:mb-6">
          {t("WHY_PSTAKE_FOR_BNB")}
        </h3>
        <div className="flex flex-wrap">
          {list.map((item, index) => (
            <div
              className="-lg:basis-[33.3%] -lg:max-w-[33.3%] px-4 mt-4 pt-12 md:pt-4"
              data-aos="fade-up"
              key={index}
            >
              {index === 0 ? (
                <div className="feature-circle-red" />
              ) : index === 2 ? (
                <div className="feature-circle-two yellow" />
              ) : null}
              <div
                className="bg-black-emphasis md:p-4 p-8 h-full opacity-90
              rounded-md border border-solid border-[#2a2c31]"
              >
                <div className="py-6">
                  <Icon
                    viewClass="use-case w-[34px] fill-[#f0b90b]"
                    icon={item.icon}
                  />
                </div>
                <div className="content">
                  <p className="font-bold leading-snug text-base text-light-full mb-6">
                    {item.title}
                  </p>
                  <p className="font-normal text-sm leading-loose text-light-emphasis">
                    {item.content}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectionTwo;
