import React from 'react';
import SectionOne from '../containers/homepage/SectionOne';
import SectionTwo from '../containers/homepage/SectionTwo';
import LeadingPOS from '../containers/homepage/LeadingPOS';
import FeactureBlog from '../containers/homepage/FeactureBlog';
import StakeAssets from '../containers/homepage/StakeAssets';
import Audited from '../containers/homepage/Audited';
import Footer from "../components/Footer";
const homePage = () => {
        return (
            <React.Fragment>
                <div className="container-fluid p-0">
                    <SectionOne />
                    <LeadingPOS />
                    <StakeAssets />
                    <SectionTwo />
                    <Audited />
                    <FeactureBlog />
                    <Footer/>
                </div>
            </React.Fragment >
        );
    }


export default homePage;