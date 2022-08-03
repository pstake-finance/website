import React from 'react';
import peckshield from '../../assets/audits/peckshield.svg';
import halborn from '../../assets/audits/halborn.svg';
import certora from '../../assets/audits/certora.svg';
import {
    PSTAKE_AUDITS_URL,
    PSTAKE_DILIGENCE_AUDIT
     } from '../../constants/config';

const Audited = () => {
    return (
        <React.Fragment>
            <section className="audited-section">
                <div className="container">
                        <h3 className="section-title">Security Audits</h3>
                        <p className="section-sub-title">pSTAKE’s stkBNB implementation has been audited by the industry’s best in blockchain security</p>
                        <div className="audited-list">
                            <a href={PSTAKE_DILIGENCE_AUDIT} target="_blank" rel="noopener noreferrer"><img className="" src={peckshield} title="peckshield" alt="peckshield" /></a>

                            <a href={PSTAKE_AUDITS_URL} target="_blank" rel="noopener noreferrer"><img className="" src={halborn} title="halborn" alt="halborn" /></a>
                            
                            <a href={PSTAKE_AUDITS_URL} target="_blank" rel="noopener noreferrer"><img className="" src={certora} title="certora" alt="certora" /></a>
                        </div>
                </div>
            </section>
        </React.Fragment >
    );
}


export default Audited;