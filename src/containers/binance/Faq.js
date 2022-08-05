import React, {useContext} from "react";
import {Accordion, AccordionContext, Card, useAccordionToggle} from "react-bootstrap";
import Icon from "../../components/Icon";

function ContextAwareToggle({children, eventKey, callback}) {
    const currentEventKey = useContext(AccordionContext);

    const decoratedOnClick = useAccordionToggle(
        eventKey,
        () => callback && callback(eventKey),
    );

    const isCurrentEventKey = currentEventKey === eventKey;

    return (
        <button
            type="button"
            className="accordion-button"
            onClick={decoratedOnClick}
        >
            <Icon viewClass="icon" icon={isCurrentEventKey ? "minus" : "plus"}/>

        </button>
    );
}

const Faq = () => {
    return (
        <>
            <section className="faq-section" data-aos="fade-up">
                <div className="container">
                    <h1 className="section-title">FAQs</h1>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="info">
                                <Accordion>
                                    <Card>
                                        <Card.Header>
                                            <p>
                                                What is stkBNB?
                                            </p>
                                            <ContextAwareToggle eventKey="0">Click me!</ContextAwareToggle>
                                        </Card.Header>
                                        <Accordion.Collapse eventKey="0">
                                            <Card.Body>
                                                stkBNB is the underlying representative token (liquid-staked version)
                                                of BNB, which is minted when staking BNB on pSTAKE.
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                    <Card>
                                        <Card.Header>
                                            <p>
                                                What is the minimum and maximum amount of BNB I can stake?
                                            </p>
                                            <ContextAwareToggle eventKey="1">Click me!</ContextAwareToggle>
                                        </Card.Header>
                                        <Accordion.Collapse eventKey="1">
                                            <Card.Body>
                                                There is no minimum or maximum limit to the amount of BNB a user can
                                                stake. pSTAKE allows users to stake any non-zero amount of BNB on our platform.
                                                Please ensure you leave enough BNB in your wallet to pay for any
                                                associated gas fees.
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                    <Card>
                                        <Card.Header>
                                            <p>
                                                Why do I get less stkBNB for my 1 BNB?
                                            </p>
                                            <ContextAwareToggle eventKey="2">Click me!</ContextAwareToggle>
                                        </Card.Header>
                                        <Accordion.Collapse eventKey="2">
                                            <Card.Body>
                                                stkBNB follows an exchange rate model (Compound’s cToken model) which
                                                increases in value as the protocol accrues staking rewards. Thus,
                                                1 stkBNB is worth more after each reward epoch (24 hours). Users are
                                                minted stkBNB tokens at the ongoing exchange rate.
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                    <Card>
                                        <Card.Header>
                                            <p>
                                                How do I receive rewards?
                                            </p>
                                            <ContextAwareToggle eventKey="3">Click me!</ContextAwareToggle>
                                        </Card.Header>
                                        <Accordion.Collapse eventKey="3">
                                            <Card.Body>
                                                Rewards accrue into the value of stkBNB which rises after every epoch
                                                (UTC 00:00 hrs).  Users start earning rewards from the first epoch
                                                after staking.
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                    <Card>
                                        <Card.Header>
                                            <p>
                                                Does pSTAKE charge for the service?
                                            </p>
                                            <ContextAwareToggle eventKey="4">Click me!</ContextAwareToggle>
                                        </Card.Header>
                                        <Accordion.Collapse eventKey="4">
                                            <Card.Body>
                                                pSTAKE will charge 0% fees for BNB Liquid Staking until November 2022.
                                                This fee can be updated in the future through pSTAKE Governance.
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                    <Card>
                                        <Card.Header>
                                            <p>
                                                What determines the amount of reward I receive after every epoch?
                                            </p>
                                            <ContextAwareToggle eventKey="5">Click me!</ContextAwareToggle>
                                        </Card.Header>
                                        <Accordion.Collapse eventKey="5">
                                            <Card.Body>
                                                Staking rewards mainly come from the transaction fees paid by users of
                                                the BSC chain and thus vary according to the network activity. pSTAKE
                                                uses a validator scoring mechanism based on APR, uptime, and number of
                                                slashing instances to delegate to the top validators on the BNB chain.
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                    <Card>
                                        <Card.Header>
                                            <p>
                                                Is there any risk from staking, like slashing or any penalties?
                                            </p>
                                            <ContextAwareToggle eventKey="6">Click me!</ContextAwareToggle>
                                        </Card.Header>
                                        <Accordion.Collapse eventKey="6">
                                            <Card.Body>
                                                Stakers do not directly face slashing risk as validators are slashed
                                                from their self-staked BNB. Stakers do face the risk of missing out on
                                                staking rewards if any of the validators in pSTAKE’s validator set is
                                                jailed or is offline. The loss of rewards is distributed across all
                                                the stkBNB stakers on pSTAKE. pSTAKE stakes only with the top validators
                                                on the BNB chain and will implement an onchain validator scoring
                                                mechanism to minimise such incidences.
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>

                                </Accordion>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Faq;