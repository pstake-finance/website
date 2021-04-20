import React from 'react';
import SectionOne from '../Containers/HomePage/section1';
import SectionTwo from '../Containers/HomePage/section2';
import InfoSection from "../Containers/HomePage/InfoSection";
import PStakeUses from "../Containers/HomePage/pStakeUses";
import Footer from "../Containers/HomePage/Footer";
import Contact from "../Containers/HomePage/contact";
const homePage = () => {
        return (
            <React.Fragment>
                <div className="container-fluid">
                    <SectionOne />
                    <InfoSection/>
                    <SectionTwo />
                    <PStakeUses/>
                    <Contact/>
                    <Footer/>
                </div>
            </React.Fragment >
        );
    }


export default homePage;