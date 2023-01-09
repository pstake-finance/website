import React from 'react';
import useTranslation from 'next-translate/useTranslation';
import Governance from '../containers/tokensale/Governance';
import Tokenomics from '../containers/tokensale/Tokenomics';
import Participate from '../containers/tokensale/Participate';
import Footer from "../components/Footer";

const TokenSale = () => {
    const { t } = useTranslation('common');
    
    return (
        <React.Fragment>
            <section className="banner-section aos-init aos-animate tokensale">
                <div className="background-gradient">
                <img src={"/images/gradient_ellipse.png"} alt='gradientEllipse' className="gradient-ellispse"/>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 col-sm-12 banner-main-section">
                                <img src={"/images/pstakelogo.svg"} alt='pstake' className="mb-3"/>
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