import React from 'react';
import feactureone from '../../assets/feacture-1.svg';
import feacturetwo from '../../assets/feacture-2.svg';
import feacturethree from '../../assets/feacture-3.svg';
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
                         
                            <div className="feactures-card">
                            <img src={feactureone} className="text-left icon-feacture" alt="feacture" title="feacture"/>
                                <h5>Liquidity</h5>
                                <p>Unlocks liquidity of staked assets by issuing staked representatives</p>
                                
                            </div>
                            <img src={feacturegradient} className="feacturegradient" alt="feacture"/>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                          
                        <div className="feactures-card">
                            <img src={feacturetwo} className="text-left icon-feacture" alt="feacture" title="feacture"/>
                                <h5>Network Security</h5>
                                <p>Assets will be delegated to a set of whitelisted validators of the underlying network to decentralise voting power</p>
                                
                            </div>

                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                        <div className="feactures-card">
                            <img src={feacturethree} className="text-left icon-feacture" alt="feacture" title="feacture"/>
                                <h5>Fungibility</h5>
                                <p>All staked representatives are fungible in nature and slashing risks are shared across all pSTAKE users</p>
                                
                            </div>
                            <img src={feacturegradient2} className="feacturegradient2" alt="feacture"/>
                        </div>
                        
                    </div>
                </div>

            </section>
        </React.Fragment >
    );
}


export default sectionTwo;