import React from "react";
import { useTranslation } from "next-export-i18n";
import Timeline from "./time-line";

const RoadmapContainer = () => {
  const { t } = useTranslation("common");

  return (
    <div className="bg-[#141414] aos-init aos-animate mb-[60px]"  data-aos="zoom-in-right">
      <div className="max-w-[1220px] mx-auto  md:mx-4 pt-[170px] pb-[30px] lg:pb-[40px]">
        <h3 className="text-[40px] leading-[60px] text-light-high font-bold mb-3 md:mb-4 text-center">
          {t('ROAD_MAP_PAGE_TITLE')}
        </h3>
        <p className="text-[20px] leading-[25px] text-[#ADADAD] mb-[60px] md:mb-[20px[ text-center max-w-[620px] mx-auto">
          {t('ROAD_MAP_PAGE_SUB_TITLE')}
        </p>
      <div className={""}>
        <Timeline/>
      </div>
      </div>
    </div>
  );
};

export default RoadmapContainer;
