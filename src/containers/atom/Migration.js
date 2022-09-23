import React, {useEffect, useState} from 'react';
import Card from 'react-bootstrap/Card';
import { useTranslation } from "react-i18next";
import stkATOM2 from '../../assets/stkATOM2.svg';
import stkATOM from '../../assets/stkAtom.svg';
import Icon from "../../components/Icon";


const Migration = () => {
    const { t } = useTranslation();
    return (
        <React.Fragment>
            <section className="migration-section">
                <div className="container">
                    <h3 className="section-title">stkATOM & Migration Utility</h3>
                    <div className="row">
                        <Card className="col-md-6 col-xs-12">
                            <Card.Body className="">
                                <div className="icon-box">
                                    <img className="pt-4 pb-4" src={stkATOM2} title="stkATOM2" alt="stkATOM2"/>
                                </div>
                                <div className="content">
                                    <p className="card-heading text-center">{t("stkATOM (ERC-20)")}</p>
                                    <p className="card-content text-center">
                                        Migrate your ERC20 stkATOM to Persistence stkATOM.
                                    </p>
                                </div>
                                <div className="buttons">
                                    <a rel="noopener noreferrer" target="_blank" href="/" className="button-link primary">
                                        Go to app
                                    </a>
                                    <a rel="noopener noreferrer" target="_blank" href="/" className="button-link secondary pointer-events-none">
                                        {t("LEARN_MORE")}
                                    </a>
                                </div>
                            </Card.Body>
                        </Card>
                        <Card className="col-md-6 col-xs-12">
                            <Card.Body className="">
                                <div className="icon-box">
                                    <img className="pt-4 pb-4" src={stkATOM2} title="stkATOM2" alt="stkATOM2"/>
                                    <Icon viewClass="right-arrow" icon="right-arrow" />
                                    <img className="pt-4 pb-4" src={stkATOM} title="stkATOM2" alt="stkATOM2"/>
                                </div>
                                <div className="content">
                                    <p className="card-heading text-center">{t("Migrate your stkATOM")}</p>
                                    <p className="card-content text-center">
                                        Migrate your ERC20 stkATOM to Persistence stkATOM.
                                    </p>
                                </div>
                                <div className="buttons">
                                    <a rel="noopener noreferrer" target="_blank" href="/" className="button-link primary">
                                        Go to app
                                    </a>
                                    <a rel="noopener noreferrer" target="_blank" href="/" className="button-link secondary pointer-events-none">
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


export default Migration;