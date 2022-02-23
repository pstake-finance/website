import React from 'react';
import SectionOne from '../containers/homepage/SectionOne';
import SectionTwo from '../containers/homepage/SectionTwo';
// import LeadingPOS from '../containers/homepage/LeadingPOS';
import FeactureBlog from '../containers/homepage/FeactureBlog';
import StakeAssets from '../containers/homepage/StakeAssets';
// import Audited from '../containers/homepage/Audited';
import Investors from '../containers/tokensale/Investors';
import Featured from '../containers/homepage/Featured';
// import Validators from '../containers/tokensale/Validators';
import Footer from "../components/Footer";
const homePage = () => {
    return (
        <React.Fragment>
            <div className="container-fluid p-0 tokensale">
                <SectionOne />
                {/* <LeadingPOS /> */}
                <StakeAssets />
                <SectionTwo />
                {/* <Audited /> */}
                <div className="investors-sectiondisplay">
                {/* <Validators /> */}

                <Investors />
                </div>
                <FeactureBlog />
                <Featured />
                <Footer />
            </div>
        </React.Fragment >
    );
}


export default homePage;