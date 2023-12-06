import React, { useContext } from "react";

import Icon from "../../molecules/Icon";
import Accordion from "../../atoms/accordion/Accordion";

const accordionItems = [
  {
    title:
      "How will pSTAKE distribute my OSMO stake amongst the Osmosis validators?",
    content:
      "pSTAKE follows a new and decentralised automated stake delegation strategy that will distribute your OSMO stake evenly with 75 validators. These validators are selected automatically based on parameters such as voting power, commission, uptime, governance participation, and part of the active set without any slashing instance. \n",
  },
  {
    title: "Why do I get less OSMO for my OSMO?",
    content:
      "stkOSMO follows an exchange rate model (also known as the cToken Model), which results in stkOSMO increasing in value against OSMO as the protocol accrues staking rewards. Thus, 1 stkATOM is worth more after each reward epoch or 24 hours. Liquid stakers are given stkOSMO tokens at the prevailing exchange rate at the moment they stake.",
  },
  {
    title: "What is the unbonding period for stkOSMO?",
    content:
      "Usually, the onbonding process of staked OSMO is 14 days. If regularly unstaked, users can get the underlying OSMO back for stkOSMO in ~14 days. Interestingly, pSTAKE provides a unique ‘Flash Unstake’ feature, which allows for instant unbonding if the daily deposits match withdrawal requests.",
  },
  {
    title: "Does pSTAKE charge any fees for liquid staking OSMO?",
    content:
      "Yes, pSTAKE charges a 10% protocol fee solely on auto-compounded staking rewards. No additional fees are applied for standard staking or unstaking operations. Please also note that for the ‘flash unstake’ feature, a nominal xx% fee is charged to offer instant redemptions.",
  },
  {
    title: "Where is stkOSMO minted?",
    content: (
      <div>
        stkOSMO is minted on the Persistence Core-1 chain. It follows a similar
        implementation and technical architecture to stkATOM on the Persistence
        chain. Learn more about it &nbsp;
        <a
          href="https://docs.pstake.finance/stkATOM_Technical_Architecture/"
          target="_blank"
          rel="noopener noreferrer"
          className={"underline"}
        >
          here
        </a>
      </div>
    ),
  },
  {
    title:
      "How is OSMO liquid staking on pSTAKE different from other Liquid Staking Providers (LSPs)?",
    content:
      "stkOSMO differentiates itself through decentralization, alignment, and innovation. With pSTAKE’s new automated stake decentralisation strategy, it decentralizes the Osmosis network by distributing stake between 75 validators while maintaining constant liquid staking alignment with Osmosis chain. Additionally, pSTAKE aims to establish deep stkOSMO liquidity in the Osmosis ecosystem. Innovating Osmosis LSTfi, pSTAKE introduces a unique 'Flash Unstake' feature, enabling instant redemption.",
  },
];

const Faq = () => {
  return (
    <>
      <div id="stkAtomFaqs" className="bg-[#140F34]">
        <div className="sectionContainer py-[65px] md:py-[35px]">
          <h1 className="sectionTitle mb-8">FAQs about OSMO Liquid Staking</h1>
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
