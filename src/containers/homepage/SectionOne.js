import React, { useEffect, useState } from "react";
import axios from 'axios';
import rightarrow from '../../assets/right-arrow.svg';
import { useTranslation } from "react-i18next";
import InfoSection from "../homepage/InfoSection";
import Icon from "../../components/Icon";

import {
    PSTAKE_APP_URL,
    VIDEO_URL
} from '../../constants/config';
import { getTVLURL, getstkXPRTLIQUIDITYURL, getstkATOMLIQUIDITYURL } from "../../constants/url";

const SectionOne = () => {
    const { t } = useTranslation();
  const [totalTVLData, setTotalTVLData] = useState('0.00');
  const [totalstkXPRTData, settotalstkXPRTData] = useState('0.00');
  const [totalstkATOMData, settotalstkATOMData] = useState('0.00');

    useEffect(() => {
        const url = getTVLURL();
        const getstkXPRTurl = getstkXPRTLIQUIDITYURL();
        const getstkATOMurl = getstkATOMLIQUIDITYURL();
        axios.get(url).then((result) => {
            const totaltvldata = result.data;
            setTotalTVLData((totaltvldata.TVL/1000000).toFixed(2))

        });
        axios.get(getstkXPRTurl).then((result) => {
            const totalstkXPRTData = result.data;
            settotalstkXPRTData((totalstkXPRTData.stkXPRTLiquidity/1000000).toFixed(2))

        });
        axios.get(getstkATOMurl).then((result) => {
            const totalstkATOMData = result.data;
            settotalstkATOMData((totalstkATOMData.stkATOMLiquidity/1000000).toFixed(2))

        });
    }, []);

    return (
        <React.Fragment>
            <section className="banner-section aos-init aos-animate">
                <div className="background-gradient">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 col-sm-12 banner-main-section">
                                <h1 className="banner-heading mb-3">{t("UNLOCKING_LIQUIDITY")}<span> {t("STAKED_ASSETS")}</span></h1>
                                <div className="banner-buttons">
                                <a rel="noopener noreferrer" target="_blank" href={VIDEO_URL}>
                                        <span className="button xprt video">
                                        <Icon viewClass="social_icon_img" icon="play" />&emsp;
                                            <span className="hideone">{t("INTRO_VIDEO")}&nbsp;</span>
                                           
                                        </span>
                                    </a>
                                    <a rel="noopener noreferrer" target="_blank" href={PSTAKE_APP_URL}>
                                        <span className="button xprt">
                                            <span className="hideone">{t("GET_STARTED")}&nbsp;</span>
                                            <img src={rightarrow} alt="arrow" />
                                        </span>
                                    </a>
                                   
                                </div>
                                <div className="network-stats">
                                    <div className="stats-count">
                                        <h1>${totalTVLData}M+</h1>
                                        <h6>{t("TOTAL_VALUE_LOCKED")}</h6>
                                    </div>
                                    <div className="stats-count">
                                        <h1>02</h1>
                                        <h6>{t("SUPPORTED_NETWORKS")}</h6>
                                    </div>
                                    <div className="stats-count">
                                        <h1>${totalstkATOMData}M+</h1>
                                        <h6>{t("SUSHI_POOL_LP_STKATOM_ETH")}</h6>
                                    </div>
                                    <div className="stats-count">
                                        <h1>${totalstkXPRTData}M+</h1>
                                        <h6>{t("SUSHI_POOL_LP_STKXPRT_ETH")}</h6>
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