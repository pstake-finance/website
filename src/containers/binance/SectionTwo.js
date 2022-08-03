import React from 'react';
import Card from 'react-bootstrap/Card';
import { useTranslation } from "react-i18next";
import usecase1 from '../../assets/usecase/usecase1.svg';
import usecase2 from '../../assets/usecase/usecase2.svg';
import usecase3 from '../../assets/usecase/usecase3.svg';

const SectionTwo = () => {
    const { t } = useTranslation();
    return (
        <React.Fragment>
            <section className="use-case-section">
                <div className="container">
                    <h3 className="section-title">{t("WHY_PSTAKE_FOR_BNB")}</h3>
                    <div className="row">
                        <Card className="col-md-4 col-xs-12">
                            <Card.Body className="">
                                <div className="icon-box">
                                    <img className="pt-4 pb-4" src={usecase1} title="Asset" alt="Asset"/>
                                </div>
                                <div className="content">
                                    <p className="card-heading">{t("WHY_PSTAKE_FOR_BNB_ONE_HEADING")}</p>
                                    <p className="card-content">
                                        {t("WHY_PSTAKE_FOR_BNB_ONE_CONTENT")}
                                    </p>
                                </div>
                            </Card.Body>
                        </Card>
                        <Card className="col-md-4  col-xs-12">
                            <Card.Body className="">
                                <div className="icon-box">
                                    <img className="pt-4 pb-4" src={usecase2} title="Asset" alt="Asset"/>
                                </div>
                                <div className="content">
                                    <p className="card-heading">{t("WHY_PSTAKE_FOR_BNB_THREE_HEADING")}</p>
                                    <p className="card-content">
                                        {t("WHY_PSTAKE_FOR_BNB_THREE_CONTENT")}
                                    </p>
                                </div>
                            </Card.Body>
                        </Card>
                        <Card className="col-md-4  col-xs-12">

                            <Card.Body className="">
                                <div className="icon-box">
                                    <img className="pt-4 pb-4" src={usecase3} title="Asset" alt="Asset"/>
                                </div>
                                <div className="content">
                                    <p className="card-heading">{t("WHY_PSTAKE_FOR_BNB_THREE_HEADING")}</p>
                                    <p className="card-content">
                                        {t("WHY_PSTAKE_FOR_BNB_THREE_CONTENT")}
                                    </p>
                                </div>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </section>
        </React.Fragment >
    );
}


export default SectionTwo;