import React from 'react';
import Card from 'react-bootstrap/Card';
import { useTranslation } from "react-i18next";
import {
    PSTAKE_APP_STKETH_URL,
    PSTAKE_APP_URL
} from '../../constants/config';
import asset1 from '../../assets/asset_1.svg';
import asset2 from '../../assets/asset_2.svg';
import asset3 from '../../assets/asset_3.svg';
import asset4 from '../../assets/bnb.svg';
import sol from '../../assets/sol.svg';
import avax from '../../assets/avax.svg';
import {Link} from "react-router-dom";
const StakeAssets = () => {
    const { t } = useTranslation();
    return (
        <React.Fragment>
            <section className="stake-section">
                <div className="container">
                    <div className="row">
                        <h3 className="section-title">{t("STAKE_YOUR_ASSETS")}</h3>
                        <Card className="col-md-4 col-xs-6">
                            <Card.Body className="gfour">
                                <div className="text-center">
                                    <img className="pt-4 pb-4" src={asset4} title="Asset" alt="Asset"/>
                                    <Card.Title>{t("BNB")}</Card.Title>
                                </div>
                                <div className="apr">
                                    <h1>{t("BNB_APY")} <span>{t("APY")}</span></h1>
                                    <Link to='/bnb'><h5>{t("STAKE_NOW")}</h5></Link>
                                </div>
                            </Card.Body>
                        </Card>
                        <Card className="col-md-4  col-xs-6">
                            <Card.Body className="gthree">
                                <div className="text-center">
                                    <img className="pt-4 pb-4" src={asset3} title="Asset" alt="Asset"/>
                                    <Card.Title>{t("ETHEREUM")}</Card.Title>
                                </div>
                                <div className="apr">
                                    <h1>{t("ETH_APR")} <span>{t("APY")}</span></h1>
                                    <a href={PSTAKE_APP_STKETH_URL} rel="noopener noreferrer" target="_blank"><h5>{t("STAKE_NOW")}</h5></a>
                                </div>
                            </Card.Body>
                        </Card>
                        <Card className="col-md-4 col-xs-6">
                            <Card.Body className="gone">
                                <div className="text-center">
                                <img className="pt-4 pb-4" src={asset1} title="Asset" alt="Asset"/>
                                <Card.Title>{t("COSMOS")}</Card.Title>
                                </div>
                                <div className="apr">
                                    <h1>{t("ATOM_APR")} <span>{t("APY")}</span></h1>
                                    <a href={PSTAKE_APP_URL} rel="noopener noreferrer" target="_blank"><h5>{t("STAKE_NOW")}</h5></a>
                                </div>
                            </Card.Body>
                        </Card>
                        <Card className="col-md-4  col-xs-6">
                            <Card.Body className="gtwo">
                                <div className="text-center">
                                <img className="pt-4 pb-4" src={asset2} title="Asset" alt="Asset"/>
                                <Card.Title>{t("PERSISTENCE")}</Card.Title>
                                </div>
                                <div className="apr">
                                <h1>{t("XPRT_APR")} <span>{t("APY")}</span></h1>
                                <a href={PSTAKE_APP_URL} rel="noopener noreferrer" target="_blank"><h5>{t("STAKE_NOW")}</h5></a>
                            </div>
                            </Card.Body>
                        </Card>
                        <Card className="col-md-4  col-xs-6">
                            <Card.Body className="solana">
                                <div className="text-center">
                                    <img className="pt-4 pb-4" src={sol} title="sol" alt="sol"/>
                                    <Card.Title>{t("SOLANA")}</Card.Title>
                                </div>
                                <div className="apr ap4">
                                    <h5>{t("Coming Soon!")}</h5>
                                </div>
                            </Card.Body>
                        </Card>
                        <Card className="col-md-4  col-xs-6">
                            <Card.Body className="avax">
                                <div className="text-center">
                                    <img className="pt-4 pb-4" src={avax} title="avax" alt="avax"/>
                                    <Card.Title>{t("AVAX")}</Card.Title>
                                </div>
                                <div className="apr ap4">
                                    <h5>{t("Coming Soon!")}</h5>
                                </div>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </section>
        </React.Fragment >
    );
}


export default StakeAssets;