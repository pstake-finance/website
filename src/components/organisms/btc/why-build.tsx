import React from "react";
import Image from "next/image";
import Icon from "../../molecules/Icon";
import { useTranslation } from "next-export-i18n";

const Reasons = () => {
  const { t } = useTranslation();
  const list = [
    {
      title: (
        <>
          {t("BTC_WHY_BUILD_TITLE_1")}{" "}
          <span className={"invisible"}>BTC_WHY_BUILD_TITLE_1 </span>
        </>
      ),
      image: "/images/btc/building_asset1.svg",
      content: t("BTC_WHY_BUILD_CONTENT_1"),
    },
    {
      title: t("BTC_WHY_BUILD_TITLE_2"),
      image: "/images/btc/building_asset2.svg",
      content: t("BTC_WHY_BUILD_CONTENT_2"),
    },
    {
      title: t("BTC_WHY_BUILD_TITLE_3"),
      image: "/images/btc/building_asset3.svg",
      content: t("BTC_WHY_BUILD_CONTENT_3"),
    },
  ];
  return (
    <div className="bg-[#030200]">
      <div className="max-w-[1272px] mx-auto py-[65px]  md:mx-4 md:py-[35px]">
        <h3 className="sectionTitle mb-8 md:mb-6 max-w-[1060px] mx-auto">
          {t("BTC_WHY_BUILD_HEADING")}
        </h3>
        <div className="flex flex-wrap gap-5 md:block">
          {list.map((item, index) => (
            <div
              className="flex-1 mt-4 pt-12 md:pt-4"
              data-aos="fade-up"
              key={index}
            >
              <div
                className="bg-[#1B1B1B] h-full
              rounded-md shadow-md"
              >
                <div className="h-auto">
                  <img
                    src={item.image}
                    alt={item.title}
                    className={"w-full h-full"}
                  />
                </div>
                <div className="content md:p-4 px-8 py-4">
                  <p className="font-semibold leading-snug text-[26px] text-light-high mb-6 md:text-lg">
                    {item.title}
                  </p>
                  <p className="font-normal text-[18px] leading-loose text-[#E0E0E0]">
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

export default Reasons;
