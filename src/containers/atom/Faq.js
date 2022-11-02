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
                      <p>What is stkATOM?</p>
                      <ContextAwareToggle eventKey="0">
                        Click me!
                      </ContextAwareToggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                      <Card.Body>
                        Unlock the full potential of ATOM by simultaneously
                        contributing to Cosmos hub’s security, earning staking
                        rewards, and participating in DeFi.
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                  <Card>
                    <Card.Header>
                      <p>
                        What is the minimum and maximum amount of ATOM I can
                        stake?
                      </p>
                      <ContextAwareToggle eventKey="0">
                        Click me!
                      </ContextAwareToggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                      <Card.Body>
                        Unlock the full potential of ATOM by simultaneously
                        contributing to Cosmos hub’s security, earning staking
                        rewards, and participating in DeFi.
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                  <Card>
                    <Card.Header>
                      <p>Why do I get less STKATOM for my 1 ATOM?</p>
                      <ContextAwareToggle eventKey="0">
                        Click me!
                      </ContextAwareToggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                      <Card.Body>
                        Unlock the full potential of ATOM by simultaneously
                        contributing to Cosmos hub’s security, earning staking
                        rewards, and participating in DeFi.
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                  <Card>
                    <Card.Header>
                      <p>How do I receive rewards?</p>
                      <ContextAwareToggle eventKey="0">
                        Click me!
                      </ContextAwareToggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                      <Card.Body>
                        Unlock the full potential of ATOM by simultaneously
                        contributing to Cosmos hub’s security, earning staking
                        rewards, and participating in DeFi.
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                  <Card>
                    <Card.Header>
                      <p>Does pSTAKE charge for the service?</p>
                      <ContextAwareToggle eventKey="0">
                        Click me!
                      </ContextAwareToggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                      <Card.Body>
                        Unlock the full potential of ATOM by simultaneously
                        contributing to Cosmos hub’s security, earning staking
                        rewards, and participating in DeFi.
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                  <Card>
                    <Card.Header>
                      <p>
                        What determines the amount of reward I receive after
                        every epoch?
                      </p>
                      <ContextAwareToggle eventKey="0">
                        Click me!
                      </ContextAwareToggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                      <Card.Body>
                        Unlock the full potential of ATOM by simultaneously
                        contributing to Cosmos hub’s security, earning staking
                        rewards, and participating in DeFi.
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
