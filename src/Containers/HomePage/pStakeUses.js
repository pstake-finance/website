import React from "react";
import { Accordion, Card } from "react-bootstrap";

const PStakeUses = () => {
   
    return (
        <React.Fragment>
            <section className="uses-section xprt-banner-ecosystem ecosystem-faq-section">
                <div className="container">
                    <h3 className="heading">Using pSTAKE</h3>

                    <div className="col-lg-12">

                        <Accordion className="col-lg-12">
                            <div className="row">
                                <div className="col-lg-6">
                                    <Card>
                                        <Card.Header>
                                            <div className="content-section">
                                                <span>01</span>
                                                <p className="content">Wrap native tokens</p>
                                            </div>
                                           
                                        </Card.Header>
                                       
                                        <Accordion.Collapse className="show" >
                                            <Card.Body>Deposit native tokens on pSTAKE to mint and receive an equivalent amount of 1:1 pegged ERC-20 ustkTOKENs which can be used within the Ethereum DeFi ecosystem or used to stake the deposited tokens through pSTAKE</Card.Body>
                                        </Accordion.Collapse>
                                        
                                    </Card>
                                    <Card>
                                        <Card.Header>
                                            <div className="content-section">
                                                <span>02</span>
                                                <p className="content">Stake ustkTOKENs </p>
                                            </div>
                                          
                                        </Card.Header>
                                        
                                        <Accordion.Collapse className="show">
                                            <Card.Body>
                                                <p>Stake ustkTOKENs to bond underlying native tokens through a set of trusted validator set on pSTAKE. ustkTOKENs are burned and ERC-20 based 1:1 pegged stkTOKENs are issued to the staker
                                        </p>
                                            </Card.Body>
                                        </Accordion.Collapse>
                                         
                                    </Card>
                                    <Card>
                                        <Card.Header >
                                            <div className="content-section">
                                                <span>03</span>
                                                <p className="content">Earn and claim staking rewards</p>
                                            </div>
                                           
                                        </Card.Header>
                                      
                                        <Accordion.Collapse className="show">
                                            <Card.Body>
                                                <p>Staking rewards are accrued on the staked assets in form of ustkTOKENs in real time and can be claimed at any point in time
                                        </p>
                                            </Card.Body>
                                        </Accordion.Collapse>
                                        
                                    </Card>


                                </div>
                                <div className="col-lg-6">

                                    <Card>
                                        <Card.Header>
                                            <div className="content-section">
                                                <span>04</span>
                                                <p className="content">Use stkTOKEN to generate additional yield
</p>
                                            </div>

                                            
                                        </Card.Header>
                                      
                                        <Accordion.Collapse className="show">
                                            <Card.Body>
                                                <p>stkTOKENs can be used in the ever growing Ethereum DeFi Ecosystem to maximise yield and unlock the true potential of staked assets
                                        </p>
                                            </Card.Body>
                                        </Accordion.Collapse>
                                         
                                    </Card>
                                    <Card>
                                        <Card.Header>
                                            <div className="content-section">
                                                <span>05</span>
                                                <p className="content">Unstake stkTOKENs
</p>
                                            </div>
                                            
                                        </Card.Header>
                                       
                                        <Accordion.Collapse className="show">
                                            <Card.Body>
                                                <p>stkTOKENs are burned and ustkTOKENs are minted to represent unstaking of native chain tokens. Users can redeem their ustkTOKENs after a 21-day unbonding period
                                        </p>
                                            </Card.Body>
                                        </Accordion.Collapse>
                                        
                                    </Card>
                                    <Card>
                                        <Card.Header>
                                            <div className="content-section">
                                                <span>06</span>
                                                <p className="content">Withdraw native tokens

</p>
                                            </div>

                                          
                                        </Card.Header>
                                       
                                        <Accordion.Collapse className="show">
                                            <Card.Body>
                                                <p>ustkTOKENs are burned and an equivalent amount of native tokens are transferred to the user's native token wallet address

                                        </p>
                                            </Card.Body>
                                        </Accordion.Collapse>
                                         
                                    </Card>
                                </div>



                            </div>
                        </Accordion>



                    </div>

                </div>

            </section>
        </React.Fragment>
    );
}


export default PStakeUses;