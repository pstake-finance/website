import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.svg';
import Icon from "../components/Icon";
class Header extends Component {
    constructor(props) {
        super(props);
        this.state = { Tab: '', isOpen: false };

        this.toggleMenu = this.toggleMenu.bind(this);
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
          var top = (window.pageYOffset || doc.scrollTop)  - (doc.clientTop || 0);
          if(top > 80)
          {
               document.getElementById('nav-bar').classList.add('sticky-dark');
               document.getElementById('is-sticky').classList.add('is-sticky');
          }
          else
          {
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

    render() {

        return (
            <React.Fragment>
                <div id="is-sticky">
                    <nav className="navbar navbar-expand-lg fixed-top navbar-custom sticky" id="nav-bar">
                        <div className="container">
                            <Link className="navbar-brand logo text-uppercase" to="/">
                            <img src={logo} alt="logo" title="logo"/></Link>
                            <button className="navbar-toggler" onClick={this.toggleMenu} type="button">
                            <Icon viewClass="social_icon_img" icon="hamberger"/>
                            </button>
                            <div className={this.state.isOpen ? "collapse navbar-collapse show" : "collapse navbar-collapse"} style={{ display : this.state.isOpen ? "inline-grid" : "" }} id="navbarCollapse">   
                                    <ul className={this.state.isOpen ? "navbar-nav navbar-left" : "navbar-nav ml-auto navbar-left"} id="mySidenav">
                                        <li className="nav-item"><span className="nav-link pophover tooltip-multiline" data-tooltip="Coming Soon!">WHITEPAPER </span></li>
                                        <li className="nav-item"><span className="nav-link pophover tooltip-multiline" data-tooltip="Coming Soon!">DOCS </span></li>
                                     
                                        
                                        <li className="nav-item"><a href="https://discord.com/invite/SaBKpjbnhH" target="_blank" rel="noopener noreferrer" className="nav-link">DISCORD</a></li>
                                        <li className="nav-item"><span className="nav-link pophover tooltip-multiline app-btn" data-tooltip="Coming Soon!" href="/" target="_blank" rel="noopener noreferrer"> APP</span></li>        
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


