import React from 'react';
import { useTranslation } from "react-i18next";
import sequoia from '../../assets/investors/sequoia.svg';
import galaxydigital from '../../assets/investors/galaxydigital.svg';
import coinbase from '../../assets/investors/coinbase.svg';
import krakenventures from '../../assets/investors/krakenventures.svg';
import spartencapital from '../../assets/investors/sparten_capital.png';
import tendermint from '../../assets/investors/tendermint.svg';
import sino from '../../assets/investors/sino.svg';
import alameda from '../../assets/investors/almeda.svg';
import defiance from '../../assets/investors/defiance_capital.svg';
import stakefish from '../../assets/validators/stakefish.svg';
import figment from '../../assets/validators/figment.svg';
import everstake from '../../assets/validators/everstake.svg';
import chorus from '../../assets/validators/chorus.svg';
import halborn_black from '../../assets/audits/halborn_black.svg';
import certora_black from '../../assets/audits/certora_black.svg';
import cosmostation from '../../assets/validators/cosmostation.svg';
import sa_1 from '../../assets/sa/sa_1.svg';
import sa_2 from '../../assets/sa/sa_2.svg';
import sa_3 from '../../assets/sa/sa_3.svg';
import sa_4 from '../../assets/sa/sa_4.svg';
import sa_5 from '../../assets/sa/sa_5.svg';

import {
    STAKEFISH,
    FIGMENT,
    EVERSTAKE,
    CHORUS,
    COSMOSTATION, PSTAKE_TRAIL_OF_BITS, PSTAKE_CERTORA, AUDIT
} from '../../constants/config';
import {
    SEQUOIA_URL,
    COINBASE_VENTURES_URL,
    KRAKEN_VENTURES_URL,
    TENDERMINT_URL,
    ALAMEDA_RESEARCH_URL,
    DEFI_CAPITAL_URL,
    GALAXY_DIGITAL_URL,
    SPARTAN_CAPITAL,
    SINO_GLOBAL_CAPITAL, PSTAKE_AUDITS_URL,
    PSTAKE_DILIGENCE_AUDIT,
    AOK_URL
} from '../../constants/config';
import legend from "../../assets/validators/bnb/legend.svg";
import math_wallet from "../../assets/validators/bnb/math_wallet.svg";
import cloud from "../../assets/validators/bnb/cloud.svg";
import tranches from "../../assets/validators/bnb/tranches.svg";
import nodreal from "../../assets/validators/bnb/nodreal.svg";

const Investors = () => {
    const { t } = useTranslation();
    return (
        <React.Fragment>


            <section className="investors">
                <div className="container">

                    <h4 className="section-title">{t("Security Audits")}</h4>
                    <div className="investor-list">
                        <a href={PSTAKE_DILIGENCE_AUDIT} target="_blank" rel="noopener noreferrer">
                            <img className="" src={halborn_black} title="halborn" alt="halborn" />
                        </a>
                        <a href={PSTAKE_TRAIL_OF_BITS} target="_blank" rel="noopener noreferrer">
                            <img className="" src={sa_1} title="Trail Of Bits" alt="Trail Of Bits" />
                        </a>
                        <a href={PSTAKE_DILIGENCE_AUDIT} target="_blank" rel="noopener noreferrer">
                            <img className="" src={sa_2} title="Digilence" alt="Digilence" />
                        </a>
                    </div>
                    <div className="investor-list">
                        <a href={PSTAKE_AUDITS_URL} target="_blank" rel="noopener noreferrer"><img className="" src={sa_3} title="Solidified" alt="Solidified" /></a>
                        <a href={PSTAKE_AUDITS_URL} target="_blank" rel="noopener noreferrer"><img className="" src={sa_4} title="Peckshield" alt="Peckshield" /></a>
                        <a href={AOK_URL} target="_blank" rel="noopener noreferrer"><img className="" src={sa_5} title="AOK" alt="AOK" /></a>
                    </div>
                    <div className="investor-list">
                        <a href={PSTAKE_CERTORA} target="_blank" rel="noopener noreferrer">
                            <img className="" src={certora_black} title="certora" alt="certora" />
                        </a>
                    </div>
                </div>

            </section>
            <section className="investors">
                <div className="container">

                    <h3 className="section-title">{t("VALIDATORS")}</h3>
                    <div className="investor-list">
                        <a href={STAKEFISH} target="_blank" rel="noopener noreferrer"><img className="" src={stakefish} title="Stakefish" alt="Stakefish" /></a>
                        <a href={FIGMENT} target="_blank" rel="noopener noreferrer"><img className="" src={figment} title="Figment" alt="Figment" /></a>
                        <a href={EVERSTAKE} target="_blank" rel="noopener noreferrer"><img className="" src={everstake} title="Everstake" alt="Everstake" /></a>
                        <a href={CHORUS} target="_blank" rel="noopener noreferrer"><img className="" src={chorus} title="Chorus" alt="Chorus" /></a>
                        <a href={COSMOSTATION} target="_blank" rel="noopener noreferrer"><img className="" src={cosmostation} title="Cosmostation" alt="Cosmostation" /></a>
                        <a href={STAKEFISH} target="_blank" className="pointer-events-none" rel="noopener noreferrer">
                            <img className="" src={legend} title="legend" alt="legend" />
                        </a>
                        <a href={FIGMENT} target="_blank" className="pointer-events-none" rel="noopener noreferrer">
                            <img className="" src={math_wallet} title="math_wallet" alt="math_wallet" />
                        </a>
                        <a href={EVERSTAKE} target="_blank" className="pointer-events-none" rel="noopener noreferrer">
                            <img className="" src={cloud} title="cloud" alt="cloud" />
                        </a>
                        <a href={AUDIT} target="_blank" className="pointer-events-none" rel="noopener noreferrer">
                            <img className="" src={tranches} title="tranches" alt="tranches" />
                        </a>
                        <a href={AUDIT} target="_blank" className="pointer-events-none" rel="noopener noreferrer">
                            <img className="" src={nodreal} title="nodreal" alt="nodreal" />
                        </a>
                    </div>
                </div>

            </section>
            <section className="investors">
                <div className="container">

                    <h4 className="section-title">{t("INVESTORS")}</h4>
                    <div className="investor-list">
                        <a href={SEQUOIA_URL} target="_blank" rel="noopener noreferrer"><img className="" src={sequoia} title="Sequoia" alt="Sequoia" /></a>
                        <a href={GALAXY_DIGITAL_URL} target="_blank" rel="noopener noreferrer"><img className="" src={galaxydigital} title="Galaxy Digital" alt="Galaxy Digital" /></a>
                        <a href={DEFI_CAPITAL_URL} target="_blank" rel="noopener noreferrer"><img className="" src={defiance} title="Defiance Capital" alt="Defiance Capital" /></a>
                        <a href={COINBASE_VENTURES_URL} target="_blank" rel="noopener noreferrer"><img className="" src={coinbase} title="Coinbase" alt="Coinbase" /></a>
                        <a href={KRAKEN_VENTURES_URL} target="_blank" rel="noopener noreferrer"><img className="" src={krakenventures} title="KrakenVentures" alt="KrakenVentures" /></a>
                        <a href={SPARTAN_CAPITAL} target="_blank" rel="noopener noreferrer"><img className="" src={spartencapital} title="Spartencapital" alt="Spartencapital" /></a>
                        <a href={ALAMEDA_RESEARCH_URL} target="_blank" rel="noopener noreferrer"><img className="" src={alameda} title="Alameda Research" alt="Alameda Research" /></a>
                        <a href={SINO_GLOBAL_CAPITAL} target="_blank" rel="noopener noreferrer"><img className="" src={sino} title="Sino" alt="Sino" /></a>
                        <a href={TENDERMINT_URL} target="_blank" rel="noopener noreferrer"><img className="" src={tendermint} title="Tendermint" alt="Tendermint" /></a>
                    </div>
                </div>

            </section>
        </React.Fragment >
    );
}


export default Investors;