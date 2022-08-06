import React from 'react';
import { useTranslation } from "react-i18next";


import feacturegradient2 from '../../assets/feacture-gradent2.svg';
const SectionTwo = () => {
    const { t } = useTranslation();
    return (
        <React.Fragment>
            <section className="second-section aos-init aos-animate">
                <div className="container">
                    <h3 className="section-title">{t("FEACTURES")}</h3>
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-12 mt-4">
                            <div className="homecard feactures-card">
                                <h5>{t("UNLOCK_LIQUIDITY")}</h5>
                                <p>{t("FEATURE_WRAP")}</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 mt-4">
                            <div className="homecard feactures-card">
                                <h5>{t("LEVERAGE_DEFI")}</h5>
                                <p>{t("FEATURE_DEFI")}</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 mt-4">
                            <img src={feacturegradient2} className="feacturegradient2" alt="feacture" />
                            <div className="homecard feactures-card">
                                <h5>{t("INSTANT_REDEMPTION")}</h5>
                                <p>{t("FEATURE_ANCHOR")}</p>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </React.Fragment >
    );
}


export default SectionTwo;