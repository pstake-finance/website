import React from "react";

import {
  FORTA_WEB_URL,
  HALBOR_AUDIT_REPORT,
  IMMUNEFI_WEB_URL,
  PECKSHIELD_AUDIT_REPORT,
  PSTAKE_CERTORA,
} from "../../../utils/config";

const Audited = () => {
  const auditList = [
    {
      link: PECKSHIELD_AUDIT_REPORT,
      image: "peckshield_black",
    },
    {
      link: HALBOR_AUDIT_REPORT,
      image: "halborn_black",
    },
    {
      link: PSTAKE_CERTORA,
      image: "certora_black",
    },
  ];

  return (
    <div className="bg-black-high aos-init aos-animate" data-aos="fade-up">
      <div className="sectionContainer py-[65px] md:py-[35px]">
        <h3 className="sectionTitle mb-4">stkBNB Security Partners</h3>
        <p className="sectionSubTitle max-w-[500px] mx-auto mb-4">
          pSTAKE’s stkBNB implementation is stress tested by the industry’s best
          in blockchain security
        </p>
        <div className="flex text-center justify-center items-center flex-wrap mb-4">
          {auditList.slice(0, 4).map((item, index) => (
            <a
              href={item.link}
              target="_blank"
              className="m-4 sm:m-2"
              rel="noopener noreferrer"
              key={index}
            >
              <img
                src={`/images/audits/${item.image}.svg`}
                title="item.link"
                className="w-[240px] sm:w-[160px] md:w-[200px] bg-[#25252a] rounded-lg"
                alt={item.image}
              />
            </a>
          ))}
        </div>
        <div className="flex justify-center">
          <div className="bug-bounty my-4 mx-4">
            <p className="text-light-emphasis sm:text-sm text-center mb-3">
              BUG-BOUNTY
            </p>
            <a
              href={IMMUNEFI_WEB_URL}
              target="_blank"
              className="m-4 sm:m-2"
              rel="noopener noreferrer"
            >
              <img
                src={`/images/audits/immunefi.svg`}
                title="immunefi"
                className="w-[240px] sm:w-[160px] md:w-[200px] bg-[#25252a] rounded-lg"
                alt="immunefi"
              />
            </a>
          </div>
          <div className="on-chain my-4 mx-4">
            <p className="text-light-emphasis sm:text-sm text-center mb-3">
              ON-CHAIN TRACKING
            </p>
            <a
              href={FORTA_WEB_URL}
              target="_blank"
              className="m-4 sm:m-2"
              rel="noopener noreferrer"
            >
              <img
                src={`/images/audits/forta.svg`}
                className="w-[240px] sm:w-[160px] md:w-[200px] bg-[#25252a] rounded-lg"
                title="forta"
                alt="forta"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Audited;
