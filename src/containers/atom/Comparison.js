import React from 'react';
import stkAtom from "../../assets/stkAtom.svg";
import stkATOM2 from '../../assets/stkATOM2.svg';
import {COSMOS_URL, STK_ATOM_MIGRATION_URL} from "../../constants/config";
import Icon from "../../components/Icon";
import stkATOM from "../../assets/stkAtom.svg";

const Comparison = () => {
    return (
        <React.Fragment>
            <section className="comparison-section" data-aos="fade-up">
                <div className="container">
                    <h3 className="section-title">stkATOM From <br/> Ethereum to Persistence</h3>
                    <div className="list">
                        <div className="item-header">
                            <div className="type"></div>
                            <div className="bnb">
                                <img src={stkATOM2} alt="bnbLogo"/>
                                stkATOM(ERC-20)
                            </div>
                            <div className="stk-bnb">
                                <img src={stkAtom} alt="stkBNBLogo"/>
                                stkATOM(Persistence)
                            </div>
                        </div>
                       <div className="list-data">
                           <div className="item">
                               <div className="type">Status</div>
                               <div className="bnb">
                                   First-ever liquid staking solution for ATOM. Launched in 2021, to be migrated to the new implementation
                               </div>
                               <div className="stk-bnb">
                                   New and improved liquid staking solution for ATOM. <b>Launching soon</b>
                               </div>
                           </div>
                           <div className="item">
                               <div className="type">How it works</div>
                               <div className="bnb">User deposits ATOM with pSTAKE to mint 1:1 pegged pATOM.
                                   User interacts with Ethereum Smart Contract to burn pATOM which issues 1:1 pegged
                                   stkATOM
                               </div>
                               <div className="stk-bnb">
                                   User deposits ATOM with pSTAKE to mint stkATOM on the Persistence Core-1 chain
                               </div>
                           </div>
                           <div className="item">
                               <div className="type">Token Model</div>
                               <div className="bnb">Dual Token</div>
                               <div className="stk-bnb">Single token Exchange Rate (cToken)</div>
                           </div>
                           <div className="item">
                               <div className="type">Custody</div>
                               <div className="bnb">Semi-custodial because of the MPC pBridge</div>
                               <div className="stk-bnb">Non-custodial solution powered by Inter-Blockchain Communication,
                                   Interchain Accounts, and Interchain Queries</div>
                           </div>
                           <div className="item">
                               <div className="type">Security Risks</div>
                               <div className="bnb">Protocol-level and MPC pBridge </div>
                               <div className="stk-bnb">Protocol-level</div>
                           </div>
                           <div className="item">
                               <div className="type">DeFi Utility</div>
                               <div className="bnb">Very limited</div>
                               <div className="stk-bnb">Persistence’s role as the liquid staking hub along with
                                   integrations with established protocols in Cosmos will drive high utility
                                   to stkATOM
                               </div>
                           </div>
                           <div className="item">
                               <div className="type">Validators</div>
                               <div className="bnb">6 MPC pBridge and PoS Validators</div>
                               <div className="stk-bnb">More decentralized—to be defined but will still be at
                                   least 3-4 times larger than the validator set of stkATOM(ERC-20)
                               </div>
                           </div>
                           <div className="item">
                               <div className="type">Staking Rewards</div>
                               <div className="bnb">13.5% APR</div>
                               <div className="stk-bnb">Will match rewards on-chain</div>
                           </div>
                           <div className="item">
                               <div className="type">Rewards’ Claim</div>
                               <div className="bnb">Manual claim of staking rewards in the form of pATOM</div>
                               <div className="stk-bnb">No need to claim rewards as they will directly accrue
                                   to stkATOM and will be auto-compounded
                               </div>
                           </div>
                           <div className="item">
                               <div className="type">Chain Fees</div>
                               <div className="bnb">Very high</div>
                               <div className="stk-bnb">Very low</div>
                           </div>
                           <div className="item">
                               <div className="type">Security Measures</div>
                               <div className="bnb">Audited by ConsenSys Diligence, Oak Security, and Trail of Bits</div>
                               <div className="stk-bnb">Audited by Halborn at launch with more audits in
                                   future, Bug-Bounty Programs and On-Chain tracking
                               </div>
                           </div>
                           <div className="item">
                               <div className="type"></div>
                               <div className="bnb">
                                   <div className="buttons m-0">
                                       <a rel="noopener noreferrer" target="_blank" href={COSMOS_URL} className="button-link primary  m-0">
                                           Go to app
                                       </a>
                                   </div>
                               </div>
                               <div className="stk-bnb">
                                   <div className="buttons m-0">
                                       <a rel="noopener noreferrer" target="_blank" href={STK_ATOM_MIGRATION_URL} className="button-link primary disable  m-0">
                                           Coming Soon
                                       </a>
                                   </div>
                               </div>
                           </div>
                       </div>
                    </div>
                    <div className='migration-card'>
                        <div className='card-body p-0 d-flex align-items-center justify-content-between flex-wrap'>
                            <div className="content d-flex align-items-center flex-wrap">
                                <div className="icon-box">
                                    <img src={stkATOM2} title="stkATOM2" alt="stkATOM2"/>
                                    <Icon viewClass="right-arrow" icon="right-arrow-bold" />
                                    <img src={stkATOM} title="stkATOM2" alt="stkATOM2"/>
                                </div>
                                <p className="card-text">
                                    Migration of stkATOM(ERC-20) to Persistence Core-1 Chain
                                </p>
                            </div>
                            <div className="buttons m-0">
                                <a rel="noopener noreferrer" target="_blank" href={STK_ATOM_MIGRATION_URL} className="button-link primary  m-0">
                                    Learn More
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment >
    );
}


export default Comparison;