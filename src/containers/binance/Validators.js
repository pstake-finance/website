import React from 'react';
import { useTranslation } from "react-i18next";
import stakefish from '../../assets/validators/stakefish_plane.svg';
import figment from '../../assets/validators/figment_plane.svg';
import everstake from '../../assets/validators/everstake_plane.svg';
import chorus from '../../assets/validators/chorus_plane.svg';
import cosmostation from '../../assets/validators/cosmostation_plane.svg';
import audit from '../../assets/validators/audit_plane.svg';

import {
    STAKEFISH,
    FIGMENT,
    EVERSTAKE,
    CHORUS,
    COSMOSTATION, AUDIT
} from '../../constants/config';

const Validators = () => {
    const { t } = useTranslation();
    return (
        <React.Fragment>
            <section className="validators-section">
                <div className="container">
                    <h3 className="section-title">{t("VALIDATORS")}</h3>
                    <p className="section-sub-title">Explore BNB validators that help pSTAKE grow</p>
                    <div className="validator-list">
                        <a href={STAKEFISH} target="_blank" rel="noopener noreferrer"><img className="" src={stakefish} title="Stakefish" alt="Stakefish" /></a>
                        <a href={FIGMENT} target="_blank" rel="noopener noreferrer"><img className="" src={figment} title="Figment" alt="Figment" /></a>
                        <a href={EVERSTAKE} target="_blank" rel="noopener noreferrer"><img className="" src={everstake} title="Everstake" alt="Everstake" /></a>
                        <a href={AUDIT} target="_blank" rel="noopener noreferrer"><img className="" src={audit} title="audit" alt="audit" /></a>
                        <a href={CHORUS} target="_blank" rel="noopener noreferrer"><img className="" src={chorus} title="Chorus" alt="Chorus" /></a>
                        <a href={COSMOSTATION} target="_blank" rel="noopener noreferrer"><img className="" src={cosmostation} title="Cosmostation" alt="Cosmostation" /></a>
                    </div>
                </div>

            </section>
        </React.Fragment >
    );
}


export default Validators;