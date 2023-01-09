import React from 'react';
import useTranslation from 'next-translate/useTranslation';
import stakefish from '../../assets/validators/stakefish.svg';
import figment from '../../assets/validators/figment.svg';
import everstake from '../../assets/validators/everstake.svg';
import chorus from '../../assets/validators/chorus.svg';
import cosmostation from '../../assets/validators/cosmostation.svg';

import {
    STAKEFISH,
    FIGMENT,
    EVERSTAKE,
    CHORUS,
    COSMOSTATION
} from '../../constants/config';

const Validators = () => {
    const { t } = useTranslation('common');
    return (
        <React.Fragment>
            <section className="investors validators">
                <div className="container">

                    <h3 className="section-title">{t("VALIDATORS")}</h3>
                    <div className="investor-list">
                        <a href={STAKEFISH} target="_blank" rel="noopener noreferrer"><img className="" src={stakefish} title="Stakefish" alt="Stakefish" /></a>
                        <a href={FIGMENT} target="_blank" rel="noopener noreferrer"><img className="" src={figment} title="Figment" alt="Figment" /></a>
                        <a href={EVERSTAKE} target="_blank" rel="noopener noreferrer"><img className="" src={everstake} title="Everstake" alt="Everstake" /></a>
                        <a href={CHORUS} target="_blank" rel="noopener noreferrer"><img className="" src={chorus} title="Chorus" alt="Chorus" /></a>
                        <a href={COSMOSTATION} target="_blank" rel="noopener noreferrer"><img className="" src={cosmostation} title="Cosmostation" alt="Cosmostation" /></a>
                    </div>
                </div>

            </section>
        </React.Fragment >
    );
}


export default Validators;