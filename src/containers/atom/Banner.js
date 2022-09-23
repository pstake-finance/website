import React from "react";
import { useTranslation } from "react-i18next";
import stkAtom from "../../assets/stkAtom.svg";
import Icon from "../../components/Icon";

const Banner = () => {
    const { t } = useTranslation();
    return (
        <React.Fragment>
            <section className="banner-section aos-init aos-animate">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 col-sm-12 banner-main-section" data-aos="fade-up">
                                <div className="logo">
                                    <img src={stkAtom} alt="stkAtom"/>
                                </div>
                                <h1 className="banner-heading">
                                    stkATOM is Launching <br/> on Persistence Soon
                                </h1>
                                <h6 className="banner-sub-heading">
                                    Enjoy the best of both worlds - Staking and DeFi in the Cosmos network ecosystem. Unlock the full potential of ATOM by simultaneously contributing to Cosmos hub’s security, earning staking rewards, and participating in DeFi.
                                </h6>
                                <div className="banner-buttons">
                                    <a rel="noopener noreferrer" target="_blank" href="/" className="button-link pointer-events-none">
                                        <span className="hideone">{t("LEARN_MORE")} &nbsp;</span>
                                        <Icon viewClass="right-arrow" icon="right-arrow" />
                                    </a>
                                </div>
                            </div>

                        </div>
                    </div>
            </section>
        </React.Fragment >
    );
}


export default Banner;