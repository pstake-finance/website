import React from "react";
import { useTranslation } from "next-export-i18n";

import {
  SEQUOIA_URL,
  COINBASE_VENTURES_URL,
  KRAKEN_VENTURES_URL,
  TENDERMINT_URL,
  DEFI_CAPITAL_URL,
  GALAXY_DIGITAL_URL,
  SPARTAN_CAPITAL,
  SINO_GLOBAL_CAPITAL,
  BINANCE_LABS,
} from "../../../utils/config";

const Investors = () => {
  const investorList = [
    {
      link: SEQUOIA_URL,
      image: "sequoia.svg",
    },
    {
      link: GALAXY_DIGITAL_URL,
      image: "galaxydigital.svg",
    },
    {
      link: DEFI_CAPITAL_URL,
      image: "defiance_capital.svg",
    },
    {
      link: COINBASE_VENTURES_URL,
      image: "coinbase.svg",
    },
    {
      link: KRAKEN_VENTURES_URL,
      image: "krakenventures.svg",
    },
    {
      link: SPARTAN_CAPITAL,
      image: "sparten_capital.png",
    },
    {
      link: SINO_GLOBAL_CAPITAL,
      image: "sino.svg",
    },
    {
      link: TENDERMINT_URL,
      image: "tendermint.svg",
    },
    {
      link: BINANCE_LABS,
      image: "binance_labs.svg",
    },
  ];
  const { t } = useTranslation("common");
  return (
    <section className="aos-init aos-animate bg-black-high" data-aos="fade-up">
      <div className="sectionContainer py-[65px] md:py-[35px]">
        <h4 className="sectionTitle">{t("INVESTORS")}</h4>
        <p className="sectionSubTitle mb-8">
          pSTAKE’s vision of disrupting PoS and DeFi via liquid staking
          resonates with major industry backers.
        </p>
        <div className="flex flex-wrap justify-center items-center text-center">
          {investorList.map((item, index) => (
            <a
              href={item.link}
              key={index}
              target="_blank"
              rel="noopener noreferrer"
              className="m-4 sm:m-2"
            >
              <img
                src={`/images/investors/${item.image}`}
                title={item.image}
                className="w-[240px] sm:w-[160px] md:w-[200px] bg-[#25252a] rounded-lg"
                alt={item.image}
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Investors;
