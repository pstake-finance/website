import React from "react";
import Accordion from "../../atoms/accordion/Accordion";

const Faq = () => {
  const accordionItems = [
    {
      title: "What is stkBNB?",
      content:
        "stkBNB is the underlying representative token\n" +
        "                        (liquid-staked version) of BNB, which is minted when\n" +
        "                        staking BNB on pSTAKE.",
    },
    {
      title:
        "What is the minimum and maximum amount of BNB I can\n" +
        "                        stake?",
      content:
        "There is no minimum or maximum limit to the amount of\n" +
        "                        BNB a user can stake. pSTAKE allows users to stake any\n" +
        "                        non-zero amount of BNB on our platform. Please ensure\n" +
        "                        you leave enough BNB in your wallet to pay for any\n" +
        "                        associated gas fees.",
    },
    {
      title: "Why do I get less stkBNB for my 1 BNB?",
      content:
        "stkBNB follows an exchange rate model (Compound’s cToken\n" +
        "                        model) which increases in value as the protocol accrues\n" +
        "                        staking rewards. Thus, 1 stkBNB is worth more after each\n" +
        "                        reward epoch (24 hours). Users are minted stkBNB tokens\n" +
        "                        at the ongoing exchange rate.",
    },
    {
      title: "How do I receive rewards?",
      content:
        "Rewards accrue into the value of stkBNB which rises\n" +
        "                        after every epoch (UTC 00:00 hrs).  Users start earning\n" +
        "                        rewards from the first epoch after staking.",
    },
    {
      title: "Does pSTAKE charge for the service?",
      content:
        " pSTAKE will charge 0% fees for BNB Liquid Staking until\n" +
        "                        November 2022. This fee can be updated in the future\n" +
        "                        through pSTAKE Governance.",
    },
    {
      title:
        "What determines the amount of reward I receive after\n" +
        "                        every epoch?",
      content:
        "Staking rewards mainly come from the transaction fees\n" +
        "                        paid by users of the BSC chain and thus vary according\n" +
        "                        to the network activity. pSTAKE uses a validator scoring\n" +
        "                        mechanism based on APR, uptime, and number of slashing\n" +
        "                        instances to delegate to the top validators on the BNB\n" +
        "                        chain.",
    },
    {
      title:
        " Is there any risk from staking, like slashing or any\n" +
        "                        penalties?",
      content:
        "Stakers do not directly face slashing risk as validators\n" +
        "                        are slashed from their self-staked BNB. Stakers do face\n" +
        "                        the risk of missing out on staking rewards if any of the\n" +
        "                        validators in pSTAKE’s validator set is jailed or is\n" +
        "                        offline. The loss of rewards is distributed across all\n" +
        "                        the stkBNB stakers on pSTAKE. pSTAKE stakes only with\n" +
        "                        the top validators on the BNB chain and will implement\n" +
        "                        an onchain validator scoring mechanism to minimise such\n" +
        "                        incidences.",
    },
  ];
  return (
    <div className="aos-init aos-animate bg-black-high" data-aos="fade-up">
      <div className="sectionContainer py-[65px] md:py-[35px]">
        <h1 className="sectionTitle mb-8">FAQs</h1>
        <div className="max-w-[700px] mx-auto">
          <div className="info">
            <Accordion items={accordionItems} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Faq;
