import React, { useContext } from "react";

import Icon from "../../molecules/Icon";
import Accordion from "../../atoms/accordion/Accordion";

const accordionItems = [
  {
    title: "How much is my stkATOM worth?",
    content:
      "The value of 1 stkATOM goes on increasing as it accrues\n" +
      "                        staking rewards over time. This is because stkATOM\n" +
      "                        follows a cToken model whose value changes based on the\n" +
      "                        amount of underlying ATOM. Users staking/unstaking on\n" +
      "                        the pSTAKE protocol are charged the ongoing rate which\n" +
      "                        is displayed on the app UI.",
  },
  {
    title: "Why do I get less stkATOM for my ATOM?",
    content:
      "stkATOM follows an exchange rate model (also known as\n" +
      "                      the cToken Model) which results in stkATOM increasing in\n" +
      "                      value against ATOM as the protocol accrues staking\n" +
      "                      rewards. Thus, 1 stkATOM is worth more after each reward\n" +
      "                      epoch, or 24 hours. Liquid stakers are given stkATOM\n" +
      "                      tokens at the prevailing exchange rate at the moment\n" +
      "                      they stake.",
  },
  {
    title: "What is the unbonding period for stkATOM?",
    content:
      "Users can claim ATOM from the pSTAKE protocol 21 days\n" +
      "                      after the unstaking transaction. To avoid waiting for 21\n" +
      "                      days, try using the Instant Redeem option on the unstaking\n" +
      "                      page!",
  },
  {
    title: "How do I receive rewards?",
    content:
      "Rewards accrue into the value of stkATOM which increases\n" +
      "                      after every reward epoch. Users start earning rewards from\n" +
      "                      the end of the first day after staking.",
  },
  {
    title: "Does pSTAKE charge for the service?",
    content:
      "See the rewards section for further details. pSTAKE\n" +
      "                      charges 5% on liquid staking rewards, where 95% goes to\n" +
      "                      stkATOM holders and 5% goes to the protocol. In order to\n" +
      "                      pay for transaction fees, users may need to hold a small\n" +
      "                      amount of XPRT on the Persistence chain.",
  },
  {
    title: "How is my stake distributed to validators?",
    content:
      "See the Validator Delegation Strategy section for further\n" +
      "                      details. Your stake is distributed equally to all\n" +
      "                      validators in our set. Validators in the set are chosen in\n" +
      "                      order to optimise uptime, low commission rates, high\n" +
      "                      governance participation, and low instances of slashing.",
  },
  {
    title:
      "I’m holding ERC-20 stkATOM. How do I migrate to the new\n" +
      "                      stkATOM on Cosmos?",
    content:
      "See the Migration Tool section for more information. We\n" +
      "                      have compiled a user guide for the migration, and the tool\n" +
      "                      itself will also guide you through the process.",
  },
];

const Faq = () => {
  return (
    <>
      <div
        id="stkAtomFaqs"
        className="aos-init aos-animate bg-black-high"
        data-aos="fade-up"
      >
        <div className="sectionContainer py-[65px] md:py-[35px]">
          <h1 className="sectionTitle mb-8">FAQs about ATOM Liquid Staking</h1>
          <div className="max-w-[700px] mx-auto">
            <div className="info">
              <Accordion items={accordionItems} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Faq;
