import React, { useEffect, useState } from "react";
import axios from 'axios';
import rightarrow from '../../assets/right-arrow.svg';
import InfoSection from "../../Containers/HomePage/InfoSection";
import {
    PSTAKE_APP_URL
} from '../../constants/config';
import { getTVLURL, getstkXPRTLIQUIDITYURL, getstkATOMLIQUIDITYURL } from "../../constants/url";

const SectionOne = () => {
  const [totalTVLData, setTotalTVLData] = useState('0.00');
  const [totalstkXPRTData, settotalstkXPRTData] = useState('0.00');
  const [totalstkATOMData, settotalstkATOMData] = useState('0.00');

    useEffect(() => {
        const url = getTVLURL()
        const getstkXPRTurl = getstkXPRTLIQUIDITYURL()
        const getstkATOMurl = getstkATOMLIQUIDITYURL()
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
                                <h1 className="banner-heading "> Unlocking Liquidity for <span>Staked Assets</span></h1>
                                <p className="caption">Securely stake your assets to earn staking rewards and receive 1:1 pegged staked <span>representative tokens which can be used in DeFi to generate additional yield</span></p>
                                <div className="banner-buttons">
                                    <a rel="noopener noreferrer" target="_blank" href={PSTAKE_APP_URL}>
                                        <span className="button xprt">
                                            <span className="hideone">Get Started&nbsp;</span>
                                            <img src={rightarrow} alt="arrow" />
                                        </span>
                                    </a>
                                </div>
                                <div className="network-stats">
                                    <div className="stats-count">
                                        <h1>${totalTVLData}M+</h1>
                                        <h6>Total Value Locked</h6>
                                    </div>
                                    <div className="stats-count">
                                        <h1>02</h1>
                                        <h6>Supported Networks (More Coming)</h6>
                                    </div>
                                    <div className="stats-count">
                                        <h1>${totalstkXPRTData}M+</h1>
                                        <h6>Sushi Pool LP for stkATOM - Eth</h6>
                                    </div>
                                    <div className="stats-count">
                                        <h1>${totalstkATOMData}M+</h1>
                                        <h6>Sushi Pool LP for stkXPRT - Eth</h6>
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