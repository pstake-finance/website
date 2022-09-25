import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import ReactGa from 'react-ga';

import {
    PSTAKE_TWITTER_URL,
    STK_ATOM_TWITTER_URL,
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
    STK_BNB_SECURITY_AUDIT_URL, IMMUNEFI_WEB_URL, STK_BNB_TWITTER_URL

} from '../constants/config';
import { useTranslation } from "react-i18next";

import Icon from "./Icon";

const Header = () => {

    const { t } = useTranslation();
    const [banner, setBanner] = useState(true);
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

    const onClickNavApp = () => {
        ReactGa.event({
            category: 'App',
            action: 'Clicked on Navigation App'
        })

    }

    const closeBanner = () => {
        setBanner(false);
    }

    let auditURL;
    let docsURL;
    let faqURL;
    let twitterUrl;
    let appURL;

    if (window.location.pathname === "/"){
        auditURL = SECURITY_AUDIT_URL;
        docsURL =  DOCS_URL;
        faqURL = GUIDES_FAQ_URL;
        twitterUrl = PSTAKE_TWITTER_URL;
        appURL = PSTAKE_APP_URL;
    }else if (window.location.pathname === "/bnb"){
        auditURL = STK_BNB_SECURITY_AUDIT_URL;
        docsURL = STK_BNB_DOCS_URL;
        faqURL = STK_FAQ_URL;
        twitterUrl = STK_BNB_TWITTER_URL;
        appURL = BNB_URL;
    }else if (window.location.pathname === "/atom"){
        twitterUrl = STK_ATOM_TWITTER_URL
    }

    return (
        <React.Fragment>
            <div id="is-sticky" className="top-bar">
                {window.location.pathname === "/bnb" ?
                    <div className={!banner ? 'd-none' : "top-banner-section"}>
                        <a className="content" href="https://galaxy.eco/pSTAKE/campaign/GCnmjUt4CL" target="_blank"
                           rel="noopener noreferrer">
                            Earn up to 52% APY on your BNB in the first ever <b>BNB Stake-to-Earn campaign</b> in Web3 history
                            <Icon viewClass="right-arrow" icon="right-arrow"/>
                        </a>
                        <div onClick={closeBanner}>
                            <Icon viewClass="close" icon="close"/>
                        </div>
                    </div>
                    : null
                }
                <nav className={"navbar navbar-expand-lg navbar-custom sticky " + window.location.pathname.split('/')[1]} id="nav-bar">
                    <div className="container mb-pad">
                        <Link className="navbar-brand logo text-uppercase" to="/">
                        </Link>
                        <button className="navbar-toggler" onClick={toggleMenu} type="button">
                            <Icon viewClass="social_icon_img" icon="hamberger" />
                        </button>
                        <div className={isOpen ? "collapse navbar-collapse show" : "collapse navbar-collapse"} style={{ display: isOpen ? "inline-grid" : "" }} id="navbarCollapse">
                            <ul className={isOpen ? "navbar-nav navbar-left" : "navbar-nav ml-auto navbar-left"} id="mySidenav">
                                {window.location.pathname !== "/atom" ?
                                    <li className="nav-item nav__menu-item">
                                        <p className="nav-link chevron m-0">{t("LEARN")}
                                            {!chevronChange ?
                                                <Icon viewClass="social_icon_img" icon="chevron"/>
                                                : <Icon viewClass="social_icon_img" icon="chevroncolorchange"/>
                                            }
                                        </p>
                                        <ul className="dropdown">
                                            <li>
                                                <a href={auditURL} target="_blank" rel="noopener noreferrer"
                                                   className="nav-link">
                                                    {t("SECURITY_AUDITS")}
                                                </a>
                                            </li>
                                            <li>
                                                <a href={GUIDES_URL} target="_blank" rel="noopener noreferrer"
                                                   className="nav-link">{t("GUIDES_TUTORIALS")}
                                                </a>
                                            </li>
                                            <li>
                                                <a href={docsURL} target="_blank" rel="noopener noreferrer"
                                                   className="nav-link">
                                                    {t("DOCS")}
                                                </a>
                                            </li>
                                            <li>
                                                <a href={faqURL} target="_blank" rel="noopener noreferrer"
                                                   className="nav-link">
                                                    {t("FAQs")}
                                                </a>
                                            </li>

                                        </ul>

                                    </li>
                                    : ""
                                }
                                {window.location.pathname !== "/atom" ?
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
                                            <li><a href={twitterUrl} target="_blank" rel="noopener noreferrer"><Icon viewClass="social_icon_img" icon="twitter-logo" /></a>
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

                                </li> : ""}

                                {window.location.pathname === "/" ?
                                    <li className="nav-item nav__menu-item">
                                        <p className="nav-link chevron m-0">
                                            {t("BRIDGE")}
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
                                    : ''
                                }

                                {window.location.pathname === "/bnb" ?
                                    <li className="nav-item" style={{ marginLeft: '10px', marginRight: '0' }}>
                                        <a style={{ padding: '0' }} href={IMMUNEFI_WEB_URL} target="_blank" rel="noopener noreferrer" className="nav-link">
                                              <div className="nav-link pophover tooltip-multiline app-btn immunefi p-l-3">
                                              </div>
                                        </a>
                                    </li>
                                    : ""
                                }
                                {window.location.pathname !== "/atom" ?
                                    <li className="nav-item" style={{marginLeft: '10px', marginRight: '0'}}>
                                        <a style={{padding: '0'}} onClick={onClickNavApp} href={appURL} target="_blank"
                                           rel="noopener noreferrer" className="nav-link">
                                        <span className="nav-link pophover tooltip-multiline app-btn">
                                            {t("GO_TO_APP")}
                                        </span>
                                        </a>
                                    </li>
                                    : ""
                                }
                                {window.location.pathname === "/atom" ?
                                    <li className="nav-item" style={{marginLeft: '10px', marginRight: '0'}}>
                                        <a style={{padding: '0'}} onClick={onClickNavApp} href={appURL} target="_blank"
                                           rel="noopener noreferrer" className="nav-link">
                                            COMING SOON
                                        </a>
                                    </li>
                                    : ""
                                }
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </React.Fragment >
    );

};

export default Header;


