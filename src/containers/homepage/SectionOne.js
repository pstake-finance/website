import React from "react";
import rightarrow from '../../assets/right-arrow.svg';
import { useTranslation } from "react-i18next";
import InfoSection from "../homepage/InfoSection";
// import Icon from "../../components/Icon";

import {
    PSTAKE_APP_URL,
    
} from '../../constants/config';

const SectionOne = () => {
    const { t } = useTranslation();
  
   

    return (
        <React.Fragment>
            <section className="banner-section aos-init aos-animate">
                <div className="background-gradient">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 col-sm-12 banner-main-section">
                                <h1 className="banner-heading mb-3">{t("UNLOCKING_LIQUIDITY")}<span> {t("STAKED_ASSETS")}</span></h1>
                                <div className="banner-buttons">
                               
                                    <h6>Stake your PoS assets while earning DeFi yields</h6>
                                    <a rel="noopener noreferrer" target="_blank" href={PSTAKE_APP_URL}>
                                        <span className="button xprt">
                                            <span className="hideone">{t("GET_STARTED")}&nbsp;</span>
                                            <img src={rightarrow} alt="arrow" />
                                        </span>
                                    </a>
                                   
                                </div>
                                <div className="network-stats">
                                    <div className="stats-count">
                                        <h1>$49.05M+</h1>
                                        <h6>{t("Value of stkASSETs")}</h6>
                                    </div>
                                    <div className="stats-count">
                                        <h1>$28.12M+ </h1>
                                        <h6>{t("Liquidity of stkASSETs")}</h6>
                                    </div>
                                    <div className="stats-count">
                                        <h1>5,107</h1>
                                        <h6>{t("Number of stakers")}</h6>
                                    </div>
                                   

                                </div>
                            </div>

                        </div>
                    </div>
                    <InfoSection />
                </div>

            </section>
        </React.Fragment >
    );
}


export default SectionOne;