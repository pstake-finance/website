import React, {useEffect, useState} from 'react';
import Card from 'react-bootstrap/Card';
import useTranslation from 'next-translate/useTranslation';
import pancake from '/images/integrations/pancake.svg';
import alpaca from '/images/integrations/alpaca.svg';
import beefy from '/images/integrations/beefy.svg';
import wombat from '/images/integrations/wombat.svg';
import leverage from '/images/integrations/leverage.svg';

import {fetchAlpaca, fetchBeefyInfo, fetchOpenLeverage, fetchPancakeInfo} from "../../actions/api";


const Ecosystem = () => {
    const { t } = useTranslation('common');
    const [alpacaInfo, setAlpacaInfo] = useState({tvl:0, apy:0})
    const [beefyInfo, setBeefyInfo] = useState({tvl:0, apy:0})
    const [pancakeInfo, setPanCakeInfo] = useState({tvl:0, apy:0})
    const [openLeverageInfo, setOpenLeverageInfo] = useState({tvl:0, apy:0})

    useEffect(()=>{
        const fetchApi = async () =>{
            setAlpacaInfo(await fetchAlpaca());
            setBeefyInfo(await fetchBeefyInfo());
            setPanCakeInfo(await fetchPancakeInfo());
            setOpenLeverageInfo(await fetchOpenLeverage());
        }
        fetchApi();
    }, [])


    return (
        <React.Fragment>
            <section className="ecosystem-section">
                <div className="container">
                    <h3 className="section-title">Put your stkBNB to work in the <br/> BNB DeFi Ecosystem </h3>
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
                                <div className="stats justify-content-center">
                                    {/*<p className="item">17% <span>APY</span></p>*/}
                                    <p className="item">${parseInt(pancakeInfo.tvl).toLocaleString()} <span>TVL</span></p>
                                </div>
                                <div className="buttons">
                                    <a rel="noopener noreferrer" target="_blank" href={`https://pancakeswap.finance/add/${process.env.REACT_APP_STK_BNB_CONTRACT_ADDRESS}/BNB`} className="button-link primary">
                                        {t("Add liquidity")}
                                    </a>
                                    <a rel="noopener noreferrer" target="_blank" href="https://youtube.com/clip/UgkxCZAHN3sTY8sH3FD_UoKvYZns6oZBFaza" className="button-link secondary">
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
                                    <p className="card-heading text-center">{t("Alpaca Finance")}</p>
                                    <p className="card-content text-center">
                                        Earn additional rewards from stkBNB/BNB pool on Pancakeswap by borrowing assets and Leverage Farming
                                    </p>
                                </div>
                                <div className="stats">
                                    <p className="item">{alpacaInfo.apy}% <span>APY</span></p>
                                    <p className="item">${parseInt(alpacaInfo.tvl).toLocaleString()} <span>TVL</span></p>
                                </div>
                                <div className="buttons">
                                    <a rel="noopener noreferrer" target="_blank" href="https://app.alpacafinance.org/farm/pancake-swap/pool/pcs-stkbnb-bnb/-/open?leverage=4&configKey=pcs-stkbnb-bnb" className="button-link primary">
                                        Start farming
                                    </a>
                                    <a rel="noopener noreferrer" target="_blank" href="https://youtube.com/clip/UgkxNxpgUN_yqPpLh2vknM6pQxpmSzH1vSPr" className="button-link secondary">
                                     {t("LEARN_MORE")}
                                    </a>
                                </div>
                            </Card.Body>
                        </Card>
                        <Card className="col-md-6 col-xs-12">
                            <Card.Body className="beefy">
                                <div className="tag">
                                    <p>Yield Farming</p>
                                </div>
                                <div className="icon-box">
                                    <img className="pt-4 pb-4" src={beefy} title="beefy" alt="beefy"/>
                                </div>
                                <div className="content">
                                    <p className="card-heading text-center">{t("Beefy Finance")}</p>
                                    <p className="card-content text-center">
                                        Earn compound interest on stkBNB/BNB pool on Pancakeswap by depositing BNB or stkBNB in Beefy vault
                                    </p>
                                </div>
                                <div className="stats">
                                    <p className="item">{beefyInfo.apy}% <span>APY</span></p>
                                    <p className="item">${parseInt(beefyInfo.tvl).toLocaleString()} <span>TVL</span></p>
                                </div>
                                <div className="buttons">
                                    <a rel="noopener noreferrer" target="_blank" href="https://app.beefy.finance/vault/cakev2-wbnb-stkbnb" className="button-link primary">
                                        Start farming
                                    </a>
                                    <a rel="noopener noreferrer" target="_blank" href="https://www.youtube.com/watch?v=UgiEqmKSOWI" className="button-link secondary">
                                        {t("LEARN_MORE")}
                                    </a>
                                </div>
                            </Card.Body>
                        </Card>
                        <Card className="col-md-6 col-xs-12">
                            <Card.Body className="">
                                <div className="tag">
                                    <p>Margin Trading</p>
                                </div>
                                <div className="icon-box">
                                    <img className="pt-4 pb-4" src={leverage} title="beefy" alt="beefy"/>
                                </div>
                                <div className="content">
                                    <p className="card-heading text-center">{t("OpenLeverage")}</p>
                                    <p className="card-content text-center">
                                        Earn leveraged staking yields on your stkBNB by borrowing BNB upto 6x leverage and converting it to stkBNB
                                    </p>
                                </div>
                                <div className="stats justify-content-center">
                                    {/*<p className="item">17% <span>APY</span></p>*/}
                                    <p className="item">${parseInt(openLeverageInfo.tvl).toLocaleString()} <span>TVL</span></p>
                                </div>
                                <div className="buttons">
                                    <a rel="noopener noreferrer" target="_blank" href="https://bnb.openleverage.finance/app/trade/pairs/345" className="button-link primary">
                                        Leveraged Staking
                                    </a>
                                    <a rel="noopener noreferrer" target="_blank" href="https://www.youtube.com/watch?v=UgiEqmKSOWI" className="button-link secondary pointer-events-none">
                                        {t("LEARN_MORE")}
                                    </a>
                                </div>
                            </Card.Body>
                        </Card>
                        <Card className="col-md-6 col-xs-12">
                            <Card.Body className="">
                                <div className="tag">
                                    <p>Dex</p>
                                </div>
                                <div className="icon-box">
                                    <img className="pt-4 pb-4" src={wombat} title="wombat" alt="wombat"/>
                                </div>
                                <div className="content">
                                    <p className="card-heading text-center">{t("Wombat")}</p>
                                    <p className="card-content text-center">
                                        Provide single sided stkBNB liquidity to earn trading fees, $PSTAKE and $WOM emissions
                                    </p>
                                </div>
                                <div className="stats justify-content-center">
                                    {/*<p className="item">17% <span>APY</span></p>*/}
                                    {/*<p className="item">${parseInt(openLeverageInfo.tvl).toLocaleString()} <span>TVL</span></p>*/}
                                </div>
                                <div className="buttons">
                                    <a rel="noopener noreferrer" target="_blank" href="https://app.wombat.exchange/pool" className="button-link primary">
                                        Add liquidity
                                    </a>
                                    <a rel="noopener noreferrer" target="_blank" href="https://www.youtube.com/watch?v=UgiEqmKSOWI" className="button-link secondary pointer-events-none">
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