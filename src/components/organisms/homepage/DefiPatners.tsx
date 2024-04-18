import React from "react";
import {
  CHORUS,
  COSMOSTATION,
  EVERSTAKE,
  FIGMENT,
  STAKEFISH,
  VALIDATOR_COINBASE,
  VALIDATOR_LEGEND,
  VALIDATOR_MATH,
  VALIDATOR_NODE_REAL,
  VALIDATOR_TRANCHES,
} from "../../../utils/config";
import { useTranslation } from "next-export-i18n";
import Marquee from "react-fast-marquee";
import { useWindowSize } from "../../../customHooks/useWindowSize";

const getLogoUrl = (logoName: string) => {
  return `https://raw.githubusercontent.com/persistenceOne/frontend-images/main/pstake-website/defi_patners/dark/${logoName}.svg`;
};

const DefiPatners = () => {
  const defiList = [
    {
      image: "osmosis",
    },
    {
      image: "thena",
    },
    {
      image: "dexter",
    },
    {
      image: "nolus",
    },
    {
      image: "pancake",
    },
    {
      image: "mars",
    },
    {
      image: "skip",
    },
    {
      image: "venus",
    },
    {
      image: "radiant",
    },
    {
      image: "astroport",
    },
    {
      image: "inter_protocol",
    },
    {
      image: "shade",
    },
    {
      image: "umee",
    },
    {
      image: "quasar",
    },
    {
      image: "beefy",
    },
    {
      image: "kujira",
    },
  ];

  const { isMobile } = useWindowSize();

  const { t } = useTranslation("common");
  return (
    <div className="aos-init aos-animate" data-aos="fade-up">
      <div className="mx-auto pt-[60px] py-[70px] md:py-[35px]">
        <p className="text-[40px] md:text-[32px] text-center font-bold mb-0 text-[#FEFEFE]">
          DeFi Partners
        </p>
        <p
          className={
            "text-[20px] md:text-[16px] text-center text-[#D5D5D5] mb-[50px] max-w-[540px] mx-auto"
          }
        >
          Industry-leading DeFi protocols help grow liquid staking yield with
          pSTAKE Finance.
        </p>
        <div className="flex flex-wrap gap-6 justify-center items-center text-center max-w-[1240px] mx-auto">
          {isMobile ? (
            <Marquee className={"flex"}>
              {defiList.map((item, index) => (
                <div key={index}>
                  <img
                    src={getLogoUrl(item.image)}
                    title={item.image}
                    alt={item.image}
                    className="w-[292px] md:w-[180px] md:mr-[25px]"
                  />
                </div>
              ))}
            </Marquee>
          ) : (
            defiList.map((item, index) => (
              <div key={index}>
                <img
                  src={getLogoUrl(item.image)}
                  title={item.image}
                  alt={item.image}
                  className="w-[292px] md:w-[180px] md:mr-[25px]"
                />
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default DefiPatners;
