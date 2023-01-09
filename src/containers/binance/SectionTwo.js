import React from 'react';
import Card from 'react-bootstrap/Card';
import useTranslation from 'next-translate/useTranslation';
import Icon from "../../components/Icon";

const SectionTwo = () => {
    const { t } = useTranslation('common');
    return (
        <React.Fragment>
            <section className="use-case-section">
                <div className="container">
                    <h3 className="section-title">{t("WHY_PSTAKE_FOR_BNB")}</h3>
                    <div className="row">
                        <Card className="col-md-4 col-xs-12">
                            <div className='circle'>
                            </div>
                            <Card.Body className="">
                                <div className="icon-box">
                                    <Icon viewClass="use-case" icon="usecase1"/>
                                </div>
                                <div className="content">
                                    <p className="card-heading">{t("WHY_PSTAKE_FOR_BNB_ONE_HEADING")}</p>
                                    <p className="card-content">
                                        Receive stkBNB to maintain liquidity of otherwise locked BNB when you stake
                                    </p>
                                </div>
                            </Card.Body>
                        </Card>
                        <Card className="col-md-4  col-xs-12">
                            <Card.Body className="">
                                <div className="icon-box">
                                    <Icon viewClass="use-case" icon="usecase2"/>
                                </div>
                                <div className="content">
                                    <p className="card-heading">Yields. Yields. Yields.</p>
                                    <p className="card-content">
                                        Generate the highest yields with auto-compounding BNB staking rewards & various
                                        stkBNB DeFi opportunities, all while securing the BNB chain network
                                    </p>
                                </div>
                            </Card.Body>
                        </Card>
                        <Card className="col-md-4  col-xs-12">
                            <div className='circle'>
                            </div>
                            <Card.Body className="">
                                <div className="icon-box">
                                    <Icon viewClass="use-case" icon="usecase3"/>
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