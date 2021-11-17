import React from 'react';
import { useTranslation } from "react-i18next";
import arrow_capital from '../../assets/investors/arrow_capital.png';
import sequoia from '../../assets/investors/sequoia.png';
import galaxydigital from '../../assets/investors/galaxydigital.png';
import coinbase from '../../assets/investors/coinbase.png';
import krakenventures from '../../assets/investors/krakenventures.png';
import spartencapital from '../../assets/investors/sparten_capital.png';
import tendermint from '../../assets/investors/tendermint.png';
import sino from '../../assets/investors/sino.png';
import {
    PSTAKE_AUDITS_URL
     } from '../../constants/config';

const Investors = () => {
    const { t } = useTranslation();
    return (
        <React.Fragment>
            <section className="investors">
                <div className="container">
                   
                        <h3 className="section-title">{t("INVESTORS")}</h3>
                        <div className="investor-list">
                            <a href={PSTAKE_AUDITS_URL} target="_blank" rel="noopener noreferrer"><img className="" src={arrow_capital} title="Arrow Capital" alt="Arrow Capital" /></a>    
                            <a href={PSTAKE_AUDITS_URL} target="_blank" rel="noopener noreferrer"><img className="" src={sequoia} title="Sequoia" alt="Sequoia" /></a>
                            <a href={PSTAKE_AUDITS_URL} target="_blank" rel="noopener noreferrer"><img className="" src={galaxydigital} title="Galaxy Digital" alt="Galaxy Digital" /></a>
                            <a href={PSTAKE_AUDITS_URL} target="_blank" rel="noopener noreferrer"><img className="" src={coinbase} title="Coinbase" alt="Coinbase" /></a>
                            <a href={PSTAKE_AUDITS_URL} target="_blank" rel="noopener noreferrer"><img className="" src={krakenventures} title="KrakenVentures" alt="KrakenVentures" /></a>
                            <a href={PSTAKE_AUDITS_URL} target="_blank" rel="noopener noreferrer"><img className="" src={spartencapital} title="Spartencapital" alt="Spartencapital" /></a>
                            <a href={PSTAKE_AUDITS_URL} target="_blank" rel="noopener noreferrer"><img className="" src={sino} title="Sino" alt="Sino" /></a>
                            <a href={PSTAKE_AUDITS_URL} target="_blank" rel="noopener noreferrer"><img className="" src={tendermint} title="Tendermint" alt="Tendermint" /></a>
                        </div>
                    </div>
               
            </section>
        </React.Fragment >
    );
}


export default Investors;