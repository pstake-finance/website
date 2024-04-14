import React from "react";
import ButtonLink from "../../atoms/buttonLink/ButtonLink";
import { PSTAKE_APP_URL } from "../../../utils/config";

const Token = () => {
  const list = [
    {
      logo: "",
    },
    {
      logo: "",
    },
    {
      logo: "",
    },
  ];

  return (
    <div className="bg-[#1B1B1B] aos-init aos-animate" data-aos="fade-up">
      <div className="container ">
        <div className="flex flex-wrap justify-between py-[60px] max-w-[1240px] mx-auto">
          <div className={"max-w-[648px]"}>
            <p className={"font-bold text-[44px] text-[#fcfcfc] mb-6"}>
              Fueling Multi-Chain <br /> Liquid Staking
            </p>
            <p className={"text-[18px] text-[#D5D5D5] mb-[48px]"}>
              PSTAKE is the governance and incentivization token of pSTAKE
              <br />
              Finance’s liquid staking ecosystem.
            </p>
            <ButtonLink
              className={`dropDownButton py-3" md:text-sm !w-[293px] font-semibold !h-[48px]`}
              variant={"outline"}
              href={PSTAKE_APP_URL}
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
              className="w-[270px] h-[270px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Token;
