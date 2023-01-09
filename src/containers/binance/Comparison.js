import React from 'react';
import {useTranslation} from "react-i18next";
import bnbLogo from "../../assets/networks/bnb.svg";
import stkBNBLogo from "../../assets/stk_bnb.svg";

const Comparison = () => {
    const { t } = useTranslation('common');
    return (
        <React.Fragment>
            <section className="comparison-section">
                <div className="container">
                    <h3 className="section-title">{t("STAKING_VS_LIQUID_STAKING")}</h3>
                    <div className="list">
                        <div className="item-header">
                            <div className="type"></div>
                            <div className="bnb">
                                <img src={bnbLogo} alt="bnbLogo"/>
                                Staking BNB
                            </div>
                            <div className="stk-bnb">
                                <img src={stkBNBLogo} alt="stkBNBLogo"/>
                                Liquid Staking BNB with pSTAKE
                            </div>
                        </div>
                       <div className="list-data">
                           <div className="item">
                               <div className="type">What is it?</div>
                               <div className="bnb">Act of locking BNB for securing the BNB chain to receive rewards</div>
                               <div className="stk-bnb">Liquidity on staked BNB to enable its usage in DeFi dApps on BSC</div>
                           </div>
                           <div className="item">
                               <div className="type">Rewards</div>
                               <div className="bnb">Upto ~5%</div>
                               <div className="stk-bnb">{t("BNB_APY")}</div>
                           </div>
                           <div className="item">
                               <div className="type">Minimum BNB Requirement</div>
                               <div className="bnb">1 BNB</div>
                               <div className="stk-bnb">0.000001 BNB</div>
                           </div>
                           <div className="item">
                               <div className="type">Auto-compounding Rewards</div>
                               <div className="bnb">No</div>
                               <div className="stk-bnb">Yes</div>
                           </div>
                           <div className="item">
                               <div className="type">Liquidity</div>
                               <div className="bnb">None</div>
                               <div className="stk-bnb">High</div>
                           </div>
                           <div className="item">
                               <div className="type">Risk</div>
                               <div className="bnb">Low</div>
                               <div className="stk-bnb">Medium</div>
                           </div>
                           <div className="item">
                               <div className="type">Unstaking</div>
                               <div className="bnb">Unbonding period of 7 days where no staking rewards are earned</div>
                               <div className="stk-bnb">Directly swap for BNB via a Liquidity Pool</div>
                           </div>
                           <div className="item">
                               <div className="type">Drawbacks</div>
                               <div className="bnb">Staked BNB remains locked and inaccessible</div>
                               <div className="stk-bnb">Additional smart contract risk</div>
                           </div>
                       </div>
                    </div>

                    <div className="table-container">

                    </div>
                </div>
            </section>
        </React.Fragment >
    );
}


export default Comparison;