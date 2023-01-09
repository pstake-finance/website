import React from 'react';
import {
    HALBOR_AUDIT_REPORT,
    PSTAKE_CERTORA,
    PSTAKE_DILIGENCE_AUDIT, PSTAKE_OAK_AUDIT, PSTAKE_PECKSHIELD_AUDIT, PSTAKE_SOLIDFIED_AUDIT, PSTAKE_TRAIL_OF_BITS
} from '../../constants/config';
import halborn_black from "/images/audits/halborn_black.svg";
import trail_of_bits from "/images/audits/trail_of_bits.svg";
import diligence from "/images/audits/diligence.svg";
import solidified from "/images/audits/solidified.svg";
import peckshield from "/images/audits/peckshield.svg";
import aok from "/images/audits/aok.svg";
import certora_black from "/images/audits/certora_black.svg";
import {useTranslation} from "react-i18next";

const Audited = () => {
    const { t } = useTranslation('common');
    return (
        <React.Fragment>
            <section className="audited-section homepage">
                <div className="container">
                    <h4 className="section-title">{t("Security Audits")}</h4>
                    <p className="section-sub-title">pSTAKE’s liquid staking solution has been, and continues to be, audited by the industry’s best in blockchain security</p>
                    <div className="tiles text-center">
                        <a href={HALBOR_AUDIT_REPORT} target="_blank" className="tile" rel="noopener noreferrer">
                            <img src={halborn_black} title="halborn" alt="halborn" />
                        </a>
                        <a href={PSTAKE_TRAIL_OF_BITS} target="_blank" className="tile" rel="noopener noreferrer">
                            <img src={trail_of_bits} title="Trail Of Bits" alt="Trail Of Bits" />
                        </a>
                        <a href={PSTAKE_DILIGENCE_AUDIT} target="_blank" className="tile" rel="noopener noreferrer">
                            <img src={diligence} title="Digilence" alt="Digilence" />
                        </a>
                    </div>
                    <div className="tiles text-center">
                        <a href={PSTAKE_SOLIDFIED_AUDIT} target="_blank" className="tile" rel="noopener noreferrer">
                            <img src={solidified} title="Solidified" alt="Solidified" />
                        </a>
                        <a href={PSTAKE_PECKSHIELD_AUDIT} target="_blank" className="tile" rel="noopener noreferrer">
                            <img className="tile" src={peckshield} title="Peckshield" alt="Peckshield" />
                        </a>
                        <a href={PSTAKE_OAK_AUDIT} target="_blank" className="tile" rel="noopener noreferrer">
                            <img src={aok} title="AOK"  alt="AOK" />
                        </a>
                    </div>
                    <div className="tiles text-center">
                        <a href={PSTAKE_CERTORA} target="_blank" className="tile" rel="noopener noreferrer">
                            <img src={certora_black} title="certora" alt="certora" />
                        </a>
                    </div>
                </div>
            </section>
        </React.Fragment >
    );
}


export default Audited;