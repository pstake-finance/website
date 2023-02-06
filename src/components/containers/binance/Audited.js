import React from "react";

import {
  HALBOR_AUDIT_REPORT,
  PECKSHIELD_AUDIT_REPORT,
  PSTAKE_CERTORA,
} from "../../../constants/config";

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
    <div className="aos-init aos-animate bg-black-high">
      <div className="sectionContainer py-[65px] md:py-[35px]">
        <h3 className="sectionTitle mb-4">stkBNB Security Partners</h3>
        <p className="sectionSubTitle max-w-[500px] mx-auto mb-4">
          pSTAKE’s stkBNB implementation is stress tested by the industry’s best
          in blockchain security
        </p>
        <div className="flex text-center justify-center items-center flex-wrap">
          {auditList.slice(0, 4).map((item, index) => (
            <a
              href={item.link}
              target="_blank"
              className="my-4 mx-4"
              rel="noopener noreferrer"
              key={index}
            >
              <img
                src={`/images/audits/${item.image}.svg`}
                title="item.link"
                className="w-[240px] bg-[#25252b] rounded-lg"
                alt={item.image}
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Audited;
