import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import ReactGa from 'react-ga';

import {
    PSTAKE_MEDIUM_URL,
    PSTAKE_TWITTER_URL,
    PSTAKE_TELEGRAM_URL,
    SECURITY_AUDIT_URL,
    GUIDES_FAQ_URL,
    DOCS_URL,
    SNANPSHOT_URL,
    PSTAKE_FORUM_URL,
    PSTAKE_APP_URL,
    PSTAKE_BRIDGE_URL,
    BSC_BRIDGE_URL,
    GUIDES_URL,
    STK_FAQ_URL,
    STK_BNB_DOCS_URL,
    BNB_URL,
    DISCORD_URL,
    STK_BNB_SECURITY_AUDIT_URL, IMMUNEFI_WEB_URL

} from '../constants/config';
import { useTranslation } from "react-i18next";

import immunefi from "../assets/audits/immunefi_header.svg";
import Icon from "./Icon";

const Header = () => {
    const { t } = useTranslation();

    const [isOpen, setIsOpen] = useState(false);
    const [chevronChange, setChevronChange] = useState(false);
    const toggleMenu = () => {
        setIsOpen(!isOpen);

    }

    useEffect(() => {
        document.body.classList = "";
        window.addEventListener("scroll", scrollNavigation, true);

    }, []);


    const scrollNavigation = () => {
        var doc = document.documentElement;
        var top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
        if (top > 50) {
            setChevronChange(true);
            document.getElementById('nav-bar').classList.add('sticky-dark');
            document.getElementById('is-sticky').classList.add('is-sticky');
        }
        else {
            setChevronChange(false);

            document.getElementById('nav-bar').classList.remove('sticky-dark');
            document.getElementById('is-sticky').classList.remove('is-sticky');
        }
    }

    const onClickBlog = () => {
        ReactGa.event({
            category: 'BLOG',
            action: 'Clicked on Blog'
        })

    }

    const onClickNavApp = () => {
        ReactGa.event({
            category: 'App',
            action: 'Clicked on Navigation App'
        })

    }

    return (
        <React.Fragment>
            <div id="is-sticky" className="top-bar">
                <nav className={"navbar navbar-expand-lg navbar-custom sticky " + window.location.pathname.split('/')[1]} id="nav-bar">
                    <div className="container mb-pad">
                        <Link className="navbar-brand logo text-uppercase" to="/">
                        </Link>
                        <button className="navbar-toggler" onClick={toggleMenu} type="button">
                            <Icon viewClass="social_icon_img" icon="hamberger" />
                        </button>
                        <div className={isOpen ? "collapse navbar-collapse show" : "collapse navbar-collapse"} style={{ display: isOpen ? "inline-grid" : "" }} id="navbarCollapse">
                            <ul className={isOpen ? "navbar-nav navbar-left" : "navbar-nav ml-auto navbar-left"} id="mySidenav">
                                {window.location.pathname === "/" ?

                                    <li className="nav-item nav__menu-item">
                                        <p className="nav-link chevron m-0">
                                            {t("BRIDGE")}
                                            {/*<Icon viewClass="social_icon_img" icon="nav-status"/>&nbsp;{t("BRIDGE")}*/}
                                            {!chevronChange ?
                                                <Icon viewClass="social_icon_img" icon="chevron"/>
                                                : <Icon viewClass="social_icon_img" icon="chevroncolorchange"/>
                                            }

                                        </p>
                                        <ul className="dropdown">
                                            <li>
                                                <a href={PSTAKE_BRIDGE_URL} target="_blank" rel="noopener noreferrer"
                                                   className="nav-link">Bridge to Ethereum
                                                </a>
                                            </li>
                                            <li>
                                                <a href={BSC_BRIDGE_URL} target="_blank" rel="noopener noreferrer"
                                                   className="nav-link">Bridge to BSC
                                                </a>
                                            </li>

                                        </ul>

                                    </li>
                                    //
                                    // <li className="nav-item nav__menu-item status">
                                    //     <a href={PSTAKE_BRIDGE_URL} target="_blank" onClick={onClickDocs}
                                    //        rel="noopener noreferrer" className="nav-link"><Icon
                                    //         viewClass="social_icon_img" icon="nav-status"/>&nbsp;{t("BRIDGE")}
                                    //     </a>
                                    // </li>
                                    : ''
                                }
                                <li className="nav-item nav__menu-item">

                                    <p className="nav-link chevron m-0">{t("LEARN")}
                                        {!chevronChange ?
                                            <Icon viewClass="social_icon_img" icon="chevron"/>
                                            : <Icon viewClass="social_icon_img" icon="chevroncolorchange"/>
                                        }
                                            </p>
                                    <ul className="dropdown">
                                        <li>
                                            <a href={window.location.pathname === "/bnb" ? STK_BNB_SECURITY_AUDIT_URL : SECURITY_AUDIT_URL} target="_blank" rel="noopener noreferrer" className="nav-link">
                                                {t("SECURITY_AUDITS")}
                                            </a>
                                        </li>
                                        <li>
                                            <a href={GUIDES_URL} target="_blank" rel="noopener noreferrer" className="nav-link">{t("GUIDES_TUTORIALS")}
                                            </a>
                                        </li>
                                        <li>
                                            <a href={window.location.pathname === "/bnb" ? STK_BNB_DOCS_URL : DOCS_URL} target="_blank" rel="noopener noreferrer" className="nav-link">
                                                {t("DOCS")}
                                            </a>
                                        </li>
                                        <li>
                                            <a href={window.location.pathname === "/bnb" ? STK_FAQ_URL: GUIDES_FAQ_URL} target="_blank" rel="noopener noreferrer" className="nav-link">
                                                {t("FAQs")}
                                            </a>
                                        </li>

                                    </ul>

                                </li>
                                <li className="nav-item nav__menu-item">

                                    <p className="nav-link chevron m-0">{t("COMMUNITY")}
                                        {!chevronChange ?
                                            <Icon viewClass="social_icon_img" icon="chevron"/>
                                            : <Icon viewClass="social_icon_img" icon="chevroncolorchange"/>
                                        }

                                    </p>
                                    <ul className="dropdown">
                                        <li><a href={PSTAKE_FORUM_URL} target="_blank" rel="noopener noreferrer" className="nav-link">{t("FORUM")}

                                        </a></li>
                                        <li><a href={SNANPSHOT_URL} target="_blank" rel="noopener noreferrer" className="nav-link">{t("GOVERNANCE")}

                                        </a></li>


                                        <ul className="socialicons">
                                            <li><a href={PSTAKE_TWITTER_URL} target="_blank" rel="noopener noreferrer"><Icon viewClass="social_icon_img" icon="twitter-logo" /></a>
                                            </li>
                                            <li>
                                                <a href={PSTAKE_TELEGRAM_URL} target="_blank" rel="noopener noreferrer" ><Icon viewClass="social_icon_ig" icon="telegram-plane" /></a>
                                            </li>
                                            <li>
                                                <a href={DISCORD_URL} target="_blank" rel="noopener noreferrer" >
                                                    <Icon viewClass="social_icon_img" icon="discord" />
                                                </a>
                                            </li>
                                        </ul>

                                    </ul>

                                </li>

                                <li className="nav-item"><a href={PSTAKE_MEDIUM_URL} target="_blank" onClick={onClickBlog} rel="noopener noreferrer" className="nav-link">{t("BLOG")} </a></li>
                                {window.location.pathname === "/bnb" ?
                                    <li className="nav-item" style={{ marginLeft: '10px', marginRight: '0' }}>
                                        <a style={{ padding: '0' }} href={IMMUNEFI_WEB_URL} target="_blank" rel="noopener noreferrer" className="nav-link">
                                              <span className="nav-link pophover tooltip-multiline app-btn p-l-3">
                                                <img src={immunefi} alt={"immunefi"} />
                                              </span>
                                        </a>
                                    </li>
                                    : ""}
                                <li className="nav-item" style={{ marginLeft: '10px', marginRight: '0' }}>
                                    <a style={{ padding: '0' }} onClick={onClickNavApp} href={window.location.pathname === "/bnb" ? BNB_URL : PSTAKE_APP_URL} target="_blank" rel="noopener noreferrer" className="nav-link">
                                        <span className="nav-link pophover tooltip-multiline app-btn">{t("GO_TO_APP")}
                                        </span>
                                    </a>
                                </li>

                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </React.Fragment >
    );

};

export default Header;


