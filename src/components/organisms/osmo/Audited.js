import React from "react";

import {
  STKATOM_HALBOR_AUDIT_REPORT,
  STKATOM_OAK_AUDIT_REPORT,
} from "../../../utils/config";

const Audited = () => {
  const auditList = [
    {
      link: STKATOM_HALBOR_AUDIT_REPORT,
      image: "halborn_blue",
    },
    {
      link: STKATOM_OAK_AUDIT_REPORT,
      image: "oak_blue",
    },
    {
      link: STKATOM_OAK_AUDIT_REPORT,
      image: "immunefi_blue",
    },
  ];
  return (
    <div className="bg-[#140F34]">
      <div className="sectionContainer py-[65px] md:py-[35px]">
        <h3 className="sectionTitle mb-8">stkOSMO Security Partners</h3>
        <div className="flex text-center justify-center items-center flex-wrap">
          {auditList.slice(0, 4).map((item, index) => (
            <p className="m-4 sm:m-2" key={index}>
              <img
                src={`/images/audits/${item.image}.svg`}
                title="item.link"
                className="w-[240px] sm:w-[160px] md:w-[200px] bg-[#25252a] rounded-lg"
                alt={item.image}
              />
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Audited;
