import React from "react";
import { useTranslation } from "next-export-i18n";

const StakingSteps = () => {
  const { t } = useTranslation();
  return (
    <div className="aos-init aos-animate" data-aos="fade-up">
      <div className="container pt-[60px] py-[70px] lg:py-[35px]">
        <p className="text-[40px] lg:text-[32px] text-center font-bold mb-0 text-[#FEFEFE] mb-[70px]">
          {t("HOME_STAKING_STEPS_TITLE")}
        </p>
        <div className="mb-6 max-w-[1240px] mx-auto ">
          <div
            className={
              "flex lg:mx-auto  lg:block items-center justify-center -lg:ml-[50px]"
            }
          >
            <div
              className={
                "flex items-center lg:flex-1 lg:mb-2 relative lg:justify-center lg:block"
              }
            >
              <div
                className={
                  "text-[#C7323880] -lg:absolute -lg:-left-[85px] -lg:-top-[56px] text-[78px] lg:text-[32px] mr-4 font-bold "
                }
              >
                01
              </div>
              <div className={""}>
                <p className="text-[#FCFCFC] font-semibold mb-3 text-[26px] leading-[39px]">
                  {t("HOME_STAKING_STEPS_ONE_TITLE")}
                </p>
                <p className="text-[#ECECEC] text-[14px] w-[220px] break-words leading-[21px] lg:w-fit">
                  {t("HOME_STAKING_STEPS_ONE_CONTENT")}
                  <span className={"invisible"}>dummy text </span>
                </p>
              </div>
            </div>
            <div
              className={`bg-[#ECECEC] w-[156px] h-[1px] mx-4 lg:mx-2 lg:hidden`}
            />
            <div
              className={
                "flex items-center lg:flex-1 lg:mb-2 relative lg:justify-center lg:block"
              }
            >
              <div
                className={
                  "text-[#C7323880] -lg:absolute -lg:-left-[105px] -lg:-top-[56px] text-[78px] mr-4 lg:text-[32px] font-bold"
                }
              >
                02
              </div>
              <div className={""}>
                <p className="text-[#FCFCFC] font-semibold mb-3 text-[26px] leading-[39px]">
                  {t("HOME_STAKING_STEPS_TWO_TITLE")}
                </p>
                <p className="text-[#ECECEC] text-[14px] w-[260px] break-words leading-[21px] lg:w-fit">
                  {t("HOME_STAKING_STEPS_TWO_CONTENT")}
                </p>
              </div>
            </div>
            <div
              className={`bg-[#ECECEC] w-[156px] h-[1px] mx-4 lg:mx-2 lg:hidden `}
            />
            <div
              className={
                "flex items-center lg:flex-1 relative  lg:justify-center lg:block"
              }
            >
              <div
                className={
                  "text-[#C7323880] -lg:absolute -lg:-left-[105px] -lg:-top-[56px] text-[78px] lg:text-[32px] mr-4 font-bold"
                }
              >
                03
              </div>
              <div className={""}>
                <p className="text-[#FCFCFC] font-semibold mb-3 text-[26px] leading-[39px]">
                  {t("HOME_STAKING_STEPS_THREE_TITLE")}
                </p>
                <p className="text-[#ECECEC] text-[14px] w-[212px] break-words leading-[21px] lg:w-fit">
                  {t("HOME_STAKING_STEPS_THREE_CONTENT")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StakingSteps;
