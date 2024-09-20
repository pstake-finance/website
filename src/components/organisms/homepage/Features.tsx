import React from "react";
import { useTranslation } from "next-export-i18n";
import Image from "next/image";

const Features = () => {
  const { t } = useTranslation("common");
  const list = [
    {
      title: t("BTC_FEATURES_TITLE_1"),
      icon: "liquidity",
      image: "/images/galaxy.svg",
      width: 606,
      height: 326,
      content: t("BTC_FEATURES_CONTENT_1"),
    },
    {
      title: t("HOME_FEATURES_THIRD_TITLE"),
      icon: "cash",
      width: 606,
      height: 165,
      image: "/images/pstake_yields.svg",
      content: t("HOME_FEATURES_THIRD_CONTENT"),
    },
    {
      title: t("BTC_FEATURES_TITLE_3"),
      icon: "redemption",
      width: 606,
      height: 203,
      image: "/images/pstake_shield.svg",
      content: t("BTC_FEATURES_CONTENT_3"),
    },
    {
      title: t("BTC_FEATURES_TITLE_2"),
      icon: "cash",
      width: 606,
      height: 261,
      image: "/images/pstake_web.svg",
      content: t("BTC_FEATURES_CONTENT_2"),
    },
  ];

  return (
    <div className="aos-init aos-animate" data-aos="fade-up">
      <div className="container py-[100px] md:py-[35px]">
        <p className="sectionTitle md:text-[32px] text-center mb-[60px]">
          {t("HOME_FEATURES_TITLE")}
        </p>
        <div className={"flex gap-3 max-w-[1240px] mx-auto md:block"}>
          <div className="flex flex-col gap-3 md:block">
            {list.slice(0, 2).map((item, index) => (
              <div
                className="-lg:max-w-[608px] border-[#000000] bg-[#1B1B1B] rounded-[8px] border
                bg-[#1B1B1B] border-[#3A3A3A] rounded-bl-md rounded-br-md md:mb-2"
                key={index}
              >
                <div className="icon-box">
                  <Image
                    className="rounded-tl-lg rounded-tr-lg"
                    src={item.image}
                    width={item.width}
                    height={item.height}
                    title="Asset"
                    alt="Asset"
                  />
                </div>
                <div className={"px-6 py-8"}>
                  <h5 className="text-[#FCFCFC] text-[20px] font-semibold mb-4 leading-[30px]">
                    {item.title}
                  </h5>
                  <p className="text-left text-[#D5D5D5] text-base">
                    {item.content}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-col flex-wrap max-w-[1240px] mx-auto gap-3">
            {list.slice(2, list.length + 1).map((item, index) => (
              <div
                className={`${
                  index === 1 ? "flex-1" : "mb-[20px] md:mb-2"
                } -lg:max-w-[608px] border-[#000000] bg-[#1B1B1B] rounded-[8px] border bg-[#1B1B1B] border-[#3A3A3A] rounded-bl-md rounded-br-md md:mb-2`}
                key={index}
              >
                <div className="icon-box">
                  <img
                    className="rounded-tl-lg rounded-tr-lg"
                    src={item.image}
                    title="Asset"
                    alt="Asset"
                  />
                </div>
                <div className={"px-6 py-8"}>
                  <h5 className="text-[#FCFCFC] text-[20px] font-semibold mb-4 leading-[30px]">
                    {item.title}
                  </h5>
                  <p className="text-left text-[#D5D5D5] text-base">
                    {item.content}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
