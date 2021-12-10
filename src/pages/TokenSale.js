import React from 'react';
import { useTranslation } from "react-i18next";
import Governance from '../containers/tokensale/Governance';
import Tokenomics from '../containers/tokensale/Tokenomics';
import Participate from '../containers/tokensale/Participate';
import Footer from "../components/Footer";
import ReactGa from 'react-ga';
import gradientEllipse from '../assets/gradient_ellipse.png';
import pstakelogo from '../assets/pstakelogo.svg';
import {
    REGISTER
} from '../constants/config';
const TokenSale = () => {
    const { t } = useTranslation();
    const onClickBuyNow = () => {
        ReactGa.event({
            category: 'TokenSale',
            action: 'Clicked on Register'
        })

    }
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
                                <span className="buttonapp" onClick={onClickBuyNow}><a href={REGISTER} target="_blank" rel="noopener noreferrer" className="nav-link"><span className="nav-link app-btn">{t("BUY_NOW")}</span></a></span>
                                
                                <p className="caption">{t("PUBLIC_SALE_IN")}</p>
                                <h5 className="text-center">
                                {t("PUBLISALE_RELEASEDATE")}
                                </h5>
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