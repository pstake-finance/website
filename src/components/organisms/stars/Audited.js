import React from "react";

import {
  STKATOM_HALBOR_AUDIT_REPORT,
  STKATOM_OAK_AUDIT_REPORT,
} from "../../../utils/config";

const Audited = () => {
  const auditList = [
    {
      link: STKATOM_HALBOR_AUDIT_REPORT,
      image: "halborn",
    },
    {
      link: STKATOM_OAK_AUDIT_REPORT,
      image: "oak_white",
    },
    {
      link: STKATOM_OAK_AUDIT_REPORT,
      image: "immunefi_white",
    },
  ];
  return (
    <div className="bg-[#1C1C28]">
      <div className="sectionContainer py-[65px] md:py-[35px]">
        <h3 className="sectionTitle mb-8">stkDYDX Security Partners</h3>
        <div className="flex text-center justify-center items-center flex-wrap">
          {auditList.slice(0, 4).map((item, index) => (
            <div className="m-4 sm:m-2 w-[215px] h-[76px]" key={index}>
              <img
                src={`/images/audits/${item.image}.svg`}
                title="item.link"
                className="w-full h-full p-[20px] bg-[#36364F] rounded-lg"
                alt={item.image}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Audited;
