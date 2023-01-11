import React from "react";

import {
  VALIDATOR_ANKR,
  VALIDATOR_AVENGERS,
  VALIDATOR_CERTIC,
  VALIDATOR_COINBASE,
  VALIDATOR_DEFIBIT,
  VALIDATOR_FUJI,
  VALIDATOR_LEGEND,
  VALIDATOR_MATH,
  VALIDATOR_NODE_REAL,
  VALIDATOR_TRANCHES,
} from "../../constants/config";

const Validators = () => {
  return (
    <React.Fragment>
      <section className="validators-section">
        <div className="container">
          <h3 className="section-title">
            Why stake with one validator when you can stake with 10
          </h3>
          <p className="section-sub-title">
            pSTAKE uses a validator scoring mechanism to stake with the top 10
            validators in the BNB chain ecosystem
          </p>
          <div className="validator-list d-flex justify-content-center flex-wrap">
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
            <a href={VALIDATOR_ANKR} target="_blank" rel="noopener noreferrer">
              <img
                className=""
                src={"/images/validators/bnb/ankr.svg"}
                title="ankr"
                alt="ankr"
              />
            </a>
            <a
              href={VALIDATOR_DEFIBIT}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className=""
                src={"/images/validators/bnb/defibit.svg"}
                title="defibit"
                alt="defibit"
              />
            </a>
            <a
              href={VALIDATOR_CERTIC}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className=""
                src={"/images/validators/bnb/certic.svg"}
                title="certic"
                alt="certic"
              />
            </a>
            <a href={VALIDATOR_FUJI} target="_blank" rel="noopener noreferrer">
              <img
                className=""
                src={"/images/validators/bnb/fuji.svg"}
                title="fuji"
                alt="fuji"
              />
            </a>
            <a
              href={VALIDATOR_TRANCHES}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className=""
                src={"/images/validators/bnb/tranches.svg"}
                title="tranches"
                alt="tranches"
              />
            </a>
            <a
              href={VALIDATOR_AVENGERS}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className=""
                src={"/images/validators/bnb/avengers.svg"}
                title="avengers"
                alt="avengers"
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
    </React.Fragment>
  );
};

export default Validators;
