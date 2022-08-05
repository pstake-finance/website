import React from 'react';
import Card from 'react-bootstrap/Card';
import { useTranslation } from "react-i18next";
import {
    VIDEO_URL
} from '../../constants/config';
import Icon from "../../components/Icon";

const Guides = () => {
    const { t } = useTranslation();
    return (
        <React.Fragment>
            <section className="guides-section">
                <div className="container">
                    <h3 className="section-title">{t("GUIDES_TUTORIALS")}</h3>
                    <div className="row">
                        <Card className="col-md-6">
                            <Card.Body>
                                <div className="guide-section">
                                    <div className="embed-responsive embed-responsive-16by9">
                                        <iframe
                                            title="Introducing pSTAKE | Multi-chain Liquid Staking"
                                            className="embed-responsive-item" src={VIDEO_URL} />
                                    </div>
                                    <div className="content">
                                        <p className="heading">
                                            Liquid Staking $BNB
                                            <Icon viewClass="redirect" icon="redirect" />
                                        </p>
                                        <p className="text">PancakeSwap is the leading decentralized exchange on BNB Smart Chain</p>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                        <Card className="col-md-6">
                            <Card.Body className="">
                                <div className="guide-section">
                                    <div className="embed-responsive embed-responsive-16by9">
                                        <iframe
                                            title="Introducing pSTAKE | Multi-chain Liquid Staking"
                                            className="embed-responsive-item" src={VIDEO_URL} />
                                    </div>
                                    <div className="content">
                                        <p className="heading">
                                            pSTAKE & Binance Labs Partnership
                                            <Icon viewClass="redirect" icon="redirect" />
                                        </p>
                                        <p className="text">PancakeSwap is the leading decentralized exchange on BNB Smart Chain</p>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </section>
        </React.Fragment >
    );
}


export default Guides;