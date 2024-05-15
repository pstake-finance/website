import React from "react";
import ButtonLink from "../../atoms/buttonLink/ButtonLink";

const Token = () => {
  return (
    <div className="bg-[#1B1B1B] aos-init aos-animate" data-aos="fade-up">
      <div className="container">
        <div className="flex flex-wrap justify-between py-[60px] max-w-[1240px] mx-auto">
          <div className={"max-w-[600px]"}>
            <p
              className={
                "font-bold text-[44px] md:text-[32px] text-[#fcfcfc] mb-6"
              }
            >
              Fueling Bitcoin Liquid Staking
            </p>
            <p
              className={"text-[18px] text-[#D5D5D5] md:text-[16px] mb-[48px]"}
            >
              PSTAKE is the governance and incentivization token of pSTAKE
              Finance’s liquid staking ecosystem.
            </p>
            <ButtonLink
              className={`hover:!bg-[#E509134D] dropDownButton py-3" md:text-sm !w-[293px] font-semibold !h-[48px] md:!w-[100%]`}
              variant={"outline"}
              href={"https://www.coingecko.com/en/coins/pstake-finance"}
              scale="lg"
              target={"_blank"}
              isDisabled={false}
            >
              <span className="nav-link pophover tooltip-multiline app-btn">
                Get PSTAKE
              </span>
            </ButtonLink>
          </div>
          <div>
            {" "}
            <img
              src={"/images/pstake_coin.svg"}
              alt={"pstake"}
              className="w-[270px] h-[270px] md:absolute md:top-0 md:opacity-[0.1] md:w-[200px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Token;