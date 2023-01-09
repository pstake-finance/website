import React from 'react';
import useTranslation from 'next-translate/useTranslation';
import {Table} from "react-bootstrap";
import Footer from "../components/Footer";
import {
    PSTAKE_WEB_URL,CHORME_URL,
    FIREFOX_URL,
    SAFARI_URL,
    IE_URL } from '../constants/config';
const Privacy = () => {
    const { t } = useTranslation('common');
    return (
        <React.Fragment>
            <div className="container-fluid p-0 terms-sections">
                <div className="container">
                    <div className="row">
                        <div className="main-banner-section">
                            <h1 className="banner-heading">{t("PRIVACY_POLICY_TITLE_TWO")}</h1>
                        </div>
                    </div>
                </div>
                <div className="terms-content">
                    <div className="container">
                        <div className="general-terms">
                            <h3 className="heading">{t("GENERAL")}</h3>
                            <p className="sub-heading">{t("GENERAL_TITLE_ONE")}</p>
                            <p>{t("GENERAL_TITLE_ONE_SUB")} <a href={PSTAKE_WEB_URL} rel="noopener noreferrer" target="_blank">{PSTAKE_WEB_URL}</a> {t("GENERAL_TITLE_ONE_SUB_CONTINUE")} </p>
                            <p>{t("GENERAL_TITLE_ONE_SUB_TWO")}</p>
                            <p className="sub-heading">{t("GENERAL_TITLE_TWO")}</p>
                            <Table bordered>
                                <thead>
                                <tr>
                                    <th>{t("GENERAL_TITLE_TWO_THEAD_ONE")}</th>
                                    <th>{t("GENERAL_TITLE_TWO_THEAD_TWO")}</th>
                                    <th>{t("GENERAL_TITLE_TWO_THEAD_THREE")}</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>{t("GENERAL_TITLE_TWO_THEAD_ROW_ONE")}</td>
                                    <td>{t("GENERAL_TITLE_TWO_THEAD_ROW_TWO")}</td>
                                    <td>{t("GENERAL_TITLE_TWO_THEAD_ROW_THREE")}</td>
                                </tr>
                                <tr>
                                    <td>{t("GENERAL_TITLE_TWO_THEAD_ROW_FOUR")}</td>
                                    <td>{t("GENERAL_TITLE_TWO_THEAD_ROW_FIVE")}</td>
                                    <td>{t("GENERAL_TITLE_TWO_THEAD_ROW_SIX")}</td>
                                </tr>
                                <tr>
                                    <td>{t("GENERAL_TITLE_TWO_THEAD_ROW_SEVEN")}</td>
                                    <td>{t("GENERAL_TITLE_TWO_THEAD_ROW_EIGHT")}</td>
                                    <td>{t("GENERAL_TITLE_TWO_THEAD_ROW_NINE")}
                                    </td>
                                </tr>
                                </tbody>
                            </Table>
                            <p>{t("GENERAL_TITLE_ONE_SUB_THREE")}</p>
                            <p className="sub-heading">
                            {t("GENERAL_TITLE_THREE")}
                            </p>
                            <p>{t("GENERAL_TITLE_THREE_SUB_ONE")}
                            </p>
                            <p>{t("GENERAL_TITLE_THREE_SUB_TWO")}</p>
                            <p>{t("GENERAL_TITLE_THREE_SUB_THREE")}
                            </p>
                            <p>{t("GENERAL_TITLE_THREE_SUB_FOUR")}</p>
                            <ul>
                                <li>{t("GENERAL_TITLE_THREE_SUB_FOUR_LIST_ONE")}
                                    <a href={CHORME_URL} rel="noopener noreferrer" target="_blank"> {t("GENERAL_TITLE_THREE_SUB_FOUR_LIST_ONE_CONTINUE")}</a>
                                </li>
                                <li>{t("GENERAL_TITLE_THREE_SUB_FOUR_LIST_TWO")} <a href={FIREFOX_URL} rel="noopener noreferrer" target="_blank">{t("GENERAL_TITLE_THREE_SUB_FOUR_LIST_TWO_CONTINUE")}</a>
                                </li>
                                <li>{t("GENERAL_TITLE_THREE_SUB_FOUR_LIST_THREE")} <a href={SAFARI_URL} rel="noopener noreferrer" target="_blank">{t("GENERAL_TITLE_THREE_SUB_FOUR_LIST_THREE_CONTINUE")}</a></li>
                                <li>{t("GENERAL_TITLE_THREE_SUB_FOUR_LIST_FOUR")} <a href={IE_URL} rel="noopener noreferrer" target="_blank">{t("GENERAL_TITLE_THREE_SUB_FOUR_LIST_FOUR_CONTINUE")}</a>
                                </li>

                            </ul>
                            <p className="sub-heading">{t("GENERAL_TITLE_FOUR")}</p>
                            <p>{t("GENERAL_TITLE_FOUR_SUB_ONE")}
                            </p>
                            <p>{t("GENERAL_TITLE_FOUR_SUB_TWO")}</p>
                            <p className="sub-heading">{t("GENERAL_TITLE_FIVE")}
                            </p>
                            <p>{t("GENERAL_TITLE_FIVE_SUB_ONE")}
                            </p>
                            <ul>
                                <li>{t("GENERAL_TITLE_FIVE_LIST_ONE")}
                                </li>
                                <li>{t("GENERAL_TITLE_FIVE_LIST_TWO")}
                                </li>
                                <li>{t("GENERAL_TITLE_FIVE_LIST_THREE")}
                                </li>
                                <li>{t("GENERAL_TITLE_FIVE_LIST_FOUR")}</li>
                                <li>{t("GENERAL_TITLE_FIVE_LIST_FIVE")}
                                </li>
                            </ul>
                            <p>{t("GENERAL_TITLE_FIVE_SUB_TWO")}</p>
                            <p className="sub-heading">{t("GENERAL_TITLE_SIX")}</p>
                            <p>{t("GENERAL_TITLE_SIX_SUB_ONE")}
                            </p>
                            <ul>
                                <li>{t("GENERAL_TITLE_SIX_SUB_ONE_LIST_ONE")}
                                </li>
                                <li>{t("GENERAL_TITLE_SIX_SUB_ONE_LIST_TWO")}
                                </li>
                                <li>{t("GENERAL_TITLE_SIX_SUB_ONE_LIST_THREE")}
                                </li>
                            </ul>
                            <p>{t("GENERAL_TITLE_SIX_SUB_TWO")}
                            </p>
                            <p className="sub-heading">{t("GENERAL_TITLE_SEVEN")}</p>
                            <p>{t("GENERAL_TITLE_SEVEN_SUB_ONE")}</p>
                            <p className="sub-heading">{t("GENERAL_TITLE_EIGHT")}</p>
                            <p>{t("GENERAL_TITLE_EIGHT_SUB_ONE")}  <a href={PSTAKE_WEB_URL} rel="noopener noreferrer" target="_blank">{PSTAKE_WEB_URL}</a>
                            </p>
                            <p>{t("GENERAL_TITLE_EIGHT_SUB_TWO")}</p>
                            <p className="sub-heading">{t("GENERAL_TITLE_NINE")}</p>
                            <p>{t("GENERAL_TITLE_NINE_SUB_ONE")}
                            </p>
                            <p>{t("GENERAL_TITLE_NINE_SUB_TWO")}
                            </p>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        </React.Fragment>
    )
};
export default Privacy;
