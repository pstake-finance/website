import React from 'react';
import Card from 'react-bootstrap/Card';
import { useTranslation } from "react-i18next";
import {
    PSTAKE_APP_URL
} from '../../constants/config';
import pancake from '../../assets/pancake.svg';

const Ecosystem = () => {
    const { t } = useTranslation();
    return (
        <React.Fragment>
            <section className="ecosystem-section">
                <div className="container">
                    <h3 className="section-title">{t("ECOSYSTEM_HEADING")}</h3>
                    <div className="row">
                        <Card className="col-md-6 col-xs-12">
                            <Card.Body className="">
                                <div className="tag">
                                    <p>Borrow & Lending</p>
                                </div>
                                <div className="icon-box">
                                    <img className="pt-4 pb-4" src={pancake} title="Asset" alt="Asset"/>
                                </div>
                                <div className="content">
                                    <p className="card-heading">{t("WHY_PSTAKE_FOR_BNB_ONE_HEADING")}</p>
                                    <p className="card-content">
                                        {t("WHY_PSTAKE_FOR_BNB_ONE_CONTENT")}
                                    </p>
                                </div>
                                <div className="stats">
                                    <p className="item">17% <span>APR</span></p>
                                    <p className="item">0.5% <span>Fee</span></p>
                                    <p className="item">7% <span>SAPR</span></p>
                                </div>
                                <div className="buttons">
                                    <a rel="noopener noreferrer" target="_blank" href={PSTAKE_APP_URL} className="button-link primary">
                                        {t("START_STAKING")}
                                    </a>
                                    <a rel="noopener noreferrer" target="_blank" href={PSTAKE_APP_URL} className="button-link secondary">
                                        {t("LEARN_MORE")}
                                    </a>
                                </div>
                            </Card.Body>
                        </Card>
                        <Card className="col-md-6 col-xs-12">
                            <Card.Body className="">
                                <div className="tag">
                                    <p>Defi</p>
                                </div>
                                <div className="icon-box">
                                    <img className="pt-4 pb-4" src={pancake} title="Asset" alt="pancake"/>
                                </div>
                                <div className="content">
                                    <p className="card-heading text-center">{t("WHY_PSTAKE_FOR_BNB_THREE_HEADING")}</p>
                                    <p className="card-content text-center">
                                        {t("WHY_PSTAKE_FOR_BNB_THREE_CONTENT")}
                                    </p>
                                </div>
                                <div className="stats">
                                    <p className="item">17% <span>APR</span></p>
                                    <p className="item">0.5% <span>Fee</span></p>
                                    <p className="item">7% <span>SAPR</span></p>
                                </div>
                                <div className="buttons">
                                    <a rel="noopener noreferrer" target="_blank" href={PSTAKE_APP_URL} className="button-link primary">
                                        {t("START_STAKING")}
                                    </a>
                                    <a rel="noopener noreferrer" target="_blank" href={PSTAKE_APP_URL} className="button-link secondary">
                                     {t("LEARN_MORE")}
                                    </a>
                                </div>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </section>
        </React.Fragment >
    );
}


export default Ecosystem;