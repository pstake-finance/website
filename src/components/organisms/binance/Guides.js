import React from "react";
import { GUIDE_VIDEO_URL } from "../../../utils/config";
import Icon from "../../molecules/Icon";

const Guides = () => {
  return (
    <div className="bg-black-high aos-init aos-animate" data-aos="fade-up">
      <div className="sectionContainer py-[65px] md:py-[35px]">
        <h3 className="sectionTitle mb-6 md:mb-4">Guides & Tutorials</h3>
        <div className="">
          <div className="max-w-[50%] md:max-w-full mx-auto mb-8">
            <a
              href={GUIDE_VIDEO_URL}
              rel="noopener noreferrer"
              target="_blank"
              className="flex bg-black-emphasis border border-solid
              border-[#2a2c31] px-4 py-3 rounded-xl"
            >
              <div className="flex items-center justify-center">
                <div className="embed-responsive embed-responsive-16by9 w-[170px] md:w[120px]">
                  <iframe
                    width="100"
                    height="60"
                    title="Introducing pSTAKE | Multi-chain Liquid Staking"
                    src={GUIDE_VIDEO_URL}
                    frameBorder="0"
                    className="embed-responsive-item w-full h-[100px] md:h-[60px]"
                    allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
                  />
                </div>
                <div className="ml-4 md:ml-2">
                  <p className="flex items-center mb-3 md:mb-2">
                    <span className="font-semibold text-lg leading-snug text-light-high md:text-sm">
                      Liquid Staking BNB
                    </span>
                    <Icon
                      viewClass="redirect w-[16px] md:w-[10px] ml-2"
                      icon="redirect"
                    />
                  </p>
                  <p className="text-sm leading-normal md:text-xsm text-light-emphasis">
                    Step by step video tutorial on staking BNB through pSTAKE
                  </p>
                </div>
              </div>
            </a>
          </div>
          <div className="max-w-[50%] md:max-w-full mx-auto">
            <a
              href="https://blog.pstake.finance/2022/08/07/stkbnb-user-guide-bnb-liquid-staking-tutorial/"
              rel="noopener noreferrer"
              target="_blank"
              className="flex bg-black-emphasis border border-solid
              border-[#2a2c31] px-4 py-3 rounded-xl"
            >
              <div className="flex items-center justify-center">
                <div className="w-[170px]">
                  <img
                    src="https://blog.pstake.finance/wp-content/uploads/2022/08/user-guide-1160x620.png"
                    alt="blog"
                    className={"w-full"}
                  />
                </div>
                <div className="ml-4 md:ml-2">
                  <p className="flex items-center mb-3 md:mb-2">
                    <span className="font-semibold text-lg leading-snug text-light-high md:text-sm">
                      stkBNB User Guide
                    </span>
                    <Icon
                      viewClass="redirect w-[16px] md:w-[10px] ml-2"
                      icon="redirect"
                    />
                  </p>
                  <p className="text-sm leading-normal md:text-xsm text-light-emphasis">
                    Walk-through of how to stake BNB and use it in DeFI with
                    screenshots
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
