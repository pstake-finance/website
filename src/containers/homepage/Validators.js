import React from 'react';
import {
    CHORUS, COSMOSTATION,
    EVERSTAKE,
    FIGMENT,
    STAKEFISH, VALIDATOR_COINBASE, VALIDATOR_LEGEND, VALIDATOR_MATH, VALIDATOR_NODE_REAL, VALIDATOR_TRANCHES
} from '../../constants/config';
import {useTranslation} from "react-i18next";
import stakefish from "../../assets/validators/stakefish.svg";
import figment from "../../assets/validators/figment.svg";
import everstake from "../../assets/validators/everstake.svg";
import chorus from "../../assets/validators/chorus.svg";
import cosmostation from "../../assets/validators/cosmostation.svg";
import legend from "../../assets/validators/bnb/legend.svg";
import math_wallet from "../../assets/validators/bnb/math_wallet.svg";
import cloud from "../../assets/validators/bnb/cloud.svg";
import tranches from "../../assets/validators/bnb/tranches.svg";
import nodreal from "../../assets/validators/bnb/nodreal.svg";

const Validators = () => {
    const { t } = useTranslation('common');
    return (
        <section className="validators-section homepage">
            <div className="container">
                <h3 className="section-title">{t("VALIDATORS")}</h3>
                <p className="section-sub-title">pSTAKE’s validator scoring mechanism ensures our liquid staking
                    ecosystem consists of top-performing validators across supported networks.
                </p>
                <div className="tiles text-center">
                    <a href={STAKEFISH} target="_blank" rel="noopener noreferrer" className="tile">
                        <img className="" src={stakefish} title="Stakefish" alt="Stakefish" />
                    </a>
                    <a href={FIGMENT} target="_blank" rel="noopener noreferrer" className="tile">
                        <img className="" src={figment} title="Figment" alt="Figment" />
                    </a>
                    <a href={EVERSTAKE} target="_blank" rel="noopener noreferrer" className="tile">
                        <img className="" src={everstake} title="Everstake" alt="Everstake" />
                    </a>
                    <a href={CHORUS} target="_blank" rel="noopener noreferrer" className="tile">
                        <img className="" src={chorus} title="Chorus" alt="Chorus" />
                    </a>
                    <a href={COSMOSTATION} target="_blank" rel="noopener noreferrer" className="tile">
                        <img className="" src={cosmostation} title="Cosmostation" alt="Cosmostation" />
                    </a>
                    <a href={VALIDATOR_LEGEND} target="_blank" rel="noopener noreferrer" className="tile">
                        <img className="" src={legend} title="legend" alt="legend" />
                    </a>
                    <a href={VALIDATOR_MATH} target="_blank"  rel="noopener noreferrer" className="tile">
                        <img className="" src={math_wallet} title="math_wallet" alt="math_wallet" />
                    </a>
                    <a href={VALIDATOR_COINBASE} target="_blank" rel="noopener noreferrer" className="tile">
                        <img className="" src={cloud} title="cloud" alt="cloud" />
                    </a>
                    <a href={VALIDATOR_TRANCHES} target="_blank" rel="noopener noreferrer" className="tile">
                        <img className="" src={tranches} title="tranches" alt="tranches" />
                    </a>
                    <a href={VALIDATOR_NODE_REAL} target="_blank" rel="noopener noreferrer" className="tile">
                        <img className="" src={nodreal} title="nodreal" alt="nodreal" />
                    </a>
                </div>
            </div>
        </section>
    );
}


export default Validators;