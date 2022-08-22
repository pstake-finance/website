import React, {useEffect, useState} from "react";
import { useTranslation } from "react-i18next";
import stkBNB from "../../assets/stkBNB.svg";
import Icon from "../../components/Icon";
import {getTVL} from "../../utils/helpers";
import {fetchAlpaca} from "../../actions/api";

const Banner = () => {
    const { t } = useTranslation();
    const [totalwei, setTotalwei] = useState(0);
    const [alpacaInfo, setAlpacaInfo] = useState({tvl:0, apy:0})

    useEffect( ()=>{
        const fetchValues = async ()=>{
            setTotalwei(await getTVL())
            setAlpacaInfo(await fetchAlpaca());
        }
        fetchValues()
    },[setTotalwei])

    return (
        <React.Fragment>
            <section className="banner-section aos-init aos-animate">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 col-sm-12 banner-main-section">
                                <div className="logo">
                                    <img src={stkBNB} alt="stkBNB"/>
                                </div>
                                <h1 className="banner-heading">
                                    {t("BANNER_HEADING")}
                                </h1>
                                <h6 className="banner-sub-heading">
                                    Enjoy the best of both worlds in the BNB ecosystem - <b>Earn upto {alpacaInfo.apy
                                }% </b> in DeFi yields while earning staking rewards when you stake BNB with pSTAKE
                                </h6>
                                <div className="banner-buttons">
                                    <a rel="noopener noreferrer" target="_blank" href="https://bnb.pstake.finance" className="button-link">
                                        <span className="hideone">{t("LIQUID_STAKE_BNB")} &nbsp;</span>
                                        <Icon viewClass="right-arrow" icon="right-arrow" />
                                    </a>
                                </div>
                                <div className="network-stats">
                                    <div className="stats-count">
                                        <h6 className="stats">{totalwei} BNB</h6>
                                        <h6 className="label">{t("TOTAL_VALUE_UNLOCKED")}</h6>
                                    </div>
                                </div>
                                {/*    <div className="stats-count">*/}
                                {/*        <h6 className={"stats"}>10+</h6>*/}
                                {/*        <h6 className="label">{t("NUMBER_OF_BNB_LIQUID_STAKERS")}</h6>*/}
                                {/*    </div>*/}
                                {/*    <div className="stats-count">*/}
                                {/*        <h6 className={"stats"}>{t("BNB_APY")}</h6>*/}
                                {/*        <h6 className="label">{t("APY")}</h6>*/}
                                {/*    </div>*/}
                                {/*    /!*<div className="stats-count">*!/*/}
                                {/*    /!*    <h6 className={"stats"}>{t("0")}</h6>*!/*/}
                                {/*    /!*    <h6 className="label">{t("TOTAL_REWARDS_EARNED")}</h6>*!/*/}
                                {/*    /!*</div>*!/*/}

                                {/*</div>*/}
                            </div>

                        </div>
                    </div>
            </section>
        </React.Fragment >
    );
}


export default Banner;