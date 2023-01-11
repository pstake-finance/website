import React from "react";
import useTranslation from "next-translate/useTranslation";

import {
  SEQUOIA_URL,
  COINBASE_VENTURES_URL,
  KRAKEN_VENTURES_URL,
  TENDERMINT_URL,
  ALAMEDA_RESEARCH_URL,
  DEFI_CAPITAL_URL,
  GALAXY_DIGITAL_URL,
  SPARTAN_CAPITAL,
  SINO_GLOBAL_CAPITAL,
} from "../../constants/config";

const Investors = () => {
  const { t } = useTranslation("common");
  return (
    <section className="investors-section">
      <div className="container">
        <h4 className="section-title">{t("INVESTORS")}</h4>
        <p className="section-sub-title">
          pSTAKE’s vision of disrupting PoS and DeFi via liquid staking
          resonates with major industry backers.
        </p>
        <div className="tiles text-center">
          <a
            href={SEQUOIA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="tile"
          >
            <img
              className=""
              src={"/images/investors/sequoia.svg"}
              title="Sequoia"
              alt="Sequoia"
            />
          </a>
          <a
            href={GALAXY_DIGITAL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="tile"
          >
            <img
              className=""
              src={"/images/investors/galaxydigital.svg"}
              title="Galaxy Digital"
              alt="Galaxy Digital"
            />
          </a>
          <a
            href={DEFI_CAPITAL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="tile"
          >
            <img
              className=""
              src={"/images/investors/defiance_capital.svg"}
              title="Defiance Capital"
              alt="Defiance Capital"
            />
          </a>
          <a
            href={COINBASE_VENTURES_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="tile"
          >
            <img
              className=""
              src={"/images/investors/coinbase.svg"}
              title="Coinbase"
              alt="Coinbase"
            />
          </a>
          <a
            href={KRAKEN_VENTURES_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="tile"
          >
            <img
              className=""
              src={"/images/investors/krakenventures.svg"}
              title="KrakenVentures"
              alt="KrakenVentures"
            />
          </a>
          <a
            href={SPARTAN_CAPITAL}
            target="_blank"
            rel="noopener noreferrer"
            className="tile"
          >
            <img
              className=""
              src={"/images/investors/sparten_capital.png"}
              title="Spartencapital"
              alt="Spartencapital"
            />
          </a>
          <a
            href={ALAMEDA_RESEARCH_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="tile"
          >
            <img
              className=""
              src={"/images/investors/almeda.svg"}
              title="Alameda Research"
              alt="Alameda Research"
            />
          </a>
          <a
            href={SINO_GLOBAL_CAPITAL}
            target="_blank"
            rel="noopener noreferrer"
            className="tile"
          >
            <img
              className=""
              src={"/images/investors/sino.svg"}
              title="Sino"
              alt="Sino"
            />
          </a>
          <a
            href={TENDERMINT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="tile"
          >
            <img
              className=""
              src={"/images/investors/tendermint.svg"}
              title="Tendermint"
              alt="Tendermint"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Investors;
