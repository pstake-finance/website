import React from 'react';
import feactureone from '../../assets/feacture-1.svg';
import feacturetwo from '../../assets/feacture-2.svg';
import feacturethree from '../../assets/feacture-3.svg';
const sectionTwo = () => {
    return (
        <React.Fragment>
            <section className="second-section aos-init aos-animate">
                <div className="container">
                <h3 class="section-title">Feactures</h3>
                    <div className="row">
                        <div className="col-md-4 col-sm-12">
                           <img src={feactureone} className="text-left icon-feacture" alt="feacture" title="feacture"/>
                            <div className="feactures-card">
                                <h5>Mirrors what happens on the underlying blockchain network</h5>
                                <p>pSTAKE is the only liquid staking protocol that mirrors the exact staking mechanism of the underlying network to provide its users with the best staking experience</p>
                            </div>

                        </div>
                        <div className="col-md-4 col-sm-12">
                           <img src={feacturetwo} className="text-left icon-feacture" alt="feacture" title="feacture"/>
                            <div className="feactures-card">
                                <h5>Liquidity and Instant Redemptions</h5>
                                <p>pSTAKE not only unlocks liquidity of staked assets but also unlocks liquidity of unstaking/unbonding assets. pSTAKE’s redemption pool is a unique component that enables users to instantly exit their staking positions by swapping their unbonding tokens for unstaked tokens</p>
                            </div>

                        </div>
                        <div className="col-md-4 col-sm-12">
                           <img src={feacturethree} className="text-left icon-feacture" alt="feacture" title="feacture"/>
                            <div className="feactures-card">
                                <h5>Network Security</h5>
                                <p>pSTAKE does not affect the security of its underlying network. Users staking their tokens through pSTAKE are able to stake their tokens to a wide set of top validators which have been carefully chosen to be a part of pSTAKE</p>
                            </div>

                        </div>
                        
                    </div>
                </div>

            </section>
        </React.Fragment >
    );
}


export default sectionTwo;