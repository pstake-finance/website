import React from "react";
import useTranslation from 'next-translate/useTranslation';
import {
    PSTAKE_APP_URL, VIDEO_URL,
} from '../../constants/config';
import Icon from "../../components/Icon";
import bg_lane from "../../assets/bg_images/bg_lane.png";

const Banner = () => {
    const { t } = useTranslation('common');
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

                                    <span className="button xprt">
                                        <a rel="noopener noreferrer" target="_blank" href={PSTAKE_APP_URL}>
                                            <span className="hideone">{t("GET_STARTED")}&nbsp;</span>
                                            <Icon viewClass="right-arrow" icon="right-arrow" />
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
                    <div className="info-section">
                        <img src={bg_lane} alt="pStake" className="bg-lane-gradient" />
                        <div className='container'>
                            <div className="image-section">
                                <div className="embed-responsive embed-responsive-16by9">
                                    <iframe
                                        title="Introducing pSTAKE | Multi-chain Liquid Staking"
                                        className="embed-responsive-item" src={VIDEO_URL}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment >
    );
}


export default Banner;