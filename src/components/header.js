import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ReactGa from 'react-ga';
import Alert from 'react-bootstrap/Alert';
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
        this.onClickForum = this.onClickForum.bind(this);
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
        if (top > 50) {
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
    onClickForum = () => {
        ReactGa.event({
            category: 'Forum',
            action: 'Clicked on Forum'
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
                                            <a href="https://app.pstake.finance/" target="_blank" rel="noopener noreferrer"
                                                >
                                                <span onClick={this.onClickTopBar}><img src={vectorarrow} alt="arrow" />&nbsp; pSTAKE Beta is live. Stake your ATOM now!</span>&nbsp;
                                                <img src={rightarrow} alt="arrow" /></a>
                                        </p>
                                        <img src={close} alt="close" className="close" onClick={this.closeBanner}/>
                                    </Alert>
                                </div>
                                : null}


                        </div>
                        <div className="container mb-pad">
                            <Link className="navbar-brand logo text-uppercase" to="/">
                               </Link>
                            <button className="navbar-toggler" onClick={this.toggleMenu} type="button">
                                <Icon viewClass="social_icon_img" icon="hamberger" />
                            </button>
                            <div className={this.state.isOpen ? "collapse navbar-collapse show" : "collapse navbar-collapse"} style={{ display: this.state.isOpen ? "inline-grid" : "" }} id="navbarCollapse">
                                <ul className={this.state.isOpen ? "navbar-nav navbar-left" : "navbar-nav ml-auto navbar-left"} id="mySidenav">
                                    <li className="nav-item"><a href="https://pstake.medium.com/" target="_blank" onClick={this.onClickBlog} rel="noopener noreferrer" className="nav-link">BLOG </a></li>
                                    <li className="nav-item"><a href="https://docs.pstake.finance" target="_blank" onClick={this.onClickDocs} rel="noopener noreferrer" className="nav-link">DOCS </a></li>


                                    <li className="nav-item"><a href="https://forum.pstake.finance/" target="_blank" onClick={this.onClickForum} rel="noopener noreferrer" className="nav-link">FORUM</a></li>
                                    <li className="nav-item"><a href="https://docs.google.com/forms/d/e/1FAIpQLSe6oYvc2ffDtbnTbfrMYtkUG9vKcyzVoLxplFtF0XxNNjbGQg/viewform" target="_blank" rel="noopener noreferrer" className="nav-link">RAISE A TICKET</a></li>
                                    <li className="nav-item">  <Link className="nav-link" to="/stakeDropXPRT">STAKEDROP</Link></li>
                                    
                                    {/* <li className="nav-item"><span className="nav-link pophover tooltip-multiline app-btn" data-tooltip="Coming Soon!" href="/" target="_blank" rel="noopener noreferrer"> APP</span></li> */}
                                    <li className="nav-item"><a style={{ padding: '0' }} onClick={this.onClickNavApp} href="https://app.pstake.finance/" target="_blank" rel="noopener noreferrer" className="nav-link"><span className="nav-link pophover tooltip-multiline app-btn"> Go to App</span></a></li>        
                               
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


