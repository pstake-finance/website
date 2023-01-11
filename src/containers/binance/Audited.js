import React from "react";

import {
  FORTA_WEB_URL,
  HALBOR_AUDIT_REPORT,
  IMMUNEFI_WEB_URL,
  PECKSHIELD_AUDIT_REPORT,
  PSTAKE_CERTORA,
} from "../../constants/config";

const Audited = () => {
  return (
    <React.Fragment>
      <section className="audited-section">
        <div className="container">
          <h3 className="section-title">stkBNB Security Partners</h3>
          <p className="section-sub-title">
            pSTAKE’s stkBNB implementation is stress tested by the industry’s
            best in blockchain security
          </p>
          <div className="audited-list">
            <div className="list">
              <p className="type">AUDITS</p>
              <a
                href={PECKSHIELD_AUDIT_REPORT}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className=""
                  src={"/images/audits/peckshield_black.svg"}
                  title="peckshield"
                  alt="peckshield"
                />
              </a>

              <a
                href={HALBOR_AUDIT_REPORT}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className=""
                  src={"/images/audits/halborn_black.svg"}
                  title="halborn"
                  alt="halborn"
                />
              </a>

              <a
                href={PSTAKE_CERTORA}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className=""
                  src={"/images/audits/certora_black.svg"}
                  title="certora"
                  alt="certora"
                />
              </a>
            </div>
            <div className="tracking">
              <div className="bug-bounty">
                <p className="type">BUG-BOUNTY PROGRAM</p>
                <a
                  href={IMMUNEFI_WEB_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className=""
                    src={"/images/audits/immunefi.svg"}
                    title="immunefi"
                    alt="immunefi"
                  />
                </a>
              </div>
              <div className="on-chain">
                <p className="type">ON-CHAIN TRACKING</p>
                <a
                  href={FORTA_WEB_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className=""
                    src={"/images/audits/forta.svg"}
                    title="forta"
                    alt="forta"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Audited;
