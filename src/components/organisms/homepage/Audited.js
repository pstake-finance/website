import React from "react";
import {
  HALBOR_AUDIT_REPORT,
  PSTAKE_CERTORA,
  PSTAKE_DILIGENCE_AUDIT,
  PSTAKE_OAK_AUDIT,
  PSTAKE_PECKSHIELD_AUDIT,
  PSTAKE_SOLIDFIED_AUDIT,
  PSTAKE_TRAIL_OF_BITS,
} from "../../../utils/config";
import { useTranslation } from "next-export-i18n";

const auditList = [
  {
    link: HALBOR_AUDIT_REPORT,
    image: "halborn_black",
  },
  {
    link: PSTAKE_TRAIL_OF_BITS,
    image: "trail_of_bits",
  },
  {
    link: PSTAKE_DILIGENCE_AUDIT,
    image: "diligence",
  },
  {
    link: PSTAKE_SOLIDFIED_AUDIT,
    image: "solidified",
  },
  {
    link: PSTAKE_PECKSHIELD_AUDIT,
    image: "peckshield",
  },
  {
    link: PSTAKE_OAK_AUDIT,
    image: "aok",
  },
  {
    link: PSTAKE_CERTORA,
    image: "certora_black",
  },
];
const Audited = () => {
  const { t } = useTranslation("common");
  return (
    <div className="aos-init aos-animate bg-black-high" data-aos="fade-up">
      <div className="sectionContainer py-[65px] md:py-[35px]">
        <h4 className="sectionTitle">{t("Security Audits")}</h4>
        <p className="sectionSubTitle mb-8 max-w-[700px] mx-auto">
          pSTAKE’s liquid staking solution has been, and continues to be,
          audited by the industry’s best in blockchain security
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
        <div className="flex text-center justify-center items-center flex-wrap">
          {auditList.slice(4, auditList.length).map((item, index) => (
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
                alt={item.image}
                className="w-[240px] sm:w-[160px] md:w-[200px] rounded-lg"
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Audited;
