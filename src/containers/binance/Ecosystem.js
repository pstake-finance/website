import React from 'react';
import Card from 'react-bootstrap/Card';
import { useTranslation } from "react-i18next";
import {
    PSTAKE_APP_URL
} from '../../constants/config';
import pancake from '../../assets/pancake.svg';
import alpaca from '../../assets/alpaca.svg';

const Ecosystem = () => {
    const { t } = useTranslation();
    return (
        <React.Fragment>
            <section className="ecosystem-section">
                <div className="container">
                    <h3 className="section-title">Put your stkBNB to work in the <br/> BNB DeFi Ecosystem</h3>
                    <div className="row">
                        <Card className="col-md-6 col-xs-12">
                            <Card.Body className="pancake">
                                <div className="tag">
                                    <p>DEX</p>
                                </div>
                                <div className="icon-box">
                                    <img className="pt-4 pb-4" src={pancake} title="Asset" alt="Asset"/>
                                </div>
                                <div className="content">
                                    <p className="card-heading">PancakeSwap</p>
                                    <p className="card-content">
                                        Provide liquidity in the stkBNB/BNB liquidity pool to earn trading fees
                                    </p>
                                </div>
                                {/*<div className="stats">*/}
                                {/*    <p className="item">17% <span>APR</span></p>*/}
                                {/*    <p className="item">0.5% <span>Fee</span></p>*/}
                                {/*    <p className="item">7% <span>SAPR</span></p>*/}
                                {/*</div>*/}
                                <div className="buttons">
                                    <a rel="noopener noreferrer" target="_blank" href="https://pancakeswap.finance/" className="button-link primary">
                                        {t("Add liquidity")}
                                    </a>
                                    <a rel="noopener noreferrer" target="_blank" href="https://blog.pstake.finance/2022/08/05/pstake-x-pancakeswap-partner-to-integrate-stkbnb-pstake-liquidity-pools/" className="button-link secondary">
                                        {t("LEARN_MORE")}
                                    </a>
                                </div>
                            </Card.Body>
                        </Card>
                        <Card className="col-md-6 col-xs-12">
                            <Card.Body className="">
                                <div className="tag">
                                    <p>Yield Farming</p>
                                </div>
                                <div className="icon-box">
                                    <img className="pt-4 pb-4" src={alpaca} title="Asset" alt="pancake"/>
                                </div>
                                <div className="content">
                                    <p className="card-heading text-center">{t("Alpaca")}</p>
                                    <p className="card-content text-center">
                                        Earn additional rewards from stkBNB/BNB pool on Pancakeswap by borrowing assets and Leverage Farming
                                    </p>
                                </div>
                                <div className="buttons">
                                    <a rel="noopener noreferrer" target="_blank" href={PSTAKE_APP_URL} className="button-link primary pointer-events-none">
                                        {t("COMING_SOON")}
                                    </a>
                                    <a rel="noopener noreferrer" target="_blank" href="https://blog.pstake.finance/2022/08/06/alpaca-finance-to-enable-leveraged-yield-farming-for-stkbnb-pstake/" className="button-link secondary">
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