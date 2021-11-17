import React from 'react';
import { useTranslation } from "react-i18next";
import stakefish from '../../assets/validators/stakefish.png';
import figment from '../../assets/validators/figment.png';
import everstake from '../../assets/validators/everstake.png';
import chorus from '../../assets/validators/chorus.png';
import cosmostation from '../../assets/validators/cosmostation.png';

import {
    PSTAKE_AUDITS_URL
     } from '../../constants/config';

const Validators = () => {
    const { t } = useTranslation();
    return (
        <React.Fragment>
            <section className="investors validators">
                <div className="container">
                   
                        <h3 className="section-title">{t("VALIDATORS")}</h3>
                        <div className="investor-list">
                            <a href={PSTAKE_AUDITS_URL} target="_blank" rel="noopener noreferrer"><img className="" src={stakefish} title="Stakefish" alt="Stakefish" /></a>    
                            <a href={PSTAKE_AUDITS_URL} target="_blank" rel="noopener noreferrer"><img className="" src={figment} title="Figment" alt="Figment" /></a>
                            <a href={PSTAKE_AUDITS_URL} target="_blank" rel="noopener noreferrer"><img className="" src={everstake} title="Everstake" alt="Everstake" /></a>
                            <a href={PSTAKE_AUDITS_URL} target="_blank" rel="noopener noreferrer"><img className="" src={chorus} title="Chorus" alt="Chorus" /></a>
                            <a href={PSTAKE_AUDITS_URL} target="_blank" rel="noopener noreferrer"><img className="" src={cosmostation} title="Cosmostation" alt="Cosmostation" /></a>
                        </div>
                    </div>
               
            </section>
        </React.Fragment >
    );
}


export default Validators;