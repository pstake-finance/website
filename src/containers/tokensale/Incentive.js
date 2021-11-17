import React from 'react';
import { useTranslation } from "react-i18next";
import incentive from '../../assets/incentive.png';


const Incentive = () => {
    const { t } = useTranslation();
    return (
        <React.Fragment>
            <section className="incentive-alignment">
                <div className="container">
                   
                        <h3 className="section-title">{t("INCENTIVE_ALIGNMENT")}</h3>
                        <div className="inner-incentive">
                            <img src={incentive} alt="inentive" className="img-width" />
                        </div>
                    </div>
               
            </section>
        </React.Fragment >
    );
}


export default Incentive;