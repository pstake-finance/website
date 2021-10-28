import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ReactGa from 'react-ga';
import {
    PSTAKE_MEDIUM_URL,
    PSTAKE_DOCS_URL,
    PSTAKE_FORUM_URL,
    PSTAKE_AIRDROP_URL,
    PSTAKE_APP_URL
} from '../constants/config';
import { useTranslation } from "react-i18next";

import Icon from "./Icon";
const Header = () => {
    const { t } = useTranslation();

    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
        setIsOpen(!isOpen );
        
    }
   
    useEffect(() => {
        document.body.classList = "";
        window.addEventListener("scroll", scrollNavigation, true);
       
    }, []);

  
    const scrollNavigation = () => {
        var doc = document.documentElement;
        var top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
        if (top > 50) {
            document.getElementById('nav-bar').classList.add('sticky-dark');
            document.getElementById('is-sticky').classList.add('is-sticky');
        }
        else {
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
    const onClickForum = () => {
        ReactGa.event({
            category: 'Forum',
            action: 'Clicked on Forum'
        })

    }
    const onClickNavApp = () => {
        ReactGa.event({
            category: 'App',
            action: 'Clicked on Navigation App'
        })

    }
    const onClickDocs = () => {
        ReactGa.event({
            category: 'DOCS',
            action: 'Clicked on Docs'
        })

    }


    return (
        <React.Fragment>
            <div id="is-sticky">
                <nav className={"navbar navbar-expand-lg fixed-top navbar-custom sticky " + window.location.pathname.split('/')[1]} id="nav-bar">

                    <div className="container mb-pad">
                        <Link className="navbar-brand logo text-uppercase" to="/">
                        </Link>
                        <button className="navbar-toggler" onClick={toggleMenu} type="button">
                            <Icon viewClass="social_icon_img" icon="hamberger" />
                        </button>
                        <div className={isOpen ? "collapse navbar-collapse show" : "collapse navbar-collapse"} style={{ display: isOpen ? "inline-grid" : "" }} id="navbarCollapse">
                            <ul className={isOpen ? "navbar-nav navbar-left" : "navbar-nav ml-auto navbar-left"} id="mySidenav">
                                <li className="nav-item"><a href={PSTAKE_MEDIUM_URL} target="_blank" onClick={onClickBlog} rel="noopener noreferrer" className="nav-link">{t("BLOG")} </a></li>
                                <li className="nav-item"><a href={PSTAKE_DOCS_URL} target="_blank" onClick={onClickDocs} rel="noopener noreferrer" className="nav-link">{t("DOCS")} </a></li>


                                <li className="nav-item"><a href={PSTAKE_FORUM_URL} target="_blank" onClick={onClickForum} rel="noopener noreferrer" className="nav-link">{t("FORUM")}</a></li>


                                <li className="nav-item" style={{ marginLeft: '0', marginRight: '0' }}><a style={{ padding: '0' }} onClick={onClickNavApp} href={PSTAKE_AIRDROP_URL} target="_blank" rel="noopener noreferrer" className="nav-link"><span className="nav-link pophover tooltip-multiline app-btn">{t("AIRDROP")} </span></a></li>

                                <li className="nav-item" style={{ marginLeft: '10px', marginRight: '0' }}><a style={{ padding: '0' }} onClick={onClickNavApp} href={PSTAKE_APP_URL} target="_blank" rel="noopener noreferrer" className="nav-link"><span className="nav-link pophover tooltip-multiline app-btn">{t("GO_TO_APP")}</span></a></li>

                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </React.Fragment >
    );

};

export default Header;


