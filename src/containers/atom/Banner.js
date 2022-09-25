import React from "react";
import { useTranslation } from "react-i18next";
import stkAtom from "../../assets/stkAtom.svg";
import Icon from "../../components/Icon";
import {STK_ATOM_TWITTER_URL} from "../../constants/config";

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
                                    Liquid Staking for The <br/> Internet of Blockchains
                                </h1>
                                <h6 className="banner-sub-heading">
                                    With <b>stkATOM</b>, enjoy the best of both worlds - earn staking rewards while securing the cosmos hub and participate in DeFi for additional yields.
                                </h6>
                                <div className="banner-buttons">
                                    <a rel="noopener noreferrer" target="_blank" href={STK_ATOM_TWITTER_URL} className="button-link">
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