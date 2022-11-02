import React from "react";
import persistence from "../../assets/audits/persistence.svg";
import halborn from "../../assets/audits/halborn_black.svg";
import certora from "../../assets/audits/certora_black.svg";
import immunefi from "../../assets/audits/immunefi.svg";
import forta from "../../assets/audits/forta.svg";

import {
  FORTA_WEB_URL,
  HALBOR_AUDIT_REPORT,
  IMMUNEFI_WEB_URL,
  PERSISTENCE_ONE_URL,
  PECKSHIELD_AUDIT_REPORT,
  PSTAKE_CERTORA
} from "../../constants/config";

const Audited = () => {
  return (
    <React.Fragment>
      <section className="audited-section">
        <div className="container">
          <h3 className="section-title">stkATOM Security Partners</h3>
          <p className="section-sub-title">
            pSTAKE’s stkATOM implementation is stress tested by the industry’s
            best in blockchain security
          </p>
          <div className="audited-list">
            <div className="list">
              <p className="type">AUDITS</p>

              <a
                href={HALBOR_AUDIT_REPORT}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img className="" src={halborn} title="halborn" alt="halborn" />
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
                    src={immunefi}
                    title="immunefi"
                    alt="immunefi"
                  />
                </a>
              </div>
              <div className="on-chain">
                <p className="type">ON-CHAIN TRACKING</p>
                <a
                  href={PERSISTENCE_ONE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className="p-4"
                    src={persistence}
                    title="persistence"
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
