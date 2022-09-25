import React from 'react';
import Card from 'react-bootstrap/Card';
import Icon from "../../components/Icon";

const SectionTwo = () => {
    return (
        <React.Fragment>
            <section className="use-case-section">
                <div className="container">
                    <h3 className="section-title">Why Liquid Stake ATOM <br/> with pSTAKE?</h3>
                    <div className="row">
                        <Card className="col-md-4 col-xs-12" data-aos="fade-up">
                            <div className='circle'>
                            </div>
                            <Card.Body className="">
                                <div className="icon-box">
                                    <Icon viewClass="use-case" icon="usecase2"/>
                                </div>
                                <div className="content">
                                    <p className="card-heading">High Yields</p>
                                    <p className="card-content">
                                        Generate high yields with auto-compounding ATOM staking rewards & participate
                                        in multiple DeFi opportunities with your staked ATOM
                                    </p>
                                </div>
                            </Card.Body>
                        </Card>
                        <Card className="col-md-4  col-xs-12" data-aos="fade-up">
                            <Card.Body className="">
                                <div className="icon-box">
                                    <Icon viewClass="use-case" icon="security"/>
                                </div>
                                <div className="content">
                                    <p className="card-heading">Strong Security</p>
                                    <p className="card-content">
                                        Protocol security has been a core focus. Security audits, bug-bounty program
                                        and on-chain monitoring measures are underway
                                    </p>
                                </div>
                            </Card.Body>
                        </Card>
                        <Card className="col-md-4 col-xs-12" data-aos="fade-up">
                            <div className='circle'>
                            </div>
                            <Card.Body className="">
                                <div className="icon-box">
                                    <Icon viewClass="use-case" icon="enhance-ui"/>
                                </div>
                                <div className="content">
                                    <p className="card-heading">Enhanced User Experience</p>
                                    <p className="card-content">
                                        Smooth and seamless liquid staking with minimal fees, fast transactions, high
                                        rewards and IBC interoperability
                                    </p>
                                </div>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </section>
        </React.Fragment >
    );
}


export default SectionTwo;