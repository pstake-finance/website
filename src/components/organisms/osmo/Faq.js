import React, { useContext } from "react";

import Icon from "../../molecules/Icon";
import Accordion from "../../atoms/accordion/Accordion";

const accordionItems = [
  {
    title:
      "Why am I ineligible to liquid stake my natively staked ATOM with pSTAKE?",
    content:
      "A user will be ineligible to liquid stake their staked ATOM with pSTAKE if the validator is not part of pSTAKE’s validator set of 62 validators or it’s jailed.\n",
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
