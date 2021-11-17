import React from 'react';
import { useTranslation } from "react-i18next";
import tokenomics from '../../assets/tokenomics.png';
import incentization from '../../assets/incentization.png';


const Tokenomics = () => {
    const { t } = useTranslation();
    return (
        <React.Fragment>
            <section className="tokenomics">
                <div className="container">
                   
                        <h3 className="section-title">{t("TOKENOMICS")}</h3>
                        <div className="inner-incentive">
                            <img className="mb-5 img-width" src={tokenomics} alt="tokenomics" />
                            <img className="mt-5 " src={incentization} alt="incentization"/>
                        </div>
                    </div>
               
            </section>
        </React.Fragment >
    );
}


export default Tokenomics;