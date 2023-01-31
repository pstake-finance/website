import React from "react";
import {
  HALBOR_AUDIT_REPORT,
  PSTAKE_CERTORA,
  PSTAKE_DILIGENCE_AUDIT,
  PSTAKE_OAK_AUDIT,
  PSTAKE_PECKSHIELD_AUDIT,
  PSTAKE_SOLIDFIED_AUDIT,
  PSTAKE_TRAIL_OF_BITS,
} from "../../constants/config";
import useTranslation from "next-translate/useTranslation";

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
    <React.Fragment>
      <section className="aos-init aos-animate bg-black-high">
        <div className="sectionContainer py-[100px]">
          <h4 className="sectionTitle">{t("Security Audits")}</h4>
          <p className="sectionSubTitle mb-8">
            pSTAKE’s liquid staking solution has been, and continues to be,
            audited by the industry’s best in blockchain security
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
                  className="w-[240px]"
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
                className="tile"
                rel="noopener noreferrer"
                key={index}
              >
                <img
                  src={`/images/audits/${item.image}.svg`}
                  title="item.link"
                  alt={item.image}
                  className="w-[240px] m-4"
                />
              </a>
            ))}
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Audited;
