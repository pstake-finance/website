import React from 'react';
import Card from 'react-bootstrap/Card';
import Icon from "../../components/Icon";

const SectionTwo = () => {
    return (
        <React.Fragment>
            <section className="use-case-section">
                <div className="container">
                    <h3 className="section-title">Why pSTAKE for ATOM?</h3>
                    <div className="row">
                        <Card className="col-md-4 col-xs-12" data-aos="fade-up">
                            <div className='circle'>
                            </div>
                            <Card.Body className="">
                                <div className="icon-box">
                                    <Icon viewClass="use-case" icon="usecase2"/>
                                </div>
                                <div className="content">
                                    <p className="card-heading">High-yields</p>
                                    <p className="card-content">
                                        Generate the highest yields with auto-compounding ATOM staking rewards &
                                        participating in multiple DeFi opportunities with your staked ATOM.
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
                                    <p className="card-heading">Top-Notch Security</p>
                                    <p className="card-content">
                                        Protocol security has been a core focus. stkATOM on Persistence will be audited
                                        by Halborn upon its launch, with more audits to come as the protocol matures.
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
                                    <p className="card-heading">Enhancing UX</p>
                                    <p className="card-content">
                                        We’re creating an optimised, seamless solution by leveraging our experience and
                                        learnings from years of building products for users within the Cosmos ecosystem.
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