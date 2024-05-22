import React from "react";
import Card from "react-bootstrap/Card";
import Icon from "../../molecules/Icon";
import { useTranslation } from "next-export-i18n";

const Features = () => {
  const { t } = useTranslation();
  const list = [
    {
      title: t("BTC_FEATURES_TITLE_1"),
      icon: "btc_feature1",
      content: t("BTC_FEATURES_CONTENT_1"),
    },
    {
      title: t("BTC_FEATURES_TITLE_2"),
      icon: "btc_feature2",
      content: t("BTC_FEATURES_CONTENT_2"),
    },
    {
      title: (
        <>
          {t("BTC_FEATURES_TITLE_3")}{" "}
          <span className={"invisible"}>BTC_FEATURES_TITLE_3 </span>
        </>
      ),
      icon: "btc_feature3",
      content: t("BTC_FEATURES_CONTENT_3"),
    },
  ];
  return (
    <div className="bg-[#030200]">
      <div className="max-w-[1272px] mx-auto  md:mx-4 py-[65px] md:py-[35px]">
        <h3 className="sectionTitle mb-8 md:mb-6 max-w-[700px] mx-auto">
          {t("BTC_FEATURES_TITLE")}
        </h3>
        <div className="flex flex-wrap">
          {list.map((item, index) => (
            <div
              className="-lg:basis-[33.3%] -lg:max-w-[33.3%] px-4 mt-4 pt-12 md:pt-4"
              data-aos="fade-up"
              key={index}
            >
              <div
                className="bg-[#1B1B1B] md:p-4 p-8 h-full opacity-90
              rounded-md border border-solid border-[#FFFFFF00]"
              >
                <div className="pb-6">
                  <Icon viewClass=" w-[40px]" icon={item.icon} />
                </div>
                <div className="content">
                  <p className="font-bold leading-snug text-[20px] md:text-base text-light-high mb-6">
                    {item.title}
                  </p>
                  <p className="font-normal text-[14px] leading-[28px] text-[#E0E0E0]">
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

export default Features;
