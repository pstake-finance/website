import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ReactGa from 'react-ga';
import Alert from 'react-bootstrap/Alert';
import logo from '../assets/logo.svg';
import close from '../assets/close_icon.png';
import rightarrow from '../assets/right-arrow.png';
import vectorarrow from '../assets/Vector.png';
import Icon from "../components/Icon";
class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Tab: '',
            isOpen: false,
            bannerInfo: true

        };

        this.toggleMenu = this.toggleMenu.bind(this);
        this.toggleMenu = this.toggleMenu.bind(this);
        this.onClickBlog = this.onClickBlog.bind(this);
        this.onClickTopBar = this.onClickTopBar.bind(this);
        this.onClickDocs = this.onClickDocs.bind(this);
        this.onClickDiscord = this.onClickDiscord.bind(this);
        this.onClickNavApp = this.onClickNavApp.bind(this);
    }
    closeBanner = () => {
        this.setState({ bannerInfo: false });
    }
    toggleMenu = () => {
        this.setState({ isOpen: !this.state.isOpen });
    }
    componentDidMount() {
        document.body.classList = "";
        window.addEventListener("scroll", this.scrollNavigation, true);
    }

    scrollNavigation = () => {
        var doc = document.documentElement;
        var top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
        if (top > 80) {
            document.getElementById('nav-bar').classList.add('sticky-dark');
            document.getElementById('is-sticky').classList.add('is-sticky');
        }
        else {
            document.getElementById('nav-bar').classList.remove('sticky-dark');
            document.getElementById('is-sticky').classList.remove('is-sticky');
        }
    }
    /**
     * Sets active tab
     */
    setActiveTab = (tab, e) => {
        this.setState({ Tab: tab });
    }
    onClickTopBar = () => {
        ReactGa.event({
            category: 'TOP BAR',
            action: 'Clicked on Topbar'
        })

    }
    onClickBlog = () => {
        ReactGa.event({
            category: 'BLOG',
            action: 'Clicked on Blog'
        })

    }
    onClickDiscord = () => {
        ReactGa.event({
            category: 'Discord',
            action: 'Clicked on Discord'
        })

    }
    onClickNavApp = () => {
        ReactGa.event({
            category: 'App',
            action: 'Clicked on Navigation App'
        })

    }
    onClickDocs = () => {
        ReactGa.event({
            category: 'DOCS',
            action: 'Clicked on Docs'
        })

    }
    render() {

        return (
            <React.Fragment>
                <div id="is-sticky">
                    <nav className="navbar navbar-expand-lg fixed-top navbar-custom sticky" id="nav-bar">
                        <div className="container-fluid bannernav-section">
                            {this.state.bannerInfo ?
                                <div className="container">
                                    <Alert className="nav-banner alert-dismissible">
                                        <p>
                                            <a href="https://medium.com/@pstakefinance/pstake-alpha-release-bug-bounty-full-details-837b52fcdee5" rel="noopener noreferrer"
                                                target="_blank">
                                                <span onClick={this.onClickTopBar}><img src={vectorarrow} alt="arrow" />&nbsp; Participate in pSTAKE's bug bounty program to earn upto $25k worth of rewards</span>&nbsp;
                                                <img src={rightarrow} alt="arrow" /></a>
                                        </p>
                                        <img src={close} alt="close" className="close" onClick={this.closeBanner}/>
                                    </Alert>
                                </div>
                                : null}


                        </div>
                        <div className="container mb-pad">
                            <Link className="navbar-brand logo text-uppercase" to="/">
                                <img src={logo} alt="logo" title="logo" /></Link>
                            <button className="navbar-toggler" onClick={this.toggleMenu} type="button">
                                <Icon viewClass="social_icon_img" icon="hamberger" />
                            </button>
                            <div className={this.state.isOpen ? "collapse navbar-collapse show" : "collapse navbar-collapse"} style={{ display: this.state.isOpen ? "inline-grid" : "" }} id="navbarCollapse">
                                <ul className={this.state.isOpen ? "navbar-nav navbar-left" : "navbar-nav ml-auto navbar-left"} id="mySidenav">
                                    <li className="nav-item"><a href="https://medium.com/@pstakefinance" target="_blank" onClick={this.onClickBlog} rel="noopener noreferrer" className="nav-link">BLOG </a></li>
                                    <li className="nav-item"><a href="https://docs.pstake.finance" target="_blank" onClick={this.onClickDocs} rel="noopener noreferrer" className="nav-link">DOCS </a></li>


                                    <li className="nav-item"><a href="https://discord.com/invite/SaBKpjbnhH" target="_blank" onClick={this.onClickDiscord} rel="noopener noreferrer" className="nav-link">DISCORD</a></li>
                                    {/* <li className="nav-item"><span className="nav-link pophover tooltip-multiline app-btn" data-tooltip="Coming Soon!" href="/" target="_blank" rel="noopener noreferrer"> APP</span></li> */}
                                    <li className="nav-item"><a style={{ padding: '0' }} onClick={this.onClickNavApp} href="http://alpha.pstake.finance" target="_blank" rel="noopener noreferrer" className="nav-link"><span className="nav-link pophover tooltip-multiline app-btn"> APP</span></a></li>        
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </React.Fragment >
        );
    }
}

export default Header;


