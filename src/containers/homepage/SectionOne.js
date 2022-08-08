import React from "react";
import rightarrow from '../../assets/right-arrow.svg';
import { useTranslation } from "react-i18next";
import InfoSection from "../homepage/InfoSection";
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

                                    <h6> {t("STAKE_ASSETS")}</h6>

                                    <span className="button mt-3 mb-3 xprt">
                                        <a rel="noopener noreferrer" target="_blank" href={PSTAKE_APP_URL}>
                                            <span className="hideone">{t("GET_STARTED")}&nbsp;</span>
                                            <img src={rightarrow} alt="arrow" />
                                        </a>
                                    </span>
                                </div>
                                {/*<div className="network-stats">*/}
                                {/*    <div className="stats-count">*/}
                                {/*        <h6 className="stats">{t("$49.05M+")}</h6>*/}
                                {/*        <h6>{t("VALUE_STKASSETS")}</h6>*/}
                                {/*    </div>*/}
                                {/*    <div className="stats-count">*/}
                                {/*        <h6 className="stats">{t("$28.12M+")} </h6>*/}
                                {/*        <h6>{t("LIQUIDITY_STKASSETS")}</h6>*/}
                                {/*    </div>*/}
                                {/*    <div className="stats-count">*/}
                                {/*        <h6 className={"stats"}>{t("5,107")}</h6>*/}
                                {/*        <h6>{t("NUMBER_STAKERS")}</h6>*/}
                                {/*    </div>*/}


                                {/*</div>*/}
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