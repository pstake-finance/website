import React from "react";
import Image from "next/image";
import Icon from "../../molecules/Icon";
import { useTranslation } from "next-export-i18n";

const Reasons = () => {
  const { t } = useTranslation();
  const list = [
    {
      title: <>{t("BTC_WHY_BUILD_TITLE_1")} </>,
      image: "/images/btc/building_asset1.svg",
      content: t("BTC_WHY_BUILD_CONTENT_1"),
      highlight: t("BTC_WHY_BUILD_CONTENT_1_HIGHLIGHT"),
      direction: "normal",
    },
    {
      title: t("BTC_WHY_BUILD_TITLE_2"),
      image: "/images/btc/building_asset2.svg",
      content: t("BTC_WHY_BUILD_CONTENT_2"),
      highlight: t("BTC_WHY_BUILD_CONTENT_2_HIGHLIGHT"),
      direction: "reverse",
    },
    {
      title: t("BTC_WHY_BUILD_TITLE_3"),
      image: "/images/btc/building_asset3.svg",
      content: t("BTC_WHY_BUILD_CONTENT_3"),
      highlight: t("BTC_WHY_BUILD_CONTENT_3_HIGHLIGHT"),
      direction: "normal",
    },
  ];
  return (
    <div className="bg-[#141414]">
      <div className="max-w-[1272px] mx-auto py-[65px]  md:mx-4 md:py-[35px]">
        <h3 className="sectionTitle mb-8 md:mb-6 max-w-[1060px] mx-auto">
          {t("BTC_WHY_BUILD_HEADING")}
        </h3>
        <div className="">
          {list.map((item, index) => (
            <div
              className="flex-1 mt-4 pt-12 md:pt-4"
              data-aos="fade-up"
              key={index}
            >
              <div
                className={` h-full flex gap-[30px]
              rounded-md ${
                item.direction === "reverse" ? "flex-row-reverse" : "flex-row"
              }`}
              >
                <div className="w-[481px] h-[360px] relative">
                  <Image src={item.image} alt={item.title} fill />
                </div>
                <div className="content flex-1 pt-[32px]">
                  <p className="font-semibold leading-snug text-[40px] text-light-high mb-6 md:text-lg">
                    {item.title}
                  </p>
                  <p className="font-normal text-[18px] leading-loose text-[#E0E0E0]">
                    {item.content}
                  </p>
                  <p className="font-bold text-[24px] leading-loose text-[#EE972C]">
                    {item.highlight}
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
