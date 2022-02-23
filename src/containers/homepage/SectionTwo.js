import React from 'react';
import { useTranslation } from "react-i18next";
import feactureone from '../../assets/feacture-1.svg';
import feacturetwo from '../../assets/feacture-2.svg';

import feacturesix from '../../assets/feacture-3.svg';

import feacturegradient2 from '../../assets/feacture-gradent2.svg';
const SectionTwo = () => {
    const { t } = useTranslation();
    return (
        <React.Fragment>
            <section className="second-section aos-init aos-animate">
                <div className="container">
                    <h3 className="section-title">{t("FEACTURES")}</h3>
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-12">

                            <div className="homecard feactures-card mb-4">
                                <img src={feactureone} className="text-left icon-feacture" alt="feacture" title="feacture" /> 
                                <h5>{t("WRAP")}</h5>
                                <p>{t("WRAP_DESCRIPTION")}</p>
                            </div>
                          
                            
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12">

                            <div className="homecard feactures-card mb-4">
                                <img src={feacturetwo} className="text-left icon-feacture" alt="feacture" title="feacture" />
                                <h5>{t("STAKE")}</h5>
                                <p>{t("STAKE_DESCRIPTION")}</p>

                            </div>
                            
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                           
                            <img src={feacturegradient2} className="feacturegradient2" alt="feacture" />
                            <div className="homecard feactures-card mb-4">
                                <img src={feacturesix} className="text-left icon-feacture" alt="feacture" title="feacture" />
                                <h5>{t("GENERATE_ADDITONAL_YIELD")}</h5>
                                <p>{t("GENERATE_ADDITONAL_YIELD_DESCRIPTION")}</p>

                            </div>

                        </div>
                       

                    </div>




                </div>

            </section>
        </React.Fragment >
    );
}


export default SectionTwo;