import React from 'react';
import peckshield from '../../assets/audits/peckshield.svg';
import halborn from '../../assets/audits/halborn.svg';
import certora from '../../assets/audits/certora.svg';
import immunefi from '../../assets/audits/immunefi.svg';
import forta from '../../assets/audits/forta.svg';

import {
    PSTAKE_AUDITS_URL,
    PSTAKE_DILIGENCE_AUDIT
     } from '../../constants/config';

const Audited = () => {
    return (
        <React.Fragment>
            <section className="audited-section">
                <div className="container">
                        <h3 className="section-title">stkBNB security partners</h3>
                        <p className="section-sub-title">pSTAKE’s stkBNB implementation is stress tested by the industry’s best in blockchain security</p>
                        <div className="audited-list">
                          <div className="list">
                              <p className="type">AUDITS</p>
                              <a href={PSTAKE_DILIGENCE_AUDIT} target="_blank" rel="noopener noreferrer"><img className="" src={peckshield} title="peckshield" alt="peckshield" /></a>

                              <a href={PSTAKE_AUDITS_URL} target="_blank" rel="noopener noreferrer"><img className="" src={halborn} title="halborn" alt="halborn" /></a>

                              <a href={PSTAKE_AUDITS_URL} target="_blank" rel="noopener noreferrer"><img className="" src={certora} title="certora" alt="certora" /></a>
                          </div>
                            <div className="tracking">
                                <div>
                                    <p className="type">ON-CHAIN TRACKING</p>
                                    <a href={PSTAKE_AUDITS_URL} target="_blank" rel="noopener noreferrer"><img className="" src={forta} title="forta" alt="forta" /></a>
                                </div>
                                <div>
                                    <p className="type">BUG-BOUNTY PROGRAMS</p>
                                    <a href={PSTAKE_AUDITS_URL} target="_blank" rel="noopener noreferrer"><img className="" src={immunefi} title="immunefi" alt="immunefi" /></a>
                                </div>
                            </div>
                        </div>

                </div>
            </section>
        </React.Fragment >
    );
}


export default Audited;