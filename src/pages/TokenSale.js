import React from 'react';
import { useTranslation } from "react-i18next";
import Governance from '../containers/tokensale/Governance';
import Tokenomics from '../containers/tokensale/Tokenomics';
import Participate from '../containers/tokensale/Participate';
import Footer from "../components/Footer";
import gradientEllipse from '../assets/gradient_ellipse.png';
import pstakelogo from '../assets/pstakelogo.svg';

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
                                <img src={pstakelogo} alt='pstake' className="mb-3"/>
                                <p className="caption">{t("PSTAKE_DESCRIPTION")} <span>{t("PSTAKE_DESCRIPTION_NEXT_LINE_ONE")}</span></p>
                            </div>

                        </div>
                    </div>

                </div>
                <Governance />
                <Tokenomics />
                <Participate />
                <Footer />
            </section>



        </React.Fragment >
    );
}


export default TokenSale;