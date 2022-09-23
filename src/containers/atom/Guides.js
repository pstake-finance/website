import React from 'react';
import Card from 'react-bootstrap/Card';
import { useTranslation } from "react-i18next";
import {
    GUIDE_VIDEO_URL
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
                            <a href={GUIDE_VIDEO_URL}  rel="noopener noreferrer" target="_blank" className="card-body">
                                <div className="guide-section">
                                    <div className="embed-responsive embed-responsive-16by9">
                                        <iframe width="100" height="60"
                                                title="Introducing pSTAKE | Multi-chain Liquid Staking"
                                                src={GUIDE_VIDEO_URL} frameBorder="0"
                                                className="embed-responsive-item"
                                                allow="accelerometer; encrypted-media; gyroscope; picture-in-picture">
                                        </iframe>
                                    </div>
                                    <div className="content">
                                        <p className="heading">
                                            Liquid Staking BNB
                                            <Icon viewClass="redirect" icon="redirect" />
                                        </p>
                                        <p className="text">Step by step video tutorial on staking BNB through pSTAKE</p>
                                    </div>
                                </div>
                            </a>
                        </Card>
                        <Card className="col-md-6">
                            <a href="https://blog.pstake.finance/2022/08/07/stkbnb-user-guide-bnb-liquid-staking-tutorial/"
                               rel="noopener noreferrer" target="_blank" className="card-body">
                                <div className="guide-section">
                                    <div className="image-section">
                                        <img src="https://blog.pstake.finance/wp-content/uploads/2022/08/user-guide-1160x620.png" alt="blog" />
                                    </div>
                                    <div className="content">
                                        <p className="heading">
                                            stkBNB User Guide
                                            <Icon viewClass="redirect" icon="redirect" />
                                        </p>
                                        <p className="text"> Walk-through of how to stake BNB and use it in DeFI with screenshots</p>
                                    </div>
                                </div>
                            </a>
                        </Card>
                    </div>
                </div>
            </section>
        </React.Fragment >
    );
}


export default Guides;