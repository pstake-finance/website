import React from "react";
import Card from "react-bootstrap/Card";
import { useTranslation } from "next-export-i18n";
import { GUIDE_VIDEO_URL } from "../../../utils/config";
import Icon from "../../molecules/Icon";

const Guides = () => {
  const { t } = useTranslation("common");
  return (
    <div className="bg-black-high aos-init aos-animate" data-aos="fade-up">
      <div className="sectionContainer py-[65px] md:py-[35px]">
        <h3 className="sectionTitle mb-6 md:mb-4">
          Explore the step-by-step guide
        </h3>
        <div className="">
          <div className="max-w-[50%] md:max-w-full mx-auto">
            <a
              href="https://blog.pstake.finance/2023/07/27/stketh-v2-marvel-testnet-user-guide/"
              rel="noopener noreferrer"
              target="_blank"
              className="flex bg-black-emphasis border border-solid
              border-[#2a2c31] px-4 py-3 rounded-xl"
            >
              <div className="flex items-center justify-center">
                <div className="w-[140px]">
                  <img
                    src="/images/stkEth_lg.svg"
                    alt="blog"
                    className={"w-[100px] m-auto"}
                  />
                </div>
                <div className="ml-4 md:ml-2">
                  <p className="flex items-center mb-3 md:mb-2">
                    <span className="font-semibold text-lg leading-snug text-light-high md:text-sm">
                      stkETH User Guide
                    </span>
                    <Icon
                      viewClass="redirect w-[16px] md:w-[10px] ml-2"
                      icon="redirect"
                    />
                  </p>
                  <p className="text-sm leading-normal md:text-xsm text-light-emphasis">
                    stkETH v2 Marvel Testnet User Guide
                  </p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Guides;
