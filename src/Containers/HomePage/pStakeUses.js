import React, { useContext } from "react";
import { Accordion, Card, useAccordionToggle, AccordionContext } from "react-bootstrap";
import Icon from "../../components/Icon";
function ContextAwareToggle({ children, eventKey, callback }) {
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
            <Icon viewClass="icon" icon={isCurrentEventKey ? "minus" : "plus"} />

        </button>
    );
}
const PStakeUses = () => {
    return (
        <React.Fragment>
            <section className="uses-section xprt-banner-ecosystem ecosystem-faq-section">
                <div className="container">
                    <h3 className="heading">Using pSTAKE</h3>
                    <div className="row">
                        <div className="col-lg-6">
                            <Accordion>
                                <Card>
                                    <Card.Header>

                                        <p className="content"><span>01</span>&emsp;Deposit ATOM</p>

                                        <ContextAwareToggle eventKey="0">Click me!</ContextAwareToggle>
                                    </Card.Header>
                                    <Accordion.Collapse eventKey="0">
                                        <Card.Body>Deposit ATOM to wrap it and bring it on to the Ethereum chain through the pSTAKE Cosmos-hub wallet address provided to the user.</Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                                <Card>
                                    <Card.Header>

                                        <p className="content"><span>02</span>&emsp;Receive ustkATOM </p>

                                        <ContextAwareToggle eventKey="1">Click me!</ContextAwareToggle>
                                    </Card.Header>
                                    <Accordion.Collapse eventKey="1">
                                        <Card.Body>
                                            <p>Wrapped ATOM is represented as ustkATOM (unstaked ATOM) on pStake
                                        </p>
                                        </Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                                <Card>
                                    <Card.Header>

                                        <p className="content"><span>03</span>&emsp;Stake ustkATOM & Receive stkATOM</p>

                                        <ContextAwareToggle eventKey="2">Click me!</ContextAwareToggle>
                                    </Card.Header>
                                    <Accordion.Collapse eventKey="2">
                                        <Card.Body>
                                            <p>ustkATOM holders can burn their ustkATOM to mint stkATOM and stake their deposited ATOMs with pSTAKE's trusted validators set.
                                        </p>
                                        </Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                                <Card>
                                    <Card.Header>

                                        <p className="content"><span>04</span>&emsp;Earn ustATOM as staking rewards
</p>

                                        <ContextAwareToggle eventKey="3">Click me!</ContextAwareToggle>
                                    </Card.Header>
                                    <Accordion.Collapse eventKey="3">
                                        <Card.Body>
                                            <p>The staking rewards are accrued on a real time basis that can be claimed in the form of ustkATOM.
                                        </p>
                                        </Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                                <Card>
                                    <Card.Header>

                                        <p className="content"><span>05</span>&emsp;Use stkATOM
</p>

                                        <ContextAwareToggle eventKey="4">Click me!</ContextAwareToggle>
                                    </Card.Header>
                                    <Accordion.Collapse eventKey="4">
                                        <Card.Body>
                                            <p>One can use the stkATOMs (ERC20) in the ever growing DeFi ecosystem to earn higher yield
                                        </p>
                                        </Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                                <Card>
                                    <Card.Header>

                                        <p className="content"><span>06</span>&emsp;Unstake stkATOM 

</p>

                                        <ContextAwareToggle eventKey="5">Click me!</ContextAwareToggle>
                                    </Card.Header>
                                    <Accordion.Collapse eventKey="5">
                                        <Card.Body>
                                            <p>Users can burn their stkATOM to mint ustkATOM. After unstaking, the user has to wait for 21 days before she gets her ustkATOM back.

                                        </p>
                                        </Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                                <Card>
                                    <Card.Header>

                                        <p className="content"><span>07</span>&emsp;Withdraw ustkATOM


</p>

                                        <ContextAwareToggle eventKey="6">Click me!</ContextAwareToggle>
                                    </Card.Header>
                                    <Accordion.Collapse eventKey="6">
                                        <Card.Body>
                                            <p>ustkATOM tokens are required to withdraw the deposited ATOM


                                        </p>
                                        </Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                            </Accordion>


                        </div>
                    </div>

                </div>

            </section>
        </React.Fragment>
    );
}


export default PStakeUses;