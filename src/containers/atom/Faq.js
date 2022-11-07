import React, { useContext } from "react";
import {
  Accordion,
  AccordionContext,
  Card,
  useAccordionToggle
} from "react-bootstrap";
import Icon from "../../components/Icon";

function ContextAwareToggle({ children, eventKey, callback }) {
  const currentEventKey = useContext(AccordionContext);

  const decoratedOnClick = useAccordionToggle(
    eventKey,
    () => callback && callback(eventKey)
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
                      <p>How much is my stkATOM worth?</p>
                      <ContextAwareToggle eventKey="0">
                        Click me!
                      </ContextAwareToggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                      <Card.Body>
                        The value of 1 stkATOM goes on increasing as it accrues
                        staking rewards over time. This is because stkATOM
                        follows a cToken model whose value changes based on the
                        amount of underlying ATOM. Users staking/unstaking on
                        the pSTAKE protocol are charged the ongoing rate which
                        is displayed on the app UI.
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                  <Card>
                    <Card.Header>
                      <p>Why do I get less stkATOM for my ATOM?</p>
                      <ContextAwareToggle eventKey="1">
                        Click me!
                      </ContextAwareToggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="1">
                      <Card.Body>
                        stkATOM follows an exchange rate model (also known as
                        the cToken Model) which results in stkATOM increasing in
                        value against ATOM as the protocol accrues staking
                        rewards. Thus, 1 stkATOM is worth more after each reward
                        epoch, or 24 hours. Liquid stakers are given stkATOM
                        tokens at the prevailing exchange rate at the moment
                        they stake.
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                  <Card>
                    <Card.Header>
                      <p>What is the unbonding period for stkATOM?</p>
                      <ContextAwareToggle eventKey="2">
                        Click me!
                      </ContextAwareToggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="2">
                      <Card.Body>
                        Users can claim ATOM from the pSTAKE protocol 21 days
                        after the unstaking transaction. To avoid waiting for 21
                        days, try using the Instant Redeem option on the
                        unstaking page!
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                  <Card>
                    <Card.Header>
                      <p>How do I receive rewards?</p>
                      <ContextAwareToggle eventKey="3">
                        Click me!
                      </ContextAwareToggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="3">
                      <Card.Body>
                        Rewards accrue into the value of stkATOM which increases
                        after every reward epoch. Users start earning rewards
                        from the end of the first day after staking.
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                  <Card>
                    <Card.Header>
                      <p>Does pSTAKE charge for the service?</p>
                      <ContextAwareToggle eventKey="4">
                        Click me!
                      </ContextAwareToggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="4">
                      <Card.Body>
                        See the rewards section for further details. pSTAKE
                        charges 5% on liquid staking rewards, where 95% goes to
                        stkATOM holders and 5% goes to the protocol. In order to
                        pay for transaction fees, users may need to hold a small
                        amount of XPRT on the Persistence chain.
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                  <Card>
                    <Card.Header>
                      <p>How is my stake distributed to validators?</p>
                      <ContextAwareToggle eventKey="5">
                        Click me!
                      </ContextAwareToggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="5">
                      <Card.Body>
                        See the Validator Delegation Strategy section for
                        further details. Your stake is distributed equally to
                        all validators in our set. Validators in the set are
                        chosen in order to optimise uptime, low commission
                        rates, high governance participation, and low instances
                        of slashing.
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                  <Card>
                    <Card.Header>
                      <p>
                        I’m holding ERC-20 stkATOM. How do I migrate to the new
                        stkATOM on Cosmos?{" "}
                      </p>
                      <ContextAwareToggle eventKey="6">
                        Click me!
                      </ContextAwareToggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="6">
                      <Card.Body>
                        See the Migration Tool section for more information. We
                        have compiled a user guide for the migration, and the
                        tool itself will also guide you through the process.
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
  );
};
export default Faq;
