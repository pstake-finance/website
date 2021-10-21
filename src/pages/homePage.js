import React from 'react';
import SectionOne from '../Containers/HomePage/section1';
import SectionTwo from '../Containers/HomePage/section2';
import LeadingPOS from '../Containers/HomePage/LeadingPOS';
import FeactureBlog from '../Containers/HomePage/feactureBlog';
import StakeAssets from '../Containers/HomePage/stakeAssets';
import Audited from '../Containers/HomePage/audited';
import Footer from "../Containers/HomePage/Footer";
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