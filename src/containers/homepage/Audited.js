import React from 'react';
import auditedone from '../../assets/auditedone.png';
import auditedtwo from '../../assets/auditedtwo.png';
import comingsoon from '../../assets/comingsoon.png';
import {
    PSTAKE_AUDITS_URL
     } from '../../constants/config';

const Audited = () => {
    return (
        <React.Fragment>
            <section className="stake-section audited">
                <div className="container">
                    <div className="row">
                        <h3 className="section-title">Yes! We Are Audited</h3>
                        <div className="audited-list">
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