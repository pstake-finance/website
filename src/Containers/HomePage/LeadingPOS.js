import React from 'react';
import cosmospos from '../../assets/pos/cosmospos.svg';
import ethpos from '../../assets/pos/ethpos.svg';
//import cordanapos from '../../assets/pos/cordanapos.svg';
import polkadotpos from '../../assets/pos/polkadotpos.svg';
import solanapos from '../../assets/pos/solanapos.svg';
const leadingPOS = () => {
    return (
        <React.Fragment>
            <section className="pos-section aos-init aos-animate">
                <div className="container">
                <h3 className="info-banner-heading "> Ecosystems and their <span>Market Caps</span></h3>
                   <div className="row">
                        <div className="pos-cards">
                            <img src={cosmospos} alt="cosmos" title="Cosmos" />
                            <div className="asideposcount">
                                <h4>$76B+</h4>
                                <p>Cosmos</p>
                            </div>
                        </div>
                        <div className="pos-cards">
                            <img src={ethpos} alt="cosmos" title="Cosmos" />
                            <div className="asideposcount">
                                <h4>$250B+</h4>
                                <p>Ethereum</p>
                            </div>
                        </div>
                        <div className="pos-cards">
                            <img src={polkadotpos} alt="cosmos" title="Cosmos" />
                            <div className="asideposcount">
                                <h4>$67B+</h4>
                                <p>Polkadot</p>
                            </div>
                        </div>
                        <div className="pos-cards">
                            <img src={solanapos} alt="cosmos" title="Cosmos" />
                            <div className="asideposcount">
                                <h4>$5B+</h4>
                                <p>Solana</p>
                            </div>
                        </div>
                        {/* <div className="posmarketcap text-center">
                            <div className="row">
                                <div className="col-lg-6">
                                    <h3 class="section-title">Total Addressable Market</h3>
                                </div>
                                <div className="col-lg-6">
                                    <p className="text-center">pSTAKE’s Total Addressable Market is <span>~$500B+</span>, with the following PoS ecosystems holding the lion’s share of value</p>
                                </div>
                            </div>
                        </div> */}
                    </div>
                    <h3 class="section-title">Total Addressable Market</h3>
                    <p className="text-center mt-2">pSTAKE’s Total Addressable Market is ~$500B+, with the <span>following PoS ecosystems holding the lion’s share of value</span></p>
                   
                </div>

            </section>
        </React.Fragment >
    );
}


export default leadingPOS;