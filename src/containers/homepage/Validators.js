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
} from "../../constants/config";
import { useTranslation } from "react-i18next";

const Validators = () => {
  const { t } = useTranslation("common");
  return (
    <section className="validators-section homepage">
      <div className="container">
        <h3 className="section-title">{t("VALIDATORS")}</h3>
        <p className="section-sub-title">
          pSTAKE’s validator scoring mechanism ensures our liquid staking
          ecosystem consists of top-performing validators across supported
          networks.
        </p>
        <div className="tiles text-center">
          <a
            href={STAKEFISH}
            target="_blank"
            rel="noopener noreferrer"
            className="tile"
          >
            <img
              className=""
              src={"/images/validators/stakefish.svg"}
              title="Stakefish"
              alt="Stakefish"
            />
          </a>
          <a
            href={FIGMENT}
            target="_blank"
            rel="noopener noreferrer"
            className="tile"
          >
            <img
              className=""
              src={"/images/validators/figment.svg"}
              title="Figment"
              alt="Figment"
            />
          </a>
          <a
            href={EVERSTAKE}
            target="_blank"
            rel="noopener noreferrer"
            className="tile"
          >
            <img
              className=""
              src={"/images/validators/everstake.svg"}
              title="Everstake"
              alt="Everstake"
            />
          </a>
          <a
            href={CHORUS}
            target="_blank"
            rel="noopener noreferrer"
            className="tile"
          >
            <img
              className=""
              src={"/images/validators/chorus.svg"}
              title="Chorus"
              alt="Chorus"
            />
          </a>
          <a
            href={COSMOSTATION}
            target="_blank"
            rel="noopener noreferrer"
            className="tile"
          >
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
            className="tile"
          >
            <img
              className=""
              src={"/images/validators/bnb/legend.svg"}
              title="legend"
              alt="legend"
            />
          </a>
          <a
            href={VALIDATOR_MATH}
            target="_blank"
            rel="noopener noreferrer"
            className="tile"
          >
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
            className="tile"
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
            className="tile"
          >
            <img
              className=""
              src={"/images/validators/bnb/tranches.svg"}
              title="tranches"
              alt="tranches"
            />
          </a>
          <a
            href={VALIDATOR_NODE_REAL}
            target="_blank"
            rel="noopener noreferrer"
            className="tile"
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
  );
};

export default Validators;
