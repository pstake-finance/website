import React from 'react';
import Footer from "../components/Footer";
import useTranslation from 'next-translate/useTranslation';
import {
    PSTAKE_WEB_URL } from '../constants/config';
const Terms = () => {
    const { t } = useTranslation('common');
    return (
        <React.Fragment>
            <div className="container-fluid p-0 terms-sections">
                <div className="container">
                    <div className="row">
                        <div className="main-banner-section">
                            <h1 className="banner-heading">{t("TERMS_OF_SERVICE_SUBTITLE")}</h1>
                        </div>
                    </div>
                </div>
                <div className="terms-content">
                    <div className="container">
                        <div className="section-1">
                            <p className="update-date">{t("LAST_UPDATED_DATE")}</p>
                            <p className="heading-text">{t("WELCOME_TO_OFFICIAL_WEBSITE")} {PSTAKE_WEB_URL}.
                            {t("WELCOME_TO_OFFICIAL_WEBSITE_SUB")} </p>
                            <p className="sub-heading-text">{t("TERMS_OF_USE")}
                            </p>
                        </div>

                        <div className="general-terms">
                            <h3 className="heading">{t("GENERAL")}</h3>
                            <div className="list">
                                <p>{t("TERMS_ONE")} <a href={PSTAKE_WEB_URL} rel="noopener noreferrer" target="_blank">{PSTAKE_WEB_URL}</a> {t("TERMS_ONE_CONTINUE")}</p>
                                <ul>
                                    <li>{t("TERMS_LIST_ONE")}
                                    </li>
                                    <li>{t("TERMS_LIST_TWO")}
                                    </li>
                                </ul>
                                <p>{t("TERMS_ONE_AFTER")}</p>
                                <p>{t("TERMS_ONE_SUB")}</p>
                                <ul>
                                    <li>{t("TERMS_ONE_SUB_LIST_ONE")}
                                    </li>
                                    <li>{t("TERMS_ONE_SUB_LIST_TWO")}
                                    </li>
                                </ul>

                                <p>{t("TERMS_TWO")} <b>{t("TERMS_TWO_SUB")}</b></p>
                                <p>{t("TERMS_THREE")}
                                </p>
                                <p>{t("TERMS_FOUR")}
                                </p>
                                <p>{t("TERMS_FIVE")}</p>
                                <p>{t("TERMS_SIX")}
                                </p>
                                <p>{t("TERMS_SEVEN")}</p>
                                <p>{t("TERMS_EIGHT")}
                                </p>
                                <p>{t("TERMS_NINE")} </p>
                            </div>
                        </div>
                        <div className="disclaimers">
                            <h3 className="heading">{t("DISCLAIMERS")}</h3>
                            <p>{t("PROTOCOLS_SERVICES")}</p>
                            <p>{t("PROTOCOLS_SERVICES_LIST_ONE")}
                            </p>
                            <p>{t("PROTOCOLS_SERVICES_LIST_TWO")}
                            </p>
                            <p>{t("PROTOCOLS_SERVICES_LIST_THREE")}</p>
                            <p>{t("PROTOCOLS_SERVICES_LIST_FOUR")}</p>
                            <p>{t("PROTOCOLS_SERVICES_LIST_FIVE")}
                            </p>
                            <ul>
                                <li>{t("PROTOCOLS_SERVICES_LIST_FIVE_SUB_ONE")}
                                </li>
                                <li>{t("PROTOCOLS_SERVICES_LIST_FIVE_SUB_TWO")}
                                </li>
                            </ul>
                            <p>{t("PROTOCOLS_SERVICES_LIST_SIX")}
                            </p>
                            <p>{t("PROTOCOLS_SERVICES_LIST_SEVEN")}</p>
                            <p>{t("PROTOCOLS_SERVICES_LIST_EIGHT")}</p>
                            <p>{t("PROTOCOLS_SERVICES_LIST_NINE")} </p>
                            <p>{t("PROTOCOLS_SERVICES_LIST_TEN")} </p>
                            <p>{t("PROTOCOLS_SERVICES_LIST_ELEVEN")}</p>
                        </div>
                        <div className="no-support">
                            <h3 className="heading">{t("NO_SUPPORT")}</h3>
                            <p>{t("NO_SUPPORT_LIST_ONE")}</p>
                            <p>{t("NO_SUPPORT_LIST_TWO")}</p>
                        </div>
                        <div className="restrictions">
                            <h3 className="heading">{t("LIMITED_USE_RESTRICTIONS")}</h3>
                            <p>{t("STAKING_PROTOCOLS_SERVICES_ONE")}</p>
                            <ul>
                                <li>{t("STAKING_PROTOCOLS_SERVICES_ONE_LIST_ONE")}
                                </li>
                                <li>{t("STAKING_PROTOCOLS_SERVICES_ONE_LIST_TWO")}
                                </li>
                                <li>{t("STAKING_PROTOCOLS_SERVICES_ONE_LIST_THREE")}
                                </li>
                            </ul>
                            <p>{t("STAKING_PROTOCOLS_SERVICES_ONE_SUB_TEXT")}</p>
                            <p>{t("STAKING_PROTOCOLS_SERVICES_TWO")}</p>
                            <ul>
                                <li>{t("STAKING_PROTOCOLS_SERVICES_TWO_LIST_ONE")}
                                </li>
                                <li>{t("STAKING_PROTOCOLS_SERVICES_TWO_LIST_TWO")}
                                </li>
                            </ul>
                            <p>{t("STAKING_PROTOCOLS_SERVICES_TWO_SUB_TITLE")}</p>
                            <ul>
                                <li>{t("STAKING_PROTOCOLS_SERVICES_TWO_SUB_LIST_ONE")}
                                </li>
                                <li>{t("STAKING_PROTOCOLS_SERVICES_TWO_SUB_LIST_TWO")}
                                </li>
                            </ul>
                        </div>
                        <div className="property-rights">
                            <h3 className="heading">{t("INTELLECTUAL_PROPERTY_RIGHTS")}</h3>
                            <p>{t("INTELLECTUAL_PROPERTY_RIGHTS_LIST_ONE")}
                            </p>
                            <p>{t("INTELLECTUAL_PROPERTY_RIGHTS_LIST_TWO")}
                            </p>
                        </div>
                        <div className="property-rights">
                            <h3 className="heading">{t("TERMINATION_WAIVERS")}</h3>
                            <p>{t("TERMINATION_WAIVERS_LIST_ONE")}
                            </p>
                            <p>{t("TERMINATION_WAIVERS_LIST_TWO")}</p>
                            <p>{t("TERMINATION_WAIVERS_LIST_THREE")}</p>
                            <p>{t("TERMINATION_WAIVERS_LIST_FOUR")}
                            </p>
                            <p>{t("TERMINATION_WAIVERS_LIST_FOUR")}</p>
                        </div>
                        <div className="property-rights">
                            <h3 className="heading">{t("USER_ACKNOWLEDGEMENTS")}</h3>
                            <p>{t("USER_ACKNOWLEDGEMENTS_LIST_ONE")}</p>
                            <ul>
                                <li>
                                {t("USER_ACKNOWLEDGEMENTS_LIST_ONE_SUB_ONE")}
                                </li>
                                <li>
                                 {t("USER_ACKNOWLEDGEMENTS_LIST_ONE_SUB_TWO")}
                                </li>
                                <li>
                                   {t("USER_ACKNOWLEDGEMENTS_LIST_ONE_SUB_TWO")}
                                </li>
                                <li>
                                  {t("USER_ACKNOWLEDGEMENTS_LIST_ONE_SUB_FOUR")}
                                </li>
                                <li>{t("USER_ACKNOWLEDGEMENTS_LIST_ONE_SUB_FIVE")}
                                </li>
                                <li>{t("USER_ACKNOWLEDGEMENTS_LIST_ONE_SUB_SIX")}
                                </li>
                                <li>{t("USER_ACKNOWLEDGEMENTS_LIST_ONE_SUB_SEVEN")}
                                </li>
                                <li>{t("USER_ACKNOWLEDGEMENTS_LIST_ONE_SUB_EIGHT")}
                                </li>
                                <li>{t("USER_ACKNOWLEDGEMENTS_LIST_ONE_SUB_NINE")}
                                </li>
                                <li>{t("USER_ACKNOWLEDGEMENTS_LIST_ONE_SUB_TEN")}
                                </li>
                            </ul>
                            <p>{t("USER_ACKNOWLEDGEMENTS_LIST_TWO")}</p>
                            <ul>
                                <li>{t("USER_ACKNOWLEDGEMENTS_LIST_TWO_SUB_ONE")}
                                </li>
                                <li>{t("USER_ACKNOWLEDGEMENTS_LIST_TWO_SUB_ONE")}
                                </li>
                            </ul>
                            <p>{t("USER_ACKNOWLEDGEMENTS_LIST_THREE")}</p>
                            <p>{t("USER_ACKNOWLEDGEMENTS_LIST_FOUR")}
                            </p>
                            <p>{t("USER_ACKNOWLEDGEMENTS_LIST_FIVE")}</p>
                            <p>{t("USER_ACKNOWLEDGEMENTS_LIST_SIX")}</p>
                        </div>
                        <div className="indemnification">
                            <h3 className="heading">{t("INDEMNIFICATION")}
                            </h3>
                            <p>{t("INDEMNIFICATION_TITLE")}
                            </p>
                        </div>
                        <div className="limitations">
                            <h3 className="heading">{t("LIMITATIONS")}
                            </h3>
                            <p>{t("LIMITATIONS_TITLE_ONE")}
                            </p>
                            <ul>
                                <li>{t("LIMITATIONS_TITLE_ONE_LIST_ONE")}</li>
                                <li>{t("LIMITATIONS_TITLE_ONE_LIST_TWO")}
                                </li>
                            </ul>
                            <p>{t("LIMITATIONS_TITLE_ONE_SUB")}
                            </p>
                            <p>{t("LIMITATIONS_TITLE_TWO")}
                            </p>
                        </div>
                        <div className="miscellaneous">
                            <h3 className="heading">{t("MISCELLANEOUS")}
                            </h3>
                            <p>{t("MISCELLANEOUS_TITLE_ONE")}</p>
                            <p>{t("MISCELLANEOUS_TITLE_TWO")}</p>
                            <p> {t("MISCELLANEOUS_TITLE_THREE")}</p>
                            <p>{t("MISCELLANEOUS_TITLE_FOUR")}</p>
                            <ul>
                                <li>
                                {t("MISCELLANEOUS_TITLE_FOUR_LIST_ONE")}
                                </li>
                                <li>
                                 {t("MISCELLANEOUS_TITLE_FOUR_LIST_TWO")}
                                </li>
                                <li>  {t("MISCELLANEOUS_TITLE_FOUR_LIST_THREE")}
                                </li>
                                <li> {t("MISCELLANEOUS_TITLE_FOUR_LIST_FOUR")}
                                </li>
                                <li> {t("MISCELLANEOUS_TITLE_FOUR_LIST_FIVE")}
                                </li>
                                <li>{t("MISCELLANEOUS_TITLE_FOUR_LIST_SIX")}
                                </li>
                                <li>{t("MISCELLANEOUS_TITLE_FOUR_LIST_SEVEN")}
                                </li>
                                <li>{t("MISCELLANEOUS_TITLE_FOUR_LIST_EIGHT")}
                                </li>
                                <li>{t("MISCELLANEOUS_TITLE_FOUR_LIST_NINE")}</li>

                            </ul>
                            <p>{t("MISCELLANEOUS_TITLE_FIVE")}</p>

                        </div>
                    </div>
                </div>

                <Footer/>
            </div>
        </React.Fragment>
    );
}


export default Terms;
