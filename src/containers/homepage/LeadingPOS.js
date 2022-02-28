import React from 'react';
import cosmospos from '../../assets/pos/cosmospos.svg';
import ethpos from '../../assets/pos/ethpos.svg';
import { useTranslation } from "react-i18next";
import polkadotpos from '../../assets/pos/polkadotpos.svg';
import solanapos from '../../assets/pos/solanapos.svg';
const LeadingPOS = () => {
    const { t } = useTranslation();
    return (
        <React.Fragment>
            <section className="pos-section aos-init aos-animate">
                <div className="container">
                <h3 className="info-banner-heading ">{t("ECOSYSTEM_TITLE")} <span>{t("MARKET_CAPS")}</span></h3>
                <p className="text-center mt-2">{t("PSTAKE_TOTAL_ADDRESSABLE")}</p>

                   <div className="row">
                        <div className="pos-cards">
                            <img src={cosmospos} alt="cosmos" title="Cosmos" />
                            <div className="asideposcount">
                                <h4>{t("$68B+")}</h4>
                                <p>{t("COSMOS")}</p>
                            </div>
                        </div>
                        <div className="pos-cards">
                            <img src={ethpos} alt="cosmos" title="ETH" />
                            <div className="asideposcount">
                                <h4>{t("$508B+")}</h4>
                                <p>{t("ETHEREUM")}</p>
                            </div>
                        </div>
                        <div className="pos-cards">
                            <img src={polkadotpos} alt="cosmos" title="Polkadot" />
                            <div className="asideposcount">
                                <h4>{t("$30B+")}</h4>
                                <p>{t("POLKADOT")}</p>
                            </div>
                        </div>
                        <div className="pos-cards">
                            <img src={solanapos} alt="cosmos" title="Solana" />
                            <div className="asideposcount">
                                <h4>{t("$57B+")}</h4>
                                <p>{t("SOLANA")}</p>
                            </div>
                        </div>
                       
                    </div>
                  
                   
                </div>

            </section>
        </React.Fragment >
    );
}


export default LeadingPOS;