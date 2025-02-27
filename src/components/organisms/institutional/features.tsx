import React from "react";
import { useTranslation } from "next-export-i18n";

const Features = () => {
  const { t } = useTranslation();

  const featuresList = [
    {
      title: t("INSTITUTIONAL_FEATURE_1_TITLE"),
      description: t("INSTITUTIONAL_FEATURE_1_DESCRIPTION"),
      image: "/images/institutions/minimize-risks.svg",
    },
    {
      title: t("INSTITUTIONAL_FEATURE_2_TITLE"),
      description: t("INSTITUTIONAL_FEATURE_2_DESCRIPTION"),
      image: "/images/institutions/retain-full-custody.svg",
    },
    {
      title: t("INSTITUTIONAL_FEATURE_3_TITLE"),
      description: t("INSTITUTIONAL_FEATURE_3_DESCRIPTION"),
      image: "/images/institutions/interoperable.svg",
    },
    {
      title: t("INSTITUTIONAL_FEATURE_4_TITLE"),
      description: t("INSTITUTIONAL_FEATURE_4_DESCRIPTION"),
      image: "/images/institutions/leverage-btcfi-opportunities.svg",
    },
  ];

  return (
    <div className="sectionContainer py-[40px] md:py-[40px]">
      <h2 className="text-[40px] md:text-[32px] text-center font-bold mb-[60px] md:mb-[40px] text-[#FEFEFE]">
        {t("INSTITUTIONAL_FEATURES_TITLE")}
      </h2>
      <div className="grid grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-6">
        {featuresList.map((feature, index) => (
          <div
            key={index}
            className="bg-[#1B1B1B] rounded-xl flex flex-col cursor-pointer border border-[#1B1B1B] transition-all overflow-hidden"
          >
            <div className="w-full h-[240px] bg-[#0F0F0F]">
              <img
                src={feature.image}
                alt={feature.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-[20px] h-[60px] font-semibold mb-4 text-[#FEFEFE]">
                {feature.title}
              </h3>
              <p className="text-[14px] text-[#E0E0E0] leading-[21px] font-light">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
