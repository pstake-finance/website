import React from 'react';
import { useTranslation } from "react-i18next";
import Countdown from 'react-countdown';
import Governance from '../containers/tokensale/Governance';
import Incentive from '../containers/tokensale/Incentive';
import Investors from '../containers/tokensale/Investors';
import Validators from '../containers/tokensale/Validators';
import Tokenomics from '../containers/tokensale/Tokenomics';
import Footer from "../components/Footer";
import pstake from '../assets/pstake.svg';
import gradientEllipse from '../assets/gradient_ellipse.png';
import cosmos from '../assets/cosmos.svg';
const TokenSale = () => {
    const { t } = useTranslation();
    return (
        <React.Fragment>
            <section className="banner-section aos-init aos-animate tokensale">
                <div className="background-gradient">
                <img src={gradientEllipse} alt='gradientEllipse' className="gradient-ellispse"/>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 col-sm-12 banner-main-section">
                                <h1 className="banner-heading ">{t("PSTAKE")}</h1>
                                <p className="caption">{t("PSTAKE_DESCRIPTION")} <span>{t("PSTAKE_DESCRIPTION_NEXT_LINE_ONE")}</span><span>{t("PSTAKE_DESCRIPTION_NEXT_LINE_TWO")}</span></p>
                                <div className="group-staked-assets">
                                    <img src={pstake} alt='pstake' />
                                    <img src={cosmos} alt='cosmos' />

                                </div>
                                <p className="caption">$PSTAKE Public Sale in:</p>
                                <h5 className="text-center">
                                    <Countdown
                                        date={1639568620000}
                                        autoStart={true} />

                                </h5>
                            </div>

                        </div>
                    </div>

                </div>
                <Governance />
                <Incentive />
                <Investors />
                <Validators />
                <Tokenomics />
                <Footer />
            </section>



        </React.Fragment >
    );
}


export default TokenSale;
