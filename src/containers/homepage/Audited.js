import React from 'react';
import auditedone from '../../assets/audits/peckshield_black.svg';
import auditDiligence from '../../assets/diligence_black.svg';
import comingsoon from '../../assets/comingsoon.svg';
import auditedtwo from "../../assets/solidified_black.svg";

import {
    PSTAKE_AUDITS_URL,
    PSTAKE_DILIGENCE_AUDIT
     } from '../../constants/config';

const Audited = () => {
    return (
        <React.Fragment>
            <section className="stake-section audited">
                <div className="container">
                    <div className="row">
                        <h3 className="section-title">Yes! We Are Audited</h3>
                        <div className="audited-list">
                            <a href={PSTAKE_DILIGENCE_AUDIT} target="_blank" rel="noopener noreferrer"><img className="" src={auditDiligence} title="Diligence" alt="Diligence" /></a>

                            <a href={PSTAKE_AUDITS_URL} target="_blank" rel="noopener noreferrer"><img className="" src={auditedtwo} title="Solidified" alt="Solidified" /></a>
                            
                            <a href={PSTAKE_AUDITS_URL} target="_blank" rel="noopener noreferrer"><img className="" src={auditedone} title="Solidified" alt="Solidified" /></a>
                            <img className="" src={comingsoon} title="ComingSoon" alt="ComingSoon" />
                        </div>


                    </div>
                </div>
            </section>
        </React.Fragment >
    );
}


export default Audited;