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
                                                What is Liquid Staking
                                            </p>
                                            <ContextAwareToggle eventKey="0">Click me!</ContextAwareToggle>
                                        </Card.Header>
                                        <Accordion.Collapse eventKey="0">
                                            <Card.Body>What is Liquid Staking</Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                    <Card>
                                        <Card.Header>
                                            <p>
                                                Why $BNB
                                            </p>
                                            <ContextAwareToggle eventKey="1">Click me!</ContextAwareToggle>
                                        </Card.Header>
                                        <Accordion.Collapse eventKey="1">
                                            <Card.Body>What is Liquid Staking</Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                    <Card>
                                        <Card.Header>
                                            <p>
                                                How does stkBNB works
                                            </p>
                                            <ContextAwareToggle eventKey="2">Click me!</ContextAwareToggle>
                                        </Card.Header>
                                        <Accordion.Collapse eventKey="2">
                                            <Card.Body>What is Liquid Staking</Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                    <Card>
                                        <Card.Header>
                                            <p>
                                                How long after unstaking can I withdraw my stkBNB?
                                            </p>
                                            <ContextAwareToggle eventKey="3">Click me!</ContextAwareToggle>
                                        </Card.Header>
                                        <Accordion.Collapse eventKey="3">
                                            <Card.Body>What is Liquid Staking</Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                    <Card>
                                        <Card.Header>
                                            <p>
                                                Which wallets do you support?
                                            </p>
                                            <ContextAwareToggle eventKey="4">Click me!</ContextAwareToggle>
                                        </Card.Header>
                                        <Accordion.Collapse eventKey="4">
                                            <Card.Body>What is Liquid Staking</Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                    <Card>
                                        <Card.Header>
                                            <p>
                                                What are the risk involved ?
                                            </p>
                                            <ContextAwareToggle eventKey="5">Click me!</ContextAwareToggle>
                                        </Card.Header>
                                        <Accordion.Collapse eventKey="5">
                                            <Card.Body>What is Liquid Staking</Card.Body>
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