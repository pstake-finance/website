import React from 'react';
import { useTranslation } from "react-i18next";
import legend from "../../assets/validators/bnb/legend.svg"
import math_wallet from "../../assets/validators/bnb/math_wallet.svg"
import cloud from "../../assets/validators/bnb/cloud.svg"
import ankr from "../../assets/validators/bnb/ankr.svg"
import defibit from "../../assets/validators/bnb/defibit.svg"
import certic from "../../assets/validators/bnb/certic.svg"
import fuji from "../../assets/validators/bnb/fuji.svg"
import tranches from "../../assets/validators/bnb/tranches.svg"
import avengers from "../../assets/validators/bnb/avengers.svg"
import nodreal from "../../assets/validators/bnb/nodreal.svg"

import {
    STAKEFISH,
    FIGMENT,
    EVERSTAKE,
    AUDIT
} from '../../constants/config';

const Validators = () => {
    const { t } = useTranslation();
    return (
        <React.Fragment>
            <section className="validators-section">
                <div className="container">
                    <h3 className="section-title">{t("VALIDATORS")}</h3>
                    <p className="section-sub-title">Explore BNB validators that help pSTAKE grow</p>
                    <div className="validator-list">
                        <a href={STAKEFISH} target="_blank" rel="noopener noreferrer">
                            <img className="" src={legend} title="legend" alt="legend" />
                        </a>
                        <a href={FIGMENT} target="_blank" rel="noopener noreferrer">
                            <img className="" src={math_wallet} title="math_wallet" alt="math_wallet" />
                        </a>
                        <a href={EVERSTAKE} target="_blank" rel="noopener noreferrer">
                            <img className="" src={cloud} title="cloud" alt="cloud" />
                        </a>
                        <a href={AUDIT} target="_blank" rel="noopener noreferrer">
                            <img className="" src={ankr} title="ankr" alt="ankr" />
                        </a>
                        <a href={AUDIT} target="_blank" rel="noopener noreferrer">
                            <img className="" src={defibit} title="defibit" alt="defibit" />
                        </a>
                        <a href={AUDIT} target="_blank" rel="noopener noreferrer">
                            <img className="" src={certic} title="certic" alt="certic" />
                        </a>
                        <a href={AUDIT} target="_blank" rel="noopener noreferrer">
                            <img className="" src={fuji} title="fuji" alt="fuji" />
                        </a>
                        <a href={AUDIT} target="_blank" rel="noopener noreferrer">
                            <img className="" src={tranches} title="tranches" alt="tranches" />
                        </a>
                        <a href={AUDIT} target="_blank" rel="noopener noreferrer">
                            <img className="" src={avengers} title="avengers" alt="avengers" />
                        </a>
                        <a href={AUDIT} target="_blank" rel="noopener noreferrer">
                            <img className="" src={nodreal} title="nodreal" alt="nodreal" />
                        </a>
                    </div>
                </div>
            </section>
        </React.Fragment >
    );
}


export default Validators;