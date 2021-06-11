import React from 'react';
import Card from 'react-bootstrap/Card';
import asset1 from '../../assets/asset_1.svg';
import asset2 from '../../assets/asset_2.svg';
const StakeAssets = () => {
    return (
        <React.Fragment>
            <section className="stake-section">
                <div className="container">
                    <div className="row">
                        <h3 class="section-title">Stake Your Assets Now</h3>
                        <Card className="col-md-4 col-xs-6">
                            <Card.Body>
                                <div className="text-center">
                                <img className="pt-4 pb-4" src={asset1} title="Asset" alt="Asset"/>
                                <Card.Title>Cosmos</Card.Title>
                                </div>
                               
                                <Card.Text>
                                Stake your ATOM to receive 1:1 pegged pATOM on the Ethereum network to be used in DeFi for additional yield
                                </Card.Text>
                               
                            </Card.Body>
                            <div className="apr">
                                <h1>9.32% <span>APR</span></h1>
                                <h5>Stake Now</h5>
                            </div>
                        </Card>
                        <Card className="col-md-4  col-xs-6">
                            <Card.Body>
                                <div className="text-center">
                                <img className="pt-4 pb-4" src={asset2} title="Asset" alt="Asset"/>
                                <Card.Title>Persistence</Card.Title>
                                </div>
                               
                                <Card.Text>
                                Stake your XPRT to receive liquid 1:1 pegged pXPRT and put it to use in DeFi while retaining staking rewards and exposure to the Persistence ecosystem.
                                </Card.Text>
                               
                            </Card.Body>
                            <div className="apr apr2">
                                <h1>30.62% <span>APR</span></h1>
                                <h5>Coming Soon!</h5>
                            </div>
                        </Card>
                    </div>
                </div>
            </section>
        </React.Fragment >
    );
}


export default StakeAssets;