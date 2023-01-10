import React from "react";
import legend from "../../assets/validators/bnb/legend.svg";
import math_wallet from "../../assets/validators/bnb/math_wallet.svg";
import cloud from "../../assets/validators/bnb/cloud.svg";
import ankr from "../../assets/validators/bnb/ankr.svg";
import defibit from "../../assets/validators/bnb/defibit.svg";
import certic from "../../assets/validators/bnb/certic.svg";
import fuji from "../../assets/validators/bnb/fuji.svg";
import tranches from "../../assets/validators/bnb/tranches.svg";
import avengers from "../../assets/validators/bnb/avengers.svg";
import nodreal from "../../assets/validators/bnb/nodreal.svg";
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
  VALIDATOR_TRANCHES
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
              <img className="" src={legend} title="legend" alt="legend" />
            </a>
            <a href={VALIDATOR_MATH} target="_blank" rel="noopener noreferrer">
              <img
                className=""
                src={math_wallet}
                title="math_wallet"
                alt="math_wallet"
              />
            </a>
            <a
              href={VALIDATOR_COINBASE}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="" src={cloud} title="cloud" alt="cloud" />
            </a>
            <a href={VALIDATOR_ANKR} target="_blank" rel="noopener noreferrer">
              <img className="" src={ankr} title="ankr" alt="ankr" />
            </a>
            <a
              href={VALIDATOR_DEFIBIT}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="" src={defibit} title="defibit" alt="defibit" />
            </a>
            <a
              href={VALIDATOR_CERTIC}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="" src={certic} title="certic" alt="certic" />
            </a>
            <a href={VALIDATOR_FUJI} target="_blank" rel="noopener noreferrer">
              <img className="" src={fuji} title="fuji" alt="fuji" />
            </a>
            <a
              href={VALIDATOR_TRANCHES}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className=""
                src={tranches}
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
                src={avengers}
                title="avengers"
                alt="avengers"
              />
            </a>
            <a
              href={VALIDATOR_NODE_REAL}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="" src={nodreal} title="nodreal" alt="nodreal" />
            </a>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Validators;
