import React from 'react';
import { useTranslation } from "react-i18next";
import arrow_capital from '../../assets/investors/arrow_capital.svg';
import sequoia from '../../assets/investors/sequoia.svg';
import galaxydigital from '../../assets/investors/galaxydigital.svg';
import coinbase from '../../assets/investors/coinbase.svg';
import krakenventures from '../../assets/investors/krakenventures.svg';
import spartencapital from '../../assets/investors/sparten_capital.png';
import tendermint from '../../assets/investors/tendermint.svg';
import sino from '../../assets/investors/sino.svg';
import alameda from '../../assets/investors/almeda.svg';
import defiance from '../../assets/investors/defiance_capital.svg';
import {
    THREEAC_URL,
SEQUOIA_URL,
COINBASE_VENTURES_URL,
KRAKEN_VENTURES_URL,
TENDERMINT_URL,
ALAMEDA_RESEARCH_URL,
DEFI_CAPITAL_URL,
GALAXY_DIGITAL_URL,
SPARTAN_CAPITAL,
SINO_GLOBAL_CAPITAL
     } from '../../constants/config';

const Investors = () => {
    const { t } = useTranslation();
    return (
        <React.Fragment>
            <section className="investors">
                <div className="container">
                <h3 className="section-title backing_us">{t("WHO_BACKING_US")}</h3>
                   
                        <h4 className="section-title">{t("INVESTORS")}</h4>
                        <div className="investor-list">
                            <a href={THREEAC_URL} target="_blank" rel="noopener noreferrer"><img className="" src={arrow_capital} title="Arrow Capital" alt="Arrow Capital" /></a>    
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