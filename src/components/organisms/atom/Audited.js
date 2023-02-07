import React from "react";

import { STKATOM_HALBOR_AUDIT_REPORT } from "../../../utils/config";

const Audited = () => {
  const auditList = [
    {
      link: STKATOM_HALBOR_AUDIT_REPORT,
      image: "halborn_black",
    },
  ];
  return (
    <div className="bg-black-high aos-init aos-animate" data-aos="fade-up">
      <div className="sectionContainer py-[65px] md:py-[35px]">
        <h3 className="sectionTitle mb-4">stkATOM Security Partners</h3>
        <p className="sectionSubTitle max-w-[500px] mx-auto mb-4">
          pSTAKE’s stkATOM implementation is stress tested by the industry’s
          best in blockchain security
        </p>
        <div className="flex text-center justify-center items-center flex-wrap">
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
                className="w-[240px] sm:w-[160px] md:w-[200px] rounded-lg"
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
