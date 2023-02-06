import React from "react";
import useTranslation from "next-translate/useTranslation";

import {
  STAKEFISH,
  FIGMENT,
  EVERSTAKE,
  CHORUS,
  COSMOSTATION,
  PSTAKE_TRAIL_OF_BITS,
  PSTAKE_CERTORA,
  VALIDATOR_NODE_REAL,
  VALIDATOR_TRANCHES,
  VALIDATOR_COINBASE,
  VALIDATOR_MATH,
  VALIDATOR_LEGEND,
  HALBOR_AUDIT_REPORT,
  PSTAKE_SOLIDFIED_AUDIT,
  PSTAKE_PECKSHIELD_AUDIT,
  PSTAKE_OAK_AUDIT,
} from "../../../constants/config";
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
  PSTAKE_DILIGENCE_AUDIT,
} from "../../../constants/config";

const Investors = () => {
  const { t } = useTranslation("common");
  return (
    <React.Fragment>
      <section className="investors">
        <div className="container">
          <h4 className="section-title">{t("Security Audits")}</h4>
          <p className="section-sub-title">
            pSTAKE’s liquid staking solution has been, and continues to be,
            audited by the industry’s best in blockchain security
          </p>
          <div className="investor-list">
            <a
              href={HALBOR_AUDIT_REPORT}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className=""
                src={"/images/audits/halborn_black.svg"}
                title="halborn"
                alt="halborn"
              />
            </a>
            <a
              href={PSTAKE_TRAIL_OF_BITS}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className=""
                src={"/images/audits/trail_of_bits.svg"}
                title="Trail Of Bits"
                alt="Trail Of Bits"
              />
            </a>
            <a
              href={PSTAKE_DILIGENCE_AUDIT}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className=""
                src={"/images/audits/diligence.svg"}
                title="Digilence"
                alt="Digilence"
              />
            </a>
          </div>
          <div className="investor-list">
            <a
              href={PSTAKE_SOLIDFIED_AUDIT}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className=""
                src={"/images/audits/solidified.svg"}
                title="Solidified"
                alt="Solidified"
              />
            </a>
            <a
              href={PSTAKE_PECKSHIELD_AUDIT}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className=""
                src={"/images/audits/peckshield.svg"}
                title="Peckshield"
                alt="Peckshield"
              />
            </a>
            <a
              href={PSTAKE_OAK_AUDIT}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className=""
                src={"/images/audits/aok.svg"}
                title="AOK"
                alt="AOK"
              />
            </a>
          </div>
          <div className="investor-list">
            <a href={PSTAKE_CERTORA} target="_blank" rel="noopener noreferrer">
              <img
                className=""
                src={"/images/audits/certora_black.svg"}
                title="certora"
                alt="certora"
              />
            </a>
          </div>
        </div>
      </section>
      <section className="investors">
        <div className="container">
          <h3 className="section-title">{t("VALIDATORS")}</h3>
          <p className="section-sub-title">
            pSTAKE’s validator scoring mechanism ensures our liquid staking
            ecosystem consists of top-performing validators across supported
            networks.
          </p>
          <div className="investor-list">
            <a href={STAKEFISH} target="_blank" rel="noopener noreferrer">
              <img
                className=""
                src={"/images/validators/stakefish"}
                title="Stakefish"
                alt="Stakefish"
              />
            </a>
            <a href={FIGMENT} target="_blank" rel="noopener noreferrer">
              <img
                className=""
                src={"/images/validators/figment.svg"}
                title="Figment"
                alt="Figment"
              />
            </a>
            <a href={EVERSTAKE} target="_blank" rel="noopener noreferrer">
              <img
                className=""
                src={"/images/validators/everstake.svg"}
                title="Everstake"
                alt="Everstake"
              />
            </a>
            <a href={CHORUS} target="_blank" rel="noopener noreferrer">
              <img
                className=""
                src={"/images/validators/chorus.svg"}
                title="Chorus"
                alt="Chorus"
              />
            </a>
            <a href={COSMOSTATION} target="_blank" rel="noopener noreferrer">
              <img
                className=""
                src={"/images/validators/cosmostation.svg"}
                title="Cosmostation"
                alt="Cosmostation"
              />
            </a>
            <a
              href={VALIDATOR_LEGEND}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className=""
                src={"/images/validators/bnb/legend.svg"}
                title="legend"
                alt="legend"
              />
            </a>
            <a href={VALIDATOR_MATH} target="_blank" rel="noopener noreferrer">
              <img
                className=""
                src={"/images/validators/bnb/math_wallet.svg"}
                title="math_wallet"
                alt="math_wallet"
              />
            </a>
            <a
              href={VALIDATOR_COINBASE}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className=""
                src={"/images/validators/bnb/cloud.svg"}
                title="cloud"
                alt="cloud"
              />
            </a>
            <a
              href={VALIDATOR_TRANCHES}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className=""
                src={"/images/validators/bnb/tranches.sv"}
                title="tranches"
                alt="tranches"
              />
            </a>
            <a
              href={VALIDATOR_NODE_REAL}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className=""
                src={"/images/validators/bnb/nodreal.svg"}
                title="nodreal"
                alt="nodreal"
              />
            </a>
          </div>
        </div>
      </section>
      <section className="investors">
        <div className="container">
          <h4 className="section-title">{t("INVESTORS")}</h4>
          <p className="section-sub-title">
            pSTAKE’s vision of disrupting PoS and DeFi via liquid staking
            resonates with major industry backers.
          </p>
          <div className="investor-list">
            <a href={SEQUOIA_URL} target="_blank" rel="noopener noreferrer">
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
            >
              <img
                className=""
                src={"/images/investors/krakenventures.svg"}
                title="KrakenVentures"
                alt="KrakenVentures"
              />
            </a>
            <a href={SPARTAN_CAPITAL} target="_blank" rel="noopener noreferrer">
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
            >
              <img
                className=""
                src={"/images/investors/sino.svg"}
                title="Sino"
                alt="Sino"
              />
            </a>
            <a href={TENDERMINT_URL} target="_blank" rel="noopener noreferrer">
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
    </React.Fragment>
  );
};

export default Investors;
