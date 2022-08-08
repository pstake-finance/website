import React from 'react';
import SectionOne from '../containers/homepage/SectionOne';
import SectionTwo from '../containers/homepage/SectionTwo';
import FeactureBlog from '../containers/homepage/FeactureBlog';
import StakeAssets from '../containers/homepage/StakeAssets';
import Investors from '../containers/tokensale/Investors';
import Footer from "../components/Footer";
const homePage = () => {
    return (
        <React.Fragment>
            <div className="container-fluid p-0 tokensale home-page">
                <SectionOne />
                <StakeAssets />
                <SectionTwo />
                <div className="investors-sectiondisplay">
                    <Investors />
                </div>
                <FeactureBlog />
                <Footer />
            </div>
        </React.Fragment >
    );
}


export default homePage;