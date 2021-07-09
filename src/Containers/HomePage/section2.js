import React from 'react';
import feactureone from '../../assets/feacture-1.svg';
import feacturetwo from '../../assets/feacture-2.svg';
import feacturethree from '../../assets/feacture-3.svg';
import feacturefour from '../../assets/feacture-4.svg';
import feacturefive from '../../assets/feacture-5.svg';
import feacturesix from '../../assets/feacture-6.svg';
import feacturegradient from '../../assets/feacture-gradient.svg';
import feacturegradient2 from '../../assets/feacture-gradent2.svg';
const sectionTwo = () => {
    return (
        <React.Fragment>
            <section className="second-section aos-init aos-animate">
                <div className="container">
                    <h3 class="section-title">Features</h3>
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-12">

                            <div className="feactures-card mb-4">
                                <img src={feactureone} className="text-left icon-feacture" alt="feacture" title="feacture" />
                                <h5>Wrap</h5>
                                <p>pSTAKE wraps your native tokens into 1:1 pegged ERC-20 wTOKENs for you to use your PoS assets in the Ethereum ecosystem</p>
                            </div>
                            <div className="inner-feacture">
                                <div className="feactures-card mb-4">



                                    <img src={feacturefour} className="text-left icon-feacture" alt="feacture" title="feacture" />
                                    <h5>Claim Staking Rewards</h5>
                                    <p>Users can claim their staking rewards at any time. These claimed wTOKENs can then be staked to compound staking rewards or be used to redeem an equivalent amount of native tokens. Transferring pTOKENs to a different wallet address triggers an automatic rewards claim</p>

                                </div>
                                <img src={feacturegradient} className="feacturegradient" alt="feacture" />
                            </div>
                            
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12">

                            <div className="feactures-card mb-4">
                                <img src={feacturetwo} className="text-left icon-feacture" alt="feacture" title="feacture" />
                                <h5>Stake</h5>
                                <p>Assets staked through pSTAKE are delegated to a set of whitelisted validators of the underlying network to issue 1:1 pegged ERC-20 pTOKENs. Assets are staked across multiple validators to minimize slashing risks and optimize for higher staking rewards. pTOKENs are fungible in nature and slashing risks are shared across all pSTAKE users</p>

                            </div>
                            <div className="feactures-card mb-4">
                                <img src={feacturefive} className="text-left icon-feacture" alt="feacture" title="feacture" />
                                <h5>Liquidity and Instant Redemption</h5>
                                <p>Users can skip long unbonding periods by swapping their pTOKENs for other assets through a liquidity pool on a DEX</p>

                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="feactures-card mb-4">
                                <img src={feacturethree} className="text-left icon-feacture" alt="feacture" title="feacture" />
                                <h5>Insurance Fund</h5>
                                <p>Assets delegated to pSTAKE’s whitelisted validators are safeguarded against the slashing risks by an insurance pool which covers a portion or all of the slashed amount, based on the severity of the slashing event</p>

                            </div>
                            <img src={feacturegradient2} className="feacturegradient2" alt="feacture" />
                            <div className="feactures-card m-none mb-4">
                                <img src={feacturesix} className="text-left icon-feacture" alt="feacture" title="feacture" />
                                <h5>Generate Additional Yield</h5>
                                <p>pTOKENs can be used across various DeFi protocols in the Ethereum ecosystem to generate additional yield. This can be in the form of trading fees earned by supplying liquidity to a DEX, or more complex use cases such as borrowing and lending</p>

                            </div>

                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 ">
                        <div className="feactures-card dd-none mb-4">
                                <img src={feacturesix} className="text-left icon-feacture" alt="feacture" title="feacture" />
                                <h5>Generate Additional Yield</h5>
                                <p>pTOKENs can be used across various DeFi protocols in the Ethereum ecosystem to generate additional yield. This can be in the form of trading fees earned by supplying liquidity to a DEX, or more complex use cases such as borrowing and lending</p>

                            </div>
                        </div>

                    </div>




                </div>

            </section>
        </React.Fragment >
    );
}


export default sectionTwo;