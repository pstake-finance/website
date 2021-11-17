import React from 'react';
import { useTranslation } from "react-i18next";
import feactureone from '../../assets/feacture-1.svg';
import gradientellipse2 from '../../assets/gradient_ellipse2.png';

const Governance = () => {
    const { t } = useTranslation();
    return (
        <React.Fragment>
            <div className="inner-bg">
                <div className="governance">
                <img src={gradientellipse2} className="gradientellipse2" alt="Ellispse" />
                    <section className="second-section aos-init aos-animate">
                        <div className="container">
                            <h3 className="section-title">{t("GOVERNANCE")}</h3>
                            <div className="row">
                                <div className="col-lg-4 col-md-6 col-sm-12">

                                    <div className="feactures-card mb-4">
                                        <img src={feactureone} className="text-left icon-feacture" alt="feacture" title="feacture" />
                                        <h5>{t("WRAP")}</h5>
                                        <p>{t("WRAP_DESCRIPTION")}</p>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-12">
                                    <div className="feactures-card mb-4">
                                        <img src={feactureone} className="text-left icon-feacture" alt="feacture" title="feacture" />
                                        <h5>{t("WRAP")}</h5>
                                        <p>{t("WRAP_DESCRIPTION")}</p>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-12">

                                    <div className="feactures-card mb-4">
                                        <img src={feactureone} className="text-left icon-feacture" alt="feacture" title="feacture" />
                                        <h5>{t("WRAP")}</h5>
                                        <p>{t("WRAP_DESCRIPTION")}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="second-section insurance aos-init aos-animate">
                        <div className="container">
                            <h3 className="section-title">{t("INSURANCE")}</h3>
                            <div className="row">
                            <p className="caption">{t("INSURANCE_TITLE")} <span>{t("INSURANCE_TITLE_ONE")}</span></p>
                            <p className="caption">{t("INSURANCE_TITLE_TWO")}</p>
                                
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </React.Fragment >
    );
}


export default Governance;