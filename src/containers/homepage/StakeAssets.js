import React from 'react';
import Card from 'react-bootstrap/Card';
import { useTranslation } from "react-i18next";
import {
    PSTAKE_APP_URL } from '../../constants/config';
import asset1 from '../../assets/asset_1.svg';
import asset2 from '../../assets/asset_2.svg';
import asset3 from '../../assets/asset_3.svg';
const StakeAssets = () => {
    const { t } = useTranslation();
    return (
        <React.Fragment>
            <section className="stake-section">
                <div className="container">
                    <div className="row">
                        <h3 className="section-title">{t("STAKE_YOUR_ASSETS")}</h3>
                    <p className="text-center mt-2">{t("STAKE_ASSETS_USNING_PSAKE")} <span>{t("YOU_EARN_STAKING_REWARDS")}</span></p>

                        <Card className="col-md-4 col-xs-6">
                            <Card.Body>
                                <div className="text-center">
                                <img className="pt-4 pb-4" src={asset1} title="Asset" alt="Asset"/>
                                <Card.Title>{t("COSMOS_NETWORK")}</Card.Title>
                                </div>
                               
                              
                            </Card.Body>
                            <div className="apr">
                                <h1>7% <span>APR</span></h1>
                                <a href={PSTAKE_APP_URL} rel="noopener noreferrer" target="_blank"><h5>{t("STAKE_NOW")}</h5></a>
                            </div>
                        </Card>
                        <Card className="col-md-4  col-xs-6">
                            <Card.Body>
                                <div className="text-center">
                                <img className="pt-4 pb-4" src={asset2} title="Asset" alt="Asset"/>
                                <Card.Title>{t("PERSISTENCE")}</Card.Title>
                                </div>
                               
                             
                            </Card.Body>
                            <div className="apr">
                                <h1>33% <span>APR</span></h1>
                                <a href={PSTAKE_APP_URL} rel="noopener noreferrer" target="_blank"><h5>{t("STAKE_NOW")}</h5></a>

                            </div>
                        </Card>
                        <Card className="col-md-4  col-xs-6">
                            <Card.Body>
                                <div className="text-center">
                                <img className="pt-4 pb-4" src={asset3} title="Asset" alt="Asset"/>
                                <Card.Title>{t("ETHEREUM")}</Card.Title>
                                </div>
                               
                             
                            </Card.Body>
                            <div className="apr apr2">
                              
                                <h5>Coming Soon!</h5>
                            </div>
                        </Card>
                    </div>
                </div>
            </section>
        </React.Fragment >
    );
}


export default StakeAssets;