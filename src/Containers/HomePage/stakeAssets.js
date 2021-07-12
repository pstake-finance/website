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
                                <Card.Title>Cosmos Network</Card.Title>
                                </div>
                               
                                <Card.Text>
                                Stake ATOM using pSTAKE to receive pATOM which can be used in DeFi to generate yield while you earn rewards on your staked ATOM
                                </Card.Text>
                               
                            </Card.Body>
                            <div className="apr">
                                <h1>9.32% <span>APR</span></h1>
                                <a href="https://app.pstake.finance/"rel="noopener noreferrer" target="_blank"><h5>Launch pSTAKE</h5></a>
                            </div>
                             {/* <div className="apr apr2">
                                <h1>9.32%  <span>APR</span></h1>
                                <h5>Coming Soon!</h5>
                            </div> */}
                        </Card>
                        <Card className="col-md-4  col-xs-6">
                            <Card.Body>
                                <div className="text-center">
                                <img className="pt-4 pb-4" src={asset2} title="Asset" alt="Asset"/>
                                <Card.Title>Persistence</Card.Title>
                                </div>
                               
                                <Card.Text>
                                Stake XPRT using pSTAKE to receive pXPRT which can be used in DeFi to generate yield while you earn rewards on your staked XPRT
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