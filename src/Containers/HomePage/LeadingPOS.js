import React from 'react';
import cosmospos from '../../assets/pos/cosmospos.svg';
import ethpos from '../../assets/pos/ethpos.svg';
import cordanapos from '../../assets/pos/cordanapos.svg';
import polkadotpos from '../../assets/pos/polkadotpos.svg';
import solanapos from '../../assets/pos/solanapos.svg';
const leadingPOS = () => {
    return (
        <React.Fragment>
            <section className="pos-section aos-init aos-animate">
                <div className="container">
                <h3 class="section-title">Some of the leading PoS Ecosystems and their Market Caps</h3>
                    <div className="row">
                        <div className="pos-cards">
                            <img src={cosmospos} alt="cosmos" title="Cosmos"/>
                            <div className="asideposcount">
                                <h4>$108B+</h4>
                                <p>Cosmos</p>
                            </div>
                        </div>
                        <div className="pos-cards">
                            <img src={ethpos} alt="cosmos" title="Cosmos"/>
                            <div className="asideposcount">
                                <h4>$266B+</h4>
                                <p>Ethereum</p>
                            </div>
                        </div>
                        <div className="pos-cards">
                            <img src={polkadotpos} alt="cosmos" title="Cosmos"/>
                            <div className="asideposcount">
                                <h4>$70B+</h4>
                                <p>Polkadot</p>
                            </div>
                        </div>
                        <div className="pos-cards">
                            <img src={solanapos} alt="cosmos" title="Cosmos"/>
                            <div className="asideposcount">
                                <h4>$12B+</h4>
                                <p>Solana</p>
                            </div>
                        </div>
                        <div className="pos-cards">
                            <img src={cordanapos} alt="cosmos" title="Cosmos"/>
                            <div className="asideposcount">
                                <h4>$36B+</h4>
                                <p>Cardano</p>
                            </div>
                        </div>
                      <div className="posmarketcap text-center">
                        <p className="text-center">pSTAKE's Total Addressable Market <span>~$500B+</span></p>
                        </div>
                    </div>
                </div>

            </section>
        </React.Fragment >
    );
}


export default leadingPOS;