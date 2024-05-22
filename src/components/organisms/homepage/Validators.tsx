import React from "react";
import { useTranslation } from "next-export-i18n";
import Marquee from "react-fast-marquee";

const getLogoUrl = (logoName: string) => {
  return `https://raw.githubusercontent.com/persistenceOne/frontend-images/main/pstake-website/validators/${logoName}.svg`;
};

const Validators = () => {
  const validatorList = [
    {
      image: "simply_staking",
    },
    {
      image: "p2p",
    },
    {
      image: "bridge_tower",
    },
    {
      image: "chorus",
    },
    {
      image: "frens",
    },
    {
      image: "coinbase_cloud",
    },
    {
      image: "informal_systems",
    },
    {
      image: "stake_fish",
    },
    {
      image: "haskey_cloud",
    },
    {
      image: "staking4_all",
    },
    {
      image: "figment",
    },
    {
      image: "chorus",
    },
    {
      image: "cosmostation",
    },
    {
      image: "stakely",
    },
    {
      image: "ledger",
    },
    {
      image: "ledger1",
    },
    {
      image: "math_wallet",
    },
    {
      image: "architect_nodes",
    },
    {
      image: "tranchess",
    },
    {
      image: "nodereal",
    },
    {
      image: "kitkat",
    },
    {
      image: "all_nodes",
    },
    {
      image: "polkachu",
    },
    {
      image: "provalidator",
    },
    {
      image: "enigma",
    },
  ];

  const { t } = useTranslation();
  return (
    <div className="aos-init aos-animate" data-aos="fade-up">
      <div className="container pt-[60px] py-[70px] md:py-[35px]">
        <p className="text-[40px] md:text-[32px] text-center font-bold mb-0 text-[#FEFEFE]">
          {t("VALIDATORS")}
        </p>
        <p
          className={
            "text-[20px] md:text-[16px] text-center text-[#D5D5D5] mb-[50px] max-w-[540px] mx-auto"
          }
        >
          {t("HOME_VALIDATORS_CONTENT")}
        </p>
        <div className="flex flex-wrap gap-6 justify-center items-center text-center mx-auto">
          <Marquee className={"flex"}>
            {validatorList.slice(0, 8).map((item, index) => (
              <div key={index}>
                <img
                  src={getLogoUrl(item.image)}
                  title={item.image}
                  alt={item.image}
                  className="w-[207px] md:w-[160px]  mx-2"
                />
              </div>
            ))}
          </Marquee>
          <Marquee className={"flex"} direction={"right"}>
            {validatorList.slice(8, 16).map((item, index) => (
              <div key={index}>
                <img
                  src={getLogoUrl(item.image)}
                  title={item.image}
                  alt={item.image}
                  className="w-[207px] md:w-[160px]  mx-2"
                />
              </div>
            ))}
          </Marquee>
          <Marquee className={"flex"}>
            {validatorList
              .slice(16, validatorList.length + 1)
              .map((item, index) => (
                <div key={index}>
                  <img
                    src={getLogoUrl(item.image)}
                    title={item.image}
                    alt={item.image}
                    className="w-[207px] md:w-[160px] mx-2"
                  />
                </div>
              ))}
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default Validators;
