import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.svg';
class Header extends Component {
    constructor(props) {
        super(props);
        this.state = { Tab: '', isOpen: false };

        this.toggleMenu = this.toggleMenu.bind(this);
    }

    toggleMenu = () => {
        this.setState({ isOpen: !this.state.isOpen });
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
                                <i className="mdi mdi-menu"></i>
                            </button>
                            <div className={this.state.isOpen ? "collapse navbar-collapse show" : "collapse navbar-collapse"} style={{ display : this.state.isOpen ? "inline-grid" : "" }} id="navbarCollapse">   
                                    <ul className={this.state.isOpen ? "navbar-nav navbar-left" : "navbar-nav ml-auto navbar-left"} id="mySidenav">
                                        <li className="nav-item"><Link className="nav-link" to="/about">WHITEPAPER</Link></li>
                                        <li className="nav-item"><Link className="nav-link" to="/validators">DOCS</Link></li>
                                        <li className="nav-item"><Link className="nav-link" to="/ecosystem">FORUM</Link></li>
                                        <li className="nav-item"><button type="button" className="btn btn-custom navbar-btn btn-rounded waves-effect waves-light">APP</button></li>        
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


